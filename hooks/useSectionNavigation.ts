"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TRANSITION_DURATION_MS, sections } from "@/lib/sectionThemes";

const SWIPE_THRESHOLD = 50;
const SCROLL_EDGE_TOLERANCE = 8;

function getScrollContainer(): HTMLElement | null {
  return document.querySelector("[data-section-scroll]");
}

function canScrollDown(container: HTMLElement) {
  return (
    container.scrollTop + container.clientHeight <
    container.scrollHeight - SCROLL_EDGE_TOLERANCE
  );
}

function canScrollUp(container: HTMLElement) {
  return container.scrollTop > SCROLL_EDGE_TOLERANCE;
}

export function useSectionNavigation() {
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(1);
  const currentSectionRef = useRef(0);
  const isTransitioningRef = useRef(false);
  const touchStartY = useRef(0);
  const touchStartScrollTop = useRef(0);
  const lockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navigateTo = useCallback((index: number) => {
    const current = currentSectionRef.current;
    if (index < 0 || index >= sections.length || index === current) return;

    setDirection(index > current ? 1 : -1);
    isTransitioningRef.current = true;
    currentSectionRef.current = index;
    setCurrentSection(index);

    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      isTransitioningRef.current = false;
    }, TRANSITION_DURATION_MS);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isTransitioningRef.current) return;
      if (Math.abs(e.deltaY) < 30) return;

      const container = getScrollContainer();
      if (container) {
        if (e.deltaY > 0 && canScrollDown(container)) return;
        if (e.deltaY < 0 && canScrollUp(container)) return;
      }

      const current = currentSectionRef.current;
      if (e.deltaY > 0 && current < sections.length - 1) {
        navigateTo(current + 1);
      } else if (e.deltaY < 0 && current > 0) {
        navigateTo(current - 1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0]?.clientY ?? 0;
      touchStartScrollTop.current = getScrollContainer()?.scrollTop ?? 0;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioningRef.current) return;

      const container = getScrollContainer();
      const endY = e.changedTouches[0]?.clientY ?? 0;
      const fingerDelta = touchStartY.current - endY;
      const scrollDelta =
        (container?.scrollTop ?? 0) - touchStartScrollTop.current;

      // User was scrolling content inside the section — don't change section
      if (Math.abs(scrollDelta) > 12) return;
      if (Math.abs(fingerDelta) < SWIPE_THRESHOLD) return;

      const current = currentSectionRef.current;

      if (fingerDelta > 0 && current < sections.length - 1) {
        if (container && canScrollDown(container)) return;
        navigateTo(current + 1);
      } else if (fingerDelta < 0 && current > 0) {
        if (container && canScrollUp(container)) return;
        navigateTo(current - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigateTo]);

  useEffect(() => {
    return () => {
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    };
  }, []);

  return {
    currentSection,
    direction,
    goToSection: navigateTo,
  };
}
