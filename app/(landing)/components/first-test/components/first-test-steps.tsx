import { Reveal } from "@/components/landing/section-kit";
import { assessmentSteps } from "./first-test-data";

export function FirstTestSteps() {
  return (
    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {assessmentSteps.map((step, index) => (
        <Reveal key={step.title} delay={index * 0.06}>
          <article className="feature-column">
            <span className="grid size-12 place-items-center rounded-full bg-brand-primary text-lg font-black text-white">
              {index + 1}
            </span>
            <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.03em] text-brand-deep">
              {step.title}
            </h3>
            <p className="mt-3 text-pretty font-semibold leading-7 text-muted-foreground">
              {step.copy}
            </p>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
