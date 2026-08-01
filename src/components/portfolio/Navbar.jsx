import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  LayoutDashboard, 
  Briefcase, 
  Code2, 
  FolderGit2, 
  BookOpen, 
  Mail, 
  MessageCircle, 
  Sparkles, 
  Send 
} from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Overview", href: "#overview", icon: LayoutDashboard },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Projects", href: "#projects", icon: FolderGit2 },
  { label: "Stories", href: "#stories", icon: BookOpen },
  { label: "Contact", href: "#contact", icon: Mail }
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
            ? "backdrop-blur-xl bg-background/70 border-b border-gold/30 shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="group flex items-center gap-0 pl-3 md:pl-3">
            <img
              src={logo}
              alt="Samra Amir"
              className="h-16 w-13  transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden flex-col leading-tight md:flex ml-4">
              <span className="font-display text-[28px] italic tracking-wide text-gold-gradient">
                Samra Amir
              </span>
              <span className="text-[10px] tracking-[0.4em] text-[var(--gold)]/80">
                ✦ FULL-STACK DEVELOPER
              </span>
            </div>
          </a>

          {/* Nav Links with Icons */}
          <ul className="hidden items-center gap-4 lg:flex ">
            {links.map((l) => {
              const IconComponent = l.icon;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group relative flex items-center gap-1 text-sm font-medium text-[var(--gold-light)] transition hover:text-[var(--gold)]"
                  >
                    <IconComponent className="w-4 h-4 text-[var(--gold)]/70 transition-transform duration-300 group-hover:scale-110 group-hover:text-[var(--gold)]" />
                    <span>{l.label}</span>
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative inline-flex items-center cursor-pointer group"
          >
            <span className="absolute -inset-1.5 border border-[var(--gold)]/40 transition-all duration-300 group-hover:border-[var(--gold)] group-hover:scale-105" />
            <span className="relative border-2 border-[var(--gold)] bg-background px-5 py-2.5 text-sm font-medium text-[var(--gold-light)] transition group-hover:text-[var(--gold)] group-hover:bg-[var(--gold)]/5 flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[var(--gold)]" />
              Let's Talk
            </span>
          </button>
        </nav>
      </motion.header>

      {/* Pop-up Form / Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-md border border-[var(--gold)]/50 bg-gradient-to-b from-background/95 via-background/90 to-black/95 p-8 rounded-xl shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--gold)]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[var(--gold)]/10 rounded-full blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-5 h-8 w-8 flex items-center justify-center rounded-full border border-[var(--gold)]/20 text-lg text-[var(--gold-light)] hover:text-[var(--gold)] hover:border-[var(--gold)] hover:bg-[var(--gold)]/10 transition duration-300 cursor-pointer"
              >
                ✕
              </button>

              {/* Header Logo & Title Section */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <img
                    src={logo}
                    alt="Samra Amir"
                    className="h-20 w-19 mx-auto mb-1  drop-shadow-[0_2px_8px_rgba(212,175,55,0.3)]"
                  />
                 
                </div>
                
               
                <h3 className="font-display text-2xl italic tracking-wide text-gold-gradient mb-1">
                  Let's Work Together
                </h3>
                <p className="text-xs text-[var(--gold-light)]/80 tracking-wider">
                  Fill details below to start WhatsApp chat directly.
                </p>
              </div>

              <form onSubmit={handleSendWhatsApp} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--gold-light)] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-[var(--gold)]/30 bg-black/40 px-4 py-3 text-sm text-[var(--gold-light)] placeholder-[var(--gold-light)]/30 rounded-lg focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/30 focus:outline-none transition duration-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-[var(--gold-light)] mb-1.5">
                    Select Service
                  </label>
                  <div className="relative">
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full appearance-none border border-[var(--gold)]/30 bg-black/40 px-4 py-3 text-sm text-[var(--gold-light)] rounded-lg focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/30 focus:outline-none transition duration-300 cursor-pointer"
                    >
                      {servicesList.map((service, index) => (
                        <option key={index} value={service} className="bg-[#0d0d0d] text-[var(--gold-light)] py-2">
                          {service}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[var(--gold-light)]">
                      ▼
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="relative w-full mt-4 inline-flex items-center justify-center cursor-pointer group overflow-hidden rounded-lg"
                >
                  <span className="absolute -inset-1 border border-[var(--gold)]/40 transition duration-300 group-hover:border-[var(--gold)]" />
                  <span className="relative w-full border border-[var(--gold)] bg-[var(--gold)]/10 px-4 py-3 text-center text-sm font-bold tracking-wider text-[var(--gold-light)] transition-all duration-300 group-hover:bg-[var(--gold)] group-hover:text-black shadow-lg shadow-[var(--gold)]/5 flex items-center justify-center gap-2">
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    <span>Send Message</span>
                    <Sparkles className="w-3.5 h-3.5" />
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