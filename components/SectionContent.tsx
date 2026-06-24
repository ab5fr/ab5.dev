"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { staggerSectionContent } from "@/lib/animations";

type SectionContentProps = {
  children: React.ReactNode;
  sectionKey: string;
};

export default function SectionContent({
  children,
  sectionKey,
}: SectionContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      staggerSectionContent(containerRef.current, reducedMotion);
    },
    { dependencies: [sectionKey], scope: containerRef }
  );

  useEffect(() => {
    containerRef.current?.scrollTo({ top: 0 });
  }, [sectionKey]);

  return (
    <div
      ref={containerRef}
      data-section-scroll
      className="flex h-dvh min-h-0 flex-col overflow-y-auto overscroll-y-contain px-5 pb-24 pt-8 [-webkit-overflow-scrolling:touch] md:px-12 md:pb-10 md:pl-24 md:pt-10 lg:px-16 lg:pl-28"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col justify-start py-2 md:min-h-full md:justify-center md:py-0">
        {children}
      </div>
    </div>
  );
}
