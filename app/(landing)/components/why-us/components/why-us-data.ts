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
    id: "mot-viec-duy-nhat",
    title: "Một chương trình, một mục tiêu duy nhất",
    body: "Chuyên Tin chỉ tập trung vào lộ trình ôn thi chuyên Tin lớp 10 và luyện HSG Tin học THCS. Không mở rộng sang đào tạo công nghệ tổng quát hay lập trình đại trà.",
  },
  {
    id: "bat-dau-tu-test-that",
    title: "Đánh giá năng lực trước khi xếp lớp",
    body: "Mọi lộ trình học đều bắt đầu bằng bài test đầu vào thực tế trên hệ thống. Xếp lớp dựa trên năng lực tư duy, không xếp theo độ tuổi hay khối lớp.",
  },
  {
    id: "khong-nhan-moi-hoc-sinh",
    title: "Tuyển chọn học viên phù hợp",
    body: "Chương trình chỉ nhận những học sinh thực sự phù hợp và có quyết tâm. Chuyên Tin sẵn sàng khuyên học sinh củng cố lại nền tảng toán học hoặc tư duy trước khi tham gia.",
  },
  {
    id: "khong-hua-tuyet-doi",
    title: "Cam kết theo tiến độ thực tế",
    body: "Lộ trình học được điều chỉnh cá nhân hóa theo tiến độ làm bài thực tế của học sinh. Thương hiệu không đưa ra các khẩu hiệu cam kết đỗ phi thực tế để lôi kéo.",
  },
  {
    id: "mentor-that",
    title: "Mentor phản hồi chi tiết 1:1",
    body: "Mentor có chuyên môn trực tiếp đọc và chữa lỗi tư duy thuật toán ẩn sau những dòng code của học sinh, không phụ thuộc hoàn toàn vào hệ thống chấm tự động.",
  },
  {
    id: "bao-cao-trung-thuc",
    title: "Báo cáo tiến độ bằng dữ liệu",
    body: "Cung cấp cho phụ huynh bảng báo cáo học tập tuần trực quan để thấy rõ con đang học những gì và mức độ hoàn thành bài tập ra sao dựa trên dữ liệu thực tế.",
  },
];
