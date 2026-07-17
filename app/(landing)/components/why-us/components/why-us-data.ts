export type WhyUsItem = {
  id: string;
  title: string;
  body: string;
};

export type WhyUsMobileStory = {
  title: string;
  intro: string;
  points: string[];
};

export const whyUsMobileStories = {
  photoA: {
    title: "Chương trình chuyên biệt, chọn lọc học viên",
    intro:
      "Chương trình chỉ tập trung ôn thi chuyên Tin và HSG Tin học. Học sinh được đánh giá năng lực tư duy thực tế và tuyển chọn kỹ lưỡng đầu vào.",
    points: [
      "Một chương trình, một mục tiêu ôn luyện chuyên biệt",
      "Đánh giá năng lực tư duy thực tế trước khi xếp lớp",
      "Tuyển chọn những học viên phù hợp và có quyết tâm học thật",
    ],
  },
  photoB: {
    title: "Mentor hỗ trợ 1:1 & Cam kết thực tế",
    intro:
      "Không chỉ chấm bài tự động, mentor đồng hành sửa từng lỗi tư duy thuật toán. Lộ trình được cá nhân hóa theo tiến độ làm bài thực tế.",
    points: [
      "Mentor chuyên môn đọc và chữa lỗi chi tiết từng dòng code",
      "Lộ trình học điều chỉnh linh hoạt theo tiến độ thực tế",
      "Nói không với các cam kết đỗ 100% phi thực tế để lôi kéo",
    ],
  },
  photoC: {
    title: "Báo cáo tiến độ trung thực bằng dữ liệu",
    intro:
      "Phụ huynh dễ dàng theo dõi tiến độ học tập và hiệu quả làm bài của con hàng tuần dựa trên dữ liệu báo cáo trực quan, rõ ràng.",
    points: [
      "Minh bạch và trung thực về kết quả làm bài của con",
      "Báo cáo tiến độ và mức độ hoàn thành bài tập cập nhật theo tuần",
      "Giúp phụ huynh nhìn thấy sự tiến bộ qua các con số cụ thể",
    ],
  },
} satisfies Record<string, WhyUsMobileStory>;

export const whyUsItems: WhyUsItem[] = [
  {
    id: "lo-trinh-bam-sat-de-thi",
    title: "Lộ trình bám sát đề thi Chuyên",
    body: "Học đúng trọng tâm, ôn đúng cấu trúc, tối ưu cơ hội đỗ Chuyên Tin.",
  },
  {
    id: "giang-vien-giau-kinh-nghiem",
    title: "Giảng viên giàu kinh nghiệm",
    body: "Đội ngũ chuyên môn cao, đồng hành giúp học sinh tiến bộ từng buổi học.",
  },
  {
    id: "ca-nhan-hoa-lo-trinh",
    title: "Cá nhân hóa lộ trình học",
    body: "Đánh giá năng lực, phân nhóm phù hợp và theo sát từng học sinh.",
  },
  {
    id: "phat-trien-tu-duy-thuat-toan",
    title: "Phát triển tư duy thuật toán",
    body: "Rèn luyện tư duy logic và kỹ năng giải quyết bài toán thay vì học thuộc.",
  },
  {
    id: "luyen-de-thi-thu",
    title: "Luyện đề và thi thử thường xuyên",
    body: "Làm quen áp lực phòng thi với hệ thống đề chất lượng và chữa bài chi tiết.",
  },
  {
    id: "dong-hanh-den-ngay-thi",
    title: "Đồng hành đến ngày thi",
    body: "Theo dõi tiến độ, hỗ trợ ngoài giờ và sát cánh cùng học sinh trên hành trình chinh phục Chuyên Tin.",
  },
];
