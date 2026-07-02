"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  LineChart,
  MessageCircle,
  MonitorPlay,
  Route,
  SquareTerminal,
  Users,
} from "lucide-react";
import Hero from "@/app/(landing)/components/hero/page";
import { LearningPathFlow } from "@/components/landing/learning-path-flow";
import { TracksMountainBackdrop } from "@/components/landing/tracks-mountain-backdrop";
import { TracksSectionDecor } from "@/components/landing/tracks-section-decor";
import { Footer } from "@/components/layout/footer";
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

const mentorReasons = [
  {
    icon: BrainCircuit,
    title: "Thấy phần con chưa tự thấy",
    copy: "Bài qua test mẫu vẫn có thể sai ý tưởng. Mentor đọc cách con nghĩ và chỉ ra lỗ hổng trước mùa thi.",
  },
  {
    icon: Route,
    title: "Luyện đúng lộ trình thi chuyên",
    copy: "Không nhảy bài theo cảm hứng. Track đi từ nền C++, mảng, xâu đến DP, đồ thị và đề tổng hợp.",
  },
  {
    icon: LineChart,
    title: "Phụ huynh thấy tiến bộ thật",
    copy: "Báo cáo nói rõ con làm bài nào, sửa lỗi gì, phần nào còn yếu và tuần tới cần tập trung vào đâu.",
  },
];

const easeOut = [0.16, 1, 0.3, 1] as const;

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { y: 18 }}
      whileInView={reduceMotion ? {} : { y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.72, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

function SectionIcon({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid size-20 place-items-center">
      <div className="mini-section-hex grid size-16 place-items-center text-brand-deep">{children}</div>
    </div>
  );
}

function ZigZag({ className = "" }: { className?: string }) {
  return <span className={`zigzag-mark block text-brand-deep ${className}`} aria-hidden="true" />;
}

function SectionIntro({
  icon,
  title,
  copy,
  centered = false,
  compact = false,
}: {
  icon?: ReactNode;
  title: string;
  copy?: string;
  centered?: boolean;
  compact?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {icon ? <SectionIcon>{icon}</SectionIcon> : null}
      <h2
        className={`text-balance font-black tracking-[-0.035em] text-brand-deep ${
          compact
            ? "mt-3 text-[clamp(2.45rem,4.35vw,3.95rem)] leading-[1.02]"
            : "mt-4 text-[clamp(2.25rem,5vw,4.35rem)] leading-[1.03]"
        }`}
      >
        {title}
      </h2>
      <ZigZag className={centered ? `mx-auto ${compact ? "mt-4" : "mt-5"}` : compact ? "mt-4" : "mt-5"} />
      {copy ? (
        <p
          className={`text-pretty text-base text-muted-foreground md:text-lg ${
            compact ? "mt-4 leading-7 md:leading-8" : "mt-5 leading-8"
          }`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

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

function MentorMock() {
  return (
    <div className="mentor-mock relative aspect-[3/2] overflow-hidden rounded-2xl bg-white">
      <Image
        src="/monhoc.png"
        alt="Giao diện môn học Chuyên Tin với bài luyện, lộ trình và ghi chú mentor"
        sizes="(min-width: 1440px) 88rem, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 2.5rem)"
        fill
        className="object-cover object-center"
      />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />

      <Hero />

      <div className="track-exercise-band border-y border-[oklch(0.9_0.026_292)]">
        <section id="tracks" className="tracks-section relative px-5 pb-8 pt-16 md:px-8 md:pb-10 md:pt-20">
          <TracksMountainBackdrop />
          <div className="tracks-section-inner mx-auto max-w-352">
            <Reveal>
              <div className="tracks-intro-wrap">
                <TracksSectionDecor />
                <SectionIntro
                  centered
                  icon={<Route className="size-8" />}
                  title="Lộ trình học, một đường đi rõ"
                  copy="Đo nền → vá lỗi → luyện track → mentor báo cáo. Mỗi tuần biết việc tiếp theo."
                />
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <LearningPathFlow />
            </Reveal>

            <div className="relative mt-8 text-center">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-[oklch(0.86_0.03_270)]" />
              <a
                href="#exercises"
                className="relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[oklch(0.91_0.04_270)] px-7 text-sm font-black text-brand-primary transition-transform hover:-translate-y-0.5"
              >
                Xem bài luyện thật
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="exercises" className="px-5 pb-14 pt-4 md:px-8 md:pb-18 md:pt-6">
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

      <section id="mentor" className="relative px-5 py-16 md:px-8 md:py-20">
        <div className="ornament ornament-diamond left-[10%] top-[11%] hidden md:block" />
        <div className="ornament ornament-bars left-[9%] top-[39%] hidden md:block" />
        <div className="ornament ornament-square right-[20%] top-[14%] hidden md:block" />
        <div className="ornament ornament-dots right-[18%] top-[34%] hidden md:block" />
        <div className="ornament ornament-triangle right-[7%] top-[27%] hidden md:block" />
        <div className="mx-auto grid max-w-[88rem] items-center gap-12 lg:grid-cols-[0.82fr_1fr]">
          <Reveal>
            <div className="flex min-h-[20rem] items-center justify-center lg:justify-center">
              <Image
                src="/course.png"
                alt="Hai học sinh Chuyên Tin đang học cùng laptop và ghi chú lộ trình ôn thi"
                width={500}
                height={500}
                className="h-auto w-full max-w-[22rem] object-contain md:max-w-[25.5rem]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mentor-lead-copy relative max-w-3xl">
              <SectionIcon>
                <Users className="size-8" />
              </SectionIcon>
              <h2 className="mt-5 max-w-2xl text-balance text-[clamp(2.2rem,3.4vw,3.35rem)] font-black leading-[1.08] tracking-[-0.03em] text-brand-deep">
                Đào sâu kiến thức với{" "}
                <span className="mentor-underlined">mentor thật.</span>
              </h2>
              <ZigZag className="mt-6" />
              <p className="mt-7 max-w-2xl text-pretty text-base leading-8 text-muted-foreground md:text-lg">
                Con không chỉ cần thêm bài. Con cần người đọc cách nghĩ, chỉ ra lỗ hổng
                và giúp biến một lời giải đúng thành một lời giải chắc cho phòng thi.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 max-w-[88rem]">
          <Reveal>
            <MentorMock />
          </Reveal>
        </div>
      </section>

      <section id="parents" className="px-5 pb-16 pt-8 md:px-8 md:pb-20 md:pt-10">
        <div className="mx-auto max-w-[88rem]">
          <Reveal>
            <SectionIntro
              centered
              title="Vì sao cần mentor và báo cáo rõ ràng?"
              copy="Phụ huynh không cần đọc code vẫn nên biết con đang tiến bộ ở đâu, còn hổng gì và tuần tới phải luyện phần nào."
            />
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {mentorReasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="feature-column">
                    <Icon className="size-12 text-brand-primary" />
                    <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.03em] text-brand-deep">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-pretty font-semibold leading-7 text-muted-foreground">
                      {item.copy}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
