import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

import ScrollProgress from "@/components/ui/ScrollProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">


      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Scroll to Top Button */}
      <ScrollToTop />

      <div className="bg-noise" />

      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
