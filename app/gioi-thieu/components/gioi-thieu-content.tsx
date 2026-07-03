"use client";

import { ContactDock } from "@/components/layout/contact-dock";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ClosingCta } from "./closing-cta";
import { IntroHero } from "./intro-hero";
import { MentorGrid } from "./mentor-grid";
import { StatsSection } from "./stats-section";
import { StoryTimeline } from "./story-timeline";
import { ValuesSection } from "./values-section";

export function GioiThieuContent() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />

      <IntroHero />

      <StoryTimeline mentorGrid={<MentorGrid />} />

      <StatsSection />

      <ValuesSection />

      <ClosingCta />

      <Footer />
      <ContactDock />
    </main>
  );
}
