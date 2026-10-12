import { describe, it, expect } from "vitest";
import { quoteCourse } from "./pricing";
import { getCourse } from "./data";

const pizza = getCourse("pizza-masterclass")!.modules;
// pz-1 39, pz-2 49, pz-3 59, pz-4 sauces 25 (bonus), pz-5 29

describe("modular course pricing", () => {
  it("single module is full price, no bonus", () => {
    const q = quoteCourse(pizza, ["pz-1"]);
    expect(q.total).toBe(39);
    expect(q.bonusUnlocked).toBe(false);
  });

  it("two eligible modules unlock Signature Sauces for free", () => {
    const q = quoteCourse(pizza, ["pz-1", "pz-2"]);
    expect(q.bonusUnlocked).toBe(true);
    expect(q.lineIds).toContain("pz-4");
    expect(q.total).toBe(88);
  });

  it("bonus is never duplicated or charged when already selected", () => {
    const q = quoteCourse(pizza, ["pz-1", "pz-2", "pz-4", "pz-4"]);
    expect(q.lineIds.filter((i) => i === "pz-4")).toHaveLength(1);
    expect(q.total).toBe(88);
  });

  it("three eligible modules get 15% off eligible modules", () => {
    const q = quoteCourse(pizza, ["pz-1", "pz-2", "pz-3"]);
    // 147 * 0.15 = 22.05
    expect(q.discount).toBe(22.05);
    expect(q.total).toBe(124.95);
  });

  it("bonus module alone does not count toward eligibility", () => {
    const q = quoteCourse(pizza, ["pz-4", "pz-1"]);
    expect(q.bonusUnlocked).toBe(false);
    expect(q.total).toBe(64);
  });
});
