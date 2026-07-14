"use client";

import FAQSection from "@/app/(landing)/components/FAQ/view";
import FirstTest from "@/app/(landing)/components/first-test/view";
import MentorSection from "@/app/(landing)/components/mentor/view";
import ProblemSection from "@/app/(landing)/components/problem/view";
import RoadmapSection from "@/app/(landing)/components/roadmap/view";
import StatsSection from "@/app/(landing)/components/stats/view";
import TestimonialSection from "@/app/(landing)/components/testimonial/view";
import Hero from "@/app/(landing)/components/hero/view";
import WhyUs from "@/app/(landing)/components/why-us/view";
import HowItWorks from "@/app/(landing)/components/how-it-works/view";
import ActivitiesSection from "@/app/(landing)/components/activities/view";
// import ProductDemo from "@/app/(landing)/components/product-demo/view";
import { Footer } from "@/components/layout/footer";
import { ContactDock } from "@/components/layout/contact-dock";
import { Header } from "@/components/layout/header";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Header />

      <Hero />

      <ProblemSection />

      <WhyUs />

      <HowItWorks />

      <RoadmapSection />

      <StatsSection />

      <ActivitiesSection />

      <MentorSection />

      {/* <ProductDemo /> */}

      <TestimonialSection />

      <FAQSection />

      <FirstTest />

      <Footer />
      <ContactDock />
    </main>
  );
}
