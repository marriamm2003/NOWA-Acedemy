import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Lock, Unlock, Award } from "lucide-react";
import { courses, getCourse } from "@/lib/data";
import { useStore } from "@/lib/store";
import { CourseCard, SectionTitle } from "@/components/humm/Cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { money } from "@/components/humm/Shell";

export const Route = createFileRoute("/kitchen")({
  validateSearch: (s: Record<string, unknown>): { order?: string | undefined } => ({ order: typeof s["order"] === "string" ? s["order"] : undefined }),
  head: () => ({
    meta: [
      { title: "HUMM Kitchen — My Learning Dashboard" },
      { name: "description", content: "Your purchased modules, progress, saved courses, recipe cards and orders." },
      { property: "og:title", content: "HUMM Kitchen — Learner Dashboard" },
      { property: "og:description", content: "Track your culinary learning on HUMM." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Kitchen,
});

const demoProgress: Record<string, number> = { "pt-1": 100, "pt-2": 60, "pt-4": 25, "pb-1": 10 };

function Kitchen() {
  const { order } = Route.useSearch();
  const { owned, orders, wishlist } = useStore();
  const myCourses = courses.filter((c) => c.modules.some((m) => owned.has(m.id)));
  const saved = courses.filter((c) => wishlist.includes(c.slug));

  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <p className="mb-4 rounded-2xl bg-mustard/40 p-3 text-sm"><b>Prototype dashboard.</b> Accounts aren't connected yet, so access is based on demo orders stored in this browser — not verified payments.</p>
      {order && <p className="mb-6 rounded-2xl bg-leaf p-4 font-bold" role="status">Demo order {order} confirmed — your new modules are unlocked below.</p>}
      <SectionTitle eyebrow="HUMM Kitchen" title="Welcome back," accent="chef" />
      <Tabs defaultValue="courses" className="mt-8">
        <TabsList className="flex h-auto flex-wrap justify-start bg-transparent p-0">
          {["courses", "saved", "recipes", "certificates", "orders", "settings"].map((t) => <TabsTrigger key={t} value={t} className="rounded-full capitalize data-[state=active]:bg-tomato data-[state=active]:text-primary-foreground">{t === "courses" ? "My courses" : t}</TabsTrigger>)}
        </TabsList>

        <TabsContent value="courses" className="mt-6 space-y-6">
          {myCourses.length === 0 && <p>No modules yet. <Link to="/courses" className="underline">Browse courses</Link></p>}
          {myCourses.map((c) => {
            const done = c.modules.filter((m) => owned.has(m.id));
            const pct = Math.round(done.reduce((s, m) => s + (demoProgress[m.id] ?? 0), 0) / c.modules.length);
            return (
              <div key={c.slug} className="rounded-[1.75rem] bg-card p-6 shadow-soft">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div><h3 className="text-2xl font-extrabold">{c.title}</h3><p className="text-sm text-muted-foreground">{done.length}/{c.modules.length} modules owned · subtitles: {c.subtitles.join(", ")}</p></div>
                  <Link to="/courses/$slug" params={{ slug: c.slug }} hash="builder" className="rounded-full bg-forest px-4 py-2 text-sm font-bold text-cream">Add modules</Link>
                </div>
                <Progress value={pct} className="mt-4" />
                <ul className="mt-4 grid gap-2 md:grid-cols-2">
                  {c.modules.map((m) => {
                    const has = owned.has(m.id);
                    return (
                      <li key={m.id} className={`flex items-center gap-3 rounded-xl p-3 text-sm ${has ? "bg-leaf/50" : "bg-muted text-muted-foreground"}`}>
                        {has ? <Unlock className="size-4" /> : <Lock className="size-4" />}
                        <span className="flex-1">{m.title}</span>
                        {has ? <b>{demoProgress[m.id] ?? 0}%</b> : <span>{money(m.price)}</span>}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          {saved.length ? <div className="grid gap-6 md:grid-cols-3">{saved.map((c) => <CourseCard key={c.slug} c={c} />)}</div> : <p>Tap the heart on any course to save it here.</p>}
        </TabsContent>

        <TabsContent value="recipes" className="mt-6 grid gap-4 md:grid-cols-3">
          {myCourses.flatMap((c) => c.modules.filter((m) => owned.has(m.id)).map((m) => (
            <div key={m.id} className="rounded-2xl bg-card p-5"><b>{m.title}</b><p className="text-xs text-muted-foreground">{c.title}</p>
              <button onClick={() => alert("Demo: recipe card PDFs aren't generated in this prototype.")} className="mt-3 flex items-center gap-2 text-sm font-bold text-tomato"><Download className="size-4" />Recipe card & ingredient list</button></div>
          )))}
        </TabsContent>

        <TabsContent value="certificates" className="mt-6">
          {myCourses.flatMap((c) => c.modules.filter((m) => owned.has(m.id) && demoProgress[m.id] === 100).map((m) => (
            <div key={m.id} className="flex items-center gap-4 rounded-2xl bg-mustard p-5"><Award className="size-8" /><div><b>Certificate of completion</b><p className="text-sm">{m.title}</p></div></div>
          )))}
          <p className="mt-3 text-sm text-muted-foreground">Finish a module to 100% to earn its certificate.</p>
        </TabsContent>

        <TabsContent value="orders" className="mt-6 space-y-3">
          {orders.map((o) => (
            <div key={o.id} className="rounded-2xl bg-card p-5">
              <div className="flex justify-between"><b>{o.id}</b><span>{o.date} · {money(o.total)} · <span className="text-xs font-bold text-tomato">DEMO</span></span></div>
              <p className="mt-1 text-sm text-muted-foreground">{Array.from(new Set(o.moduleIds.map((id) => courses.find((c) => c.modules.some((m) => m.id === id))?.slug))).map((s) => getCourse(s!)?.title).join(", ")} — {o.moduleIds.length} modules</p>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="settings" className="mt-6 max-w-lg space-y-3 rounded-2xl bg-card p-6">
          <p className="font-bold">Account settings</p>
          <p className="text-sm text-muted-foreground">Sign-in, profile and language preferences will live here once accounts are enabled. Use the language switch in the top bar for English / العربية.</p>
          <p className="font-bold">Help & support</p>
          <p className="text-sm text-muted-foreground">Ask the HUMM assistant (bottom corner) or email support@humm.academy (placeholder address).</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
