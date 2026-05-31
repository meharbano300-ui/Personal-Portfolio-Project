import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Github, Star, Share2, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Dots } from "./Dots";
const projects = [
  {
    title: "Echo System AI Automation",
    tag: "SaaS Platform",
    stack: ["React.js", "JavaScript", "Tailwind CSS"],
    grad: "from-amber-500 to-rose-600",
    image: "/1.jpeg",
    previewUrl: "https://echo-system-five.vercel.app/",
    githubUrl: "https://github.com/meharbano300-ui/Echo-System"
  },
  {
    title: "Sparta Tech Solutions",
    tag: "Tech Company",
    stack: ["Tailwind CSS", "HTML", "JavaScript"],
    grad: "from-yellow-400 to-orange-600",
    image: "/2.png",
    previewUrl: "https://spartatechsolutions.com/",
    githubUrl: "https://github.com/meharbano300-ui/Sparta-Tech-Solutions"
  },
  {
    title: "ShopSphere ",
    tag: " E-Commerce",
    stack: ["Vite App", "MongoDB", "Tailwind CSS"],
    grad: "from-emerald-400 to-cyan-600",
    image: "/3.jpeg",
    previewUrl: "https://shopsphere-ecommerce-kappa.vercel.app/",
    githubUrl: "https://github.com/meharbano300-ui/shopsphere"
  },
  {
    title: "Xelora Tech",
    tag: "AI Automation Industry",
    stack: ["MERN", "React Router", "JWT"],
    grad: "from-indigo-500 to-purple-600",
    image: "/4.PNG",
    previewUrl: "https://xelora-tech.vercel.app/",
    githubUrl: "https://github.com/meharbano300-ui/Xelora-Tech"
  },
  {
    title: "Maison Atelier",
    tag: "Branding",
    stack: ["React.js", "  Tailwind CSS", "Node.js"],
    grad: "from-sky-400 to-blue-700",
    image: "/5.jpg",
    previewUrl: "https://maison-atelier-vite-dark-theme.vercel.app/",
    githubUrl: "https://github.com/meharbano300-ui/maison-atelier-vite-dark-theme"
  },
  {
    title: "NEXABOT",
    tag: "AI Robotics",
    stack: ["Javascript", "Robotics", "Vite.js"],
    grad: "from-fuchsia-500 to-pink-600",
    image: "/7.PNG",
    previewUrl: "https://robots-heart-project.vercel.app/",
    githubUrl: "https://github.com/meharbano300-ui/Robots-Heart-Project"
  },
  {
    title: "Weather App - SkyCast",
    tag: "SAAS Plateform",
    stack: ["React.js", "API Integeration", "Node.js"],
    grad: "from-yellow-300 to-amber-700",
    image: "/8.PNG",
    previewUrl: "https://dynamic-city-forecast-app.meharbano300.workers.dev/",
    githubUrl: "https://github.com/meharbano300-ui/dynamic-city-forecast-app"
  },
  {
    title: "Synchroyst",
    tag: "AI Automation",
    stack: ["React.js", "GSAP", "Vite.js"],
    grad: "from-rose-400 to-red-700",
    image: "/6.png",
    previewUrl: "https://automation-zeta-orcin.vercel.app/",
    githubUrl: "https://github.com/meharbano300-ui/Automation"
  }
];
function Projects() {
  const [activeShare, setActiveShare] = useState(null);
  return <section id="projects" className="relative py-16">
      <Dots count={6} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,transparent,oklch(0.14_0.008_60),transparent)]" />
      <div className="mx-auto max-w-7xl px-6 md:pl-24">
        <SectionHeading eyebrow="MY WORK" title="Featured Projects">
          A curated selection of work blending engineering and design. Every project below is real, shipped,
          and crafted with obsession for detail.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => {
    const shareText = encodeURIComponent(`Check out this amazing project: ${p.title}`);
    const shareUrl = encodeURIComponent(p.previewUrl);
    return <motion.article
      key={p.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i % 4 * 0.08, duration: 0.5 }}
      whileHover={{ y: -8 }}
      onMouseLeave={() => setActiveShare(null)}
      className="group relative overflow-hidden rounded-2xl border border-gold/30 bg-card/60 backdrop-blur transition hover:border-[var(--gold)] hover:shadow-gold-lg"
    >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {
      /* Background Gradient */
    }
                  <div
      className={`absolute inset-0 bg-gradient-to-br ${p.grad} opacity-40 transition-transform duration-700 group-hover:scale-110 z-10 mixed-blend-overlay`}
    />
                  
                  {
      /* Actual display image */
    }
                  <img
      src={p.image}
      alt={p.title}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
    />

                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)] z-10" />
                  
                  {
      /* Blurry dark backdrop overlay */
    }
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-[2px]" />

                  {
      /* Featured badge */
    }
                  <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-gold/50 bg-background/70 px-2.5 py-1 text-[10px] tracking-widest text-[var(--gold-light)] backdrop-blur z-20">
                    <Star className="h-3 w-3 fill-[var(--gold)] text-[var(--gold)]" />
                    FEATURED
                  </div>

                  {
      /* Action Icons Panel */
    }
                  <div className="absolute right-3 top-3 flex flex-col gap-2 z-20">
                    
                    {
      /* 1st: Eye Icon -> Linked to Live Preview / Case Study */
    }
                    <a
      href={p.previewUrl}
      target="_blank"
      rel="noreferrer"
      className="grid h-9 w-9 place-items-center rounded-full bg-gold-gradient text-background shadow-gold transition hover:scale-110"
    >
                      <Eye className="h-4 w-4" />
                    </a>

                    {
      /* 2nd: SHARE BUTTON SYSTEM */
    }
                    <div className="relative flex items-center justify-end">
                      {
      /* Social Media Dropdown (Appears on click/hover) */
    }
                      <AnimatePresence>
                        {activeShare === p.title && <motion.div
      initial={{ opacity: 0, x: 15, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 15, scale: 0.95 }}
      className="absolute right-11 flex gap-1.5 rounded-full border border-gold/40 bg-background/95 p-1 backdrop-blur shadow-lg shadow-black/40"
    >
                            {
      /* Twitter / X */
    }
                            <a
      href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
      target="_blank"
      rel="noreferrer"
      className="grid h-7 w-7 place-items-center rounded-full text-[var(--gold-light)] hover:bg-gold-gradient hover:text-background transition-colors"
      title="Share on X"
    >
                              <Twitter className="h-3.5 w-3.5" />
                            </a>

                            {
      /* LinkedIn */
    }
                            <a
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
      target="_blank"
      rel="noreferrer"
      className="grid h-7 w-7 place-items-center rounded-full text-[var(--gold-light)] hover:bg-gold-gradient hover:text-background transition-colors"
      title="Share on LinkedIn"
    >
                              <Linkedin className="h-3.5 w-3.5" />
                            </a>

                            {
      /* WhatsApp */
    }
                            <a 
      href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
      target="_blank"
      rel="noreferrer"
      className="grid h-7 w-7 place-items-center rounded-full text-[var(--gold-light)] hover:bg-gold-gradient hover:text-background transition-colors"
      title="Share on WhatsApp"
    >
                              <MessageCircle className="h-3.5 w-3.5" />
                            </a>
                          </motion.div>}
                      </AnimatePresence>

                      {
      /* Main Share Toggle Icon */
    }
                      <button
      onClick={(e) => {
        e.preventDefault();
        setActiveShare(activeShare === p.title ? null : p.title);
      }}
      className={`grid h-9 w-9 place-items-center rounded-full border transition-all duration-300 ${activeShare === p.title ? "bg-gold-gradient text-background border-transparent scale-110" : "border-gold/60 bg-background/80 text-[var(--gold-light)] backdrop-blur hover:scale-110 hover:bg-gold-gradient hover:text-background"}`}
      title="Share Project"
    >
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    {
      /* ExternalLink -> Linked to Live Vercel Link */
    }
                   
                    
                    {
      /* Github Icon -> Linked to GitHub Code Repo */
    }
                    <a
      href={p.githubUrl}
      target="_blank"
      rel="noreferrer"
      className="grid h-9 w-9 place-items-center rounded-full border border-gold/60 bg-background/80 text-[var(--gold-light)] backdrop-blur transition hover:scale-110 hover:bg-gold-gradient hover:text-background"
    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                
                <div className="p-5">
                  <p className="text-[10px] tracking-widest text-[var(--gold-light)]/80">{p.tag.toUpperCase()}</p>
                  <h3 className="mt-1 text-lg text-foreground">{p.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => <span
      key={t}
      className="rounded-full border border-gold/30 bg-background/40 px-2 py-0.5 text-[10px] text-[var(--gold-light)]/90"
    >
                        {t}
                      </span>)}
                  </div>
                </div>
              </motion.article>;
  })}
        </div>
      </div>
    </section>;
}
export {
  Projects
};
