import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SectionTitle } from "@/components/humm/Cards";

export const Route = createFileRoute("/creators")({
  head: () => ({
    meta: [
      { title: "From Passion to Business — HUMM Creators" },
      { name: "description", content: "Talent representation, course production, branding and launch support for food creators. Apply to HUMM." },
      { property: "og:title", content: "From Passion to Business — HUMM Creators" },
      { property: "og:description", content: "Turn your recipe or food product into a real business with HUMM." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Creators,
});

const services = ["Talent discovery & representation", "Project management", "Course production", "Personal branding", "Food photography & content planning", "Product development support", "Pricing & costing guidance", "Launch strategy", "Brand & product partnerships"];
const steps = ["Apply", "Discovery call", "Plan & produce", "Launch & grow"];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  type: z.enum(["Chef", "Food creator", "Small food business"], { message: "Choose one" }),
  idea: z.string().trim().min(20, "Tell us a bit more (20+ characters)").max(1000),
  link: z.union([z.literal(""), z.string().trim().url("Enter a full URL, e.g. https://…").max(255)]),
  consent: z.literal(true, { message: "Please confirm" }),
});

function Creators() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState<string>();
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const r = schema.safeParse({ name: f.get("name"), email: f.get("email"), type: f.get("type"), idea: f.get("idea"), link: f.get("link") ?? "", consent: f.get("consent") === "on" });
    if (!r.success) {
      setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    setErrors({});
    setSent(r.data.name.split(" ")[0]);
  };
  const field = "mt-1 w-full rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-tomato";
  const Err = ({ k }: { k: string }) => (errors[k] ? <p className="mt-1 text-sm font-bold text-tomato" role="alert">{errors[k]}</p> : null);

  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <SectionTitle eyebrow="From passion to business" title="Got the recipe? We'll help" accent="build the business." />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => <div key={s} className={`rounded-2xl p-5 font-bold ${["bg-leaf", "bg-mustard", "bg-card"][i % 3]}`}>{s}</div>)}
      </div>
      <ol className="mt-12 grid gap-4 md:grid-cols-4">{steps.map((s, i) => <li key={s} className="rounded-2xl bg-deep p-5 text-cream"><span className="font-serif text-4xl text-mustard">0{i + 1}</span><b className="block">{s}</b></li>)}</ol>

      <section className="mx-auto mt-16 max-w-2xl rounded-[2rem] bg-card p-8 shadow-soft">
        {sent ? (
          <div className="text-center" role="status">
            <p className="text-5xl">🎉</p>
            <h2 className="mt-3 text-3xl font-extrabold">Thanks, {sent}!</h2>
            <p className="mt-2 text-muted-foreground">Your application was captured in this prototype. In the live product our talent team would reply within 5 working days. (No email is sent in this demo.)</p>
            <button onClick={() => setSent(undefined)} className="mt-5 rounded-full bg-forest px-5 py-2 font-bold text-cream">Submit another</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="space-y-4">
            <h2 className="text-3xl font-extrabold">Creator application</h2>
            <label className="block font-bold">Full name<input name="name" maxLength={100} className={field} /></label><Err k="name" />
            <label className="block font-bold">Email<input name="email" type="email" maxLength={255} className={field} /></label><Err k="email" />
            <label className="block font-bold">I am a…
              <select name="type" defaultValue="" className={field}><option value="" disabled>Select</option><option>Chef</option><option>Food creator</option><option>Small food business</option></select>
            </label><Err k="type" />
            <label className="block font-bold">Your idea, product or course<textarea name="idea" rows={4} maxLength={1000} className={field} /></label><Err k="idea" />
            <label className="block font-bold">Portfolio / social link (optional)<input name="link" maxLength={255} className={field} placeholder="https://" /></label><Err k="link" />
            <label className="flex items-center gap-2"><input type="checkbox" name="consent" /> I agree to be contacted about my application.</label><Err k="consent" />
            <button className="w-full rounded-full bg-tomato py-3 font-extrabold text-primary-foreground shadow-pop">Send application</button>
          </form>
        )}
      </section>
    </div>
  );
}
