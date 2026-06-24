import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/data/cv";

export default function EducationSection() {
  return (
    <div>
      <h2
        data-animate
        className="mb-8 text-3xl font-bold text-white md:text-5xl"
      >
        Education
      </h2>

      <div className="space-y-5">
        {education.map((item) => (
          <motion.div
            key={item.degree}
            data-animate
            whileHover={{ x: 6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10">
                <GraduationCap size={22} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="text-white/70">{item.institution}</p>
                <p className="text-sm text-white/50">
                  {item.location} · {item.period}
                </p>
                <p className="mt-2 inline-block rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
                  {item.detail}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
