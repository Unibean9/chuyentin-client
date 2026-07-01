import Image from "next/image";
import { ArrowRight } from "lucide-react";

const navItems = [
  { label: "Lộ trình", href: "#tracks" },
  { label: "Bài luyện", href: "#exercises" },
  { label: "Mentor", href: "#mentor" },
  { label: "Phụ huynh", href: "#parents" },
];

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
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/96 backdrop-blur">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="Chuyên Tin">
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            className="size-10 shrink-0"
            priority
          />
          <span className="font-display text-lg font-black tracking-[-0.025em] text-brand-deep">
            Chuyên Tin
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-black text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-brand-primary">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#parents"
            className="hidden text-sm font-black text-muted-foreground transition-colors hover:text-brand-primary sm:block"
          >
            Phụ huynh
          </a>
          <a
            href="#tu-van"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-black text-primary-foreground shadow-[0_4px_0_oklch(0.28_0.12_303)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
          >
            Đánh giá đầu vào
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
