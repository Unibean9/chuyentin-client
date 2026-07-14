"use client";

import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Code2,
  GraduationCap,
  Route,
} from "lucide-react";
import {
  type KeyboardEvent,
  type RefObject,
  useRef,
  useState,
} from "react";
import { useSsrSafeReducedMotion } from "@/components/landing/use-ssr-safe-reduced-motion";
import type { TeamMember } from "./mentor-data";

const easeOut = [0.16, 1, 0.3, 1] as const;
const achievementIcons = [GraduationCap, Code2, Route] as const;

type MentorShowcaseProps = {
  members: TeamMember[];
};

type MentorAvatarProps = {
  member: TeamMember;
  sizes: string;
  className?: string;
};

function MentorAvatar({ member, sizes, className = "" }: MentorAvatarProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const showPhoto = Boolean(member.photo) && !hasImageError;

  return (
    <span
      className={`relative grid aspect-square shrink-0 place-items-center overflow-hidden rounded-full bg-brand-lavender text-brand-deep ${className}`}
    >
      {showPhoto ? (
        <Image
          src={member.photo!}
          alt={`Ảnh chân dung ${member.name}`}
          fill
          sizes={sizes}
          className="object-cover"
          onError={() => setHasImageError(true)}
        />
      ) : (
        <span
          className="font-display text-[clamp(1.35rem,3vw,2.5rem)] font-bold tracking-[-0.03em]"
          aria-hidden="true"
        >
          {member.initials}
        </span>
      )}
    </span>
  );
}

function SelectorButton({
  member,
  isSelected,
  tabRef,
  onSelect,
  onKeyDown,
}: {
  member: TeamMember;
  isSelected: boolean;
  tabRef: RefObject<HTMLButtonElement | null>;
  onSelect: () => void;
  onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      ref={tabRef}
      type="button"
      id={`mentor-tab-${member.id}`}
      role="tab"
      aria-selected={isSelected}
      aria-controls={`mentor-panel-${member.id}`}
      tabIndex={isSelected ? 0 : -1}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      className="group flex w-24 shrink-0 flex-col items-center py-2 text-center md:w-30 lg:w-34"
    >
      <motion.span
        className="relative block rounded-full"
        animate={{
          y: isSelected ? -5 : 0,
          scale: isSelected ? 1.055 : 1,
        }}
        transition={{ duration: 0.34, ease: easeOut }}
      >
        <MentorAvatar
          member={member}
          sizes="(min-width: 1024px) 112px, (min-width: 768px) 96px, 72px"
          className="size-18 border-2 border-brand-primary/20 transition-[border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-brand-primary/55 group-focus-visible:border-brand-primary motion-reduce:transition-none md:size-24 lg:size-28"
        />
        {isSelected ? (
          <motion.span
            layoutId="mentor-selector-ring"
            className="pointer-events-none absolute -inset-1 rounded-full border-[3px] border-brand-accent shadow-[0_0_0_4px_oklch(0.83_0.16_86/0.24)]"
            transition={{ duration: 0.38, ease: easeOut }}
            aria-hidden="true"
          />
        ) : null}
      </motion.span>
      <span
        className={`relative mt-3 line-clamp-2 min-h-10 overflow-hidden rounded-full px-3 py-1 text-sm leading-5 transition-colors duration-200 motion-reduce:transition-none ${
          isSelected ? "font-black text-white" : "font-bold text-brand-deep/76 group-hover:text-brand-deep"
        }`}
      >
        {isSelected ? (
          <motion.span
            layoutId="mentor-selector-label"
            className="absolute inset-0 rounded-full bg-brand-deep"
            transition={{ duration: 0.38, ease: easeOut }}
            aria-hidden="true"
          />
        ) : null}
        <span className="relative z-10">{member.name}</span>
      </span>
    </button>
  );
}

function SelectorArrow({
  direction,
  onClick,
}: {
  direction: "previous" | "next";
  onClick: () => void;
}) {
  const isPrevious = direction === "previous";
  const Icon = isPrevious ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-brand-primary/45 bg-background text-brand-primary transition-[background-color,border-color,color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-primary hover:text-white focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-accent focus-visible:ring-offset-3 active:translate-y-0 motion-reduce:transition-none"
      aria-label={isPrevious ? "Xem mentor trước" : "Xem mentor tiếp theo"}
    >
      <Icon className="size-5" aria-hidden="true" />
    </button>
  );
}

export function MentorShowcase({ members }: MentorShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const reduceMotion = useSsrSafeReducedMotion();
  const selectedMember = members[selectedIndex];

  if (!selectedMember) return null;

  const selectMember = (index: number, focusTab = false) => {
    const normalizedIndex = (index + members.length) % members.length;
    setSelectedIndex(normalizedIndex);

    requestAnimationFrame(() => {
      const tab = tabRefs.current[normalizedIndex];
      tab?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "nearest",
        inline: "center",
      });
      if (focusTab) tab?.focus();
    });
  };

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const keyActions: Partial<Record<string, number>> = {
      ArrowLeft: index - 1,
      ArrowRight: index + 1,
      Home: 0,
      End: members.length - 1,
    };
    const nextIndex = keyActions[event.key];

    if (nextIndex === undefined) return;
    event.preventDefault();
    selectMember(nextIndex, true);
  };

  return (
    <div className="mt-10 md:mt-12">
      <div className="flex items-center gap-2 sm:gap-4">
        {members.length > 1 ? (
          <SelectorArrow
            direction="previous"
            onClick={() => selectMember(selectedIndex - 1)}
          />
        ) : null}

        <LayoutGroup id="mentor-selector">
          <div
            role="tablist"
            aria-label="Chọn mentor để xem hồ sơ"
            className="flex min-w-0 flex-1 snap-x snap-mandatory gap-2 overflow-x-auto px-1 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-3 lg:[justify-content:safe_center]"
          >
            {members.map((member, index) => (
              <div key={member.id} className="snap-center">
                <SelectorButton
                  member={member}
                  isSelected={selectedIndex === index}
                  tabRef={{
                    get current() {
                      return tabRefs.current[index] ?? null;
                    },
                    set current(node: HTMLButtonElement | null) {
                      tabRefs.current[index] = node;
                    },
                  }}
                  onSelect={() => selectMember(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                />
              </div>
            ))}
          </div>
        </LayoutGroup>

        {members.length > 1 ? (
          <SelectorArrow
            direction="next"
            onClick={() => selectMember(selectedIndex + 1)}
          />
        ) : null}
      </div>

      <div className="relative mt-24 md:mt-32">
        <div className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedMember.id}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              transition={{ duration: reduceMotion ? 0.1 : 0.28, ease: easeOut }}
            >
              <MentorAvatar
                member={selectedMember}
                sizes="(min-width: 768px) 192px, 136px"
                className="size-34 border-4 border-brand-accent bg-background shadow-[0_0_0_8px_oklch(0.95_0.024_304)] md:size-48"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          id={`mentor-panel-${selectedMember.id}`}
          role="tabpanel"
          aria-labelledby={`mentor-tab-${selectedMember.id}`}
          tabIndex={0}
          className="rounded-2xl border border-brand-primary/30 bg-background px-5 pb-6 pt-22 text-center focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-accent focus-visible:ring-offset-3 sm:px-8 md:px-12 md:pb-10 md:pt-30"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedMember.id}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0.1 : 0.32, ease: easeOut }}
              aria-live="polite"
            >
              <h3 className="text-balance text-2xl font-black tracking-[-0.03em] text-brand-deep md:text-4xl">
                {selectedMember.name}
              </h3>
              <p className="mt-2 text-sm font-black text-brand-primary md:text-base">
                {selectedMember.role}
              </p>
              <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                {selectedMember.roleDetail}
              </p>

              <ul className="mt-7 grid border-t border-brand-primary/20 pt-6 text-left md:mt-9 md:grid-cols-3 md:pt-7">
                {selectedMember.achievements.slice(0, 3).map((achievement, index) => {
                  const Icon = achievementIcons[index] ?? Route;

                  return (
                    <li
                      key={`${selectedMember.id}-${achievement.label}`}
                      className="flex items-start gap-3 py-3 first:pt-0 last:pb-0 md:px-6 md:py-0 md:first:pl-0 md:last:pr-0 md:[&+li]:border-l md:[&+li]:border-brand-primary/20"
                    >
                      <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-lavender text-brand-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs font-black text-brand-primary">
                          {achievement.label}
                        </span>
                        <span className="mt-1 block text-sm font-bold leading-6 text-brand-deep">
                          {achievement.value}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
