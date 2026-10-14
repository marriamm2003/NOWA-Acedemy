import { r as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as courses, o as dict, p as interpolate, s as findModule, u as getCourse, v as useStore } from "./store-DqMNyVQw.mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Search, o as MessageCircle, r as ShoppingBag, s as Menu, t as X, u as Heart } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Shell-BJ-ZsTQu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categoryAr = {
	Pizza: "بيتزا",
	Desserts: "حلويات",
	Baking: "خبز ومخبوزات",
	"Plant-Based Cooking": "طبخ نباتي",
	"Healthy Cooking": "طبخ صحي",
	Sauces: "الصلصات",
	"Professional Techniques": "تقنيات احترافية",
	"Food Presentation": "تقديم الطعام",
	"Food Business": "مشروعات الطعام"
};
var levelAr = {
	Beginner: "مبتدئ",
	Intermediate: "متوسط",
	Advanced: "متقدم"
};
var courseAr = {
	"pizza-masterclass": {
		title: "إتقان البيتزا النابولية",
		tagline: "من الدقيق والماء إلى قاعدة هوائية متفحمة الأطراف — مستوى بعد مستوى.",
		outcomes: [
			"بناء العجين بالإحساس والوصفة",
			"إتقان طرق التخمير المباشر وغير المباشر",
			"الخبز في أفران المنزل والمطاعم",
			"تقديم وتصوير بيتزا تفتح الشهية"
		],
		equipment: [
			"صاج أو حجر بيتزا",
			"ميزان رقمي دقيق",
			"لوح إدخال البيتزا",
			"دقيق 00 وخميرة طازجة وملح بحري"
		],
		modules: [
			{ title: "المستوى 01 — أساسيات العجين" },
			{ title: "المستوى 02 — طرق العجين المباشر وغير المباشر" },
			{ title: "المستوى 03 — تقنيات الخَبز الاحترافية" },
			{ title: "دورة قصيرة — ست صلصات بيتزا مميزة" },
			{ title: "إتقان الجبن" },
			{ title: "تقديم البيتزا وتنسيق الطبق" },
			{ title: "الحرارة والتوقيت وطرق الطهي" }
		]
	},
	"patisserie-layers": {
		title: "الحلويات العصرية: الكيكات متعددة الطبقات",
		tagline: "كيكات إسفنجية وغاناش وتغطيات مصممة للحصول على شريحة مثالية.",
		outcomes: [
			"خبز كيكات إسفنجية متساوية وطرية",
			"ت temper الشوكولاتة وصب التغطيات اللامعة",
			"تجميع طبقات نظيفة وثابتة",
			"حساب تكلفة الكيك للبيع"
		],
		equipment: [
			"قوالب كيك حلقية",
			"ملعقة فرد",
			"ميزان حرارة",
			"شوكولاتة كوفيرتور"
		],
		modules: [
			{ title: "المستوى 01 — الكيكات الإسفنجية والقواعد" },
			{ title: "المستوى 02 — الكريمة والغاناش والحشوات" },
			{ title: "المستوى 03 — التغطيات واللمسات النهائية" },
			{ title: "دورة قصيرة — براليني الفستق" },
			{ title: "تسعير الكيك لخباز المنزل" }
		]
	},
	"plant-based-bowls": {
		title: "أطباق نباتية متكاملة",
		tagline: "طبخ خضروات غني ومتوازن لا يشعرك أنك تتنازل عن شيء.",
		outcomes: [
			"تحميص الخضروات لأقصى نكهة",
			"بناء قواعد غنية بالبروتين من الحبوب",
			"تحضير 8 تتبيلات من مكونات المطبخ",
			"تخطيط أسبوع من الوجبات المتوازنة"
		],
		equipment: [
			"صواني خبز",
			"سكين شيف",
			"خلاط",
			"حمص وطحينة وحبوب"
		],
		modules: [
			{ title: "المستوى 01 — التحميص والقوام" },
			{ title: "المستوى 02 — الحبوب والبقوليات والبروتين" },
			{ title: "دورة قصيرة — ثماني تتبيلات من المطبخ" },
			{ title: "تخطيط الوجبات الأسبوعية" }
		]
	},
	"sauce-foundations": {
		title: "الصلصات الأساسية وما بعدها",
		tagline: "الصلصات الخمس الكلاسيكية، وكل ما يمكنك بناؤه انطلاقاً منها.",
		outcomes: [
			"تحضير الصلصات المعتمدة على الرو",
			"استحلاب الصلصات دون أن تنفصل",
			"التتبيل والاختزال باحتراف"
		],
		equipment: [
			"قدر ثقيل",
			"مضرب يدوي",
			"مصفاة دقيقة"
		],
		modules: [
			{ title: "المستوى 01 — الرو وصلصة الفيلوتيه" },
			{ title: "المستوى 02 — المستحلبات" },
			{ title: "دورة قصيرة — صلصات المقلاة في 10 دقائق" }
		]
	},
	"food-business-launch": {
		title: "أطلق منتجك الغذائي",
		tagline: "حساب التكلفة وبناء العلامة وخطة إطلاق للوصفة التي يطلبها الجميع.",
		outcomes: [
			"حساب تكلفة الوصفة وتحديد هامش الربح",
			"تصميم عبوة تبيع",
			"تخطيط أول 90 يوماً من المبيعات"
		],
		equipment: [
			"جدول بيانات",
			"كاميرا الهاتف",
			"وصفة مميزة من ابتكارك"
		],
		modules: [
			{ title: "المستوى 01 — حساب تكلفة الوصفة والتسعير" },
			{ title: "المستوى 02 — العلامة التجارية والتغليف" },
			{ title: "المستوى 03 — استراتيجية الإطلاق" },
			{ title: "دورة قصيرة — تصوير الطعام بالهاتف" }
		]
	},
	"plating-presentation": {
		title: "تقديم الطعام وتنسيق الطبق",
		tagline: "اللون والارتفاع والمساحة السلبية — اجعل كل طبق يحكي قصة.",
		outcomes: [
			"تكوين الطبق باستخدام الوزن البصري",
			"استخدام الصلصات والزينة بوعي",
			"تصوير الأطباق للسوشيال ميديا"
		],
		equipment: [
			"ملاقط",
			"زجاجات ضغط",
			"أطباق محايدة"
		],
		modules: [
			{ title: "المستوى 01 — مبادئ التكوين" },
			{ title: "المستوى 02 — الصلصات والزينة" },
			{ title: "دورة قصيرة — تنسيق الطبق أمام الكاميرا" }
		]
	}
};
var chefAr = {
	"marco-bellini": {
		name: "ماركو بيليني",
		specialty: "البيتزا النابولية والصلصات الكلاسيكية",
		city: "نابولي ← دبي",
		bio: "شيف بيتزا من الجيل الثالث يدرّب طهاة البيتزا المحترفين في أنحاء الخليج.",
		story: "نشأ ماركو وهو يشكّل العجين في مطعم جده. وبعد عقد من إدارة مطابخ الحطب، بدأ التدريس واكتشف أن أكثر ما يحبه هو رؤية طلابه يخرجون أول قاعدة بيتزا مرقطة من فرن المنزل.",
		achievements: [
			"شهادة شيف بيتزا نابولي",
			"أفضل 50 بيتزا في آسيا 2024",
			"استشاري لـ 14 مطعماً"
		],
		signature: [
			"عجين مخمّر على البارد 72 ساعة",
			"صلصة طماطم سان مارزانو",
			"توقيت جبن فيور دي لاتيه"
		]
	},
	"layla-haddad": {
		name: "ليلى حداد",
		specialty: "الحلويات العصرية وريادة مشروعات الطعام",
		city: "بيروت ← القاهرة",
		bio: "شيف حلويات ومؤسسة علامة كيك انتقلت من مطبخ المنزل إلى ثلاثة فروع.",
		story: "بدأت ليلى بيع كيك الفستق من شقتها. ومن دون تدريب في إدارة الأعمال، تعلمت حساب التكاليف وبناء العلامة بالطريقة الصعبة، والآن تدرّس الحرفة والتجارة معاً.",
		achievements: [
			"دبلوم حلويات لو كوردون بلو",
			"مؤسسة Maison Layla",
			"ظهور على فتافيت"
		],
		signature: [
			"كيك طبقات ببراليني الفستق",
			"تغطية لامعة",
			"ورقة حساب تكلفة الوصفة"
		]
	},
	"noor-alami": {
		name: "نور العمامي",
		specialty: "الطبخ النباتي والصحي",
		city: "عمّان",
		bio: "شيف مدرّبة في التغذية تجعل الخضروات بطلة المائدة للعائلات والمطاعم.",
		story: "بعد أزمة صحية في عائلتها، أعادت نور بناء الأكلات التي نشأت عليها حول الخضروات والبقوليات. فلسفتها: لا تحذف النكهة أبداً.",
		achievements: [
			"دبلوم الشيف النباتي",
			"مؤلفة كتاب المزة الخضراء",
			"استشارية قوائم لـ 6 مقاهٍ"
		],
		signature: [
			"قرنبيط مشوي على طريقة الشاورما",
			"تتبيلة الطحينة لكل شيء",
			"طبق فريكة متكامل"
		]
	}
};
var productAr = {
	peel: {
		name: "لوح بيتزا من الألومنيوم المثقب",
		category: "ألواح البيتزا وأدوات الخَبز",
		description: "يتخلص من الدقيق الزائد لإدخال البيتزا بنظافة.",
		seller: "Kitchen Supply Co."
	},
	steel: {
		name: "صاج خبز بسُمك 6 مم",
		category: "ألواح البيتزا وأدوات الخَبز",
		description: "نقل حرارة احترافي لفرن المنزل.",
		seller: "Forge & Hearth"
	},
	scale: {
		name: "ميزان دقيق 0.1 جم",
		category: "معدات المطبخ",
		description: "قياس دقيق للخميرة والملح في كل مرة.",
		seller: "MeasureWell"
	},
	knife: {
		name: "سكين شيف جيوتو 21 سم",
		category: "سكاكين الشيف",
		description: "سكين متوازن من فولاذ الكربون للاستخدام اليومي.",
		seller: "Hono Knives"
	},
	board: {
		name: "لوح جوز أمريكي بحواف كاملة",
		category: "معدات المطبخ",
		description: "لطيف على حد السكين وثقيل بما يكفي ليبقى ثابتاً.",
		seller: "Woodline"
	},
	spatula: {
		name: "طقم ملاعق فرد",
		category: "أدوات الحلويات",
		description: "ثلاثة أحجام لتغطية الكيك واللمسات النهائية.",
		seller: "Pâtisserie Pro"
	},
	thermo: {
		name: "ميزان حرارة سريع القراءة",
		category: "أدوات الحلويات",
		description: "لتمبير الشوكولاتة والشرابات خلال ثانيتين.",
		seller: "MeasureWell"
	},
	piping: {
		name: "طقم أكياس تزيين قابل لإعادة الاستخدام",
		category: "أدوات الحلويات",
		description: "أكياس سيليكون مع 12 رأساً من الستانلس ستيل.",
		seller: "Pâtisserie Pro"
	},
	whisk: {
		name: "مضرب بالون 30 سم",
		category: "معدات المطبخ",
		description: "أسلاك قوية للاستحلاب والكريمات.",
		seller: "Kitchen Supply Co."
	},
	light: {
		name: "إضاءة طاولة لتصوير الطعام",
		category: "تصوير الطعام وتنسيقه",
		description: "لوحة بإضاءة نهارية ناعمة لتصوير الأطباق.",
		seller: "LumaStudio"
	}
};
var pathAr = {
	"dish-master": {
		title: "إتقان الطبق",
		blurb: "تعلّم التقنيات منفردة وأتقن طبقاً مميزاً."
	},
	"feel-good": {
		title: "الطاهي المتوازن",
		blurb: "استكشف الطبخ المتوازن والصحي والنباتي."
	},
	"food-founder": {
		title: "مؤسس مشروع الطعام",
		blurb: "طوّر منتجاً، احسب تكلفته، ابنِ علامته وخطط لإطلاقه."
	}
};
var faqAr = [
	{
		q: "هل يمكنني شراء مستوى واحد فقط؟",
		a: "نعم. كل مستوى ودورة قصيرة تُباع منفردة. الباقات اختيارية وتضيف التوفير فقط."
	},
	{
		q: "إلى متى يظل الوصول متاحاً؟",
		a: "تبقى المستويات التي اشتريتها في مطبخ NOWA مع وصول دائم، بما في ذلك التحديثات المستقبلية."
	},
	{
		q: "هل يوجد تقييم مباشر؟",
		a: "الدروس المسجلة ذاتية الإيقاع. المستويات التي تحمل علامة مباشر تتضمن جلسة تقييم مجدولة مع الشيف."
	}
];
function label(value, lang) {
	if (lang === "en") return value;
	return categoryAr[value] ?? levelAr[value] ?? value;
}
function languageLabel(value, lang) {
	if (lang === "en") return value;
	return {
		English: "الإنجليزية",
		Arabic: "العربية",
		Italian: "الإيطالية",
		Spanish: "الإسبانية",
		French: "الفرنسية"
	}[value] ?? value;
}
function localizeCourse(course, lang) {
	if (lang === "en") return course;
	const t = courseAr[course.slug] ?? {};
	const modules = t.modules ?? [];
	return {
		...course,
		...t,
		category: course.category,
		level: course.level,
		faqs: faqAr,
		modules: course.modules.map((m, i) => ({
			...m,
			...modules[i] ?? {}
		}))
	};
}
function localizeChef(chef, lang) {
	return lang === "en" ? chef : {
		...chef,
		...chefAr[chef.slug] ?? {}
	};
}
function localizeProduct(product, lang) {
	return lang === "en" ? product : {
		...product,
		...productAr[product.id] ?? {}
	};
}
function localizePath(path, lang) {
	return lang === "en" ? path : {
		...path,
		...pathAr[path.id] ?? {}
	};
}
var reviewsByLang = {
	en: [
		{
			n: "Rania",
			r: 5,
			t: "Buying one level at a time made it so easy to start."
		},
		{
			n: "Daniel",
			r: 5,
			t: "Clear, warm teaching. The live feedback session was worth it."
		},
		{
			n: "Mona",
			r: 4,
			t: "Loved it — I'd like even more close-up shots."
		}
	],
	ar: [
		{
			n: "رانية",
			r: 5,
			t: "شراء مستوى واحد في كل مرة جعل البداية سهلة جداً."
		},
		{
			n: "دانيال",
			r: 5,
			t: "شرح واضح ودافئ. جلسة التقييم المباشر كانت تستحق كل قرش."
		},
		{
			n: "منى",
			r: 4,
			t: "أحببته — أتمنى لقطات أقرب أكثر."
		}
	]
};
function getReviews(lang) {
	return reviewsByLang[lang];
}
var testimonialsByLang = {
	en: [
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
	],
	ar: [
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
	]
};
function getTestimonials(lang) {
	return testimonialsByLang[lang];
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Sheet = Dialog;
var SheetPortal = DialogPortal;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = import_react.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = DialogContent.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = DialogTitle.displayName;
var SheetDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = DialogDescription.displayName;
function Logo({ variant = "dark", className = "h-11" }) {
	const { t } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: "inline-block shrink-0",
		"aria-label": t("homeAria"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: "/assets/images/Organic_Sage_Nowa_Studio_Badge.png",
			alt: "NOWA Studio",
			width: 1024,
			height: 1024,
			className: `${className} w-auto rounded-full object-contain`
		})
	});
}
var money = (n, lang) => {
	return `${lang ? dict[lang].currency : "$"}${n.toFixed(n % 1 ? 2 : 0)}`;
};
function Nav() {
	const { t, lang, setLang, bag, setBagOpen, wishlist } = useStore();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [q, setQ] = (0, import_react.useState)("");
	const nav = useNavigate();
	const links = [
		{
			to: "/courses",
			label: t("courses")
		},
		{
			to: "/paths",
			label: t("paths")
		},
		{
			to: "/chefs",
			label: t("chefs")
		},
		{
			to: "/market",
			label: t("market")
		},
		{
			to: "/creators",
			label: t("creators")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-deep px-4 py-2 text-center text-xs tracking-wide text-cream",
		children: t("announce")
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-30 border-b border-border bg-cream/95 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 text-sm font-bold lg:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "relative py-1 transition-colors hover:text-tomato",
						activeProps: { className: "text-tomato" },
						children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [l.label, isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-tomato" })] })
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-2 md:flex",
							onSubmit: (e) => {
								e.preventDefault();
								nav({
									to: "/courses",
									search: { q }
								});
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: t("search"),
								"aria-label": t("search"),
								className: "w-40 bg-transparent text-sm outline-none"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setLang(lang === "en" ? "ar" : "en"),
							className: "rounded-full border border-border px-3 py-2 text-xs font-extrabold",
							children: lang === "en" ? "العربية" : "EN"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/kitchen",
							"aria-label": t("saved"),
							className: "relative rounded-full border border-border p-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" }), wishlist.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -end-1 -top-1 grid size-5 place-items-center rounded-full bg-mustard text-[10px] font-bold",
								children: wishlist.length
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setBagOpen(true),
							"aria-label": t("bag"),
							className: "relative rounded-full bg-forest p-2.5 text-cream",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" }), bag.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -end-1 -top-1 grid size-5 place-items-center rounded-full bg-tomato text-[10px] font-bold",
								children: bag.length
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kitchen",
							className: "hidden rounded-full bg-tomato px-4 py-2.5 text-sm font-extrabold text-primary-foreground shadow-pop sm:inline-block",
							children: t("kitchen")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "lg:hidden",
							onClick: () => setOpen(!open),
							"aria-label": t("menu"),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mobile-menu-enter grid gap-1 border-t border-border px-5 py-4 font-bold lg:hidden",
			children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: l.to,
				onClick: () => setOpen(false),
				activeProps: { className: "text-tomato" },
				className: "rounded-lg px-3 py-2.5 transition-colors hover:bg-muted",
				children: l.label
			}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/kitchen",
				onClick: () => setOpen(false),
				activeProps: { className: "text-tomato" },
				className: "rounded-lg px-3 py-2.5 transition-colors hover:bg-muted",
				children: t("kitchen")
			})]
		})]
	})] });
}
function BagSheet() {
	const { bagOpen, setBagOpen, bag, toggleBag, bagQuote, t, lang, workbooks, toggleWorkbook } = useStore();
	const nav = useNavigate();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		open: bagOpen,
		onOpenChange: setBagOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
			className: "flex w-full flex-col bg-cream sm:max-w-md",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, {
					className: "text-2xl font-extrabold",
					children: t("bag")
				}) }),
				bag.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted-foreground",
					children: t("emptyBag")
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 space-y-5 overflow-auto px-4",
					children: bagQuote.groups.map((g) => {
						const c = localizeCourse(getCourse(g.slug), lang);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl bg-card p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-extrabold",
									children: c.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-2 space-y-1 text-sm",
									children: g.quote.lineIds.map((id) => {
										const m = findModule(id).module;
										const free = m.bonus && g.quote.bonusUnlocked;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center justify-between gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: c.modules.find((item) => item.id === id)?.title ?? m.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "flex items-center gap-2 whitespace-nowrap",
												children: [free ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
													className: "text-tomato",
													children: t("free")
												}) : money(m.price, lang), bag.includes(id) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => toggleBag(id),
													"aria-label": `${t("remove")} ${m.title}`,
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
												})]
											})]
										}, id);
									})
								}),
								g.quote.discountApplied && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-xs font-bold text-forest",
									children: [
										t("bundleDiscount"),
										" −",
										money(g.quote.discount, lang)
									]
								}),
								g.quote.workbookPrice > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center justify-between rounded-xl bg-mustard/20 p-2 text-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "block",
										children: t("workbook")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: money(g.quote.workbookPrice, lang)
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => toggleWorkbook(g.slug),
										className: "font-bold text-tomato",
										children: t("remove")
									})]
								}),
								!workbooks.includes(g.slug) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => toggleWorkbook(g.slug),
									className: "mt-3 flex w-full items-center justify-between rounded-xl border border-dashed border-border p-2 text-start text-xs hover:border-mustard",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
										className: "block",
										children: t("workbook")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-muted-foreground",
										children: [
											money(12, lang),
											" · ",
											t("workbookCopy")
										]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-forest",
										children: t("add")
									})]
								})
							]
						}, g.slug);
					})
				}),
				bag.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("original") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("s", { children: money(bagQuote.original, lang) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-xl font-extrabold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("total") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(bagQuote.total, lang) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => {
								setBagOpen(false);
								nav({ to: "/checkout" });
							},
							className: "mt-3 w-full rounded-full bg-tomato py-3 font-extrabold text-primary-foreground shadow-pop",
							children: t("checkout")
						})
					]
				})
			]
		})
	});
}
function Chatbot() {
	const { t, lang } = useStore();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [msgs, setMsgs] = (0, import_react.useState)([]);
	const [v, setV] = (0, import_react.useState)("");
	const reply = (q) => {
		const s = q.toLowerCase();
		if (s.includes("bundle") || s.includes("free") || s.includes("باقة") || s.includes("مجاني")) return t("chatbotBundle");
		if (s.includes("creator") || s.includes("apply") || s.includes("مبدع") || s.includes("تقديم")) return t("chatbotCreator");
		const c = courses.find((c) => s.includes(c.category.toLowerCase().split(" ")[0] ?? ""));
		if (c) return interpolate(t("chatbotCourse"), {
			course: localizeCourse(c, lang).title,
			amount: money(Math.min(...c.modules.map((m) => m.price)), lang)
		});
		return t("chatbotFallback");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-5 end-5 z-40",
		children: [open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mobile-menu-enter mb-3 flex h-96 w-[min(20rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between bg-forest px-4 py-3 text-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: t("demoAssistant") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(false),
						"aria-label": t("close"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-2 overflow-auto p-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-2xl bg-muted p-3",
						children: t("chatHi")
					}), msgs.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `rounded-2xl p-3 ${m.me ? "ms-8 bg-mustard" : "me-8 bg-muted"}`,
						children: m.text
					}, i))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex gap-2 border-t border-border p-2",
					onSubmit: (e) => {
						e.preventDefault();
						const q = v.trim().slice(0, 300);
						if (!q) return;
						setMsgs((m) => [
							...m,
							{
								me: true,
								text: q
							},
							{
								me: false,
								text: reply(q)
							}
						]);
						setV("");
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: v,
						onChange: (e) => setV(e.target.value),
						maxLength: 300,
						className: "flex-1 rounded-full bg-muted px-3 text-sm outline-none",
						placeholder: t("askNowa"),
						"aria-label": t("message")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "rounded-full bg-tomato px-3 py-2 text-xs font-bold text-primary-foreground",
						children: t("send")
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setOpen(!open),
			"aria-label": t("openChat"),
			className: "ms-auto grid size-14 place-items-center rounded-full bg-tomato text-primary-foreground shadow-pop",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {})
		})]
	});
}
function Footer() {
	const { t } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-24 bg-deep text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
					variant: "light",
					className: "h-14"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xs text-sm leading-relaxed opacity-70",
					children: t("footerTag")
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "mb-1 text-mustard",
							children: t("learn")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/courses",
							className: "w-fit opacity-80 transition-colors hover:opacity-100 hover:text-mustard",
							children: t("courses")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/paths",
							className: "w-fit opacity-80 transition-colors hover:opacity-100 hover:text-mustard",
							children: t("paths")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/chefs",
							className: "w-fit opacity-80 transition-colors hover:opacity-100 hover:text-mustard",
							children: t("chefs")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
							className: "mb-1 text-mustard",
							children: t("growColumn")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/creators",
							className: "w-fit opacity-80 transition-colors hover:opacity-100 hover:text-mustard",
							children: t("creators")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/market",
							className: "w-fit opacity-80 transition-colors hover:opacity-100 hover:text-mustard",
							children: t("market")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/kitchen",
							className: "w-fit opacity-80 transition-colors hover:opacity-100 hover:text-mustard",
							children: t("kitchen")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs leading-relaxed opacity-70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: t("footerNotice") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3",
						children: "© 2026 NOWA Studio"
					})]
				})
			]
		})
	});
}
function Shell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BagSheet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chatbot, {})
		]
	});
}
//#endregion
export { label as a, localizeCourse as c, money as d, getTestimonials as i, localizePath as l, cn as n, languageLabel as o, getReviews as r, localizeChef as s, Shell as t, localizeProduct as u };
