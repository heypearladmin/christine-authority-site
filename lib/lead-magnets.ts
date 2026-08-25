export type LeadMagnetKey = "buyer-roadmap" | "seller-roadmap";

export type LeadMagnet = {
  key: LeadMagnetKey;
  title: string;
  ctaLabel: string;
  filePath: string;
  sourceLabel: string;
  tagLabel: string;
};

export const leadMagnets: Record<LeadMagnetKey, LeadMagnet> = {
  "buyer-roadmap": {
    key: "buyer-roadmap",
    title: "The Seattle Home Buyer's Roadmap",
    ctaLabel: "Get Your Free Buyer's Roadmap Guide",
    filePath: "/guides/seattle-home-buyer-roadmap-guide.pdf",
    sourceLabel: "Website Buyer Guide — Roadmap",
    tagLabel: "pdf-buyer-roadmap-seattle",
  },
  "seller-roadmap": {
    key: "seller-roadmap",
    title: "The Seattle Home Seller's Roadmap",
    ctaLabel: "Get Your Free Seller's Roadmap Guide",
    filePath: "/guides/seattle-home-seller-roadmap-guide.pdf",
    sourceLabel: "Website Seller Guide — Roadmap",
    tagLabel: "pdf-seller-roadmap-seattle",
  },
};

export function getLeadMagnet(key: string): LeadMagnet | undefined {
  return leadMagnets[key as LeadMagnetKey];
}
