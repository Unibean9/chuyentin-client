export const SITE = {
  name: "Chuyên Tin",
  shortName: "Chuyên Tin",
  defaultDescription:
    "Nền tảng học và luyện thi chuyên Tin từ lớp 9 vào lớp 10 — chuẩn bị cho kỳ thi HSG Tin học và tuyển sinh các trường chuyên trên cả nước.",
  locale: "vi_VN",
  ogImage: {
    path: "/seo.png",
    width: 1920,
    height: 1080,
    alt: "Học chuyên Tin — Chinh phục đỉnh cao. Khóa ôn thi chuyên Tin lớp 9, thuật toán và mentor kèm sát.",
  },
} as const;

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, "");
}

function isLocalhostUrl(url: string): boolean {
  try {
    const { hostname } = new URL(url);
    return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "[::1]";
  } catch {
    return false;
  }
}

/** Origin for canonical, OG, sitemap. Must be the public HTTPS domain in production builds. */
export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_APP_URL
    ? normalizeSiteUrl(process.env.NEXT_PUBLIC_APP_URL)
    : undefined;

  if (configured && !isLocalhostUrl(configured)) {
    return configured;
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) {
    return normalizeSiteUrl(`https://${vercelProduction}`);
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return normalizeSiteUrl(`https://${vercelUrl}`);
  }

  if (process.env.NODE_ENV === "production" && configured && isLocalhostUrl(configured)) {
    console.warn(
      "[seo] NEXT_PUBLIC_APP_URL points to localhost during a production build. Social previews will not show og:image until you set the live domain in hosting env and redeploy.",
    );
  }

  return configured ?? "http://localhost:5173";
}
