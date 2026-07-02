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

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "") || "http://localhost:5173";
}
