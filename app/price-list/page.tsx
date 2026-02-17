import { Metadata } from "next";
import PriceListClient from "@/components/PriceListClient";

export const metadata: Metadata = {
  title: "Daftar Harga & Service",
  description:
    "Transparan dan kompetitif. Lihat daftar harga jasa pembuatan website, aplikasi mobile, AI, dan desain grafis kami.",
  alternates: {
    canonical: "/price-list",
  },
  openGraph: {
    title: "Daftar Harga Jasa Web & App - Pintu Digital Teknologi",
    description:
      "Paket harga pembuatan website mulai 150rb. Transparan, tanpa hidden fees.",
  },
};

export default function PriceListPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.pintudigital.tech",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Daftar Harga & Layanan",
                item: "https://www.pintudigital.tech/price-list",
              },
            ],
          }),
        }}
      />
      <PriceListClient />
    </>
  );
}
