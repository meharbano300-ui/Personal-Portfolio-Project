import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Dots } from "./Dots";
const skills = [
  { name: "React", slug: "react", color: "61DAFB" },
  { name: "Vite", slug: "vite", color: "646CFF" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
  { name: "Tailwind", slug: "tailwindcss", color: "38BDF8" },
  { name: "Node.js", slug: "nodedotjs", color: "83CD29" },
  { name: "Express", slug: "express", color: "FFFFFF" },
  { name: "MongoDB", slug: "mongodb", color: "47A248" },
  { name: "React Router", slug: "reactrouter", color: "CA4245" },
{ name: "Lucide Icons", slug: "lucide", color: "F59E0B" },
{ name: "Figma", slug: "figma", color: "F24E1E" }
];
function Skills() {
  return <section id="skills" className="relative overflow-hidden py-16">
      <Dots count={6} />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,oklch(0.78_0.14_80/0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 md:pl-24">
        <SectionHeading eyebrow="TOOLS OF THE CRAFT" title="My Skills" />

        <div className="grid grid-cols-3 gap-5 sm:grid-cols-4 md:grid-cols-6">
          {skills.map((s, i) => <motion.div
    key={s.name}
    initial={{ opacity: 0, y: 30, rotate: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.05, duration: 0.5 }}
    whileHover={{ y: -8, scale: 1.05 }}
    className="group relative"
  >
              {
    /* Diamond shape */
  }
              <div className="relative mx-auto h-28 w-28">
                <div className="absolute inset-0 rotate-45 rounded-2xl border border-gold/30 bg-card/70 backdrop-blur transition group-hover:border-[var(--gold)] group-hover:shadow-gold-lg" />
                <div className="absolute inset-0 rotate-45 rounded-2xl bg-gold-gradient opacity-0 transition group-hover:opacity-15" />
                <div className="absolute inset-0 grid place-items-center">
                  <img
    src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
    alt={s.name}
    className="h-12 w-12 transition group-hover:scale-110"
    loading="lazy"
  />
                </div>
              </div>
              <p className="mt-4 text-center text-xs tracking-widest text-[var(--gold-light)]/90">
                {s.name.toUpperCase()}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
export {
  Skills
};
