export const HERO_IMAGE_WIDTH = 2400;
export const HERO_IMAGE_HEIGHT = 1350;

export type HeroSlide = {
  id: string;
  image: string;
  imageAlt: string;
  hue: number;
  backdrop: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "tin-hoc",
    image: "/hero/1.png",
    imageAlt: "Nhóm học sinh Chuyên Tin tự tin với ba lô và laptop trước giờ học",
    hue: 305,
    backdrop: "linear-gradient(110deg, oklch(0.42 0.19 277), oklch(0.48 0.22 285))",
  },
  {
    id: "lo-trinh",
    image: "/hero/2.png",
    imageAlt: "Nhóm học sinh cùng mentor luyện thuật toán và tư duy chuyên Tin",
    hue: 265,
    backdrop: "linear-gradient(90deg, oklch(1 0 0) 0 48%, oklch(0.95 0.01 72) 72%, oklch(0.88 0.09 86))",
  },
  {
    id: "mentor",
    image: "/hero/3.png",
    imageAlt: "Mentor ngồi cùng học sinh chữa lỗi trực tiếp trên laptop",
    hue: 292,
    backdrop: "linear-gradient(110deg, oklch(0.25 0.17 270), oklch(0.31 0.21 292))",
  },
];
