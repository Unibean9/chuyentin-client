import { Handshake, MapPinned, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal, SectionIntro } from "@/components/landing/section-kit";
import { values } from "./data";

const valueIcons = [Handshake, MapPinned, Sparkles];

export function ValuesSection() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-352">
        <Reveal>
          <SectionIntro
            centered
            icon={<ShieldCheck className="size-8" />}
            title="Điều phụ huynh có thể quan sát được"
            copy="Không phải khẩu hiệu — đây là những điều thể hiện trong cách chúng tôi vận hành mỗi tuần."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = valueIcons[index];

            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="feature-column">
                  <Icon className="size-11 text-brand-primary" />
                  <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.03em] text-brand-deep">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-pretty font-semibold leading-7 text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
