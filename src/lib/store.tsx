import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { courses, findModule } from "./data";
import { quoteCourse } from "./pricing";
import { dict, type Lang } from "./i18n";

export type Order = { id: string; date: string; moduleIds: string[]; total: number; demo: true };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: keyof (typeof dict)["en"]) => string;
  bag: string[];
  toggleBag: (id: string) => void;
  setBag: (ids: string[]) => void;
  wishlist: string[];
  toggleWish: (slug: string) => void;
  orders: Order[];
  placeOrder: () => Order | null;
  owned: Set<string>;
  bagQuote: { total: number; original: number; groups: { slug: string; quote: ReturnType<typeof quoteCourse> }[] };
  bagOpen: boolean;
  setBagOpen: (b: boolean) => void;
};

const StoreCtx = createContext<Ctx | null>(null);

const seedOrder: Order = { id: "HUMM-DEMO-1001", date: "2026-09-02", moduleIds: ["pt-1", "pt-2", "pt-4", "pb-1"], total: 113, demo: true };

function load<T>(k: string, d: T): T {
  try {
    const v = localStorage.getItem(k);
    return v ? (JSON.parse(v) as T) : d;
  } catch {
    return d;
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [bag, setBag] = useState<string[]>([]);
  const [wishlist, setWish] = useState<string[]>([]);
  const [orders, setOrders] = useState<Order[]>([seedOrder]);
  const [ready, setReady] = useState(false);
  const [bagOpen, setBagOpen] = useState(false);

  useEffect(() => {
    setLang(load("humm-lang", "en"));
    setBag(load("humm-bag", []));
    setWish(load("humm-wish", []));
    setOrders(load("humm-orders", [seedOrder]));
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("humm-lang", JSON.stringify(lang));
    localStorage.setItem("humm-bag", JSON.stringify(bag));
    localStorage.setItem("humm-wish", JSON.stringify(wishlist));
    localStorage.setItem("humm-orders", JSON.stringify(orders));
  }, [ready, lang, bag, wishlist, orders]);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const owned = useMemo(() => new Set(orders.flatMap((o) => o.moduleIds)), [orders]);

  const bagQuote = useMemo(() => {
    const groups = courses
      .map((c) => {
        const ids = bag.filter((id) => c.modules.some((m) => m.id === id));
        return ids.length ? { slug: c.slug, quote: quoteCourse(c.modules, ids) } : null;
      })
      .filter(Boolean) as { slug: string; quote: ReturnType<typeof quoteCourse> }[];
    return {
      groups,
      total: Math.round(groups.reduce((s, g) => s + g.quote.total, 0) * 100) / 100,
      original: Math.round(groups.reduce((s, g) => s + g.quote.original, 0) * 100) / 100,
    };
  }, [bag]);

  const value: Ctx = {
    lang,
    setLang,
    t: (k) => dict[lang][k] ?? dict.en[k],
    bag,
    setBag,
    toggleBag: (id) => setBag((b) => (b.includes(id) ? b.filter((x) => x !== id) : [...b, id].filter((x) => !owned.has(x) && findModule(x)))),
    wishlist,
    toggleWish: (s) => setWish((w) => (w.includes(s) ? w.filter((x) => x !== s) : [...w, s])),
    orders,
    placeOrder: () => {
      if (!bag.length) return null;
      const order: Order = {
        id: `HUMM-DEMO-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toISOString().slice(0, 10),
        moduleIds: bagQuote.groups.flatMap((g) => g.quote.lineIds),
        total: bagQuote.total,
        demo: true,
      };
      setOrders((o) => [order, ...o]);
      setBag([]);
      return order;
    },
    owned,
    bagQuote,
    bagOpen,
    setBagOpen,
  };
  return <StoreCtx.Provider value={value}>{children}</StoreCtx.Provider>;
}

export function useStore() {
  const c = useContext(StoreCtx);
  if (!c) throw new Error("useStore outside provider");
  return c;
}
