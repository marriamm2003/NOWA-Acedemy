import { r as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as courses, p as interpolate, u as getCourse, v as useStore } from "./store-C5BeBkQw.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Lock, l as LockOpen, p as Download, v as Award } from "../_libs/lucide-react.mjs";
import { c as localizeCourse, d as money, n as cn, o as languageLabel } from "./Shell-CxGIj84P.mjs";
import { a as SectionTitle, r as CourseCard } from "./Cards-DJrCx6ne.mjs";
import { t as Route } from "./kitchen-CX9MKT9I.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as TabsTrigger$1, n as TabsContent$1, r as TabsList$1, t as Tabs$1 } from "../_libs/radix-ui__react-tabs.mjs";
import { n as ProgressIndicator, t as Progress$1 } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kitchen-BU3ag2YU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Tabs = Tabs$1;
var TabsList = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList$1, {
	ref,
	className: cn("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className),
	...props
}));
TabsList.displayName = TabsList$1.displayName;
var TabsTrigger = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger$1, {
	ref,
	className: cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", className),
	...props
}));
TabsTrigger.displayName = TabsTrigger$1.displayName;
var TabsContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent$1, {
	ref,
	className: cn("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", className),
	...props
}));
TabsContent.displayName = TabsContent$1.displayName;
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress$1, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressIndicator, {
		className: "h-full w-full flex-1 bg-primary transition-all",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Progress$1.displayName;
var demoProgress = {
	"pt-1": 100,
	"pt-2": 60,
	"pt-4": 25,
	"pb-1": 10
};
function Kitchen() {
	const { order } = Route.useSearch();
	const { owned, orders, wishlist, t, lang } = useStore();
	const [recipeMsg, setRecipeMsg] = (0, import_react.useState)(null);
	const myCourses = courses.filter((c) => c.modules.some((m) => owned.has(m.id)));
	const saved = courses.filter((c) => wishlist.includes(c.slug));
	(0, import_react.useEffect)(() => {
		if (recipeMsg) {
			toast.info(recipeMsg, { duration: 4e3 });
			setRecipeMsg(null);
		}
	}, [recipeMsg]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-4 rounded-2xl bg-mustard/40 p-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t("dashboardNotice") }),
					" ",
					t("dashboardCopy")
				]
			}),
			order && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 rounded-2xl bg-leaf p-4 font-bold",
				role: "status",
				children: interpolate(t("orderConfirmed"), { order })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: t("kitchen"),
				title: t("welcome"),
				accent: t("chef")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
				defaultValue: "courses",
				className: "mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsList, {
						className: "flex h-auto flex-wrap justify-start bg-transparent p-0",
						children: [
							"courses",
							"saved",
							"recipes",
							"certificates",
							"orders",
							"settings"
						].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
							value: tab,
							className: "rounded-full capitalize data-[state=active]:bg-tomato data-[state=active]:text-primary-foreground",
							children: tab === "courses" ? t("myCourses") : t(tab)
						}, tab))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "courses",
						className: "mt-6 space-y-6",
						children: [myCourses.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							t("noModules"),
							" ",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/courses",
								className: "underline",
								children: t("browse")
							})
						] }), myCourses.map((c) => {
							const done = c.modules.filter((m) => owned.has(m.id));
							const pct = Math.round(done.reduce((s, m) => s + (demoProgress[m.id] ?? 0), 0) / c.modules.length);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-[1.75rem] bg-card p-6 shadow-soft",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-2xl font-extrabold",
											children: localizeCourse(c, lang).title
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted-foreground",
											children: [
												done.length,
												"/",
												c.modules.length,
												" ",
												t("modulesOwned"),
												" · ",
												t("subtitles"),
												":",
												" ",
												c.subtitles.map((x) => languageLabel(x, lang)).join(", ")
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/courses/$slug",
											params: { slug: c.slug },
											hash: "builder",
											className: "rounded-full bg-forest px-4 py-2 text-sm font-bold text-cream",
											children: t("addModules")
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
										value: pct,
										className: "mt-4"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-4 grid gap-2 md:grid-cols-2",
										children: c.modules.map((m) => {
											const has = owned.has(m.id);
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
												className: `flex items-center gap-3 rounded-xl p-3 text-sm ${has ? "bg-leaf/50" : "bg-muted text-muted-foreground"}`,
												children: [
													has ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LockOpen, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "flex-1",
														children: localizeCourse(c, lang).modules.find((item) => item.id === m.id)?.title ?? m.title
													}),
													has ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [demoProgress[m.id] ?? 0, "%"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(m.price, lang) })
												]
											}, m.id);
										})
									})
								]
							}, c.slug);
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "saved",
						className: "mt-6",
						children: saved.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-6 md:grid-cols-3",
							children: saved.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { c }, c.slug))
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("savedHint") })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "recipes",
						className: "mt-6 grid gap-4 md:grid-cols-3",
						children: myCourses.flatMap((c) => c.modules.filter((m) => owned.has(m.id)).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: localizeCourse(c, lang).modules.find((item) => item.id === m.id)?.title ?? m.title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: localizeCourse(c, lang).title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setRecipeMsg(`${localizeCourse(c, lang).modules.find((item) => item.id === m.id)?.title ?? m.title} — ${t("recipeDemo")}`),
									className: "mt-3 flex items-center gap-2 text-sm font-bold text-tomato",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), t("recipeDownload")]
								})
							]
						}, m.id)))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "certificates",
						className: "mt-6",
						children: [myCourses.flatMap((c) => c.modules.filter((m) => owned.has(m.id) && demoProgress[m.id] === 100).map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 rounded-2xl bg-mustard p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t("certificate") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: localizeCourse(c, lang).modules.find((item) => item.id === m.id)?.title ?? m.title
							})] })]
						}, m.id))), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: t("certificateHint")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
						value: "orders",
						className: "mt-6 space-y-3",
						children: orders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: o.id }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									o.date,
									" · ",
									money(o.total, lang),
									" ·",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-bold text-tomato",
										children: t("demo")
									})
								] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: [
									Array.from(new Set(o.moduleIds.map((id) => courses.find((c) => c.modules.some((m) => m.id === id))?.slug))).map((s) => localizeCourse(getCourse(s), lang).title).join(", "),
									" ",
									"— ",
									o.moduleIds.length,
									" ",
									t("modulesOwned")
								]
							})]
						}, o.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
						value: "settings",
						className: "mt-6 max-w-lg space-y-3 rounded-2xl bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: t("accountSettings")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: t("accountCopy")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-bold",
								children: t("help")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: t("helpCopy")
							})
						]
					})
				]
			})
		]
	});
}
//#endregion
export { Kitchen as component };
