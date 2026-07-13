import { Reveal } from "@/components/landing/section-kit";
import { TestimonialCarousel } from "./components/testimonial-carousel";

function TestimonialSection() {
  return (
    <section id="cam-nhan" className="section-soft-band py-16 md:py-20">
      <div className="mx-auto max-w-352 px-5 md:px-8">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-8">
            <h2 className="text-balance text-[clamp(1.9rem,3.4vw,2.9rem)] font-black leading-[1.08] tracking-[-0.03em] text-brand-deep">
              Phụ huynh và học sinh nói gì
            </h2>
            <p className="max-w-md text-pretty leading-7 text-muted-foreground md:text-right">
              Chia sẻ về hành trình ôn thi chuyên Tin cùng con — góc nhìn từ phụ huynh và học
              sinh.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.08} className="mt-12">
        <TestimonialCarousel />
      </Reveal>

      <p className="mx-auto mt-6 max-w-352 px-5 text-center text-xs font-bold text-muted-foreground/80 md:px-8">
        Nội dung minh hoạ — sẽ thay bằng chia sẻ thật từ phụ huynh và học sinh.
      </p>
    </section>
  );
}

export default TestimonialSection;
export { TestimonialSection };
