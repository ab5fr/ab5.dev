"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Brain,
  Braces,
  ChevronRight,
  Container,
  Database,
  FileCode2,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/cv";

type CategoryMeta = {
  icon: LucideIcon;
  color: string;
  file: string;
  span: string;
};

const categoryMeta: Record<string, CategoryMeta> = {
  Languages: {
    icon: Braces,
    color: "#fbbf24",
    file: "languages.rs",
    span: "md:col-span-2 md:row-span-2",
  },
  "Backend & APIs": {
    icon: Server,
    color: "#38bdf8",
    file: "backend.go",
    span: "md:col-span-1",
  },
  "AI & Data": {
    icon: Brain,
    color: "#c084fc",
    file: "ai_pipeline.py",
    span: "md:col-span-1 md:row-span-2",
  },
  Databases: {
    icon: Database,
    color: "#34d399",
    file: "schema.sql",
    span: "md:col-span-1",
  },
  DevOps: {
    icon: Container,
    color: "#fb7185",
    file: "deploy.yml",
    span: "md:col-span-1",
  },
  Tooling: {
    icon: Wrench,
    color: "#94a3b8",
    file: "toolchain.sh",
    span: "md:col-span-1",
  },
  Automation: {
    icon: Bot,
    color: "#2dd4bf",
    file: "automate.ts",
    span: "md:col-span-2",
  },
};

function SkillCard({
  category,
  skills,
  index,
}: {
  category: string;
  skills: string[];
  index: number;
}) {
  const meta = categoryMeta[category];
  const Icon = meta.icon;
  const isLarge = meta.span.includes("row-span-2");

  return (
    <motion.article
      data-animate
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      whileHover={{ y: -3 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a12]/80 p-4 backdrop-blur-md md:p-5 ${meta.span}`}
    >
      {/* Top accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-80"
        style={{
          background: `linear-gradient(90deg, transparent, ${meta.color}, transparent)`,
        }}
      />

      {/* Corner glow */}
      <div
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundColor: `${meta.color}33` }}
      />

      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border"
            style={{
              borderColor: `${meta.color}44`,
              backgroundColor: `${meta.color}15`,
            }}
          >
            <Icon size={17} style={{ color: meta.color }} />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-white">{category}</h3>
            <p className="font-mono text-[10px] text-white/35">{meta.file}</p>
          </div>
        </div>
        <ChevronRight
          size={14}
          className="mt-1 shrink-0 text-white/20 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white/50"
        />
      </div>

      {/* Code-style skill list */}
      <div
        className={`flex-1 font-mono text-[11px] leading-relaxed md:text-xs ${
          isLarge ? "space-y-1.5" : "space-y-1"
        }`}
      >
        <p className="text-white/25">
          <span style={{ color: meta.color }}>export</span>{" "}
          <span className="text-sky-300/80">const</span>{" "}
          <span className="text-white/60">stack</span>{" "}
          <span className="text-white/25">= [</span>
        </p>
        <div
          className={`pl-3 ${isLarge ? "grid grid-cols-2 gap-x-2 gap-y-1" : "space-y-0.5"}`}
        >
          {skills.map((skill, i) => (
            <motion.p
              key={skill}
              className="text-white/75 transition-colors group-hover:text-white/90"
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 + i * 0.04 }}
            >
              <span className="text-white/20">&quot;</span>
              {skill}
              <span className="text-white/20">&quot;</span>
              {i < skills.length - 1 && (
                <span className="text-white/25">,</span>
              )}
            </motion.p>
          ))}
        </div>
        <p className="text-white/25">];</p>
      </div>

      {/* Bottom chip strip — visible on hover / always on large cards */}
      <div
        className={`mt-3 flex flex-wrap gap-1.5 border-t border-white/5 pt-3 ${
          isLarge ? "opacity-100" : "opacity-60 transition-opacity group-hover:opacity-100"
        }`}
      >
        {skills.slice(0, isLarge ? skills.length : 3).map((skill) => (
          <span
            key={`chip-${skill}`}
            className="rounded-md px-2 py-0.5 text-[10px] text-white/70"
            style={{ backgroundColor: `${meta.color}18` }}
          >
            {skill}
          </span>
        ))}
        {!isLarge && skills.length > 3 && (
          <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-white/40">
            +{skills.length - 3}
          </span>
        )}
      </div>
    </motion.article>
  );
}

export default function SkillsSection() {
  const totalSkills = skillGroups.reduce((n, g) => n + g.skills.length, 0);

  return (
    <div>
      <div data-animate className="mb-4 flex flex-col gap-3 md:mb-8 md:flex-row md:items-end md:justify-between md:gap-4">
        <div>
          <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-white/40">
            <FileCode2 size={13} />
            Stack
          </p>
          <h2 className="text-2xl font-bold text-white md:text-5xl">
            Technical Skills
          </h2>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-xs backdrop-blur-md">
          <span className="text-emerald-400/80">●</span>
          <span className="text-white/50">
            {skillGroups.length} modules · {totalSkills} exports
          </span>
        </div>
      </div>

      {/* IDE window chrome */}
      <div
        data-animate
        className="overflow-hidden rounded-2xl border border-white/10 bg-[#06060c]/90 shadow-2xl backdrop-blur-xl md:rounded-3xl"
      >
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-[11px] text-white/30">
            ~/ab5/stack — zsh
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2 p-2 md:grid-cols-3 md:gap-3 md:p-4">
          {skillGroups.map((group, i) => (
            <SkillCard
              key={group.category}
              category={group.category}
              skills={group.skills}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
