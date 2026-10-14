import { r as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { g as products, v as useStore } from "./store-C5BeBkQw.mjs";
import { u as localizeProduct } from "./Shell-CxGIj84P.mjs";
import { a as SectionTitle, i as ProductCard } from "./Cards-DJrCx6ne.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/market-BTgES_8R.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Market() {
	const { t, lang } = useStore();
	const cats = Array.from(new Set(products.map((p) => p.category)));
	const [cat, setCat] = (0, import_react.useState)();
	const list = products.filter((p) => !cat || p.category === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: t("market"),
				title: t("toolsTitle"),
				accent: t("toolsAccent")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 max-w-2xl rounded-2xl bg-mustard/40 p-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t("affiliate") }),
					" ",
					t("affiliateCopy")
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(void 0),
					className: `rounded-full px-4 py-2 text-sm font-bold ${!cat ? "bg-tomato text-primary-foreground" : "bg-card"}`,
					children: t("all")
				}), cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c),
					className: `rounded-full px-4 py-2 text-sm font-bold ${cat === c ? "bg-tomato text-primary-foreground" : "bg-card"}`,
					children: localizeProduct(products.find((p) => p.category === c), lang).category
				}, c))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id))
			})
		]
	});
}
//#endregion
export { Market as component };
