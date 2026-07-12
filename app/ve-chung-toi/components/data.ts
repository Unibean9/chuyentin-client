export const aboutUsSeoImage = {
  path: "/about-us/seo.png",
  width: 1920,
  height: 1080,
  type: "image/png",
  alt: "Đội ngũ Chuyên Tin — mentor luyện thi chuyên Tin cùng học sinh.",
} as const;

export const storyNarrative = [
  "Chuyên Tin bắt đầu từ một quan sát đơn giản: nhiều học sinh giải được bài mẫu rất trơn tru, nhưng vào phòng thi lại lúng túng ngay khi đề ra đổi góc nhìn quen thuộc. Phụ huynh thì càng khó hơn — ngoài điểm số cuối kỳ, gần như không có cách nào biết con đang vững phần nào và hổng phần nào.",
  "Từ đó, đội ngũ sáng lập xây một lộ trình rõ ràng thay vì dạy rời rạc theo từng đề: nền tảng thuật toán vững trước, luyện bằng bài thật thay vì học tủ, và để mentor trực tiếp đọc từng lời giải để tìm ra lỗ hổng trong cách nghĩ — không chỉ chấm đúng hay sai.",
  "Hôm nay, mỗi tuần học sinh đi qua một track có cấu trúc: từ C++ nền tảng đến mảng, xâu, quy hoạch động và đồ thị, luôn có mentor chữa bài và báo cáo tiến độ để phụ huynh nhìn thấy con đang thực sự ở đâu.",
] as const;

export type StoryFrame = {
  id: string;
  label: string;
  hint: string;
  photo?: string;
};

export const storyFrames: StoryFrame[] = [
  {
    id: "story-lop-hoc",
    label: "Ảnh lớp học Chuyên Tin",
    hint: "Khung dựng — thêm ảnh sau",
  },
  {
    id: "story-mentor",
    label: "Ảnh mentor chữa bài",
    hint: "Khung dựng — thêm ảnh sau",
  },
];

export const missionVision = {
  mission: {
    title: "Sứ mệnh",
    body: "Giúp học sinh THCS xây nền tư duy thuật toán vững, luyện đề thật và nhận phản hồi cụ thể từ mentor — để phụ huynh nhìn thấy tiến độ thật trước khi quyết định gắn bó dài hạn.",
  },
  vision: {
    title: "Tầm nhìn",
    body: "Trở thành nơi phụ huynh tin tưởng khi con chọn đường chuyên Tin: lộ trình rõ, chữa bài tận gốc, báo cáo bằng dữ liệu — không cam kết đậu tuyệt đối, chỉ đồng hành bằng sự cụ thể.",
  },
} as const;

export type Milestone = {
  id: string;
  phase: string;
  title: string;
  body: string;
  frameLabel: string;
  photo?: string;
};

export const milestones: Milestone[] = [
  {
    id: "lop-hoc-nho",
    phase: "Khởi đầu",
    title: "Từ một lớp học nhỏ",
    body: "Bắt đầu với một nhóm học sinh ôn thi chuyên Tin, dạy trực tiếp và điều chỉnh cách dạy theo từng buổi.",
    frameLabel: "Ảnh cột mốc khởi đầu",
  },
  {
    id: "lo-trinh",
    phase: "Lộ trình",
    title: "Xây lộ trình có cấu trúc",
    body: "Chuẩn hoá track từ nền tảng C++ đến thuật toán nâng cao, thay vì dạy rời rạc theo từng đề lẻ.",
    frameLabel: "Ảnh lộ trình học",
  },
  {
    id: "he-thong-luyen",
    phase: "Hệ thống",
    title: "Đưa bài luyện thật vào hệ thống",
    body: "Xây hệ thống luyện tập với hàng trăm bài theo dạng đề thi chuyên và HSG, chấm bài tự động.",
    frameLabel: "Ảnh hệ thống luyện tập",
  },
  {
    id: "mentor-1-1",
    phase: "Mentor",
    title: "Mentor chữa bài 1:1",
    body: "Mỗi lời giải được mentor đọc và chỉ ra đúng điểm nghẽn trong cách nghĩ, không chỉ báo đúng hay sai.",
    frameLabel: "Ảnh buổi chữa bài",
  },
  {
    id: "mo-rong",
    phase: "Mở rộng",
    title: "Đồng hành cùng nhiều trường chuyên",
    body: "Mở rộng bài luyện theo đề của nhiều trường chuyên trên cả nước, cùng báo cáo tiến độ cho phụ huynh mỗi tuần.",
    frameLabel: "Ảnh đề trường chuyên",
  },
];

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  roleDetail: string;
  photo?: string;
};

export const founder: TeamMember = {
  id: "khanh-phuong",
  name: "Lâm Hữu Khánh Phương",
  role: "Nhà sáng lập & CEO",
  roleDetail:
    "Xây dựng lộ trình học và đứng sau cách Chuyên Tin làm việc với phụ huynh mỗi tuần.",
};

export const mentorTeam: TeamMember[] = [
  {
    id: "phuong-hoa",
    name: "Lê Vũ Phương Hòa",
    role: "Mentor",
    roleDetail: "Mentor luyện thi chuyên Tin & HSG Tin học.",
  },
  {
    id: "phu-thinh",
    name: "Trần Phú Thịnh",
    role: "Mentor",
    roleDetail: "Mentor luyện thi chuyên Tin & HSG Tin học.",
  },
  {
    id: "tuan-vu",
    name: "Uông Tuấn Vũ",
    role: "Mentor",
    roleDetail: "Mentor luyện thi chuyên Tin & HSG Tin học.",
  },
  {
    id: "thanh-dat",
    name: "Ngô Thành Đạt",
    role: "Mentor",
    roleDetail: "Mentor luyện thi chuyên Tin & HSG Tin học.",
  },
  {
    id: "mentor-6-cho-ten",
    name: "Cần bổ sung tên",
    role: "Mentor",
    roleDetail: "Mentor luyện thi chuyên Tin & HSG Tin học.",
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
