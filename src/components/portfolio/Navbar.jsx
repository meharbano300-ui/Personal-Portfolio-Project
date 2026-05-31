import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
const links = [
  { label: "Home", href: "#home" },
  { label: "Overview", href: "#overview" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return <motion.header
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.7 }}
    className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-gold/30" : "bg-transparent"}`}
  >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="group flex items-center gap-0">
          <img
    src={logo}
    alt="Samra Amir"
    className="h-16 w-28 object-contain"
  />
          <div className="hidden flex-col leading-tight md:flex -ml-2">
            <span className="font-display text-2xl italic tracking-wide text-gold-gradient">
              Samra Amir
            </span>
            <span className="text-[10px] tracking-[0.4em] text-[var(--gold)]/80">
              ✦ FULL STACK DEVELOPER
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => <li key={l.href}>
              <a
    href={l.href}
    className="group relative text-sm font-medium text-[var(--gold-light)] transition hover:text-[var(--gold)]"
  >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
              </a>
            </li>)}
        </ul>

        <a
    href="#contact"
    className="relative inline-flex items-center"
  >
          <span className="absolute -inset-1.5 border border-[var(--gold)]/40" />
          <span className="relative border-2 border-[var(--gold)] bg-background px-5 py-2.5 text-sm font-medium text-[var(--gold-light)] transition hover:text-background hover:bg-gold-gradient">
            Let's Talk
          </span>
        </a>
      </nav>
    </motion.header>;
}
export {
  Navbar
};
