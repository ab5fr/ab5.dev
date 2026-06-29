"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Braces,
  Container,
  Database,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/cv";

const categoryIcons: Record<string, LucideIcon> = {
  Languages: Braces,
  "Backend & APIs": Server,
  "AI & Data": Brain,
  Databases: Database,
  DevOps: Container,
  Tooling: Wrench,
  Automation: Bot,
};

export default function SkillsSection() {
  return (
    <div>
      <h2
        data-animate
        className="mb-5 text-2xl font-bold text-white md:mb-8 md:text-5xl"
      >
        Technical Skills
      </h2>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
        {skillGroups.map((group) => {
          const Icon = categoryIcons[group.category] ?? Braces;

          return (
            <motion.article
              key={group.category}
              data-animate
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/10 px-2.5 py-0.5 text-xs text-white/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
