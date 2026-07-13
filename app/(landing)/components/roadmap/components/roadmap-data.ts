export type RoadmapStage = {
  id: string;
  shortName: string;
  title: string;
  suggestedGrade: string;
  goal: string;
  exam: string;
};

export const roadmapStages: RoadmapStage[] = [
  {
    id: "lop-1",
    shortName: "Giai đoạn 1",
    title: "Làm quen C++",
    suggestedGrade: "Gợi ý: lớp 6 hoặc học sinh mới bắt đầu",
    goal: "Nắm chắc cú pháp, biến, vòng lặp, rẽ nhánh — hình thành tư duy lập trình tuần tự trước khi chạm vào thuật toán.",
    exam: "Làm quen sân chơi Tin học trẻ qua các bài thi thử nội bộ.",
  },
  {
    id: "lop-2",
    shortName: "Giai đoạn 2",
    title: "Lập trình cơ bản & kỹ năng giải toán",
    suggestedGrade: "Gợi ý: cuối lớp 6 đến lớp 7",
    goal: "Vững hàm, mảng, xâu, số học và đúng định dạng bài thi trên máy — giảm lỗi biên, lỗi tràn số, lỗi định dạng.",
    exam: "Thi Tin học trẻ bảng THCS và bài test phân loại lên Giai đoạn 3.",
  },
  {
    id: "lop-3",
    shortName: "Giai đoạn 3",
    title: "Thuật toán & luyện đề",
    suggestedGrade: "Gợi ý: cuối lớp 7 đến lớp 9",
    goal: "Biết chọn thuật toán theo giới hạn dữ liệu, tối ưu lời giải và luyện đề bấm giờ sát cấu trúc thi thật.",
    exam: "Tin học trẻ cấp tỉnh/thành phố, HSG và thi vào lớp 10 Chuyên Tin.",
  },
];
