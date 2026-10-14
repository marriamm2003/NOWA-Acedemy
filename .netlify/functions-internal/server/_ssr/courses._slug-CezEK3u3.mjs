import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as useStore } from "./store-C9KxHDSc.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses._slug-CezEK3u3.js
var import_jsx_runtime = require_jsx_runtime();
function CourseNotFound() {
	const { t } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-5 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl font-extrabold",
			children: t("courseNotFound")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/courses",
			className: "mt-4 inline-block underline",
			children: t("browseCourses")
		})]
	});
}
//#endregion
export { CourseNotFound as notFoundComponent };
