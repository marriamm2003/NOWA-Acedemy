import { r as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { p as interpolate, s as findModule, u as getCourse, v as useStore } from "./store-C5BeBkQw.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as localizeCourse, d as money } from "./Shell-CxGIj84P.mjs";
import { i as stringType, r as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-P55lvygt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Checkout() {
	const { bag, bagQuote, placeOrder, t, lang } = useStore();
	const nav = useNavigate();
	const [err, setErr] = (0, import_react.useState)({});
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [contactMethod, setContactMethod] = (0, import_react.useState)("website");
	if (!bag.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-5 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-4xl font-extrabold",
			children: t("emptyCheckout")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/courses",
			className: "mt-4 inline-block rounded-full bg-tomato px-6 py-3 font-bold text-primary-foreground",
			children: t("browseCourses")
		})]
	});
	const submit = (e) => {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		const r = objectType({
			name: stringType().trim().min(2, t("enterName")).max(100),
			email: stringType().trim().email(t("validEmail")).max(255),
			card: stringType().regex(/^4242 ?4242 ?4242$/, t("testCard"))
		}).safeParse({
			name: f.get("name"),
			email: f.get("email"),
			card: String(f.get("card") ?? "").trim()
		});
		if (!r.success) return setErr(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
		setErr({});
		setBusy(true);
		setTimeout(() => {
			const o = placeOrder(contactMethod);
			setBusy(false);
			if (o) nav({
				to: "/kitchen",
				search: { order: o.id }
			});
		}, 700);
	};
	const field = "mt-1 w-full rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-tomato";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto grid max-w-6xl gap-10 px-5 py-12 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			noValidate: true,
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl font-extrabold",
					children: t("checkoutTitle")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "rounded-2xl bg-mustard/50 p-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t("demoPayment") }),
						" ",
						t("demoPaymentCopy"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "4242 4242 4242 4242" }),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block font-bold",
					children: [t("name"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "name",
						maxLength: 100,
						className: field
					})]
				}),
				err["name"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold text-tomato",
					children: err["name"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block font-bold",
					children: [t("email"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "email",
						type: "email",
						maxLength: 255,
						className: field
					})]
				}),
				err["email"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold text-tomato",
					children: err["email"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block font-bold",
					children: [t("cardNumber"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "card",
						inputMode: "numeric",
						maxLength: 19,
						placeholder: "4242 4242 4242 4242",
						className: field
					})]
				}),
				err["card"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold text-tomato",
					children: err["card"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "rounded-2xl border border-border bg-card p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "px-1 font-bold",
							children: t("contactChoice")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid gap-3 sm:grid-cols-2",
							children: ["website", "whatsapp"].map((method) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: `flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${contactMethod === method ? "border-tomato bg-tomato/10" : "border-border"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									name: "contactMethod",
									value: method,
									checked: contactMethod === method,
									onChange: () => setContactMethod(method)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold",
									children: t(method === "whatsapp" ? "whatsapp" : "websiteMessage")
								})]
							}, method))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-muted-foreground",
							children: t("demoNotice")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: busy,
					className: "w-full rounded-full bg-tomato py-4 text-lg font-extrabold text-primary-foreground shadow-pop disabled:opacity-60",
					children: busy ? t("processing") : interpolate(t("payDemo"), { amount: money(bagQuote.total, lang) })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "h-fit rounded-[2rem] bg-card p-6 shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-extrabold",
					children: t("orderSummary")
				}),
				bagQuote.groups.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 border-b border-border pb-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: localizeCourse(getCourse(g.slug), lang).title }),
						g.quote.lineIds.map((id) => {
							const m = findModule(id).module;
							const displayModule = localizeCourse(getCourse(g.slug), lang).modules.find((item) => item.id === id) ?? m;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: displayModule.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: m.bonus && g.quote.bonusUnlocked ? t("free") : money(m.price, lang) })]
							}, id);
						}),
						g.quote.discountApplied && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex justify-between text-sm font-bold text-forest",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("bundleDiscount") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["−", money(g.quote.discount, lang)] })]
						}),
						g.quote.workbookPrice > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("workbook") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(g.quote.workbookPrice, lang) })]
						})
					]
				}, g.slug)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 flex justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("original") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("s", { children: money(bagQuote.original, lang) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex justify-between text-2xl font-extrabold",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("total") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(bagQuote.total, lang) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-xs text-muted-foreground",
					children: [
						t(contactMethod === "whatsapp" ? "whatsapp" : "websiteMessage"),
						": ",
						t("demoNotice")
					]
				})
			]
		})]
	});
}
//#endregion
export { Checkout as component };
