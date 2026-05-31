import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Dots } from "./Dots";
const expertise = [
  { slug: "mongodb", color: "47A248", title: "MERN Stack", desc: "MongoDB \xB7 Express \xB7 React \xB7 Node" },
  { name: "TypeScript", slug: "tsnode", color: "3178C6", title: "TypeScript", desc: "Strong typing, Interfaces, Type safety" },
  { slug: "graphql", color: "E535AB", title: "React.js & Vite", desc: "Scalable APIs, auth, webhooks" },
  { slug: "postgresql", color: "4169E1", title: "Databases", desc: "Xampp, MongoDB, Redis" },
  { slug: "nodedotjs", color: "83CD29", title: "Node.js Runtime", desc: "APIs, real-time servers, microservices" }
];
function Overview() {
  return <section id="overview" className="relative py-16">
      <Dots count={6} />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.14_80/0.08),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 md:pl-24">
        <SectionHeading eyebrow="INTRODUCTION" title="Overview">
         
          I'm a passionate Full-Stack Web Developer committed to transforming complex ideas into high-performance digital realities 
          with a solid background in BS-IT and hands-on experience in the tech industry, my tech stack includes React.js, Vite, Tailwind CSS, 
          JavaScript, Bootstrap, PHP, MongoDB, TypeScript, HTML and Node.js.
          
        </SectionHeading>

        <div id="expertise" className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {expertise.map((e, i) => <motion.div
    key={e.title}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1, duration: 0.6 }}
    whileHover={{ y: -8 }}
    className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-card/60 p-6 backdrop-blur transition hover:border-gold/60 hover:shadow-gold"
  >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gold-gradient opacity-0 blur-3xl transition group-hover:opacity-40" />
              <div className="relative">
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gold/30 bg-background/80 shadow-gold">
                  <img
    src={`https://cdn.simpleicons.org/${e.slug}/${e.color}`}
    alt={e.title}
    className="h-8 w-8"
    loading="lazy"
  />
                </div>
                <h3 className="mb-1 text-lg text-[var(--gold-light)]">{e.title}</h3>
                <p className="text-xs text-foreground/60">{e.desc}</p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}
export {
  Overview
};
