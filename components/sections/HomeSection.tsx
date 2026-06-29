import { motion } from "framer-motion";
import { Download, GitBranch, Globe, Mail } from "lucide-react";
import { profile } from "@/data/cv";

export default function HomeSection() {
  return (
    <div>
      <p
        data-animate
        className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/50"
      >
        {profile.location} · {profile.availability}
      </p>

      <h1
        data-animate
        className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
      >
        {profile.name}
      </h1>

      <p
        data-animate
        className="mb-6 text-lg font-medium text-white/80 md:text-2xl"
      >
        {profile.title}
      </p>

      <p
        data-animate
        className="mb-8 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base"
      >
        {profile.summary}
      </p>

      <div data-animate className="flex flex-wrap gap-3">
        <motion.a
          href="/Abdullah_Balila_CV.pdf"
          download
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md"
        >
          <Download size={16} />
          Download CV
        </motion.a>

        {[
          { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
          { icon: GitBranch, href: profile.github, label: "GitHub" },
          { icon: Globe, href: profile.website, label: "Website" },
        ].map(({ icon: Icon, href, label }) => (
          <motion.a
            key={label}
            href={href}
            target={label === "Email" ? undefined : "_blank"}
            rel={label === "Email" ? undefined : "noreferrer"}
            aria-label={label}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md"
          >
            <Icon size={16} />
          </motion.a>
        ))}
      </div>
    </div>
  );
}
