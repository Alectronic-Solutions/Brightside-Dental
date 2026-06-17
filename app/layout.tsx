import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PRACTICE, SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Brightside Dental | Lodi, CA",
    template: "%s | Brightside Dental",
  },
  description:
    "Brightside Dental in Lodi, CA offers general, cosmetic, and emergency dental care. Accepting new patients. Book online today.",
  keywords: [
    "dentist Lodi CA",
    "dental practice Lodi",
    "Invisalign Lodi",
    "emergency dentist San Joaquin County",
    "cosmetic dentist Lodi",
    "dental implants Lodi CA",
  ],
  authors: [{ name: PRACTICE.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: PRACTICE.name,
    title: "Brightside Dental | Lodi, CA",
    description:
      "General, cosmetic, and emergency dental care in Lodi, CA. Accepting new patients. Same-week appointments available.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brightside Dental | Lodi, CA",
    description:
      "General, cosmetic, and emergency dental care in Lodi, CA. Accepting new patients.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#2D9E8F",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist"],
  name: "Brightside Dental",
  url: "https://www.brightsidedental.com",
  telephone: "+12095550182",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1420 S Lower Sacramento Rd",
    addressLocality: "Lodi",
    addressRegion: "CA",
    postalCode: "95242",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.115,
    longitude: -121.2716,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
  },
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card, CareCredit, Insurance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
