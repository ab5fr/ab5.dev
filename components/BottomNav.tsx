"use client";

import { motion } from "framer-motion";
import { sections } from "@/lib/sectionThemes";

type BottomNavProps = {
  currentSection: number;
  onSectionChange: (index: number) => void;
};

export default function BottomNav({
  currentSection,
  onSectionChange,
}: BottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/50 px-2 py-2 backdrop-blur-xl md:hidden"
      aria-label="Section navigation"
    >
      <div className="mx-auto flex max-w-lg items-center justify-around">
        {sections.map((section, index) => {
          const Icon = section.icon;
          const isActive = currentSection === index;

          return (
            <motion.button
              key={section.id}
              type="button"
              onClick={() => onSectionChange(index)}
              aria-label={section.label}
              aria-current={isActive ? "true" : undefined}
              className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1 text-white/60"
              whileTap={{ scale: 0.92 }}
            >
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-transparent text-white/50"
                }`}
              >
                <Icon size={18} />
              </span>
              {isActive && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[10px] font-medium uppercase tracking-wide text-white"
                >
                  {section.label}
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
}
