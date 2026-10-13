import { createFileRoute } from "@tanstack/react-router";
import { chefs } from "@/lib/data";
import { ChefCard, SectionTitle } from "@/components/humm/Cards";

export const Route = createFileRoute("/chefs/")({
  head: () => ({
    meta: [
      { title: "Our Chefs — HUMM Academy" },
      { name: "description", content: "Meet the pizzaiolos, pastry chefs and plant-based cooks teaching on HUMM." },
      { property: "og:title", content: "Our Chefs — HUMM Academy" },
      { property: "og:description", content: "Chef profiles, signature techniques and courses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <SectionTitle eyebrow="Chefs" title="Chefs with a" accent="story" />
      <div className="mt-8 grid gap-6 md:grid-cols-3">{chefs.map((c) => <ChefCard key={c.slug} chef={c} />)}</div>
    </div>
  ),
});
