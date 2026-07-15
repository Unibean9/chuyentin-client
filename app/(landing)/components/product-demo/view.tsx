import Image from "next/image";
import { MonitorPlay } from "lucide-react";
import { Reveal, SectionIntro } from "@/components/landing/section-kit";

function DashboardMock() {
  return (
    <div className="dashboard-mock overflow-hidden rounded-2xl bg-white border border-[oklch(0.9_0.026_292)] shadow-xl">
      <Image
        src="/dashboard.png"
        alt="Giao diện luyện tập Chuyên Tin: đề bài, trình soạn code C++, kết quả chấm bài và bảng xếp hạng tuần"
        width={1536}
        height={1024}
        sizes="(min-width: 1280px) 70vw, 100vw"
        className="block h-auto w-full"
      />
    </div>
  );
}

function ProductDemo() {
  return (
    <section id="demo-san-pham" className="px-5 py-16 md:px-8 md:py-20 bg-background">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionIntro
            centered
            icon={<MonitorPlay className="size-8" />}
            title="Không gian luyện tập thực tế"
            copy="Giao diện trực quan tích hợp sẵn đề bài, editor soạn thảo C++, kết quả chấm bài tự động và bảng xếp hạng tuần giúp học sinh hào hứng làm bài."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-12">
          <DashboardMock />
        </Reveal>
      </div>
    </section>
  );
}

export default ProductDemo;
export { ProductDemo };
