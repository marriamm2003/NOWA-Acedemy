import type { Chef, Course, Module, Path, Product } from "./data";
import type { Lang } from "./i18n";

const categoryAr: Record<string, string> = {
  Pizza: "بيتزا",
  Desserts: "حلويات",
  Baking: "خبز ومخبوزات",
  "Plant-Based Cooking": "طبخ نباتي",
  "Healthy Cooking": "طبخ صحي",
  Sauces: "الصلصات",
  "Professional Techniques": "تقنيات احترافية",
  "Food Presentation": "تقديم الطعام",
  "Food Business": "مشروعات الطعام",
};

const levelAr: Record<string, string> = { Beginner: "مبتدئ", Intermediate: "متوسط", Advanced: "متقدم" };

type CourseTranslation = Partial<Omit<Course, "modules">> & { modules?: Partial<Module>[] };
const courseAr: Record<string, CourseTranslation> = {
  "pizza-masterclass": {
    title: "إتقان البيتزا النابولية",
    tagline: "من الدقيق والماء إلى قاعدة هوائية متفحمة الأطراف — مستوى بعد مستوى.",
    outcomes: ["بناء العجين بالإحساس والوصفة", "إتقان طرق التخمير المباشر وغير المباشر", "الخبز في أفران المنزل والمطاعم", "تقديم وتصوير بيتزا تفتح الشهية"],
    equipment: ["صاج أو حجر بيتزا", "ميزان رقمي دقيق", "لوح إدخال البيتزا", "دقيق 00 وخميرة طازجة وملح بحري"],
    modules: [
      { title: "المستوى 01 — أساسيات العجين" },
      { title: "المستوى 02 — طرق العجين المباشر وغير المباشر" },
      { title: "المستوى 03 — تقنيات الخَبز الاحترافية" },
      { title: "دورة قصيرة — ست صلصات بيتزا مميزة" },
      { title: "إتقان الجبن" },
      { title: "تقديم البيتزا وتنسيق الطبق" },
      { title: "الحرارة والتوقيت وطرق الطهي" },
    ],
  },
  "patisserie-layers": {
    title: "الحلويات العصرية: الكيكات متعددة الطبقات",
    tagline: "كيكات إسفنجية وغاناش وتغطيات مصممة للحصول على شريحة مثالية.",
    outcomes: ["خبز كيكات إسفنجية متساوية وطرية", "ت temper الشوكولاتة وصب التغطيات اللامعة", "تجميع طبقات نظيفة وثابتة", "حساب تكلفة الكيك للبيع"],
    equipment: ["قوالب كيك حلقية", "ملعقة فرد", "ميزان حرارة", "شوكولاتة كوفيرتور"],
    modules: [
      { title: "المستوى 01 — الكيكات الإسفنجية والقواعد" },
      { title: "المستوى 02 — الكريمة والغاناش والحشوات" },
      { title: "المستوى 03 — التغطيات واللمسات النهائية" },
      { title: "دورة قصيرة — براليني الفستق" },
      { title: "تسعير الكيك لخباز المنزل" },
    ],
  },
  "plant-based-bowls": {
    title: "أطباق نباتية متكاملة",
    tagline: "طبخ خضروات غني ومتوازن لا يشعرك أنك تتنازل عن شيء.",
    outcomes: ["تحميص الخضروات لأقصى نكهة", "بناء قواعد غنية بالبروتين من الحبوب", "تحضير 8 تتبيلات من مكونات المطبخ", "تخطيط أسبوع من الوجبات المتوازنة"],
    equipment: ["صواني خبز", "سكين شيف", "خلاط", "حمص وطحينة وحبوب"],
    modules: [
      { title: "المستوى 01 — التحميص والقوام" },
      { title: "المستوى 02 — الحبوب والبقوليات والبروتين" },
      { title: "دورة قصيرة — ثماني تتبيلات من المطبخ" },
      { title: "تخطيط الوجبات الأسبوعية" },
    ],
  },
  "sauce-foundations": {
    title: "الصلصات الأساسية وما بعدها",
    tagline: "الصلصات الخمس الكلاسيكية، وكل ما يمكنك بناؤه انطلاقاً منها.",
    outcomes: ["تحضير الصلصات المعتمدة على الرو", "استحلاب الصلصات دون أن تنفصل", "التتبيل والاختزال باحتراف"],
    equipment: ["قدر ثقيل", "مضرب يدوي", "مصفاة دقيقة"],
    modules: [
      { title: "المستوى 01 — الرو وصلصة الفيلوتيه" },
      { title: "المستوى 02 — المستحلبات" },
      { title: "دورة قصيرة — صلصات المقلاة في 10 دقائق" },
    ],
  },
  "food-business-launch": {
    title: "أطلق منتجك الغذائي",
    tagline: "حساب التكلفة وبناء العلامة وخطة إطلاق للوصفة التي يطلبها الجميع.",
    outcomes: ["حساب تكلفة الوصفة وتحديد هامش الربح", "تصميم عبوة تبيع", "تخطيط أول 90 يوماً من المبيعات"],
    equipment: ["جدول بيانات", "كاميرا الهاتف", "وصفة مميزة من ابتكارك"],
    modules: [
      { title: "المستوى 01 — حساب تكلفة الوصفة والتسعير" },
      { title: "المستوى 02 — العلامة التجارية والتغليف" },
      { title: "المستوى 03 — استراتيجية الإطلاق" },
      { title: "دورة قصيرة — تصوير الطعام بالهاتف" },
    ],
  },
  "plating-presentation": {
    title: "تقديم الطعام وتنسيق الطبق",
    tagline: "اللون والارتفاع والمساحة السلبية — اجعل كل طبق يحكي قصة.",
    outcomes: ["تكوين الطبق باستخدام الوزن البصري", "استخدام الصلصات والزينة بوعي", "تصوير الأطباق للسوشيال ميديا"],
    equipment: ["ملاقط", "زجاجات ضغط", "أطباق محايدة"],
    modules: [
      { title: "المستوى 01 — مبادئ التكوين" },
      { title: "المستوى 02 — الصلصات والزينة" },
      { title: "دورة قصيرة — تنسيق الطبق أمام الكاميرا" },
    ],
  },
};

const chefAr: Record<string, Partial<Chef>> = {
  "marco-bellini": { name: "ماركو بيليني", specialty: "البيتزا النابولية والصلصات الكلاسيكية", city: "نابولي ← دبي", bio: "شيف بيتزا من الجيل الثالث يدرّب طهاة البيتزا المحترفين في أنحاء الخليج.", story: "نشأ ماركو وهو يشكّل العجين في مطعم جده. وبعد عقد من إدارة مطابخ الحطب، بدأ التدريس واكتشف أن أكثر ما يحبه هو رؤية طلابه يخرجون أول قاعدة بيتزا مرقطة من فرن المنزل.", achievements: ["شهادة شيف بيتزا نابولي", "أفضل 50 بيتزا في آسيا 2024", "استشاري لـ 14 مطعماً"], signature: ["عجين مخمّر على البارد 72 ساعة", "صلصة طماطم سان مارزانو", "توقيت جبن فيور دي لاتيه"] },
  "layla-haddad": { name: "ليلى حداد", specialty: "الحلويات العصرية وريادة مشروعات الطعام", city: "بيروت ← القاهرة", bio: "شيف حلويات ومؤسسة علامة كيك انتقلت من مطبخ المنزل إلى ثلاثة فروع.", story: "بدأت ليلى بيع كيك الفستق من شقتها. ومن دون تدريب في إدارة الأعمال، تعلمت حساب التكاليف وبناء العلامة بالطريقة الصعبة، والآن تدرّس الحرفة والتجارة معاً.", achievements: ["دبلوم حلويات لو كوردون بلو", "مؤسسة Maison Layla", "ظهور على فتافيت"], signature: ["كيك طبقات ببراليني الفستق", "تغطية لامعة", "ورقة حساب تكلفة الوصفة"] },
  "noor-alami": { name: "نور العمامي", specialty: "الطبخ النباتي والصحي", city: "عمّان", bio: "شيف مدرّبة في التغذية تجعل الخضروات بطلة المائدة للعائلات والمطاعم.", story: "بعد أزمة صحية في عائلتها، أعادت نور بناء الأكلات التي نشأت عليها حول الخضروات والبقوليات. فلسفتها: لا تحذف النكهة أبداً.", achievements: ["دبلوم الشيف النباتي", "مؤلفة كتاب المزة الخضراء", "استشارية قوائم لـ 6 مقاهٍ"], signature: ["قرنبيط مشوي على طريقة الشاورما", "تتبيلة الطحينة لكل شيء", "طبق فريكة متكامل"] },
};

const productAr: Record<string, Partial<Product>> = {
  peel: { name: "لوح بيتزا من الألومنيوم المثقب", category: "ألواح البيتزا وأدوات الخَبز", description: "يتخلص من الدقيق الزائد لإدخال البيتزا بنظافة.", seller: "Kitchen Supply Co." },
  steel: { name: "صاج خبز بسُمك 6 مم", category: "ألواح البيتزا وأدوات الخَبز", description: "نقل حرارة احترافي لفرن المنزل.", seller: "Forge & Hearth" },
  scale: { name: "ميزان دقيق 0.1 جم", category: "معدات المطبخ", description: "قياس دقيق للخميرة والملح في كل مرة.", seller: "MeasureWell" },
  knife: { name: "سكين شيف جيوتو 21 سم", category: "سكاكين الشيف", description: "سكين متوازن من فولاذ الكربون للاستخدام اليومي.", seller: "Hono Knives" },
  board: { name: "لوح جوز أمريكي بحواف كاملة", category: "معدات المطبخ", description: "لطيف على حد السكين وثقيل بما يكفي ليبقى ثابتاً.", seller: "Woodline" },
  spatula: { name: "طقم ملاعق فرد", category: "أدوات الحلويات", description: "ثلاثة أحجام لتغطية الكيك واللمسات النهائية.", seller: "Pâtisserie Pro" },
  thermo: { name: "ميزان حرارة سريع القراءة", category: "أدوات الحلويات", description: "لتمبير الشوكولاتة والشرابات خلال ثانيتين.", seller: "MeasureWell" },
  piping: { name: "طقم أكياس تزيين قابل لإعادة الاستخدام", category: "أدوات الحلويات", description: "أكياس سيليكون مع 12 رأساً من الستانلس ستيل.", seller: "Pâtisserie Pro" },
  whisk: { name: "مضرب بالون 30 سم", category: "معدات المطبخ", description: "أسلاك قوية للاستحلاب والكريمات.", seller: "Kitchen Supply Co." },
  light: { name: "إضاءة طاولة لتصوير الطعام", category: "تصوير الطعام وتنسيقه", description: "لوحة بإضاءة نهارية ناعمة لتصوير الأطباق.", seller: "LumaStudio" },
};

const pathAr: Record<string, { title: string; blurb: string }> = {
  "dish-master": { title: "إتقان الطبق", blurb: "تعلّم التقنيات منفردة وأتقن طبقاً مميزاً." },
  "feel-good": { title: "الطاهي المتوازن", blurb: "استكشف الطبخ المتوازن والصحي والنباتي." },
  "food-founder": { title: "مؤسس مشروع الطعام", blurb: "طوّر منتجاً، احسب تكلفته، ابنِ علامته وخطط لإطلاقه." },
};

const faqAr = [
  { q: "هل يمكنني شراء مستوى واحد فقط؟", a: "نعم. كل مستوى ودورة قصيرة تُباع منفردة. الباقات اختيارية وتضيف التوفير فقط." },
  { q: "إلى متى يظل الوصول متاحاً؟", a: "تبقى المستويات التي اشتريتها في مطبخ NOWA مع وصول دائم، بما في ذلك التحديثات المستقبلية." },
  { q: "هل يوجد تقييم مباشر؟", a: "الدروس المسجلة ذاتية الإيقاع. المستويات التي تحمل علامة مباشر تتضمن جلسة تقييم مجدولة مع الشيف." },
];

export function label(value: string, lang: Lang): string {
  if (lang === "en") return value;
  return categoryAr[value] ?? levelAr[value] ?? value;
}

export function languageLabel(value: string, lang: Lang): string {
  if (lang === "en") return value;
  return { English: "الإنجليزية", Arabic: "العربية", Italian: "الإيطالية", Spanish: "الإسبانية", French: "الفرنسية" }[value] ?? value;
}

export function localizeCourse(course: Course, lang: Lang): Course {
  if (lang === "en") return course;
  const t = courseAr[course.slug] ?? {};
  const modules = t.modules ?? [];
  return { ...course, ...t, category: course.category, level: course.level, faqs: faqAr, modules: course.modules.map((m, i) => ({ ...m, ...(modules[i] ?? {}) })) };
}

export function localizeChef(chef: Chef, lang: Lang): Chef {
  return lang === "en" ? chef : { ...chef, ...(chefAr[chef.slug] ?? {}) };
}

export function localizeProduct(product: Product, lang: Lang): Product {
  return lang === "en" ? product : { ...product, ...(productAr[product.id] ?? {}) };
}

export function localizePath(path: Path, lang: Lang): Path {
  return lang === "en" ? path : { ...path, ...(pathAr[path.id] ?? {}) };
}

export type Review = { n: string; r: number; t: string };
const reviewsByLang: Record<Lang, Review[]> = {
  en: [
    { n: "Rania", r: 5, t: "Buying one level at a time made it so easy to start." },
    { n: "Daniel", r: 5, t: "Clear, warm teaching. The live feedback session was worth it." },
    { n: "Mona", r: 4, t: "Loved it — I'd like even more close-up shots." },
  ],
  ar: [
    { n: "رانية", r: 5, t: "شراء مستوى واحد في كل مرة جعل البداية سهلة جداً." },
    { n: "دانيال", r: 5, t: "شرح واضح ودافئ. جلسة التقييم المباشر كانت تستحق كل قرش." },
    { n: "منى", r: 4, t: "أحببته — أتمنى لقطات أقرب أكثر." },
  ],
};
export function getReviews(lang: Lang): Review[] {
  return reviewsByLang[lang];
}

export type Testimonial = { q: string; n: string };
const testimonialsByLang: Record<Lang, Testimonial[]> = {
  en: [
    { q: "I bought just the dough level first. Two weeks later I had the whole masterclass — and my family won't order pizza anymore.", n: "Omar K., Riyadh" },
    { q: "Layla's costing module paid for itself with my first cake order.", n: "Sara M., Cairo" },
    { q: "Finally plant-based food that tastes like my grandmother's cooking.", n: "Hana A., Amman" },
  ],
  ar: [
    { q: "اشتريت مستوى العجين أولاً. وبعد أسبوعين أكملت الكورس كله — وعائلتي لم تعد تطلب البيتزا.", n: "عمر ك.، الرياض" },
    { q: "دورة حساب التكاليف مع ليلى دفعت ثمنها من أول طلب كيك.", n: "سارة م.، القاهرة" },
    { q: "أخيراً أكل نباتي بطعم أكلات جدتي.", n: "هناء أ.، عمّان" },
  ],
};
export function getTestimonials(lang: Lang): Testimonial[] {
  return testimonialsByLang[lang];
}
