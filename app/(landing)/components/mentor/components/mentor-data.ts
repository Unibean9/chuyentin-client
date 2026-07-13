export type TeamMember = {
  id: string;
  name: string;
  role: string;
  roleDetail: string;
  achievements: Array<{
    label: string;
    value: string;
  }>;
  achievementNote?: string;
  photo?: string;
};

export const founder: TeamMember = {
  id: "khanh-phuong",
  name: "Lâm Hữu Khánh Phương",
  role: "Nhà sáng lập & CEO",
  roleDetail:
    "Xây dựng lộ trình học và đứng sau cách Chuyên Tin làm việc với phụ huynh mỗi tuần.",
  achievementNote: "Nội dung minh hoạ",
  achievements: [
    { label: "Học vấn", value: "Thạc sĩ Khoa học máy tính" },
    { label: "Giảng dạy", value: "Giảng viên và mentor chuyên Tin" },
    { label: "Chuyên môn", value: "C++, cấu trúc dữ liệu và thuật toán" },
    { label: "Đồng hành", value: "Xây dựng lộ trình, theo sát tiến độ từng tuần" },
  ],
};

export const featuredMentors: TeamMember[] = [
  {
    id: "phuong-hoa",
    name: "Lê Vũ Phương Hòa",
    role: "Mentor",
    roleDetail: "Mentor luyện thi chuyên Tin & HSG Tin học.",
    achievementNote: "Nội dung minh hoạ",
    achievements: [
      { label: "Học vấn", value: "Khoa học máy tính" },
      { label: "Thành tích", value: "Giải HSG Tin học cấp tỉnh" },
      { label: "Kinh nghiệm", value: "Mentor C++ và thuật toán cơ bản" },
    ],
  },
  {
    id: "phu-thinh",
    name: "Trần Phú Thịnh",
    role: "Mentor",
    roleDetail: "Mentor luyện thi chuyên Tin & HSG Tin học.",
    achievementNote: "Nội dung minh hoạ",
    achievements: [
      { label: "Học vấn", value: "Công nghệ thông tin" },
      { label: "Kỳ thi", value: "Từng tham gia HSG Tin học" },
      { label: "Chuyên môn", value: "Mảng, xâu và kỹ năng giải toán" },
    ],
  },
  {
    id: "mentor-03",
    name: "Mentor Chuyên Tin 03",
    role: "Mentor",
    roleDetail: "Mentor luyện thi chuyên Tin & HSG Tin học.",
    achievementNote: "Nội dung minh hoạ",
    achievements: [
      { label: "Học vấn", value: "Khoa học máy tính" },
      { label: "Chuyên môn", value: "Quy hoạch động và đồ thị" },
    ],
  },
  {
    id: "mentor-04",
    name: "Mentor Chuyên Tin 04",
    role: "Mentor",
    roleDetail: "Mentor luyện thi chuyên Tin & HSG Tin học.",
    achievementNote: "Nội dung minh hoạ",
    achievements: [
      { label: "Thành tích", value: "Học sinh giỏi Tin học" },
      { label: "Kinh nghiệm", value: "Luyện đề thi chuyên Tin" },
    ],
  },
  {
    id: "mentor-05",
    name: "Mentor Chuyên Tin 05",
    role: "Mentor",
    roleDetail: "Mentor luyện thi chuyên Tin & HSG Tin học.",
    achievementNote: "Nội dung minh hoạ",
    achievements: [
      { label: "Chuyên môn", value: "C++ và cấu trúc dữ liệu" },
      { label: "Kỳ thi", value: "Tin học trẻ và HSG Tin học" },
    ],
  },
  {
    id: "mentor-06",
    name: "Mentor Chuyên Tin 06",
    role: "Mentor",
    roleDetail: "Mentor luyện thi chuyên Tin & HSG Tin học.",
    achievementNote: "Nội dung minh hoạ",
    achievements: [
      { label: "Kinh nghiệm", value: "Mentor chữa bài theo tuần" },
      { label: "Chuyên môn", value: "Thuật toán và luyện đề bấm giờ" },
    ],
  },
];
