export const aboutUsSeoImage = {
  path: "/about-us/seo.png",
  width: 1920,
  height: 1080,
  type: "image/png",
  alt: "Đội ngũ Chuyên Tin — mentor luyện thi chuyên Tin cùng học sinh.",
} as const;

export const storyStops = [
  {
    id: "cau-chuyen",
    kicker: "Câu chuyện",
    title: "Vì sao Chuyên Tin ra đời",
    body: "Nhiều học sinh giải được bài mẫu nhưng vào phòng thi lại rối vì đề ra khác góc nhìn quen thuộc. Phụ huynh thì khó biết con đang mạnh phần nào, yếu phần nào ngoài điểm số cuối kỳ. Chuyên Tin bắt đầu từ hai câu hỏi đó: dạy sao để con hiểu bản chất thay vì học tủ, và báo cáo sao để phụ huynh nhìn thấy tiến độ thật.",
  },
  {
    id: "doi-ngu",
    kicker: "Đội ngũ",
    title: "Người trực tiếp chữa bài cho con",
    body: "Mỗi mentor từng thi và dạy chuyên Tin, đọc code không chỉ để chấm đúng/sai mà để thấy cách con tư duy. Phần dưới là những người sẽ đồng hành cùng con mỗi tuần.",
  },
  {
    id: "cach-day",
    kicker: "Hôm nay",
    title: "Cách chúng tôi dạy mỗi tuần",
    body: "Track đi từ nền tảng C++, mảng, xâu đến quy hoạch động, đồ thị và đề tổng hợp. Con làm bài thật trên hệ thống, mentor đọc lời giải và chỉ ra đúng điểm nghẽn, báo cáo tuần ghi rõ phần nào đã chắc và phần nào cần luyện thêm.",
  },
] as const;

export type Mentor = {
  id: string;
  name: string;
  role: string;
  credential: string;
  years: string;
  quote: string;
  photo?: string;
};

export const mentors: Mentor[] = [
  {
    id: "mentor-1",
    name: "Cần cập nhật tên",
    role: "Mentor thuật toán & cấu trúc dữ liệu",
    credential: "HSG Tin học cấp tỉnh, cựu học sinh chuyên Tin",
    years: "6 năm dạy luyện thi chuyên",
    quote: "Con hiểu vì sao lời giải đúng thì mới nhớ lâu — không phải vì học thuộc cách giải mẫu.",
  },
  {
    id: "mentor-2",
    name: "Cần cập nhật tên",
    role: "Mentor chữa bài & phân tích lỗi",
    credential: "Cựu thí sinh đội tuyển HSG Quốc gia",
    years: "5 năm dạy luyện thi chuyên",
    quote: "Bài qua test mẫu chưa chắc chắc tay — việc của mentor là tìm ra lỗ hổng trước ngày thi.",
  },
  {
    id: "mentor-3",
    name: "Cần cập nhật tên",
    role: "Mentor lộ trình & báo cáo phụ huynh",
    credential: "Thạc sĩ Khoa học máy tính, 8 năm giảng dạy",
    years: "8 năm dạy luyện thi chuyên",
    quote: "Phụ huynh không cần đọc code, chỉ cần một báo cáo nói đúng con đang ở đâu.",
  },
];

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

export const values = [
  {
    title: "Nói thật trước khi bán",
    body: "Chúng tôi nói rõ con đang thiếu gì trước khi mời đăng ký — không cam kết đậu tuyệt đối.",
  },
  {
    title: "Lộ trình nhìn thấy được",
    body: "Nền tảng, luyện tập, chữa bài và thi thử nối với nhau rõ ràng, không học nhảy cóc theo cảm hứng.",
  },
  {
    title: "Báo cáo bằng dữ liệu thật",
    body: "Phụ huynh thấy con làm bài nào, sai ở đâu, tuần tới cần luyện phần nào — không chỉ một câu nhận xét chung.",
  },
] as const;
