import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as useStore, i as chefs } from "./store-D1rqBFkA.mjs";
import { a as SectionTitle, n as ChefCard } from "./Cards-BTMMzE-i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chefs.index-DUw5mr2m.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => {
	const { t, lang } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			eyebrow: t("chefs"),
			title: lang === "ar" ? "شيفات لديهم" : "Chefs with a",
			accent: lang === "ar" ? "حكاية" : "story"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-6 md:grid-cols-3",
			children: chefs.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefCard, { chef: c }, c.slug))
		})]
	});
};
//#endregion
export { SplitComponent as component };
