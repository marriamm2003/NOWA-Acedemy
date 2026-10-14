import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as useStore } from "./store-C5BeBkQw.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chefs._slug-Cj2Uff-n.js
var import_jsx_runtime = require_jsx_runtime();
function ChefNotFound() {
	const { t } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl font-extrabold",
			children: t("chefNotFound")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/chefs",
			className: "underline",
			children: t("allChefs")
		})]
	});
}
//#endregion
export { ChefNotFound as notFoundComponent };
