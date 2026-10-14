import { v as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { c as fromPrice, f as images, l as getChef, v as useStore } from "./store-C9KxHDSc.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ExternalLink, n as Star, u as Heart } from "../_libs/lucide-react.mjs";
import { a as label, c as localizeCourse, d as money, o as languageLabel, s as localizeChef, u as localizeProduct } from "./Shell-Cd6CtBSl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Cards-DPHkcBe_.js
var import_jsx_runtime = require_jsx_runtime();
var toneBg = {
	mustard: "bg-mustard",
	green: "bg-leaf",
	tomato: "bg-tomato"
};
function CourseCard({ c }) {
	const { wishlist, toggleWish, lang, t } = useStore();
	const localizedCourse = localizeCourse(c, lang);
	const chef = localizeChef(getChef(c.chef), lang);
	const saved = wishlist.includes(c.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col overflow-hidden rounded-[1.75rem] bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => toggleWish(c.slug),
			"aria-label": saved ? t("removeWishlist") : t("saveWishlist"),
			"aria-pressed": saved,
			className: "absolute end-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-cream/90 backdrop-blur transition hover:bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `size-4 ${saved ? "fill-tomato text-tomato" : ""}` })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/courses/$slug",
			params: { slug: c.slug },
			className: "flex flex-1 flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[4/3] overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: c.image,
					alt: localizedCourse.title,
					loading: "lazy",
					width: 1024,
					height: 768,
					className: "size-full object-cover transition duration-500 group-hover:scale-105"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-wider",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-leaf px-2 py-1",
							children: label(c.category, lang)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-muted px-2 py-1",
							children: label(c.level, lang)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 text-xl font-extrabold leading-tight",
						children: localizedCourse.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: [
							t("with"),
							" ",
							chef.name
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-1 text-sm",
						children: localizedCourse.outcomes.slice(0, 2).map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["— ", o] }, o))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-mustard text-mustard" }),
								c.rating,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [
										"(",
										c.reviews,
										") · ",
										c.hours,
										" ",
										t("hoursTotal"),
										" ·",
										" ",
										c.languages.map((x) => languageLabel(x, lang)).join("/")
									]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
							className: "shrink-0",
							children: [
								t("from"),
								" ",
								money(fromPrice(c), lang)
							]
						})]
					})
				]
			})]
		})]
	});
}
function ChefAvatar({ chef, size = "size-16" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `${size} ${toneBg[chef.tone]} grid shrink-0 place-items-center rounded-full font-serif text-2xl text-deep`,
		children: chef.initials
	});
}
function ChefCard({ chef }) {
	const { lang } = useStore();
	const localizedChef = localizeChef(chef, lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/chefs/$slug",
		params: { slug: chef.slug },
		className: "block rounded-[1.75rem] bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefAvatar, { chef }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 text-2xl font-extrabold",
				children: localizedChef.name
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-lg italic text-tomato",
				children: localizedChef.specialty
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted-foreground",
				children: localizedChef.bio
			})
		]
	});
}
function ProductCard({ p, label }) {
	const { lang, t } = useStore();
	const localizedProduct = localizeProduct(p, lang);
	const badge = label ?? (p.badge === "Used in This Course" ? t("usedCourse") : t("chefRecommended"));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col overflow-hidden rounded-[1.5rem] bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-lg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: p.category === "Pastry tools" ? images.pastryTools : p.category === "Chef knives" ? images.plating : images.tools,
				alt: localizedProduct.name,
				loading: "lazy",
				width: 1024,
				height: 768,
				className: "size-full object-cover transition duration-500 hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute start-3 top-3 rounded-full bg-mustard px-2 py-1 text-[11px] font-bold",
				children: badge
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: localizedProduct.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-extrabold",
					children: localizedProduct.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 flex-1 text-sm leading-relaxed",
					children: localizedProduct.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: money(p.price, lang) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: p.url,
						target: "_blank",
						rel: "noopener noreferrer sponsored",
						className: "inline-flex items-center gap-1 rounded-full bg-forest px-3 py-2 text-xs font-bold text-cream transition hover:bg-deep",
						children: [
							t("shopAt"),
							" ",
							localizedProduct.seller,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-[10px] text-muted-foreground",
					children: t("affiliateNote")
				})
			]
		})]
	});
}
function SectionTitle({ eyebrow, title, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-forest",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[3px] w-7 shrink-0 bg-tomato" }), eyebrow]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
		className: "mt-3 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl",
		children: [
			title,
			" ",
			accent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
				className: "font-serif font-normal text-tomato",
				children: accent
			})
		]
	})] });
}
//#endregion
export { SectionTitle as a, ProductCard as i, ChefCard as n, toneBg as o, CourseCard as r, ChefAvatar as t };
