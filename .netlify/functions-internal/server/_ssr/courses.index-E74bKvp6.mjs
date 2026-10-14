import { r as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as courses, c as fromPrice, l as getChef, m as levels, r as categories, v as useStore } from "./store-C5BeBkQw.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as label, c as localizeCourse, s as localizeChef } from "./Shell-CxGIj84P.mjs";
import { a as SectionTitle, r as CourseCard } from "./Cards-DJrCx6ne.mjs";
import { t as Route } from "./courses.index-Brc2XbI8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses.index-E74bKvp6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Discover() {
	const { lang, t } = useStore();
	const s = Route.useSearch();
	const nav = useNavigate({ from: "/courses/" });
	const set = (patch) => nav({ search: (p) => ({
		...p,
		...patch
	}) });
	const list = (0, import_react.useMemo)(() => {
		const q = (s.q ?? "").toLowerCase();
		let r = courses.filter((c) => (!s.cat || c.category === s.cat) && (!s.level || c.level === s.level) && (!q || [
			localizeCourse(c, lang).title,
			localizeCourse(c, lang).tagline,
			label(c.category, lang),
			localizeChef(getChef(c.chef), lang).name
		].join(" ").toLowerCase().includes(q)));
		if (s.sort === "price") r = [...r].sort((a, b) => fromPrice(a) - fromPrice(b));
		else if (s.sort === "rating") r = [...r].sort((a, b) => b.rating - a.rating);
		else if (s.sort === "new") r = [...r].sort((a, b) => b.createdAt - a.createdAt);
		return r;
	}, [s, lang]);
	const chip = (on) => `rounded-full px-4 py-2 text-sm font-bold transition ${on ? "bg-tomato text-primary-foreground" : "bg-card hover:bg-muted"}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: t("discover"),
				title: t("findYour"),
				accent: t("flavour")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-col gap-4 md:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value: s.q ?? "",
					onChange: (e) => set({ q: e.target.value || void 0 }),
					placeholder: t("search"),
					"aria-label": t("search"),
					maxLength: 80,
					className: "flex-1 rounded-full border border-border bg-card px-5 py-3 outline-none focus:border-tomato"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					value: s.sort ?? "",
					onChange: (e) => set({ sort: e.target.value || void 0 }),
					"aria-label": t("sort"),
					className: "rounded-full border border-border bg-card px-4 py-3 font-bold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							children: t("mostPopular")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "rating",
							children: t("topRated")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "price",
							children: t("lowestPrice")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "new",
							children: t("newest")
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: chip(!s.cat),
					onClick: () => set({ cat: void 0 }),
					children: t("all")
				}), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: chip(s.cat === c),
					onClick: () => set({ cat: s.cat === c ? void 0 : c }),
					children: label(c, lang)
				}, c))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: levels.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: chip(s.level === l),
					onClick: () => set({ level: s.level === l ? void 0 : l }),
					children: label(l, lang)
				}, l))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm text-muted-foreground",
				children: [
					list.length,
					" ",
					list.length === 1 ? t("course") : t("coursesCount")
				]
			}),
			list.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: list.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { c }, c.slug))
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-3xl bg-card p-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xl font-extrabold",
						children: t("noCourses")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground",
						children: t("noCoursesCopy")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => nav({ search: {} }),
						className: "mt-4 rounded-full bg-forest px-5 py-2 font-bold text-cream",
						children: t("clearFilters")
					})
				]
			})
		]
	});
}
//#endregion
export { Discover as component };
