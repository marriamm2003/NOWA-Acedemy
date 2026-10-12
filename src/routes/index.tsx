import { createFileRoute, Link } from "@tanstack/react-router";
import { courses, chefs, products, paths, categories, images } from "@/lib/data";
import { useStore } from "@/lib/store";
import { CourseCard, ChefCard, ProductCard, SectionTitle, toneBg } from "@/components/humm/Cards";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HUMM Academy — Make Food. Make Your Mark." },
      { name: "description", content: "Learn pizza, pastry, plant-based cooking and food business from top chefs. Build your own course, module by module." },
      { property: "og:title", content: "HUMM Academy — Make Food. Make Your Mark." },
      { property: "og:description", content: "Modular culinary courses, chef profiles, learning paths and a curated chef's market." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const testimonials = [
  { q: "I bought just the dough level first. Two weeks later I had the whole masterclass — and my family won't order pizza anymore.", n: "Omar K., Riyadh" },
  { q: "Layla's costing module paid for itself with my first cake order.", n: "Sara M., Cairo" },
  { q: "Finally plant-based food that tastes like my grandmother's cooking.", n: "Hana A., Amman" },
];

function Home() {
  const { t } = useStore();
  return (
    <>
      <section className="relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden px-5 py-14 lg:grid-cols-2">
        <div className="relative z-10">
          <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-forest"><span className="h-[3px] w-7 bg-tomato" />{t("heroEyebrow")}</p>
          <h1 className="mt-5 text-6xl font-extrabold leading-[0.92] tracking-tighter md:text-8xl">
            {t("heroA")}<br />{t("heroB")} <em className="font-serif font-normal text-tomato">{t("heroC")}</em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">{t("heroCopy")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/courses" className="rounded-full bg-tomato px-6 py-3.5 font-extrabold text-primary-foreground shadow-pop transition hover:-translate-y-1">{t("ctaFind")}</Link>
            <Link to="/paths" className="rounded-full bg-mustard px-6 py-3.5 font-extrabold transition hover:-translate-y-1">{t("ctaPaths")}</Link>
          </div>
          <p className="mt-8 text-sm text-muted-foreground"><b className="text-foreground">4.9★</b> from 3,900+ learners · 3 chefs · 6 courses</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 animate-slowspin rounded-full border-[18px] border-dashed border-leaf/60" aria-hidden />
          <img src={images.pizza} alt="Blistered Neapolitan pizza on a wooden peel" width={1280} height={1280} className="relative aspect-square w-full rounded-full object-cover shadow-soft" />
          <span className="absolute -start-2 top-10 animate-float rounded-full bg-mustard px-4 py-2 text-sm font-extrabold shadow-soft">🍅 72h dough</span>
          <span className="absolute -end-2 bottom-16 animate-float rounded-full bg-cream px-4 py-2 text-sm font-extrabold shadow-soft [animation-delay:1.5s]">🌿 Fresh basil</span>
          <span className="absolute bottom-0 start-10 rotate-[-6deg] rounded-2xl bg-forest px-4 py-3 text-cream shadow-soft"><b className="block text-2xl">2 + 1</b><small>pick 2 levels, sauces free</small></span>
        </div>
      </section>

      <div className="overflow-hidden bg-tomato py-4 text-primary-foreground" aria-hidden>
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-3xl font-extrabold tracking-tight">
          {Array.from({ length: 2 }).flatMap((_, k) => ["Knead it", "✺", "Taste it", "✺", "Plate it", "✺", "Sell it", "✺", "Learn. Create. Grow.", "✺"].map((w, i) => <span key={`${k}${i}`}>{w}</span>))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex flex-wrap gap-3">
          {categories.map((c, i) => (
            <Link key={c} to="/courses" search={{ cat: c }} className={`rounded-full px-5 py-3 font-bold transition hover:-translate-y-1 hover:rotate-[-2deg] ${["bg-leaf", "bg-mustard", "bg-card", "bg-forest text-cream"][i % 4]}`}>{c}</Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between gap-4"><SectionTitle eyebrow={t("featured")} title="Cook what" accent="excites you." /><Link to="/courses" className="font-bold underline">{t("browseAll")}</Link></div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{courses.slice(0, 3).map((c) => <CourseCard key={c.slug} c={c} />)}</div>
      </section>

      <section className="mt-24 bg-leaf py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle eyebrow={t("paths")} title="Three ways to" accent="grow." />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {paths.map((p, i) => (
              <Link key={p.id} to="/paths" hash={p.id} className={`rounded-[1.75rem] p-7 transition hover:-translate-y-1 ${i === 1 ? "bg-cream" : toneBg[p.tone]}`}>
                <span className="font-serif text-6xl">0{i + 1}</span>
                <h3 className="mt-3 text-2xl font-extrabold">{p.title}</h3>
                <p className="mt-2">{p.blurb}</p>
                <p className="mt-4 text-sm font-bold">~{p.weeks} weeks · {p.courses.length} courses</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20">
        <SectionTitle eyebrow={t("meetChefs")} title="Chefs with a" accent="story." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">{chefs.map((c) => <ChefCard key={c.slug} chef={c} />)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-5">
        <div className="flex items-end justify-between"><SectionTitle eyebrow={t("curated")} title="The Chef's" accent="Market." /><Link to="/market" className="font-bold underline">{t("browseAll")}</Link></div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{products.slice(0, 4).map((p) => <ProductCard key={p.id} p={p} />)}</div>
      </section>

      <section className="mx-auto mt-20 grid max-w-7xl gap-6 px-5 md:grid-cols-3">
        {testimonials.map((x) => (
          <blockquote key={x.n} className="rounded-[1.75rem] bg-card p-7 shadow-soft"><p className="font-serif text-2xl leading-snug">“{x.q}”</p><footer className="mt-4 text-sm font-bold">{x.n}</footer></blockquote>
        ))}
      </section>

      <section className="mx-auto mt-20 max-w-7xl px-5">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-deep p-10 text-cream md:p-16">
          <div className="absolute -end-20 -top-20 size-72 rounded-full bg-mustard/30" aria-hidden />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-mustard">{t("passion")}</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-extrabold md:text-6xl">Your recipe could be <em className="font-serif font-normal text-mustard">the next big thing.</em></h2>
          <p className="mt-4 max-w-xl opacity-80">{t("passionCopy")}</p>
          <Link to="/creators" className="mt-8 inline-block rounded-full bg-tomato px-6 py-3.5 font-extrabold text-primary-foreground shadow-pop">{t("apply")}</Link>
        </div>
      </section>
    </>
  );
}
