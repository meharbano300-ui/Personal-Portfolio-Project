import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const servicesList = [
   "✦ Select Services",
  "✦ MERN Development",
  "✦ Vite Web Apps",
  "✦ Web Development",
  "✦ SEO Optimization",
 "✦ API Engineering",
  "✦ UI / UX Architect",
  "✦ Vibe Coding Expert",
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", service: servicesList[0] });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "923271612414";
    const message = `Hello Samra Amir,%0A%0AMy Name: ${encodeURIComponent(formData.name)}%0ARequested Service: ${encodeURIComponent(formData.service)}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    setIsOpen(false);
    setFormData({ name: "", service: servicesList[0] });
  };

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-background/70 border-b border-gold/30"
            : "bg-transparent"
        }`}
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
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm font-medium text-[var(--gold-light)] transition hover:text-[var(--gold)]"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative inline-flex items-center cursor-pointer"
          >
            <span className="absolute -inset-1.5 border border-[var(--gold)]/40" />
            <span className="relative border-2 border-[var(--gold)] bg-background px-5 py-2.5 text-sm font-medium text-[var(--gold-light)] transition hover:text-[var(--gold)]">
              Let's Talk
            </span>
          </button>
        </nav>
      </motion.header>

      {/* Pop-up Form / Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md border border-[var(--gold)]/40 bg-background/95 p-6 shadow-2xl shadow-[var(--gold)]/10"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-xl text-[var(--gold-light)] hover:text-[var(--gold)] transition cursor-pointer"
              >
                ✕
              </button>

              <h3 className="font-display text-xl italic text-gold-gradient mb-1">
                Let's Work Together
              </h3>
              <p className="text-xs text-[var(--gold-light)]/70 mb-5">
                Fill details below to start WhatsApp chat directly.
              </p>

              <form onSubmit={handleSendWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--gold-light)] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-[var(--gold)]/30 bg-background/50 px-3 py-2 text-sm text-[var(--gold-light)] focus:border-[var(--gold)] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--gold-light)] mb-1">
                    Select Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full border border-[var(--gold)]/30 bg-background/90 px-3 py-2 text-sm text-[var(--gold-light)] focus:border-[var(--gold)] focus:outline-none"
                  >
                    {servicesList.map((service, index) => (
                      <option key={index} value={service} className="bg-background text-foreground">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="relative w-full mt-2 inline-flex items-center justify-center cursor-pointer"
                >
                  <span className="absolute -inset-1 border border-[var(--gold)]/40" />
                  <span className="relative w-full border border-[var(--gold)] bg-[var(--gold)]/10 px-4 py-2.5 text-center text-sm font-semibold text-[var(--gold-light)] transition hover:bg-[var(--gold)] hover:text-black">
                    Send Message ✦
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export { Navbar };