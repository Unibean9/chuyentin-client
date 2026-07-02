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
  const ogImageUrl = `${siteUrl}${SITE.ogImage.path}`;

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
      images: [
        {
          url: ogImageUrl,
          width: SITE.ogImage.width,
          height: SITE.ogImage.height,
          alt: SITE.ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImageUrl],
    },
  };
}
