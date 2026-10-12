import type { Module } from "./data";

export const BONUS_THRESHOLD = 2; // eligible paid modules needed to unlock the free bonus mini-course
export const DISCOUNT_THRESHOLD = 3; // eligible modules needed for the bundle discount
export const BUNDLE_DISCOUNT = 0.15; // 15% off eligible modules

export type Quote = {
  original: number;
  discount: number;
  bonusSavings: number;
  total: number;
  eligibleCount: number;
  bonusUnlocked: boolean;
  bonusModule?: Module | undefined;
  discountApplied: boolean;
  /** module ids included in the order (selected + auto-added bonus, deduped) */
  lineIds: string[];
  nextHint?: string | undefined;
};

const round = (n: number) => Math.round(n * 100) / 100;

/** Price a selection of modules belonging to ONE course. */
export function quoteCourse(modules: Module[], selectedIds: string[]): Quote {
  const unique = Array.from(new Set(selectedIds));
  const selected = modules.filter((m) => unique.includes(m.id));
  const bonusModule = modules.find((m) => m.bonus);
  const eligible = selected.filter((m) => m.eligible && !m.bonus);
  const eligibleCount = eligible.length;
  const bonusUnlocked = !!bonusModule && eligibleCount >= BONUS_THRESHOLD;
  const discountApplied = eligibleCount >= DISCOUNT_THRESHOLD;

  const lineIds = selected.map((m) => m.id);
  if (bonusUnlocked && bonusModule && !lineIds.includes(bonusModule.id)) lineIds.push(bonusModule.id);

  const original = round(
    selected.reduce((s, m) => s + m.price, 0) + (bonusUnlocked && bonusModule && !unique.includes(bonusModule.id) ? bonusModule.price : 0),
  );
  const bonusSavings = bonusUnlocked && bonusModule ? bonusModule.price : 0;
  const discount = discountApplied ? round(eligible.reduce((s, m) => s + m.price, 0) * BUNDLE_DISCOUNT) : 0;
  const total = round(Math.max(0, original - bonusSavings - discount));

  let nextHint: string | undefined;
  if (bonusModule && eligibleCount < BONUS_THRESHOLD)
    nextHint = `Add ${BONUS_THRESHOLD - eligibleCount} more eligible module${BONUS_THRESHOLD - eligibleCount > 1 ? "s" : ""} to get “${bonusModule.title.replace(/^Mini-course — /, "")}” free.`;
  else if (eligibleCount < DISCOUNT_THRESHOLD)
    nextHint = `Add ${DISCOUNT_THRESHOLD - eligibleCount} more eligible module to save ${BUNDLE_DISCOUNT * 100}% on the bundle.`;

  return { original, discount, bonusSavings, total, eligibleCount, bonusUnlocked, bonusModule, discountApplied, lineIds, nextHint };
}
