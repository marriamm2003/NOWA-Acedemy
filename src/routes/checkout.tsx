import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { findModule, getCourse } from "@/lib/data";
import { useStore } from "@/lib/store";
import { money } from "@/components/humm/Shell";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — HUMM Academy" },
      { name: "description", content: "Review your selected course modules and complete a demo checkout." },
      { property: "og:title", content: "Checkout — HUMM Academy" },
      { property: "og:description", content: "Demo checkout for HUMM course modules." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Checkout,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  card: z.string().regex(/^4242 ?4242 ?4242 ?4242$/, "Demo mode: use test card 4242 4242 4242 4242"),
});

function Checkout() {
  const { bag, bagQuote, placeOrder } = useStore();
  const nav = useNavigate();
  const [err, setErr] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);

  if (!bag.length)
    return <div className="mx-auto max-w-xl px-5 py-24 text-center"><h1 className="text-4xl font-extrabold">Your bag is empty</h1><Link to="/courses" className="mt-4 inline-block rounded-full bg-tomato px-6 py-3 font-bold text-primary-foreground">Find a course</Link></div>;

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const r = schema.safeParse({ name: f.get("name"), email: f.get("email"), card: String(f.get("card") ?? "").trim() });
    if (!r.success) return setErr(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
    setErr({});
    setBusy(true);
    setTimeout(() => {
      const o = placeOrder();
      setBusy(false);
      if (o) nav({ to: "/kitchen", search: { order: o.id } });
    }, 700);
  };
  const field = "mt-1 w-full rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-tomato";

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-2">
      <form onSubmit={submit} noValidate className="space-y-4">
        <h1 className="text-4xl font-extrabold">Checkout</h1>
        <p className="rounded-2xl bg-mustard/50 p-4 text-sm"><b>Demo payment.</b> No payment provider is connected — no real money is charged. Use card <code>4242 4242 4242 4242</code>.</p>
        <label className="block font-bold">Name<input name="name" maxLength={100} className={field} /></label>{err.name && <p className="text-sm font-bold text-tomato">{err.name}</p>}
        <label className="block font-bold">Email<input name="email" type="email" maxLength={255} className={field} /></label>{err.email && <p className="text-sm font-bold text-tomato">{err.email}</p>}
        <label className="block font-bold">Card number<input name="card" inputMode="numeric" maxLength={19} placeholder="4242 4242 4242 4242" className={field} /></label>{err.card && <p className="text-sm font-bold text-tomato">{err.card}</p>}
        <button disabled={busy} className="w-full rounded-full bg-tomato py-4 text-lg font-extrabold text-primary-foreground shadow-pop disabled:opacity-60">{busy ? "Processing…" : `Pay ${money(bagQuote.total)} (demo)`}</button>
      </form>
      <aside className="h-fit rounded-[2rem] bg-card p-6 shadow-soft">
        <h2 className="text-2xl font-extrabold">Order summary</h2>
        {bagQuote.groups.map((g) => (
          <div key={g.slug} className="mt-4 border-b border-border pb-4">
            <b>{getCourse(g.slug)!.title}</b>
            {g.quote.lineIds.map((id) => { const m = findModule(id)!.module; return <p key={id} className="flex justify-between text-sm"><span>{m.title}</span><span>{m.bonus && g.quote.bonusUnlocked ? "FREE" : money(m.price)}</span></p>; })}
            {g.quote.discountApplied && <p className="flex justify-between text-sm font-bold text-forest"><span>Bundle discount</span><span>−{money(g.quote.discount)}</span></p>}
          </div>
        ))}
        <p className="mt-4 flex justify-between text-sm"><span>Original</span><s>{money(bagQuote.original)}</s></p>
        <p className="flex justify-between text-2xl font-extrabold"><span>Total</span><span>{money(bagQuote.total)}</span></p>
      </aside>
    </div>
  );
}
