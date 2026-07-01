import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

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
    links: ["Liên hệ tư vấn", "Lịch học", "Chính sách học bù", "Quy định lớp mentor"],
  },
  {
    title: "Liên hệ",
    links: ["tuvan@chuyentin.vn", "Facebook Chuyên Tin", "Zalo tư vấn", "Cộng đồng học sinh"],
  },
];

const footerTracks = [
  "C++",
  "Python",
  "Mảng",
  "Xâu",
  "Sắp xếp",
  "Tìm kiếm",
  "Đệ quy",
  "Backtracking",
  "Quy hoạch động",
  "Đồ thị",
  "BFS / DFS",
  "Dijkstra",
  "Toán rời rạc",
  "Số học modulo",
  "Tổ hợp",
  "HSG Tin",
  "Đề Ams",
  "Đề KHTN",
  "Đề CSP",
  "Thi thử",
  "Review code",
  "Mentor 1-1",
  "Báo cáo tuần",
  "Lộ trình cá nhân",
];

function ZigZag({ className = "" }: { className?: string }) {
  return <span className={`zigzag-mark block text-brand-deep ${className}`} aria-hidden="true" />;
}

export function Footer() {
  return (
    <footer id="tu-van" className="footer-panel text-white">
      <section className="border-t-8 border-[oklch(0.58_0.22_292)] px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-[88rem] gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
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
            <h2 className="mt-8 max-w-3xl text-balance text-[clamp(2.1rem,4.6vw,3.7rem)] font-black leading-[1.08] tracking-[-0.035em]">
              Code practice và mentorship cho học sinh thi chuyên Tin.
            </h2>
            <p className="mt-4 max-w-3xl text-pretty text-lg font-semibold leading-8 text-white/76">
              Học theo track, luyện bằng bài thật, sửa lỗi theo tuần và để phụ huynh nhìn thấy
              tiến độ bằng dữ liệu dễ hiểu.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
            <a
              href="tel:0366811428"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-primary px-7 text-base font-black text-white shadow-[0_5px_0_oklch(0.1_0.05_286)] transition-transform hover:-translate-y-0.5"
            >
              Liên hệ tư vấn
              <Phone className="size-5" />
            </a>
            <a
              href="#tracks"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border border-white/22 px-7 text-base font-black text-white transition-colors hover:bg-white/8"
            >
              Khám phá tracks
              <ArrowRight className="size-5" />
            </a>
          </div>
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

          <div className="mt-12 border-y border-white/14 py-12">
            <div className="text-center">
              <h3 className="font-display text-3xl font-black">Các track ôn luyện</h3>
              <ZigZag className="mx-auto mt-5 text-[oklch(0.74_0.16_166)]" />
            </div>
            <div className="mt-10 grid gap-x-8 gap-y-3 text-sm font-bold text-white/68 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {footerTracks.map((track) => (
                <a key={track} href="#tracks" className="transition-colors hover:text-white">
                  {track}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 text-sm font-semibold text-white/66 md:grid-cols-[1fr_auto] md:items-center">
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
