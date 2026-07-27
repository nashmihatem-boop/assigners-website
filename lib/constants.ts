export const siteConfig = {
  name: "Assigners",
  ownerLine: "Powered by Quality Score LLC",
  legalEntity: "Quality Score LLC",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.assigners.com",
  tagline: "We Assign the Right Lead to the Right Business",
  description:
    "Assigners assigns exclusive web form leads, warm transfers, and inbound calls to businesses ready to close them — sourced from owned-and-operated properties and vetted top-tier publishers, matched and delivered in real time.",
  businessPhone: "(302) 407-0876",
  businessPhoneHref: "+13024070876",
  businessAddressLines: ["2810 N Church St STE 88855", "Wilmington, DE 19802"],
  infoEmail: "info@assigners.com",
  officeHours: "Monday–Friday, 8:00 AM–6:00 PM EST",
  stateOfFormation: "Delaware",
  governingLaw: "the State of Delaware",
  legalLastUpdated: "January 16, 2026",
};

export type NavChild = { label: string; href: string; description: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const primaryNav: NavItem[] = [
  {
    label: "Solutions",
    href: "/#products",
    children: [
      {
        label: "Warm Transfers",
        href: "/warm-transfers",
        description: "Live, pre-qualified phone transfers to your sales team.",
      },
      {
        label: "Inbound Calls",
        href: "/inbound-calls",
        description: "Paid-search generated calls, delivered the moment they connect.",
      },
      {
        label: "Web Form Leads",
        href: "/webform-leads",
        description: "O&O and top-tier publisher leads, delivered in real time.",
      },
      {
        label: "Revenue Share",
        href: "/revenue-share",
        description: "Turn your unsold leads into revenue — 40% share on every sold warm transfer.",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Coverage", href: "/coverage" },
  { label: "Learning Center", href: "/learning-center" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  products: [
    { label: "Warm Transfers", href: "/warm-transfers" },
    { label: "Inbound Calls", href: "/inbound-calls" },
    { label: "Web Form Leads", href: "/webform-leads" },
    { label: "Revenue Share", href: "/revenue-share" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Industries", href: "/industries" },
    { label: "Coverage", href: "/coverage" },
    { label: "Learning Center", href: "/learning-center" },
    { label: "Tactical Wisdom", href: "/tactical-wisdom" },
    { label: "Lead Sources & Compliance", href: "/compliance" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "TCPA Compliance", href: "/tcpa" },
    { label: "ABA Disclaimer", href: "/aba-disclaimer" },
    { label: "CCPA", href: "/ccpa" },
    { label: "Do Not Call Policy", href: "/dnc" },
    { label: "Do Not Sell My Info", href: "/do-not-sell-my-info" },
    { label: "Lead Credit Policy", href: "/lead-credit-policy" },
  ],
};

export const legalPages = footerNav.legal;

export type MarketingPartner = {
  name: string;
  src: string;
  width: number;
  height: number;
};

// Logo files below must be the official current badge assets from each
// program's own partner badge portal — see /public/partners/README.md.
export const marketingPartners: MarketingPartner[] = [
  { name: "Google Premier Partner", src: "/partners/google-partner-premier.svg", width: 110, height: 40 },
  { name: "Microsoft Advertising Accredited Professional", src: "/partners/microsoft-advertising-accredited.svg", width: 150, height: 40 },
  { name: "Taboola Partner", src: "/partners/taboola.svg", width: 110, height: 40 },
  { name: "Outbrain Marketing Partner", src: "/partners/outbrain-partner.svg", width: 150, height: 40 },
  { name: "Meta Business Partners", src: "/partners/meta-business-partners.svg", width: 170, height: 40 },
];

export type Industry = {
  index: string;
  name: string;
  slug: string;
  description: string;
  keywords: string[];
};

export const industries: Industry[] = [
  {
    index: "01",
    name: "Legal",
    slug: "legal",
    description: "Mass tort, personal injury, and consumer legal intake across high-value case types.",
    keywords: ["car accident lawyer near me", "personal injury attorney", "workers comp claim help"],
  },
  {
    index: "02",
    name: "Financial Services",
    slug: "financial-services",
    description: "Debt relief, tax resolution, and financial planning consumers actively seeking a qualified advisor.",
    keywords: ["debt relief programs", "tax relief help", "financial advisor near me"],
  },
  {
    index: "03",
    name: "Insurance",
    slug: "insurance",
    description: "Auto, home, health, and life insurance shoppers ready to compare quotes and switch carriers.",
    keywords: ["cheap car insurance quotes", "home insurance quotes", "life insurance rates"],
  },
  {
    index: "04",
    name: "Home Services",
    slug: "home-services",
    description: "Roofing, solar, HVAC, and remodeling homeowners ready to talk to a contractor.",
    keywords: ["roof replacement cost", "solar panel installers near me", "emergency hvac repair"],
  },
  {
    index: "05",
    name: "Real Estate",
    slug: "real-estate",
    description: "Home buyers, sellers, and investors ready to connect with an agent or lender.",
    keywords: ["realtors near me", "sell my house fast", "mortgage pre-approval"],
  },
  {
    index: "06",
    name: "Education",
    slug: "education",
    description: "Degree-seekers and career changers researching accredited schools and training programs.",
    keywords: ["online degree programs", "vocational training near me", "MBA programs"],
  },
];

export const trustStats = [
  { value: "60%", label: "Conversion Rate", note: "Avg. across active campaigns" },
  { value: "63%", label: "Contact Rate", note: "Avg. across active campaigns" },
  { value: "90%", label: "CPA Improvement", note: "Avg. across active campaigns" },
  { value: "100%", label: "Owned or Vetted Sources", note: "" },
];

export const whyUs = [
  {
    title: "Built on real intent",
    description:
      "Every lead and call starts with a consumer actively searching for your offer — not a recycled list or a co-registration checkbox.",
  },
  {
    title: "Optimized in real time",
    description:
      "Campaigns are monitored and adjusted continuously against delivery quality, so your pipeline improves the longer we work together.",
  },
  {
    title: "First-party, source-transparent",
    description:
      "We control the pipeline from ad click to delivery across our own properties and a small set of vetted publishers — you always know where volume comes from.",
  },
];

export const howItWorks = [
  {
    step: "01",
    title: "Paid Search",
    description: "We run direct paid-search campaigns targeting consumers with active, high-intent search terms in your vertical.",
  },
  {
    step: "02",
    title: "Owned Properties & Top-Tier Publishers",
    description: "Demand is captured on our own landing pages or sourced from a vetted set of top-tier publishing partners — never aggregators.",
  },
  {
    step: "03",
    title: "Real-Time Delivery",
    description: "Qualified calls, transfers, and leads route to your team instantly via API, CRM push, ping-post, or live call transfer.",
  },
];
