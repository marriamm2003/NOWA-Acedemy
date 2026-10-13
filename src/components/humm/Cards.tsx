import { Link } from "@tanstack/react-router";
import { ExternalLink, Heart, Star } from "lucide-react";
import { fromPrice, getChef, type Chef, type Course, type Product, images } from "@/lib/data";
import { useStore } from "@/lib/store";
import { money } from "./Shell";

export const toneBg = { mustard: "bg-mustard", green: "bg-leaf", tomato: "bg-tomato" } as const;

export function CourseCard({ c }: { c: Course }) {
  const { wishlist, toggleWish } = useStore();
  const chef = getChef(c.chef)!;
  const saved = wishlist.includes(c.slug);
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] bg-card shadow-soft transition hover:-translate-y-1">
      <button
        onClick={() => toggleWish(c.slug)}
        aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
        aria-pressed={saved}
        className="absolute end-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-cream"
      >
        <Heart className={`size-4 ${saved ? "fill-tomato text-tomato" : ""}`} />
      </button>
      <Link to="/courses/$slug" params={{ slug: c.slug }}>
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={c.image}
            alt={c.title}
            loading="lazy"
            width={1024}
            height={768}
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <div className="flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wider">
            <span className="rounded-full bg-leaf px-2 py-1">{c.category}</span>
            <span className="rounded-full bg-muted px-2 py-1">{c.level}</span>
          </div>
          <h3 className="mt-3 text-xl font-extrabold leading-tight">{c.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">with {chef.name}</p>
          <ul className="mt-3 space-y-1 text-sm">
            {c.outcomes.slice(0, 2).map((o) => (
              <li key={o}>— {o}</li>
            ))}
          </ul>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="flex items-center gap-1">
              <Star className="size-4 fill-mustard text-mustard" />
              {c.rating}{" "}
              <span className="text-muted-foreground">
                ({c.reviews}) · {c.hours}h · {c.languages.join("/")}
              </span>
            </span>
            <b>from {money(fromPrice(c))}</b>
          </div>
        </div>
      </Link>
    </article>
  );
}

export function ChefAvatar({ chef, size = "size-16" }: { chef: Chef; size?: string }) {
  return (
    <div
      className={`${size} ${toneBg[chef.tone]} grid shrink-0 place-items-center rounded-full font-serif text-2xl text-deep`}
    >
      {chef.initials}
    </div>
  );
}

export function ChefCard({ chef }: { chef: Chef }) {
  return (
    <Link
      to="/chefs/$slug"
      params={{ slug: chef.slug }}
      className="block rounded-[1.75rem] bg-card p-6 shadow-soft transition hover:-translate-y-1"
    >
      <ChefAvatar chef={chef} />
      <h3 className="mt-4 text-2xl font-extrabold">{chef.name}</h3>
      <p className="font-serif text-lg italic text-tomato">{chef.specialty}</p>
      <p className="mt-2 text-sm text-muted-foreground">{chef.bio}</p>
    </Link>
  );
}

export function ProductCard({ p, label }: { p: Product; label?: string }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[1.5rem] bg-card shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={
            p.category === "Pastry tools"
              ? images.pastryTools
              : p.category === "Chef knives"
                ? images.plating
                : images.tools
          }
          alt={p.name}
          loading="lazy"
          width={1024}
          height={768}
          className="size-full object-cover"
        />
        <span className="absolute start-3 top-3 rounded-full bg-mustard px-2 py-1 text-[11px] font-bold">
          {label ?? p.badge}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-muted-foreground">{p.category}</p>
        <h3 className="font-extrabold">{p.name}</h3>
        <p className="mt-1 flex-1 text-sm">{p.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <b>{money(p.price)}</b>
          <a
            href={p.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-1 rounded-full bg-forest px-3 py-2 text-xs font-bold text-cream"
          >
            Shop at {p.seller} <ExternalLink className="size-3" />
          </a>
        </div>
        <p className="mt-2 text-[10px] text-muted-foreground">
          Affiliate link (simulated). Seller handles fulfilment & returns.
        </p>
      </div>
    </article>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-forest">
        <span className="h-[3px] w-7 bg-tomato" />
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
        {title} {accent && <em className="font-serif font-normal text-tomato">{accent}</em>}
      </h2>
    </div>
  );
}
