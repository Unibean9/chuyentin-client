"use client";

import { motion } from "framer-motion";
import { Compass, FileQuestion, Gauge, ShieldAlert } from "lucide-react";
import { Reveal, SectionIntro } from "@/components/landing/section-kit";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";

const easeOut = [0.16, 1, 0.3, 1] as const;

const worries = [
  {
    icon: FileQuestion,
    title: "Làm bài mẫu thì trơn, đổi đề là bí",
    copy: "Con giải đúng dạng bài đã luyện, nhưng đề thi thật chỉ cần đổi góc nhìn quen thuộc là lúng túng — dấu hiệu học tủ chứ chưa chắc thuật toán.",
  },
  {
    icon: Compass,
    title: "Không rõ lộ trình ôn đã đúng hướng",
    copy: "Học nhiều buổi, nhiều tài liệu, nhưng không có gì xác nhận thứ tự ôn — nền tảng trước, thuật toán sau — có đang đi đúng hay không.",
  },
  {
    icon: Gauge,
    title: "Không biết con đang vững phần nào, yếu phần nào",
    copy: "Ngoài điểm số cuối buổi, phụ huynh gần như không có cách nào biết con đã chắc mảng, xâu hay còn hổng ở quy hoạch động, đồ thị.",
  },
];

function WorryRow({ worry, index }: { worry: (typeof worries)[number]; index: number }) {
  const Icon = worry.icon;
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <motion.div
      className="grid grid-cols-[3rem_1fr] items-start gap-x-5 py-7 md:grid-cols-[3.25rem_1fr] md:gap-x-7 md:py-8"
      initial={reduceMotion ? false : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: reduceMotion ? 0 : index * 0.1, ease: easeOut }}
    >
      <span className="grid size-12 shrink-0 place-items-center rounded-full border-2 border-brand-primary/30 text-brand-primary md:size-13">
        <Icon className="size-5 md:size-6" />
      </span>
      <div>
        <h3 className="text-lg font-black leading-tight tracking-[-0.02em] text-brand-deep md:text-xl">
          {worry.title}
        </h3>
        <p className="mt-2 max-w-2xl text-pretty font-semibold leading-7 text-muted-foreground">
          {worry.copy}
        </p>
      </div>
    </motion.div>
  );
}

function ProblemSection() {
  return (
    <section id="van-de" className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionIntro
            icon={<ShieldAlert className="size-8" />}
            title="Những băn khoăn quen thuộc trước mùa thi"
            copy="Ba nỗi lo phụ huynh có con ôn thi chuyên Tin hay gặp nhất — trước khi tính đến chuyện chọn nơi học."
          />
        </Reveal>

        <div className="mt-10 divide-y divide-[oklch(0.9_0.02_302)] border-y border-[oklch(0.9_0.02_302)] md:mt-12">
          {worries.map((worry, index) => (
            <WorryRow key={worry.title} worry={worry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
export { ProblemSection };
