import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/lib/data";
import { ProductCard, SectionTitle } from "@/components/humm/Cards";

export const Route = createFileRoute("/market")({
  head: () => ({
    meta: [
      { title: "HUMM Market — Chef-Recommended Kitchen Tools" },
      {
        name: "description",
        content:
          "Knives, pizza peels, pastry tools and food photography gear recommended by HUMM chefs.",
      },
      { property: "og:title", content: "HUMM Market — Chef-Recommended Tools" },
      { property: "og:description", content: "Curated culinary tools used in HUMM courses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Market,
});

function Market() {
  const cats = Array.from(new Set(products.map((p) => p.category)));
  const [cat, setCat] = useState<string>();
  const list = products.filter((p) => !cat || p.category === cat);
  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <SectionTitle eyebrow="HUMM Market" title="Tools our chefs" accent="actually use" />
      <p className="mt-4 max-w-2xl rounded-2xl bg-mustard/40 p-4 text-sm">
        <b>Affiliate disclosure:</b> products are sold and shipped by independent sellers. HUMM or
        the recommending chef may earn a commission. In this prototype, links are simulated and no
        commission is tracked.
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => setCat(undefined)}
          className={`rounded-full px-4 py-2 text-sm font-bold ${!cat ? "bg-tomato text-primary-foreground" : "bg-card"}`}
        >
          All
        </button>
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-sm font-bold ${cat === c ? "bg-tomato text-primary-foreground" : "bg-card"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </div>
  );
}
