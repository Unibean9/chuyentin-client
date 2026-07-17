"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { headerNavItems } from "./header-nav";
import { contactDockLinks } from "./contact-dock-data";

export function HeaderMobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="lg"
            className="h-11 gap-2 border-border px-3.5 font-black text-brand-deep md:hidden"
            aria-label="Mở menu điều hướng"
          />
        }
      >
        <Menu className="size-4" aria-hidden />
        <ChevronDown className="size-4 opacity-70" aria-hidden />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" sideOffset={8} className="w-56 p-2 md:hidden">
        {headerNavItems.map((item) => (
          <DropdownMenuItem
            key={item.label}
            render={
              <Link
                href={item.href}
                className="flex w-full rounded-md px-3 py-2.5 text-sm font-black text-brand-deep"
              />
            }
          >
            {item.label}
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator className="my-1.5" />

        <DropdownMenuItem
          render={
            <a
              href={contactDockLinks.zaloHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-between gap-2 rounded-md bg-primary px-3 py-2.5 text-sm font-black text-primary-foreground"
            />
          }
        >
          Đánh giá đầu vào
          <ArrowRight className="size-4" aria-hidden />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
