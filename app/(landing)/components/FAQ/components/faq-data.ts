export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "hinh-thuc-hoc",
    question: "Con học trực tiếp hay online?",
    answer:
      "Bài luyện được làm trên hệ thống online, học sinh luyện tập bất cứ lúc nào. Buổi chữa bài cùng mentor được sắp lịch cố định theo tuần.",
  },
  {
    id: "chua-biet-lap-trinh",
    question: "Con chưa học lập trình bao giờ, có theo kịp không?",
    answer:
      "Buổi test đánh giá đầu vào dùng để đo đúng điểm xuất phát của con, kể cả khi con chưa từng học lập trình. Mentor xây lộ trình bắt đầu từ đúng nền tảng con đang có, không xếp chung một lộ trình cho tất cả học sinh.",
  },
  {
    id: "mentor-la-ai",
    question: "Mentor của Chuyên Tin là ai?",
    answer:
      "Mentor là người trực tiếp đọc và chữa từng bài làm của con theo tuần, không qua trợ giảng trung gian. Phụ huynh trao đổi trực tiếp với đúng mentor phụ trách trong suốt quá trình học.",
  },
  {
    id: "theo-doi-tien-do",
    question: "Phụ huynh theo dõi tiến độ của con thế nào?",
    answer:
      "Mỗi tuần phụ huynh nhận báo cáo nói rõ con đã làm bài nào, còn hổng ở đâu và tuần tới cần luyện phần nào — không cần đọc code vẫn nắm được tình hình học của con.",
  },
  {
    id: "chua-tien-bo",
    question: "Nếu học một thời gian mà con chưa thấy tiến bộ thì sao?",
    answer:
      "Chuyên Tin không cam kết một kết quả tuyệt đối, nhưng lộ trình luôn dựa trên bài làm thật của con và được mentor điều chỉnh khi thấy chưa hiệu quả — phụ huynh có thể trao đổi trực tiếp để thay đổi hướng luyện tập bất cứ lúc nào.",
  },
  {
    id: "hoc-phi-lich-hoc",
    question: "Học phí và lịch học như thế nào?",
    answer:
      "Học phí và lịch học cụ thể được tư vấn riêng theo lộ trình phù hợp với năng lực của con sau buổi đánh giá đầu vào — để lại thông tin, đội ngũ Chuyên Tin sẽ liên hệ tư vấn chi tiết.",
  },
];
