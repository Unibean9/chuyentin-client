import Image from "next/image";
import { Reveal } from "@/components/landing/section-kit";
import { StatCounter } from "@/components/landing/stat-counter";
import { stats, statsVisual } from "./components/stats-data";

function StatsSection() {
  return (
    <section id="ket-qua" className="stats-section relative w-full overflow-visible">
      <div className="stats-band relative z-0 w-full">
        <div className="stats-band-stage relative">
          <div className="stats-band-copy relative z-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-10 sm:gap-y-9 lg:gap-x-12">
              {stats.map((stat, index) => (
                <Reveal key={stat.id} delay={0.06 + index * 0.05}>
                  <p className="text-[clamp(1.95rem,4.2vw,3rem)] font-black leading-none tracking-[-0.04em] text-white">
                    <StatCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      suffixClassName="text-brand-accent"
                    />
                  </p>
                  <p className="mt-2 text-pretty text-sm font-semibold leading-5 text-white/88">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <p className="stats-band-tagline text-pretty font-medium leading-7 text-white/88">
                Mỗi con số là một phần trong hành trình Chuyên Tin đồng hành cùng học sinh ôn thi
                chuyên Tin và HSG Tin học.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="stats-band-visual">
            <div className="stats-band-photo">
              <Image
                src={statsVisual.path}
                alt={statsVisual.alt}
                width={statsVisual.width}
                height={statsVisual.height}
                sizes="(min-width: 1024px) 52rem, 100vw"
                className="stats-band-image"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
export { StatsSection };
