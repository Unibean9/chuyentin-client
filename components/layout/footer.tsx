"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { contactDockLinks } from "@/components/layout/contact-dock-data";
import { handleSectionNavClick } from "@/components/layout/scroll-to-section";

const footerGroups = [
  {
    title: "Khám phá",
    links: [
      { label: "Về Chuyên Tin", href: "/#ve-chung-toi" },
      { label: "Vì sao chọn Chuyên Tin", href: "/#vi-sao-chuyen-tin" },
      { label: "Phương pháp luyện thi", href: "/#cach-hoat-dong" },
      { label: "Lộ trình học", href: "/#lo-trinh" },
    ],
  },
  {
    title: "Học tập",
    links: [
      { label: "Hoạt động ngoại khóa", href: "/#hoat-dong" },
      { label: "Đội ngũ mentor", href: "/#doi-ngu" },
      { label: "Kết quả học tập", href: "/#ket-qua" },
      { label: "Cảm nhận học viên", href: "/#cam-nhan" },
    ],
  },
  {
    title: "Hỗ trợ",
    links: [
      { label: "Câu hỏi thường gặp", href: "/#hoi-dap" },
      { label: "Tư vấn lộ trình", href: "/#tu-van" },
      { label: "Đánh giá đầu vào", href: contactDockLinks.zaloHref, external: true },
    ],
  },
  {
    title: "Liên hệ",
    links: [
      { label: "0366 811 428", href: contactDockLinks.phoneHref },
      { label: "tuvan@chuyentin.vn", href: contactDockLinks.emailHref },
      { label: "Zalo tư vấn", href: contactDockLinks.zaloHref, external: true },
      { label: "Facebook Chuyên Tin", href: contactDockLinks.messengerHref, external: true },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer id="tu-van" className="footer-panel text-white">
      <section className="border-t-8 border-[oklch(0.58_0.22_292)] px-5 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-[88rem]">
          <a href="/" className="flex items-center gap-3" aria-label="Chuyên Tin — về trang chủ">
            <Image
              src="/logo-white.png"
              alt=""
              width={40}
              height={40}
              className="size-10 shrink-0"
            />
            <span className="font-display text-xl font-black">Chuyên Tin</span>
          </a>
          <div className="mt-6 w-full md:w-fit md:max-w-full">
            <h2 className="text-balance text-[clamp(1.55rem,7vw,2.75rem)] font-black leading-[1.15] tracking-[-0.035em] md:whitespace-nowrap md:text-[clamp(1.65rem,3.4vw,2.75rem)] md:leading-[1.12]">
              Khởi đầu từ tư duy, thành công bằng năng lực.
            </h2>
            <p className="mt-4 w-full max-w-prose text-pretty text-[0.95rem] font-semibold leading-7 text-white/76 md:mt-3 md:w-[calc(100%+5rem)] md:max-w-none md:text-lg md:leading-8">
              ChuyenTin giúp học sinh xây dựng nền tảng tư duy tính toán, làm chủ thuật toán và lập trình với lộ trình học bài bản, mentor đồng hành và AI cá nhân hóa. Không chỉ chinh phục kỳ thi Chuyên Tin, mà còn tạo nền tảng vững chắc cho hành trình học tập lâu dài.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/14 px-5 py-12 md:px-8">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-lg font-black">{group.title}</h3>
                <ul className="mt-5 space-y-3 text-sm font-bold text-white/68">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...("external" in link && link.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {
                              onClick: (event: MouseEvent<HTMLAnchorElement>) =>
                                handleSectionNavClick(event, link.href),
                            })}
                        className="transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-5 border-t border-white/14 pt-12 text-sm font-semibold text-white/66 md:grid-cols-[1fr_auto] md:items-center">
            <p className="text-pretty">
              Chuyên Tin đồng hành cùng học sinh THCS xây nền tư duy tính toán và ôn thi chuyên Tin —
              minh bạch tiến độ, không cam kết kết quả tuyệt đối.
            </p>
            <p className="font-black text-white">© 2026 Chuyên Tin</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
