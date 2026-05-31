import { Github, Linkedin, Facebook, MessageSquare, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { Dots } from "./Dots";
const links = [
  { label: "Home", href: "#home" },
  { label: "Overview", href: "#overview" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];
const services = ["MERN Development", "Vite Web Apps", "API Engineering", "UI / UX Architect", "Vibe Coding Expert", "Web Design Expert"  ];
function Footer() {
  return <footer className="relative overflow-hidden border-t border-gold/30 bg-card/40 pt-14 pb-10">
      <Dots count={6} />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,oklch(0.78_0.14_80/0.1),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4 md:pl-24 md:pr-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-">
            <img src={logo} alt="Samra Amir" className="h-14 w-18 object-contain" />
            <div className="flex flex-col leading-none">
              <span className="font-display text-2xl italic text-gold-gradient">Samra Amir</span>
              <span className="text-[10px] tracking-[0.4em] text-[var(--gold)]/80">✦ FULL STACK DEVELOPER</span>
            </div>
          </div>
          <p className="mt-5 max-w-md truncate text-sm text-[var(--gold-light)]/80">
            Full Stack Web Developer With 5+ Years of Experience.
          </p>
          <div className="mt-5 space-y-2 text-sm text-[var(--gold-light)]/90">
            <a href="mailto:meharbano300@gmail.com" className="flex items-center gap-2 hover:text-[var(--gold-light)] transition"><Mail className="h-4 w-4 text-[var(--gold)]" /><span>meharbano300@gmail.com</span></a>
            <a href="tel:+923271612414"  className="flex items-center gap-2 hover:text-[var(--gold-light)] transition">
             <Phone className="h-4 w-4 text-[var(--gold)]" />
             <span>+92 3271612414</span>
             </a>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[var(--gold)]" /><span>Available worldwide · Remote</span></p>
          </div>
          <div className="mt-5 flex gap-3">
            {[
              { Icon: Github, href: "https://github.com/meharbano300-ui" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/samra-amir-93389b26a/" },
              { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61551449194348" },
              { Icon: MessageSquare, href: "https://wa.me/923271612414" }
            ].map(({ Icon, href }, i) => <a 
                key={i} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/40 text-[var(--gold-light)] transition hover:bg-gold-gradient hover:text-background"
              >
                <Icon className="h-4 w-4" />
              </a>)}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm tracking-widest text-gold-gradient">QUICK LINKS</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => <li key={l.href}>
                <a href={l.href} className="text-[var(--gold-light)]/85 transition hover:text-[var(--gold)]">
                  ✦ {l.label}
                </a>
              </li>)}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm tracking-widest text-gold-gradient">SERVICES</h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => <li key={s} className="text-[var(--gold-light)]/85">✦ {s}</li>)}
          </ul>
        </div>
      </div>
    </footer>;
}
export {
  Footer
};