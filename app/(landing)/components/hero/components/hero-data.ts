import type { CSSProperties } from "react";

export const HERO_IMAGE_WIDTH = 1920;
export const HERO_IMAGE_HEIGHT = 1080;

export type HeroHeadlineLine = {
  before: string;
  highlight: string;
  after: string;
};

export type HeroSlide = {
  id: string;
  headline: [HeroHeadlineLine, HeroHeadlineLine];
  image: string;
  imageAlt: string;
  hue: number;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "tin-hoc",
    headline: [
      { before: "Giỏi ", highlight: "Tin học", after: "" },
      { before: "thật sự.", highlight: "", after: "" },
    ],
    image: "/hero/1.png",
    imageAlt: "Nhóm học sinh Chuyên Tin tự tin với ba lô và laptop trước giờ học",
    hue: 305,
  },
  {
    id: "lo-trinh",
    headline: [
      { before: "Lộ trình ", highlight: "rõ", after: "" },
      { before: "đến ngày thi.", highlight: "", after: "" },
    ],
    image: "/hero/2.png",
    imageAlt: "Học sinh chỉ vào sơ đồ lộ trình học từng bước trên bảng trắng",
    hue: 265,
  },
  {
    id: "mentor",
    headline: [
      { before: "Mentor ", highlight: "chữa lỗi", after: "" },
      { before: "mỗi tuần.", highlight: "", after: "" },
    ],
    image: "/hero/3.png",
    imageAlt: "Mentor ngồi cùng học sinh chữa lỗi trực tiếp trên laptop",
    hue: 292,
  },
  {
    id: "phu-huynh",
    headline: [
      { before: "Phụ huynh ", highlight: "thấy", after: "" },
      { before: "", highlight: "tiến bộ thật", after: "." },
    ],
    image: "/hero/4.png",
    imageAlt: "Phụ huynh cùng con xem báo cáo tiến bộ học tập hằng tuần",
    hue: 250,
  },
];

export function heroHeadlineText(slide: HeroSlide): string {
  return slide.headline
    .map((line) => `${line.before}${line.highlight}${line.after}`)
    .join(" ");
}

export type HeroTrack = {
  name: string;
  short: string;
  sub: string;
  fill: string;
  border: string;
  ink: string;
};

export const heroBadgeTracks: HeroTrack[] = [
  {
    name: "C++",
    short: "C++",
    sub: "Track nền thi chuyên",
    fill: "oklch(0.95 0.035 292)",
    border: "oklch(0.47 0.21 305)",
    ink: "oklch(0.25 0.1 292)",
  },
  {
    name: "Python",
    short: "Py",
    sub: "Tư duy thuật toán",
    fill: "oklch(0.95 0.045 85)",
    border: "oklch(0.78 0.15 85)",
    ink: "oklch(0.34 0.08 80)",
  },
  {
    name: "Mảng",
    short: "A[]",
    sub: "42 bài nền",
    fill: "oklch(0.95 0.04 168)",
    border: "oklch(0.66 0.14 166)",
    ink: "oklch(0.32 0.11 166)",
  },
  {
    name: "Xâu",
    short: "STR",
    sub: "36 bài luyện",
    fill: "oklch(0.96 0.032 225)",
    border: "oklch(0.6 0.13 232)",
    ink: "oklch(0.32 0.1 232)",
  },
  {
    name: "Sắp xếp",
    short: "O(n)",
    sub: "Độ phức tạp",
    fill: "oklch(0.96 0.036 24)",
    border: "oklch(0.64 0.19 24)",
    ink: "oklch(0.4 0.12 24)",
  },
];

export function heroTrackStyle(track: HeroTrack): CSSProperties {
  return {
    "--hex-fill": track.fill,
    "--hex-border": track.border,
    "--hex-ink": track.ink,
  } as CSSProperties;
}
