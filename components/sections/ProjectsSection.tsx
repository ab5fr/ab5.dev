import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Lock } from "lucide-react";
import { projects } from "@/data/cv";

export default function ProjectsSection() {
  return (
    <div>
      <h2
        data-animate
        className="mb-5 text-2xl font-bold text-white md:mb-8 md:text-5xl"
      >
        Projects
      </h2>

      <div className="grid gap-3 md:gap-5 lg:grid-cols-2">
        {projects.map((project) => {
          const codeLinks =
            project.links?.codes ??
            (project.links?.code
              ? [{ label: "Code", url: project.links.code }]
              : []);

          return (
            <motion.article
              key={project.title}
              data-animate
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-white/60">{project.role}</p>
                </div>
                {project.private && (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/60">
                    <Lock size={11} />
                    Private
                  </span>
                )}
              </div>

              <ul className="mb-4 flex-1 space-y-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm leading-relaxed text-white/75 before:mr-2 before:text-white/40 before:content-['•']"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/10 px-2.5 py-0.5 text-xs text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(codeLinks.length > 0 || project.links?.demo) && (
                <div className="flex flex-wrap gap-2">
                  {codeLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 min-w-[calc(50%-4px)] items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/10 py-2 text-xs text-white"
                    >
                      <GitBranch size={14} />
                      {link.label}
                    </a>
                  ))}
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 min-w-[calc(50%-4px)] items-center justify-center gap-1.5 rounded-lg bg-white py-2 text-xs font-medium text-gray-900"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              )}
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
