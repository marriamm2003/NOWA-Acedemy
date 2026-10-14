import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kitchen-Cr711Y1T.js
var $$splitComponentImporter = () => import("./kitchen-BoD5rT_5.mjs");
var Route = createFileRoute("/kitchen")({
	validateSearch: (s) => ({ order: typeof s["order"] === "string" ? s["order"] : void 0 }),
	head: () => ({ meta: [
		{ title: "NOWA Kitchen — My Learning Dashboard" },
		{
			name: "description",
			content: "Your purchased modules, progress, saved courses, recipe cards and orders."
		},
		{
			property: "og:title",
			content: "NOWA Kitchen — Learner Dashboard"
		},
		{
			property: "og:description",
			content: "Track your culinary learning on NOWA."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		},
		{
			name: "robots",
			content: "noindex"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
