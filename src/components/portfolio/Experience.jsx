import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Code2, Rocket, GraduationCap, Palette, Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Dots } from "./Dots";

const initialItems = [
  {
    icon: Briefcase,
    role: "Web Development Intern",
    company: "Hello Future Technologies (Private) Limited · 4 Months ",
    date: "Nov 2025 — Feb 2026",
    location: "Remote · Internship  ",
    points: [
      "During my 4-month internship at Hello Future Technologies, I worked as a Full-Stack Web Developer building responsive interfaces and optimizing backend services. My role involved converting UI/UX designs from Figma into high-performance web applications using React.js, Vite, and Tailwind CSS. I collaborated with senior engineers on full-stack workflows and managed version control via Git."
    ]
  },
  {
    icon: Rocket,
    role: "International Client Project",
    company: "Sparta Tech Solutions · Present ",
    date: "Mar 2026 — Present",
    location: " Remote · Freelance Project",
    points: [
      "I worked with an international client as a Full-Stack Developer to build a SaaS platform from scratch. I handled the complete development, designed the database, and connected all the APIs. Working directly with the client, I completed the project on time and delivered a smooth, scalable web app."
    ]
  },
  {
    icon: Code2,
    role: "Full-Stack Developer",
    company: "DevelopersHub Corporation© · 2 Months",
    date: "June 2026 — July 2026",
    location: "Remote · Internship",
    points: [
      "Contributing as a MERN Stack Web Developer at DevelopersHub Corporation, building high-performance web applications with JavaScript. Working closely with senior developers to create pixel-perfect user interfaces with Tailwind CSS and optimize backend APIs for smooth data flow, while gaining hands-on experience in GitHub version control."
    ]
  },
  {
    icon: Palette,
    role: "UI/UX Design Intern",
    company: "FlyRank AI · 2 Months",
    date: "July 2026 — Aug 2026",
    location: "Remote · Internship",
    points: [
      "As a UI/UX Design Intern at Flyrank AI, I created easy-to-use digital designs using Figma for websites and mobile apps. My work involved turning ideas and requirements into clear sketches, clickable prototypes, and neat design layouts to improve user interaction."
    ]
  }
];

const hiddenItem = {
  icon: GraduationCap,
  role: "Senior Full Stack Developer",
  company: "Nexsoft Solutions · 1.5 Months",
  date: "Jun 2026 — July 2026",
  location: "Remote · Internship",
  points: [
    "I build high-end web applications and large-scale projects like full-stack e-commerce platforms for Nexsoft Solutions as a Senior Full Stack Developer. My role focuses on building modern frontends with JavaScript, creating real-time applications, and crafting fast user experiences. I take full ownership of the project lifecycle, writing clean code and delivering scalable web apps."
  ]
};

function Experience() {
  const [showMore, setShowMore] = useState(false);
  const items = showMore ? [...initialItems, hiddenItem] : initialItems;

  return (
    <section id="experience" className="relative py-16">
      <Dots count={6} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,oklch(0.16_0.008_60),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 md:pl-24">
        <SectionHeading eyebrow="WHAT I HAVE DONE SO FAR" title="Work Experience" />

        <div className="relative">
          {/* center timeline line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent md:left-1/2" />

          <div className="space-y-10">
            {items.map((it, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={it.role + i} className="relative grid md:grid-cols-2 md:gap-12">
                  {/* timeline icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-6 top-6 z-10 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-full border-2 border-[var(--gold)] bg-gold-gradient shadow-[0_0_30px_oklch(0.78_0.14_80/0.6)] md:left-1/2"
                  >
                    <span className="absolute -inset-1 rounded-full border border-[var(--gold)]/40 animate-pulse" />
                    <it.icon className="relative h-6 w-6 text-background" />
                  </motion.div>

                  {/* date */}
                  <div
                    className={`hidden md:block ${isLeft ? "md:order-2 md:pl-16" : "md:order-1 md:pr-16 md:text-right"}`}
                  >
                    <div className={`mt-6 inline-flex flex-col gap-2 ${isLeft ? "" : "items-end"}`}>
                      <span className={`inline-flex items-center gap-2 rounded-full border border-gold/40 bg-card/60 px-4 py-1.5 backdrop-blur shadow-gold ${isLeft ? "" : "self-end"}`}>
                        <Calendar className="h-3.5 w-3.5 text-[var(--gold)]" />
                        <span className="font-display text-base text-[var(--gold-light)]">{it.date}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs tracking-wider text-[var(--gold-light)]/70">
                        <MapPin className="h-3 w-3 text-[var(--gold)]" /> {it.location}
                      </span>
                    </div>
                  </div>

                  {/* card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className={`pl-16 md:pl-0 ${isLeft ? "md:order-1 md:pr-16 md:text-right" : "md:order-2 md:pl-16"}`}
                  >
                    <p className="mb-2 text-xs text-[var(--gold-light)]/80 md:hidden">{it.date}</p>
                    <div className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-card/70 p-6 backdrop-blur transition hover:border-gold/60 hover:shadow-gold">
                      <div className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.78_0.14_80/0.18),transparent_50%)]" />
                      </div>
                      <h3 className="text-2xl text-foreground">{it.role}</h3>
                      <p className="mb-3 text-sm text-[var(--gold-light)]">{it.company}</p>
                      
                      <ul className="space-y-1.5 text-sm text-foreground/70 text-justify [text-justify:inter-word]">
                        {it.points.map((p) => <li key={p}>• {p}</li>)}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Read More / Read Less Button */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="group relative flex items-center gap-2 rounded-none border-[3px] border-double border-[#654321] bg-card/80 px-6 py-3.5 text-sm font-semibold tracking-wider text-[var(--gold-light)] transition hover:text-[var(--gold)] active:scale-95 shadow-[inset_0_0_0_1.5px_var(--gold)]"
            >
              <span>{showMore ? "SHOW LESS" : "READ MORE"}</span>
              {showMore ? (
                <ChevronUp className="h-4 w-4 text-[var(--gold)] transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="h-4 w-4 text-[var(--gold)] transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Experience };