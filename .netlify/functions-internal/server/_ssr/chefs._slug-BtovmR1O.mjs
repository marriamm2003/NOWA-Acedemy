import { l as getChef } from "./store-DqMNyVQw.mjs";
import { _ as createFileRoute, g as lazyRouteComponent, q as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chefs._slug-BtovmR1O.js
var $$splitComponentImporter = () => import("./chefs._slug-vnhu95-u.mjs");
var $$splitNotFoundComponentImporter = () => import("./chefs._slug-tqr-cpKm.mjs");
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
