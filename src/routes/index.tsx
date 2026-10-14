import { createFileRoute, Link } from "@tanstack/react-router";
import { courses, chefs, products, paths, categories, images } from "@/lib/data";
import { label as localizeLabel, localizePath, getTestimonials } from "@/lib/localized";
import { useStore } from "@/lib/store";
import { CourseCard, ChefCard, ProductCard, SectionTitle, toneBg } from "@/components/humm/Cards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOWA Studio — Make Food. Make Your Mark." },
      {
        name: "description",
        content:
          "Learn pizza, pastry, plant-based cooking and food business from top chefs. Build your own course, module by module.",
      },
      { property: "og:title", content: "NOWA Studio — Make Food. Make Your Mark." },
      {
        property: "og:description",
        content:
          "Modular culinary courses, chef profiles, learning paths and a curated chef's market.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, lang } = useStore();
  const testimonials = getTestimonials(lang);

  return (
    <>
      <section className="relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden px-5 py-12 md:py-16 lg:grid-cols-2 lg:gap-16">
        <div className="relative z-10 text-center lg:text-start">
          <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-forest lg:justify-start">
            <span className="h-[3px] w-7 bg-tomato" />
            {t("heroEyebrow")}
          </p>
          <h1 className="mt-5 text-5xl font-extrabold leading-[0.95] tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            {t("heroA")}
            <br />
            {t("heroB")} <em className="font-serif font-normal text-tomato">{t("heroC")}</em>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground lg:mx-0">
            {t("heroCopy")}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Link
              to="/courses"
              className="rounded-full bg-tomato px-6 py-3.5 font-extrabold text-primary-foreground shadow-pop transition hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
            >
              {t("ctaFind")}
            </Link>
            <Link
              to="/paths"
              className="rounded-full bg-mustard px-6 py-3.5 font-extrabold transition hover:-translate-y-1 active:translate-y-0"
            >
              {t("ctaPaths")}
            </Link>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            <b className="text-foreground">4.9★</b> {t("statLearners")} · 3 {t("statChefs")} · 6 {t("statCourses")}
          </p>
        </div>
        <div className="relative mx-auto max-w-md lg:max-w-none">
          <div
            className="absolute -inset-6 animate-slowspin rounded-full border-[18px] border-dashed border-leaf/60"
            aria-hidden
          />
          <img
            src={images.pizza}
            alt={t("heroImgAlt")}
            width={1280}
            height={1280}
            className="relative aspect-square w-full rounded-full object-cover shadow-soft"
          />
          <span className="absolute -start-2 top-10 animate-float rounded-full bg-mustard px-4 py-2 text-sm font-extrabold shadow-soft">
            🍅 {t("dough")}
          </span>
          <span className="absolute -end-2 bottom-16 animate-float rounded-full bg-cream px-4 py-2 text-sm font-extrabold shadow-soft [animation-delay:1.5s]">
            🌿 {t("basil")}
          </span>
          <span className="absolute bottom-0 start-10 rotate-[-6deg] rounded-2xl bg-forest px-4 py-3 text-cream shadow-soft">
            <b className="block text-2xl">2 + 1</b>
            <small>{t("offer")}</small>
          </span>
        </div>
      </section>

      <div className="overflow-hidden bg-tomato py-4 text-primary-foreground" aria-hidden>
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-3xl font-extrabold tracking-tight">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            [
              t("marqKnead"),
              "✺",
              t("marqTaste"),
              "✺",
              t("marqPlate"),
              "✺",
              t("marqSell"),
              "✺",
              t("marqLearn"),
              "✺",
            ].map((w, i) => <span key={`${k}${i}`}>{w}</span>),
          )}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((c, i) => (
            <Link
              key={c}
              to="/courses"
              search={{ cat: c }}
              className={`rounded-full px-5 py-3 font-bold transition hover:-translate-y-1 hover:rotate-[-2deg] ${["bg-leaf", "bg-mustard", "bg-card shadow-soft", "bg-forest text-cream"][i % 4]}`}
            >
              {localizeLabel(c, lang)}
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between gap-4">
          <SectionTitle eyebrow={t("featured")} title={t("cookWhat")} accent={t("excitesYou")} />
          <Link to="/courses" className="font-bold underline">
            {t("browseAll")}
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 3).map((c) => (
            <CourseCard key={c.slug} c={c} />
          ))}
        </div>
      </section>

      <section className="mt-20 bg-leaf py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow={t("paths")} title={t("threeWays")} accent={t("grow")} />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {paths.map((p, i) => {
              const displayPath = localizePath(p, lang);
              return (
              <Link
                key={p.id}
                to="/paths"
                hash={p.id}
                className={`rounded-[1.75rem] p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lg ${i === 1 ? "bg-cream" : toneBg[p.tone]}`}
              >
                <span className="font-serif text-5xl md:text-6xl">0{i + 1}</span>
                <h3 className="mt-3 text-2xl font-extrabold">{displayPath.title}</h3>
                <p className="mt-2 leading-relaxed">{displayPath.blurb}</p>
                <p className="mt-4 text-sm font-bold">
                  ~{p.weeks} {t("weeks")} · {p.courses.length} {t("coursesCount")}
                </p>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow={t("meetChefs")} title={t("chefsWith")} accent={t("storyWord")} />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {chefs.map((c) => (
            <ChefCard key={c.slug} chef={c} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between">
          <SectionTitle eyebrow={t("curated")} title={t("marketTitle")} accent={t("marketAccent")} />
          <Link to="/market" className="font-bold underline">
            {t("browseAll")}
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-6 px-5 md:grid-cols-3">
        {testimonials.map((x) => (
          <blockquote key={x.n} className="flex flex-col rounded-[1.75rem] bg-card p-7 shadow-soft">
            <p className="font-serif text-2xl leading-snug">“{x.q}”</p>
            <footer className="mt-4 text-sm font-bold">{x.n}</footer>
          </blockquote>
        ))}
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-deep p-10 text-cream md:p-16">
          <div
            className="absolute -end-20 -top-20 size-72 rounded-full bg-mustard/30"
            aria-hidden
          />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mustard">
            {t("passion")}
          </p>
          <h2 className="mt-3 max-w-2xl text-4xl font-extrabold md:text-6xl">
            {t("nextBigThing")}
          </h2>
          <p className="mt-4 max-w-xl opacity-80">{t("passionCopy")}</p>
          <Link
            to="/creators"
            className="mt-8 inline-block rounded-full bg-tomato px-6 py-3.5 font-extrabold text-primary-foreground shadow-pop"
          >
            {t("apply")}
          </Link>
        </div>
      </section>
    </>
  );
}
