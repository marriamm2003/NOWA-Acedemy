import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses.index-DkqDfUiG.js
var $$splitComponentImporter = () => import("./courses.index-DZyskNxj.mjs");
var Route = createFileRoute("/courses/")({
	validateSearch: (s) => ({
		q: typeof s["q"] === "string" ? s["q"].slice(0, 80) : void 0,
		cat: typeof s["cat"] === "string" ? s["cat"] : void 0,
		level: typeof s["level"] === "string" ? s["level"] : void 0,
		sort: typeof s["sort"] === "string" ? s["sort"] : void 0
	}),
	head: () => ({ meta: [
		{ title: "Culinary Courses — NOWA Studio" },
		{
			name: "description",
			content: "Browse pizza, dessert, baking, plant-based and food business courses. Filter by category and skill level."
		},
		{
			property: "og:title",
			content: "Culinary Courses — NOWA Studio"
		},
		{
			property: "og:description",
			content: "Find your flavour: modular courses from chefs who teach every technique."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
