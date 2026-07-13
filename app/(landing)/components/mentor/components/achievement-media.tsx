"use client";

import { useEffect, useRef, useState } from "react";
import { Award } from "lucide-react";
import { MediaFrame } from "@/components/landing/media-frame";
import type { TeamMember } from "./mentor-data";

export function AchievementMedia({
  member,
  aspectClassName,
}: {
  member: TeamMember;
  aspectClassName: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const panelId = `mentor-achievements-${member.id}`;

  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePress);
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="group relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
      }}
    >
      <MediaFrame
        label={`Ảnh ${member.name}`}
        photo={member.photo}
        alt={`Ảnh chân dung ${member.name}`}
        aspectClassName={aspectClassName}
      />

      <button
        type="button"
        className="absolute inset-0 z-30 rounded-2xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-primary/55 focus-visible:ring-offset-3"
        aria-label={`${isOpen ? "Ẩn" : "Xem"} thành tích của ${member.name}`}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            setIsOpen(false);
            event.currentTarget.blur();
          }
        }}
      />

      <span
        className={`pointer-events-none absolute right-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full bg-white/92 px-2.5 py-1.5 text-[0.68rem] font-black text-brand-deep shadow-sm transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0 motion-reduce:transition-none ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden
      >
        <Award className="size-3.5 text-brand-primary" />
        Thành tích
      </span>

      <div
        id={panelId}
        className={`pointer-events-none absolute inset-0 z-20 flex flex-col justify-end overflow-hidden rounded-2xl bg-brand-deep/95 p-4 text-white transition duration-300 ease-out group-hover:opacity-100 group-hover:blur-none group-focus-within:opacity-100 group-focus-within:blur-none motion-reduce:transition-none ${
          isOpen ? "opacity-100 blur-none" : "opacity-0 blur-[2px]"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`transition-transform duration-300 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0 motion-reduce:transition-none ${
            isOpen ? "translate-y-0" : "translate-y-2"
          }`}
        >
          <div className="mb-3 flex items-end justify-between gap-3 border-b border-white/20 pb-2.5">
            <p className="text-sm font-black">Thành tích nổi bật</p>
            {member.achievementNote ? (
              <p className="text-right text-[0.62rem] font-bold text-white/60">
                {member.achievementNote}
              </p>
            ) : null}
          </div>

          <ul className="space-y-2.5">
            {member.achievements.map((achievement) => (
              <li key={achievement.label}>
                <p className="text-[0.62rem] font-black uppercase tracking-[0.05em] text-white/60">
                  {achievement.label}
                </p>
                <p className="mt-0.5 text-xs font-bold leading-[1.35] text-white">
                  {achievement.value}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
