import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeaderMobileMenu } from "./header-mobile-menu";

const navItems = [
  { label: "Về chúng tôi", href: "/ve-chung-toi" },
  { label: "Chương trình học", href: "#exercises" },
  { label: "Lộ trình học", href: "#mentor" },
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
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/96 backdrop-blur">
      <div className="mx-auto flex max-w-[88rem] items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Chuyên Tin — về trang chủ">
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
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-black text-muted-foreground md:flex">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-brand-primary"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-brand-primary"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <HeaderMobileMenu />

          <a
            href="#danh-gia"
            className="hidden h-11 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-black text-primary-foreground shadow-[0_4px_0_oklch(0.28_0.12_303)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 md:inline-flex"
          >
            Đánh giá đầu vào
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
