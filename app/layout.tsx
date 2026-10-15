import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PRACTICE, SITE_URL } from "@/lib/constants";
import { IMAGES } from "@/lib/images";
import DemoNotice from "./DemoNotice";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Brightside Dental | Sacramento, CA",
    template: "%s | Brightside Dental",
  },
  description:
    "Brightside Dental in Sacramento, CA offers general, cosmetic, and emergency dental care. Accepting new patients. Book online today.",
  keywords: [
    "dentist Sacramento CA",
    "dental practice Sacramento",
    "Invisalign Sacramento",
    "emergency dentist Sacramento County",
    "cosmetic dentist Sacramento",
    "dental implants Sacramento CA",
  ],
  authors: [{ name: PRACTICE.name }],
  icons: {
    icon: [
      { url: `${BASE_PATH}/favicon.ico`, sizes: "48x48" },
      { url: `${BASE_PATH}/favicon-32.png`, type: "image/png", sizes: "32x32" },
      { url: `${BASE_PATH}/favicon-16.png`, type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: `${BASE_PATH}/apple-touch-icon.png` }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: PRACTICE.name,
    title: "Brightside Dental | Sacramento, CA",
    description:
      "General, cosmetic, and emergency dental care in Sacramento, CA. Accepting new patients. Same-week appointments available.",
    images: [
      {
        url: IMAGES.ogImage.src,
        width: IMAGES.ogImage.width,
        height: IMAGES.ogImage.height,
        alt: IMAGES.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brightside Dental | Sacramento, CA",
    description:
      "General, cosmetic, and emergency dental care in Sacramento, CA. Accepting new patients.",
    images: [IMAGES.ogImage.src],
  },
  // Fictional business: keep it out of search (see DemoNotice).
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  manifest: `${BASE_PATH}/manifest.json`,
};

export const viewport: Viewport = {
  themeColor: "#2D9E8F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <DemoNotice />
      </body>
    </html>
  );
}
