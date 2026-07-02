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
    title: "Một chương trình, một mục tiêu thi",
    intro:
      "Chuyên Tin triển khai lộ trình thi chuyên Tin và luyện HSG Tin học — không mở rộng sang đào tạo công nghệ tổng quát.",
    points: [
      "Bắt đầu từ đánh giá năng lực đầu vào",
      "Dành cho học sinh THCS đã xác định định hướng thi",
    ],
  },
  photoB: {
    title: "Mentor chuyên môn, phản hồi chi tiết",
    intro:
      "Mỗi bài nộp được mentor đọc và góp ý cụ thể — học viên nắm rõ điểm yếu và hướng cải thiện.",
    points: [
      "Lộ trình điều chỉnh theo kết quả thực hành",
      "Không cam kết kết quả tuyệt đối cho mọi học viên",
    ],
  },
  photoC: {
    title: "Môi trường học tập tập trung",
    intro:
      "Không gian lớp học quy mô nhỏ, lộ trình minh bạch — phụ huynh theo dõi được tiến độ trước khi ghi danh.",
    points: ["Đánh giá trung thực nếu học viên cần củng cố nền tảng trước khi vào lộ trình chính"],
  },
} satisfies Record<string, WhyUsMobileStory>;

export const whyUsItems: WhyUsItem[] = [
  {
    id: "mot-viec-duy-nhat",
    title: "Một chương trình, một mục tiêu thi",
    body: "Chuyên Tin tập trung vào lộ trình thi chuyên Tin và luyện HSG Tin học — không triển khai đào tạo công nghệ tổng quát.",
  },
  {
    id: "bat-dau-tu-test-that",
    title: "Đánh giá năng lực trước khi xếp lớp",
    body: "Mọi lộ trình học bắt đầu từ bài kiểm tra đầu vào — căn cứ năng lực thực tế, không xếp lớp theo khối hay độ tuổi.",
  },
  {
    id: "khong-nhan-moi-hoc-sinh",
    title: "Tuyển chọn học viên phù hợp",
    body: "Chương trình dành cho học sinh THCS lớp 8-9 đã xác định hướng thi chuyên Tin hoặc luyện HSG. Bài test đầu vào giúp xác nhận mức độ phù hợp.",
  },
  {
    id: "khong-hua-tuyet-doi",
    title: "Cam kết theo tiến độ, không hứa tuyệt đối",
    body: "Lộ trình được điều chỉnh liên tục theo kết quả bài làm thực tế — không áp dụng một kịch bản chung cho mọi học viên.",
  },
  {
    id: "mentor-that",
    title: "Mentor chuyên môn, phản hồi chi tiết",
    body: "Mỗi bài nộp được mentor có chuyên môn đọc và phản hồi — không giới hạn ở kết quả đúng/sai từ hệ thống chấm tự động.",
  },
  {
    id: "san-sang-noi-chua-san-sang",
    title: "Đánh giá trung thực về sẵn sàng",
    body: "Khi bài kiểm tra cho thấy học viên cần củng cố nền tảng, Chuyên Tin tư vấn thẳng thắng thay vì tiếp nhận rồi điều chỉnh sau.",
  },
];
