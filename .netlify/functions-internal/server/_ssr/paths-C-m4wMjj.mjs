import { r as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as courses, c as fromPrice, h as paths, l as getChef, p as interpolate, u as getCourse, v as useStore } from "./store-DqMNyVQw.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as label, c as localizeCourse, l as localizePath, s as localizeChef } from "./Shell-BJ-ZsTQu.mjs";
import { a as SectionTitle, o as toneBg, r as CourseCard } from "./Cards-DkTfdWze.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/paths-C-m4wMjj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var goals = [
	{
		labelKey: "masterDish",
		cats: [
			"Pizza",
			"Sauces",
			"Desserts"
		]
	},
	{
		labelKey: "healthier",
		cats: ["Plant-Based Cooking", "Healthy Cooking"]
	},
	{
		labelKey: "foodBusinessGoal",
		cats: [
			"Food Business",
			"Food Presentation",
			"Desserts"
		]
	}
];
function Finder() {
	const { t, lang } = useStore();
	const [exp, setExp] = (0, import_react.useState)();
	const [goal, setGoal] = (0, import_react.useState)();
	const [budget, setBudget] = (0, import_react.useState)(50);
	const done = exp && goal !== void 0;
	const recs = done ? courses.filter((c) => goals[goal].cats.includes(c.category) && fromPrice(c) <= budget).sort((a, b) => Number(b.level === exp) - Number(a.level === exp)).slice(0, 3) : [];
	const btn = (on) => `rounded-full px-4 py-2 font-bold ${on ? "bg-tomato text-primary-foreground" : "bg-cream"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-[2rem] bg-leaf p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-extrabold",
				children: t("smartFinder")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-bold",
				children: ["1. ", t("experience")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex flex-wrap gap-2",
				children: [
					"Beginner",
					"Intermediate",
					"Advanced"
				].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: btn(exp === l),
					onClick: () => setExp(l),
					children: label(l, lang)
				}, l))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 font-bold",
				children: ["2. ", t("goal")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex flex-wrap gap-2",
				children: goals.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: btn(goal === i),
					onClick: () => setGoal(i),
					children: t(g.labelKey)
				}, g.labelKey))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-4 block font-bold",
				htmlFor: "budget",
				children: [
					"3. ",
					t("budget"),
					": ",
					t("currency"),
					budget
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: "budget",
				type: "range",
				min: 15,
				max: 60,
				value: budget,
				onChange: (e) => setBudget(+e.target.value),
				className: "mt-2 w-full accent-[var(--tomato)]"
			}),
			done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: recs.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: recs.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { c }, c.slug))
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "rounded-2xl bg-cream p-4",
					children: interpolate(t("noMatch"), { amount: `${t("currency")}${budget}` })
				})
			})
		]
	});
}
function Paths() {
	const { t, lang } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			eyebrow: t("learningPaths"),
			title: t("threeWays"),
			accent: t("grow")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 space-y-10",
			children: [paths.map((p, i) => {
				const displayPath = localizePath(p, lang);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: p.id,
					className: "scroll-mt-28 rounded-[2rem] bg-card p-8 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: `grid size-16 place-items-center rounded-full font-serif text-3xl ${toneBg[p.tone]}`,
							children: ["0", i + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-extrabold",
							children: displayPath.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground",
							children: [
								displayPath.blurb,
								" · ~",
								p.weeks,
								" ",
								t("weeks")
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-6 grid gap-4 md:grid-cols-3",
						children: p.courses.map((s, k) => {
							const c = getCourse(s);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/courses/$slug",
								params: { slug: s },
								className: "block rounded-2xl bg-muted p-5 hover:bg-leaf",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", {
										className: "font-bold text-tomato",
										children: [
											t("step"),
											" ",
											k + 1
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "block text-lg",
										children: localizeCourse(c, lang).title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("small", { children: [
										c.hours,
										t("hoursShort"),
										" · ",
										t("with"),
										" ",
										localizeChef(getChef(c.chef), lang).name
									] })
								]
							}) }, s);
						})
					})]
				}, p.id);
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Finder, {})]
		})]
	});
}
//#endregion
export { Paths as component };
