import React from "react";
import type { Metadata, Viewport } from "next";
import { Poppins, Inter, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default:
      "Garasi Teknologi - Jasa Pembuatan Website Professional & Modern | Digital Agency Indonesia",
    template: "%s | Garasi Teknologi Digital Agency Indonesia",
  },
  description:
    "Garasi Teknologi adalah digital agency professional yang mengkhususkan diri dalam pembuatan website modern, cepat, dan SEO-optimized. Kami mengubah ide bisnis Anda menjadi pengalaman digital yang menakjubkan. Konsultasi gratis!",
  keywords: [
    // --- EXISTING WEB KEYWORDS ---
    "jasa pembuatan website",
    "web development",
    "digital agency indonesia",
    "website company profile",
    "web design professional",
    "jasa web jakarta",
    "pembuatan website modern",
    "website responsive",
    "website SEO optimized",
    "jasa SEO",
    "web development indonesia",
    "digital solutions",
    "jasa website murah",
    "website custom",
    "web developer professional",
    "jasa pembuatan website jakarta",
    "digital agency jakarta",
    "website bisnis",
    "pembuatan web",
    "jasa website company profile",
    "web developer indonesia",
    "website toko online",
    "jasa pembuatan website responsive",
    "website modern indonesia",
    "web development agency",
    "jasa website SEO",
    "website optimized",
    "digital marketing agency",
    "web design jakarta",
    "jasa web developer professional",

    // --- NEW AI & MACHINE LEARNING KEYWORDS ---
    "jasa integrasi AI",
    "pengembangan machine learning indonesia",
    "jasa implementasi deep learning",
    "solusi artificial intelligence bisnis",
    "AI developer indonesia",
    "jasa chatbot AI kustom",
    "otomatisasi bisnis dengan AI",
    "pengembangan model AI kustom",

    // --- NEW MOBILE APP KEYWORDS ---
    "jasa pembuatan aplikasi mobile",
    "mobile app developer jakarta",
    "jasa buat aplikasi android ios",
    "pengembangan aplikasi flutter indonesia",
    "jasa pembuatan aplikasi react native",
    "startup mobile app development",

    // --- NEW DESIGN & VISUAL KEYWORDS ---
    "jasa desain UI/UX",
    "professional graphic design indonesia",
    "jasa branding identitas visual",
    "jasa editing video profesional",
    "video editor jakarta",
    "jasa pembuatan video company profile",
    "editing foto produk profesional",
    "jasa motion graphics indonesia",
    "post-production visual agency",
  ],
  authors: [
    {
      name: "Garasi Teknologi Digital Agency",
      url: "https://Garasi Teknologi.dev",
    },
  ],
  creator: "Garasi Teknologi Team",
  publisher: "Garasi Teknologi Digital Agency",
  metadataBase: new URL("https://garasiteknologi.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      "en-US": "/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://Garasi Teknologi.dev",
    siteName: "Garasi Teknologi Digital Agency",
    title: "Garasi Teknologi - Jasa Pembuatan Website Professional & Modern",
    description: "Website modern, cepat, dan SEO-optimized untuk bisnis Anda.",
    images: [
      {
        url: "https://Garasi Teknologi.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Garasi Teknologi - Digital Agency Indonesia",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garasi Teknologi - Jasa Pembuatan Website Professional & Modern",
    description:
      "Website modern, cepat, dan SEO-optimized untuk bisnis Anda. Konsultasi gratis!",
    images: ["https://Garasi Teknologi.dev/twitter-image.png"],
    creator: "@Garasi Teknologi",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      {
        url: "/icon-dark-32x32.png",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)",
      },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
    ],
  },
  manifest: "/site.webmanifest",
  generator: "Next.js",
  applicationName: "Garasi Teknologi",
  appleWebApp: {
    capable: true,
    title: "Garasi Teknologi Agency",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Garasi Teknologi Digital Agency",
              url: "https://Garasi Teknologi.dev",
              logo: "https://Garasi Teknologi.dev/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-21-xxxx-xxxx",
                contactType: "customer service",
                areaServed: "ID",
                availableLanguage: ["Indonesian", "English"],
              },
              sameAs: [
                "https://www.instagram.com/Garasi Teknologi",
                "https://www.linkedin.com/company/Garasi Teknologi",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${openSans.variable} ${openSans.variable} font-sans antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
