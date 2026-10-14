import { r as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { p as interpolate, v as useStore } from "./store-C9KxHDSc.mjs";
import { a as unionType, i as stringType, n as literalType, r as objectType, t as enumType } from "../_libs/zod.mjs";
import { a as SectionTitle } from "./Cards-DPHkcBe_.mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/creators-CRP2fKly.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var url = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyeHFkYm12amtuc3NjcGhpamljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5MTQyNDgsImV4cCI6MjEwNzQ5MDI0OH0.PuDwdpLjdU1rTIn0GlO8MISjF44-FDR9_rmxb4lypyM",
	"VITE_SUPABASE_URL": "https://jrxqdbmvjknsscphijic.supabase.co"
}["VITE_SUPABASE_URL"];
var anonKey = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/",
	"VITE_SUPABASE_ANON_KEY": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyeHFkYm12amtuc3NjcGhpamljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE5MTQyNDgsImV4cCI6MjEwNzQ5MDI0OH0.PuDwdpLjdU1rTIn0GlO8MISjF44-FDR9_rmxb4lypyM",
	"VITE_SUPABASE_URL": "https://jrxqdbmvjknsscphijic.supabase.co"
}["VITE_SUPABASE_ANON_KEY"];
var supabase = createClient(url, anonKey);
function Creators() {
	const { t, lang } = useStore();
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)();
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitError, setSubmitError] = (0, import_react.useState)();
	const submit = async (e) => {
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
		setSubmitting(true);
		setSubmitError(void 0);
		const { error } = await supabase.from("creator_applications").insert({
			name: r.data.name,
			email: r.data.email,
			type: r.data.type,
			idea: r.data.idea,
			link: r.data.link || null,
			consent: true
		});
		setSubmitting(false);
		if (error) {
			setSubmitError(error.message);
			return;
		}
		setSent(r.data.name.split(" ")[0]);
	};
	const services = [
		t("svcTalent"),
		t("svcProject"),
		t("svcCourse"),
		t("svcBranding"),
		t("svcPhoto"),
		t("svcProduct"),
		t("svcPricing"),
		t("svcLaunch"),
		t("svcPartners")
	];
	const steps = [
		t("stepApply"),
		t("stepCall"),
		t("stepPlan"),
		t("stepLaunch")
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
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Chef",
										children: t("chef")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Food creator",
										children: t("foodCreator")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Small food business",
										children: t("smallFoodBusiness")
									})
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
						submitError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-xl bg-tomato/10 p-3 text-sm font-bold text-tomato",
							role: "alert",
							children: submitError
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							disabled: submitting,
							className: "w-full rounded-full bg-tomato py-3 font-extrabold text-primary-foreground shadow-pop disabled:opacity-60",
							children: submitting ? t("processing") : t("sendApplication")
						})
					]
				})
			})
		]
	});
}
//#endregion
export { Creators as component };
