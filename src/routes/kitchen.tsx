import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Lock, Unlock, Award } from "lucide-react";
import { courses, getCourse } from "@/lib/data";
import { localizeCourse, label as localizeLabel } from "@/lib/localized";
import { useStore } from "@/lib/store";
import { CourseCard, SectionTitle } from "@/components/humm/Cards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { money } from "@/components/humm/Shell";

export const Route = createFileRoute("/kitchen")({
  validateSearch: (s: Record<string, unknown>): { order?: string | undefined } => ({
    order: typeof s["order"] === "string" ? s["order"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "NOWA Kitchen — My Learning Dashboard" },
      {
        name: "description",
        content: "Your purchased modules, progress, saved courses, recipe cards and orders.",
      },
      { property: "og:title", content: "NOWA Kitchen — Learner Dashboard" },
      { property: "og:description", content: "Track your culinary learning on NOWA." },
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
  const { owned, orders, wishlist, t, lang } = useStore();
  const myCourses = courses.filter((c) => c.modules.some((m) => owned.has(m.id)));
  const saved = courses.filter((c) => wishlist.includes(c.slug));

  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <p className="mb-4 rounded-2xl bg-mustard/40 p-3 text-sm">
        <b>{t("dashboardNotice")}</b> {t("dashboardCopy")}
      </p>
      {order && (
        <p className="mb-6 rounded-2xl bg-leaf p-4 font-bold" role="status">
          {t("orderConfirmed").replace("{order}", order)}
        </p>
      )}
      <SectionTitle eyebrow={t("kitchen")} title={t("welcome")} accent={t("chef")}  />
      <Tabs defaultValue="courses" className="mt-8">
        <TabsList className="flex h-auto flex-wrap justify-start bg-transparent p-0">
          {["courses", "saved", "recipes", "certificates", "orders", "settings"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className="rounded-full capitalize data-[state=active]:bg-tomato data-[state=active]:text-primary-foreground"
            >
              {tab === "courses" ? t("myCourses") : t(tab as "saved" | "recipes" | "certificates" | "orders" | "settings")}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="courses" className="mt-6 space-y-6">
          {myCourses.length === 0 && (
            <p>
              {t("noModules")} {" "}
              <Link to="/courses" className="underline">
                {t("browse")}
              </Link>
            </p>
          )}
          {myCourses.map((c) => {
            const done = c.modules.filter((m) => owned.has(m.id));
            const pct = Math.round(
              done.reduce((s, m) => s + (demoProgress[m.id] ?? 0), 0) / c.modules.length,
            );
            return (
              <div key={c.slug} className="rounded-[1.75rem] bg-card p-6 shadow-soft">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-extrabold">{localizeCourse(c, lang).title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {done.length}/{c.modules.length} {t("modulesOwned")} · {t("subtitles")}:{" "}
                      {c.subtitles.map((x) => localizeLabel(x, lang)).join(", ")}
                    </p>
                  </div>
                  <Link
                    to="/courses/$slug"
                    params={{ slug: c.slug }}
                    hash="builder"
                    className="rounded-full bg-forest px-4 py-2 text-sm font-bold text-cream"
                  >
                    {t("addModules")}
                  </Link>
                </div>
                <Progress value={pct} className="mt-4" />
                <ul className="mt-4 grid gap-2 md:grid-cols-2">
                  {c.modules.map((m) => {
                    const has = owned.has(m.id);
                    return (
                      <li
                        key={m.id}
                        className={`flex items-center gap-3 rounded-xl p-3 text-sm ${has ? "bg-leaf/50" : "bg-muted text-muted-foreground"}`}
                      >
                        {has ? <Unlock className="size-4" /> : <Lock className="size-4" />}
                        <span className="flex-1">{localizeCourse(c, lang).modules.find((item) => item.id === m.id)?.title ?? m.title}</span>
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
          {saved.length ? (
            <div className="grid gap-6 md:grid-cols-3">
              {saved.map((c) => (
                <CourseCard key={c.slug} c={c} />
              ))}
            </div>
          ) : (
            <p>{t("savedHint")}</p>
          )}
        </TabsContent>

        <TabsContent value="recipes" className="mt-6 grid gap-4 md:grid-cols-3">
          {myCourses.flatMap((c) =>
            c.modules
              .filter((m) => owned.has(m.id))
              .map((m) => (
                <div key={m.id} className="rounded-2xl bg-card p-5">
                  <b>{localizeCourse(c, lang).modules.find((item) => item.id === m.id)?.title ?? m.title}</b>
                  <p className="text-xs text-muted-foreground">{localizeCourse(c, lang).title}</p>
                  <button
                    onClick={() =>
                      alert(t("recipeDemo"))
                    }
                    className="mt-3 flex items-center gap-2 text-sm font-bold text-tomato"
                  >
                    <Download className="size-4" />
                    {t("recipeDownload")}
                  </button>
                </div>
              )),
          )}
        </TabsContent>

        <TabsContent value="certificates" className="mt-6">
          {myCourses.flatMap((c) =>
            c.modules
              .filter((m) => owned.has(m.id) && demoProgress[m.id] === 100)
              .map((m) => (
                <div key={m.id} className="flex items-center gap-4 rounded-2xl bg-mustard p-5">
                  <Award className="size-8" />
                  <div>
                    <b>{t("certificate")}</b>
                    <p className="text-sm">{localizeCourse(c, lang).modules.find((item) => item.id === m.id)?.title ?? m.title}</p>
                  </div>
                </div>
              )),
          )}
          <p className="mt-3 text-sm text-muted-foreground">
            {t("certificateHint")}
          </p>
        </TabsContent>

        <TabsContent value="orders" className="mt-6 space-y-3">
          {orders.map((o) => (
            <div key={o.id} className="rounded-2xl bg-card p-5">
              <div className="flex justify-between">
                <b>{o.id}</b>
                <span>
                  {o.date} · {money(o.total)} ·{" "}
                  <span className="text-xs font-bold text-tomato">{t("demo")}</span>
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {Array.from(
                  new Set(
                    o.moduleIds.map(
                      (id) => courses.find((c) => c.modules.some((m) => m.id === id))?.slug,
                    ),
                  ),
                )
                  .map((s) => localizeCourse(getCourse(s!)!, lang).title)
                  .join(", ")}{" "}
                — {o.moduleIds.length} {t("modulesOwned")}
              </p>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="settings" className="mt-6 max-w-lg space-y-3 rounded-2xl bg-card p-6">
          <p className="font-bold">{t("accountSettings")}</p>
          <p className="text-sm text-muted-foreground">
            {t("accountCopy")}
          </p>
          <p className="font-bold">{t("help")}</p>
          <p className="text-sm text-muted-foreground">
            {t("helpCopy")}
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
