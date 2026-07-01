import type { Metadata } from "next";
import { Be_Vietnam_Pro, Quicksand } from "next/font/google";
import "./globals.css";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { getSiteUrl, SITE } from "@/lib/seo/site";
import { AppProviders } from "@/components/providers/app-providers";
import { RootJsonLd } from "@/lib/seo/root-json-ld";

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  variable: "--font-be-vietnam",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const quicksand = Quicksand({
  subsets: ["latin", "vietnamese"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600", "700"],
});

function buildRootMetadata(): Metadata {
  const pageMeta = buildPageMetadata({
    title: `${SITE.name} — Học và thi đậu chuyên Tin lớp 9 → 10`,
    description: SITE.defaultDescription,
    path: "/",
  });

  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: `${SITE.name} — Học và thi đậu chuyên Tin lớp 9 → 10`,
      template: `%s | ${SITE.name}`,
    },
    keywords: [
      "chuyên tin",
      "luyện thi chuyên tin",
      "thi chuyên tin lớp 10",
      "HSG tin học",
      "tuyển sinh lớp 10 chuyên",
      "luyện thi trường chuyên",
      "học lập trình lớp 9",
    ],
    description: pageMeta.description,
    alternates: pageMeta.alternates,
    robots: pageMeta.robots,
    openGraph: pageMeta.openGraph,
    twitter: pageMeta.twitter,
  };
}

export const metadata: Metadata = buildRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnam.variable} ${quicksand.variable}`}>
      <body className="min-h-screen">
        <AppProviders>
          <RootJsonLd />
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
