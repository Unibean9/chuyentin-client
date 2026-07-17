export type RoadmapStage = {
  id: string;
  step: number;
  title: string;
  /** Tên gốc tiếng Anh, chỉ hiện nhỏ như phụ đề ở khối chi tiết — không hiện trên pin. */
  titleEn: string;
  tagline: string;
  shortVn: string;
  description: string;
  content: string[];
  /** Vị trí mốc trên ảnh lo-trinh.png, tính theo % (đo từ pixel thật, ảnh gốc 1920x1080). */
  left: number;
  top: number;
};

export const roadmapStages: RoadmapStage[] = [
  {
    id: "computational-thinking",
    step: 1,
    title: "Tư duy tính toán",
    titleEn: "Computational Thinking",
    tagline: "Nghĩ trước, code sau",
    shortVn: "Tư duy giải quyết vấn đề trước khi chạm code.",
    description:
      "Rèn 4 kỹ năng nền: chia nhỏ vấn đề, nhận diện quy luật, trừu tượng hoá và thiết kế thuật toán — trước khi chạm vào code.",
    content: [
      "Tư duy logic & giải quyết vấn đề",
      "Tư duy tính toán",
      "Lưu đồ & mã giả",
      "Tư duy thuật toán",
      "Toán học nền cho lập trình",
    ],
    left: 13.5,
    top: 59.4,
  },
  {
    id: "programming-foundations",
    step: 2,
    title: "Lập trình nền tảng",
    titleEn: "Programming Foundations",
    tagline: "Biến ý tưởng thành code",
    shortVn: "Biến thuật toán thành chương trình C/C++ thật.",
    description:
      "Biến thuật toán thành chương trình bằng C/C++. Làm chủ cú pháp, cấu trúc dữ liệu cơ bản và kỹ năng debug.",
    content: [
      "Biến & kiểu dữ liệu",
      "Cấu trúc rẽ nhánh",
      "Vòng lặp",
      "Hàm",
      "Mảng & xâu",
      "Gỡ lỗi cơ bản",
    ],
    left: 20.3,
    top: 56.1,
  },
  {
    id: "algorithms-data-structures",
    step: 3,
    title: "Thuật toán & cấu trúc dữ liệu",
    titleEn: "Algorithms & Data Structures",
    tagline: "Làm chủ thuật toán cốt lõi",
    shortVn: "Thuật toán và cấu trúc dữ liệu trọng tâm thi chuyên.",
    description:
      "Học các thuật toán và cấu trúc dữ liệu xuất hiện nhiều trong các kỳ thi Chuyên Tin và HSG.",
    content: [
      "Sắp xếp & tìm kiếm",
      "STL C++",
      "Đệ quy",
      "Tìm kiếm nhị phân",
      "Tham lam",
      "Quy hoạch động",
      "Đồ thị",
      "Cây",
      "Toán học & lý thuyết số",
    ],
    left: 37.5,
    top: 48.1,
  },
  {
    id: "competitive-programming",
    step: 4,
    title: "Kỹ năng thi đấu",
    titleEn: "Competitive Programming Skills",
    tagline: "Nghĩ nhanh. Code chuẩn.",
    shortVn: "Tối ưu lời giải, xử lý bài trong thời gian giới hạn.",
    description:
      "Rèn luyện kỹ năng thi đấu, tối ưu lời giải và chiến lược xử lý bài trong thời gian giới hạn.",
    content: [
      "Chiến thuật thi đấu",
      "Phân tích độ phức tạp",
      "Kỹ thuật tối ưu",
      "Dạng bài ICPC/VOI",
      "Chữa & tối ưu lời giải",
      "Thi đấu thử trực tuyến",
    ],
    left: 54.7,
    top: 40.1,
  },
  {
    id: "mock-exams",
    step: 5,
    title: "Luyện đề & thi thử",
    titleEn: "Mock Exams & Intensive Practice",
    tagline: "Luyện như thi thật",
    shortVn: "Luyện đề, mô phỏng kỳ thi thật để về đích.",
    description:
      "Luyện đề theo từng cấp độ và mô phỏng các kỳ thi thật để đạt kết quả cao.",
    content: [
      "Bài tập theo chuyên đề",
      "Đề thi các năm trước",
      "Thi thử hàng tuần",
      "Mô phỏng thi đầy đủ",
      "Phân tích kết quả học tập",
      "Ôn lại điểm yếu cá nhân hoá",
    ],
    left: 71.9,
    top: 32.2,
  },
];

/**
 * Đường tâm dải ruy băng trong lo-trinh.png, đo trực tiếp từ pixel (alpha > 60)
 * theo từng cột x = 40..1380, ảnh gốc 1920x1080. Dùng để vẽ đường nối SVG
 * bám sát đúng hình dải ruy băng thay vì nối thẳng 5 điểm.
 */
export const roadmapPathPoints: Array<[number, number]> = [
  [60, 678.5], [80, 658.5], [100, 656], [120, 653.5], [140, 653.5], [160, 668],
  [180, 662.5], [200, 657.5], [220, 652], [240, 646.5], [260, 641.5], [280, 635.5],
  [300, 631], [320, 625], [340, 619.5], [360, 614.5], [380, 609], [400, 604],
  [420, 598.5], [440, 593], [460, 588], [480, 582.5], [500, 577.5], [520, 572],
  [540, 566.5], [560, 561.5], [580, 556], [600, 551], [620, 545.5], [640, 540.5],
  [660, 535.5], [680, 530], [700, 525], [720, 519.5], [740, 514.5], [760, 509],
  [780, 504.5], [800, 499], [820, 493.5], [840, 488.5], [860, 483], [880, 477.5],
  [900, 472.5], [920, 467], [940, 462], [960, 456.5], [980, 451], [1000, 446],
  [1020, 440.5], [1040, 435.5], [1060, 430.5], [1080, 425], [1100, 419.5],
  [1120, 414], [1140, 408.5], [1160, 403], [1180, 398.5], [1200, 392.5],
  [1220, 387.5], [1240, 382], [1260, 376.5], [1280, 371.5], [1300, 366],
  [1320, 361], [1340, 355.5], [1360, 350], [1380, 348],
];

export const roadmapImage = {
  src: "/lo-trinh/lo-trinh.png",
  width: 1920,
  height: 1080,
  alt: "Hướng phát triển của học sinh Chuyên Tin: từ nền tảng tư duy đến ngày đậu vào trường chuyên",
} as const;
