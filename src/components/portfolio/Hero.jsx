import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Facebook, MessageSquare, Mail } from "lucide-react";
import heroImg from "@/assets/hero-setup.jpg";
import bg1 from "@/assets/hero-bg-1.jpg";
import bg2 from "@/assets/hero-bg-2.jpg";
import bg3 from "@/assets/hero-bg-3.jpg";
import { Particles } from "./Particles";
import { Dots } from "./Dots";
const bgSlides = [bg1, bg2, bg3];
const NAME = "Samra Amir";
function Hero() {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    let deleting = false;
    const tick = () => {
      if (!deleting) {
        i++;
        setTyped(NAME.slice(0, i));
        if (i === NAME.length) {
          deleting = true;
          return setTimeout(tick, 1800);
        }
      } else {
        i--;
        setTyped(NAME.slice(0, i));
        if (i === 0) {
          deleting = false;
          return setTimeout(tick, 600);
        }
      }
      setTimeout(tick, deleting ? 60 : 110);
    };
    const t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, []);
  return <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {
    /* Background image slider — visible band along the bottom */
  }
      <div className="absolute inset-0 -z-20">
        {bgSlides.map((src, i) => <motion.div
    key={i}
    className="absolute inset-0 bg-cover bg-bottom"
    style={{ backgroundImage: `url(${src})` }}
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 0.9, 0] }}
    transition={{
      duration: 12,
      delay: i * 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />)}
        {
    /* fade out the top, keep the bottom visible */
  }
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--background)_0%,var(--background)_45%,transparent_100%)]" />
        <div className="absolute inset-0 bg-grid opacity-30" />
      </div>

      <Dots count={8} />
      <Particles count={35} />

      {
    /* Social icons LEFT side */
  }
      <motion.aside
    initial={{ x: -60, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ delay: 0.8 }}
    className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 md:flex"
  >
        {[
          { Icon: Github, href: "https://github.com/meharbano300-ui" },
          { Icon: Linkedin, href: "https://www.linkedin.com/in/samra-amir-93389b26a/" },
          { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61551449194348" },
          { Icon: MessageSquare, href: "https://wa.me/923271612414" },
          { Icon: Mail, href: "mailto:meharbano300@gmail.com" }
        ].map(({ Icon, href }, i) => <a
    key={i}
    href={href}
    target={href && href.startsWith("mailto:") ? "_self" : "_blank"}
    rel={href && href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
    className="group relative grid h-11 w-11 place-items-center rounded-full border border-gold/40 bg-card/60 backdrop-blur transition hover:bg-gold-gradient hover:border-transparent"
  >
            <Icon className="h-4 w-4 text-[var(--gold-light)] transition group-hover:text-background" />
          </a>)}
        <div className="mx-auto h-20 w-px bg-gradient-to-b from-[var(--gold)] to-transparent" />
      </motion.aside>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-6 md:pl-24 lg:grid-cols-2">
        {
    /* LEFT — text */
  }
        <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.9 }}
    className="space-y-6 text-left"
  >
          <h1 className="font-display text-5xl leading-[1.05] md:text-7xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-gold-gradient italic">
              {typed}
              <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 animate-pulse bg-[var(--gold)] align-middle" />
            </span>
          </h1>
          <p className="text-sm tracking-[0.3em] text-[var(--gold)]/80">
            ✦ 5+ YEARS OF EXPERIENCE
          </p>
               <p className="max-w-xl text-base text-foreground/75 md:text-lg">
           I build smooth, modern, and powerful websites from scratch by combining beautiful user interfaces 
           with strong backends. <span className="text-[var(--gold-light)]">MERN, Node.js and AI Automation Specialist.</span>
            </p>

          <div className="flex flex-wrap items-center gap-5 pt-2">
            <a
    href="https://drive.google.com/file/d/15RKi8kkB0qL1C47VFJvObjZIrz4ghFb8/view?usp=drive_link"
    className="group relative inline-flex items-center justify-center p-[2px] transition hover:scale-105"
  >
              <span className="absolute inset-0 border-2 border-[var(--gold)]" />
              <span className="absolute -inset-1 border border-[var(--gold)]/40" />
              <span className="relative bg-gold-gradient px-7 py-3 text-sm font-semibold text-background shadow-gold">
                View My Resume
              </span>
            </a>
            <a
    href="#contact"
    className="group relative inline-flex items-center justify-center p-[2px] transition hover:scale-105"
  >
              <span className="absolute -inset-1 border border-[var(--gold)]/40" />
              <span className="relative border-2 border-[var(--gold)] bg-background px-7 py-3 text-sm font-medium text-[var(--gold-light)] transition hover:bg-gold-gradient hover:text-background">
                Hire Me ✦
              </span>
            </a>
          </div>
        </motion.div>

        {
    /* RIGHT — clean image, no border/shadow */
  }
        <motion.div
    initial={{ opacity: 0, scale: 0.9, x: 30 }}
    animate={{ opacity: 1, scale: 1, x: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    className="relative mx-auto"
  >
          <img
    src={heroImg}
    alt="Developer workstation"
    className="h-[420px] w-[460px] max-w-full object-contain md:h-[520px]"
  />
        </motion.div>
      </div>
    </section>;
}
export {
  Hero
};