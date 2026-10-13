import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SectionTitle } from "@/components/humm/Cards";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/creators")({
  head: () => ({
    meta: [
      { title: "From Passion to Business — NOWA Creators" },
      {
        name: "description",
        content:
          "Talent representation, course production, branding and launch support for food creators. Apply to NOWA.",
      },
      { property: "og:title", content: "From Passion to Business — NOWA Creators" },
      {
        property: "og:description",
        content: "Turn your recipe or food product into a real business with NOWA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Creators,
});

const services = [
  "Talent discovery & representation",
  "Project management",
  "Course production",
  "Personal branding",
  "Food photography & content planning",
  "Product development support",
  "Pricing & costing guidance",
  "Launch strategy",
  "Brand & product partnerships",
];
const steps = ["Apply", "Discovery call", "Plan & produce", "Launch & grow"];

function Creators() {
  const { t, lang } = useStore();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState<string>();
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const schema = z.object({
      name: z.string().trim().min(2, t("pleaseName")).max(100),
      email: z.string().trim().email(t("pleaseEmail")).max(255),
      type: z.enum(["Chef", "Food creator", "Small food business"], { message: t("pleaseChoose") }),
      idea: z.string().trim().min(20, t("pleaseIdea")).max(1000),
      link: z.union([z.literal(""), z.string().trim().url(t("pleaseUrl")).max(255)]),
      consent: z.literal(true, { message: t("pleaseConsent") }),
    });
    const r = schema.safeParse({
      name: f.get("name"),
      email: f.get("email"),
      type: f.get("type"),
      idea: f.get("idea"),
      link: f.get("link") ?? "",
      consent: f.get("consent") === "on",
    });
    if (!r.success) {
      setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
      return;
    }
    setErrors({});
    setSent(r.data.name.split(" ")[0]);
  };
  const services = lang === "ar" ? ["اكتشاف المواهب وتمثيلها", "إدارة المشروعات", "إنتاج الكورسات", "بناء العلامة الشخصية", "تصوير الطعام وتخطيط المحتوى", "دعم تطوير المنتجات", "إرشاد التسعير وحساب التكاليف", "استراتيجية الإطلاق", "شراكات العلامات والمنتجات"] : ["Talent discovery & representation", "Project management", "Course production", "Personal branding", "Food photography & content planning", "Product development support", "Pricing & costing guidance", "Launch strategy", "Brand & product partnerships"];
  const steps = lang === "ar" ? ["قدّم الطلب", "مكالمة تعارف", "خطط ونفّذ", "أطلق وطوّر"] : ["Apply", "Discovery call", "Plan & produce", "Launch & grow"];
  const field =
    "mt-1 w-full rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-tomato";
  const Err = ({ k }: { k: string }) =>
    errors[k] ? (
      <p className="mt-1 text-sm font-bold text-tomato" role="alert">
        {errors[k]}
      </p>
    ) : null;

  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <SectionTitle
        eyebrow={t("fromPassion")}
        title={t("gotRecipe")}
        accent={t("buildBusiness")} 
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s}
            className={`rounded-2xl p-5 font-bold ${["bg-leaf", "bg-mustard", "bg-card"][i % 3]}`}
          >
            {s}
          </div>
        ))}
      </div>
      <ol className="mt-12 grid gap-4 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s} className="rounded-2xl bg-deep p-5 text-cream">
            <span className="font-serif text-4xl text-mustard">0{i + 1}</span>
            <b className="block">{s}</b>
          </li>
        ))}
      </ol>

      <section className="mx-auto mt-16 max-w-2xl rounded-[2rem] bg-card p-8 shadow-soft">
        {sent ? (
          <div className="text-center" role="status">
            <p className="text-5xl">🎉</p>
            <h2 className="mt-3 text-3xl font-extrabold">{t("thanks").replace("{name}", sent)}</h2>
            <p className="mt-2 text-muted-foreground">
              {t("applicationCaptured")}
            </p>
            <button
              onClick={() => setSent(undefined)}
              className="mt-5 rounded-full bg-forest px-5 py-2 font-bold text-cream"
            >
              {t("submitAnother")}
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="space-y-4">
            <h2 className="text-3xl font-extrabold">{t("creatorApplication")}</h2>
            <label className="block font-bold">
              {t("fullName")}
              <input name="name" maxLength={100} className={field} />
            </label>
            <Err k="name" />
            <label className="block font-bold">
              Email
              <input name="email" type="email" maxLength={255} className={field} />
            </label>
            <Err k="email" />
            <label className="block font-bold">
              {t("creatorType")}
              <select name="type" defaultValue="" className={field}>
                <option value="" disabled>
                  {t("select")}
                </option>
                <option>{t("chef")}</option>
                <option>{t("foodCreator")}</option>
                <option>{t("smallFoodBusiness")}</option>
              </select>
            </label>
            <Err k="type" />
            <label className="block font-bold">
              {t("idea")}
              <textarea name="idea" rows={4} maxLength={1000} className={field} />
            </label>
            <Err k="idea" />
            <label className="block font-bold">
              {t("portfolio")}
              <input name="link" maxLength={255} className={field} placeholder="https://" />
            </label>
            <Err k="link" />
            <label className="flex items-center gap-2">
              <input type="checkbox" name="consent" /> {t("consent")}
            </label>
            <Err k="consent" />
            <button className="w-full rounded-full bg-tomato py-3 font-extrabold text-primary-foreground shadow-pop">
              {t("sendApplication")}
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
