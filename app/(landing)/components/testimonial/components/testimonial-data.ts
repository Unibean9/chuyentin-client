export type TestimonialSlot = {
  id: string;
  headline: string;
  body: string;
  name: string;
  role: string;
};

/**
 * MOCK content for design preview — names and quotes are fictional
 * placeholders. Photos intentionally left unset (renders as an empty
 * "add photo" frame, same convention as the mentor section) since there is
 * no reliable way to source real Vietnamese-presenting stock photos here.
 * Replace all four with real, consented parent/student testimonials
 * (photo included) before launch.
 */
export const testimonialSlots: TestimonialSlot[] = [
  {
    id: "thu-ha",
    headline: "Cuối cùng cũng thấy rõ con đang học gì, thiếu gì",
    body: "Trước đây mình chỉ biết con đi học và làm bài, chứ không rõ tiến bộ ra sao. Từ khi học ở Chuyên Tin, báo cáo hàng tuần nói rõ con vững phần nào, còn hổng phần nào — mentor chữa tận gốc chứ không chỉ chấm đúng sai.",
    name: "Chị Nguyễn Thu Hà",
    role: "Phụ huynh học sinh lớp 9",
  },
  {
    id: "minh-khoi",
    headline: "Học xong mới hiểu vì sao mình sai, không chỉ biết là sai",
    body: "Trước em hay học tủ, làm đúng bài mẫu nhưng đổi đề là bí. Mentor chỉ ra đúng chỗ tư duy sai chứ không chỉ sửa code, nên giờ gặp đề lạ em vẫn tự tin bắt tay vào giải.",
    name: "Minh Khôi",
    role: "Học sinh lớp 9",
  },
  {
    id: "quoc-bao",
    headline: "Lộ trình rõ ràng, không còn học theo cảm tính",
    body: "Mình thích nhất là biết chính xác con đang ở giai đoạn nào — từ nền tảng C++ đến thuật toán, không phải học lan man theo từng đề rời rạc như trước.",
    name: "Anh Trần Quốc Bảo",
    role: "Phụ huynh học sinh lớp 8",
  },
  {
    id: "thao-vy",
    headline: "Con tự tin hơn hẳn sau đợt ôn thi cùng Chuyên Tin",
    body: "Điều mình ấn tượng nhất là mentor phát hiện đúng lỗ hổng tư duy của con trước kỳ thi — không chỉ luyện thêm bài, mà luyện đúng vào chỗ con còn yếu.",
    name: "Chị Phạm Thảo Vy",
    role: "Phụ huynh học sinh lớp 9",
  },
];
