import { Reveal, SectionIntro } from "@/components/landing/section-kit";
import { RoadmapJourney } from "./components/roadmap-journey";

function RoadmapSection() {
  return (
    <section id="lo-trinh" className="section-soft-band px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-352">
        <div className="flex flex-col items-center gap-6">
          <Reveal className="xl:hidden">
            <SectionIntro
              centered
              title="Hành trình chinh phục trường chuyên"
              copy="Từ tư duy giải quyết vấn đề đến luyện đề sát ngày thi — mỗi giai đoạn có đích đến rõ ràng trước khi qua giai đoạn tiếp theo."
            />
          </Reveal>

          <Reveal delay={0.08} className="w-full">
            <RoadmapJourney />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default RoadmapSection;
export { RoadmapSection };
