import { l as getChef } from "./store-C5BeBkQw.mjs";
import { _ as createFileRoute, g as lazyRouteComponent, q as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chefs._slug-38dY11b9.js
var $$splitComponentImporter = () => import("./chefs._slug-Czsz61J9.mjs");
var $$splitNotFoundComponentImporter = () => import("./chefs._slug-Cj2Uff-n.mjs");
var Route = createFileRoute("/chefs/$slug")({
	loader: ({ params }) => {
		const c = getChef(params.slug);
		if (!c) throw notFound();
		return {
			name: c.name,
			specialty: c.specialty
		};
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.name} — NOWA Studio Chef` },
		{
			name: "description",
			content: `${loaderData.name}: ${loaderData.specialty}. Courses, signature techniques and recommended tools.`
		},
		{
			property: "og:title",
			content: `${loaderData.name} — NOWA Studio`
		},
		{
			property: "og:description",
			content: loaderData.specialty
		},
		{
			property: "og:type",
			content: "profile"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] : [{ title: "Chef not found — NOWA Studio" }, {
		name: "robots",
		content: "noindex"
	}] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
