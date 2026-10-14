import { createFileRoute } from "@tanstack/react-router";
import { chefs } from "@/lib/data";
import { useStore } from "@/lib/store";
import { ChefCard, SectionTitle } from "@/components/humm/Cards";

export const Route = createFileRoute("/chefs/")({
  head: () => ({
    meta: [
      { title: "Our Chefs — NOWA Studio" },
      {
        name: "description",
        content: "Meet the pizzaiolos, pastry chefs and plant-based cooks teaching on NOWA.",
      },
      { property: "og:title", content: "Our Chefs — NOWA Studio" },
      { property: "og:description", content: "Chef profiles, signature techniques and courses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => {
    const { t, lang } = useStore();
    return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <SectionTitle eyebrow={t("chefs")} title={t("chefsWith")} accent={t("storyWord")} />
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {chefs.map((c) => (
          <ChefCard key={c.slug} chef={c} />
        ))}
      </div>
    </div>
    );
  },
});
