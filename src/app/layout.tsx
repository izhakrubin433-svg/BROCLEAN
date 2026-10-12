import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
  display: "swap",
});

const SITE_URL = "https://broclean-clean.com";
const PHONE    = "+972502328041";

export const metadata: Metadata = {
  title: "Broclean - שירותי ניקיון משרדים ובניינים | מרכז הארץ",
  description:
    "שירותי ניקיון מקצועיים למשרדים, בניינים, קליניקות וחללי עבודה. זמינים 24/6, מרכז הארץ. הצעת מחיר חינמית תוך שעה. Broclean Cleaning Services.",
  keywords: [
    "ניקיון מקצועי",
    "שירותי ניקיון",
    "ניקיון משרדים",
    "ניקיון בניינים",
    "ניקיון קליניקות",
    "חברת ניקיון",
    "ניקיון תל אביב",
    "ניקיון מרכז",
    "ניקיון חללי עבודה",
    "Broclean",
    "cleaning services israel",
    "office cleaning tel aviv",
  ],
  authors: [{ name: "Broclean Cleaning Services" }],
  creator: "Broclean Cleaning Services",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: SITE_URL,
    siteName: "Broclean Cleaning Services",
    title: "Broclean - שירותי ניקיון משרדים ובניינים",
    description:
      "שירותי ניקיון מקצועיים למשרדים, בניינים וקליניקות. זמינים 24/6, מרכז הארץ.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Broclean Cleaning Services - שירותי ניקיון מקצועיים",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Broclean - שירותי ניקיון מקצועיים",
    description: "שירותי ניקיון מקצועיים למשרדים ובניינים. זמינים 24/6.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Broclean Cleaning Services",
      description: "שירותי ניקיון מקצועיים למשרדים, בניינים, קליניקות וחללי עבודה",
      url: SITE_URL,
      telephone: PHONE,
      email: "broclean14@gmail.com",
      image: `${SITE_URL}/logo.jpg`,
      logo: `${SITE_URL}/logo.jpg`,
      priceRange: "$$",
      openingHours: "Mo-Sa 00:00-24:00",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IL",
        addressRegion: "מרכז",
      },
      areaServed: [
        { "@type": "City", name: "תל אביב" },
        { "@type": "City", name: "ירושלים" },
        { "@type": "City", name: "חיפה" },
        { "@type": "City", name: "רמת גן" },
        { "@type": "City", name: "פתח תקווה" },
        { "@type": "City", name: "הרצליה" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "שירותי ניקיון",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "ניקיון משרדים" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "ניקיון בניינים" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "ניקיון קליניקות" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "חללי עבודה משותפים" } },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "500",
        bestRating: "5",
        worstRating: "1",
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "דנה כהן" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "Broclean עושים עבודה מדהימה! המשרד שלנו נראה כמו חדש אחרי כל ניקיון.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "יוסי לוי" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "מאז שהתחלנו לעבוד עם Broclean, חדר המדרגות והלובי שלנו תמיד נקיים.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "עמית ברק" },
          reviewRating: { "@type": "Rating", ratingValue: "5" },
          reviewBody: "Broclean מנקים את המשרדים שלנו כבר שלוש שנים. תמיד אמינים, תמיד מקצועיים.",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Broclean Cleaning Services",
      inLanguage: "he",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={rubik.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
