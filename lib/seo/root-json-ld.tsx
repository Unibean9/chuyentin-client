import { SITE, getSiteUrl } from "./site";

export function RootJsonLd() {
  const siteUrl = getSiteUrl();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: SITE.name,
        url: siteUrl,
        description: SITE.defaultDescription,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: SITE.name,
        description: SITE.defaultDescription,
        publisher: { "@id": `${siteUrl}/#organization` },
        inLanguage: "vi",
      },
      {
        "@type": "EducationalOrganization",
        "@id": `${siteUrl}/#educational`,
        name: SITE.name,
        description: SITE.defaultDescription,
        url: siteUrl,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
