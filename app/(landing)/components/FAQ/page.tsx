import { Reveal, SectionIntro } from "@/components/landing/section-kit";
import { FaqAccordion } from "./components/faq-accordion";

function FAQSection() {
  return (
    <section id="hoi-dap" className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionIntro
            centered
            title="Câu hỏi thường gặp"
            copy="Những băn khoăn phụ huynh hay hỏi trước khi cho con bắt đầu."
          />
        </Reveal>

        <Reveal delay={0.06} className="mt-10">
          <FaqAccordion />
        </Reveal>
      </div>
    </section>
  );
}

export default FAQSection;
export { FAQSection };
