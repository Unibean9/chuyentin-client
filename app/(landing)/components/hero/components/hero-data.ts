export const HERO_IMAGE_WIDTH = 1920;
export const HERO_IMAGE_HEIGHT = 1080;

export type HeroSlide = {
  id: string;
  image: string;
  imageAlt: string;
  hue: number;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "tin-hoc",
    image: "/hero/1.png",
    imageAlt: "Nhóm học sinh Chuyên Tin tự tin với ba lô và laptop trước giờ học",
    hue: 305,
  },
  {
    id: "lo-trinh",
    image: "/hero/2.png",
    imageAlt: "Học sinh chỉ vào sơ đồ lộ trình học từng bước trên bảng trắng",
    hue: 265,
  },
  {
    id: "mentor",
    image: "/hero/3.png",
    imageAlt: "Mentor ngồi cùng học sinh chữa lỗi trực tiếp trên laptop",
    hue: 292,
  },
];
