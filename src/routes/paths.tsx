import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { courses, fromPrice, getChef, getCourse, paths, type Category } from "@/lib/data";
import { CourseCard, SectionTitle, toneBg } from "@/components/humm/Cards";

export const Route = createFileRoute("/paths")({
  head: () => ({
    meta: [
      { title: "Learning Paths & Course Finder — HUMM Academy" },
      { name: "description", content: "The Dish Master, The Feel-Good Cook and The Food Founder — plus a smart course finder." },
      { property: "og:title", content: "Learning Paths — HUMM Academy" },
      { property: "og:description", content: "Guided culinary journeys and a quick quiz to find your next class." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Paths,
});

const goals: { label: string; cats: Category[] }[] = [
  { label: "Master a signature dish", cats: ["Pizza", "Sauces", "Desserts"] },
  { label: "Eat healthier", cats: ["Plant-Based Cooking", "Healthy Cooking"] },
  { label: "Start a food business", cats: ["Food Business", "Food Presentation", "Desserts"] },
];

function Finder() {
  const [exp, setExp] = useState<string>();
  const [goal, setGoal] = useState<number>();
  const [budget, setBudget] = useState(50);
  const done = exp && goal !== undefined;
  const recs = done
    ? courses
        .filter((c) => goals[goal!]!.cats.includes(c.category) && fromPrice(c) <= budget)
        .sort((a, b) => Number(b.level === exp) - Number(a.level === exp))
        .slice(0, 3)
    : [];
  const btn = (on: boolean) => `rounded-full px-4 py-2 font-bold ${on ? "bg-tomato text-primary-foreground" : "bg-cream"}`;
  return (
    <div className="rounded-[2rem] bg-leaf p-8">
      <h2 className="text-3xl font-extrabold">Smart Course Finder</h2>
      <p className="mt-4 font-bold">1. Your experience</p>
      <div className="mt-2 flex flex-wrap gap-2">{["Beginner", "Intermediate", "Advanced"].map((l) => <button key={l} className={btn(exp === l)} onClick={() => setExp(l)}>{l}</button>)}</div>
      <p className="mt-4 font-bold">2. Your goal</p>
      <div className="mt-2 flex flex-wrap gap-2">{goals.map((g, i) => <button key={g.label} className={btn(goal === i)} onClick={() => setGoal(i)}>{g.label}</button>)}</div>
      <label className="mt-4 block font-bold" htmlFor="budget">3. Budget per module: ${budget}</label>
      <input id="budget" type="range" min={15} max={60} value={budget} onChange={(e) => setBudget(+e.target.value)} className="mt-2 w-full accent-[var(--tomato)]" />
      {done && (
        <div className="mt-6">
          {recs.length ? <div className="grid gap-6 md:grid-cols-3">{recs.map((c) => <CourseCard key={c.slug} c={c} />)}</div> : <p className="rounded-2xl bg-cream p-4">No match under ${budget}. Try raising your budget a little.</p>}
        </div>
      )}
    </div>
  );
}

function Paths() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <SectionTitle eyebrow="Learning paths" title="Three ways to" accent="grow." />
      <div className="mt-10 space-y-10">
        {paths.map((p, i) => (
          <section key={p.id} id={p.id} className="scroll-mt-28 rounded-[2rem] bg-card p-8 shadow-soft">
            <div className="flex flex-wrap items-center gap-4">
              <span className={`grid size-16 place-items-center rounded-full font-serif text-3xl ${toneBg[p.tone]}`}>0{i + 1}</span>
              <div><h2 className="text-3xl font-extrabold">{p.title}</h2><p className="text-muted-foreground">{p.blurb} · ~{p.weeks} weeks</p></div>
            </div>
            <ol className="mt-6 grid gap-4 md:grid-cols-3">
              {p.courses.map((s, k) => {
                const c = getCourse(s)!;
                return (
                  <li key={s}>
                    <Link to="/courses/$slug" params={{ slug: s }} className="block rounded-2xl bg-muted p-5 hover:bg-leaf">
                      <small className="font-bold text-tomato">Step {k + 1}</small>
                      <b className="block text-lg">{c.title}</b>
                      <small>{c.hours}h · with {getChef(c.chef)!.name}</small>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
        <Finder />
      </div>
    </div>
  );
}
