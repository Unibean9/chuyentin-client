import { Users } from "lucide-react";
import { Reveal, SectionIntro } from "@/components/landing/section-kit";
import { MentorShowcase } from "./components/mentor-showcase";
import { featuredMentors, founder } from "./components/mentor-data";

function MentorSection() {
  const members = [founder, ...featuredMentors];

  return (
    <section id="doi-ngu" className="practice-grid px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-352">
        <Reveal>
          <SectionIntro
            centered
            icon={<Users className="size-8" />}
            title="Đội ngũ mentor"
            copy="Mỗi mentor từng thi và dạy chuyên Tin — đọc code không chỉ để chấm đúng/sai mà để thấy cách con tư duy."
          />
        </Reveal>

        <MentorShowcase members={members} />
      </div>
    </section>
  );
}

export default MentorSection;
export { MentorSection };
