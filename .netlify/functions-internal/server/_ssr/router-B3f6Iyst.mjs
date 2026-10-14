import { r as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as StoreProvider, v as useStore } from "./store-C9KxHDSc.mjs";
import { _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Shell } from "./Shell-Cd6CtBSl.mjs";
import { t as Route$7 } from "./chefs._slug-A2lGtRNX.mjs";
import { t as Route$8 } from "./courses._slug-BwGyaUSR.mjs";
import { t as Route$9 } from "./courses.index-d7nnBnR6.mjs";
import { t as Route$10 } from "./kitchen-CVKdrOvR.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B3f6Iyst.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C5Wtq4Pz.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	const { t } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: t("pageNotFound")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t("pageMoved")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: t("goHome")
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	const { t } = useStore();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: t("pageError")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: t("pageErrorCopy")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: t("tryAgain")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: t("goHome")
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "NOWA Studio — Learn. Create. Grow." },
			{
				name: "description",
				content: "Culinary courses, chef talent and creator commerce."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Instrument+Serif:ital@0;1&family=Tajawal:wght@400;700;800&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ar",
		dir: "rtl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", { dangerouslySetInnerHTML: { __html: `try{var l=JSON.parse(localStorage.getItem("nowa-lang")||'"ar"');if(l==="en"){document.documentElement.lang="en";document.documentElement.dir="ltr";}}catch(e){}` } })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})] })
	});
}
var $$splitComponentImporter$5 = () => import("./routes-O4SqkVBA.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "NOWA Studio — Make Food. Make Your Mark." },
		{
			name: "description",
			content: "Learn pizza, pastry, plant-based cooking and food business from top chefs. Build your own course, module by module."
		},
		{
			property: "og:title",
			content: "NOWA Studio — Make Food. Make Your Mark."
		},
		{
			property: "og:description",
			content: "Modular culinary courses, chef profiles, learning paths and a curated chef's market."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./checkout-CIWOW_NM.mjs");
var Route$4 = createFileRoute("/checkout")({
	head: () => ({ meta: [
		{ title: "Checkout — NOWA Studio" },
		{
			name: "description",
			content: "Review your selected course modules and complete a demo checkout."
		},
		{
			property: "og:title",
			content: "Checkout — NOWA Studio"
		},
		{
			property: "og:description",
			content: "Demo checkout for NOWA course modules."
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
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./creators-CRP2fKly.mjs");
var Route$3 = createFileRoute("/creators")({
	head: () => ({ meta: [
		{ title: "From Passion to Business — NOWA Creators" },
		{
			name: "description",
			content: "Talent representation, course production, branding and launch support for food creators. Apply to NOWA."
		},
		{
			property: "og:title",
			content: "From Passion to Business — NOWA Creators"
		},
		{
			property: "og:description",
			content: "Turn your recipe or food product into a real business with NOWA."
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
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./market-C9vKMSws.mjs");
var Route$2 = createFileRoute("/market")({
	head: () => ({ meta: [
		{ title: "NOWA Market — Chef-Recommended Kitchen Tools" },
		{
			name: "description",
			content: "Knives, pizza peels, pastry tools and food photography gear recommended by NOWA chefs."
		},
		{
			property: "og:title",
			content: "NOWA Market — Chef-Recommended Tools"
		},
		{
			property: "og:description",
			content: "Curated culinary tools used in NOWA courses."
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
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./paths-DqiZEK3n.mjs");
var Route$1 = createFileRoute("/paths")({
	head: () => ({ meta: [
		{ title: "Learning Paths & Course Finder — NOWA Studio" },
		{
			name: "description",
			content: "The Dish Master, The Feel-Good Cook and The Food Founder — plus a smart course finder."
		},
		{
			property: "og:title",
			content: "Learning Paths — NOWA Studio"
		},
		{
			property: "og:description",
			content: "Guided culinary journeys and a quick quiz to find your next class."
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
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./chefs.index-CYylklGZ.mjs");
var Route = createFileRoute("/chefs/")({
	head: () => ({ meta: [
		{ title: "Our Chefs — NOWA Studio" },
		{
			name: "description",
			content: "Meet the pizzaiolos, pastry chefs and plant-based cooks teaching on NOWA."
		},
		{
			property: "og:title",
			content: "Our Chefs — NOWA Studio"
		},
		{
			property: "og:description",
			content: "Chef profiles, signature techniques and courses."
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
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var CheckoutRoute = Route$4.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$6
});
var CreatorsRoute = Route$3.update({
	id: "/creators",
	path: "/creators",
	getParentRoute: () => Route$6
});
var KitchenRoute = Route$10.update({
	id: "/kitchen",
	path: "/kitchen",
	getParentRoute: () => Route$6
});
var MarketRoute = Route$2.update({
	id: "/market",
	path: "/market",
	getParentRoute: () => Route$6
});
var PathsRoute = Route$1.update({
	id: "/paths",
	path: "/paths",
	getParentRoute: () => Route$6
});
var ChefsIndexRoute = Route.update({
	id: "/chefs/",
	path: "/chefs/",
	getParentRoute: () => Route$6
});
var ChefsSlugRoute = Route$7.update({
	id: "/chefs/$slug",
	path: "/chefs/$slug",
	getParentRoute: () => Route$6
});
var CoursesIndexRoute = Route$9.update({
	id: "/courses/",
	path: "/courses/",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	CheckoutRoute,
	CreatorsRoute,
	KitchenRoute,
	MarketRoute,
	PathsRoute,
	ChefsSlugRoute,
	CoursesSlugRoute: Route$8.update({
		id: "/courses/$slug",
		path: "/courses/$slug",
		getParentRoute: () => Route$6
	}),
	ChefsIndexRoute,
	CoursesIndexRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
