"use client";

import { ContactDock } from "@/components/layout/contact-dock";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ClosingCta } from "./closing-cta";
import { IntroHero } from "./intro-hero";
import { MilestonesSection } from "./milestones-section";
import { MissionSection } from "./mission-section";
import { StatsSection } from "./stats-section";
import { StorySection } from "./story-section";
import { TeamSection } from "./team-section";
import { ValuesSection } from "./values-section";

export function VeChungToiContent() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />

      <IntroHero />

      <StorySection />

      <MissionSection />

      <ValuesSection />

      <MilestonesSection />

      <TeamSection />

      <StatsSection />

      <ClosingCta />

      <Footer />
      <ContactDock />
    </main>
  );
}
