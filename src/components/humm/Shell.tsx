import { Link, useNavigate } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Heart, Menu, MessageCircle, Search, ShoppingBag, X } from "lucide-react";
import { useStore } from "@/lib/store";
import { courses, findModule, getCourse } from "@/lib/data";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

export function Logo() {
  return (
    <Link to="/" className="leading-none text-forest" aria-label="HUMM Academy home">
      <span className="text-3xl font-extrabold tracking-tighter">HUMM<span className="text-tomato">.</span></span>
      <small className="block text-[8px] font-bold tracking-[0.3em]">ACADEMY</small>
    </Link>
  );
}

export const money = (n: number) => `$${n.toFixed(n % 1 ? 2 : 0)}`;

function Nav() {
  const { t, lang, setLang, bag, setBagOpen, wishlist } = useStore();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const nav = useNavigate();
  const links = [
    { to: "/courses", label: t("courses") },
    { to: "/paths", label: t("paths") },
    { to: "/chefs", label: t("chefs") },
    { to: "/market", label: t("market") },
    { to: "/creators", label: t("creators") },
  ] as const;
  return (
    <>
      <div className="bg-deep px-4 py-2 text-center text-xs tracking-wide text-cream">{t("announce")}</div>
      <header className="sticky top-0 z-30 border-b border-border bg-cream/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-bold lg:flex">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="hover:text-tomato" activeProps={{ className: "text-tomato" }}>{l.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <form
              className="hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-2 md:flex"
              onSubmit={(e) => { e.preventDefault(); nav({ to: "/courses", search: { q } }); }}
            >
              <Search className="size-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("search")} aria-label="Search" className="w-40 bg-transparent text-sm outline-none" />
            </form>
            <button onClick={() => setLang(lang === "en" ? "ar" : "en")} className="rounded-full border border-border px-3 py-2 text-xs font-extrabold">{lang === "en" ? "العربية" : "EN"}</button>
            <Link to="/kitchen" aria-label="Saved" className="relative rounded-full border border-border p-2.5">
              <Heart className="size-4" />
              {wishlist.length > 0 && <span className="absolute -end-1 -top-1 grid size-5 place-items-center rounded-full bg-mustard text-[10px] font-bold">{wishlist.length}</span>}
            </Link>
            <button onClick={() => setBagOpen(true)} aria-label={t("bag")} className="relative rounded-full bg-forest p-2.5 text-cream">
              <ShoppingBag className="size-4" />
              {bag.length > 0 && <span className="absolute -end-1 -top-1 grid size-5 place-items-center rounded-full bg-tomato text-[10px] font-bold">{bag.length}</span>}
            </button>
            <Link to="/kitchen" className="hidden rounded-full bg-tomato px-4 py-2.5 text-sm font-extrabold text-primary-foreground shadow-pop sm:inline-block">{t("kitchen")}</Link>
            <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <nav className="grid gap-3 border-t border-border px-5 py-4 font-bold lg:hidden">
            {links.map((l) => <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>{l.label}</Link>)}
            <Link to="/kitchen" onClick={() => setOpen(false)}>{t("kitchen")}</Link>
          </nav>
        )}
      </header>
    </>
  );
}

function BagSheet() {
  const { bagOpen, setBagOpen, bag, toggleBag, bagQuote, t } = useStore();
  const nav = useNavigate();
  return (
    <Sheet open={bagOpen} onOpenChange={setBagOpen}>
      <SheetContent className="flex w-full flex-col bg-cream sm:max-w-md">
        <SheetHeader><SheetTitle className="text-2xl font-extrabold">{t("bag")}</SheetTitle></SheetHeader>
        {bag.length === 0 ? (
          <p className="mt-6 text-muted-foreground">{t("emptyBag")}</p>
        ) : (
          <div className="flex-1 space-y-5 overflow-auto px-4">
            {bagQuote.groups.map((g) => {
              const c = getCourse(g.slug)!;
              return (
                <div key={g.slug} className="rounded-2xl bg-card p-4">
                  <p className="font-extrabold">{c.title}</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {g.quote.lineIds.map((id) => {
                      const m = findModule(id)!.module;
                      const free = m.bonus && g.quote.bonusUnlocked;
                      return (
                        <li key={id} className="flex items-center justify-between gap-2">
                          <span>{m.title}</span>
                          <span className="flex items-center gap-2 whitespace-nowrap">
                            {free ? <b className="text-tomato">FREE</b> : money(m.price)}
                            {bag.includes(id) && <button onClick={() => toggleBag(id)} aria-label={`Remove ${m.title}`}><X className="size-3" /></button>}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                  {g.quote.discountApplied && <p className="mt-2 text-xs font-bold text-forest">Bundle −{money(g.quote.discount)}</p>}
                </div>
              );
            })}
          </div>
        )}
        {bag.length > 0 && (
          <div className="border-t border-border p-4">
            <div className="flex justify-between text-sm text-muted-foreground"><span>Original</span><s>{money(bagQuote.original)}</s></div>
            <div className="flex justify-between text-xl font-extrabold"><span>Total</span><span>{money(bagQuote.total)}</span></div>
            <button onClick={() => { setBagOpen(false); nav({ to: "/checkout" }); }} className="mt-3 w-full rounded-full bg-tomato py-3 font-extrabold text-primary-foreground shadow-pop">{t("checkout")}</button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

function Chatbot() {
  const { t } = useStore();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<{ me: boolean; text: string }[]>([]);
  const [v, setV] = useState("");
  const reply = (q: string) => {
    const s = q.toLowerCase();
    if (s.includes("bundle") || s.includes("free")) return "Pick 2 eligible modules in a course and its bonus mini-course is added free. Pick 3 and you also save 15% on them.";
    if (s.includes("creator") || s.includes("apply")) return "Head to For Creators and fill in the application — our team reviews every one.";
    const c = courses.find((c) => s.includes(c.category.toLowerCase().split(" ")[0]));
    if (c) return `Try “${c.title}” — modules start from $${Math.min(...c.modules.map((m) => m.price))}.`;
    return "I'm a demo assistant with scripted answers. Try asking about pizza, desserts, bundles or creators.";
  };
  return (
    <div className="fixed bottom-5 end-5 z-40">
      {open && (
        <div className="mb-3 flex h-96 w-80 flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="flex items-center justify-between bg-forest px-4 py-3 text-cream"><b>Humm · demo assistant</b><button onClick={() => setOpen(false)} aria-label="Close chat"><X className="size-4" /></button></div>
          <div className="flex-1 space-y-2 overflow-auto p-3 text-sm">
            <p className="rounded-2xl bg-muted p-3">{t("chatHi")}</p>
            {msgs.map((m, i) => <p key={i} className={`rounded-2xl p-3 ${m.me ? "ms-8 bg-mustard" : "me-8 bg-muted"}`}>{m.text}</p>)}
          </div>
          <form className="flex gap-2 border-t border-border p-2" onSubmit={(e) => { e.preventDefault(); const q = v.trim().slice(0, 300); if (!q) return; setMsgs((m) => [...m, { me: true, text: q }, { me: false, text: reply(q) }]); setV(""); }}>
            <input value={v} onChange={(e) => setV(e.target.value)} maxLength={300} className="flex-1 rounded-full bg-muted px-3 text-sm outline-none" placeholder="Ask Humm…" aria-label="Message" />
            <button className="rounded-full bg-tomato px-3 py-2 text-xs font-bold text-primary-foreground">Send</button>
          </form>
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-label="Open chat" className="ms-auto grid size-14 place-items-center rounded-full bg-tomato text-primary-foreground shadow-pop"><MessageCircle /></button>
    </div>
  );
}

function Footer() {
  const { t } = useStore();
  return (
    <footer className="mt-24 bg-deep text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div>
          <p className="text-4xl font-extrabold tracking-tighter">HUMM<span className="text-tomato">.</span></p>
          <p className="mt-3 text-sm opacity-70">{t("footerTag")}</p>
        </div>
        <div className="grid gap-2 text-sm"><b className="text-mustard">Learn</b><Link to="/courses">{t("courses")}</Link><Link to="/paths">{t("paths")}</Link><Link to="/chefs">{t("chefs")}</Link></div>
        <div className="grid gap-2 text-sm"><b className="text-mustard">Grow</b><Link to="/creators">{t("creators")}</Link><Link to="/market">{t("market")}</Link><Link to="/kitchen">{t("kitchen")}</Link></div>
        <div className="text-xs opacity-70">
          <p>Prototype notice: payments, accounts, affiliate tracking and the chatbot are demo simulations. No real money is taken and no commission is tracked.</p>
          <p className="mt-3">© 2026 HUMM Academy</p>
        </div>
      </div>
    </footer>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>{children}</main>
      <Footer />
      <BagSheet />
      <Chatbot />
    </div>
  );
}
