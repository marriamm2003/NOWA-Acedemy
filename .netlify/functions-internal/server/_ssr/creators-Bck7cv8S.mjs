import { r as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as useStore, f as interpolate } from "./store-D1rqBFkA.mjs";
import { a as unionType, i as stringType, n as literalType, r as objectType, t as enumType } from "../_libs/zod.mjs";
import { a as SectionTitle } from "./Cards-BTMMzE-i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/creators-Bck7cv8S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Creators() {
	const { t, lang } = useStore();
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)();
	const submit = (e) => {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		const r = objectType({
			name: stringType().trim().min(2, t("pleaseName")).max(100),
			email: stringType().trim().email(t("pleaseEmail")).max(255),
			type: enumType([
				"Chef",
				"Food creator",
				"Small food business"
			], { message: t("pleaseChoose") }),
			idea: stringType().trim().min(20, t("pleaseIdea")).max(1e3),
			link: unionType([literalType(""), stringType().trim().url(t("pleaseUrl")).max(255)]),
			consent: literalType(true, { message: t("pleaseConsent") })
		}).safeParse({
			name: f.get("name"),
			email: f.get("email"),
			type: f.get("type"),
			idea: f.get("idea"),
			link: f.get("link") ?? "",
			consent: f.get("consent") === "on"
		});
		if (!r.success) {
			setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
			return;
		}
		setErrors({});
		setSent(r.data.name.split(" ")[0]);
	};
	const services = lang === "ar" ? [
		"اكتشاف المواهب وتمثيلها",
		"إدارة المشروعات",
		"إنتاج الكورسات",
		"بناء العلامة الشخصية",
		"تصوير الطعام وتخطيط المحتوى",
		"دعم تطوير المنتجات",
		"إرشاد التسعير وحساب التكاليف",
		"استراتيجية الإطلاق",
		"شراكات العلامات والمنتجات"
	] : [
		"Talent discovery & representation",
		"Project management",
		"Course production",
		"Personal branding",
		"Food photography & content planning",
		"Product development support",
		"Pricing & costing guidance",
		"Launch strategy",
		"Brand & product partnerships"
	];
	const steps = lang === "ar" ? [
		"قدّم الطلب",
		"مكالمة تعارف",
		"خطط ونفّذ",
		"أطلق وطوّر"
	] : [
		"Apply",
		"Discovery call",
		"Plan & produce",
		"Launch & grow"
	];
	const field = "mt-1 w-full rounded-xl border border-border bg-card px-4 py-3 outline-none focus:border-tomato";
	const Err = ({ k }) => errors[k] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-sm font-bold text-tomato",
		role: "alert",
		children: errors[k]
	}) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-5 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
				eyebrow: t("fromPassion"),
				title: t("gotRecipe"),
				accent: t("buildBusiness")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `rounded-2xl p-5 font-bold ${[
						"bg-leaf",
						"bg-mustard",
						"bg-card"
					][i % 3]}`,
					children: s
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-12 grid gap-4 md:grid-cols-4",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl bg-deep p-5 text-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-serif text-4xl text-mustard",
						children: ["0", i + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
						className: "block",
						children: s
					})]
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto mt-16 max-w-2xl rounded-[2rem] bg-card p-8 shadow-soft",
				children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					role: "status",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-5xl",
							children: "🎉"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-3xl font-extrabold",
							children: interpolate(t("thanks"), { name: sent })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: t("applicationCaptured")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setSent(void 0),
							className: "mt-5 rounded-full bg-forest px-5 py-2 font-bold text-cream",
							children: t("submitAnother")
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					noValidate: true,
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-3xl font-extrabold",
							children: t("creatorApplication")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block font-bold",
							children: [t("fullName"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "name",
								maxLength: 100,
								className: field
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "name" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block font-bold",
							children: [t("email"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "email",
								type: "email",
								maxLength: 255,
								className: field
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "email" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block font-bold",
							children: [t("creatorType"), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								name: "type",
								defaultValue: "",
								className: field,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										disabled: true,
										children: t("select")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("chef") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("foodCreator") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: t("smallFoodBusiness") })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "type" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block font-bold",
							children: [t("idea"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								name: "idea",
								rows: 4,
								maxLength: 1e3,
								className: field
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "idea" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block font-bold",
							children: [t("portfolio"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "link",
								maxLength: 255,
								className: field,
								placeholder: "https://"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "link" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									name: "consent"
								}),
								" ",
								t("consent")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Err, { k: "consent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "w-full rounded-full bg-tomato py-3 font-extrabold text-primary-foreground shadow-pop",
							children: t("sendApplication")
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Creators as component };
