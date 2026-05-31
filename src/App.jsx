import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Overview } from "@/components/portfolio/Overview";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Stories } from "@/components/portfolio/Stories";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Dots } from "@/components/portfolio/Dots";

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 z-0">
        <Dots count={12} />
      </div>
      <Navbar />
      <Hero />
      <Overview />
      <Experience />
      <Skills />
      <Projects />
      <Stories />
      <Contact />
      <Footer />
    </main>
  );
}
