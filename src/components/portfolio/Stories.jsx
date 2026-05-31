import { Star, Building2 } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Dots } from "./Dots";
const stories = [
  {
    name: "Danial",
    role: "CEO \xB7 Sparta Tech Solutions",
    avatar: "/9.jpg",
    companyName: "Sparta Tech \xB7 SaaS Platform",
    text: "Samra built our entire Sparta Tech Solutions website from scratch architecture, design, and deployment. The polish and delivery were world-class."
  },
 {
  name: "Uzma Zahid",
  role: "Founder & Product Lead",
  avatar: "/10.jfif",
  companyName: "ABS Groups \xB7 Echo System",
  text: "Working with Samra Amir felt effortless. She translated vague ideas into a luxurious, blazing fast product with real design taste."
},
  {
    name: "Hassan Malik",
    role: "Engineering Team Lead",
    avatar: "/11.jpg",
    companyName: "Hello Future Technologies \xB7 Spotify",
    text: "Reliable, sharp, and incredibly detail oriented. Samra's MERN expertise saved our launch under a very tight deadline."
  },
  {
    name: "Uzma Zahid",
    role: "Founder & Product Lead",
    avatar: "/10.jfif",
    companyName: "ABS Groups \xB7 Nexabot",
    text: "From research to launch, Samra owned the dashboard. Performance, polish, and taste rarely seen in engineers."
  },
    {
    name: "Abdul Wahab",
    role: "Instructor \xB7 MERN Developer",
    avatar: "/12.jpg",
    companyName: "Hello Future Technologies \xB7 E Commerce",
    text: "An engineer who actually respects design tokens every pixel matched the spec. Best handoff experience we've ever had."
  },
];
function Stories() {
  const loop = [...stories, ...stories];
  return <section id="stories" className="relative overflow-hidden py-16">
      <Dots count={6} />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.78_0.14_80/0.08),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-6 md:pl-24">
        <SectionHeading eyebrow="WORDS FROM CLIENTS" title="Client Stories">
          Real feedback from real partners across the globe.
        </SectionHeading>
      </div>

      <div className="relative mx-4 overflow-hidden md:mx-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee gap-6 py-4">
          {loop.map((s, i) => <article
    key={i}
    className="group relative flex h-[280px] w-[380px] shrink-0 flex-col overflow-hidden rounded-2xl border border-gold/30 bg-card/70 p-6 backdrop-blur transition hover:border-[var(--gold)] hover:shadow-gold-lg"
  >
              <div className="mb-3 flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-gold/40 bg-gold-gradient text-background">
                  <Building2 className="h-4 w-4" />
                </span>
                <span className="text-[10px] tracking-[0.25em] text-[var(--gold-light)]/80">
                  {s.companyName?.toUpperCase()}
                </span>
              </div>
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, n) => <Star key={n} className="h-3.5 w-3.5 fill-[var(--gold)] text-[var(--gold)]" />)}
              </div>
              <p className="line-clamp-3 text-sm leading-relaxed text-foreground/80">"{s.text}"</p>
              <div className="mt-auto flex items-center gap-3 border-t border-gold/20 pt-4">
                <img
    src={s.avatar}
    alt={s.name}
    className="h-12 w-12 rounded-full border border-gold/40 object-cover shadow-gold"
    loading="lazy"
  />
                <div>
                  <p className="text-sm text-[var(--gold-light)]">{s.name}</p>
                  <p className="text-xs text-foreground/60">{s.role}</p>
                </div>
              </div>
            </article>)}
        </div>
      </div>
    </section>;
}
export {
  Stories
};
