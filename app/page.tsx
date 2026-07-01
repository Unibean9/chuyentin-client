"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  BrainCircuit,
  CalendarCheck,
  ChevronRight,
  Code2,
  FileText,
  LineChart,
  MessageCircle,
  MonitorPlay,
  Route,
  SquareTerminal,
  Users,
} from "lucide-react";

const navItems = [
  { label: "Tracks", href: "#tracks" },
  { label: "Bài luyện", href: "#exercises" },
  { label: "Mentor", href: "#mentor" },
  { label: "Phụ huynh", href: "#parents" },
];

const tracks = [
  {
    name: "C++",
    short: "C++",
    sub: "Track nền thi chuyên",
    fill: "oklch(0.95 0.035 292)",
    border: "oklch(0.47 0.21 305)",
    ink: "oklch(0.25 0.1 292)",
  },
  {
    name: "Python",
    short: "Py",
    sub: "Tư duy thuật toán",
    fill: "oklch(0.95 0.045 85)",
    border: "oklch(0.78 0.15 85)",
    ink: "oklch(0.34 0.08 80)",
  },
  {
    name: "Mảng",
    short: "A[]",
    sub: "42 bài nền",
    fill: "oklch(0.95 0.04 168)",
    border: "oklch(0.66 0.14 166)",
    ink: "oklch(0.32 0.11 166)",
  },
  {
    name: "Xâu",
    short: "STR",
    sub: "36 bài luyện",
    fill: "oklch(0.96 0.032 225)",
    border: "oklch(0.6 0.13 232)",
    ink: "oklch(0.32 0.1 232)",
  },
  {
    name: "Sắp xếp",
    short: "O(n)",
    sub: "Độ phức tạp",
    fill: "oklch(0.96 0.036 24)",
    border: "oklch(0.64 0.19 24)",
    ink: "oklch(0.4 0.12 24)",
  },
  {
    name: "Đệ quy",
    short: "f(x)",
    sub: "18 bài dựng cây",
    fill: "oklch(0.95 0.03 265)",
    border: "oklch(0.52 0.18 265)",
    ink: "oklch(0.3 0.1 265)",
  },
  {
    name: "Quy hoạch động",
    short: "DP",
    sub: "24 bài nâng cao",
    fill: "oklch(0.96 0.035 310)",
    border: "oklch(0.55 0.2 310)",
    ink: "oklch(0.35 0.12 310)",
  },
  {
    name: "Đồ thị",
    short: "BFS",
    sub: "Graph căn bản",
    fill: "oklch(0.95 0.03 145)",
    border: "oklch(0.58 0.15 145)",
    ink: "oklch(0.32 0.11 145)",
  },
  {
    name: "Backtracking",
    short: "BT",
    sub: "Duyệt trạng thái",
    fill: "oklch(0.96 0.03 40)",
    border: "oklch(0.72 0.16 55)",
    ink: "oklch(0.38 0.11 55)",
  },
  {
    name: "Toán rời rạc",
    short: "MOD",
    sub: "Số học & tổ hợp",
    fill: "oklch(0.95 0.035 200)",
    border: "oklch(0.58 0.13 205)",
    ink: "oklch(0.3 0.1 205)",
  },
  {
    name: "Đề HSG",
    short: "HSG",
    sub: "Bài dài hơi",
    fill: "oklch(0.96 0.038 12)",
    border: "oklch(0.62 0.18 12)",
    ink: "oklch(0.37 0.12 12)",
  },
  {
    name: "Đề chuyên",
    short: "10",
    sub: "Ams, KHTN, CSP",
    fill: "oklch(0.95 0.04 282)",
    border: "oklch(0.43 0.19 285)",
    ink: "oklch(0.24 0.1 285)",
  },
];

const heroBadges = tracks.slice(0, 5);

const exerciseCards = [
  {
    title: "Tổng đoạn con",
    copy: "Rèn cửa sổ trượt, test biên và cách tự chứng minh độ phức tạp.",
    chips: ["C++", "Python", "+28 bài"],
    icon: "Σ",
  },
  {
    title: "Queen Attack",
    copy: "Chuyển điều kiện hình học thành kiểm tra logic không sót trường hợp.",
    chips: ["Mảng", "Logic", "+35 bài"],
    icon: "Q",
  },
  {
    title: "Zebra Puzzle",
    copy: "Bài suy luận ràng buộc để luyện cách đọc đề dài và thu hẹp trạng thái.",
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

function LogoMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <span
      className={`grid size-10 place-items-center rounded-lg ${
        inverted ? "bg-white text-brand-deep" : "bg-brand-deep text-white"
      }`}
      aria-hidden="true"
    >
      <Code2 className="size-5" />
    </span>
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

function HexBadge({
  track,
  compact = false,
}: {
  track: (typeof tracks)[number];
  compact?: boolean;
}) {
  const style = {
    "--hex-fill": track.fill,
    "--hex-border": track.border,
    "--hex-ink": track.ink,
  } as CSSProperties;

  return (
    <div className="text-center" style={style}>
      <div className={`hex-shell mx-auto ${compact ? "size-14 sm:size-16" : "size-24 md:size-28"}`}>
        <div className="hex-badge">
          <span className={compact ? "text-sm" : "text-xl md:text-2xl"}>{track.short}</span>
        </div>
      </div>
      {!compact ? (
        <>
          <h3 className="mt-4 text-xl font-black tracking-[-0.025em] text-brand-deep">
            {track.name}
          </h3>
          <p className="mt-1 text-sm font-bold text-muted-foreground">{track.sub}</p>
        </>
      ) : null}
    </div>
  );
}

function MiniHex({ label }: { label: string }) {
  return (
    <span className="mini-hex grid size-10 place-items-center text-[0.64rem] font-black text-brand-deep">
      {label}
    </span>
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

function ImageSlot({
  label,
  className = "",
  children,
}: {
  label: string;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={`image-slot relative overflow-hidden rounded-2xl ${className}`}>
      <div className="image-slot-grid absolute inset-0" />
      <div className="relative h-full min-h-56 p-5">
        {children ? (
          children
        ) : (
          <div className="grid h-full min-h-56 place-items-center text-center">
            <div>
              <FileText className="mx-auto size-8 text-brand-primary" />
              <p className="mt-3 text-sm font-black text-brand-deep">{label}</p>
              <p className="mt-1 text-xs font-bold text-muted-foreground">Khung dựng, thay ảnh sau</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-[32rem]">
      <motion.div
        className="hero-visual-float"
        animate={reduceMotion ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ImageSlot label="Ảnh minh họa học sinh / thay sau" className="min-h-[20rem] bg-white/78">
          <div className="relative grid h-full min-h-[18rem] place-items-center">
            <div className="absolute left-5 top-5 rounded-full bg-white/86 px-3 py-1.5 text-xs font-black text-brand-deep ring-1 ring-border">
              Khung ảnh hero
            </div>
            <div className="absolute top-7 h-44 w-44 rounded-full bg-[oklch(0.88_0.08_215)]" />
            <div className="relative flex items-end justify-center gap-3">
              {["bg-[oklch(0.9_0.13_86)]", "bg-[oklch(0.74_0.12_35)]", "bg-[oklch(0.86_0.05_308)]"].map(
                (tone, index) => (
                  <div key={tone} className="text-center">
                    <div className={`mx-auto size-14 rounded-full ${tone} ring-4 ring-brand-deep/70`} />
                    <div className="mt-2 h-20 w-14 rounded-t-2xl bg-white ring-4 ring-brand-deep/70" />
                    <p className="sr-only">Nhân vật minh họa {index + 1}</p>
                  </div>
                ),
              )}
            </div>
            <div className="relative -mt-12 w-[68%] rounded-xl bg-[oklch(0.91_0.04_220)] p-4 ring-4 ring-brand-deep/75">
              <div className="mx-auto size-6 rounded-md bg-white" />
              <div className="mt-3 space-y-2">
                <span className="block h-2 rounded-full bg-brand-deep/22" />
                <span className="block h-2 w-2/3 rounded-full bg-brand-deep/18" />
              </div>
            </div>
          </div>
        </ImageSlot>
      </motion.div>

      <div className="-mt-7 flex justify-center gap-2.5 sm:gap-3">
        {heroBadges.map((track) => (
          <HexBadge key={track.name} track={track} compact />
        ))}
      </div>
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
        alt="Dashboard Chuyên Tin hiển thị track học, bài luyện, mentor note và báo cáo phụ huynh"
        width={1536}
        height={1024}
        sizes="(min-width: 1280px) 47vw, (min-width: 1024px) 50vw, 100vw"
        className="block h-auto w-full"
      />
    </div>
  );
}

function MentorMock() {
  return (
    <div className="mentor-mock overflow-hidden rounded-2xl bg-white">
      <div className="grid border-b border-border bg-[oklch(0.98_0.006_285)] px-5 py-4 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex items-center gap-3">
          <MiniHex label="DP" />
          <div>
            <p className="text-sm font-black text-muted-foreground">Bạn đang được mentor chữa bài</p>
            <h3 className="text-lg font-black text-brand-deep">Dãy con tăng dài nhất</h3>
          </div>
        </div>
        <button className="mt-3 h-10 rounded-lg bg-brand-deep px-4 text-sm font-black text-white md:mt-0">
          Kết thúc buổi
        </button>
      </div>
      <div className="grid lg:grid-cols-[1.05fr_0.75fr]">
        <div className="border-r border-border bg-[oklch(0.98_0.004_285)] p-5 font-mono text-sm leading-7 text-[oklch(0.34_0.04_285)]">
          <p>
            <span className="text-brand-primary">for</span> i in range(n):
          </p>
          <p className="pl-5">dp[i] = 1</p>
          <p className="pl-5">
            <span className="text-brand-primary">for</span> j in range(i):
          </p>
          <p className="bg-[oklch(0.94_0.025_250)] pl-10">if a[j] &lt; a[i]:</p>
          <p className="pl-14">dp[i] = max(dp[i], dp[j] + 1)</p>
          <p className="mt-4 rounded-lg bg-[oklch(0.94_0.035_86)] p-3 font-sans text-sm font-bold text-[oklch(0.34_0.08_78)]">
            Mentor: đoạn này đúng O(n²), nhưng đề chuyên có thể cần tối ưu hơn.
          </p>
        </div>
        <div className="p-5">
          <div className="flex gap-2">
            {["Thảo luận", "Scratchpad", "Gợi ý"].map((tab, index) => (
              <span
                key={tab}
                className={`rounded-full px-4 py-2 text-xs font-black ${
                  index === 0 ? "bg-[oklch(0.91_0.04_280)] text-brand-primary" : "text-muted-foreground"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
          <div className="mt-6 rounded-xl bg-[oklch(0.98_0.004_285)] p-4">
            <p className="text-xs font-black text-muted-foreground">Mentor phụ trách</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-full bg-[oklch(0.9_0.08_86)] text-lg font-black text-brand-deep">
                CT
              </span>
              <div>
                <p className="font-black text-brand-deep">Mentor Chuyên Tin</p>
                <p className="text-sm font-bold text-muted-foreground">C++ / HSG / Đề chuyên</p>
              </div>
            </div>
          </div>
          <div className="mt-5 space-y-4">
            {["Con đã sửa test biên k = 0.", "Cần thử thêm mảng toàn phần tử bằng nhau.", "Tuần sau chuyển sang two pointers nâng cao."].map(
              (message) => (
                <p key={message} className="rounded-xl border border-border p-3 text-sm font-bold leading-6 text-muted-foreground">
                  {message}
                </p>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-white/96 backdrop-blur">
        <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Chuyên Tin">
            <LogoMark />
            <span className="font-display text-lg font-black tracking-[-0.025em] text-brand-deep">
              Chuyên Tin
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-black text-muted-foreground md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-brand-primary">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#parents"
              className="hidden text-sm font-black text-muted-foreground transition-colors hover:text-brand-primary sm:block"
            >
              Phụ huynh
            </a>
            <a
              href="#tu-van"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-black text-primary-foreground shadow-[0_4px_0_oklch(0.28_0.12_303)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
            >
              Đánh giá đầu vào
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </header>

      <section className="relative border-b border-[oklch(0.9_0.018_285)] px-5 pb-12 pt-12 md:px-8 md:pb-16 md:pt-16">
        <div className="hero-field absolute inset-0 -z-10" />
        <div className="ornament ornament-diamond left-[12%] top-[68%]" />
        <div className="ornament ornament-dots right-[16%] top-[26%]" />
        <div className="mx-auto grid max-w-[88rem] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.h1
              className="max-w-5xl text-balance text-[clamp(3.15rem,6.6vw,5.35rem)] font-black leading-[0.98] tracking-[-0.035em] text-brand-deep"
              initial={{ y: 18 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: easeOut }}
            >
              Giỏi <span className="hero-highlight">Tin học</span> thật sự.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-pretty text-lg font-semibold leading-8 text-muted-foreground md:text-xl md:leading-9"
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
            >
              Track học, bài luyện và mentor chữa lỗi cho học sinh lớp 9 ôn HSG,
              thi vào lớp 10 chuyên Tin.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.14, ease: easeOut }}
            >
              <a
                href="#tu-van"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-primary px-7 text-base font-black text-primary-foreground shadow-[0_5px_0_oklch(0.28_0.12_303)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
              >
                Bắt đầu đánh giá
                <ArrowRight className="size-5" />
              </a>
              <a
                href="#tracks"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-white px-7 text-base font-black text-brand-primary ring-2 ring-brand-primary/65 transition-colors hover:bg-[oklch(0.97_0.015_292)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
              >
                Xem lộ trình
                <ChevronRight className="size-5" />
              </a>
            </motion.div>

            <motion.div
              className="mt-10 grid max-w-3xl gap-4 rounded-xl border-2 border-brand-primary bg-white p-4 shadow-[0_6px_0_oklch(0.83_0.16_86)] md:grid-cols-[auto_1fr_auto] md:items-center"
              initial={{ y: 16 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: easeOut }}
            >
              <div className="flex items-center gap-3">
                <LogoMark />
                <span className="font-display text-xl font-black text-brand-deep">Chuyên Tin</span>
              </div>
              <p className="text-pretty text-sm font-bold leading-6 text-muted-foreground md:text-base">
                Lộ trình rõ, bài luyện thật, phản hồi theo từng tuần.
              </p>
              <a href="#parents" className="inline-flex items-center gap-2 text-sm font-black text-brand-primary">
                Phụ huynh xem
                <ArrowRight className="size-4" />
              </a>
            </motion.div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <div className="track-exercise-band border-y border-[oklch(0.9_0.026_292)]">
        <section id="tracks" className="relative px-5 pb-8 pt-16 md:px-8 md:pb-10 md:pt-20">
          <div className="ornament ornament-bars left-[10%] top-[20%]" />
          <div className="ornament ornament-square right-[18%] top-[18%]" />
          <div className="ornament ornament-triangle right-[9%] top-[34%]" />
          <div className="mx-auto max-w-[88rem]">
            <Reveal>
              <SectionIntro
                centered
                icon={<Route className="size-8" />}
                title="Khám phá và thành thạo 12 track ôn thi chuyên Tin"
                copy="Mỗi track là một đường luyện rõ ràng: học phần nền, làm bài nhỏ, gặp biến thể, rồi chốt bằng đề chuyên hoặc HSG."
              />
            </Reveal>

            <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
              {tracks.map((track, index) => (
                <Reveal key={track.name} delay={index * 0.025}>
                  <HexBadge track={track} />
                </Reveal>
              ))}
            </div>

            <div className="relative mt-12 text-center">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-[oklch(0.86_0.03_270)]" />
              <a
                href="#exercises"
                className="relative inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[oklch(0.91_0.04_270)] px-7 text-sm font-black text-brand-primary transition-transform hover:-translate-y-0.5"
              >
                Xem bài luyện theo track
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        <section id="exercises" className="px-5 pb-14 pt-4 md:px-8 md:pb-[4.5rem] md:pt-6">
          <div className="mx-auto grid max-w-[88rem] items-start gap-10 lg:grid-cols-[0.94fr_1.06fr] xl:gap-16">
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
        <div className="ornament ornament-diamond left-[10%] top-[11%]" />
        <div className="ornament ornament-bars left-[9%] top-[39%]" />
        <div className="ornament ornament-square right-[20%] top-[14%]" />
        <div className="ornament ornament-dots right-[18%] top-[34%]" />
        <div className="ornament ornament-triangle right-[7%] top-[27%]" />
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

      <footer id="tu-van" className="footer-panel text-white">
        <section className="border-t-8 border-[oklch(0.58_0.22_292)] px-5 py-12 md:px-8 md:py-16">
          <div className="mx-auto grid max-w-[88rem] gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <a href="#" className="flex items-center gap-3" aria-label="Chuyên Tin">
                <LogoMark inverted />
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
                href="mailto:tuvan@chuyentin.vn?subject=Tu%20van%20lo%20trinh%20Chuyen%20Tin"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-primary px-7 text-base font-black text-white shadow-[0_5px_0_oklch(0.1_0.05_286)] transition-transform hover:-translate-y-0.5"
              >
                Đặt lịch đánh giá
                <CalendarCheck className="size-5" />
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
    </main>
  );
}
