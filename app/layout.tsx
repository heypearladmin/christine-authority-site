import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { realEstateAgentSchema, webSiteSchema, personSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://christineandreasen.com"),
  title: {
    default: "Christine Andreasen | Seattle Luxury Real Estate Advisor",
    template: "%s | Christine Andreasen",
  },
  description:
    "Christine Andreasen is a Seattle-based luxury real estate advisor with nearly three decades of experience. Strategic guidance, confident decisions, exceptional outcomes.",
  keywords: [
    "Seattle real estate",
    "luxury homes Seattle",
    "Christine Andreasen",
    "eXp Realty Seattle",
    "Seattle waterfront homes",
    "Seattle real estate advisor",
  ],
  authors: [{ name: "Christine Andreasen" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Christine Andreasen | Seattle Real Estate",
    title: "Christine Andreasen | Seattle Luxury Real Estate Advisor",
    description:
      "Strategic guidance. Confident decisions. Exceptional outcomes. Christine & Company | eXp Realty.",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Christine Andreasen — Seattle Real Estate Advisor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Christine Andreasen | Seattle Luxury Real Estate Advisor",
    description:
      "Strategic guidance. Confident decisions. Exceptional outcomes.",
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              realEstateAgentSchema(),
              webSiteSchema(),
              personSchema(),
            ]),
          }}
        />
      </head>
      <body className="bg-cream text-ink antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
