export type TeamMember = {
  id: string;
  name: string;
  initials: string;
  role: string;
  roleDetail: string;
  achievements: Array<{
    label: string;
    value: string;
  }>;
  achievementNote?: string;
  photo?: string;
};

/** Đội ngũ hiển thị trên landing — copy cân độ dài để card không nhảy chiều cao. */
export const mentors: TeamMember[] = [
  {
    id: "khanh-phuong",
    name: "Khánh Phương",
    initials: "KP",
    role: "Nhà sáng lập & CEO",
    roleDetail:
      "Xây dựng lộ trình học và đứng sau cách Chuyên Tin làm việc với phụ huynh mỗi tuần — đồng hành học sinh từ nền tảng thuật toán đến đề thi chuyên Tin.",
    achievementNote: "Nội dung minh hoạ",
    achievements: [
      { label: "Học vấn", value: "Thạc sĩ Khoa học máy tính" },
      { label: "Giảng dạy", value: "Giảng viên mentor chuyên Tin" },
      { label: "Chuyên môn", value: "C++ · cấu trúc dữ liệu · thuật toán" },
    ],
  },
  {
    id: "phuong-hoa",
    name: "Phương Hòa",
    initials: "PH",
    role: "Mentor chuyên Tin",
    roleDetail:
      "Mentor luyện thi chuyên Tin và HSG Tin học — tập trung chữa tư duy giải bài, giúp học sinh nhận lỗi nền tảng trước khi bước vào luyện đề bấm giờ.",
    achievementNote: "Nội dung minh hoạ",
    achievements: [
      { label: "Học vấn", value: "Cử nhân Khoa học máy tính" },
      { label: "Giảng dạy", value: "Mentor C++ thuật toán cơ bản" },
      { label: "Chuyên môn", value: "Nền tảng · tư duy giải bài · luyện đề" },
    ],
  },
  {
    id: "phu-thinh",
    name: "Phú Thịnh",
    initials: "PT",
    role: "Mentor chuyên Tin",
    roleDetail:
      "Mentor luyện thi chuyên Tin và HSG Tin học — đồng hành cấu trúc dữ liệu cơ bản, mảng và xâu, cùng kỹ năng đọc đề chắc trước khi thi chuyên.",
    achievementNote: "Nội dung minh hoạ",
    achievements: [
      { label: "Học vấn", value: "Cử nhân Công nghệ thông tin" },
      { label: "Giảng dạy", value: "Mentor cấu trúc dữ liệu cơ bản" },
      { label: "Chuyên môn", value: "Mảng · xâu · kỹ năng đọc đề" },
    ],
  },
  {
    id: "tuan-vu",
    name: "Tuấn Vũ",
    initials: "TV",
    role: "Mentor chuyên Tin",
    roleDetail:
      "Mentor luyện thi chuyên Tin và HSG Tin học — chuyên sâu quy hoạch động và đồ thị, hướng dẫn học sinh dựng mô hình bài trước khi bắt tay viết code.",
    achievementNote: "Nội dung minh hoạ",
    achievements: [
      { label: "Học vấn", value: "Cử nhân Khoa học máy tính" },
      { label: "Giảng dạy", value: "Mentor luyện đề chuyên theo tuần" },
      { label: "Chuyên môn", value: "Quy hoạch động · đồ thị · mô hình" },
    ],
  },
  {
    id: "thanh-dat",
    name: "Thành Đạt",
    initials: "TD",
    role: "Mentor chuyên Tin",
    roleDetail:
      "Mentor luyện thi chuyên Tin và HSG Tin học — đồng hành luyện đề bấm giờ, giữ thói quen kiểm tra biên và tối ưu lời giải trước từng kỳ thi quan trọng.",
    achievementNote: "Nội dung minh hoạ",
    achievements: [
      { label: "Học vấn", value: "Cử nhân Khoa học máy tính" },
      { label: "Giảng dạy", value: "Mentor luyện đề thi chuyên Tin" },
      { label: "Chuyên môn", value: "C++ · cấu trúc dữ liệu · tối ưu" },
    ],
  },
  {
    id: "quoc-an",
    name: "Quốc An",
    initials: "QA",
    role: "Mentor chuyên Tin",
    roleDetail:
      "Mentor luyện thi chuyên Tin và HSG Tin học — chữa bài chi tiết từng tuần, giúp phụ huynh và học sinh thấy rõ điểm mạnh điểm yếu trước ngày thi.",
    achievementNote: "Nội dung minh hoạ",
    achievements: [
      { label: "Học vấn", value: "Cử nhân Khoa học máy tính" },
      { label: "Giảng dạy", value: "Mentor chữa bài chi tiết theo tuần" },
      { label: "Chuyên môn", value: "Thuật toán · luyện đề · phản hồi" },
    ],
  },
];

/** @deprecated Dùng `mentors` — giữ alias để tránh break import cũ. */
export const founder = mentors[0]!;
export const featuredMentors = mentors.slice(1);
