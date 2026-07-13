export type Stat = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  {
    id: "hoc-sinh",
    value: 480,
    suffix: "+",
    label: "học sinh đã học cùng Chuyên Tin",
  },
  {
    id: "bai-luyen",
    value: 300,
    suffix: "+",
    label: "bài luyện thi chuyên & HSG Tin",
  },
  {
    id: "buoi-mentor",
    value: 1200,
    suffix: "+",
    label: "buổi chữa bài 1:1 cùng mentor",
  },
  {
    id: "truong-chuyen",
    value: 15,
    suffix: "+",
    label: "trường chuyên có đề được đưa vào luyện tập",
  },
];

export const statsVisual = {
  path: "/about-us/seo.png",
  width: 1920,
  height: 1080,
  alt: "Đội ngũ Chuyên Tin cùng học sinh ôn luyện chuyên Tin.",
} as const;
