import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as courses, d as getProduct, h as paths, l as getChef, v as useStore } from "./store-DqMNyVQw.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as localizePath, s as localizeChef } from "./Shell-BJ-ZsTQu.mjs";
import { t as Route } from "./chefs._slug-BtovmR1O.mjs";
import { i as ProductCard, r as CourseCard, t as ChefAvatar } from "./Cards-DkTfdWze.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chefs._slug-vnhu95-u.js
var import_jsx_runtime = require_jsx_runtime();
function ChefPage() {
	const { slug } = Route.useParams();
	const chef = getChef(slug);
	const { lang, t } = useStore();
	const displayChef = localizeChef(chef, lang);
	const theirs = courses.filter((c) => c.chef === chef.slug);
	const theirPaths = paths.filter((p) => p.courses.some((s) => theirs.some((c) => c.slug === s)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid items-center gap-10 rounded-[2.5rem] bg-card p-8 shadow-soft md:grid-cols-[auto_1fr] md:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefAvatar, {
					chef,
					size: "size-40 text-6xl"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-bold uppercase tracking-widest text-forest",
						children: displayChef.city
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-5xl font-extrabold tracking-tight md:text-7xl",
						children: displayChef.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-serif text-2xl italic text-tomato",
						children: displayChef.specialty
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-2xl leading-relaxed",
						children: displayChef.story
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex gap-3",
						children: chef.social.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							className: "rounded-full border border-border px-4 py-2 text-sm font-bold",
							children: s.label
						}, s.label))
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-10 grid gap-6 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[1.75rem] bg-leaf p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-extrabold",
						children: t("achievements")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: displayChef.achievements.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["★ ", a] }, a))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[1.75rem] bg-mustard p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-extrabold",
						children: t("techniques")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2",
						children: displayChef.signature.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["✺ ", a] }, a))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-14 text-3xl font-extrabold",
				children: [
					t("coursesBy"),
					" ",
					displayChef.name.split(" ")[0]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-6 md:grid-cols-3",
				children: theirs.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { c }, c.slug))
			}),
			theirPaths.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-6 text-sm",
				children: [
					t("featuredIn"),
					":",
					" ",
					theirPaths.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/paths",
						hash: p.id,
						className: "me-3 font-bold underline",
						children: localizePath(p, lang).title
					}, p.id))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-14 text-3xl font-extrabold",
				children: [
					t("inKitchen"),
					" ",
					displayChef.name.split(" ")[0],
					t("inKitchenSuffix")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: chef.products.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					p: getProduct(id),
					label: t("chefRecommended")
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 rounded-[2rem] bg-deep p-10 text-cream",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl font-extrabold",
						children: [
							t("workWith"),
							" ",
							displayChef.name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 opacity-80",
						children: t("partnershipCopy")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/creators",
						className: "mt-5 inline-block rounded-full bg-tomato px-6 py-3 font-extrabold text-primary-foreground shadow-pop",
						children: t("partnership")
					})
				]
			})
		]
	});
}
//#endregion
export { ChefPage as component };
