"use client";

import Image from "next/image";
import { BookOpenCheck, MessageCircle, MonitorPlay, SquareTerminal } from "lucide-react";
import FAQSection from "@/app/(landing)/components/FAQ/view";
import FirstTest from "@/app/(landing)/components/first-test/view";
import MentorSection from "@/app/(landing)/components/mentor/view";
import ProblemSection from "@/app/(landing)/components/problem/view";
import RoadmapSection from "@/app/(landing)/components/roadmap/view";
import StatsSection from "@/app/(landing)/components/stats/view";
import TestimonialSection from "@/app/(landing)/components/testimonial/view";
import Hero from "@/app/(landing)/components/hero/view";
import WhyUs from "@/app/(landing)/components/why-us/view";
import { Reveal, SectionIntro } from "@/components/landing/section-kit";
import { Footer } from "@/components/layout/footer";
import { ContactDock } from "@/components/layout/contact-dock";
import { Header } from "@/components/layout/header";

const exerciseCards = [
  {
    title: "Tổng đoạn con",
    copy: "Luyện tính tổng nhanh trên dãy số lớn mà không cần tính lại từ đầu — kỹ năng nền gặp lại ở hầu hết đề thi chuyên.",
    chips: ["C++", "Python", "+28 bài"],
    icon: "Σ",
  },
  {
    title: "Queen Attack",
    copy: "Từ một đề bài tưởng chừng hình học, luyện cách quy về các phép kiểm tra logic đơn giản, không bỏ sót trường hợp nào.",
    chips: ["Mảng", "Logic", "+35 bài"],
    icon: "Q",
  },
  {
    title: "Zebra Puzzle",
    copy: "Bài suy luận từ nhiều manh mối cùng lúc — luyện cách đọc đề dài, sắp xếp thông tin và loại dần các khả năng sai.",
    chips: ["Backtrack", "HSG", "+40 bài"],
    icon: "Z",
  },
];

const featureSteps = [
  {
    icon: SquareTerminal,
    title: "Code trong không gian quen thuộc",
    copy: "Đề, code, test case, gợi ý và lần nộp nằm cùng một chỗ để con tập trung vào tư duy.",
  },
  {
    icon: MonitorPlay,
    title: "Có editor và phân tích bài làm",
    copy: "Không chỉ báo đúng sai. Hệ thống tách lỗi đọc đề, thuật toán, cài đặt và test biên.",
  },
  {
    icon: MessageCircle,
    title: "Mentor chữa đúng điểm nghẽn",
    copy: "Mỗi feedback biến thành bài sửa cụ thể để tuần sau con không lặp lại cùng một lỗi.",
  },
];

function ExerciseMeta({ chips }: { chips: string[] }) {
  const [primary, secondary, count] = chips;

  return (
    <div
      className="inline-flex max-w-full items-center divide-x divide-[oklch(0.87_0.026_286)] overflow-hidden rounded-full border border-[oklch(0.87_0.026_286)] bg-[oklch(0.992_0.004_292)] text-xs font-black text-brand-deep shadow-[0_4px_0_oklch(0.28_0.12_303/0.06)]"
      aria-label={`Chủ đề ${primary}, ${secondary}, ${count}`}
    >
      {[primary, secondary].map((chip) => (
        <span key={chip} className="whitespace-nowrap px-3.5 py-2">
          {chip}
        </span>
      ))}
      <span className="whitespace-nowrap bg-brand-deep px-3.5 py-2 text-white">
        {count}
      </span>
    </div>
  );
}

function ExerciseRow({ exercise }: { exercise: (typeof exerciseCards)[number] }) {
  return (
    <article className="exercise-row grid gap-3 rounded-2xl bg-white p-4 md:grid-cols-[3.5rem_minmax(0,1fr)_max-content] md:items-center">
      <span className="grid size-12 place-items-center rounded-full bg-[oklch(0.9_0.06_210)] text-xl font-black text-brand-deep">
        {exercise.icon}
      </span>
      <div>
        <h3 className="text-lg font-black tracking-[-0.025em] text-brand-deep">{exercise.title}</h3>
        <p className="mt-1 max-w-xl text-pretty text-sm font-bold leading-5 text-muted-foreground">
          {exercise.copy}
        </p>
      </div>
      <div className="flex min-w-0 items-center md:justify-end">
        <ExerciseMeta chips={exercise.chips} />
      </div>
    </article>
  );
}

function DashboardMock() {
  return (
    <div className="dashboard-mock overflow-hidden rounded-2xl bg-white">
      <Image
        src="/dashboard.png"
        alt="Giao diện luyện tập Chuyên Tin: đề bài, trình soạn code C++, kết quả chấm bài và bảng xếp hạng tuần"
        width={1536}
        height={1024}
        sizes="(min-width: 1280px) 49vw, (min-width: 1024px) 52vw, 100vw"
        className="block h-auto w-full"
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />

      <Hero />

      <ProblemSection />

      <FirstTest />

      <WhyUs />

      <RoadmapSection />

      <div className="track-exercise-band border-y border-[oklch(0.9_0.026_292)]">
        <section id="exercises" className="px-5 pb-14 pt-16 md:px-8 md:pb-18 md:pt-20">
          <div className="mx-auto grid max-w-352 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] xl:gap-14">
            <div>
              <Reveal>
                <SectionIntro
                  compact
                  icon={<BookOpenCheck className="size-8" />}
                  title="300+ bài luyện thi chuyên Tin"
                  copy="Học qua bài tập thật. Mỗi bài đủ nhỏ để bắt đầu, nhưng luôn có biến thể để con học cách chuyển ý tưởng thành lời giải chắc."
                />
              </Reveal>
              <div className="mt-6 space-y-3">
                {exerciseCards.map((exercise, index) => (
                  <Reveal key={exercise.title} delay={index * 0.06}>
                    <ExerciseRow exercise={exercise} />
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.08} className="lg:pt-24 xl:pt-28">
              <DashboardMock />
            </Reveal>
          </div>

          <div className="mx-auto mt-12 grid max-w-[88rem] gap-8 md:grid-cols-3">
            {featureSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.title} delay={index * 0.05}>
                  <article className="feature-column">
                    <Icon className="size-11 text-brand-primary" />
                    <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.03em] text-brand-deep">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-pretty font-semibold leading-7 text-muted-foreground">
                      {step.copy}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>
      </div>

      <StatsSection />

      <MentorSection />

      <FAQSection />

      <TestimonialSection />

      <Footer />
      <ContactDock />
    </main>
  );
}
