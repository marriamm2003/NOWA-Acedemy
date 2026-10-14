import { u as getCourse } from "./store-C5BeBkQw.mjs";
import { _ as createFileRoute, g as lazyRouteComponent, q as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses._slug-C6jR6qmb.js
var $$splitComponentImporter = () => import("./courses._slug-DRzpE3i4.mjs");
var $$splitNotFoundComponentImporter = () => import("./courses._slug-nCfTRMsR.mjs");
var Route = createFileRoute("/courses/$slug")({
	loader: ({ params }) => {
		const course = getCourse(params.slug);
		if (!course) throw notFound();
		return {
			title: course.title,
			tagline: course.tagline
		};
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.title} — NOWA Studio` },
		{
			name: "description",
			content: loaderData.tagline
		},
		{
			property: "og:title",
			content: `${loaderData.title} — NOWA Studio`
		},
		{
			property: "og:description",
			content: loaderData.tagline
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] : [{ title: "Course not found — NOWA Studio" }, {
		name: "robots",
		content: "noindex"
	}] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
