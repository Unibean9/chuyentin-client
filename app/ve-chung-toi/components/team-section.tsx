"use client";

import { motion } from "framer-motion";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import { founder, mentorTeam, type TeamMember } from "./data";
import { MediaFrame } from "./media-frame";
import { RevealHeading } from "./reveal-heading";

const easeOut = [0.16, 1, 0.3, 1] as const;

function MentorPortrait({ member, index }: { member: TeamMember; index: number }) {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <motion.article
      className="about-team-member"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: reduceMotion ? 0.2 : 0.7,
        delay: reduceMotion ? 0 : index * 0.07,
        ease: easeOut,
      }}
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

export function TeamSection() {
  const reduceMotion = useSsrSafeReducedMotion();

  return (
    <section id="doi-ngu" className="about-team px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-352">
        <RevealHeading
          as="h2"
          lines={["Đội ngũ"]}
          className="max-w-2xl text-balance text-[clamp(2rem,3.8vw,3.25rem)] font-black leading-[1.08] tracking-[-0.035em] text-brand-deep"
        />
        <motion.p
          className="mt-5 max-w-2xl text-pretty text-base leading-8 text-muted-foreground md:text-lg"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduceMotion ? 0.2 : 0.65, ease: easeOut }}
        >
          Mỗi mentor từng thi và dạy chuyên Tin — đọc code không chỉ để chấm đúng/sai mà để thấy
          cách con tư duy.
        </motion.p>

        <motion.article
          className="about-team-founder mt-12 md:mt-16"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: reduceMotion ? 0.2 : 0.7, ease: easeOut }}
        >
          <MediaFrame
            label={`Ảnh ${founder.name}`}
            photo={founder.photo}
            alt={`Ảnh chân dung ${founder.name}`}
            aspectClassName="aspect-4/5"
          />
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
        </motion.article>

        <div className="about-team-grid mt-10 md:mt-12">
          {mentorTeam.map((member, index) => (
            <MentorPortrait key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
