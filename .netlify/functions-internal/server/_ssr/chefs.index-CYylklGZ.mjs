import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as chefs, v as useStore } from "./store-C9KxHDSc.mjs";
import { a as SectionTitle, n as ChefCard } from "./Cards-DPHkcBe_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chefs.index-CYylklGZ.js
var import_jsx_runtime = require_jsx_runtime();
function ChefsPage() {
	const { t } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			eyebrow: t("chefs"),
			title: t("chefsWith"),
			accent: t("storyWord")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-6 md:grid-cols-3",
			children: chefs.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefCard, { chef: c }, c.slug))
		})]
	});
}
//#endregion
export { ChefsPage as component };
