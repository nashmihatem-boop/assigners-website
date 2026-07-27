export type StateArticle = {
  slug: string;
  title: string;
  metaDescription: string;
  body: string[];
  faq: { question: string; answer: string };
};

export type StateArticleSet = {
  industrySlug: string;
  stateAbbr: string;
  b2b: StateArticle[];
  consumer: StateArticle[];
};

export const stateArticles: StateArticleSet[] = [
  {
    industrySlug: "legal",
    stateAbbr: "ca",
    b2b: [
      {
        slug: "buying-personal-injury-leads-in-california",
        title: "Buying Personal Injury Leads in California: A Buyer's Guide",
        metaDescription: "What California personal injury and mass tort firms should know before buying leads, transfers, or calls in a large, competitive market.",
        body: [
          "California is one of the largest, most competitive personal injury and mass tort markets in the country — a large population, dense urban centers, and heavy advertiser competition all drive demand and cost higher than in smaller states.",
          "Firms buying in California typically see the most consistent results by narrowing targeting to specific metro areas or regions rather than the entire state at once, since case value, competition, and consumer behavior can vary meaningfully between a market like Los Angeles and a smaller Central Valley city.",
          "Because of how competitive this market is, response speed and a strong follow-up process matter more here than in lower-competition states — a slow intake process gets punished faster in a market this size.",
        ],
        faq: {
          question: "Is California priced higher than other states?",
          answer: "Generally yes — high population, strong case values, and heavy advertiser competition tend to push California pricing above the national average, though exact cost still depends on case type, exclusivity, and volume.",
        },
      },
      {
        slug: "exclusive-vs-shared-legal-leads-in-california",
        title: "Exclusive vs. Shared Legal Leads in California",
        metaDescription: "How the exclusive vs. shared lead decision plays out specifically for California personal injury and mass tort firms.",
        body: [
          "In a market as large and competitive as California, the exclusive-vs-shared decision has an outsized impact on both cost and conversion. Shared leads in major California metros are often competing against several other firms simultaneously, which raises the bar on response speed even further than in less competitive states.",
          "Exclusive California leads cost more, but for firms with a strong, fast intake process, the higher contact and sign rate they typically produce can offset the added cost — especially for high-value case types where a single additional signed case can materially change the math.",
        ],
        faq: {
          question: "Do shared leads perform worse in California specifically?",
          answer: "Not inherently — but because California has more firms actively competing for the same volume, the speed-to-contact requirement to win a shared lead is generally higher than in less competitive states.",
        },
      },
      {
        slug: "warm-transfers-vs-web-form-leads-california-law-firms",
        title: "Warm Transfers vs. Web Form Leads for California Law Firms",
        metaDescription: "How California law firms should think about choosing between warm transfers and web form leads given the state's case volume and competition.",
        body: [
          "Web form leads are generally the more cost-efficient entry point for California firms with a strong, fast intake team, since the format's lower cost per lead can offset a slightly lower contact rate when follow-up happens quickly.",
          "Warm transfers cost more but remove much of the speed-to-contact pressure that makes California's competitive market challenging, since the consumer is already screened and on the line when your team picks up — often a better fit for firms without a large, dedicated intake staff.",
          "Many California firms use a blend: web form leads to scale volume cost-effectively, warm transfers to backstop conversion during peak periods or for higher-value case types.",
        ],
        faq: {
          question: "Which format is better for mass tort case types in California?",
          answer: "This depends more on the specific mass tort's qualification complexity than the state — highly complex qualification criteria often favor warm transfers regardless of state, since a live screening conversation can capture nuance a form can't.",
        },
      },
      {
        slug: "how-to-vet-a-legal-lead-vendor-serving-california",
        title: "How to Vet a Legal Lead Vendor Serving California",
        metaDescription: "What to specifically confirm when vetting a lead vendor for California personal injury or mass tort campaigns.",
        body: [
          "Beyond the general vendor vetting criteria (sourcing transparency, consent documentation, exclusivity terms in writing), California firms should specifically confirm a vendor's familiarity with California-specific consumer privacy requirements under the CCPA, since California residents have specific rights around how their data is collected and used.",
          "Ask directly how a vendor handles California consumer opt-out and deletion requests, and whether their consent language at the point of capture reflects California-specific disclosure requirements — not just generic nationwide TCPA language.",
        ],
        faq: {
          question: "Does CCPA compliance differ meaningfully from general TCPA compliance?",
          answer: "Yes — TCPA governs consent for calls and texts broadly, while CCPA specifically governs how California residents' personal information is collected, used, and disclosed, including rights to opt out of certain data sales/sharing. A vendor serving California should be able to speak to both.",
        },
      },
      {
        slug: "scaling-case-intake-california-law-firm-lead-volume",
        title: "Scaling Case Intake: A California Law Firm's Guide to Lead Volume",
        metaDescription: "How California law firms can scale lead and case volume responsibly without overwhelming intake or sacrificing quality.",
        body: [
          "Scaling too quickly in a market as large as California is a common way firms end up with an intake bottleneck — volume that outpaces the team's ability to contact and qualify it fast enough to convert well.",
          "A more reliable approach is scaling in stages: start with a volume your intake team can comfortably work at a strong contact rate, confirm quality holds, then increase in increments — rather than committing to a large volume commitment on day one across a market this size.",
        ],
        faq: {
          question: "What's a reasonable way to test a new California campaign before scaling?",
          answer: "Starting with a smaller test volume — often over a few weeks — gives a realistic read on contact rate and lead quality before committing to a larger, ongoing spend across the state.",
        },
      },
      {
        slug: "regional-lead-demand-across-california",
        title: "Regional Lead Demand Across California: What Firms Should Know",
        metaDescription: "How lead demand, competition, and case value can vary between California's major metro areas and firms.",
        body: [
          "California isn't a single market — demand, competition, and typical case value can differ meaningfully between major metro areas like Los Angeles, the San Francisco Bay Area, San Diego, and Sacramento, versus less densely populated regions of the state.",
          "Firms with the flexibility to serve multiple regions often get more consistent volume by not over-concentrating targeting in the single most competitive metro area, since less saturated regions can sometimes offer a better cost-to-quality ratio.",
        ],
        faq: {
          question: "Should a firm target all of California or a specific region?",
          answer: "This depends on the firm's capacity — a firm with a large intake team may benefit from statewide targeting for volume, while a smaller firm may get better cost efficiency and contact rates focusing on one or two regions it can serve well.",
        },
      },
    ],
    consumer: [
      {
        slug: "how-to-choose-a-personal-injury-attorney-in-california",
        title: "How to Choose a Personal Injury Attorney in California",
        metaDescription: "What to look for when choosing a personal injury attorney in California, from experience to fee structure.",
        body: [
          "California has a large number of personal injury attorneys, which makes choosing the right one for your specific situation worth some real research rather than picking the first ad you see.",
          "Look for an attorney with specific experience in your type of case (car accidents, workplace injuries, product liability, and so on are all handled differently), and don't hesitate to ask directly about their experience with cases similar to yours during an initial consultation.",
          "Most California personal injury attorneys work on contingency, meaning you don't pay unless they recover a settlement or award for you — but the exact percentage and how case costs are handled can vary, so get this in writing before signing anything.",
        ],
        faq: {
          question: "Do I have to pay anything upfront for a California personal injury attorney?",
          answer: "Most personal injury attorneys in California work on a contingency basis, meaning no upfront attorney fee — but ask specifically about case costs, since those are sometimes handled separately from the contingency fee.",
        },
      },
      {
        slug: "what-to-do-after-a-car-accident-in-california",
        title: "What to Do After a Car Accident in California",
        metaDescription: "General steps to take after a car accident in California to protect your health, safety, and any potential claim.",
        body: [
          "If you're in a car accident in California, your safety comes first — move to a safe location if possible, and call 911 if anyone is injured or if the accident involves significant vehicle damage.",
          "Once safety is addressed, document what you can: photos of the vehicles, the scene, and any visible injuries; contact information for the other driver and any witnesses; and the responding officer's report number if police respond.",
          "See a doctor promptly even if you feel okay — some injuries aren't immediately obvious, and a documented medical evaluation close to the time of the accident is generally important if you later pursue a claim. This is general safety information, not legal advice — an attorney can advise on your specific situation.",
        ],
        faq: {
          question: "How soon should I see a doctor after a car accident?",
          answer: "As soon as reasonably possible — some injuries take time to show symptoms, and prompt medical documentation is generally valuable both for your health and for any potential claim.",
        },
      },
      {
        slug: "understanding-contingency-fees-california-claimants",
        title: "Understanding Contingency Fees: What California Claimants Should Know",
        metaDescription: "A plain-language explanation of how contingency fee arrangements work for California personal injury claimants.",
        body: [
          "A contingency fee means your attorney is paid a percentage of your settlement or award, and only if you actually recover something — if there's no recovery, you typically don't owe an attorney fee.",
          "Contingency fee percentages are often negotiable and can vary by firm and case type, so it's reasonable to ask directly what percentage applies and whether it changes depending on whether the case settles or goes to trial.",
          "Ask specifically how case costs (things like expert witness fees, filing fees, or medical record requests) are handled — some firms deduct these before calculating the contingency fee, others after, and the difference can meaningfully affect what you actually take home.",
        ],
        faq: {
          question: "Is the contingency fee percentage the same at every firm?",
          answer: "No — percentages can vary between firms and sometimes by case type, so it's worth asking directly and getting the exact terms in writing before signing an agreement.",
        },
      },
      {
        slug: "do-you-need-a-lawyer-for-a-car-accident-in-california",
        title: "Do You Need a Lawyer for a Car Accident in California?",
        metaDescription: "How to think about whether a car accident claim in California is worth handling yourself or with an attorney.",
        body: [
          "For a very minor accident with clear fault, no injuries, and only minor property damage, some people handle the claim directly with the insurance company themselves.",
          "Once injuries are involved, fault is disputed, or the insurance company is pushing back on the claim, an attorney's experience negotiating with insurers often becomes worth the contingency fee — insurance adjusters negotiate claims professionally and full-time, which puts an unrepresented claimant at a real disadvantage on anything beyond a straightforward case.",
        ],
        faq: {
          question: "Does hiring a lawyer always mean a lawsuit?",
          answer: "No — most personal injury claims settle without ever going to trial. An attorney can still negotiate directly with the insurance company on your behalf without filing a lawsuit.",
        },
      },
      {
        slug: "how-long-do-personal-injury-cases-take-in-california",
        title: "How Long Do Personal Injury Cases Take in California?",
        metaDescription: "What generally affects how long a personal injury case takes to resolve in California.",
        body: [
          "Timelines vary a lot by case — a straightforward claim with clear liability and completed medical treatment can sometimes resolve in a few months, while a more complex or disputed case, or one that goes to trial, can take considerably longer.",
          "Factors that tend to extend timelines include disputed liability, ongoing medical treatment (most attorneys wait until treatment is complete or a clear long-term prognosis exists before settling), and court backlogs in a given jurisdiction. An attorney handling your specific case can give a more realistic estimate once they understand the details.",
        ],
        faq: {
          question: "Why do attorneys often wait to settle until medical treatment is finished?",
          answer: "Settling before treatment is complete risks accepting an amount that doesn't account for the full cost and impact of the injury — most attorneys prefer to have a clear medical picture before valuing a claim.",
        },
      },
      {
        slug: "workers-compensation-claims-in-california-getting-started",
        title: "Workers' Compensation Claims in California: Getting Started",
        metaDescription: "General first steps for a workplace injury in California and when it may help to speak with an attorney.",
        body: [
          "If you're injured at work in California, report the injury to your employer as soon as possible — most workers' compensation systems have reporting requirements, and prompt reporting helps establish a clear record.",
          "Workers' compensation generally covers medical treatment and a portion of lost wages regardless of fault, but claims can be denied or disputed for various reasons. If your claim is denied, benefits seem inadequate for your injury, or your employer discourages you from filing, it's often worth a consultation with a workers' compensation attorney, since many offer free initial consultations.",
        ],
        faq: {
          question: "Do I need a lawyer to file a workers' comp claim in California?",
          answer: "Not necessarily for a straightforward, undisputed claim — but if your claim is denied, disputed, or you're not getting the benefits you believe you're owed, an attorney experienced in workers' compensation can help navigate the process.",
        },
      },
    ],
  },
];

export function getStateArticles(industrySlug: string, stateAbbr: string) {
  return stateArticles.find((s) => s.industrySlug === industrySlug && s.stateAbbr === stateAbbr.toLowerCase());
}
