import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "./faq-data";

export function FaqAccordion() {
  return (
    <Accordion className="rounded-2xl border border-[oklch(0.88_0.025_286)] bg-white px-6 shadow-[0_8px_0_oklch(0.27_0.1_292/0.06)] md:px-8">
      {faqItems.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="py-5 text-base font-black text-brand-deep hover:no-underline md:py-6 md:text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-pretty pb-5 text-sm font-semibold leading-7 text-muted-foreground md:pb-6 md:text-base">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
