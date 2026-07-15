"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
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

/** Chậm hơn, bớt “cắt cứng” khi chữ hiện */
const textRevealEase = [0.22, 1, 0.36, 1] as const;
const enterEase = [0.22, 1, 0.36, 1] as const;
const TEXT_REVEAL_MS = 0.98;
const achievementIcons = [GraduationCap, Code2, Route] as const;

const listItemEnter = {
  hidden: { y: 16, opacity: 0.55, scale: 0.94 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.72, ease: enterEase },
  },
};

type MentorShowcaseProps = {
  members: TeamMember[];
};

function MentorAvatar({
  member,
  sizes,
  className = "",
  dimmed = false,
}: {
  member: TeamMember;
  sizes: string;
  className?: string;
  dimmed?: boolean;
}) {
  const [hasImageError, setHasImageError] = useState(false);
  const showPhoto = Boolean(member.photo) && !hasImageError;

  return (
    <span
      className={`relative grid aspect-square shrink-0 place-items-center overflow-hidden rounded-full bg-white text-brand-deep ${className}`}
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
          className="font-display text-[clamp(1.25rem,2.8vw,2.35rem)] font-bold tracking-[-0.03em]"
          aria-hidden="true"
        >
          {member.initials}
        </span>
      )}
      <span
        className={`absolute inset-0 rounded-full bg-brand-primary/72 transition-opacity duration-500 ease-out motion-reduce:duration-150 ${
          dimmed ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      />
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
      aria-controls="mentor-panel"
      tabIndex={isSelected ? 0 : -1}
      onClick={onSelect}
      onKeyDown={onKeyDown}
      className="group flex w-full flex-col items-center gap-2 py-0.5 text-center"
    >
      <span className="relative">
        {/* Ring cố định tại chỗ — sáng lên, không di chuyển layoutId */}
        <span
          className={`pointer-events-none absolute -inset-[3px] rounded-full border-[3px] border-white transition-opacity duration-500 ease-out motion-reduce:duration-150 ${
            isSelected ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />
        <MentorAvatar
          member={member}
          dimmed={!isSelected}
          sizes="(min-width: 768px) 140px, 108px"
          className={`size-[5.5rem] transition-transform duration-500 ease-out motion-reduce:duration-150 md:size-[7.25rem] ${
            isSelected ? "scale-105" : "scale-100 group-hover:scale-[1.02]"
          }`}
        />
      </span>
      <span
        className={`line-clamp-2 min-h-8 max-w-[8rem] px-0.5 text-xs leading-snug transition-colors duration-500 ease-out md:min-h-9 md:max-w-none md:text-sm ${
          isSelected
            ? "font-semibold text-white"
            : "font-medium text-white/75 group-hover:text-white"
        }`}
      >
        {member.name}
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
      className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-brand-primary transition-[transform,background-color] duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/50 active:translate-y-0 motion-reduce:transition-none md:size-11"
      aria-label={isPrevious ? "Xem mentor trước" : "Xem mentor tiếp theo"}
    >
      <Icon className="size-5" aria-hidden="true" strokeWidth={2.75} />
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
    <div className="mt-5 md:mt-6">
      <motion.div
        className="flex items-center gap-2 md:gap-3"
        initial={reduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: true, margin: "-70px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: reduceMotion ? 0 : 0.1,
              delayChildren: reduceMotion ? 0 : 0.06,
            },
          },
        }}
      >
        {members.length > 1 ? (
          <motion.div variants={listItemEnter} className="shrink-0">
            <SelectorArrow
              direction="previous"
              onClick={() => selectMember(selectedIndex - 1)}
            />
          </motion.div>
        ) : null}

        <motion.div
          role="tablist"
          aria-label="Chọn mentor để xem hồ sơ"
          className="flex min-w-0 flex-1 justify-between gap-1 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.055,
              },
            },
          }}
        >
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              className="min-w-0 flex-1"
              variants={listItemEnter}
            >
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
            </motion.div>
          ))}
        </motion.div>

        {members.length > 1 ? (
          <motion.div variants={listItemEnter} className="shrink-0">
            <SelectorArrow
              direction="next"
              onClick={() => selectMember(selectedIndex + 1)}
            />
          </motion.div>
        ) : null}
      </motion.div>

      <motion.div
        className="relative mx-auto mt-5 w-full max-w-4xl md:mt-6"
        initial={reduceMotion ? false : { y: 22, opacity: 0.55, filter: "blur(4px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: reduceMotion ? 0.15 : 0.9,
          delay: reduceMotion ? 0 : 0.22,
          ease: enterEase,
        }}
      >
        <div className="relative z-20 flex justify-center">
          <div className="relative -mb-16 md:-mb-20">
            <MentorAvatar
              key={selectedMember.id}
              member={selectedMember}
              sizes="(min-width: 768px) 240px, 176px"
              className="size-44 border-[5px] border-white md:size-52 md:border-[6px]"
            />
          </div>
        </div>

        <div
          id="mentor-panel"
          role="tabpanel"
          aria-labelledby={`mentor-tab-${selectedMember.id}`}
          tabIndex={0}
          className="relative z-10 overflow-hidden rounded-[1.75rem] border border-white bg-transparent px-6 pb-6 pt-[4.5rem] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/40 sm:px-10 md:rounded-[2rem] md:px-14 md:pb-8 md:pt-[5.5rem]"
        >
          <span
            className="pointer-events-none absolute left-1/2 top-0 z-[1] h-[2px] w-44 -translate-x-1/2 -translate-y-px bg-brand-primary md:w-52"
            aria-hidden="true"
          />

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={selectedMember.id}
              initial={
                reduceMotion
                  ? false
                  : {
                      clipPath: "inset(0 100% 0 0)",
                      opacity: 0.28,
                      filter: "brightness(0.72)",
                    }
              }
              animate={{
                clipPath: "inset(0 0% 0 0)",
                opacity: 1,
                filter: "brightness(1.08)",
              }}
              exit={{ opacity: 0, transition: { duration: 0 } }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: TEXT_REVEAL_MS,
                      ease: textRevealEase,
                      opacity: { duration: TEXT_REVEAL_MS * 0.85, ease: textRevealEase },
                      filter: { duration: TEXT_REVEAL_MS * 0.9, ease: textRevealEase },
                    }
              }
              className="relative z-[1] text-center"
              aria-live="polite"
            >
              <h3 className="min-h-[1.85em] text-balance text-[1.35rem] font-bold tracking-[-0.02em] text-white md:text-[1.85rem]">
                {selectedMember.name}
              </h3>
              <p className="mt-1.5 min-h-[1.5em] text-sm font-semibold text-brand-accent md:text-base">
                {selectedMember.role}
              </p>
              <p className="mx-auto mt-3 min-h-[5.25rem] max-w-[62ch] text-pretty text-[0.92rem] leading-7 text-white md:mt-3.5 md:min-h-[5.5rem] md:text-[1.02rem] md:leading-8">
                {selectedMember.roleDetail}
              </p>

              <ul className="mt-4 grid border-t border-white/30 pt-3.5 text-left md:mt-5 md:grid-cols-3 md:pt-4">
                {selectedMember.achievements.slice(0, 3).map((achievement, index) => {
                  const Icon = achievementIcons[index] ?? Route;

                  return (
                    <li
                      key={`${selectedMember.id}-${achievement.label}`}
                      className="flex min-h-[3.75rem] items-start gap-2.5 py-1.5 first:pt-0 last:pb-0 md:min-h-[4rem] md:gap-3 md:px-5 md:py-0 md:first:pl-0 md:last:pr-0 md:[&+li]:border-l md:[&+li]:border-white/30"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/16 text-brand-accent">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.7rem] font-bold text-brand-accent">
                          {achievement.label}
                        </span>
                        <span className="mt-0.5 block text-xs font-semibold leading-5 text-white md:text-sm md:leading-6">
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
      </motion.div>

      {members.length > 1 ? (
        <motion.div
          className="mt-4 flex items-center justify-center gap-2.5 md:mt-5"
          role="group"
          aria-label="Chỉ số mentor"
          initial={reduceMotion ? false : { opacity: 0.5, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: reduceMotion ? 0.12 : 0.7,
            delay: reduceMotion ? 0 : 0.4,
            ease: enterEase,
          }}
        >
          {members.map((member, index) => {
            const isActive = index === selectedIndex;

            return (
              <button
                key={member.id}
                type="button"
                aria-label={`Chọn ${member.name}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => selectMember(index)}
                className="grid size-8 place-items-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/55"
              >
                <span
                  className={`block size-2.5 rounded-full transition-opacity duration-500 ease-out ${
                    isActive ? "bg-white" : "bg-white/35 hover:bg-white/55"
                  }`}
                />
              </button>
            );
          })}
        </motion.div>
      ) : null}
    </div>
  );
}
