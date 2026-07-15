export type ExpandedSection = {
  heading: string;
  body: string[];
};

export type ComparisonTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type FAQExtension = {
  keyTakeaways?: string[];
  expandedSections?: ExpandedSection[];
  comparisonTable?: ComparisonTable;
  sources?: { label: string; url: string }[];
};

export const faqExtensions: Record<string, FAQExtension> = {
  "what-is-the-minimum-income-to-buy-a-home-in-seattle-in-2026": {
    keyTakeaways: [
      "Lenders use debt-to-income ratio (DTI), not a fixed income minimum — most require DTI below 43%.",
      "For a $1.5M home with 20% down, expect to need $350,000–$400,000+ in gross household income.",
      "Income alone is not enough — lenders also evaluate credit score, reserves, and employment history.",
      "Self-employed buyers face extra documentation; bank statement loan programs can help.",
      "Pre-approval with a jumbo-experienced lender reveals your true ceiling before you search.",
    ],
    expandedSections: [
      {
        heading: "How Lenders Calculate Income Requirements",
        body: [
          "Mortgage lenders don't set a fixed income threshold. Instead, they calculate a debt-to-income ratio (DTI) — your total monthly debt obligations divided by your gross monthly income. Most jumbo loan programs require a DTI at or below 43%, though many lenders prefer 38–40% for large balances.",
          "The lower your existing debt (car loans, student loans, credit cards), the more you can allocate to the mortgage payment — and the less income you technically need. This is why paying down consumer debt before applying can meaningfully shift what you qualify for.",
        ],
      },
      {
        heading: "Income Estimates by Seattle Price Point",
        body: [
          "At $1.5 million with 20% down, your loan is $1.2 million. At a 6.5% rate over 30 years, principal and interest runs approximately $7,587 per month. Add property taxes ($1,500–$2,000/month) and homeowners insurance (~$250/month), and total housing cost approaches $9,500–$10,000 — before any other debts.",
          "To keep DTI at or below 43% with no other debt, you'd need roughly $23,000 in gross monthly income, or $276,000 annually. Most financial planners recommend keeping housing costs below 28% of gross income, which pushes the comfortable number to $400,000+ for this price point.",
        ],
      },
      {
        heading: "Other Factors Lenders Evaluate",
        body: [
          "Income is one variable in a larger equation. Jumbo lenders in Seattle typically require: credit score of 720+ for best rates (680+ minimum), 12 months of cash reserves after closing, 2+ years of employment history in the same field, and documented source of down payment funds.",
          "Self-employed buyers are evaluated on two-year average net income from tax returns — which can be lower than actual earnings when deductions are taken. Bank statement programs (using 12–24 months of deposits) are worth asking about if your tax returns don't reflect your real income.",
        ],
      },
    ],
    comparisonTable: {
      caption: "Estimated income requirements by purchase price (Seattle, 2026)",
      headers: ["Purchase Price", "Down (20%)", "Est. Monthly Payment", "Income Needed (43% DTI)"],
      rows: [
        ["$750,000", "$150,000", "~$4,200/mo", "~$120,000/yr"],
        ["$1,000,000", "$200,000", "~$5,700/mo", "~$165,000/yr"],
        ["$1,500,000", "$300,000", "~$8,500/mo", "~$240,000/yr"],
        ["$2,000,000", "$400,000", "~$11,400/mo", "~$320,000/yr"],
        ["$3,000,000", "$600,000", "~$17,100/mo", "~$480,000/yr"],
      ],
    },
    sources: [
      { label: "Consumer Financial Protection Bureau — Debt-to-Income Ratio Guide", url: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-why-is-the-43-debt-to-income-ratio-important-en-1791/" },
      { label: "Washington State Department of Financial Institutions", url: "https://dfi.wa.gov" },
      { label: "Fannie Mae — HomeReady and Jumbo Guidelines", url: "https://www.fanniemae.com" },
    ],
  },

  "what-qualifies-as-a-luxury-home-in-seattle": {
    keyTakeaways: [
      "Homes priced at $3 million and above are broadly considered luxury in the Seattle market.",
      "The Sevens — $7M+ — is a distinct ultra-luxury tier with its own buyer pool, marketing rules, and advisory standards.",
      "Luxury classification depends on price, location, finish quality, and amenity level — not square footage alone.",
      "Neighborhood context matters: $2M is entry-level in Medina, top-of-market in other areas.",
      "The threshold shifts with the market; a home considered luxury in 2018 may be mid-market today.",
    ],
    expandedSections: [
      {
        heading: "How the Seattle Market Defines Luxury",
        body: [
          "Unlike markets where luxury is mainly about square footage, Seattle's classification is driven by price, location, and finish quality. In neighborhoods like Medina, Mercer Island, and Broadmoor, $2–3 million is mid-tier. In West Seattle, $1.5 million may represent the top of the local market.",
          "For practical purposes, $3 million is the working threshold most advisors use. Below that, standard premium marketing often suffices. Above that, the approach — buyer targeting, presentation, pricing methodology, and negotiation — needs to shift materially.",
        ],
      },
      {
        heading: "The Ultra-Luxury Tier: The Sevens",
        body: [
          "At $7 million and above — what Christine Andreasen calls 'The Sevens' — everything changes. The buyer pool narrows to a handful of qualified individuals per year in the greater Seattle area. Marketing shifts from broad MLS exposure to precision private outreach. The home is rarely found; it is introduced.",
          "Buyers at this tier often compare Seattle against Marin County, Scottsdale, or a second home in Europe. They bring their own advisors — wealth managers, estate attorneys, family office representatives. An advisor representing the seller must understand how to work across that table.",
        ],
      },
      {
        heading: "What Distinguishes a Luxury Home Beyond Price",
        body: [
          "Price is necessary but not sufficient. A luxury home must offer one or more of the following: significant view corridor (city, water, mountains), premier location within a premier neighborhood, exceptional architecture or custom craftsmanship, substantial land, resort-level amenities, or a compelling combination.",
          "Finish quality is expected, not exceptional. Stone countertops, custom millwork, high-end appliances, home automation, and spa-caliber primary suites are the baseline. When these are absent or dated, the home struggles to perform at its price — even in strong markets.",
        ],
      },
    ],
    comparisonTable: {
      caption: "Seattle luxury market tiers by price and characteristics",
      headers: ["Tier", "Price Range", "Buyer Profile", "Marketing Approach"],
      rows: [
        ["Premium", "$1M–$3M", "Move-up buyers, tech professionals", "MLS, digital, standard staging"],
        ["Luxury", "$3M–$7M", "Senior executives, investors", "Targeted digital, editorial presentation"],
        ["The Sevens", "$7M+", "Ultra-high-net-worth, multigenerational wealth", "Private networks, bespoke campaigns"],
      ],
    },
    sources: [
      { label: "Northwest Multiple Listing Service", url: "https://www.nwmls.com" },
      { label: "Institute for Luxury Home Marketing", url: "https://www.luxuryhomemarketing.com/" },
      { label: "Seattle Times Real Estate", url: "https://www.seattletimes.com/business/real-estate/" },
    ],
  },

  "do-i-need-a-different-agent-to-sell-a-7-million-home-in-seattle": {
    keyTakeaways: [
      "Yes — the skills required at $7M+ go well beyond standard luxury practice.",
      "Off-market network access becomes the primary marketing channel at this tier.",
      "Presentation requires editorial photography, videography, and bespoke print — not standard MLS media.",
      "Negotiation involves multiple sophisticated advisors on the buyer side.",
      "An advisor without ultra-luxury experience will underperform on both speed and final price.",
    ],
    expandedSections: [
      {
        heading: "Why Standard Luxury Experience Is Not Enough",
        body: [
          "An advisor who closes $1–3M homes competently is doing genuinely good work — but the $7M+ tier operates by different rules. The buyer is not browsing Zillow. The transaction is not won through MLS exposure. The pricing methodology differs. Due diligence timelines differ. The post-offer negotiation involves advisors you may never meet directly.",
          "The network is everything. At $7M+, many homes trade without appearing publicly. The advisor who knows which buyers are actively looking — through relationships with wealth managers, relocation specialists, and out-of-market top producers — is worth far more than the one with the largest advertising budget.",
        ],
      },
      {
        heading: "What to Look For in an Ultra-Luxury Advisor",
        body: [
          "Documented track record at or above your price point. Ask for specific sales, not general volume claims. One $7M transaction is not the same as ten.",
          "Network depth: wealth management firm relationships, family office contacts, corporate relocation programs, cross-market advisor connections that can reach qualified buyers before a listing goes live.",
          "Marketing capability: bespoke print materials, editorial photography, private email campaigns, and the ability to suppress or manage public exposure when that protects the seller's outcome.",
          "Composure: transactions at this level involve sophisticated counterparties who conduct extensive due diligence and negotiate hard. Your advisor's composure under pressure directly protects your price.",
        ],
      },
    ],
    sources: [
      { label: "National Association of Realtors", url: "https://www.nar.realtor/" },
      { label: "Institute for Luxury Home Marketing", url: "https://www.luxuryhomemarketing.com/" },
    ],
  },

  "are-zillow-estimates-accurate-in-seattle": {
    keyTakeaways: [
      "Zillow's Zestimate is a useful starting reference — not a pricing strategy.",
      "In Seattle, errors of 10–20% are not uncommon due to view premiums, lot grade, and micro-market conditions.",
      "Two homes a block apart can differ by hundreds of thousands based on factors algorithms don't capture.",
      "Sellers who rely on Zestimate alone frequently over- or under-price by a meaningful margin.",
      "A local market valuation from an experienced advisor is the only reliable basis for a listing decision.",
    ],
    expandedSections: [
      {
        heading: "How Zillow's Algorithm Works — and Where It Fails",
        body: [
          "Zillow's Zestimate is built on public records — sale prices, tax assessments, square footage, bedroom count, and lot size — combined with neighborhood-level trends. It is a statistical model, and statistical models work best when homes are similar and data is dense.",
          "Seattle's market is neither. View premiums, lot grade (a steeply sloping lot vs. a flat lot), renovation quality, micro-market demand, and the presence of off-market transactions all create gaps that no public dataset captures. A home with a Lake Washington view and one without can sit two blocks apart and differ by $400,000 — the algorithm may treat them identically.",
        ],
      },
      {
        heading: "What a Real Market Valuation Considers",
        body: [
          "A comparative market analysis (CMA) from an experienced local advisor goes far beyond the data Zillow has access to. It accounts for active competition (what buyers are comparing your home against today), recent failed listings (homes that overpriced and reduced), buyer feedback from showings, and off-market transactions that never enter the public record.",
          "The output is not just a number — it's a strategy. The right price point, the right timing, the right positioning relative to competition. That's what drives outcomes in Seattle's market.",
        ],
      },
    ],
    sources: [
      { label: "Zillow — Understanding the Zestimate", url: "https://www.zillow.com/z/zestimate/" },
      { label: "National Association of Realtors — Pricing Accuracy Study", url: "https://www.nar.realtor/" },
    ],
  },
};
