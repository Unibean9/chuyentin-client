import { ArrowRight, PencilLine } from "lucide-react";
import { Reveal, SectionIntro } from "@/components/landing/section-kit";
import { FirstTestSteps } from "./components/first-test-steps";

function FirstTest() {
  return (
    <section id="danh-gia" className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-352">
        <Reveal>
          <SectionIntro
            centered
            icon={<PencilLine className="size-8" />}
            title="Miễn phí test đánh giá năng lực đầu vào"
            copy="Làm bài test cùng hệ thống, chữa trực tiếp cùng Mentor Chuyên Tin — biết ngay con đang ở đâu trước khi bắt đầu."
          />
        </Reveal>

        <FirstTestSteps />

        <Reveal delay={0.12} className="mt-12 text-center">
          <a
            href="#tu-van"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-base font-black text-primary-foreground shadow-[0_5px_0_oklch(0.28_0.12_303)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
          >
            Đăng ký làm test miễn phí
            <ArrowRight className="size-5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default FirstTest;
export { FirstTest };
