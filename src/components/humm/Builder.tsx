import { BookOpen, Check, Gift, Lock, Radio } from "lucide-react";
import type { Course } from "@/lib/data";
import {
  quoteCourse,
  BONUS_THRESHOLD,
  DISCOUNT_THRESHOLD,
  BUNDLE_DISCOUNT,
  WORKBOOK_PRICE,
} from "@/lib/pricing";
import { useStore } from "@/lib/store";
import { money } from "./Shell";

export function CourseBuilder({ course }: { course: Course }) {
  const { bag, toggleBag, owned, setBagOpen, workbooks, toggleWorkbook } = useStore();
  const selected = bag.filter((id) => course.modules.some((m) => m.id === id));
  const withWorkbook = workbooks.includes(course.slug);
  const q = quoteCourse(course.modules, selected, withWorkbook);
  const hasBonus = course.modules.some((m) => m.bonus);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
      <ol className="space-y-3">
        {course.modules.map((m, i) => {
          const isOwned = owned.has(m.id);
          const on = selected.includes(m.id);
          const freeBonus = m.bonus && q.bonusUnlocked;
          return (
            <li key={m.id}>
              <button
                disabled={isOwned}
                onClick={() => toggleBag(m.id)}
                aria-pressed={on}
                className={`flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-start transition ${on || freeBonus ? "border-tomato bg-card" : "border-transparent bg-card/70 hover:border-border"} ${isOwned ? "opacity-60" : ""}`}
              >
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-full font-extrabold ${on || freeBonus || isOwned ? "bg-tomato text-primary-foreground" : "bg-muted"}`}
                >
                  {on || isOwned ? (
                    <Check className="size-4" />
                  ) : freeBonus ? (
                    <Gift className="size-4" />
                  ) : (
                    String(i + 1).padStart(2, "0")
                  )}
                </span>
                <span className="flex-1">
                  <b className="block">{m.title}</b>
                  <span className="text-xs text-muted-foreground">
                    {m.lessons} recorded lessons · {m.minutes} min
                    {m.live && (
                      <span className="ms-2 inline-flex items-center gap-1 font-bold text-forest">
                        <Radio className="size-3" />
                        LIVE feedback
                      </span>
                    )}
                    {m.eligible && (
                      <span className="ms-2 font-bold text-forest">· bundle eligible</span>
                    )}
                    {m.bonus && <span className="ms-2 font-bold text-tomato">· bonus</span>}
                  </span>
                </span>
                <span className="text-end font-extrabold">
                  {isOwned ? (
                    "Owned"
                  ) : freeBonus ? (
                    <>
                      <s className="block text-xs text-muted-foreground">{money(m.price)}</s>
                      <span className="text-tomato">FREE</span>
                    </>
                  ) : (
                    money(m.price)
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <aside className="h-fit rounded-[1.75rem] bg-deep p-6 text-cream lg:sticky lg:top-28">
        <p className="text-xs font-bold uppercase tracking-widest text-mustard">Your build</p>
        <button
          type="button"
          onClick={() => toggleWorkbook(course.slug)}
          disabled={!selected.length}
          aria-pressed={withWorkbook}
          className={`mt-5 flex w-full items-center gap-3 rounded-2xl border p-3 text-start transition ${withWorkbook ? "border-mustard bg-mustard/15" : "border-cream/20 hover:border-mustard/60"} disabled:cursor-not-allowed disabled:opacity-50`}
        >
          <BookOpen className="size-5 shrink-0 text-mustard" />
          <span className="flex-1">
            <b className="block">Printable course workbook</b>
            <span className="text-xs opacity-75">Recipes, practice notes and progress pages</span>
          </span>
          <span className="text-sm font-extrabold">+{money(WORKBOOK_PRICE)}</span>
        </button>
        <div className="mt-4 space-y-2 text-sm">
          <Row label="Original price" value={<s className="opacity-70">{money(q.original)}</s>} />
          {q.bonusUnlocked && <Row label="Bonus mini-course" value={`−${money(q.bonusSavings)}`} />}
          {q.discountApplied && (
            <Row label={`Bundle ${BUNDLE_DISCOUNT * 100}% off`} value={`−${money(q.discount)}`} />
          )}
          {q.workbookPrice > 0 && (
            <Row label="Course workbook" value={`+${money(q.workbookPrice)}`} />
          )}
        </div>
        <div className="mt-4 flex items-end justify-between border-t border-cream/20 pt-4">
          <span>Total</span>
          <span className="text-4xl font-extrabold">{money(q.total)}</span>
        </div>
        {q.original - q.total > 0 && (
          <p className="mt-1 text-end text-sm font-bold text-mustard">
            You save {money(q.original - q.total)}
          </p>
        )}
        {q.nextHint && <p className="mt-4 rounded-xl bg-forest p-3 text-sm">{q.nextHint}</p>}
        <div className="mt-4 space-y-1 text-xs opacity-80">
          {hasBonus && (
            <p>• Pick {BONUS_THRESHOLD} eligible modules → bonus mini-course free (added once).</p>
          )}
          <p>
            • Pick {DISCOUNT_THRESHOLD}+ eligible modules → {BUNDLE_DISCOUNT * 100}% off those
            modules.
          </p>
          <p>• The bonus module itself doesn't count toward eligibility.</p>
          <p>• Workbooks are optional and added per course.</p>
        </div>
        <button
          disabled={!selected.length}
          onClick={() => setBagOpen(true)}
          className="mt-5 w-full rounded-full bg-tomato py-3 font-extrabold text-primary-foreground shadow-pop disabled:opacity-40"
        >
          {selected.length ? (
            "Review bag"
          ) : (
            <span className="inline-flex items-center gap-2">
              <Lock className="size-4" />
              Select a module
            </span>
          )}
        </button>
      </aside>
    </div>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
