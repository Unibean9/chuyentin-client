export type RoadmapStage = {
  id: string;
  shortName: string;
  title: string;
  level: string;
  topics: string[];
  goal: string;
  exam: string;
};

export const roadmapStages: RoadmapStage[] = [
  {
    id: "foundation",
    shortName: "Giai đoạn 1",
    title: "Làm quen C++",
    level: "Mới bắt đầu",
    topics: ["Cú pháp C++", "Biến", "Vòng lặp", "Rẽ nhánh"],
    goal: "Nắm chắc cú pháp, biến, vòng lặp, rẽ nhánh — hình thành tư duy lập trình tuần tự trước khi chạm vào thuật toán.",
    exam: "Làm quen sân chơi Tin học trẻ qua các bài thi thử nội bộ.",
  },
  {
    id: "basic",
    shortName: "Giai đoạn 2",
    title: "Lập trình cơ bản & kỹ năng giải toán",
    level: "Cơ bản",
    topics: ["Hàm", "Mảng", "Xâu", "Số học"],
    goal: "Vững hàm, mảng, xâu, số học và đúng định dạng bài thi trên máy — giảm lỗi biên, lỗi tràn số, lỗi định dạng.",
    exam: "Thi Tin học trẻ bảng THCS và bài test phân loại lên Giai đoạn 3.",
  },
  {
    id: "advanced",
    shortName: "Giai đoạn 3",
    title: "Thuật toán & luyện đề",
    level: "Nâng cao",
    topics: ["Tham lam", "Quy hoạch động", "Đồ thị", "Luyện đề"],
    goal: "Biết chọn thuật toán theo giới hạn dữ liệu, tối ưu lời giải và luyện đề bấm giờ sát cấu trúc thi thật.",
    exam: "Tin học trẻ cấp tỉnh/thành phố, HSG và thi vào lớp 10 Chuyên Tin.",
  },
];
