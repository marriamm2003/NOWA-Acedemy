import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { categories, courses, levels, fromPrice, getChef } from "@/lib/data";
import { label as localizeLabel } from "@/lib/localized";
import { useStore } from "@/lib/store";
import { CourseCard, SectionTitle } from "@/components/humm/Cards";

type S = {
  q?: string | undefined;
  cat?: string | undefined;
  level?: string | undefined;
  sort?: string | undefined;
};

export const Route = createFileRoute("/courses/")({
  validateSearch: (s: Record<string, unknown>): S => ({
    q: typeof s["q"] === "string" ? s["q"].slice(0, 80) : undefined,
    cat: typeof s["cat"] === "string" ? s["cat"] : undefined,
    level: typeof s["level"] === "string" ? s["level"] : undefined,
    sort: typeof s["sort"] === "string" ? s["sort"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Culinary Courses — NOWA Studio" },
      {
        name: "description",
        content:
          "Browse pizza, dessert, baking, plant-based and food business courses. Filter by category and skill level.",
      },
      { property: "og:title", content: "Culinary Courses — NOWA Studio" },
      {
        property: "og:description",
        content: "Find your flavour: modular courses from chefs who teach every technique.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Discover,
});

function Discover() {
  const { lang, t } = useStore();
  const s = Route.useSearch();
  const nav = useNavigate({ from: "/courses/" });
  const set = (patch: Partial<S>) => nav({ search: (p: S) => ({ ...p, ...patch }) });

  const list = useMemo(() => {
    const q = (s.q ?? "").toLowerCase();
    let r = courses.filter(
      (c) =>
        (!s.cat || c.category === s.cat) &&
        (!s.level || c.level === s.level) &&
        (!q ||
          [c.title, c.tagline, c.category, getChef(c.chef)!.name]
            .join(" ")
            .toLowerCase()
            .includes(q)),
    );
    if (s.sort === "price") r = [...r].sort((a, b) => fromPrice(a) - fromPrice(b));
    else if (s.sort === "rating") r = [...r].sort((a, b) => b.rating - a.rating);
    else if (s.sort === "new") r = [...r].sort((a, b) => b.createdAt - a.createdAt);
    return r;
  }, [s]);

  const chip = (on: boolean) =>
    `rounded-full px-4 py-2 text-sm font-bold transition ${on ? "bg-tomato text-primary-foreground" : "bg-card hover:bg-muted"}`;

  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <SectionTitle eyebrow={t("discover")} title={t("findYour")} accent={t("flavour")} />
      <div className="mt-8 flex flex-col gap-4 md:flex-row">
        <input
          value={s.q ?? ""}
          onChange={(e) => set({ q: e.target.value || undefined })}
          placeholder={t("search")}
          aria-label={t("search")} 
          maxLength={80}
          className="flex-1 rounded-full border border-border bg-card px-5 py-3 outline-none focus:border-tomato"
        />
        <select
          value={s.sort ?? ""}
          onChange={(e) => set({ sort: e.target.value || undefined })}
          aria-label={t("sort")}
          className="rounded-full border border-border bg-card px-4 py-3 font-bold"
        >
          <option value="">{t("mostPopular")}</option>
          <option value="rating">{t("topRated")}</option>
          <option value="price">{t("lowestPrice")}</option>
          <option value="new">{t("newest")}</option>
        </select>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <button className={chip(!s.cat)} onClick={() => set({ cat: undefined })}>
          {t("all")}
        </button>
        {categories.map((c) => (
          <button
            key={c}
            className={chip(s.cat === c)}
            onClick={() => set({ cat: s.cat === c ? undefined : c })}
          >
            {localizeLabel(c, lang)}
          </button>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {levels.map((l) => (
          <button
            key={l}
            className={chip(s.level === l)}
            onClick={() => set({ level: s.level === l ? undefined : l })}
          >
            {localizeLabel(l, lang)}
          </button>
        ))}
      </div>
      <p className="mt-6 text-sm text-muted-foreground">
        {list.length} {list.length === 1 ? t("course") : t("coursesCount")}
      </p>
      {list.length ? (
        <div className="mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((c) => (
            <CourseCard key={c.slug} c={c} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl bg-card p-10 text-center">
          <p className="text-xl font-extrabold">{t("noCourses")}</p>
          <p className="text-muted-foreground">
            {t("noCoursesCopy")}
          </p>
          <button
            onClick={() => nav({ search: {} })}
            className="mt-4 rounded-full bg-forest px-5 py-2 font-bold text-cream"
          >
            {t("clearFilters")}
          </button>
        </div>
      )}
    </div>
  );
}
