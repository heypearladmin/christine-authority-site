import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { realEstateAgentSchema, webSiteSchema, personSchema, organizationSchema, travisPersonSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://christineandreasen.com"),
  title: {
    default: "Christine Andreasen | Seattle Luxury Real Estate Advisor",
    template: "%s | Christine Andreasen",
  },
  description:
    "Seattle luxury real estate advisor with 30 years of experience. Strategic guidance for buyers and sellers. Christine Andreasen | Christine & Company | eXp Realty.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Christine Andreasen | Seattle Luxury Real Estate Advisor",
    description:
      "Strategic guidance. Confident decisions. Exceptional outcomes.",
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
              organizationSchema(),
              travisPersonSchema(),
            ]),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `var script=document.createElement("script");script.setAttribute("nowprocket","");script.setAttribute("nitro-exclude","");script.src="https://reports.heypearl.io/scripts/dynamic_optimization.js";script.dataset.uuid="c0923d2f-52de-467d-9657-3b2dedc817fa";script.id="sa-dynamic-optimization";document.head.appendChild(script);`,
          }}
        />
      </head>
      <body className="bg-cream text-ink antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','2612497085812813');fbq('track','PageView');`,
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KN6X350JBC"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-KN6X350JBC');`,
          }}
        />
      </body>
    </html>
  );
}
