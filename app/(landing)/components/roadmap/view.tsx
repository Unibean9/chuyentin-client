import { Route } from "lucide-react";
import { Reveal, SectionIntro } from "@/components/landing/section-kit";
import { RoadmapTimeline } from "./components/roadmap-timeline";

function RoadmapSection() {
  return (
    <section id="lo-trinh" className="section-soft-band px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-352">
        <div className="grid gap-12 lg:grid-cols-[minmax(15rem,0.6fr)_minmax(0,1.4fr)] lg:gap-12">
          <Reveal>
            <SectionIntro
              centered
              icon={<Route className="size-8" />}
              title="Lộ trình 3 giai đoạn, không học nhảy cóc"
              copy="Từ C++ nền tảng đến thuật toán thi chuyên — mỗi giai đoạn có đích đến rõ ràng trước khi qua giai đoạn tiếp theo."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <RoadmapTimeline />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default RoadmapSection;
export { RoadmapSection };
