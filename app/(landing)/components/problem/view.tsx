"use client";

import { motion } from "framer-motion";
import {
  Compass,
  FileQuestion,
  Gauge,
  Lightbulb,
  ShieldAlert,
  TrendingUp,
  Users,
} from "lucide-react";
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
    copy: "Ngoài điểm số cuối buổi, phụ huynh gần như không có cách nào biết con đã chắc mảng nào, còn hổng ở quy hoạch động, đồ thị hay xâu.",
  },
  {
    icon: Users,
    title: "Học đông nên không được theo sát từng bạn",
    copy: "Mỗi học sinh có điểm mạnh, điểm yếu khác nhau, nhưng lớp học đông rất khó điều chỉnh lộ trình phù hợp cho từng em.",
  },
  {
    icon: Lightbulb,
    title: "Biết lời giải nhưng chưa biết cách tư duy",
    copy: "Con có thể làm theo hướng dẫn, nhưng chưa hiểu bản chất thuật toán. Khi gặp bài biến thể hoặc đề lạ thì dễ mất phương hướng.",
  },
  {
    icon: TrendingUp,
    title: "Phụ huynh không biết con đã sẵn sàng cho kỳ thi chưa",
    copy: "Ngoài điểm kiểm tra, rất khó đánh giá con đã đạt mức nào, còn thiếu những chuyên đề gì và liệu đã đủ năng lực để bước vào kỳ thi chuyên Tin.",
  },
];

function WorryRow({ worry, index }: { worry: (typeof worries)[number]; index: number }) {
  const Icon = worry.icon;
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <motion.div
      className={`grid grid-cols-[2.75rem_1fr] items-start gap-x-4 border-b border-[oklch(0.9_0.02_302)] py-6 md:py-4 ${
        index % 2 === 0
          ? "md:border-r md:pr-6"
          : "md:pl-6"
      }`}
      initial={reduceMotion ? false : { opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.6, delay: reduceMotion ? 0 : index * 0.1, ease: easeOut }}
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-brand-primary/30 text-brand-primary md:size-11">
        <Icon className="size-4.5 md:size-5" />
      </span>
      <div>
        <h3 className="text-base font-black leading-tight tracking-[-0.02em] text-brand-deep md:text-lg">
          {worry.title}
        </h3>
        <p className="mt-1.5 max-w-2xl text-pretty text-sm font-semibold leading-6 text-muted-foreground">
          {worry.copy}
        </p>
      </div>
    </motion.div>
  );
}

function ProblemSection() {
  return (
    <section id="van-de" className="px-5 py-12 md:px-8 md:py-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionIntro
            centered
            dense
            icon={<ShieldAlert className="size-6" />}
            title="Những băn khoăn quen thuộc trước mùa thi"
            copy="Sáu nỗi lo phụ huynh có con ôn thi chuyên Tin hay gặp nhất — trước khi tính đến chuyện chọn nơi học."
          />
        </Reveal>

        <div className="mt-8 grid border-t border-[oklch(0.9_0.02_302)] md:mt-6 md:grid-cols-2">
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
