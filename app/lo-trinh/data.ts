export type CurriculumStage = {
  id: "lop-1" | "lop-2" | "lop-3";
  shortName: string;
  title: string;
  suggestedGrade: string;
  goal: string;
  outcome: string;
  exam: string;
  modules: Array<{ title: string; content: string; practice: string }>;
};

export const curriculumStages: CurriculumStage[] = [
  {
    id: "lop-1",
    shortName: "Lớp 1",
    title: "Làm quen C++",
    suggestedGrade: "Gợi ý: lớp 6 hoặc học sinh mới bắt đầu",
    goal: "Nắm chắc cú pháp, thiết lập môi trường và hình thành tư duy lập trình tuần tự.",
    outcome: "Tự viết chương trình C++ hoàn chỉnh cho các bài toán tính toán, điều kiện và vòng lặp cơ bản.",
    exam: "Làm quen sân chơi Tin học trẻ qua các bài thi thử nội bộ.",
    modules: [
      { title: "Môi trường và chương trình đầu tiên", content: "Cài đặt công cụ, cấu trúc chương trình C++, #include, namespace và hàm main.", practice: "Cài môi trường và viết chương trình nhập — xuất đầu tiên." },
      { title: "Biến và kiểu dữ liệu", content: "Biến, hằng số, int, double, char, bool và long long để tránh tràn số.", practice: "Nhập dữ liệu, tính toán và so sánh phạm vi kiểu số." },
      { title: "Phép toán và toán tử", content: "Toán tử số học, gán, so sánh và logic trong biểu thức.", practice: "Đổi đơn vị, tính biểu thức và kiểm tra điều kiện kết hợp." },
      { title: "Cấu trúc rẽ nhánh", content: "if, if...else, chuỗi điều kiện và switch...case.", practice: "Phân loại dữ liệu, tìm giá trị lớn nhất và kiểm tra chẵn lẻ." },
      { title: "Vòng lặp cơ bản", content: "for, while và do...while; chọn vòng lặp phù hợp theo điều kiện bài toán.", practice: "Tính tổng dãy, liệt kê số và dựng bảng cửu chương." },
    ],
  },
  {
    id: "lop-2",
    shortName: "Lớp 2",
    title: "Lập trình cơ bản và kỹ năng giải toán",
    suggestedGrade: "Gợi ý: cuối lớp 6 đến lớp 7",
    goal: "Viết code chắc với hàm, mảng, xâu và đúng định dạng bài thi trên máy.",
    outcome: "Giải chắc bài mảng, xâu và số học; giảm lỗi biên, lỗi tràn số và lỗi định dạng file.",
    exam: "Thi Tin học trẻ bảng THCS và bài test phân loại lên Lớp 3.",
    modules: [
      { title: "Hàm và chia nhỏ bài toán", content: "Hàm trả về, hàm void, tham số, biến cục bộ và biến toàn cục.", practice: "Viết hàm tính giai thừa, ƯCLN và BCNN." },
      { title: "Đọc và ghi tệp tin", content: "fstream, freopen và định dạng dữ liệu .INP/.OUT thường dùng trong kỳ thi.", practice: "Đọc đề mẫu và xuất kết quả đúng tuyệt đối theo định dạng." },
      { title: "Mảng một chiều", content: "Chỉ số, duyệt mảng, thống kê, tìm kiếm, đảo, chèn và xoá phần tử.", practice: "Xử lý danh sách điểm, tìm cực trị và phần tử thỏa điều kiện." },
      { title: "Xâu ký tự", content: "string, length, erase, find, getline và các kỹ thuật chuẩn hoá xâu.", practice: "Đếm từ, chuẩn hoá câu và kiểm tra xâu đối xứng." },
      { title: "Số học trong lập trình", content: "Số nguyên tố, ƯCLN/BCNN, Fibonacci, số chính phương và phân tích thừa số.", practice: "Xây bộ hàm số học và giải bài tổng hợp có giới hạn dữ liệu." },
      { title: "Sắp xếp dữ liệu", content: "Sử dụng sort() để tổ chức dữ liệu trước khi tìm kiếm hoặc xử lý.", practice: "Bài toán tính tiền điện, ốc sên và liệt kê số đặc biệt." },
    ],
  },
  {
    id: "lop-3",
    shortName: "Lớp 3",
    title: "Thuật toán và luyện thi",
    suggestedGrade: "Gợi ý: cuối lớp 7 đến lớp 9",
    goal: "Biết chọn thuật toán theo giới hạn, tối ưu lời giải và luyện đề sát cấu trúc thi thật.",
    outcome: "Giải đề mẫu trong thời gian quy định và có chiến lược kiểm thử, sửa lỗi, phân bổ thời gian.",
    exam: "Tin học trẻ cấp tỉnh/thành phố, HSG và thi vào lớp 10 Chuyên Tin.",
    modules: [
      { title: "Độ phức tạp và kỹ thuật nền", content: "Big-O, Prefix Sum, mảng hiệu, Two Pointers và Bitwise cơ bản.", practice: "Truy vấn tổng đoạn, tìm cặp và khoảng thỏa điều kiện." },
      { title: "Sắp xếp và tìm kiếm nâng cao", content: "Binary Search và Binary Search on Answer trên miền kết quả.", practice: "Tìm giá trị tối ưu nhỏ nhất hoặc lớn nhất thỏa điều kiện." },
      { title: "Đệ quy và quay lui", content: "Sinh tập con, hoán vị, tổ hợp và mô hình Backtracking.", practice: "N quân hậu và các bài liệt kê cấu hình." },
      { title: "Toán học và lý thuyết số", content: "Euclid, lũy thừa nhị phân, sàng nguyên tố, modulo và tổ hợp.", practice: "Sàng đến 10⁶ và tính lũy thừa modulo nhanh." },
      { title: "Tham lam và quy hoạch động", content: "Greedy, trạng thái DP, Knapsack, LIS và Palindrome.", practice: "Xếp lịch, cái túi 0/1 và dãy con tăng dài nhất." },
      { title: "Đồ thị cơ bản", content: "Danh sách kề, BFS, DFS, liên thông và đường đi ngắn không trọng số.", practice: "Mê cung, đếm vùng và tìm đường trên lưới." },
      { title: "Kỹ năng thi đấu và luyện đề", content: "Stress test, Fast I/O, Online Judge và chiến thuật làm bài bấm giờ.", practice: "Thi thử định kỳ, ghi nhật ký lỗi và đối chiếu hai lời giải." },
    ],
  },
];

export const examTracks = [
  {
    id: "tin-hoc-tre",
    title: "Tin học trẻ",
    description: "Ưu tiên code chắc, tư duy thuật toán vừa phải và đúng định dạng bài thi.",
    stages: [
      ["Ôn nền tảng", "Sau Lớp 2", "Rà soát C++, mảng, xâu, hàm và File I/O; bài test tổng hợp đạt từ 80%."],
      ["Ôn chuyên đề", "Trong Lớp 3", "Prefix Sum, Two Pointers, tìm kiếm, đệ quy cơ bản và số học."],
      ["Luyện đề", "Trước thi 2–3 tháng", "Hoàn thành 5–8 đề bấm giờ, có nhật ký lỗi sai cá nhân."],
      ["Nước rút", "Trước thi 2–3 tuần", "Ôn lỗi lặp lại, Fast I/O, đọc đề nhanh và giữ tâm lý ổn định."],
    ],
  },
  {
    id: "chuyen-tin",
    title: "Chuyên Tin và HSG",
    description: "Độ phủ chuyên đề rộng hơn, yêu cầu phân tích độ phức tạp và luyện đề sát trường dự thi.",
    stages: [
      ["Củng cố kỹ thuật", "Đầu Lớp 3", "Prefix Sum, Two Pointers, Bitwise và Binary Search; cài đặt nhanh, ít lỗi."],
      ["Chuyên đề mũi nhọn", "Giữa Lớp 3", "Backtracking, lý thuyết số, Greedy, DP và đồ thị cơ bản."],
      ["Luyện cấu trúc đề", "Mục 7", "Hoàn thành 8–12 đề thi thử, Stress test và luyện đều trên Online Judge."],
      ["Nước rút", "Trước thi 2–4 tuần", "Ôn phổ đề của trường, chọn thứ tự làm bài và chắc điểm dễ–trung bình."],
    ],
  },
] as const;

export const resourceGroups = [
  { title: "Học kiến thức", items: ["VNOI Wiki / Roadmap", "Tài liệu bồi dưỡng HSG Tin THCS", "Wikibooks C++"] },
  { title: "Luyện theo chuyên đề", items: ["VietJack — bài tập C++", "28Tech Blog", "Viblo — series lập trình thi đấu"] },
  { title: "Luyện đề và chấm bài", items: ["Đề Tin học trẻ các năm", "VNOI Online Judge", "Đề chính thức của trường và Sở GD-ĐT"] },
] as const;
