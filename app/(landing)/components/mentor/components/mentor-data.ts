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

export const featuredMentors: TeamMember[] = [
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
];
