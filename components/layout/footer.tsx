import Image from "next/image";

const footerGroups = [
  {
    title: "Khóa học",
    links: ["Ôn chuyên Tin 9 lên 10", "HSG Tin THCS", "C++ nền tảng", "Thi thử theo trường"],
  },
  {
    title: "Phụ huynh",
    links: ["Theo dõi tiến độ", "Báo cáo tuần", "Đánh giá đầu vào", "Cam kết học thật"],
  },
  {
    title: "Tài nguyên",
    links: ["Bài luyện mẫu", "Lộ trình C++", "Đề đọc thử", "Câu hỏi thường gặp"],
  },
  {
    title: "Hỗ trợ",
    links: ["Lịch học", "Chính sách học bù", "Quy định lớp mentor"],
  },
  {
    title: "Liên hệ",
    links: ["tuvan@chuyentin.vn", "Facebook Chuyên Tin", "Zalo tư vấn", "Cộng đồng học sinh"],
  },
];

function ZigZag({ className = "" }: { className?: string }) {
  return <span className={`zigzag-mark block text-brand-deep ${className}`} aria-hidden="true" />;
}

export function Footer() {
  return (
    <footer id="tu-van" className="footer-panel text-white">
      <section className="border-t-8 border-[oklch(0.58_0.22_292)] px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-[88rem]">
          <a href="#" className="flex items-center gap-3" aria-label="Chuyên Tin">
            <Image
              src="/logo-white.png"
              alt=""
              width={40}
              height={40}
              className="size-10 shrink-0"
            />
            <span className="font-display text-xl font-black">Chuyên Tin</span>
          </a>
          <h2 className="mt-6 max-w-2xl text-[clamp(1.65rem,3.4vw,2.75rem)] font-black leading-[1.12] tracking-[-0.035em]">
            <span className="block md:whitespace-nowrap">Code practice và mentorship</span>
            <span className="block md:whitespace-nowrap">cho học sinh thi chuyên Tin.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-pretty text-base font-semibold leading-7 text-white/76 md:text-lg md:leading-8">
            Học theo track, luyện bằng bài thật, sửa lỗi theo tuần và để phụ huynh nhìn thấy tiến
            độ bằng dữ liệu dễ hiểu.
          </p>
        </div>
      </section>

      <section className="border-t border-white/14 px-5 py-12 md:px-8">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-lg font-black">{group.title}</h3>
                <ZigZag className="mt-4 text-[oklch(0.74_0.16_166)]" />
                <ul className="mt-5 space-y-3 text-sm font-bold text-white/68">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#tu-van" className="transition-colors hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-4">
            {["fb", "zl", "yt"].map((item) => (
              <a
                key={item}
                href="#tu-van"
                className="grid size-12 place-items-center rounded-full bg-white/14 text-sm font-black uppercase text-white transition-colors hover:bg-white/22"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="mt-12 grid gap-5 border-t border-white/14 pt-12 text-sm font-semibold text-white/66 md:grid-cols-[1fr_auto] md:items-center">
            <p>
              Chuyên Tin là nền tảng ôn luyện và mentor cho học sinh THCS định hướng chuyên Tin.
              Tư vấn lộ trình dựa trên bài làm thật, không cam kết kết quả tuyệt đối.
            </p>
            <p className="font-black text-white">© 2026 Chuyên Tin</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
