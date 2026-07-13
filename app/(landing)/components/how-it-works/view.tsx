import Image from "next/image";
import { HelpCircle, MessageCircle, MonitorPlay, SquareTerminal } from "lucide-react";
import { Reveal, SectionIntro } from "@/components/landing/section-kit";

const featureSteps = [
  {
    icon: SquareTerminal,
    title: "Code trong không gian quen thuộc",
    copy: "Đề, code, test case, gợi ý và lần nộp nằm cùng một chỗ để con tập trung vào tư duy.",
    image: "/trust/method1.png",
  },
  {
    icon: MonitorPlay,
    title: "Có editor và phân tích bài làm",
    copy: "Không chỉ báo đúng sai. Hệ thống tách lỗi đọc đề, thuật toán, cài đặt và test biên.",
    image: "/trust/method2.png",
  },
  {
    icon: MessageCircle,
    title: "Mentor chữa đúng điểm nghẽn",
    copy: "Mỗi feedback biến thành bài sửa cụ thể để tuần sau con không lặp lại cùng một lỗi.",
    image: "/trust/method3.png",
  },
];

function HowItWorks() {
  return (
    <section id="cach-hoat-dong" className="px-5 py-16 md:px-8 md:py-20 bg-white">
      <div className="mx-auto max-w-352">
        <Reveal>
          <SectionIntro
            centered
            icon={<HelpCircle className="size-8" />}
            title="Phương pháp luyện thi tại Chuyên Tin"
            copy="Quy trình khép kín giúp con làm quen không gian thi thật, sửa sai tức thì và tiến bộ mỗi ngày."
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-[88rem] gap-8 md:grid-cols-3">
          {featureSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.title} delay={index * 0.05}>
                <article className="group feature-column flex flex-col h-full bg-slate-50/40 rounded-2xl border border-slate-100/80 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 p-0">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 30vw, 100vw"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="grid size-12 place-items-center rounded-xl bg-brand-primary/8 text-brand-primary mb-4">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-xl font-black leading-tight tracking-[-0.02em] text-brand-deep">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm font-semibold leading-6 text-muted-foreground flex-1">
                      {step.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
export { HowItWorks };
