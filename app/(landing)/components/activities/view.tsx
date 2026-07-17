"use client";

import { Reveal } from "@/components/landing/section-kit";
import { activitiesData } from "./components/activity-data";
import { ActivitiesCoverflow } from "./components/activities-coverflow";

export function ActivitiesSection() {
  return (
    <section
      id="hoat-dong"
      className="section-soft-band overflow-x-clip py-12 text-foreground md:py-16"
    >
      <div className="mx-auto max-w-352 px-5 md:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(2rem,3.4vw,3.25rem)] font-black leading-[1.03] tracking-[-0.035em] text-balance text-brand-deep">
            Trải nghiệm các hoạt động ngoại khóa
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base md:leading-7">
            Tại Chuyên Tin, học sinh được tiếp cận khoa học thực tiễn để rèn luyện tư duy logic, tính kiên nhẫn và khám phá thế giới xung quanh thông qua các hoạt động thực hành.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.08}>
        <ActivitiesCoverflow items={activitiesData} />
      </Reveal>
    </section>
  );
}

export default ActivitiesSection;
