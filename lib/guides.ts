export type GuideSection = { heading: string; body: string[] };
export type GuideFaqItem = { question: string; answer: string };

export type Guide = {
  slug: string;
  title: string;
  metaDescription: string;
  intro: string;
  sections: GuideSection[];
  faq: GuideFaqItem[];
  industry?: string;
};

export const guides: Guide[] = [
  {
    slug: "what-are-web-form-leads-warm-transfers-and-inbound-calls",
    title: "What Are Web Form Leads, Warm Transfers & Inbound Calls?",
    metaDescription:
      "A plain-language guide to the three most common ways buyers acquire consumer demand: web form leads, warm transfers, and inbound calls.",
    intro:
      "Most performance marketing programs deliver consumer demand through one of three formats. Each has a different capture method, a different level of pre-qualification, and a different fit depending on how your sales team is set up.",
    sections: [
      {
        heading: "Web Form Leads",
        body: [
          "A web form lead is created when a consumer fills out a form — typically on a landing page or publisher site — providing contact details and some indication of what they're looking for. The submission is validated (format checks, duplicate detection, basic fraud filtering) and then delivered to a buyer, usually via API, CRM push, or a ping-post exchange.",
          "Because there's no live conversation involved, web form leads are generally the least expensive of the three formats. The tradeoff is that contact rates depend entirely on how quickly and effectively the buyer follows up after delivery — a lead that sits for hours is far less likely to convert than one worked within minutes.",
        ],
      },
      {
        heading: "Warm Transfers",
        body: [
          "A warm transfer starts the same way a web form lead does — a consumer engages with a campaign — but instead of just capturing their information, an agent or an IVR flow walks them through a qualification script live, on the phone. Once they clear that screening, the live call is transferred directly to the buyer's sales line while the consumer is still on the line.",
          "Because the consumer has already been engaged and screened before the buyer ever picks up, warm transfers typically produce higher contact and conversion rates than web form leads. That higher touch generally comes at a higher price point, and usually requires the buyer's team to be staffed and available to receive live calls during agreed delivery windows.",
        ],
      },
      {
        heading: "Inbound Calls",
        body: [
          "Inbound calls originate from paid-search campaigns rather than a landing-page form. A consumer searches for something, clicks a search ad or an owned-and-operated page, and calls a tracked number directly. That call can be routed live to the buyer's team, sometimes after being screened by an IVR system first.",
          "Inbound calls tend to reflect very high purchase intent, since the consumer is initiating contact rather than just submitting a form. Pricing and availability depend heavily on how competitive and expensive the underlying search terms are in a given vertical.",
        ],
      },
      {
        heading: "Which One Is Right for You?",
        body: [
          "The right format usually comes down to how your team operates. If your team can respond to new leads within minutes and has a strong follow-up process, web form leads can be very cost-effective. If speed-to-contact is a challenge, or you want a live conversation from the outset, warm transfers or inbound calls typically produce a more consistent result — at a higher cost per opportunity.",
          "Many buyers use a mix of all three, weighting the blend toward whichever format performs best against their specific criteria and sales capacity.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I test more than one format before committing?",
        answer:
          "Most buyers start with a smaller test volume across formats to see which converts best for their team before scaling spend into one format.",
      },
      {
        question: "Do all three formats cost the same?",
        answer:
          "No — pricing typically increases with the amount of live qualification involved, so web form leads are usually the least expensive, warm transfers and inbound calls typically cost more per opportunity.",
      },
    ],
  },
  {
    slug: "how-much-do-leads-transfers-and-calls-cost",
    title: "How Much Do Leads, Transfers & Calls Cost?",
    metaDescription:
      "What actually drives the price of web form leads, warm transfers, and inbound calls, and the questions to ask before comparing vendor quotes.",
    intro:
      "There's no single market price for a lead, transfer, or call — cost varies enormously by vertical, format, exclusivity, and qualification criteria. This guide covers what actually moves the number, so you can evaluate quotes on equal footing.",
    sections: [
      {
        heading: "What Drives Price",
        body: [
          "Vertical competitiveness is usually the single biggest factor — verticals with high customer lifetime value and heavy advertiser competition (certain legal case types, insurance, financial services) tend to command higher prices than lower-value or less competitive categories.",
          "Exclusivity matters just as much: a lead sold to one buyer only will typically cost more than the same lead shared across several buyers, since the buyer isn't competing with anyone else to close it. Qualification depth (geographic targeting, specific screening questions, minimum call duration) and delivery speed also factor in — tighter criteria and faster delivery generally cost more to produce.",
          "Volume commitments can move price in either direction. Some vendors offer lower per-unit pricing at higher committed volumes; others hold price steady regardless of volume but adjust delivery pacing instead.",
        ],
      },
      {
        heading: "Pricing Models You'll See in the Market",
        body: [
          "Most vendors price using one of a few common structures: a flat cost-per-lead or cost-per-call, a ping-post/bid model where price fluctuates based on real-time buyer demand, or occasionally a revenue-share arrangement tied to actual outcomes. Each model shifts risk differently between the buyer and the vendor, so it's worth understanding which one you're being quoted before comparing numbers across vendors.",
        ],
      },
      {
        heading: "Questions to Ask Before You Compare Quotes",
        body: [
          "A lower headline price isn't automatically a better deal. Before comparing quotes, it's worth confirming: is this exclusive or shared, and at what ratio if shared? What qualification criteria are actually applied before delivery? What happens if a lead turns out to be invalid — is there a credit or replacement policy, and what's the window to request one? What's the expected volume and delivery pacing?",
          "Two quotes that look identical on price can produce very different results once exclusivity, qualification, and replacement terms are factored in.",
        ],
      },
    ],
    faq: [
      {
        question: "Why won't vendors publish a fixed price list?",
        answer:
          "Because price depends on so many variables — vertical, geography, exclusivity, qualification criteria, and current supply/demand — a single published rate would be misleading for most buyers. Most legitimate vendors price per campaign once they understand your specific requirements.",
      },
      {
        question: "Is the cheapest option usually the best value?",
        answer:
          "Not necessarily. A cheaper, shared, loosely qualified lead can end up costing more per closed deal than a pricier, exclusive, tightly qualified one — what matters is cost relative to your actual contact and conversion rate.",
      },
    ],
  },
  {
    slug: "exclusive-vs-shared-leads",
    title: "Exclusive vs. Shared Leads",
    metaDescription: "The real difference between exclusive and shared leads, the tradeoffs of each, and how to confirm what you're actually buying.",
    intro:
      "\"Exclusive\" and \"shared\" are two of the most consequential words in a lead-buying agreement, and they're not always used consistently across vendors. Here's what each actually means and how to make sure you know which one you're getting.",
    sections: [
      {
        heading: "What \"Exclusive\" Actually Means",
        body: [
          "An exclusive lead, transfer, or call is delivered to one buyer only, for that specific submission. No other business receives the same consumer's information from that vendor for that same request. Exclusivity generally costs more, since the vendor is limiting a single piece of demand to a single sale instead of monetizing it multiple times.",
          "Exclusivity terms should be defined per campaign in writing — how long the exclusivity lasts, and whether it applies to that vendor only or is meant to guarantee the consumer wasn't submitted elsewhere at all (which no single vendor can actually promise, since they can't control what a consumer does outside their own properties).",
        ],
      },
      {
        heading: "What \"Shared\" Actually Means",
        body: [
          "A shared lead is sold to more than one buyer — commonly two to four, though this varies by vendor and vertical. Shared leads cost less per unit, but buyers are now competing on speed and follow-up quality to be the one who actually reaches and converts the consumer first.",
          "Some vendors are transparent about share counts and disclose them upfront; others aren't, which is one of the most important things to clarify before buying.",
        ],
      },
      {
        heading: "Tradeoffs",
        body: [
          "Exclusive leads typically produce higher contact and conversion rates per opportunity but cost more upfront. Shared leads cost less individually but require faster response times and stronger follow-up processes to compete for the same consumer's attention. Neither is universally \"better\" — the right choice depends on your team's speed-to-contact, your margin per closed deal, and how much you value certainty over volume.",
        ],
      },
      {
        heading: "How to Confirm What You're Actually Buying",
        body: [
          "Get exclusivity or share terms in writing before launch, not just in a sales conversation. Ask directly how many buyers receive a shared lead, and whether that number is fixed or can vary. If a vendor markets leads as \"exclusive\" but the pricing looks unusually low for the vertical, it's worth asking exactly what that exclusivity does and doesn't cover.",
        ],
      },
    ],
    faq: [
      {
        question: "Can exclusivity be guaranteed across every possible source a consumer might have used?",
        answer:
          "No single vendor can guarantee a consumer didn't submit their information somewhere else entirely outside that vendor's own properties. What exclusivity terms can reasonably guarantee is that the specific submission captured by that vendor, from that campaign, isn't resold to another buyer.",
      },
      {
        question: "Do shared leads always convert worse than exclusive ones?",
        answer:
          "Not always — a shared lead reached first, with a strong offer and fast follow-up, can still convert well. But all else equal, exclusive leads generally see higher contact and conversion rates since there's no competing buyer racing for the same consumer.",
      },
    ],
  },
  {
    slug: "how-to-vet-a-lead-vendor",
    title: "How to Vet a Lead Vendor",
    metaDescription: "A practical checklist for evaluating a lead generation vendor before you commit budget, covering sourcing, compliance, exclusivity, and replacement policy.",
    intro:
      "Not all lead vendors operate the same way, and the differences aren't always visible from a sales pitch alone. Before committing budget, it's worth working through a short list of questions that reveal how a vendor actually sources, qualifies, and stands behind what they deliver.",
    sections: [
      {
        heading: "Ask Where the Volume Comes From",
        body: [
          "Ask directly whether volume comes from the vendor's own owned-and-operated properties, from vetted publisher partners, or from an aggregator reselling volume they don't control. Vendors who can clearly explain their sourcing — and are willing to put it in writing — are generally a safer bet than ones who are vague about where consumer demand originates.",
        ],
      },
      {
        heading: "Ask About Consent & Compliance",
        body: [
          "Confirm how and where consent is captured at the point of submission, and whether that documentation is retained and available if you ever need to reference it. Ask about their approach to TCPA compliance, do-not-call suppression, and any vertical-specific consent requirements relevant to your industry. A vendor who can't clearly answer these questions is a real compliance risk to your business, not just theirs.",
        ],
      },
      {
        heading: "Ask About Exclusivity Terms",
        body: [
          "Get exclusivity (or share count, if shared) defined in writing before launch — see our guide on exclusive vs. shared leads for what to actually ask. Verbal assurances during a sales call aren't the same as terms documented in your agreement.",
        ],
      },
      {
        heading: "Ask About Replacement & Credit Policy",
        body: [
          "Invalid contact information, duplicate submissions, and out-of-criteria leads happen with every vendor — what matters is whether there's a clear, documented process for requesting a credit or replacement, and a reasonable window to do so. A vendor with no replacement policy at all is a warning sign.",
        ],
      },
      {
        heading: "Red Flags to Watch For",
        body: [
          "Be cautious of vendors who won't disclose sourcing, can't describe their consent-capture process, resist putting exclusivity or replacement terms in writing, or pressure you into large volume commitments before you've tested quality at a smaller scale. A legitimate vendor should be comfortable answering all of the above before you spend a dollar.",
        ],
      },
    ],
    faq: [
      {
        question: "Should I always start with a small test before committing to volume?",
        answer:
          "Testing a smaller volume first is a common and reasonable way to evaluate contact rate, lead quality, and vendor responsiveness before committing to a larger, ongoing spend.",
      },
      {
        question: "What's a reasonable replacement window to expect?",
        answer:
          "This varies by vendor and by what's being replaced (an invalid contact vs. a duplicate vs. an out-of-criteria submission) — the important thing is that a specific window and process exist and are documented, not any particular number of days.",
      },
    ],
  },
  {
    slug: "what-makes-a-strong-legal-lead",
    title: "What Makes a Strong Legal Lead",
    industry: "Legal",
    metaDescription: "What separates a strong personal injury or mass tort lead from a weak one, and the qualification signals that actually predict case value.",
    intro:
      "Not every legal lead is worth the same to a firm. For personal injury, mass tort, and other high-value case types, a handful of specific signals do most of the work in separating a case worth pursuing from one that isn't.",
    sections: [
      {
        heading: "Liability Clarity",
        body: [
          "Cases with clear, well-documented fault — a rear-end collision, a defective product with a known recall — are generally more valuable and easier to evaluate than cases where liability is disputed or unclear. Strong lead qualification asks specifically about how the incident happened, not just that one occurred.",
        ],
      },
      {
        heading: "Treatment Status",
        body: [
          "Whether the claimant has already sought medical treatment, and whether that treatment is ongoing or complete, materially affects both case value and timing. A claimant who hasn't seen a doctor at all is a meaningfully different lead than one with documented treatment and a clear diagnosis.",
        ],
      },
      {
        heading: "Statute of Limitations & Timing",
        body: [
          "How recently the incident occurred matters — cases approaching a statute of limitations deadline need faster attorney review, while very old, unaddressed incidents can raise questions about why the claimant waited. Capturing incident date at the point of intake, not just at delivery, helps firms triage effectively.",
        ],
      },
      {
        heading: "Insurance & Financial Recovery Potential",
        body: [
          "Whether the at-fault party carries insurance, and the applicable policy limits where known, directly affects what's realistically recoverable. Leads that flag insurance status upfront save firms time that would otherwise go to that same discovery work later in intake.",
        ],
      },
    ],
    faq: [
      {
        question: "Does case type alone determine lead value?",
        answer:
          "Case type is a major factor, but liability clarity, treatment status, and timing within it can matter just as much — two leads in the same case type can be worth very different amounts to a firm.",
      },
      {
        question: "Should firms expect every lead to already have an attorney-ready case summary?",
        answer:
          "No — qualification criteria capture key signals at intake, but full case evaluation is still the firm's job. The goal of qualification is to filter out cases clearly not worth pursuing, not to replace attorney review.",
      },
    ],
  },
  {
    slug: "what-to-look-for-in-home-improvement-leads",
    title: "What to Look for in Home Improvement Leads",
    industry: "Home Services",
    metaDescription: "The qualification signals that separate project-ready home services leads from early-stage research, and what to ask before you buy.",
    intro:
      "Home services leads range from someone actively ready to book a contractor to someone who just started browsing project ideas. The gap between those two is the single biggest driver of contact and close rate in this category.",
    sections: [
      {
        heading: "Project Readiness vs. Research Stage",
        body: [
          "A consumer requesting quotes for a project starting within weeks is a fundamentally different lead than one browsing general cost information. Strong qualification captures timeline directly — \"ready to hire,\" \"planning within a few months,\" or \"just researching\" — rather than treating all form fills as equivalent.",
        ],
      },
      {
        heading: "Homeownership Status",
        body: [
          "Most home services work requires the requester to actually own the property (or have authority to approve work on it). Renters occasionally submit inquiries for work that's actually the landlord's responsibility — a simple ownership confirmation at intake filters a meaningful share of unusable leads.",
        ],
      },
      {
        heading: "Project Scope and Budget Signals",
        body: [
          "A kitchen remodel and a faucet repair are both \"home services,\" but represent very different deal sizes and sales processes. Capturing project scope and, where possible, a rough budget range up front helps route leads to the right type of buyer instead of a one-size-fits-all funnel.",
        ],
      },
      {
        heading: "Multiple-Bid Awareness",
        body: [
          "Many home services consumers are, by design, requesting quotes from more than one provider — that's the nature of shared lead models in this category. Buyers should factor expected competition into their follow-up speed and offer strategy rather than assuming exclusivity by default.",
        ],
      },
    ],
    faq: [
      {
        question: "How much does response speed actually matter in home services?",
        answer:
          "Significantly — home services consumers frequently request multiple quotes at once, so the contractor who responds first often has a meaningful advantage regardless of price.",
      },
      {
        question: "Are seasonal categories (like HVAC or roofing) qualified differently?",
        answer:
          "The core qualification signals are similar, but volume and urgency both shift seasonally — an HVAC lead in July or a roofing lead after a storm often reflects more immediate need than the same category off-season.",
      },
    ],
  },
  {
    slug: "warm-transfers-vs-web-form-leads-for-auto-injury-firms",
    title: "Warm Transfers vs. Web Form Leads for Auto Injury Firms",
    industry: "Legal",
    metaDescription: "How warm transfers and web form leads compare for auto injury firms, and which format fits based on how your intake team follows up.",
    intro:
      "Auto injury claimants often start looking for an attorney within days of a crash — sometimes while an insurance adjuster is already calling them. That compressed timeline changes the calculus between web form leads and warm transfers more than it does for most other legal case types.",
    sections: [
      {
        heading: "Why Speed Matters More in Auto Injury",
        body: [
          "Insurance companies frequently reach out to an at-fault claimant within 24 to 48 hours of an accident, sometimes with a quick settlement offer before the claimant has spoken to an attorney. A web form lead that sits in an inbox for even a few hours can mean the difference between a firm reaching a prospect first or reaching them after they've already spoken to the other side.",
          "Warm transfers remove that gap entirely — the claimant is already on the phone, already screened, by the time your intake team picks up. For firms that can't guarantee a fast callback on every submission, that head start is often worth the higher per-transfer cost.",
        ],
      },
      {
        heading: "When Web Form Leads Still Make Sense",
        body: [
          "Firms with a dedicated intake team that can call new submissions within minutes — not hours — can still convert web form leads effectively, at a lower cost per opportunity than warm transfers. The format works best when speed-to-contact is treated as a firm-wide metric, not an afterthought.",
          "Web form leads are also a reasonable way to test a new geography or campaign before committing to warm transfer volume, since the lower unit cost makes it cheaper to learn what's converting.",
        ],
      },
      {
        heading: "What to Ask Before Choosing a Format",
        body: [
          "Before choosing, be honest about your team's actual average callback time — not the target, the real average. If it's over 30 minutes on a typical day, warm transfers likely outperform web form leads enough to justify the price difference. Also confirm how the vendor screens for basic case viability (was there an accident, is there an at-fault party, is the claimant already represented) before a transfer or lead ever reaches you, since that screening quality varies significantly between vendors.",
        ],
      },
    ],
    faq: [
      {
        question: "Can we test both formats at once?",
        answer:
          "Yes — many auto injury firms run web form leads and warm transfers side by side and compare contact rate and cost per signed case before shifting budget toward whichever performs better for their intake process.",
      },
      {
        question: "Do warm transfers guarantee the claimant hasn't spoken to another firm?",
        answer:
          "No — a warm transfer means the call is delivered live and screened, not that the claimant hasn't researched or contacted another attorney separately. Exclusivity terms address resale of the same submission, not a consumer's own independent search behavior.",
      },
    ],
  },
  {
    slug: "what-makes-a-strong-auto-injury-lead",
    title: "What Makes a Strong Auto Injury Lead",
    industry: "Legal",
    metaDescription: "The qualification signals that separate a strong auto injury lead from a weak one, from fault clarity to treatment status.",
    intro:
      "Auto injury cases are one of the most heavily marketed legal case types, which makes qualification quality — not just volume — the difference between a profitable campaign and an expensive one.",
    sections: [
      {
        heading: "Fault and Police Report Status",
        body: [
          "Whether a police report was filed, and what it indicates about fault, is one of the fastest signals of case viability. A rear-end collision with a filed report naming the other driver at fault is a fundamentally stronger lead than a claimant who isn't sure whether a report was even taken.",
          "Strong qualification asks about fault directly at intake rather than assuming it — claimants aren't always clear on liability themselves, but even a rough description of how the accident happened helps a firm triage faster.",
        ],
      },
      {
        heading: "Treatment and Injury Status",
        body: [
          "Whether the claimant has sought medical treatment, and how soon after the accident, affects both case value and how a firm should prioritize follow-up. A claimant who saw a doctor within days of the crash and has an ongoing treatment plan is a stronger lead than one who hasn't sought care at all, since documented treatment is central to proving damages.",
          "Property damage severity, while not a legal factor in injury value, is often a useful proxy signal firms use during initial triage before full case review.",
        ],
      },
      {
        heading: "Insurance and Representation Status",
        body: [
          "Confirming whether the at-fault driver was insured — and whether the claimant has already spoken with an adjuster or accepted any offer — matters enormously. A claimant who's already accepted a settlement or signed a release is generally no longer a viable lead, and firms want to know that before spending time on outreach.",
          "Whether the claimant already has an attorney is a basic but essential filter; leads should confirm this at the point of intake, not leave it for the firm to discover on the first call.",
        ],
      },
    ],
    faq: [
      {
        question: "Should every auto injury lead include a police report number?",
        answer:
          "Not necessarily — some accidents don't involve a formal report, especially minor incidents, but the lead should at minimum indicate whether one exists and what it states about fault where available.",
      },
      {
        question: "Does vehicle damage severity predict case value?",
        answer:
          "It's a rough proxy at best — injury severity and treatment don't always correlate directly with visible vehicle damage, so it should inform triage, not replace medical and liability review.",
      },
    ],
  },
  {
    slug: "web-form-leads-vs-warm-transfers-for-workers-compensation-firms",
    title: "Web Form Leads vs. Warm Transfers for Workers' Compensation Firms",
    industry: "Legal",
    metaDescription: "How web form leads and warm transfers compare for workers' compensation firms, and how claim stage should influence which format you buy.",
    intro:
      "Workers' compensation claimants aren't all at the same stage when they start looking for an attorney — some are exploring their options right after an injury, others are calling because a claim was just denied. That stage matters more than almost any other factor in choosing between web form leads and warm transfers.",
    sections: [
      {
        heading: "Claim Stage Changes the Calculus",
        body: [
          "A claimant early in the process — recently injured, hasn't filed yet — is often still gathering information and may respond well to a web form lead followed by a same-day call. A claimant calling because a claim was denied or a hearing is scheduled is usually further along, more urgent, and often converts better through a warm transfer where they can explain their situation live and get an immediate sense of whether the firm can help.",
          "Vendors who can indicate claim stage at the point of intake make it easier to route each type of lead to the right format and the right follow-up process.",
        ],
      },
      {
        heading: "Why Employer and Carrier Friction Matters",
        body: [
          "Workers' compensation claimants are often dealing with an employer or insurance carrier that's actively disputing part or all of their claim, which can make them more cautious about who they talk to and when. A warm transfer, where a live agent has already explained who's calling and why, tends to build more trust in that first conversation than a cold callback from a web form submission.",
        ],
      },
      {
        heading: "Where Web Form Leads Fit Well",
        body: [
          "For firms running broader awareness campaigns — not tied to a denial or hearing event — web form leads paired with a fast, well-trained intake team can work efficiently and at a lower cost per opportunity. The key is matching response speed to claimant urgency rather than treating every submission the same way regardless of what stage they're actually at.",
        ],
      },
    ],
    faq: [
      {
        question: "Do denied claims convert better than new claims?",
        answer:
          "Denied and appeal-stage claimants often convert faster because their need for representation is more immediate and clear, but new claims can still be valuable — they typically just require a different follow-up approach and timeline.",
      },
      {
        question: "Should third-party claims be treated differently?",
        answer:
          "Yes — a workers' compensation case with a viable third-party liability claim (for example, a defective piece of equipment) can be worth substantially more than the underlying comp claim alone, so it's worth confirming this at intake rather than after signing the case.",
      },
    ],
  },
  {
    slug: "what-makes-a-strong-workers-compensation-lead",
    title: "What Makes a Strong Workers' Compensation Lead",
    industry: "Legal",
    metaDescription: "The qualification signals that separate a strong workers' compensation lead from a weak one, from claim stage to third-party liability.",
    intro:
      "Workers' compensation qualification depends heavily on where a claim stands in the process and whether there's more at stake than the underlying comp benefits alone.",
    sections: [
      {
        heading: "Claim Status",
        body: [
          "Whether the claimant has already filed a claim — and if so, whether it's pending, approved, or denied — is the most important qualification signal. A claimant with a recent denial or an upcoming hearing is typically more urgent and further along than someone who was injured but hasn't filed anything yet.",
        ],
      },
      {
        heading: "Injury Severity and Work Status",
        body: [
          "Injury severity and current work status (out on leave, on light duty, terminated) both affect case value and the type of representation needed. A claimant who's been unable to return to work for an extended period generally represents a more significant case than one with a minor, short-term injury.",
        ],
      },
      {
        heading: "Third-Party Liability Potential",
        body: [
          "Some workplace injuries involve a third party beyond the employer — defective equipment, a subcontractor, a property owner — which can create a separate, often more valuable claim alongside the workers' compensation case. Leads that flag any third-party involvement give firms an early signal worth investigating further.",
        ],
      },
    ],
    faq: [
      {
        question: "Does employer size matter for lead qualification?",
        answer:
          "It can be a useful data point since larger employers are more likely to be self-insured or have dedicated claims processes, but claim status and injury severity are generally more predictive of case value than employer size alone.",
      },
      {
        question: "Should qualification confirm whether the claimant already has an attorney?",
        answer:
          "Yes — as with any legal case type, confirming existing representation status at intake avoids wasted outreach and should be a standard qualification question.",
      },
    ],
  },
  {
    slug: "exclusive-vs-shared-personal-injury-leads",
    title: "Exclusive vs. Shared Personal Injury Leads: What Firms Should Know",
    industry: "Legal",
    metaDescription: "Why exclusivity matters more in personal injury than in most other legal case types, and how to evaluate what you're actually buying.",
    intro:
      "Personal injury is one of the most competitive, highest-value categories in legal marketing, which makes the exclusive-versus-shared decision higher stakes here than in almost any other practice area. See our general guide on exclusive vs. shared leads for the baseline concepts — this covers what changes specifically for personal injury.",
    sections: [
      {
        heading: "Why Shared Leads Are Riskier in Personal Injury",
        body: [
          "Because personal injury cases can be worth a meaningful contingency fee, competing firms are often willing to respond within minutes of a shared lead going out. A firm that isn't set up for near-immediate follow-up can end up paying for leads it rarely wins the chance to actually sign, even at a lower per-lead cost.",
          "The math that makes shared leads work in lower-value categories doesn't always hold up in personal injury, where the gap between winning and losing a case can be tens of thousands of dollars in fees.",
        ],
      },
      {
        heading: "What Exclusivity Should Actually Guarantee",
        body: [
          "An exclusive personal injury lead should mean that specific submission isn't sold to another firm by the vendor — it doesn't mean the claimant hasn't searched elsewhere or contacted another attorney independently. Firms should confirm exclusivity terms in writing, including how long exclusivity lasts and whether it resets if the firm doesn't follow up within an agreed window.",
        ],
      },
      {
        heading: "Matching Exclusivity to Your Intake Capacity",
        body: [
          "A firm with a fast, well-staffed intake process can often make shared leads work at a lower blended cost per signed case. A firm without that infrastructure typically sees better results paying more for exclusivity, since it removes the race-to-respond dynamic entirely. The right answer depends on being honest about your actual intake speed, not your target.",
        ],
      },
    ],
    faq: [
      {
        question: "Is exclusive personal injury always worth the higher price?",
        answer:
          "Not automatically — it depends on your close rate and follow-up speed on shared leads. Firms that already convert shared leads well may not see enough lift from exclusivity to justify the price gap; firms that don't respond quickly usually do.",
      },
      {
        question: "How many firms typically receive a shared personal injury lead?",
        answer:
          "This varies by vendor, commonly two to four, but it should always be disclosed upfront rather than left ambiguous — ask directly before buying.",
      },
    ],
  },
  {
    slug: "web-form-leads-warm-transfers-and-inbound-calls-for-personal-injury",
    title: "Choosing Between Web Form Leads, Warm Transfers, and Inbound Calls for Personal Injury",
    industry: "Legal",
    metaDescription: "How web form leads, warm transfers, and inbound calls each fit into a personal injury intake strategy, and how firms typically blend all three.",
    intro:
      "Most personal injury firms don't rely on a single lead format — they blend web form leads, warm transfers, and inbound calls, weighted differently depending on intake capacity and budget. See our guide on what makes a strong legal lead for the qualification signals that matter across all three formats.",
    sections: [
      {
        heading: "Inbound Calls for High Intent",
        body: [
          "Inbound calls, generated from a claimant actively searching for an injury attorney, tend to reflect the highest purchase intent of the three formats. They also tend to be the most expensive, since the underlying paid search terms in personal injury are among the most competitive in any vertical.",
        ],
      },
      {
        heading: "Warm Transfers for Consistent Volume",
        body: [
          "Warm transfers offer a middle ground — a live, pre-screened conversation at a lower cost than inbound calls, with more consistent volume than waiting for a claimant to search and call directly. This format works well for firms that want predictable intake volume without building out their own paid search program.",
        ],
      },
      {
        heading: "Web Form Leads for Cost-Efficient Scale",
        body: [
          "Web form leads are the least expensive of the three and can scale volume efficiently, provided the firm's intake team can follow up fast enough to compete for claimant attention — especially on shared submissions. Many firms use web form leads to extend reach into geographies or campaigns where inbound call and warm transfer volume alone wouldn't hit target case counts.",
        ],
      },
    ],
    faq: [
      {
        question: "What's a reasonable blend of the three formats?",
        answer:
          "There's no universal ratio — it depends on budget, intake capacity, and target case volume. Many firms start by testing a modest volume of each and shift budget toward whichever produces the best cost per signed case for their specific intake process.",
      },
      {
        question: "Does blending formats complicate reporting?",
        answer:
          "It can, unless format is tracked as a field on every case from intake through signing — without that, it's difficult to know which format is actually driving your best cases.",
      },
    ],
  },
  {
    slug: "web-form-leads-vs-warm-transfers-for-immigration-firms",
    title: "Web Form Leads vs. Warm Transfers for Immigration Firms",
    industry: "Legal",
    metaDescription: "How web form leads and warm transfers compare for immigration firms, and why case type and urgency should drive the format you choose.",
    intro:
      "Immigration cases span a wide range of urgency — a family-based petition and an active detention or asylum matter are both \"immigration,\" but they call for very different intake approaches. That range makes format choice more case-type-dependent here than in most legal categories.",
    sections: [
      {
        heading: "Time-Sensitive Cases Favor Warm Transfers",
        body: [
          "Cases involving detention, an imminent hearing date, or an asylum filing deadline benefit from a live, immediate conversation. A warm transfer gets the individual in front of your intake team while the situation is still being explained, rather than waiting for a callback on a submission that may already feel urgent to the person filling it out.",
        ],
      },
      {
        heading: "Longer-Consideration Cases Fit Web Form Leads",
        body: [
          "Family-based petitions, naturalization, and other non-urgent matters often involve a longer research and decision period. Prospective clients in this category are frequently comparing firms and gathering information before committing, which makes a web form lead — followed by a well-timed, informative callback — a reasonable and cost-effective fit.",
        ],
      },
      {
        heading: "Language and Documentation Considerations",
        body: [
          "Immigration intake often benefits from language-matched follow-up and a clear initial understanding of documentation status. Whichever format you choose, confirming preferred language and a basic case-type category (family, employment, asylum, removal defense) at the point of intake helps your team prepare before the first real conversation rather than during it.",
        ],
      },
    ],
    faq: [
      {
        question: "Should detention-related cases always be routed as warm transfers?",
        answer:
          "Given the time sensitivity typically involved, most firms prioritize live-call formats for detention and imminent-deadline cases specifically, even if they use web form leads for other immigration case types.",
      },
      {
        question: "Do web form leads work for asylum cases?",
        answer:
          "They can, but given how time-sensitive asylum filings often are, many firms prefer warm transfers or inbound calls for this specific case type to avoid delay.",
      },
    ],
  },
  {
    slug: "what-makes-a-strong-immigration-lead",
    title: "What Makes a Strong Immigration Lead",
    industry: "Legal",
    metaDescription: "The qualification signals that separate a strong immigration lead from a weak one, from case type to filing deadlines.",
    intro:
      "Immigration covers a wide range of case types with very different qualification signals — what makes a strong lead for a family petition looks nothing like what makes one strong for an asylum case.",
    sections: [
      {
        heading: "Case Type Classification",
        body: [
          "The single most important qualification signal is an accurate case type: family-based, employment-based, asylum, removal defense, naturalization, or another category. Firms typically specialize in a subset of these, so a lead that's misclassified or vague on case type wastes time on both sides before the firm even knows if it's a fit.",
        ],
      },
      {
        heading: "Current Status and Deadlines",
        body: [
          "Whether the individual is currently in the country, their existing visa or status, and any known upcoming deadlines (a hearing date, a filing window, a status expiration) materially affect urgency and how a firm should prioritize outreach. Capturing this at intake — even in broad terms — helps firms triage time-sensitive cases correctly.",
        ],
      },
      {
        heading: "Prior Applications and Denials",
        body: [
          "Whether this is a first-time filing or a case with a prior denial or rejected application changes both complexity and the type of attorney review needed. A lead that flags an existing denial is often more time-sensitive and may need faster, more specialized attention than a first-time filer.",
        ],
      },
    ],
    faq: [
      {
        question: "Does representation status matter in immigration leads?",
        answer:
          "Yes — confirming whether the individual is already working with an attorney (or previously was) helps avoid wasted outreach and can also signal case complexity if they're seeking a second opinion or a change in counsel.",
      },
      {
        question: "Should qualification ask about specific visa categories?",
        answer:
          "Where possible, yes — even a general category (family, employment, humanitarian) helps route the lead to a firm or team with the right specialization, rather than treating all immigration cases as interchangeable.",
      },
    ],
  },
  {
    slug: "web-form-leads-vs-warm-transfers-for-ssd-firms",
    title: "Web Form Leads vs. Warm Transfers for Social Security Disability Firms",
    industry: "Legal",
    metaDescription: "How web form leads and warm transfers compare for Social Security Disability firms, and how application stage should guide which format to buy.",
    intro:
      "Social Security Disability claimants can be reaching out at almost any point in a process that often takes months or years — from a first-time application to a hearing before an administrative law judge. Where someone is in that process is one of the clearest signals for choosing between web form leads and warm transfers.",
    sections: [
      {
        heading: "Appeal and Hearing-Stage Claimants",
        body: [
          "Claimants who've already been denied once — especially those approaching a reconsideration or hearing deadline — tend to be more urgent, more informed about the process, and often convert well through a warm transfer where they can explain their claim history live. These claimants have generally already done research and are further along in deciding to seek representation.",
        ],
      },
      {
        heading: "First-Time Applicants",
        body: [
          "Claimants exploring whether to apply for the first time are often earlier in their decision process and may benefit from a web form lead followed by an informative callback, rather than an immediate live transfer. This stage tends to involve more education about the process itself, which doesn't always require the urgency of a live call.",
        ],
      },
      {
        heading: "Why Claim Stage Should Be Captured at Intake",
        body: [
          "Whichever format you choose, confirming whether the claimant has applied yet, and if so, what stage the claim is in (initial application, reconsideration, hearing scheduled), helps your intake team prepare the right conversation from the first call rather than discovering claim stage partway through.",
        ],
      },
    ],
    faq: [
      {
        question: "Do denied claims convert at a higher rate than first-time applications?",
        answer:
          "Often yes, since claimants at the appeal or hearing stage tend to have a clearer, more urgent need for representation, but first-time applicants can still convert well with the right follow-up and education-focused approach.",
      },
      {
        question: "Should age or work history be part of qualification?",
        answer:
          "These can be relevant since they factor into SSD eligibility determinations, but they're typically secondary to claim stage and medical documentation status when it comes to lead qualification.",
      },
    ],
  },
  {
    slug: "what-makes-a-strong-ssd-lead",
    title: "What Makes a Strong Social Security Disability Lead",
    industry: "Legal",
    metaDescription: "The qualification signals that separate a strong Social Security Disability lead from a weak one, from claim stage to medical documentation.",
    intro:
      "Social Security Disability cases are decided largely on medical evidence and process stage, which makes those two factors the center of gravity for lead qualification in this practice area.",
    sections: [
      {
        heading: "Application and Appeal Stage",
        body: [
          "Whether a claimant has already applied, and if so, whether they're in initial review, reconsideration, or a scheduled hearing, is the single most useful qualification signal. A claimant with a hearing already scheduled is a fundamentally different — and often more time-sensitive — lead than someone who hasn't applied yet.",
        ],
      },
      {
        heading: "Medical Documentation Status",
        body: [
          "SSD claims live or die on medical evidence, so whether a claimant has documented diagnoses, ongoing treatment, and medical records that support their claimed disability matters enormously. Leads that capture even a general sense of diagnosis and treatment history give firms a much faster read on case strength than a bare claim of being \"unable to work.\"",
        ],
      },
      {
        heading: "Prior Denial History",
        body: [
          "A claimant with one or more prior denials is often more motivated to find representation, but the reason for the prior denial (missing medical evidence, a procedural issue, a medical-vocational determination) also affects how a firm should approach the appeal. Capturing whether a denial has occurred — even without full detail — helps firms prioritize outreach.",
        ],
      },
    ],
    faq: [
      {
        question: "Are SSD leads generally shared or exclusive?",
        answer:
          "Both models exist in the market; the right choice depends on the same intake-speed and margin considerations that apply to other legal case types — see our general guide on exclusive vs. shared leads.",
      },
      {
        question: "Does age affect SSD lead qualification?",
        answer:
          "It can be a relevant data point given how SSA's disability determination process factors in age alongside education and work history, but it should supplement — not replace — claim stage and medical documentation as qualification signals.",
      },
    ],
  },
  {
    slug: "exclusive-vs-shared-mass-tort-leads",
    title: "Exclusive vs. Shared Mass Tort Leads",
    industry: "Legal",
    metaDescription: "How exclusivity works differently in mass tort marketing, and what firms should understand about co-counsel and referral dynamics before buying.",
    intro:
      "Mass tort lead generation operates a little differently than most other legal categories, largely because co-counsel and referral relationships are common and litigation deadlines can affect timing in ways that don't apply to standalone case types.",
    sections: [
      {
        heading: "Exclusivity Means Something Different Here",
        body: [
          "In mass tort, an \"exclusive\" lead typically means the vendor isn't reselling that specific submission to another firm — it doesn't address what a signing firm chooses to do afterward, including referring or co-counseling the case with another firm as part of its own case management strategy. Firms should be clear on this distinction rather than assuming exclusivity guarantees sole ownership of the case indefinitely.",
        ],
      },
      {
        heading: "Litigation Deadlines Affect Volume and Urgency",
        body: [
          "Mass tort case intake often accelerates or slows based on litigation milestones — a new MDL forming, a settlement deadline approaching, or a statute of limitations issue tied to a specific product or exposure. Firms should expect volume and urgency to shift with the underlying litigation timeline, not stay constant like more evergreen practice areas.",
        ],
      },
      {
        heading: "Matching Exposure Criteria Closely",
        body: [
          "Because mass tort cases depend on a specific product, drug, or exposure matching very particular criteria, loosely qualified shared leads are often far less useful here than in other categories — a lead that doesn't clearly match the exposure and diagnosis criteria for an active litigation is generally not worth pursuing regardless of price.",
        ],
      },
    ],
    faq: [
      {
        question: "Do mass tort leads need a confirmed diagnosis to be worth buying?",
        answer:
          "Not always at the point of first contact, but leads that at least indicate a self-reported diagnosis or condition consistent with the litigation are significantly more useful for triage than those that don't.",
      },
      {
        question: "Should firms expect consistent mass tort lead volume over time?",
        answer:
          "Not necessarily — volume often follows litigation news cycles and can spike or slow based on developments in the underlying case, which is worth planning intake capacity around.",
      },
    ],
  },
  {
    slug: "what-makes-a-strong-mass-tort-lead",
    title: "What Makes a Strong Mass Tort Lead",
    industry: "Legal",
    metaDescription: "The qualification signals that separate a strong mass tort lead from a weak one, from exposure match to diagnosis confirmation.",
    intro:
      "Mass tort qualification is narrower and more specific than most legal case types, since a lead has to match a particular product, drug, or exposure to be relevant to an active litigation at all.",
    sections: [
      {
        heading: "Exposure or Product Match",
        body: [
          "The most basic qualification question is whether the claimant's exposure or product use actually matches the litigation criteria — the specific drug, device, or product, and the relevant time period of use or exposure. A lead that's close but doesn't clearly match current litigation criteria is generally not usable, regardless of how compelling the underlying injury sounds.",
        ],
      },
      {
        heading: "Diagnosis or Injury Confirmation",
        body: [
          "Whether the claimant has a documented diagnosis or injury consistent with the litigation — not just a general health concern — is central to case value. Self-reported diagnosis at intake isn't the same as medical records, but it's an important first filter before a firm invests time in full case review.",
        ],
      },
      {
        heading: "Timing Relative to Deadlines",
        body: [
          "Statute of limitations and litigation-specific deadlines can be complex and vary by jurisdiction and case type in mass tort. Capturing when exposure or diagnosis occurred at intake helps firms flag cases that may be approaching a deadline and need faster review.",
        ],
      },
    ],
    faq: [
      {
        question: "Is a self-reported diagnosis enough to qualify a mass tort lead?",
        answer:
          "It's a reasonable first filter, but firms should expect to independently verify diagnosis and exposure details during case review rather than relying solely on what was reported at intake.",
      },
      {
        question: "How does mass tort qualification differ from personal injury qualification?",
        answer:
          "Personal injury qualification centers on liability and treatment; mass tort qualification centers on matching a specific exposure and diagnosis to active litigation criteria, which is a narrower and more technical filter.",
      },
    ],
  },
  {
    slug: "web-form-leads-vs-warm-transfers-for-medical-malpractice-firms",
    title: "Web Form Leads vs. Warm Transfers for Medical Malpractice Firms",
    industry: "Legal",
    metaDescription: "Why pre-screening matters more for medical malpractice than almost any other legal case type, and how that affects the web form lead vs. warm transfer decision.",
    intro:
      "Medical malpractice is widely regarded as one of the hardest legal case types to qualify — most inquiries, even genuine ones, don't end up meeting the standard needed to pursue a claim. That reality should shape how firms think about format.",
    sections: [
      {
        heading: "Why Pre-Screening Carries More Weight Here",
        body: [
          "Because so few malpractice inquiries ultimately meet the standard-of-care and causation bar required to pursue a case, a format with more upfront screening — like a warm transfer with basic qualifying questions — can save significant intake time compared to reviewing a high volume of unscreened web form submissions.",
          "That said, no lead format can fully pre-qualify a malpractice case the way an attorney's own case review can; screening at intake narrows the pool, it doesn't replace legal evaluation.",
        ],
      },
      {
        heading: "What Web Form Leads Still Offer",
        body: [
          "Web form leads remain useful for firms with an experienced intake team that can quickly triage submissions and rule out cases that clearly don't meet the threshold, without needing every inquiry pre-screened live. The lower cost per lead can offset the additional triage time for firms set up to move through submissions efficiently.",
        ],
      },
      {
        heading: "Setting Realistic Expectations on Volume",
        body: [
          "Whichever format a firm chooses, it's worth setting internal expectations that a meaningful share of malpractice leads and transfers — even well-qualified ones — won't convert into signed cases, simply because of how high the bar is for a viable claim. Cost per signed case, not cost per lead, is the metric that matters most in this category.",
        ],
      },
    ],
    faq: [
      {
        question: "What's a realistic qualification rate for medical malpractice leads?",
        answer:
          "It varies by vendor and screening depth, but medical malpractice consistently has one of the lowest lead-to-signed-case rates of any legal category — firms should budget and staff intake with that reality in mind.",
      },
      {
        question: "Should malpractice leads include a specific description of what went wrong?",
        answer:
          "Yes — even a brief description of the alleged error and outcome is significantly more useful for triage than a bare claim that something went wrong during treatment.",
      },
    ],
  },
  {
    slug: "what-makes-a-strong-medical-malpractice-lead",
    title: "What Makes a Strong Medical Malpractice Lead",
    industry: "Legal",
    metaDescription: "The qualification signals that separate a strong medical malpractice lead from a weak one, from standard-of-care clarity to statute of limitations.",
    intro:
      "Medical malpractice cases turn on a small number of specific legal elements, and a lead that captures even basic information about those elements is far more useful to a firm than one that doesn't.",
    sections: [
      {
        heading: "Standard of Care and What Allegedly Went Wrong",
        body: [
          "A useful malpractice lead includes at least a basic description of what happened — the type of procedure or treatment, and what the claimant believes went wrong. Vague submissions (\"something happened during my surgery\") are far harder to triage than ones with even a rough description of the alleged error.",
        ],
      },
      {
        heading: "Outcome and Damages",
        body: [
          "What resulted from the alleged error — a specific injury, a worsened condition, additional surgery, or a death — directly affects case value and viability. Capturing outcome clearly at intake helps firms understand roughly what's at stake before investing time in full review.",
        ],
      },
      {
        heading: "Timing and Statute of Limitations",
        body: [
          "Medical malpractice statutes of limitations are often shorter and more jurisdiction-specific than other injury case types, and some states apply a separate, earlier deadline tied to when the injury was discovered rather than when it occurred. Capturing when the incident happened, and when the claimant first suspected something was wrong, helps firms flag time-sensitive cases quickly.",
        ],
      },
    ],
    faq: [
      {
        question: "Do malpractice leads need to name a specific standard-of-care violation?",
        answer:
          "Not at intake — that determination usually requires expert review — but a clear description of what happened and what the outcome was gives firms enough to decide whether it's worth that review.",
      },
      {
        question: "Why do malpractice cases often need faster initial response than other case types?",
        answer:
          "Beyond general lead-response best practices, shorter and sometimes discovery-based statutes of limitations make timely initial review especially important in this category.",
      },
    ],
  },
  {
    slug: "what-is-a-lead-revenue-share-program",
    title: "What Is a Lead Revenue Share Program?",
    industry: "Revenue Share",
    metaDescription:
      "A plain-language guide to how lead revenue share programs work, and how Assigners' 40% model turns unsold leads into ongoing income.",
    intro:
      "If your business generates more leads than you can sell or use, a revenue share program offers a way to monetize that unsold volume instead of writing it off. Here's how the model works, and how Assigners' program specifically operates.",
    sections: [
      {
        heading: "What \"Revenue Share\" Actually Means",
        body: [
          "In a flat-sale arrangement, you sell a lead once for a fixed price, regardless of what happens to it afterward. In a revenue share arrangement, you don't sell the lead outright — instead, a partner works it, and if it results in a sale, you receive a percentage of that sale price.",
          "The tradeoff is timing and certainty versus upside: a flat sale pays immediately and predictably; revenue share pays only when a lead actually converts, but can pay out more per lead than a typical wholesale rate since you're sharing in the final sale rather than a fixed buy price.",
        ],
      },
      {
        heading: "How Assigners' Revenue Share Program Works",
        body: [
          "You send us the leads you can't sell or use through a simple API integration. Every lead is scrubbed against Do-Not-Call and litigation lists before it's ever touched by an agent, which is a compliance step, not a qualification filter on lead quality.",
          "Cleared leads are routed into our calling platform, where trained agents contact them and attempt to complete a warm transfer into an active buyer campaign. Completed transfers are sent through Ringba, where you get publisher-level access to monitor performance and track results in real time.",
          "You're paid 40% of the sale price on every warm transfer or call we successfully sell from your submitted leads — for example, a transfer sold for $100 pays you $40. Payment is tied to completed, sold outcomes, not to the number of leads submitted.",
        ],
      },
      {
        heading: "Why Compliance Screening Happens Before Anything Else",
        body: [
          "Working a lead that's on a Do-Not-Call list or tied to active litigation creates real risk for everyone involved — the partner submitting it, the agent working it, and the buyer it might eventually be transferred to. Scrubbing against DNC and litigation lists before a lead reaches an agent removes that risk from the process up front, rather than trying to catch it after the fact.",
        ],
      },
      {
        heading: "What Kind of Leads Are a Good Fit",
        body: [
          "Revenue share tends to make the most sense for leads you'd otherwise write off entirely: submissions outside your current buy box, aged leads you no longer have capacity to work, or overflow volume from campaigns that outpaced your team's ability to follow up. Because there's no cost to submit leads that don't convert, it's a way to find upside in inventory that currently generates nothing.",
        ],
      },
    ],
    faq: [
      {
        question: "Do I get paid for leads that don't convert?",
        answer:
          "No — revenue share is paid only on completed, sold warm transfers or calls, not on the number of leads submitted. Leads that don't clear compliance screening or don't convert generate no payout, but they also cost you nothing to submit.",
      },
      {
        question: "How is the 40% revenue share calculated?",
        answer:
          "It's 40% of the actual sale price of the completed warm transfer or call — for example, a transfer sold for $100 pays a $40 revenue share. Actual sale price varies by vertical, lead quality, and buyer demand.",
      },
      {
        question: "Can I see what's happening to the leads I submit?",
        answer:
          "Yes — completed transfers are sent through Ringba, where you get publisher-level access to monitor call outcomes and track results in real time, rather than waiting on a periodic report.",
      },
    ],
  },
  {
    slug: "revenue-share-vs-selling-unsold-leads-outright",
    title: "Revenue Share vs. Selling Your Unsold Leads Outright",
    industry: "Revenue Share",
    metaDescription:
      "Compare revenue share and flat-sale approaches for monetizing unsold or excess leads, and how to think about which fits your business.",
    intro:
      "Lead generators sitting on excess or unsold volume generally have two paths to monetize it: sell the leads outright for a flat price, or share in the revenue once they're worked and sold. Each has real tradeoffs worth understanding before you commit your volume to one approach.",
    sections: [
      {
        heading: "Selling Leads Outright",
        body: [
          "A flat sale pays a fixed, known price per lead, typically at or below standard wholesale rates for leads that didn't fit a specific buyer's primary criteria. Payment is immediate and doesn't depend on what happens to the lead afterward.",
          "The tradeoff is that the price is fixed regardless of how well a given lead might have actually converted — you get the same payout whether that lead would have closed or gone nowhere, and you need to find a buyer actively purchasing in that exact format and vertical.",
        ],
      },
      {
        heading: "Revenue Share",
        body: [
          "Instead of a fixed price, you receive a percentage of the actual sale price once a lead is worked and successfully sold as a warm transfer or call. Because you're sharing in the real outcome rather than a flat wholesale rate, well-converting leads can pay out more in total than a typical flat sale.",
          "The tradeoff is timing and dependency: payment isn't immediate, and it only happens if the lead is successfully worked and sold. That makes transparency into what's actually happening to your leads — not just a promise of a check later — an important part of evaluating any revenue share partner.",
        ],
      },
      {
        heading: "How Assigners' Model Addresses the Trust Question",
        body: [
          "Assigners' revenue share program is built around visibility rather than a black box: leads are scrubbed against DNC and litigation lists before an agent ever touches them, worked through our own calling platform, and completed transfers are routed through Ringba, where you get publisher-level access to monitor outcomes and payout in real time — the same real-time visibility a buyer purchasing leads directly would expect.",
        ],
      },
      {
        heading: "Which One Makes Sense for You",
        body: [
          "If you need guaranteed, immediate cash for a batch of leads regardless of how they'd perform, a flat sale is the more predictable choice. If the leads in question would otherwise be written off entirely — aged out, outside your buy box, or overflow you can't work — revenue share turns inventory that currently generates zero return into potential upside, since there's no cost to submitting leads that don't convert.",
        ],
      },
    ],
    faq: [
      {
        question: "Can I combine both approaches for different segments of my volume?",
        answer:
          "Many lead generators use flat sales for some volume and revenue share for leads they'd otherwise write off. Talk to our sales team about how revenue share fits alongside other lead monetization you may already have in place.",
      },
      {
        question: "Is there a minimum volume required to participate in revenue share?",
        answer:
          "Volume requirements and program specifics are confirmed per partner based on vertical and integration details — talk to our sales team for specifics relevant to your business.",
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((g) => g.slug === slug);
}
