"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HeaderMobileMenu } from "./header-mobile-menu";

const navItems = [
  { label: "Vì sao chọn Chuyên Tin", href: "/#vi-sao-chuyen-tin", sectionId: "vi-sao-chuyen-tin" },
  { label: "Lộ trình học", href: "/#lo-trinh", sectionId: "lo-trinh" },
  { label: "Chương trình học", href: "/#exercises", sectionId: "exercises" },
  { label: "Đội ngũ", href: "/#doi-ngu", sectionId: "doi-ngu" },
] as const;

export function LogoMark() {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={40}
      height={40}
      className="size-10 shrink-0"
      aria-hidden
    />
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.sectionId))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-white/96 backdrop-blur transition-[padding,box-shadow,border-color] duration-300 ease-out",
        isScrolled
          ? "border-border py-2 shadow-[0_10px_28px_-18px_oklch(0.28_0.12_303/0.5)] md:py-2.5"
          : "border-transparent py-4",
      )}
    >
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Chuyên Tin — về trang chủ">
          <motion.span
            className="flex shrink-0"
            animate={{ scale: isScrolled ? 0.86 : 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image src="/logo.png" alt="" width={40} height={40} className="size-10" priority />
          </motion.span>
          <span className="font-display text-lg font-black tracking-[-0.025em] text-brand-deep">
            Chuyên Tin
          </span>
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-black text-muted-foreground md:flex">
          {navItems.map((item) => {
            const isActive = item.sectionId === activeSection;

            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 transition-colors",
                  isActive ? "text-brand-primary" : "hover:text-brand-primary",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="header-nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-lavender"
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 420, damping: 34 }
                    }
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <HeaderMobileMenu />

          <motion.a
            href="/#danh-gia"
            whileTap={prefersReducedMotion ? undefined : { scale: 0.96, y: 0 }}
            className="hidden h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-black text-primary-foreground shadow-[0_4px_0_oklch(0.28_0.12_303)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 md:inline-flex"
          >
            Đánh giá đầu vào
            <ArrowRight className="size-4" />
          </motion.a>
        </div>
      </div>
    </header>
  );
}
