export type DeliveryMethod = { method: string; description: string };
export type SlaMetric = { label: string; value: string };

export type Product = {
  slug: "warm-transfers" | "inbound-calls" | "webform-leads";
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitlePlain: string;
  heroTitleAccent: string;
  heroSubhead: string;
  sourcingIntro: string;
  sourcing: string[];
  qualification: string[];
  delivery: DeliveryMethod[];
  sla: SlaMetric[];
};

export const products: Product[] = [
  {
    slug: "warm-transfers",
    name: "Warm Transfers",
    shortName: "warm transfers",
    metaTitle: "Warm Transfers for B2B Buyers",
    metaDescription:
      "Live, pre-qualified phone transfers connected directly to your sales team — sourced from owned-and-operated campaigns and vetted publishers.",
    heroEyebrow: "Solution — Warm Transfers",
    heroTitlePlain: "Live conversations, ",
    heroTitleAccent: "already qualified.",
    heroSubhead:
      "Consumers are engaged, screened against your criteria, and connected to your sales team while they're still on the line.",
    sourcingIntro:
      "Warm transfer volume is generated exclusively through our owned-and-operated (O&O) landing pages and a small set of vetted top-tier publishers — never aggregators or resold lists.",
    sourcing: [
      "Consumer engages with an O&O campaign or a vetted publisher property",
      "An agent or IVR flow walks the consumer through your qualification script",
      "Consumer is verified against your campaign-specific criteria in real time",
      "The live call is transferred directly to your sales line while the consumer is still engaged",
    ],
    qualification: [
      "Geographic eligibility (state, zip, or radius-based)",
      "Product or service interest confirmation",
      "Budget, timeline, or eligibility screening questions you define",
      "Do-not-call and consent verification prior to transfer",
      "Custom disposition rules for buyer-specific edge cases",
    ],
    delivery: [
      { method: "Live Call Transfer", description: "Warm-handed to your sales line via SIP or PSTN, with whisper messages available." },
      { method: "Scheduled Delivery Windows", description: "Transfers routed only during your team's staffed hours." },
      { method: "CRM Push (Post-Call)", description: "Call disposition and consumer data pushed to your CRM immediately after transfer." },
    ],
    sla: [
      { label: "Avg. Qualification Time", value: "< 90 sec" },
      { label: "Transfer Connect Rate", value: "Illustrative Example" },
      { label: "Campaign Ramp Time", value: "3–5 business days" },
    ],
  },
  {
    slug: "inbound-calls",
    name: "Inbound Calls",
    shortName: "inbound calls",
    metaTitle: "Inbound Calls from Paid Search",
    metaDescription:
      "Inbound calls generated from our own paid-search campaigns and delivered in real time the moment they connect.",
    heroEyebrow: "Solution — Inbound Calls",
    heroTitlePlain: "The highest-intent ad channel ",
    heroTitleAccent: "there is.",
    heroSubhead:
      "Calls generated directly from our own paid-search campaigns and routed to your team the instant they connect — no queue, no delay.",
    sourcingIntro:
      "Inbound call volume is generated directly from paid-search campaigns we manage and buy against high-intent keyword sets in your vertical.",
    sourcing: [
      "We bid on high-intent search terms directly relevant to your offer",
      "Consumer calls a tracked number from a search ad or O&O landing page",
      "Call is routed and, where applicable, screened by IVR before connecting",
      "Eligible calls are delivered live to your team in real time",
    ],
    qualification: [
      "Caller ID and duplicate suppression",
      "Minimum call duration thresholds you define",
      "Geographic and language targeting",
      "Time-of-day and day-of-week routing rules",
      "IVR-based interest and eligibility screening where configured",
    ],
    delivery: [
      { method: "Live Call Routing", description: "Calls ring directly to your team or call center in real time." },
      { method: "Ping-Post Call Routing", description: "Calls offered to your endpoint first, with fallback routing rules you control." },
      { method: "Call Tracking & Recording", description: "Full call detail records and recordings (where disclosed) available for QA." },
    ],
    sla: [
      { label: "Time to Connect", value: "Real-Time" },
      { label: "Min. Call Duration Filter", value: "Configurable" },
      { label: "Avg. Answer Rate", value: "Illustrative Example" },
    ],
  },
  {
    slug: "webform-leads",
    name: "Web Form Leads",
    shortName: "web form leads",
    metaTitle: "Real-Time Web Form Leads",
    metaDescription:
      "Web form leads captured on our owned-and-operated landing pages and syndicated from top-tier publishers, delivered in real time.",
    heroEyebrow: "Solution — Web Form Leads",
    heroTitlePlain: "First-party leads, ",
    heroTitleAccent: "delivered the moment they convert.",
    heroSubhead:
      "Consumer inquiries captured on our owned-and-operated landing pages and syndicated from a vetted set of top-tier publishers — validated and delivered in real time.",
    sourcingIntro:
      "Web form leads originate on our own O&O landing pages, plus a limited set of top-tier publishers we've reviewed for source transparency and traffic quality.",
    sourcing: [
      "Consumer discovers a targeted campaign on an O&O page or vetted publisher site",
      "Consumer submits contact and interest information through the form",
      "Submission is validated (contact format, duplicate checks, basic fraud filters)",
      "Eligible lead is matched against your campaign criteria and delivered instantly",
    ],
    qualification: [
      "Contact information format and validity checks",
      "Duplicate and recency suppression against your account",
      "Geographic and demographic targeting filters",
      "Custom qualifying questions you configure per campaign",
      "TCPA consent language displayed at the point of capture — see our TCPA Compliance page for how consent is documented",
    ],
    delivery: [
      { method: "Real-Time API Post", description: "Leads posted to your endpoint in JSON within seconds of capture." },
      { method: "CRM Push", description: "Direct integration with major CRM and lead management platforms." },
      { method: "Ping-Post", description: "Leads offered for bid/accept before final delivery, where configured." },
    ],
    sla: [
      { label: "Delivery Speed", value: "< 60 sec" },
      { label: "Exclusivity", value: "Per Campaign — 90 Days" },
      { label: "Lead Replacement Window", value: "By the 10th of Each Month" },
    ],
  },
];

export function getProduct(slug: Product["slug"]) {
  return products.find((p) => p.slug === slug)!;
}
