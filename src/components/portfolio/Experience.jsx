import { motion } from "framer-motion";
import { Briefcase, Code2, Rocket, GraduationCap, Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Dots } from "./Dots";
const items = [
  {
    icon: Code2,
    role: "Full Stack Web Developer",
    company: "ABS Groups \xB7 Present",
    date: "Mar 2025 \u2014 Present",
    location: "Remote \xB7 Mentored Role",
    points: [
      "Working as a Full Stack Developer at ABS to build responsive web applications using the MERN stack, focusing on seamless frontend and backend integration. I specialize in creating agency level UI/UX designs with React and Tailwind CSS. My role involves developing scalable logic and integrating APIs to deliver high quality, modern web solutions."
    ]
  },
  {
    icon: Briefcase,
    role: "Web Development Intern",
    company: "Hello Future Technologies",
    date: "Nov 2025 \u2014 Feb 2025",
    location: "Remote \xB7 Internship",
    points: [
      "During my 3 month internship at Hello Future Technologies, I specialized in translating complex Figma designs into high-end, responsive interfaces using React.js and Tailwind CSS, ensuring a premium user experience. My role involved collaborating with senior engineers to optimize front-end performance, also gained hands-on experience in managing version control via Git."
    ]
  },
  {
    icon: Rocket,
    role: "International Client Project",
    company: "Sparta Tech Solutions",
    date: "Mar 2026 \u2014 Apr 2026",
    location: "Remote \xB7 International",
    points: [
      "I worked closely with an international client as a Full Stack Developer to build a complex SaaS platform from scratch. My role involved leading the complete development lifecycle, managing database architecture, and ensuring seamless API integration. Working directly with the leadership, I successfully coordinated across borders to deliver a high end, scalable digital solution under strict deadlines."
    ]
  },
  {
    icon: GraduationCap,
    role: "Senior Full Stack Developer",
    company: "Nexsoft Solutions \xB7 Present",
    date: "Jun 2026 \u2014 Present",
    location: "Remote \xB7 Internship",
    points: [
      "I have been developing high end web applications and major projects for Nexsoft Solutions as a Senior Full Stack Developer. My role focuses on architecting modern frontends with JavaScript, building real time applications, and crafting premium, performance optimized user experiences. I take full ownership of the project lifecycle, ensuring clean code standards and delivering scalable solutions that meet corporate objectives."
    ]
  }
];
function Experience() {
  return <section id="experience" className="relative py-16">
      <Dots count={6} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,oklch(0.16_0.008_60),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 md:pl-24">
        <SectionHeading eyebrow="WHAT I HAVE DONE SO FAR" title="Work Experience" />

        <div className="relative">
          {
    /* center timeline line */
  }
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--gold)] to-transparent md:left-1/2" />

          <div className="space-y-10">
            {items.map((it, i) => {
    const isLeft = i % 2 === 0;
    return <div key={it.role} className="relative grid md:grid-cols-2 md:gap-12">
                  {
      /* timeline icon */
    }
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

                  {
      /* date */
    }
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

                  {
      /* card */
    }
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
                      
                      {
      /* Justified layout applied here for perfectly aligned line edges */
    }
                      <ul className="space-y-1.5 text-sm text-foreground/70 text-justify [text-justify:inter-word]">
                        {it.points.map((p) => <li key={p}>• {p}</li>)}
                      </ul>
                    </div>
                  </motion.div>
                </div>;
  })}
          </div>
        </div>
      </div>
    </section>;
}
export {
  Experience
};
