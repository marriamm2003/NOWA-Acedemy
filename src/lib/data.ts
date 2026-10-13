import pizza from "@/assets/hero-pizza.jpg";
import dessert from "@/assets/dessert.jpg";
import plant from "@/assets/plant.jpg";
import tools from "@/assets/tools.jpg";
import sauces from "@/assets/sauces.jpg";
import business from "@/assets/business.jpg";
import plating from "@/assets/plating.jpg";
import pastryTools from "@/assets/pastry-tools.jpg";

export const images = { pizza, dessert, plant, tools, sauces, business, plating, pastryTools };

export const categories = [
  "Pizza",
  "Desserts",
  "Baking",
  "Plant-Based Cooking",
  "Healthy Cooking",
  "Sauces",
  "Professional Techniques",
  "Food Presentation",
  "Food Business",
] as const;
export type Category = (typeof categories)[number];
export const levels = ["Beginner", "Intermediate", "Advanced"] as const;
export type Level = (typeof levels)[number];

export type Module = {
  id: string;
  title: string;
  kind: "level" | "mini";
  price: number;
  lessons: number;
  minutes: number;
  /** Counts toward bundle discount + bonus unlock */
  eligible: boolean;
  /** This module is granted free once the bonus condition is met */
  bonus?: boolean;
  live?: boolean;
};

export type Course = {
  slug: string;
  title: string;
  tagline: string;
  category: Category;
  level: Level;
  chef: string;
  image: string;
  rating: number;
  reviews: number;
  hours: number;
  languages: string[];
  subtitles: string[];
  outcomes: string[];
  equipment: string[];
  modules: Module[];
  products: string[];
  faqs: { q: string; a: string }[];
  createdAt: number;
};

const faqs = [
  {
    q: "Can I buy just one module?",
    a: "Yes. Every level and mini-course is sold on its own. Bundles are optional and only add savings.",
  },
  {
    q: "How long do I keep access?",
    a: "Purchased modules stay in your NOWA Kitchen with lifetime access, including future updates.",
  },
  {
    q: "Is there live feedback?",
    a: "Recorded lessons are self-paced. Modules marked LIVE include a scheduled feedback session with the chef.",
  },
];

function mods(prefix: string, list: Omit<Module, "id">[]): Module[] {
  return list.map((m, i) => ({ ...m, id: `${prefix}-${i + 1}` }));
}

export const courses: Course[] = [
  {
    slug: "pizza-masterclass",
    title: "Pizza Masterclass",
    tagline: "From flour and water to a blistered, airy crust — one level at a time.",
    category: "Pizza",
    level: "Beginner",
    chef: "marco-bellini",
    image: pizza,
    rating: 4.9,
    reviews: 1284,
    hours: 11,
    languages: ["English", "Italian"],
    subtitles: ["English", "Arabic", "Spanish"],
    outcomes: [
      "Build dough by feel and by formula",
      "Master direct and indirect methods",
      "Bake in home and pro ovens",
      "Plate and photograph pizza that sells",
    ],
    equipment: [
      "Pizza steel or stone",
      "Digital scale (0.1g)",
      "Pizza peel",
      "00 flour, fresh yeast, sea salt",
    ],
    modules: mods("pz", [
      {
        title: "Level 01 — Dough Fundamentals",
        kind: "level",
        price: 39,
        lessons: 9,
        minutes: 95,
        eligible: true,
      },
      {
        title: "Level 02 — Direct & Indirect Dough Methods",
        kind: "level",
        price: 49,
        lessons: 11,
        minutes: 120,
        eligible: true,
      },
      {
        title: "Level 03 — Professional Baking Techniques",
        kind: "level",
        price: 59,
        lessons: 12,
        minutes: 140,
        eligible: true,
        live: true,
      },
      {
        title: "Mini-course — Six Signature Pizza Sauces",
        kind: "mini",
        price: 25,
        lessons: 6,
        minutes: 48,
        eligible: false,
        bonus: true,
      },
      {
        title: "Cheese Masterclass",
        kind: "mini",
        price: 29,
        lessons: 7,
        minutes: 62,
        eligible: true,
      },
      {
        title: "Pizza Presentation & Plating",
        kind: "mini",
        price: 19,
        lessons: 5,
        minutes: 40,
        eligible: true,
      },
      {
        title: "Heat, Timing & Cooking Methods",
        kind: "mini",
        price: 29,
        lessons: 6,
        minutes: 55,
        eligible: true,
      },
    ]),
    products: ["peel", "steel", "scale"],
    faqs,
    createdAt: 5,
  },
  {
    slug: "patisserie-layers",
    title: "Modern Patisserie: Layer Cakes",
    tagline: "Sponges, ganaches and glazes engineered for the perfect slice.",
    category: "Desserts",
    level: "Intermediate",
    chef: "layla-haddad",
    image: dessert,
    rating: 4.8,
    reviews: 842,
    hours: 9,
    languages: ["English", "Arabic"],
    subtitles: ["English", "Arabic", "French"],
    outcomes: [
      "Bake level, tender sponges",
      "Temper chocolate and pour mirror glazes",
      "Assemble clean, stable layers",
      "Cost a cake for sale",
    ],
    equipment: ["Cake rings", "Offset spatula", "Thermometer", "Couverture chocolate"],
    modules: mods("pt", [
      {
        title: "Level 01 — Sponges & Bases",
        kind: "level",
        price: 39,
        lessons: 8,
        minutes: 90,
        eligible: true,
      },
      {
        title: "Level 02 — Creams, Ganache & Fillings",
        kind: "level",
        price: 45,
        lessons: 10,
        minutes: 110,
        eligible: true,
      },
      {
        title: "Level 03 — Glazes & Finishing",
        kind: "level",
        price: 55,
        lessons: 9,
        minutes: 105,
        eligible: true,
        live: true,
      },
      {
        title: "Mini-course — Pistachio Praline",
        kind: "mini",
        price: 22,
        lessons: 4,
        minutes: 35,
        eligible: false,
        bonus: true,
      },
      {
        title: "Cake Pricing for Home Bakers",
        kind: "mini",
        price: 19,
        lessons: 5,
        minutes: 38,
        eligible: true,
      },
    ]),
    products: ["spatula", "thermo", "piping"],
    faqs,
    createdAt: 4,
  },
  {
    slug: "plant-based-bowls",
    title: "Plant-Based Power Bowls",
    tagline: "Bold, balanced vegetable cooking that never feels like a compromise.",
    category: "Plant-Based Cooking",
    level: "Beginner",
    chef: "noor-alami",
    image: plant,
    rating: 4.7,
    reviews: 611,
    hours: 6,
    languages: ["English", "Arabic"],
    subtitles: ["English", "Arabic"],
    outcomes: [
      "Roast vegetables for maximum flavour",
      "Build protein-rich grain bases",
      "Make 8 dressings from pantry staples",
      "Plan a week of balanced meals",
    ],
    equipment: ["Sheet pans", "Chef knife", "Blender", "Chickpeas, tahini, grains"],
    modules: mods("pb", [
      {
        title: "Level 01 — Roasting & Texture",
        kind: "level",
        price: 29,
        lessons: 7,
        minutes: 70,
        eligible: true,
      },
      {
        title: "Level 02 — Grains, Legumes & Protein",
        kind: "level",
        price: 35,
        lessons: 8,
        minutes: 85,
        eligible: true,
      },
      {
        title: "Mini-course — Eight Pantry Dressings",
        kind: "mini",
        price: 18,
        lessons: 8,
        minutes: 40,
        eligible: false,
        bonus: true,
      },
      {
        title: "Weekly Meal Planning",
        kind: "mini",
        price: 19,
        lessons: 4,
        minutes: 32,
        eligible: true,
      },
    ]),
    products: ["knife", "board"],
    faqs,
    createdAt: 3,
  },
  {
    slug: "sauce-foundations",
    title: "Mother Sauces & Beyond",
    tagline: "The five classical sauces, then everything you can build from them.",
    category: "Sauces",
    level: "Intermediate",
    chef: "marco-bellini",
    image: sauces,
    rating: 4.8,
    reviews: 503,
    hours: 7,
    languages: ["English"],
    subtitles: ["English", "Arabic"],
    outcomes: [
      "Make roux-based sauces confidently",
      "Emulsify without breaking",
      "Season and reduce like a pro",
    ],
    equipment: ["Heavy saucepan", "Whisk", "Fine sieve"],
    modules: mods("sc", [
      {
        title: "Level 01 — Roux & Velouté",
        kind: "level",
        price: 29,
        lessons: 6,
        minutes: 60,
        eligible: true,
      },
      {
        title: "Level 02 — Emulsions",
        kind: "level",
        price: 35,
        lessons: 7,
        minutes: 72,
        eligible: true,
      },
      {
        title: "Mini-course — Pan Sauces in 10 Minutes",
        kind: "mini",
        price: 15,
        lessons: 4,
        minutes: 30,
        eligible: false,
        bonus: true,
      },
    ]),
    products: ["whisk", "knife"],
    faqs,
    createdAt: 2,
  },
  {
    slug: "food-business-launch",
    title: "Launch Your Food Product",
    tagline: "Costing, branding and a launch plan for the recipe everyone asks about.",
    category: "Food Business",
    level: "Beginner",
    chef: "layla-haddad",
    image: business,
    rating: 4.9,
    reviews: 390,
    hours: 8,
    languages: ["English", "Arabic"],
    subtitles: ["English", "Arabic"],
    outcomes: [
      "Cost a recipe and set a margin",
      "Design packaging that sells",
      "Plan your first 90 days of sales",
    ],
    equipment: ["Spreadsheet", "Smartphone camera", "Your signature recipe"],
    modules: mods("fb", [
      {
        title: "Level 01 — Recipe Costing & Pricing",
        kind: "level",
        price: 45,
        lessons: 8,
        minutes: 80,
        eligible: true,
      },
      {
        title: "Level 02 — Brand & Packaging",
        kind: "level",
        price: 49,
        lessons: 9,
        minutes: 95,
        eligible: true,
      },
      {
        title: "Level 03 — Launch Strategy",
        kind: "level",
        price: 55,
        lessons: 8,
        minutes: 90,
        eligible: true,
        live: true,
      },
      {
        title: "Mini-course — Food Photography on a Phone",
        kind: "mini",
        price: 25,
        lessons: 6,
        minutes: 45,
        eligible: false,
        bonus: true,
      },
    ]),
    products: ["light"],
    faqs,
    createdAt: 6,
  },
  {
    slug: "plating-presentation",
    title: "Plating & Food Presentation",
    tagline: "Colour, height and negative space — make every plate a story.",
    category: "Food Presentation",
    level: "Advanced",
    chef: "noor-alami",
    image: plating,
    rating: 4.6,
    reviews: 274,
    hours: 5,
    languages: ["English"],
    subtitles: ["English", "Arabic"],
    outcomes: [
      "Compose plates using visual weight",
      "Use sauces and garnishes deliberately",
      "Shoot plates for social",
    ],
    equipment: ["Tweezers", "Squeeze bottles", "Neutral plates"],
    modules: mods("pp", [
      {
        title: "Level 01 — Composition Principles",
        kind: "level",
        price: 35,
        lessons: 6,
        minutes: 58,
        eligible: true,
      },
      {
        title: "Level 02 — Sauce Work & Garnish",
        kind: "level",
        price: 39,
        lessons: 7,
        minutes: 66,
        eligible: true,
      },
      {
        title: "Mini-course — Styling for the Camera",
        kind: "mini",
        price: 19,
        lessons: 4,
        minutes: 30,
        eligible: false,
        bonus: true,
      },
    ]),
    products: ["piping", "light"],
    faqs,
    createdAt: 1,
  },
];

export type Chef = {
  slug: string;
  name: string;
  specialty: string;
  city: string;
  initials: string;
  tone: "mustard" | "green" | "tomato";
  bio: string;
  story: string;
  achievements: string[];
  signature: string[];
  products: string[];
  social: { label: string; href: string }[];
};

export const chefs: Chef[] = [
  {
    slug: "marco-bellini",
    name: "Marco Bellini",
    specialty: "Neapolitan pizza & classical sauces",
    city: "Naples → Dubai",
    initials: "MB",
    tone: "tomato",
    bio: "Third-generation pizzaiolo who has trained over 200 professional pizza cooks across the Gulf.",
    story:
      "Marco grew up shaping dough in his grandfather's pizzeria. After a decade running wood-fired kitchens, he started teaching — and discovered he loved watching students pull their first leopard-spotted crust out of a home oven.",
    achievements: [
      "AVPN certified pizzaiolo",
      "Top 50 Pizza Asia 2024",
      "Consultant to 14 restaurants",
    ],
    signature: ["72-hour cold-fermented dough", "San Marzano raw sauce", "Fior di latte timing"],
    products: ["peel", "steel", "scale", "whisk"],
    social: [
      { label: "Instagram", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
  {
    slug: "layla-haddad",
    name: "Layla Haddad",
    specialty: "Modern patisserie & food entrepreneurship",
    city: "Beirut → Cairo",
    initials: "LH",
    tone: "mustard",
    bio: "Pastry chef and founder of a cake brand that went from home kitchen to three stores.",
    story:
      "Layla started selling pistachio cakes from her apartment. With no business training, she learned costing and branding the hard way — and now teaches both the craft and the commerce.",
    achievements: ["Le Cordon Bleu Pâtisserie", "Founder, Maison Layla", "Featured on Fatafeat"],
    signature: ["Pistachio praline layer cake", "Mirror glaze", "Recipe costing sheet"],
    products: ["spatula", "thermo", "piping", "light"],
    social: [
      { label: "Instagram", href: "#" },
      { label: "TikTok", href: "#" },
    ],
  },
  {
    slug: "noor-alami",
    name: "Noor Alami",
    specialty: "Plant-based & healthy cooking",
    city: "Amman",
    initials: "NA",
    tone: "green",
    bio: "Nutrition-trained chef making vegetables the main event for families and restaurants.",
    story:
      "After a health scare in her family, Noor rebuilt the meals she grew up with around vegetables and legumes. Her approach: never subtract flavour.",
    achievements: [
      "Plant-Based Chef Diploma",
      "Author, 'Green Mezze'",
      "Menu consultant for 6 cafés",
    ],
    signature: ["Charred cauliflower shawarma", "Tahini everything dressing", "Freekeh power bowl"],
    products: ["knife", "board"],
    social: [{ label: "Instagram", href: "#" }],
  },
];

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  seller: string;
  url: string;
  badge: "Chef Recommended" | "Used in This Course";
};

export const products: Product[] = [
  {
    id: "peel",
    name: "Perforated Aluminium Pizza Peel",
    category: "Pizza peels & baking tools",
    description: "Sheds excess flour for cleaner launches.",
    price: 48,
    seller: "Kitchen Supply Co.",
    url: "https://example.com/peel",
    badge: "Used in This Course",
  },
  {
    id: "steel",
    name: "6mm Baking Steel",
    category: "Pizza peels & baking tools",
    description: "Pro-level heat transfer for home ovens.",
    price: 89,
    seller: "Forge & Hearth",
    url: "https://example.com/steel",
    badge: "Chef Recommended",
  },
  {
    id: "scale",
    name: "Precision Scale 0.1g",
    category: "Kitchen equipment",
    description: "Accurate yeast and salt every time.",
    price: 24,
    seller: "MeasureWell",
    url: "https://example.com/scale",
    badge: "Used in This Course",
  },
  {
    id: "knife",
    name: "21cm Gyuto Chef Knife",
    category: "Chef knives",
    description: "Balanced carbon-steel all-rounder.",
    price: 135,
    seller: "Hono Knives",
    url: "https://example.com/knife",
    badge: "Chef Recommended",
  },
  {
    id: "board",
    name: "End-Grain Walnut Board",
    category: "Kitchen equipment",
    description: "Kind to edges, heavy enough to stay put.",
    price: 72,
    seller: "Woodline",
    url: "https://example.com/board",
    badge: "Chef Recommended",
  },
  {
    id: "spatula",
    name: "Offset Spatula Set",
    category: "Pastry tools",
    description: "Three sizes for crumb coats and finishing.",
    price: 21,
    seller: "Pâtisserie Pro",
    url: "https://example.com/spatula",
    badge: "Used in This Course",
  },
  {
    id: "thermo",
    name: "Instant-Read Thermometer",
    category: "Pastry tools",
    description: "Tempering and syrups, read in 2 seconds.",
    price: 34,
    seller: "MeasureWell",
    url: "https://example.com/thermo",
    badge: "Used in This Course",
  },
  {
    id: "piping",
    name: "Reusable Piping Bag Kit",
    category: "Pastry tools",
    description: "Silicone bags with 12 stainless tips.",
    price: 19,
    seller: "Pâtisserie Pro",
    url: "https://example.com/piping",
    badge: "Chef Recommended",
  },
  {
    id: "whisk",
    name: "Balloon Whisk 30cm",
    category: "Kitchen equipment",
    description: "Stiff wires for emulsions and creams.",
    price: 16,
    seller: "Kitchen Supply Co.",
    url: "https://example.com/whisk",
    badge: "Chef Recommended",
  },
  {
    id: "light",
    name: "Tabletop Food Photo Light",
    category: "Food photography & styling",
    description: "Soft daylight-balanced panel for food shoots.",
    price: 64,
    seller: "LumaStudio",
    url: "https://example.com/light",
    badge: "Chef Recommended",
  },
];

export const paths = [
  {
    id: "dish-master",
    title: "The Dish Master",
    blurb: "Learn individual techniques and master a signature dish.",
    weeks: 8,
    courses: ["pizza-masterclass", "sauce-foundations", "plating-presentation"],
    tone: "tomato" as const,
  },
  {
    id: "feel-good",
    title: "The Feel-Good Cook",
    blurb: "Explore balanced, healthy and plant-based cooking.",
    weeks: 6,
    courses: ["plant-based-bowls", "sauce-foundations", "plating-presentation"],
    tone: "green" as const,
  },
  {
    id: "food-founder",
    title: "The Food Founder",
    blurb: "Develop a product, cost it, brand it and plan a launch.",
    weeks: 10,
    courses: ["patisserie-layers", "food-business-launch", "plating-presentation"],
    tone: "mustard" as const,
  },
];

export const getCourse = (slug: string) => courses.find((c) => c.slug === slug);
export const getChef = (slug: string) => chefs.find((c) => c.slug === slug);
export const getProduct = (id: string) => products.find((p) => p.id === id);
export const findModule = (id: string) => {
  for (const c of courses) {
    const m = c.modules.find((x) => x.id === id);
    if (m) return { course: c, module: m };
  }
  return undefined;
};
export const fromPrice = (c: Course) =>
  Math.min(...c.modules.filter((m) => !m.bonus).map((m) => m.price));
