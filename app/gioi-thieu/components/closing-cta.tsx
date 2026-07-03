import { ArrowRight } from "lucide-react";
import { Reveal, ZigZag } from "@/components/landing/section-kit";

export function ClosingCta() {
  return (
    <section className="px-5 pb-16 pt-4 md:px-8 md:pb-20">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="text-balance text-[clamp(1.9rem,3.6vw,3rem)] font-black leading-[1.12] tracking-[-0.035em] text-brand-deep">
            Muốn biết con đang ở đâu trên lộ trình này?
          </h2>
          <ZigZag className="mx-auto mt-5" />
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-8 text-muted-foreground md:text-lg">
            Làm một bài đánh giá đầu vào để mentor xem con vững phần nào, thiếu phần nào — không
            cần cam kết gì trước.
          </p>

          <a
            href="#danh-gia"
            className="mt-8 inline-flex h-13 items-center justify-center gap-2 rounded-lg bg-primary px-7 text-base font-black text-primary-foreground shadow-[0_4px_0_oklch(0.28_0.12_303)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
          >
            Đánh giá đầu vào miễn phí
            <ArrowRight className="size-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
