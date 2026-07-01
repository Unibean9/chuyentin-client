import type { Metadata } from "next";
import { getSiteUrl, SITE } from "./site";

interface BuildPageMetadataOptions {
  title: string;
  description?: string;
  path: string;
  noindex?: boolean;
}

export function buildPageMetadata({
  title,
  description = SITE.defaultDescription,
  path,
  noindex = false,
}: BuildPageMetadataOptions): Metadata {
  const siteUrl = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonical = `${siteUrl}${normalizedPath === "/" ? "" : normalizedPath}`;

  const socialTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;

  return {
    title,
    description,
    alternates: { canonical },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      url: canonical,
      title: socialTitle,
      description,
      siteName: SITE.name,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}
