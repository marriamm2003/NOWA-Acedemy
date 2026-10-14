import { r as __toESM } from "../_runtime.mjs";
import { v as require_jsx_runtime, y as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-D1rqBFkA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_pizza_default = "/assets/hero-pizza-Ca2IvMB5.jpg";
var dessert_default = "/assets/dessert-DX61i_hg.jpg";
var plant_default = "/assets/plant-87-99Uwv.jpg";
var tools_default = "/assets/tools-lwTVCvLP.jpg";
var sauces_default = "/assets/sauces-CFD3E6uc.jpg";
var business_default = "/assets/business-eov7WpGV.jpg";
var plating_default = "/assets/plating-Bdjzxa8Y.jpg";
var images = {
	pizza: hero_pizza_default,
	dessert: dessert_default,
	plant: plant_default,
	tools: tools_default,
	sauces: sauces_default,
	business: business_default,
	plating: plating_default,
	pastryTools: "/assets/pastry-tools-BSgXVc15.jpg"
};
var categories = [
	"Pizza",
	"Desserts",
	"Baking",
	"Plant-Based Cooking",
	"Healthy Cooking",
	"Sauces",
	"Professional Techniques",
	"Food Presentation",
	"Food Business"
];
var levels = [
	"Beginner",
	"Intermediate",
	"Advanced"
];
var faqs = [
	{
		q: "Can I buy just one module?",
		a: "Yes. Every level and mini-course is sold on its own. Bundles are optional and only add savings."
	},
	{
		q: "How long do I keep access?",
		a: "Purchased modules stay in your NOWA Kitchen with lifetime access, including future updates."
	},
	{
		q: "Is there live feedback?",
		a: "Recorded lessons are self-paced. Modules marked LIVE include a scheduled feedback session with the chef."
	}
];
function mods(prefix, list) {
	return list.map((m, i) => ({
		...m,
		id: `${prefix}-${i + 1}`
	}));
}
var courses = [
	{
		slug: "pizza-masterclass",
		title: "Pizza Masterclass",
		tagline: "From flour and water to a blistered, airy crust — one level at a time.",
		category: "Pizza",
		level: "Beginner",
		chef: "marco-bellini",
		image: hero_pizza_default,
		rating: 4.9,
		reviews: 1284,
		hours: 11,
		languages: ["English", "Italian"],
		subtitles: [
			"English",
			"Arabic",
			"Spanish"
		],
		outcomes: [
			"Build dough by feel and by formula",
			"Master direct and indirect methods",
			"Bake in home and pro ovens",
			"Plate and photograph pizza that sells"
		],
		equipment: [
			"Pizza steel or stone",
			"Digital scale (0.1g)",
			"Pizza peel",
			"00 flour, fresh yeast, sea salt"
		],
		modules: mods("pz", [
			{
				title: "Level 01 — Dough Fundamentals",
				kind: "level",
				price: 39,
				lessons: 9,
				minutes: 95,
				eligible: true
			},
			{
				title: "Level 02 — Direct & Indirect Dough Methods",
				kind: "level",
				price: 49,
				lessons: 11,
				minutes: 120,
				eligible: true
			},
			{
				title: "Level 03 — Professional Baking Techniques",
				kind: "level",
				price: 59,
				lessons: 12,
				minutes: 140,
				eligible: true,
				live: true
			},
			{
				title: "Mini-course — Six Signature Pizza Sauces",
				kind: "mini",
				price: 25,
				lessons: 6,
				minutes: 48,
				eligible: false,
				bonus: true
			},
			{
				title: "Cheese Masterclass",
				kind: "mini",
				price: 29,
				lessons: 7,
				minutes: 62,
				eligible: true
			},
			{
				title: "Pizza Presentation & Plating",
				kind: "mini",
				price: 19,
				lessons: 5,
				minutes: 40,
				eligible: true
			},
			{
				title: "Heat, Timing & Cooking Methods",
				kind: "mini",
				price: 29,
				lessons: 6,
				minutes: 55,
				eligible: true
			}
		]),
		products: [
			"peel",
			"steel",
			"scale"
		],
		faqs,
		createdAt: 5
	},
	{
		slug: "patisserie-layers",
		title: "Modern Patisserie: Layer Cakes",
		tagline: "Sponges, ganaches and glazes engineered for the perfect slice.",
		category: "Desserts",
		level: "Intermediate",
		chef: "layla-haddad",
		image: dessert_default,
		rating: 4.8,
		reviews: 842,
		hours: 9,
		languages: ["English", "Arabic"],
		subtitles: [
			"English",
			"Arabic",
			"French"
		],
		outcomes: [
			"Bake level, tender sponges",
			"Temper chocolate and pour mirror glazes",
			"Assemble clean, stable layers",
			"Cost a cake for sale"
		],
		equipment: [
			"Cake rings",
			"Offset spatula",
			"Thermometer",
			"Couverture chocolate"
		],
		modules: mods("pt", [
			{
				title: "Level 01 — Sponges & Bases",
				kind: "level",
				price: 39,
				lessons: 8,
				minutes: 90,
				eligible: true
			},
			{
				title: "Level 02 — Creams, Ganache & Fillings",
				kind: "level",
				price: 45,
				lessons: 10,
				minutes: 110,
				eligible: true
			},
			{
				title: "Level 03 — Glazes & Finishing",
				kind: "level",
				price: 55,
				lessons: 9,
				minutes: 105,
				eligible: true,
				live: true
			},
			{
				title: "Mini-course — Pistachio Praline",
				kind: "mini",
				price: 22,
				lessons: 4,
				minutes: 35,
				eligible: false,
				bonus: true
			},
			{
				title: "Cake Pricing for Home Bakers",
				kind: "mini",
				price: 19,
				lessons: 5,
				minutes: 38,
				eligible: true
			}
		]),
		products: [
			"spatula",
			"thermo",
			"piping"
		],
		faqs,
		createdAt: 4
	},
	{
		slug: "plant-based-bowls",
		title: "Plant-Based Power Bowls",
		tagline: "Bold, balanced vegetable cooking that never feels like a compromise.",
		category: "Plant-Based Cooking",
		level: "Beginner",
		chef: "noor-alami",
		image: plant_default,
		rating: 4.7,
		reviews: 611,
		hours: 6,
		languages: ["English", "Arabic"],
		subtitles: ["English", "Arabic"],
		outcomes: [
			"Roast vegetables for maximum flavour",
			"Build protein-rich grain bases",
			"Make 8 dressings from pantry staples",
			"Plan a week of balanced meals"
		],
		equipment: [
			"Sheet pans",
			"Chef knife",
			"Blender",
			"Chickpeas, tahini, grains"
		],
		modules: mods("pb", [
			{
				title: "Level 01 — Roasting & Texture",
				kind: "level",
				price: 29,
				lessons: 7,
				minutes: 70,
				eligible: true
			},
			{
				title: "Level 02 — Grains, Legumes & Protein",
				kind: "level",
				price: 35,
				lessons: 8,
				minutes: 85,
				eligible: true
			},
			{
				title: "Mini-course — Eight Pantry Dressings",
				kind: "mini",
				price: 18,
				lessons: 8,
				minutes: 40,
				eligible: false,
				bonus: true
			},
			{
				title: "Weekly Meal Planning",
				kind: "mini",
				price: 19,
				lessons: 4,
				minutes: 32,
				eligible: true
			}
		]),
		products: ["knife", "board"],
		faqs,
		createdAt: 3
	},
	{
		slug: "sauce-foundations",
		title: "Mother Sauces & Beyond",
		tagline: "The five classical sauces, then everything you can build from them.",
		category: "Sauces",
		level: "Intermediate",
		chef: "marco-bellini",
		image: sauces_default,
		rating: 4.8,
		reviews: 503,
		hours: 7,
		languages: ["English"],
		subtitles: ["English", "Arabic"],
		outcomes: [
			"Make roux-based sauces confidently",
			"Emulsify without breaking",
			"Season and reduce like a pro"
		],
		equipment: [
			"Heavy saucepan",
			"Whisk",
			"Fine sieve"
		],
		modules: mods("sc", [
			{
				title: "Level 01 — Roux & Velouté",
				kind: "level",
				price: 29,
				lessons: 6,
				minutes: 60,
				eligible: true
			},
			{
				title: "Level 02 — Emulsions",
				kind: "level",
				price: 35,
				lessons: 7,
				minutes: 72,
				eligible: true
			},
			{
				title: "Mini-course — Pan Sauces in 10 Minutes",
				kind: "mini",
				price: 15,
				lessons: 4,
				minutes: 30,
				eligible: false,
				bonus: true
			}
		]),
		products: ["whisk", "knife"],
		faqs,
		createdAt: 2
	},
	{
		slug: "food-business-launch",
		title: "Launch Your Food Product",
		tagline: "Costing, branding and a launch plan for the recipe everyone asks about.",
		category: "Food Business",
		level: "Beginner",
		chef: "layla-haddad",
		image: business_default,
		rating: 4.9,
		reviews: 390,
		hours: 8,
		languages: ["English", "Arabic"],
		subtitles: ["English", "Arabic"],
		outcomes: [
			"Cost a recipe and set a margin",
			"Design packaging that sells",
			"Plan your first 90 days of sales"
		],
		equipment: [
			"Spreadsheet",
			"Smartphone camera",
			"Your signature recipe"
		],
		modules: mods("fb", [
			{
				title: "Level 01 — Recipe Costing & Pricing",
				kind: "level",
				price: 45,
				lessons: 8,
				minutes: 80,
				eligible: true
			},
			{
				title: "Level 02 — Brand & Packaging",
				kind: "level",
				price: 49,
				lessons: 9,
				minutes: 95,
				eligible: true
			},
			{
				title: "Level 03 — Launch Strategy",
				kind: "level",
				price: 55,
				lessons: 8,
				minutes: 90,
				eligible: true,
				live: true
			},
			{
				title: "Mini-course — Food Photography on a Phone",
				kind: "mini",
				price: 25,
				lessons: 6,
				minutes: 45,
				eligible: false,
				bonus: true
			}
		]),
		products: ["light"],
		faqs,
		createdAt: 6
	},
	{
		slug: "plating-presentation",
		title: "Plating & Food Presentation",
		tagline: "Colour, height and negative space — make every plate a story.",
		category: "Food Presentation",
		level: "Advanced",
		chef: "noor-alami",
		image: plating_default,
		rating: 4.6,
		reviews: 274,
		hours: 5,
		languages: ["English"],
		subtitles: ["English", "Arabic"],
		outcomes: [
			"Compose plates using visual weight",
			"Use sauces and garnishes deliberately",
			"Shoot plates for social"
		],
		equipment: [
			"Tweezers",
			"Squeeze bottles",
			"Neutral plates"
		],
		modules: mods("pp", [
			{
				title: "Level 01 — Composition Principles",
				kind: "level",
				price: 35,
				lessons: 6,
				minutes: 58,
				eligible: true
			},
			{
				title: "Level 02 — Sauce Work & Garnish",
				kind: "level",
				price: 39,
				lessons: 7,
				minutes: 66,
				eligible: true
			},
			{
				title: "Mini-course — Styling for the Camera",
				kind: "mini",
				price: 19,
				lessons: 4,
				minutes: 30,
				eligible: false,
				bonus: true
			}
		]),
		products: ["piping", "light"],
		faqs,
		createdAt: 1
	}
];
var chefs = [
	{
		slug: "marco-bellini",
		name: "Marco Bellini",
		specialty: "Neapolitan pizza & classical sauces",
		city: "Naples → Dubai",
		initials: "MB",
		tone: "tomato",
		bio: "Third-generation pizzaiolo who has trained over 200 professional pizza cooks across the Gulf.",
		story: "Marco grew up shaping dough in his grandfather's pizzeria. After a decade running wood-fired kitchens, he started teaching — and discovered he loved watching students pull their first leopard-spotted crust out of a home oven.",
		achievements: [
			"AVPN certified pizzaiolo",
			"Top 50 Pizza Asia 2024",
			"Consultant to 14 restaurants"
		],
		signature: [
			"72-hour cold-fermented dough",
			"San Marzano raw sauce",
			"Fior di latte timing"
		],
		products: [
			"peel",
			"steel",
			"scale",
			"whisk"
		],
		social: [{
			label: "Instagram",
			href: "#"
		}, {
			label: "YouTube",
			href: "#"
		}]
	},
	{
		slug: "layla-haddad",
		name: "Layla Haddad",
		specialty: "Modern patisserie & food entrepreneurship",
		city: "Beirut → Cairo",
		initials: "LH",
		tone: "mustard",
		bio: "Pastry chef and founder of a cake brand that went from home kitchen to three stores.",
		story: "Layla started selling pistachio cakes from her apartment. With no business training, she learned costing and branding the hard way — and now teaches both the craft and the commerce.",
		achievements: [
			"Le Cordon Bleu Pâtisserie",
			"Founder, Maison Layla",
			"Featured on Fatafeat"
		],
		signature: [
			"Pistachio praline layer cake",
			"Mirror glaze",
			"Recipe costing sheet"
		],
		products: [
			"spatula",
			"thermo",
			"piping",
			"light"
		],
		social: [{
			label: "Instagram",
			href: "#"
		}, {
			label: "TikTok",
			href: "#"
		}]
	},
	{
		slug: "noor-alami",
		name: "Noor Alami",
		specialty: "Plant-based & healthy cooking",
		city: "Amman",
		initials: "NA",
		tone: "green",
		bio: "Nutrition-trained chef making vegetables the main event for families and restaurants.",
		story: "After a health scare in her family, Noor rebuilt the meals she grew up with around vegetables and legumes. Her approach: never subtract flavour.",
		achievements: [
			"Plant-Based Chef Diploma",
			"Author, 'Green Mezze'",
			"Menu consultant for 6 cafés"
		],
		signature: [
			"Charred cauliflower shawarma",
			"Tahini everything dressing",
			"Freekeh power bowl"
		],
		products: ["knife", "board"],
		social: [{
			label: "Instagram",
			href: "#"
		}]
	}
];
var products = [
	{
		id: "peel",
		name: "Perforated Aluminium Pizza Peel",
		category: "Pizza peels & baking tools",
		description: "Sheds excess flour for cleaner launches.",
		price: 48,
		seller: "Kitchen Supply Co.",
		url: "https://example.com/peel",
		badge: "Used in This Course"
	},
	{
		id: "steel",
		name: "6mm Baking Steel",
		category: "Pizza peels & baking tools",
		description: "Pro-level heat transfer for home ovens.",
		price: 89,
		seller: "Forge & Hearth",
		url: "https://example.com/steel",
		badge: "Chef Recommended"
	},
	{
		id: "scale",
		name: "Precision Scale 0.1g",
		category: "Kitchen equipment",
		description: "Accurate yeast and salt every time.",
		price: 24,
		seller: "MeasureWell",
		url: "https://example.com/scale",
		badge: "Used in This Course"
	},
	{
		id: "knife",
		name: "21cm Gyuto Chef Knife",
		category: "Chef knives",
		description: "Balanced carbon-steel all-rounder.",
		price: 135,
		seller: "Hono Knives",
		url: "https://example.com/knife",
		badge: "Chef Recommended"
	},
	{
		id: "board",
		name: "End-Grain Walnut Board",
		category: "Kitchen equipment",
		description: "Kind to edges, heavy enough to stay put.",
		price: 72,
		seller: "Woodline",
		url: "https://example.com/board",
		badge: "Chef Recommended"
	},
	{
		id: "spatula",
		name: "Offset Spatula Set",
		category: "Pastry tools",
		description: "Three sizes for crumb coats and finishing.",
		price: 21,
		seller: "Pâtisserie Pro",
		url: "https://example.com/spatula",
		badge: "Used in This Course"
	},
	{
		id: "thermo",
		name: "Instant-Read Thermometer",
		category: "Pastry tools",
		description: "Tempering and syrups, read in 2 seconds.",
		price: 34,
		seller: "MeasureWell",
		url: "https://example.com/thermo",
		badge: "Used in This Course"
	},
	{
		id: "piping",
		name: "Reusable Piping Bag Kit",
		category: "Pastry tools",
		description: "Silicone bags with 12 stainless tips.",
		price: 19,
		seller: "Pâtisserie Pro",
		url: "https://example.com/piping",
		badge: "Chef Recommended"
	},
	{
		id: "whisk",
		name: "Balloon Whisk 30cm",
		category: "Kitchen equipment",
		description: "Stiff wires for emulsions and creams.",
		price: 16,
		seller: "Kitchen Supply Co.",
		url: "https://example.com/whisk",
		badge: "Chef Recommended"
	},
	{
		id: "light",
		name: "Tabletop Food Photo Light",
		category: "Food photography & styling",
		description: "Soft daylight-balanced panel for food shoots.",
		price: 64,
		seller: "LumaStudio",
		url: "https://example.com/light",
		badge: "Chef Recommended"
	}
];
var paths = [
	{
		id: "dish-master",
		title: "The Dish Master",
		blurb: "Learn individual techniques and master a signature dish.",
		weeks: 8,
		courses: [
			"pizza-masterclass",
			"sauce-foundations",
			"plating-presentation"
		],
		tone: "tomato"
	},
	{
		id: "feel-good",
		title: "The Feel-Good Cook",
		blurb: "Explore balanced, healthy and plant-based cooking.",
		weeks: 6,
		courses: [
			"plant-based-bowls",
			"sauce-foundations",
			"plating-presentation"
		],
		tone: "green"
	},
	{
		id: "food-founder",
		title: "The Food Founder",
		blurb: "Develop a product, cost it, brand it and plan a launch.",
		weeks: 10,
		courses: [
			"patisserie-layers",
			"food-business-launch",
			"plating-presentation"
		],
		tone: "mustard"
	}
];
var getCourse = (slug) => courses.find((c) => c.slug === slug);
var getChef = (slug) => chefs.find((c) => c.slug === slug);
var getProduct = (id) => products.find((p) => p.id === id);
var findModule = (id) => {
	for (const c of courses) {
		const m = c.modules.find((x) => x.id === id);
		if (m) return {
			course: c,
			module: m
		};
	}
};
var fromPrice = (c) => Math.min(...c.modules.filter((m) => !m.bonus).map((m) => m.price));
var BUNDLE_DISCOUNT = .15;
var round = (n) => Math.round(n * 100) / 100;
/** Price a selection of modules belonging to ONE course. */
function quoteCourse(modules, selectedIds, withWorkbook = false) {
	const unique = Array.from(new Set(selectedIds));
	const selected = modules.filter((m) => unique.includes(m.id));
	const bonusModule = modules.find((m) => m.bonus);
	const eligible = selected.filter((m) => m.eligible && !m.bonus);
	const eligibleCount = eligible.length;
	const bonusUnlocked = !!bonusModule && eligibleCount >= 2;
	const discountApplied = eligibleCount >= 3;
	const lineIds = selected.map((m) => m.id);
	if (bonusUnlocked && bonusModule && !lineIds.includes(bonusModule.id)) lineIds.push(bonusModule.id);
	const workbookPrice = withWorkbook ? 12 : 0;
	const original = round(selected.reduce((s, m) => s + m.price, 0) + (bonusUnlocked && bonusModule && !unique.includes(bonusModule.id) ? bonusModule.price : 0) + workbookPrice);
	const bonusSavings = bonusUnlocked && bonusModule ? bonusModule.price : 0;
	const discount = discountApplied ? round(eligible.reduce((s, m) => s + m.price, 0) * BUNDLE_DISCOUNT) : 0;
	const total = round(Math.max(0, original - bonusSavings - discount));
	let nextHint;
	if (bonusModule && eligibleCount < 2) nextHint = `Add ${2 - eligibleCount} more eligible module${2 - eligibleCount > 1 ? "s" : ""} to get "${bonusModule.title.replace(/^Mini-course — /, "")}" free.`;
	else if (eligibleCount < 3) nextHint = `Add ${3 - eligibleCount} more eligible module to save ${BUNDLE_DISCOUNT * 100}% on the bundle.`;
	return {
		original,
		discount,
		bonusSavings,
		workbookPrice,
		total,
		eligibleCount,
		bonusUnlocked,
		bonusModule,
		discountApplied,
		lineIds,
		nextHint
	};
}
var en = {
	announce: "New: build your own Pizza Masterclass — pick two levels and get the Sauces mini-course free.",
	courses: "Courses",
	paths: "Learning Paths",
	chefs: "Chefs",
	market: "Market",
	creators: "For Creators",
	kitchen: "My Kitchen",
	heroEyebrow: "Learn · Create · Grow",
	heroA: "Make Food,",
	heroB: "Make Your",
	heroC: "Mark",
	heroCopy: "From your first perfect pizza to the food business you've been dreaming about. Learn from chefs who bring every recipe to life.",
	ctaFind: "Find your flavour",
	ctaPaths: "Explore learning paths",
	bag: "Bag",
	search: "Search courses, chefs, dishes…",
	featured: "Featured courses",
	browseAll: "Browse all",
	meetChefs: "Meet the chefs",
	curated: "Curated by our chefs",
	passion: "From passion to business",
	passionCopy: "Have a recipe people ask for? NOWA helps talented creators produce courses, build a brand and launch food products.",
	apply: "Apply as a creator",
	footerTag: "Culinary education, chef talent and creator commerce.",
	addToBag: "Add to bag",
	inBag: "In bag",
	owned: "Owned",
	checkout: "Checkout",
	emptyBag: "Your bag is empty. Build a course to get started.",
	chatHi: "Hi, I'm the NOWA demo assistant. Ask me about courses, bundles or creator applications.",
	workbook: "Printable course workbook",
	workbookCopy: "Recipes, practice notes and progress pages",
	contactChoice: "How would you like us to contact you?",
	whatsapp: "WhatsApp",
	websiteMessage: "Website message",
	demoNotice: "Demo only — no real message will be sent.",
	discover: "Discover",
	findYour: "Find your",
	flavour: "flavour",
	all: "All",
	sort: "Sort",
	mostPopular: "Most popular",
	topRated: "Top rated",
	lowestPrice: "Lowest price",
	newest: "Newest",
	course: "course",
	coursesCount: "courses",
	noCourses: "No courses match yet",
	noCoursesCopy: "New categories are coming soon — try clearing filters.",
	clearFilters: "Clear filters",
	category: "Category",
	level: "Level",
	reviews: "reviews",
	hoursTotal: "hours total",
	audio: "Audio",
	subtitles: "Subtitles",
	with: "with",
	from: "from",
	save: "Save",
	saved: "Saved",
	removeWishlist: "Remove from wishlist",
	saveWishlist: "Save to wishlist",
	buildCourse: "Build your course",
	playPreview: "Play preview (demo)",
	watchPreview: "Watch free preview",
	outcomes: "What you'll achieve",
	equipment: "Ingredients & equipment",
	builderEyebrow: "Modular course builder",
	builderTitle: "Pick only the",
	builderAccent: "levels you need",
	builderCopy: "Every module is sold on its own. Recorded lessons are self-paced; modules marked LIVE add an instructor feedback session.",
	meetChef: "Meet your chef",
	reviewsTitle: "Reviews",
	faq: "FAQ",
	usedCourse: "Used in this course",
	love: "You might also love",
	achievements: "Achievements",
	techniques: "Signature techniques",
	coursesBy: "Courses by",
	featuredIn: "Featured in",
	inKitchen: "In the kitchen of",
	workWith: "Work with",
	partnership: "Partnership enquiry",
	partnershipCopy: "Brand partnerships, private classes and consulting are managed by NOWA talent.",
	allChefs: "All chefs",
	chefNotFound: "Chef not found",
	courseNotFound: "Course not found",
	browseCourses: "Browse courses",
	pageNotFound: "Page not found",
	pageMoved: "The page you're looking for doesn't exist or has been moved.",
	goHome: "Go home",
	pageError: "This page didn't load",
	pageErrorCopy: "Something went wrong on our end. You can try refreshing or head back home.",
	tryAgain: "Try again",
	lessons: "recorded lessons",
	minutes: "min",
	liveFeedback: "LIVE feedback",
	eligible: "bundle eligible",
	bonus: "bonus",
	yourBuild: "Your build",
	originalPrice: "Original price",
	bonusCourse: "Bonus mini-course",
	bundleOff: "Bundle {percent}% off",
	workbookPrice: "Course workbook",
	total: "Total",
	youSave: "You save",
	bonusRule: "Pick {count} eligible modules → bonus mini-course free (added once).",
	discountRule: "Pick {count}+ eligible modules → {percent}% off those modules.",
	bonusRuleTwo: "The bonus module itself doesn't count toward eligibility.",
	workbookRule: "Workbooks are optional and added per course.",
	reviewBag: "Review bag",
	selectModule: "Select a module",
	remove: "Remove",
	add: "Add",
	free: "FREE",
	original: "Original",
	checkoutTitle: "Checkout",
	emptyCheckout: "Your bag is empty",
	demoPayment: "Demo payment.",
	demoPaymentCopy: "No payment provider is connected — no real money is charged. Use card",
	name: "Name",
	email: "Email",
	cardNumber: "Card number",
	processing: "Processing…",
	payDemo: "Pay {amount} (demo)",
	orderSummary: "Order summary",
	bundleDiscount: "Bundle discount",
	enterName: "Enter your name",
	validEmail: "Enter a valid email",
	testCard: "Demo mode: use test card 4242 4242 4242 4242",
	contactChoice: "How would you like us to contact you?",
	fromPassion: "From passion to business",
	gotRecipe: "Got the recipe? We'll help",
	buildBusiness: "build the business",
	creatorApplication: "Creator application",
	fullName: "Full name",
	creatorType: "I am a…",
	select: "Select",
	chef: "Chef",
	foodCreator: "Food creator",
	smallFoodBusiness: "Small food business",
	idea: "Your idea, product or course",
	portfolio: "Portfolio / social link (optional)",
	consent: "I agree to be contacted about my application.",
	sendApplication: "Send application",
	thanks: "Thanks, {name}!",
	applicationCaptured: "Your application was captured in this prototype. In the live product our talent team would reply within 5 working days. (No email is sent in this demo.)",
	submitAnother: "Submit another",
	pleaseName: "Please enter your name",
	pleaseEmail: "Please enter a valid email",
	pleaseChoose: "Please choose one",
	pleaseIdea: "Tell us a bit more (20+ characters)",
	pleaseUrl: "Please enter a full URL, e.g. https://…",
	pleaseConsent: "Please confirm you agree to be contacted",
	dashboardNotice: "Prototype dashboard.",
	dashboardCopy: "Accounts aren't connected yet, so access is based on demo orders stored in this browser — not verified payments.",
	orderConfirmed: "Demo order {order} confirmed — your new modules are unlocked below.",
	welcome: "Welcome back,",
	myCourses: "My courses",
	recipes: "Recipes",
	certificates: "Certificates",
	orders: "Orders",
	settings: "Settings",
	noModules: "No modules yet.",
	browse: "Browse courses",
	savedHint: "Tap the heart on any course to save it here.",
	addModules: "Add modules",
	modulesOwned: "modules owned",
	recipeDownload: "Recipe card & ingredient list",
	recipeDemo: "Demo: recipe card PDFs aren't generated in this prototype.",
	certificate: "Certificate of completion",
	certificateHint: "Finish a module to 100% to earn its certificate.",
	demo: "DEMO",
	accountSettings: "Account settings",
	accountCopy: "Sign-in, profile and language preferences will live here once accounts are enabled. Use the language switch in the top bar for English / العربية.",
	help: "Help & support",
	helpCopy: "Ask the NOWA assistant (bottom corner) or email support@nowa.studio (placeholder address).",
	marketTitle: "The Chef's",
	marketAccent: "Market",
	marketEyebrow: "Curated by our chefs",
	toolsTitle: "Tools our chefs",
	toolsAccent: "actually use",
	affiliate: "Affiliate disclosure:",
	affiliateCopy: "Products are sold and shipped by independent sellers. NOWA or the recommending chef may earn a commission. In this prototype, links are simulated and no commission is tracked.",
	shopAt: "Shop at",
	affiliateNote: "Affiliate link (simulated). Seller handles fulfilment & returns.",
	chefRecommended: "Chef Recommended",
	learningPaths: "Learning paths",
	threeWays: "Three ways to",
	grow: "grow",
	weeks: "weeks",
	step: "Step",
	smartFinder: "Smart Course Finder",
	experience: "Your experience",
	goal: "Your goal",
	budget: "Budget per module",
	noMatch: "No match under {amount}. Try raising your budget a little.",
	masterDish: "Master a signature dish",
	healthier: "Eat healthier",
	foodBusinessGoal: "Start a food business",
	marqKnead: "Knead it",
	marqTaste: "Taste it",
	marqPlate: "Plate it",
	marqSell: "Sell it",
	marqLearn: "Learn. Create. Grow.",
	statLearners: "learners",
	statChefs: "chefs",
	statCourses: "courses",
	dough: "72h dough",
	basil: "Fresh basil",
	offer: "Pick 2 levels, get sauces free",
	nextBigThing: "Your recipe could be the next big thing",
	phoneContact: "Contact via WhatsApp",
	websiteContact: "Send a website message",
	demoAssistant: "NOWA · Demo assistant",
	askNowa: "Ask NOWA…",
	send: "Send",
	close: "Close",
	message: "Message",
	openChat: "Open chat",
	menu: "Menu",
	chatbotBundle: "Pick 2 eligible modules in a course and its bonus mini-course is added free. Pick 3 and you also save 15% on them.",
	chatbotCreator: "Head to For Creators and fill in the application — our team reviews every one.",
	chatbotCourse: "Try “{course}” — modules start from {amount}.",
	chatbotFallback: "I'm a demo assistant with scripted answers. Try asking about pizza, desserts, bundles or creators.",
	learn: "Learn",
	growColumn: "Grow",
	footerNotice: "Prototype notice: payments, accounts, affiliate tracking and the chatbot are demo simulations. No real money is taken and no commission is tracked."
};
var dict = {
	en,
	ar: {
		...en,
		announce: "جديد: صمّم دورة إتقان البيتزا — اختر مستويين واحصل على دورة الصلصات القصيرة مجاناً.",
		courses: "الكورسات",
		paths: "مسارات التعلّم",
		chefs: "الشيفات",
		market: "المتجر",
		creators: "للمبدعين",
		kitchen: "مطبخي",
		heroEyebrow: "تعلّم · ابتكر · انمُ",
		heroA: "اصنع الطعام،",
		heroB: "واترك",
		heroC: "بصمتك",
		heroCopy: "من أول بيتزا مثالية إلى مشروع الطعام الذي تحلم به. تعلّم من شيفات يحيون كل وصفة.",
		ctaFind: "اكتشف نكهتك",
		ctaPaths: "استكشف مسارات التعلّم",
		bag: "الحقيبة",
		search: "ابحث عن كورس، شيف، أو طبق…",
		featured: "كورسات مميزة",
		browseAll: "عرض الكل",
		meetChefs: "تعرّف على الشيفات",
		curated: "مختارات شيفاتنا",
		passion: "من الشغف إلى المشروع",
		passionCopy: "لديك وصفة يطلبها الجميع؟ تساعد NOWA المبدعين على إنتاج الكورسات وبناء العلامة وإطلاق منتجات الطعام.",
		apply: "قدّم كمبدع",
		footerTag: "تعليم الطهي، مواهب الشيفات، وتجارة المبدعين.",
		addToBag: "أضف إلى الحقيبة",
		inBag: "في الحقيبة",
		owned: "مملوك",
		checkout: "الدفع",
		emptyBag: "حقيبتك فارغة. صمّم كورسك للبدء.",
		chatHi: "مرحباً، أنا المساعد التجريبي لـ NOWA. اسألني عن الكورسات أو العروض أو طلبات المبدعين.",
		workbook: "ملف عمل PDF للكورس",
		workbookCopy: "وصفات وملاحظات تطبيق وصفحات متابعة",
		contactChoice: "كيف تفضّل أن نتواصل معك؟",
		whatsapp: "واتساب",
		websiteMessage: "رسالة عبر الموقع",
		demoNotice: "تجريبي فقط — لن يتم إرسال رسالة حقيقية.",
		discover: "اكتشف",
		findYour: "اعثر على",
		flavour: "نكهتك",
		all: "الكل",
		sort: "ترتيب",
		mostPopular: "الأكثر شعبية",
		topRated: "الأعلى تقييماً",
		lowestPrice: "الأقل سعراً",
		newest: "الأحدث",
		course: "كورس",
		coursesCount: "كورسات",
		noCourses: "لا توجد كورسات مطابقة",
		noCoursesCopy: "ستتوفر تصنيفات جديدة قريباً — جرّب مسح الفلاتر.",
		clearFilters: "مسح الفلاتر",
		category: "التصنيف",
		level: "المستوى",
		reviews: "تقييمات",
		hoursTotal: "ساعات إجمالاً",
		audio: "الصوت",
		subtitles: "الترجمة",
		with: "مع",
		from: "يبدأ من",
		save: "حفظ",
		saved: "محفوظ",
		removeWishlist: "إزالة من المحفوظات",
		saveWishlist: "حفظ في المحفوظات",
		buildCourse: "صمّم كورسك",
		playPreview: "تشغيل المعاينة التجريبية",
		watchPreview: "شاهد المعاينة المجانية",
		outcomes: "مخرجات التعلّم",
		equipment: "المكونات والمعدات",
		builderEyebrow: "مصمم الكورس المرن",
		builderTitle: "اختر فقط",
		builderAccent: "المستويات التي تحتاجها",
		builderCopy: "كل وحدة تُباع منفردة. الدروس المسجلة ذاتية الإيقاع، والوحدات التي تحمل علامة مباشر تضيف جلسة تقييم مع الشيف.",
		meetChef: "تعرّف على شيفك",
		reviewsTitle: "التقييمات",
		faq: "الأسئلة الشائعة",
		usedCourse: "مستخدم في هذا الكورس",
		love: "قد يعجبك أيضاً",
		achievements: "الإنجازات",
		techniques: "التقنيات المميزة",
		coursesBy: "كورسات",
		featuredIn: "ظهر في",
		inKitchen: "في مطبخ",
		workWith: "اعمل مع",
		partnership: "طلب شراكة",
		partnershipCopy: "تدير NOWA talent شراكات العلامات التجارية والدروس الخاصة والاستشارات.",
		allChefs: "كل الشيفات",
		chefNotFound: "الشيف غير موجود",
		courseNotFound: "الكورس غير موجود",
		browseCourses: "تصفح الكورسات",
		pageNotFound: "الصفحة غير موجودة",
		pageMoved: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
		goHome: "العودة للرئيسية",
		pageError: "تعذر تحميل الصفحة",
		pageErrorCopy: "حدث خطأ من جانبنا. يمكنك تحديث الصفحة أو العودة للرئيسية.",
		tryAgain: "حاول مرة أخرى",
		lessons: "دروس مسجلة",
		minutes: "دقيقة",
		liveFeedback: "تقييم مباشر",
		eligible: "مؤهل للباقة",
		bonus: "إضافة مجانية",
		yourBuild: "اختياراتك",
		originalPrice: "السعر الأصلي",
		bonusCourse: "الكورس القصير المجاني",
		bundleOff: "خصم الباقة {percent}%",
		workbookPrice: "ملف عمل الكورس",
		total: "الإجمالي",
		youSave: "وفّرت",
		bonusRule: "اختر {count} وحدات مؤهلة واحصل على الكورس القصير مجاناً.",
		discountRule: "اختر {count}+ وحدات مؤهلة لتحصل على خصم {percent}% عليها.",
		bonusRuleTwo: "الوحدة المجانية لا تُحتسب ضمن الوحدات المؤهلة.",
		workbookRule: "ملفات العمل اختيارية وتُضاف لكل كورس.",
		reviewBag: "مراجعة الحقيبة",
		selectModule: "اختر وحدة",
		remove: "إزالة",
		add: "إضافة",
		free: "مجاناً",
		original: "الأصلي",
		checkoutTitle: "الدفع",
		emptyCheckout: "حقيبتك فارغة",
		demoPayment: "دفع تجريبي.",
		demoPaymentCopy: "لا يوجد مزود دفع متصل — لن يتم خصم أي مبلغ حقيقي. استخدم البطاقة",
		name: "الاسم",
		email: "البريد الإلكتروني",
		cardNumber: "رقم البطاقة",
		processing: "جارٍ التنفيذ…",
		payDemo: "ادفع {amount} (تجريبي)",
		orderSummary: "ملخص الطلب",
		bundleDiscount: "خصم الباقة",
		enterName: "اكتب اسمك",
		validEmail: "اكتب بريداً إلكترونياً صحيحاً",
		testCard: "الوضع التجريبي: استخدم البطاقة 4242 4242 4242 4242",
		fromPassion: "من الشغف إلى المشروع",
		gotRecipe: "لديك الوصفة؟ سنساعدك",
		buildBusiness: "في بناء المشروع",
		creatorApplication: "طلب انضمام مبدع",
		fullName: "الاسم بالكامل",
		creatorType: "أنا…",
		select: "اختر",
		chef: "شيف",
		foodCreator: "صانع محتوى طعام",
		smallFoodBusiness: "مشروع طعام صغير",
		idea: "فكرتك أو منتجك أو كورسك",
		portfolio: "رابط أعمالك أو حسابك (اختياري)",
		consent: "أوافق على التواصل معي بخصوص طلبي.",
		sendApplication: "إرسال الطلب",
		thanks: "شكراً يا {name}!",
		applicationCaptured: "تم تسجيل طلبك في هذا النموذج التجريبي. في المنتج الفعلي سيرد فريق المواهب خلال 5 أيام عمل. (لن يتم إرسال بريد في هذا العرض.)",
		submitAnother: "إرسال طلب آخر",
		pleaseName: "اكتب اسمك",
		pleaseEmail: "اكتب بريداً إلكترونياً صحيحاً",
		pleaseChoose: "اختر نوعاً",
		pleaseIdea: "اكتب تفاصيل أكثر (20 حرفاً على الأقل)",
		pleaseUrl: "اكتب رابطاً كاملاً مثل https://…",
		pleaseConsent: "يرجى تأكيد موافقتك على التواصل",
		dashboardNotice: "لوحة تحكم تجريبية.",
		dashboardCopy: "الحسابات غير متصلة بعد، لذلك يعتمد الوصول على الطلبات التجريبية المحفوظة في هذا المتصفح — وليست مدفوعات مؤكدة.",
		orderConfirmed: "تم تأكيد الطلب التجريبي {order} — الوحدات الجديدة متاحة لك بالأسفل.",
		welcome: "مرحباً بعودتك،",
		myCourses: "كورساتي",
		recipes: "الوصفات",
		certificates: "الشهادات",
		orders: "الطلبات",
		settings: "الإعدادات",
		noModules: "لا توجد وحدات بعد.",
		browse: "تصفح الكورسات",
		savedHint: "اضغط على القلب في أي كورس لحفظه هنا.",
		addModules: "أضف وحدات",
		modulesOwned: "وحدات مملوكة",
		recipeDownload: "بطاقة الوصفة وقائمة المكونات",
		recipeDemo: "تجريبي: لا يتم إنشاء ملفات PDF للوصفات في هذا العرض.",
		certificate: "شهادة إتمام",
		certificateHint: "أكمل الوحدة بنسبة 100% لتحصل على شهادتها.",
		demo: "تجريبي",
		accountSettings: "إعدادات الحساب",
		accountCopy: "ستتوفر تسجيلات الدخول والملف الشخصي وتفضيلات اللغة عند تفعيل الحسابات. استخدم مفتاح اللغة في الشريط العلوي للتبديل بين العربية والإنجليزية.",
		help: "المساعدة والدعم",
		helpCopy: "اسأل مساعد NOWA في الزاوية السفلية أو راسل support@nowa.studio (عنوان تجريبي).",
		marketTitle: "متجر",
		marketAccent: "الشيفات",
		toolsTitle: "أدوات يستخدمها",
		toolsAccent: "شيفاتنا فعلاً",
		affiliate: "إفصاح التسويق بالعمولة:",
		affiliateCopy: "تُباع المنتجات وتُشحن بواسطة بائعين مستقلين. قد تحصل NOWA أو الشيف المرشِّح على عمولة. في هذا العرض الروابط تجريبية ولا تُحتسب أي عمولة.",
		shopAt: "تسوق من",
		affiliateNote: "رابط تجريبي. البائع مسؤول عن الشحن والإرجاع.",
		chefRecommended: "اختيار الشيف",
		learningPaths: "مسارات التعلّم",
		threeWays: "ثلاث طرق لـ",
		grow: "تنمو",
		weeks: "أسابيع",
		step: "الخطوة",
		smartFinder: "مساعد العثور على الكورس",
		experience: "خبرتك",
		goal: "هدفك",
		budget: "ميزانية الوحدة",
		noMatch: "لا يوجد تطابق تحت {amount}. جرّب زيادة الميزانية قليلاً.",
		masterDish: "أتقن طبقاً مميزاً",
		healthier: "تناول طعاماً صحياً",
		foodBusinessGoal: "ابدأ مشروع طعام",
		marqKnead: "اعجنها",
		marqTaste: "تذوقها",
		marqPlate: "قدّمها",
		marqSell: "بعها",
		marqLearn: "تعلّم. ابتكر. انمُ.",
		statLearners: "متعلم",
		statChefs: "شيفات",
		statCourses: "كورسات",
		dough: "عجين 72 ساعة",
		basil: "ريحان طازج",
		offer: "اختر مستويين واحصل على الصلصات مجاناً",
		nextBigThing: "قد تكون وصفتك هي النجاح الكبير القادم",
		phoneContact: "تواصل عبر واتساب",
		websiteContact: "أرسل رسالة عبر الموقع",
		demoAssistant: "NOWA · مساعد تجريبي",
		askNowa: "اسأل NOWA…",
		send: "إرسال",
		close: "إغلاق",
		message: "رسالة",
		openChat: "فتح المحادثة",
		menu: "القائمة",
		chatbotBundle: "اختر وحدتين مؤهلتين في كورس لتحصل على الكورس القصير مجاناً، واختر ثلاثاً لتحصل أيضاً على خصم 15%.",
		chatbotCreator: "اذهب إلى صفحة المبدعين واملأ الطلب — يراجع فريقنا كل طلب.",
		chatbotCourse: "جرّب «{course}» — تبدأ الوحدات من {amount}.",
		chatbotFallback: "أنا مساعد تجريبي بإجابات معدة مسبقاً. اسألني عن البيتزا أو الحلويات أو الباقات أو المبدعين.",
		learn: "تعلّم",
		growColumn: "طوّر",
		footerNotice: "تنبيه تجريبي: الدفع والحسابات وتتبع العمولات والمساعد محاكاة فقط. لا يتم تحصيل أموال حقيقية ولا تُحتسب عمولات."
	}
};
function interpolate(value, values) {
	return value.replace(/\{(\w+)\}/g, (_, key) => String(values[key] ?? `{${key}}`));
}
var StoreCtx = (0, import_react.createContext)(null);
var seedOrder = {
	id: "NOWA-DEMO-1001",
	date: "2026-09-02",
	moduleIds: [
		"pt-1",
		"pt-2",
		"pt-4",
		"pb-1"
	],
	workbookSlugs: [],
	contactMethod: "website",
	total: 113,
	demo: true
};
function load(k, d) {
	try {
		const v = localStorage.getItem(k);
		return v ? JSON.parse(v) : d;
	} catch {
		return d;
	}
}
function StoreProvider({ children }) {
	const [lang, setLang] = (0, import_react.useState)("ar");
	const [bag, setBag] = (0, import_react.useState)([]);
	const [workbooks, setWorkbooks] = (0, import_react.useState)([]);
	const [wishlist, setWish] = (0, import_react.useState)([]);
	const [orders, setOrders] = (0, import_react.useState)([seedOrder]);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [bagOpen, setBagOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setLang(load("nowa-lang", "ar"));
		setBag(load("nowa-bag", []));
		setWorkbooks(load("nowa-workbooks", []));
		setWish(load("nowa-wish", []));
		setOrders(load("nowa-orders", [seedOrder]));
		setReady(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		localStorage.setItem("nowa-lang", JSON.stringify(lang));
		localStorage.setItem("nowa-bag", JSON.stringify(bag));
		localStorage.setItem("nowa-workbooks", JSON.stringify(workbooks));
		localStorage.setItem("nowa-wish", JSON.stringify(wishlist));
		localStorage.setItem("nowa-orders", JSON.stringify(orders));
	}, [
		ready,
		lang,
		bag,
		workbooks,
		wishlist,
		orders
	]);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang;
		document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
	}, [lang]);
	const owned = (0, import_react.useMemo)(() => new Set(orders.flatMap((o) => o.moduleIds)), [orders]);
	const bagQuote = (0, import_react.useMemo)(() => {
		const groups = courses.map((c) => {
			const ids = bag.filter((id) => c.modules.some((m) => m.id === id));
			return ids.length ? {
				slug: c.slug,
				quote: quoteCourse(c.modules, ids, workbooks.includes(c.slug))
			} : null;
		}).filter(Boolean);
		return {
			groups,
			total: Math.round(groups.reduce((s, g) => s + g.quote.total, 0) * 100) / 100,
			original: Math.round(groups.reduce((s, g) => s + g.quote.original, 0) * 100) / 100
		};
	}, [bag, workbooks]);
	const value = {
		lang,
		setLang,
		t: (k) => dict[lang][k] ?? dict.en[k],
		bag,
		setBag,
		toggleBag: (id) => setBag((b) => b.includes(id) ? b.filter((x) => x !== id) : [...b, id].filter((x) => !owned.has(x) && findModule(x))),
		workbooks,
		toggleWorkbook: (slug) => setWorkbooks((w) => w.includes(slug) ? w.filter((x) => x !== slug) : [...w, slug]),
		wishlist,
		toggleWish: (s) => setWish((w) => w.includes(s) ? w.filter((x) => x !== s) : [...w, s]),
		orders,
		placeOrder: (contactMethod) => {
			if (!bag.length) return null;
			const order = {
				id: `NOWA-DEMO-${Math.floor(1e3 + Math.random() * 9e3)}`,
				date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				moduleIds: bagQuote.groups.flatMap((g) => g.quote.lineIds),
				workbookSlugs: bagQuote.groups.filter((g) => g.quote.workbookPrice > 0).map((g) => g.slug),
				contactMethod,
				total: bagQuote.total,
				demo: true
			};
			setOrders((o) => [order, ...o]);
			setBag([]);
			setWorkbooks([]);
			return order;
		},
		owned,
		bagQuote,
		bagOpen,
		setBagOpen
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreCtx.Provider, {
		value,
		children
	});
}
function useStore() {
	const c = (0, import_react.useContext)(StoreCtx);
	if (!c) throw new Error("useStore outside provider");
	return c;
}
//#endregion
export { useStore as _, courses as a, getChef as c, images as d, interpolate as f, quoteCourse as g, products as h, chefs as i, getCourse as l, paths as m, StoreProvider as n, findModule as o, levels as p, categories as r, fromPrice as s, BUNDLE_DISCOUNT as t, getProduct as u };
