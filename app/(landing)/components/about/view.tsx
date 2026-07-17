"use client";

import Image from "next/image";
import { Compass, Flag, Target } from "lucide-react";
import { Reveal } from "@/components/landing/section-kit";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pillars = [
  {
    value: "su-menh",
    label: "Sứ mệnh",
    icon: Target,
    stance:
      "Học giỏi Tin không đến từ việc đoán trúng dạng đề, mà từ việc hiểu bản chất thuật toán.",
    points: [
      "Xây dựng tư duy thuật toán vững chắc, không học thuộc lời giải có sẵn.",
      "Mỗi buổi chữa bài, mentor chỉ rõ vì sao cách tư duy đó chưa đúng — không chỉ sửa đáp số.",
      "Học sinh tự tin xử lý được cả những dạng đề chưa từng gặp trong kỳ thi chuyên Tin.",
      "Kết quả chấm bài tự động và bảng xếp hạng tuần cho thấy tiến bộ thật, không chỉ điểm số cảm tính.",
    ],
  },
  {
    value: "tam-nhin",
    label: "Tầm nhìn",
    icon: Compass,
    stance:
      "Phụ huynh xứng đáng biết chính xác con đang học gì và tiến bộ ra sao, không phải chờ đến ngày thi mới biết kết quả.",
    points: [
      "Trở thành nơi phụ huynh và học sinh tin tưởng gửi gắm trọn lộ trình ôn thi Tin học chuyên.",
      "Không hứa chắc chắn đậu — chỉ cam kết sự rõ ràng ở từng giai đoạn học.",
      "Minh bạch trong đánh giá năng lực, để phụ huynh luôn biết con đang ở đâu.",
      "Mentor theo sát để điều chỉnh kịp thời ngay khi con học chưa đúng hướng.",
      "Đề luyện tập bám sát hơn 15 trường chuyên trên cả nước, không bó hẹp ở một đề thi duy nhất.",
    ],
  },
  {
    value: "muc-tieu",
    label: "Mục tiêu",
    icon: Flag,
    stance:
      "Một mục tiêu chỉ có ý nghĩa khi đo được, chứ không phải một lời chúc may mắn trước ngày thi.",
    points: [
      "Đi đúng lộ trình 5 giai đoạn: tư duy tính toán, lập trình nền tảng, thuật toán, thi đấu, luyện đề.",
      "Nắm chắc C++ và cấu trúc dữ liệu trước khi bước vào thuật toán nâng cao.",
      "Làm chủ các thuật toán trọng tâm thường xuất hiện trong đề thi chuyên Tin.",
      "Trải qua ít nhất ba lần thi thử sát đề thật trước ngày thi chính thức.",
      "Ngân hàng hơn 300 bài luyện bám sát đề chuyên & HSG Tin, cập nhật theo từng năm thi.",
    ],
  },
] as const;

function AboutPhoto() {
  return (
    <div className="image-slot relative h-full min-h-96 overflow-hidden rounded-3xl">
      <Image
        src="/about-us/gioi-thieu.png"
        alt="Mentor Chuyên Tin chỉ trực tiếp lên màn hình phân tích thuật toán cùng học sinh"
        fill
        sizes="(min-width: 1024px) 45vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}

function AboutSection() {
  return (
    <section id="ve-chung-toi" className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-352">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch lg:gap-16">
          <Reveal>
            <div>
              <div className="flex w-fit flex-col items-center">
                <h2 className="text-[clamp(2rem,3.4vw,3.25rem)] font-black leading-[1.04] tracking-[-0.035em] text-balance text-brand-deep">
                  Về Chuyên Tin
                </h2>
              </div>
              <p className="mt-3 text-pretty text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                Chuyên Tin ra đời để giúp học sinh lớp 9 tiếp cận Tin học chuyên sâu một cách bài bản — không học tủ, không đoán mò dạng đề. Đội ngũ mentor tốt nghiệp Khoa học máy tính và Công nghệ thông tin, từng thi đấu và giảng dạy chuyên Tin nhiều năm, đã đồng hành cùng hơn 480 học sinh qua hơn 1.200 buổi chữa bài 1:1.
              </p>

              <Tabs defaultValue={pillars[0].value} className="mt-8">
                <TabsList
                  variant="line"
                  className="h-auto w-full justify-start gap-6 rounded-none border-b border-[oklch(0.9_0.02_302)] bg-transparent p-0"
                >
                  {pillars.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <TabsTrigger
                        key={pillar.value}
                        value={pillar.value}
                        className="flex-none gap-2 rounded-none border-none bg-transparent px-0 pb-3 text-sm font-bold text-muted-foreground after:h-[3px] after:bg-brand-primary data-active:bg-transparent data-active:text-brand-deep data-active:shadow-none md:text-base"
                      >
                        <Icon className="size-4 text-brand-primary md:size-4.5" aria-hidden />
                        {pillar.label}
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {pillars.map((pillar) => (
                  <TabsContent
                    key={pillar.value}
                    value={pillar.value}
                    className="animate-in fade-in slide-in-from-bottom-1 mt-5 duration-500 ease-out motion-reduce:animate-none"
                  >
                    <p className="text-pretty text-base font-bold leading-7 text-brand-deep md:text-lg md:leading-8">
                      {pillar.stance}
                    </p>
                    <ul className="mt-4 space-y-3">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-primary" aria-hidden />
                          <span className="text-pretty text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="hidden lg:block">
            <AboutPhoto />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
export { AboutSection };
