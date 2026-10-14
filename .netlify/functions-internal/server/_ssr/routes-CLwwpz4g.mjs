import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as courses, f as images, g as products, h as paths, i as chefs, r as categories, v as useStore } from "./store-j1dqSumQ.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as label, s as localizePath } from "./Shell-BNDwuvOg.mjs";
import { a as SectionTitle, i as ProductCard, n as ChefCard, o as toneBg, r as CourseCard } from "./Cards-DWXfb0u1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CLwwpz4g.js
var import_jsx_runtime = require_jsx_runtime();
var testimonialsEn = [
	{
		q: "I bought just the dough level first. Two weeks later I had the whole masterclass — and my family won't order pizza anymore.",
		n: "Omar K., Riyadh"
	},
	{
		q: "Layla's costing module paid for itself with my first cake order.",
		n: "Sara M., Cairo"
	},
	{
		q: "Finally plant-based food that tastes like my grandmother's cooking.",
		n: "Hana A., Amman"
	}
];
function Home() {
	const { t, lang } = useStore();
	const testimonials = lang === "ar" ? [
		{
			q: "اشتريت مستوى العجين أولاً. وبعد أسبوعين أكملت الكورس كله — وعائلتي لم تعد تطلب البيتزا.",
			n: "عمر ك.، الرياض"
		},
		{
			q: "دورة حساب التكاليف مع ليلى دفعت ثمنها من أول طلب كيك.",
			n: "سارة م.، القاهرة"
		},
		{
			q: "أخيراً أكل نباتي بطعم أكلات جدتي.",
			n: "هناء أ.، عمّان"
		}
	] : testimonialsEn;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative mx-auto grid max-w-7xl items-center gap-10 overflow-hidden px-5 py-14 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-forest",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[3px] w-7 bg-tomato" }), t("heroEyebrow")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-5 text-6xl font-extrabold leading-[0.92] tracking-tighter md:text-8xl",
						children: [
							t("heroA"),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							t("heroB"),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "font-serif font-normal text-tomato",
								children: t("heroC")
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-lg leading-relaxed text-muted-foreground",
						children: t("heroCopy")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/courses",
							className: "rounded-full bg-tomato px-6 py-3.5 font-extrabold text-primary-foreground shadow-pop transition hover:-translate-y-1",
							children: t("ctaFind")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/paths",
							className: "rounded-full bg-mustard px-6 py-3.5 font-extrabold transition hover:-translate-y-1",
							children: t("ctaPaths")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-8 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "text-foreground",
								children: "4.9★"
							}),
							" ",
							t("statLearners"),
							" · 3 ",
							t("statChefs"),
							" · 6 ",
							t("statCourses")
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -inset-6 animate-slowspin rounded-full border-[18px] border-dashed border-leaf/60",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: images.pizza,
						alt: lang === "ar" ? "بيتزا نابولية متفحمة الأطراف على لوح خشبي" : "Blistered Neapolitan pizza on a wooden peel",
						width: 1280,
						height: 1280,
						className: "relative aspect-square w-full rounded-full object-cover shadow-soft"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute -start-2 top-10 animate-float rounded-full bg-mustard px-4 py-2 text-sm font-extrabold shadow-soft",
						children: ["🍅 ", t("dough")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute -end-2 bottom-16 animate-float rounded-full bg-cream px-4 py-2 text-sm font-extrabold shadow-soft [animation-delay:1.5s]",
						children: ["🌿 ", t("basil")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute bottom-0 start-10 rotate-[-6deg] rounded-2xl bg-forest px-4 py-3 text-cream shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "block text-2xl",
							children: "2 + 1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: t("offer") })]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-hidden bg-tomato py-4 text-primary-foreground",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max animate-marquee gap-10 whitespace-nowrap text-3xl font-extrabold tracking-tight",
				children: Array.from({ length: 2 }).flatMap((_, k) => [
					t("marqKnead"),
					"✺",
					t("marqTaste"),
					"✺",
					t("marqPlate"),
					"✺",
					t("marqSell"),
					"✺",
					t("marqLearn"),
					"✺"
				].map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: w }, `${k}${i}`)))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-5 py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-3",
				children: categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/courses",
					search: { cat: c },
					className: `rounded-full px-5 py-3 font-bold transition hover:-translate-y-1 hover:rotate-[-2deg] ${[
						"bg-leaf",
						"bg-mustard",
						"bg-card",
						"bg-forest text-cream"
					][i % 4]}`,
					children: label(c, lang)
				}, c))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: t("featured"),
					title: lang === "ar" ? "اطبخ ما" : "Cook what",
					accent: lang === "ar" ? "يحمّسك" : "excites you"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/courses",
					className: "font-bold underline",
					children: t("browseAll")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3",
				children: courses.slice(0, 3).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CourseCard, { c }, c.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mt-24 bg-leaf py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: t("paths"),
					title: t("threeWays"),
					accent: t("grow")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 md:grid-cols-3",
					children: paths.map((p, i) => {
						const displayPath = localizePath(p, lang);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/paths",
							hash: p.id,
							className: `rounded-[1.75rem] p-7 transition hover:-translate-y-1 ${i === 1 ? "bg-cream" : toneBg[p.tone]}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-serif text-6xl",
									children: ["0", i + 1]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 text-2xl font-extrabold",
									children: displayPath.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2",
									children: displayPath.blurb
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-4 text-sm font-bold",
									children: [
										"~",
										p.weeks,
										" ",
										t("weeks"),
										" · ",
										p.courses.length,
										" ",
										t("coursesCount")
									]
								})
							]
						}, p.id);
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: t("meetChefs"),
				title: lang === "ar" ? "شيفات لديهم" : "Chefs with a",
				accent: lang === "ar" ? "حكاية" : "story"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 md:grid-cols-3",
				children: chefs.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefCard, { chef: c }, c.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
					eyebrow: t("curated"),
					title: t("marketTitle"),
					accent: t("marketAccent")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/market",
					className: "font-bold underline",
					children: t("browseAll")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: products.slice(0, 4).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { p }, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto mt-20 grid max-w-7xl gap-6 px-5 md:grid-cols-3",
			children: testimonials.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "rounded-[1.75rem] bg-card p-7 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-serif text-2xl leading-snug",
					children: [
						"“",
						x.q,
						"”"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "mt-4 text-sm font-bold",
					children: x.n
				})]
			}, x.n))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto mt-20 max-w-7xl px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden rounded-[2.5rem] bg-deep p-10 text-cream md:p-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute -end-20 -top-20 size-72 rounded-full bg-mustard/30",
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-bold uppercase tracking-[0.2em] text-mustard",
						children: t("passion")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-2xl text-4xl font-extrabold md:text-6xl",
						children: t("nextBigThing")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl opacity-80",
						children: t("passionCopy")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/creators",
						className: "mt-8 inline-block rounded-full bg-tomato px-6 py-3.5 font-extrabold text-primary-foreground shadow-pop",
						children: t("apply")
					})
				]
			})
		})
	] });
}
//#endregion
export { Home as component };
