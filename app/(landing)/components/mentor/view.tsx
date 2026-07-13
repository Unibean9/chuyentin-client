"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { MediaFrame } from "@/components/landing/media-frame";
import { Reveal, SectionIntro } from "@/components/landing/section-kit";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { featuredMentors, founder, type TeamMember } from "./components/mentor-data";

const easeOut = [0.16, 1, 0.3, 1] as const;

function MentorPortrait({ member, index }: { member: TeamMember; index: number }) {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduceMotion ? 0.2 : 0.65, delay: reduceMotion ? 0 : index * 0.08, ease: easeOut }}
    >
      <MediaFrame
        label={`Ảnh ${member.name}`}
        photo={member.photo}
        alt={`Ảnh chân dung ${member.name}`}
        aspectClassName="aspect-3/4"
      />
      <h3 className="mt-4 text-lg font-black tracking-[-0.025em] text-brand-deep md:text-xl">
        {member.name}
      </h3>
      <p className="mt-1 text-sm font-black text-brand-primary">{member.role}</p>
    </motion.article>
  );
}

function MentorSection() {
  return (
    <section id="doi-ngu" className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-352">
        <Reveal>
          <SectionIntro
            centered
            icon={<Users className="size-8" />}
            title="Người thật đứng sau lộ trình"
            copy="Mỗi mentor từng thi và dạy chuyên Tin — đọc code không chỉ để chấm đúng/sai mà để thấy cách con tư duy."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,16rem)_1fr] md:items-center md:gap-9">
          <Reveal>
            <MediaFrame
              label={`Ảnh ${founder.name}`}
              photo={founder.photo}
              alt={`Ảnh chân dung ${founder.name}`}
              aspectClassName="aspect-4/5"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div>
              <h3 className="text-2xl font-black tracking-[-0.025em] text-brand-deep md:text-3xl">
                {founder.name}
              </h3>
              <p className="mt-1 text-sm font-black text-brand-primary md:text-base">
                {founder.role}
              </p>
              <p className="mt-3 max-w-md text-pretty text-base leading-7 text-muted-foreground">
                {founder.roleDetail}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:max-w-md md:mt-12">
          {featuredMentors.map((member, index) => (
            <MentorPortrait key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MentorSection;
export { MentorSection };
