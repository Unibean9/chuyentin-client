import { ArrowRight, PencilLine } from "lucide-react";
import { Reveal, SectionIntro } from "@/components/landing/section-kit";
import { contactDockLinks } from "@/components/layout/contact-dock-data";
import { assessmentSteps } from "./components/first-test-data";

function FirstTest() {
  return (
    <section id="danh-gia" className="px-5 py-16 md:px-8 md:py-20 bg-white">
      <div className="mx-auto max-w-352">
        <Reveal>
          <SectionIntro
            centered
            icon={<PencilLine className="size-8" />}
            title="Liên hệ nhận tư vấn miễn phí"
            copy="Làm bài test cùng hệ thống, chữa trực tiếp cùng Mentor Chuyên Tin — biết ngay con đang ở đâu trước khi bắt đầu."
          />
        </Reveal>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative space-y-8">
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-brand-primary/20" />

            {assessmentSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1}>
                <div className="relative flex gap-6">
                  <div className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full bg-brand-primary text-lg font-black text-white shadow-sm">
                    {index + 1}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-black leading-tight tracking-[-0.02em] text-brand-deep">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-pretty text-sm font-semibold leading-relaxed text-muted-foreground">
                      {step.copy}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16}>
            <div className="mt-10 flex flex-col items-start gap-5 border-t border-brand-primary/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-black text-brand-deep">
                  Cần một lộ trình phù hợp cho con?
                </h3>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">
                  Trao đổi trực tiếp với Mentor Chuyên Tin.
                </p>
              </div>
              <a
                href={contactDockLinks.zaloHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-black text-primary-foreground shadow-[0_4px_0_oklch(0.28_0.12_303)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
              >
                Nhận tư vấn lộ trình
                <ArrowRight className="size-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default FirstTest;
export { FirstTest };
