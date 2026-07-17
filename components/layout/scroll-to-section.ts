import type { MouseEvent } from "react";

/** Scroll tới section trên trang, không để hash hiện trên URL. */
export function scrollToSection(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", window.location.pathname || "/");
}

export function handleSectionNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
  const hashIndex = href.indexOf("#");
  if (hashIndex === -1) return;

  const sectionId = href.slice(hashIndex + 1);
  if (!sectionId) return;
  if (!document.getElementById(sectionId)) return;

  event.preventDefault();
  scrollToSection(sectionId);
}
