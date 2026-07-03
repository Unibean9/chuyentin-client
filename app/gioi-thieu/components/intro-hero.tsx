import { Reveal, ZigZag } from "@/components/landing/section-kit";
import { RevealHeading } from "./reveal-heading";

export function IntroHero() {
  return (
    <section className="hero-field relative overflow-hidden px-5 pb-16 pt-14 md:px-8 md:pb-20 md:pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[oklch(0.87_0.026_286)] bg-white px-4 py-2 text-xs font-black tracking-[-0.01em] text-brand-deep shadow-[0_4px_0_oklch(0.28_0.12_303/0.08)]">
            Về Chuyên Tin
          </span>
        </Reveal>

        <RevealHeading
          as="h1"
          className="mt-6 text-balance text-[clamp(2.4rem,5.2vw,4.75rem)] font-black leading-[1.05] tracking-[-0.035em] text-brand-deep"
          lines={["Dạy chuyên Tin bằng", "sự cụ thể, không bằng lời hứa."]}
        />

        <ZigZag className="mx-auto mt-6" />

        <Reveal delay={0.12}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-8 text-muted-foreground md:text-lg">
            Chuyên Tin là nơi luyện thi chuyên Tin và HSG Tin học cho học sinh THCS — nền tảng
            thuật toán, bài luyện thật, mentor chữa lỗi tận gốc và báo cáo tuần để phụ huynh nhìn
            thấy con đang tiến bộ ở đâu.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
