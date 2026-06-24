import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/cv";

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Location", value: profile.location },
];

export default function ContactSection() {
  return (
    <div>
      <h2
        data-animate
        className="mb-4 text-3xl font-bold text-white md:text-5xl"
      >
        Get In Touch
      </h2>

      <p data-animate className="mb-8 max-w-xl text-white/70">
        Interested in backend architecture, AI workflows, or developer tooling?
        I&apos;m open to remote and hybrid opportunities.
      </p>

      <div data-animate className="mb-8 space-y-4">
        {contactItems.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10">
              <item.icon size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-white/50">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="font-medium text-white hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-medium text-white">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <motion.a
        data-animate
        href={`mailto:${profile.email}`}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-gray-900"
      >
        <Mail size={16} />
        Send a message
      </motion.a>
    </div>
  );
}
