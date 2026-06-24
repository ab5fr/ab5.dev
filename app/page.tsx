"use client";

import { AnimatePresence, motion } from "framer-motion";
import WaveBackground from "@/components/WaveBackground";
import SideNav from "@/components/SideNav";
import BottomNav from "@/components/BottomNav";
import SectionContent from "@/components/SectionContent";
import HomeSection from "@/components/sections/HomeSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import { sections } from "@/lib/sectionThemes";

const sectionComponents = [
  HomeSection,
  SkillsSection,
  ProjectsSection,
  EducationSection,
  ContactSection,
];

export default function Home() {
  const { currentSection, direction, goToSection } = useSectionNavigation();
  const ActiveSection = sectionComponents[currentSection];

  return (
    <div className="relative h-dvh overflow-hidden text-white">
      <WaveBackground sectionIndex={currentSection} />

      <SideNav
        currentSection={currentSection}
        onSectionChange={goToSection}
      />
      <BottomNav
        currentSection={currentSection}
        onSectionChange={goToSection}
      />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={sections[currentSection].id}
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -60 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <SectionContent sectionKey={sections[currentSection].id}>
            <ActiveSection />
          </SectionContent>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
