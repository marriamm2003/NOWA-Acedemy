import { r as __toESM } from "../_runtime.mjs";
import { a as AccordionTrigger$1, i as AccordionItem$1, n as AccordionContent$1, r as AccordionHeader, t as Accordion$1, v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as quoteCourse, a as courses, d as getProduct, l as getChef, p as interpolate, t as BUNDLE_DISCOUNT, u as getCourse, v as useStore } from "./store-DqMNyVQw.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as BookOpen, a as Radio, c as Lock, d as Gift, g as Check, h as ChevronDown, m as CirclePlay, n as Star, t as X, u as Heart } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as label, c as localizeCourse, d as money, n as cn, o as languageLabel, r as getReviews, s as localizeChef } from "./Shell-BJ-ZsTQu.mjs";
import { a as SectionTitle, i as ProductCard, r as CourseCard, t as ChefAvatar } from "./Cards-DkTfdWze.mjs";
import { t as Route } from "./courses._slug-DQKn8qwN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/courses._slug-C2IX_Y9O.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CourseBuilder({ course }) {
	const { bag, toggleBag, owned, setBagOpen, workbooks, toggleWorkbook, lang, t } = useStore();
	const displayCourse = localizeCourse(course, lang);
	const selected = bag.filter((id) => course.modules.some((m) => m.id === id));
	const withWorkbook = workbooks.includes(course.slug);
	const q = quoteCourse(course.modules, selected, withWorkbook);
	const hasBonus = course.modules.some((m) => m.bonus);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[1.4fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-3",
			children: course.modules.map((m, i) => {
				const displayModule = displayCourse.modules[i] ?? m;
				const isOwned = owned.has(m.id);
				const on = selected.includes(m.id);
				const freeBonus = m.bonus && q.bonusUnlocked;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					disabled: isOwned,
					onClick: () => toggleBag(m.id),
					"aria-pressed": on,
					className: `flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-start transition ${on || freeBonus ? "border-tomato bg-card" : "border-transparent bg-card/70 hover:border-border"} ${isOwned ? "opacity-60" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid size-10 shrink-0 place-items-center rounded-full font-extrabold ${on || freeBonus || isOwned ? "bg-tomato text-primary-foreground" : "bg-muted"}`,
							children: on || isOwned ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : freeBonus ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "size-4" }) : String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "block",
								children: displayModule.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground",
								children: [
									m.lessons,
									" ",
									t("lessons"),
									" · ",
									m.minutes,
									" ",
									t("minutes"),
									m.live && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ms-2 inline-flex items-center gap-1 font-bold text-forest",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Radio, { className: "size-3" }), t("liveFeedback")]
									}),
									m.eligible && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ms-2 font-bold text-forest",
										children: ["· ", t("eligible")]
									}),
									m.bonus && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ms-2 font-bold text-tomato",
										children: ["· ", t("bonus")]
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-end font-extrabold",
							children: isOwned ? t("owned") : freeBonus ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("s", {
								className: "block text-xs text-muted-foreground",
								children: money(m.price, lang)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-tomato",
								children: t("free")
							})] }) : money(m.price, lang)
						})
					]
				}) }, m.id);
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-[1.75rem] bg-deep p-6 text-cream lg:sticky lg:top-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-bold uppercase tracking-widest text-mustard",
					children: t("yourBuild")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => toggleWorkbook(course.slug),
					disabled: !selected.length,
					"aria-pressed": withWorkbook,
					className: `mt-5 flex w-full items-center gap-3 rounded-2xl border p-3 text-start transition ${withWorkbook ? "border-mustard bg-mustard/15" : "border-cream/20 hover:border-mustard/60"} disabled:cursor-not-allowed disabled:opacity-50`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-5 shrink-0 text-mustard" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "block",
								children: t("workbook")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs opacity-75",
								children: t("workbookCopy")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm font-extrabold",
							children: ["+", money(12, lang)]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: t("originalPrice"),
							value: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("s", {
								className: "opacity-70",
								children: money(q.original, lang)
							})
						}),
						q.bonusUnlocked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: t("bonusCourse"),
							value: `−${money(q.bonusSavings, lang)}`
						}),
						q.discountApplied && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: interpolate(t("bundleOff"), { percent: 15 }),
							value: `−${money(q.discount, lang)}`
						}),
						q.workbookPrice > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							label: t("workbookPrice"),
							value: `+${money(q.workbookPrice, lang)}`
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-end justify-between border-t border-cream/20 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("total") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-4xl font-extrabold",
						children: money(q.total, lang)
					})]
				}),
				q.original - q.total > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-end text-sm font-bold text-mustard",
					children: [
						t("youSave"),
						" ",
						money(q.original - q.total, lang)
					]
				}),
				q.nextHint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 rounded-xl bg-forest p-3 text-sm",
					children: q.nextHint.kind === "bonus" ? interpolate(t("hintBonus"), {
						count: q.nextHint.remaining,
						s: q.nextHint.remaining > 1 ? "s" : "",
						title: q.nextHint.bonusTitle
					}) : interpolate(t("hintDiscount"), {
						count: q.nextHint.remaining,
						percent: q.nextHint.percent
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 space-y-1 text-xs opacity-80",
					children: [
						hasBonus && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["• ", interpolate(t("bonusRule"), { count: 2 })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"•",
							" ",
							interpolate(t("discountRule"), {
								count: 3,
								percent: BUNDLE_DISCOUNT * 100
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["• ", t("bonusRuleTwo")] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["• ", t("workbookRule")] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: !selected.length,
					onClick: () => setBagOpen(true),
					className: "mt-5 w-full rounded-full bg-tomato py-3 font-extrabold text-primary-foreground shadow-pop disabled:opacity-40",
					children: selected.length ? t("reviewBag") : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" }), t("selectModule")]
					})
				})
			]
		})]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value })]
	});
}
var Accordion = Accordion$1;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionItem$1, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionHeader, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionTrigger$1, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionTrigger$1.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent$1, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionContent$1.displayName;
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function CoursePage() {
	const { slug } = Route.useParams();
	const c = getCourse(slug);
	const chef = getChef(c.chef);
	const { wishlist, toggleWish, lang, t } = useStore();
	const [previewOpen, setPreviewOpen] = (0, import_react.useState)(false);
	const displayCourse = localizeCourse(c, lang);
	const displayChef = localizeChef(chef, lang);
	const related = courses.filter((x) => x.slug !== c.slug && (x.category === c.category || x.chef === c.chef)).slice(0, 3);
	const fallback = related.length ? related : courses.filter((x) => x.slug !== c.slug).slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/courses",
					search: { cat: c.category },
					className: "rounded-full bg-leaf px-3 py-1 text-xs font-bold uppercase tracking-wider",
					children: label(c.category, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-4 text-5xl font-extrabold leading-none tracking-tight md:text-7xl",
					children: displayCourse.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 font-serif text-2xl italic text-tomato",
					children: displayCourse.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-mustard text-mustard" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: c.rating }),
								" (",
								c.reviews,
								" ",
								t("reviews"),
								")"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label(c.level, lang) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							c.hours,
							" ",
							t("hoursTotal")
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							t("audio"),
							": ",
							c.languages.map((x) => languageLabel(x, lang)).join(", ")
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							t("subtitles"),
							": ",
							c.subtitles.map((x) => languageLabel(x, lang)).join(", ")
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/chefs/$slug",
					params: { slug: chef.slug },
					className: "mt-6 flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefAvatar, {
						chef,
						size: "size-12"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "block",
						children: displayChef.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
						className: "text-muted-foreground",
						children: displayChef.specialty
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#builder",
						className: "rounded-full bg-tomato px-6 py-3 font-extrabold text-primary-foreground shadow-pop",
						children: t("buildCourse")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => toggleWish(c.slug),
						"aria-pressed": wishlist.includes(c.slug),
						className: "flex items-center gap-2 rounded-full border border-border px-5 py-3 font-bold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `size-4 ${wishlist.includes(c.slug) ? "fill-tomato text-tomato" : ""}` }), t("save")]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: c.image,
					alt: displayCourse.title,
					width: 1024,
					height: 768,
					className: "aspect-[4/3] size-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setPreviewOpen(true),
					className: "absolute inset-0 grid place-items-center bg-deep/20 text-cream",
					"aria-label": t("playPreview"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2 rounded-full bg-deep/80 px-5 py-3 font-bold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CirclePlay, {}),
							" ",
							t("watchPreview")
						]
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: previewOpen,
			onOpenChange: setPreviewOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: t("previewTitle") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: t("previewCopy") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setPreviewOpen(false),
				className: "mt-4 w-full rounded-full bg-tomato py-3 font-extrabold text-primary-foreground",
				children: t("previewClose")
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[1.75rem] bg-leaf p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold",
					children: t("outcomes")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: displayCourse.outcomes.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["✓ ", o] }, o))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[1.75rem] bg-card p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold",
					children: t("equipment")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 space-y-2",
					children: displayCourse.equipment.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["• ", o] }, o))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "builder",
			className: "mx-auto mt-16 max-w-7xl scroll-mt-28 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: t("builderEyebrow"),
					title: t("builderTitle"),
					accent: t("builderAccent")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-muted-foreground",
					children: t("builderCopy")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseBuilder, { course: c })
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto mt-16 grid max-w-7xl gap-10 px-5 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-extrabold",
					children: t("meetChef")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 leading-relaxed",
					children: displayChef.story
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 text-3xl font-extrabold",
					children: t("reviewsTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-3",
					children: getReviews(lang).map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl bg-card p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: r.n }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-mustard",
								children: "★".repeat(r.r)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: r.t
							})
						]
					}, r.n))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-extrabold",
				children: t("faq")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "mt-3",
				children: displayCourse.faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: f.q,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-start font-bold",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, { children: f.a })]
				}, f.q))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto mt-16 max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-extrabold",
				children: t("usedCourse")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: c.products.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					p: getProduct(id),
					label: t("usedCourse")
				}, id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto mt-16 max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-3xl font-extrabold",
				children: t("love")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid gap-6 md:grid-cols-3",
				children: fallback.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { c: x }, x.slug))
			})]
		})
	] });
}
//#endregion
export { CoursePage as component };
