import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Broclean - שירותי ניקיון משרדים ובניינים",
  description:
    "שירותי ניקיון מקצועיים למשרדים ובניינים. עבודה איכותית, אמינה ויסודית. Broclean Cleaning Services.",
  keywords: [
    "ניקיון מקצועי",
    "שירותי ניקיון",
    "ניקיון משרדים",
    "ניקיון בניינים",
    "Broclean",
  ],
  authors: [{ name: "Broclean Cleaning Services" }],
  creator: "Broclean Cleaning Services",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: "https://broclean-clean.com",
    siteName: "Broclean Cleaning Services",
    title: "Broclean - שירותי ניקיון משרדים ובניינים",
    description:
      "שירותי ניקיון מקצועיים למשרדים ובניינים. עבודה איכותית, אמינה ויסודית.",
    images: [
      {
        url: "https://broclean-clean.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Broclean Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Broclean - שירותי ניקיון מקצועיים",
    description: "שירותי ניקיון מקצועיים למשרדים ובניינים.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://broclean-clean.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={rubik.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Broclean Cleaning Services",
              description:
                "שירותי ניקיון מקצועיים למשרדים ובניינים",
              url: "https://broclean-clean.com",
              telephone: "+972-50-000-0000",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IL",
              },
              priceRange: "$$",
              openingHours: "Mo-Fr 08:00-18:00",
              serviceArea: { "@type": "Country", name: "Israel" },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
