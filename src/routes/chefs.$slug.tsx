import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { courses, getChef, getProduct, paths } from "@/lib/data";
import { ChefAvatar, CourseCard, ProductCard } from "@/components/humm/Cards";

export const Route = createFileRoute("/chefs/$slug")({
  loader: ({ params }) => {
    const c = getChef(params.slug);
    if (!c) throw notFound();
    return { name: c.name, specialty: c.specialty };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — HUMM Academy Chef` },
          { name: "description", content: `${loaderData.name}: ${loaderData.specialty}. Courses, signature techniques and recommended tools.` },
          { property: "og:title", content: `${loaderData.name} — HUMM Academy` },
          { property: "og:description", content: loaderData.specialty },
          { property: "og:type", content: "profile" },
          { name: "twitter:card", content: "summary" },
        ]
      : [{ title: "Chef not found — HUMM Academy" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => <div className="py-24 text-center"><h1 className="text-4xl font-extrabold">Chef not found</h1><Link to="/chefs" className="underline">All chefs</Link></div>,
  component: ChefPage,
});

function ChefPage() {
  const { slug } = Route.useParams();
  const chef = getChef(slug)!;
  const theirs = courses.filter((c) => c.chef === chef.slug);
  const theirPaths = paths.filter((p) => p.courses.some((s) => theirs.some((c) => c.slug === s)));
  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <section className="grid items-center gap-10 rounded-[2.5rem] bg-card p-8 shadow-soft md:grid-cols-[auto_1fr] md:p-12">
        <ChefAvatar chef={chef} size="size-40 text-6xl" />
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-forest">{chef.city}</p>
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">{chef.name}</h1>
          <p className="mt-2 font-serif text-2xl italic text-tomato">{chef.specialty}</p>
          <p className="mt-4 max-w-2xl leading-relaxed">{chef.story}</p>
          <div className="mt-4 flex gap-3">{chef.social.map((s) => <a key={s.label} href={s.href} className="rounded-full border border-border px-4 py-2 text-sm font-bold">{s.label}</a>)}</div>
        </div>
      </section>
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-[1.75rem] bg-leaf p-7"><h2 className="text-2xl font-extrabold">Achievements</h2><ul className="mt-3 space-y-2">{chef.achievements.map((a) => <li key={a}>★ {a}</li>)}</ul></div>
        <div className="rounded-[1.75rem] bg-mustard p-7"><h2 className="text-2xl font-extrabold">Signature techniques</h2><ul className="mt-3 space-y-2">{chef.signature.map((a) => <li key={a}>✺ {a}</li>)}</ul></div>
      </section>
      <h2 className="mt-14 text-3xl font-extrabold">Courses by {chef.name.split(" ")[0]}</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">{theirs.map((c) => <CourseCard key={c.slug} c={c} />)}</div>
      {theirPaths.length > 0 && <p className="mt-6 text-sm">Featured in: {theirPaths.map((p) => <Link key={p.id} to="/paths" hash={p.id} className="me-3 font-bold underline">{p.title}</Link>)}</p>}
      <h2 className="mt-14 text-3xl font-extrabold">In {chef.name.split(" ")[0]}'s kitchen</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{chef.products.map((id) => <ProductCard key={id} p={getProduct(id)!} label="Chef Recommended" />)}</div>
      <div className="mt-14 rounded-[2rem] bg-deep p-10 text-cream">
        <h2 className="text-3xl font-extrabold">Work with {chef.name}</h2>
        <p className="mt-2 opacity-80">Brand partnerships, private classes and consulting are managed by HUMM talent.</p>
        <Link to="/creators" className="mt-5 inline-block rounded-full bg-tomato px-6 py-3 font-extrabold text-primary-foreground shadow-pop">Partnership enquiry</Link>
      </div>
    </div>
  );
}
