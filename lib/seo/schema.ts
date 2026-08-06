// Central site config — no lib/site.ts exists in this project
const SITE = {
  url: "https://www.christineandreasen.com",
  name: "Christine Andreasen",
  brand: "Christine & Company",
  brokerage: "eXp Realty",
  agentName: "Christine Andreasen",
  description:
    "Christine Andreasen is a Seattle-based luxury real estate advisor with nearly three decades of experience. Strategic guidance, confident decisions, exceptional outcomes.",
  phone: "+12063538787",
  phoneDisplay: "(206) 353-8787",
  email: "christine@candco.me",
  city: "Seattle",
  state: "WA",
  country: "US",
  portraitSrc: "/headshot.webp",
  logoSrc: "/companylogo.webp",
  ogImage: "/headshot.webp",
  social: {
    facebook: "https://www.facebook.com/christine.andreasen.robertson",
    instagram: "https://www.instagram.com/christineandcompany",
    linkedin: "https://www.linkedin.com/in/christineandreasen/",
    youtube: "https://www.youtube.com/@christineandcompany1784",
  },
} as const;

export { SITE };

type SchemaObject = Record<string, unknown>;

function withContext(schema: SchemaObject): SchemaObject {
  return { "@context": "https://schema.org", ...schema };
}

export function realEstateAgentSchema(): SchemaObject {
  return withContext({
    "@type": "RealEstateAgent",
    "@id": `${SITE.url}/#agent`,
    name: SITE.brand,
    alternateName: SITE.agentName,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    description: SITE.description,
    image: `${SITE.url}${SITE.portraitSrc}`,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      addressCountry: SITE.country,
    },
    areaServed: [
      { "@type": "City", name: "Seattle", containedInPlace: "Washington" },
      { "@type": "City", name: "Bellevue", containedInPlace: "Washington" },
      { "@type": "City", name: "Mercer Island", containedInPlace: "Washington" },
      { "@type": "City", name: "Kirkland", containedInPlace: "Washington" },
    ],
    founder: {
      "@type": "Person",
      "@id": `${SITE.url}/#person`,
      name: SITE.agentName,
    },
    parentOrganization: {
      "@type": "Organization",
      name: SITE.brokerage,
    },
    sameAs: [
      SITE.social.facebook,
      SITE.social.instagram,
      SITE.social.linkedin,
      SITE.social.youtube,
    ],
  });
}

export function webSiteSchema(): SchemaObject {
  return withContext({
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: `${SITE.agentName} | Seattle Luxury Real Estate`,
    description: SITE.description,
    inLanguage: "en-US",
    publisher: { "@id": `${SITE.url}/#agent` },
  });
}

export function personSchema(): SchemaObject {
  return withContext({
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: SITE.agentName,
    url: SITE.url,
    jobTitle: "Luxury Real Estate Advisor",
    description:
      "Christine Andreasen has nearly three decades guiding Seattle's most discerning buyers and sellers. Founder of Christine & Company, powered by eXp Realty.",
    worksFor: { "@id": `${SITE.url}/#agent` },
    image: {
      "@type": "ImageObject",
      url: `${SITE.url}${SITE.portraitSrc}`,
      caption: "Christine Andreasen, Seattle Luxury Real Estate Advisor",
    },
    sameAs: [
      SITE.social.facebook,
      SITE.social.instagram,
      SITE.social.linkedin,
      SITE.social.youtube,
    ],
  });
}

export function localBusinessSchema(): SchemaObject {
  return withContext({
    "@type": ["LocalBusiness", "RealEstateAgent"],
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.brand,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    description: SITE.description,
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      addressCountry: SITE.country,
    },
    areaServed: [
      { "@type": "City", name: "Seattle", containedInPlace: "Washington" },
      { "@type": "AdministrativeArea", name: "King County, Washington" },
    ],
    sameAs: [
      SITE.social.facebook,
      SITE.social.instagram,
      SITE.social.linkedin,
      SITE.social.youtube,
    ],
  });
}

export function serviceSchema(params: {
  name: string;
  url: string;
  description: string;
  category?: string;
}): SchemaObject {
  return withContext({
    "@type": "Service",
    "@id": `${params.url}#service`,
    name: params.name,
    url: params.url,
    description: params.description,
    serviceType: params.category ?? "Real Estate Services",
    areaServed: [
      { "@type": "City", name: "Seattle", containedInPlace: "Washington" },
      { "@type": "AdministrativeArea", name: "King County, Washington" },
    ],
    provider: { "@id": `${SITE.url}/#agent` },
  });
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
): SchemaObject {
  return withContext({
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  });
}

export function organizationSchema(): SchemaObject {
  return withContext({
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.brand,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}${SITE.logoSrc}`,
    },
    telephone: SITE.phone,
    email: SITE.email,
    description:
      "Christine & Company is a Seattle-based luxury real estate practice founded by Christine Andreasen, powered by eXp Realty. Specializing in strategic representation for buyers, sellers, and owners across Seattle and surrounding waterfront communities.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seattle",
      addressRegion: "WA",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Seattle", containedInPlace: "Washington" },
      { "@type": "City", name: "Bellevue", containedInPlace: "Washington" },
      { "@type": "City", name: "Mercer Island", containedInPlace: "Washington" },
      { "@type": "City", name: "Kirkland", containedInPlace: "Washington" },
      { "@type": "City", name: "Medina", containedInPlace: "Washington" },
    ],
    founder: {
      "@id": `${SITE.url}/#person`,
    },
    member: {
      "@id": `${SITE.url}/#person`,
    },
    parentOrganization: {
      "@type": "Organization",
      name: "eXp Realty",
    },
    sameAs: [
      SITE.social.facebook,
      SITE.social.instagram,
      SITE.social.linkedin,
      SITE.social.youtube,
    ],
  });
}

export function webPageSchema(params: {
  name: string;
  url: string;
  description: string;
}): SchemaObject {
  return withContext({
    "@type": "WebPage",
    "@id": `${params.url}#webpage`,
    name: params.name,
    url: params.url,
    description: params.description,
    inLanguage: "en-US",
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#agent` },
  });
}

export function faqPageSchema(
  faqs: { question: string; answer: string }[]
): SchemaObject {
  return withContext({
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  });
}

export function travisPersonSchema(): SchemaObject {
  return withContext({
    "@type": "Person",
    "@id": `${SITE.url}/#travis`,
    name: "Travis Foxx",
    url: SITE.url,
    jobTitle: "Luxury Real Estate Advisor",
    description:
      "Travis Foxx is a veteran real estate professional with over 30 years of experience across residential, investment, commercial, and multi-family properties. He specializes in Seattle's North Coast — from Magnolia to Mukilteo — and partners with Christine Andreasen at Christine & Company, powered by eXp Realty.",
    telephone: "+12069920066",
    email: "travis.foxx@exprealty.com",
    image: `${SITE.url}/travis-headshot.webp`,
    worksFor: { "@id": `${SITE.url}/#agent` },
    sameAs: [
      "https://www.youtube.com/@travisfoxxrealtor-exp",
    ],
  });
}

export function blogPostingSchema(params: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  keywords?: string[];
}): SchemaObject {
  return withContext({
    "@type": "BlogPosting",
    headline: params.title,
    description: params.description,
    url: params.url,
    ...(params.image
      ? {
          image: params.image.startsWith("http")
            ? params.image
            : `${SITE.url}${params.image}`,
        }
      : {}),
    datePublished: params.datePublished,
    dateModified: params.datePublished,
    ...(params.keywords ? { keywords: params.keywords.join(", ") } : {}),
    author: { "@id": `${SITE.url}/#person` },
    publisher: { "@id": `${SITE.url}/#agent` },
    about: { "@id": `${SITE.url}/#agent` },
    mainEntityOfPage: { "@type": "WebPage", "@id": params.url },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".editorial-prose h2", ".editorial-prose p:first-of-type"],
    },
  });
}
