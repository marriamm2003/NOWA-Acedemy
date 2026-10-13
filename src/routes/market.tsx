import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "@/lib/data";
import { localizeProduct } from "@/lib/localized";
import { useStore } from "@/lib/store";
import { ProductCard, SectionTitle } from "@/components/humm/Cards";

export const Route = createFileRoute("/market")({
  head: () => ({
    meta: [
      { title: "NOWA Market — Chef-Recommended Kitchen Tools" },
      {
        name: "description",
        content:
          "Knives, pizza peels, pastry tools and food photography gear recommended by NOWA chefs.",
      },
      { property: "og:title", content: "NOWA Market — Chef-Recommended Tools" },
      { property: "og:description", content: "Curated culinary tools used in NOWA courses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Market,
});

function Market() {
  const { t, lang } = useStore();
  const cats = Array.from(new Set(products.map((p) => p.category)));
  const [cat, setCat] = useState<string>();
  const list = products.filter((p) => !cat || p.category === cat);
  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <SectionTitle eyebrow={t("market")} title={t("toolsTitle")} accent={t("toolsAccent")} />
      <p className="mt-4 max-w-2xl rounded-2xl bg-mustard/40 p-4 text-sm">
        <b>{t("affiliate")}</b> {t("affiliateCopy")}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => setCat(undefined)}
          className={`rounded-full px-4 py-2 text-sm font-bold ${!cat ? "bg-tomato text-primary-foreground" : "bg-card"}`}
        >
          {t("all")}
        </button>
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-sm font-bold ${cat === c ? "bg-tomato text-primary-foreground" : "bg-card"}`}
          >
            {localizeProduct(products.find((p) => p.category === c)!, lang).category}
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
