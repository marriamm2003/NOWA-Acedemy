import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, PlayCircle, Star } from "lucide-react";
import { courses, getChef, getCourse, getProduct } from "@/lib/data";
import { localizeChef, localizeCourse, label as localizeLabel, languageLabel } from "@/lib/localized";
import { useStore } from "@/lib/store";
import { CourseBuilder } from "@/components/humm/Builder";
import { ChefAvatar, CourseCard, ProductCard, SectionTitle } from "@/components/humm/Cards";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { title: course.title, tagline: course.tagline };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — NOWA Studio` },
          { name: "description", content: loaderData.tagline },
          { property: "og:title", content: `${loaderData.title} — NOWA Studio` },
          { property: "og:description", content: loaderData.tagline },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Course not found — NOWA Studio" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: CourseNotFound,
  component: CoursePage,
});

const reviewsAr = [
  { n: "رانية", r: 5, t: "شراء مستوى واحد في كل مرة جعل البداية سهلة جداً." },
  { n: "دانيال", r: 5, t: "شرح واضح ودافئ. جلسة التقييم المباشر كانت تستحق كل قرش." },
  { n: "منى", r: 4, t: "أحببته — أتمنى لقطات أقرب أكثر." },
];
const reviewsEn = [
  { n: "Rania", r: 5, t: "Buying one level at a time made it so easy to start." },
  { n: "Daniel", r: 5, t: "Clear, warm teaching. The live feedback session was worth it." },
  { n: "Mona", r: 4, t: "Loved it — I'd like even more close-up shots." },
];

function CourseNotFound() {
  const { t } = useStore();
  return (
    <div className="mx-auto max-w-xl px-5 py-24 text-center">
      <h1 className="text-4xl font-extrabold">{t("courseNotFound")}</h1>
      <Link to="/courses" className="mt-4 inline-block underline">
        {t("browseCourses")}
      </Link>
    </div>
  );
}

function CoursePage() {
  const { slug } = Route.useParams();
  const c = getCourse(slug)!;
  const chef = getChef(c.chef)!;
  const { wishlist, toggleWish, lang, t } = useStore();
  const [previewOpen, setPreviewOpen] = useState(false);
  const displayCourse = localizeCourse(c, lang);
  const displayChef = localizeChef(chef, lang);
  const related = courses
    .filter((x) => x.slug !== c.slug && (x.category === c.category || x.chef === c.chef))
    .slice(0, 3);
  const fallback = related.length ? related : courses.filter((x) => x.slug !== c.slug).slice(0, 3);

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-2">
        <div>
          <Link
            to="/courses"
            search={{ cat: c.category }}
            className="rounded-full bg-leaf px-3 py-1 text-xs font-bold uppercase tracking-wider"
          >
            {localizeLabel(c.category, lang)}
          </Link>
          <h1 className="mt-4 text-5xl font-extrabold leading-none tracking-tight md:text-7xl">
            {displayCourse.title}
          </h1>
          <p className="mt-4 font-serif text-2xl italic text-tomato">{displayCourse.tagline}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <Star className="size-4 fill-mustard text-mustard" />
              <b>{c.rating}</b> ({c.reviews} {t("reviews")})
            </span>
            <span>{localizeLabel(c.level, lang)}</span>
            <span>{c.hours} {t("hoursTotal")}</span>
            <span>{t("audio")}: {c.languages.map((x) => languageLabel(x, lang)).join(", ")}</span>
            <span>{t("subtitles")}: {c.subtitles.map((x) => languageLabel(x, lang)).join(", ")}</span>
          </div>
          <Link
            to="/chefs/$slug"
            params={{ slug: chef.slug }}
            className="mt-6 flex items-center gap-3"
          >
            <ChefAvatar chef={chef} size="size-12" />
            <span>
              <b className="block">{displayChef.name}</b>
              <small className="text-muted-foreground">{displayChef.specialty}</small>
            </span>
          </Link>
          <div className="mt-6 flex gap-3">
            <a
              href="#builder"
              className="rounded-full bg-tomato px-6 py-3 font-extrabold text-primary-foreground shadow-pop"
            >
              {t("buildCourse")}
            </a>
            <button
              onClick={() => toggleWish(c.slug)}
              aria-pressed={wishlist.includes(c.slug)}
              className="flex items-center gap-2 rounded-full border border-border px-5 py-3 font-bold"
            >
              <Heart
                className={`size-4 ${wishlist.includes(c.slug) ? "fill-tomato text-tomato" : ""}`}
              />
              {t("save")}
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src={c.image}
            alt={displayCourse.title}
            width={1024}
            height={768}
            className="aspect-[4/3] size-full object-cover"
          />
          <button
            onClick={() => setPreviewOpen(true)}
            className="absolute inset-0 grid place-items-center bg-deep/20 text-cream"
            aria-label={t("playPreview")}
          >
            <span className="flex items-center gap-2 rounded-full bg-deep/80 px-5 py-3 font-bold">
              <PlayCircle /> {t("watchPreview")}
            </span>
          </button>
        </div>
      </section>

      <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("previewTitle")}</DialogTitle>
            <DialogDescription>{t("previewCopy")}</DialogDescription>
          </DialogHeader>
          <button
            onClick={() => setPreviewOpen(false)}
            className="mt-4 w-full rounded-full bg-tomato py-3 font-extrabold text-primary-foreground"
          >
            {t("previewClose")}
          </button>
        </DialogContent>
      </Dialog>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2">
        <div className="rounded-[1.75rem] bg-leaf p-7">
          <h2 className="text-2xl font-extrabold">{t("outcomes")}</h2>
          <ul className="mt-3 space-y-2">
            {displayCourse.outcomes.map((o) => (
              <li key={o}>✓ {o}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.75rem] bg-card p-7">
          <h2 className="text-2xl font-extrabold">{t("equipment")}</h2>
          <ul className="mt-3 space-y-2">
            {displayCourse.equipment.map((o) => (
              <li key={o}>• {o}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="builder" className="mx-auto mt-16 max-w-7xl scroll-mt-28 px-5">
        <SectionTitle
          eyebrow={t("builderEyebrow")}
          title={t("builderTitle")}
          accent={t("builderAccent")} 
        />
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {t("builderCopy")}
        </p>
        <div className="mt-8">
          <CourseBuilder course={c} />
        </div>
      </section>

      <section className="mx-auto mt-16 grid max-w-7xl gap-10 px-5 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold">{t("meetChef")}</h2>
          <p className="mt-3 leading-relaxed">{displayChef.story}</p>
          <h2 className="mt-10 text-3xl font-extrabold">{t("reviewsTitle")}</h2>
          <div className="mt-3 space-y-3">
            {(lang === "ar" ? reviewsAr : reviewsEn).map((r) => (
              <div key={r.n} className="rounded-2xl bg-card p-4">
                <b>{r.n}</b> <span className="text-mustard">{"★".repeat(r.r)}</span>
                <p className="text-sm">{r.t}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-extrabold">{t("faq")}</h2>
          <Accordion type="single" collapsible className="mt-3">
            {displayCourse.faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-start font-bold">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-5">
        <h2 className="text-3xl font-extrabold">{t("usedCourse")}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.products.map((id) => (
            <ProductCard key={id} p={getProduct(id)!} label={t("usedCourse")} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-5">
        <h2 className="text-3xl font-extrabold">{t("love")}</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {fallback.map((x) => (
            <CourseCard key={x.slug} c={x} />
          ))}
        </div>
      </section>
    </>
  );
}
