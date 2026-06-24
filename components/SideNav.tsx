"use client";

import { motion } from "framer-motion";
import { sections } from "@/lib/sectionThemes";

type SideNavProps = {
  currentSection: number;
  onSectionChange: (index: number) => void;
};

export default function SideNav({
  currentSection,
  onSectionChange,
}: SideNavProps) {
  return (
    <nav
      className="fixed left-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-4 md:flex lg:left-8"
      aria-label="Section navigation"
    >
      {sections.map((section, index) => {
        const Icon = section.icon;
        const isActive = currentSection === index;

        return (
          <div key={section.id} className="group relative flex items-center">
            <motion.button
              type="button"
              onClick={() => onSectionChange(index)}
              aria-label={section.label}
              aria-current={isActive ? "true" : undefined}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={18} />
              {isActive && (
                <motion.span
                  layoutId="nav-active-ring"
                  className="absolute inset-0 rounded-full border-2 border-white/60"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>

            <motion.span
              initial={false}
              className="pointer-events-none absolute left-full ml-0 max-w-0 overflow-hidden whitespace-nowrap rounded-full border border-white/15 bg-black/40 px-0 py-1.5 text-xs font-medium uppercase tracking-wider text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:ml-3 group-hover:max-w-[140px] group-hover:px-3 group-hover:opacity-100"
            >
              {section.label}
            </motion.span>
          </div>
        );
      })}
    </nav>
  );
}
