import { motion, useScroll, useTransform } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import StarsCanvas from "@/components/ui/stars-background";
import { HeroTechCore } from "@/components/ui/3d-shape";
import MagneticButton from "@/components/ui/MagneticButton";
import TextReveal from "@/components/ui/TextReveal";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector("#skills");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]); // Parallax for text
  const y2 = useTransform(scrollY, [0, 500], [0, -150]); // Parallax for 3D element
  const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Fade out on scroll

  return (
    <div id="about" className="min-h-screen w-full flex md:items-center md:justify-center bg-black antialiased relative overflow-hidden">
      {/* Dynamic 3D Stars */}
      <StarsCanvas />

      {/* 3D Tech Core - Right Side */}
      <motion.div style={{ y: y2 }} className="absolute inset-0 z-5">
        <HeroTechCore />
      </motion.div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] z-0" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-5" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Spotlights for dramatic lighting */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="#06b6d4"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill="#a855f7"
      />

      <motion.div style={{ y: y1, opacity }} className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <div className="flex flex-col items-start justify-center min-h-[80vh] max-w-3xl">

          {/* Intro Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-neutral-300 font-medium">AI/ML Engineer & Researcher</span>
          </motion.div>

          {/* Main Title - Massive with Animated Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold leading-tight pb-4"
          >
            <span
              className="bg-clip-text text-transparent bg-[length:200%_auto]"
              style={{
                backgroundImage: 'linear-gradient(90deg, #ffffff, #06b6d4, #a855f7, #06b6d4, #ffffff)',
                animation: 'gradient-shift 5s ease infinite, glow-pulse 3s ease-in-out infinite'
              }}
            >
              Manikya Rathna
            </span>
            <span className="text-primary animate-pulse">.</span>
          </motion.h1>

          {/* Animated Subtitle */}
          {/* Animated Subtitle */}
          <div className="mb-8">
            <TextReveal className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
              Building intelligent systems at the intersection of machine learning, NLP, and human-centered AI.
            </TextReveal>
          </div>

          {/* Bio Card with Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-neutral-300 max-w-2xl text-base leading-relaxed space-y-4 bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <p className="relative z-10">
              Machine learning engineer and Artificial Intelligence graduate student at the University of Pittsburgh with experience delivering end-to-end ML and NLP solutions in healthcare, tech, and industrial automation. Skilled in building production-grade pipelines for large-scale clinical NLP, recommendation systems, and multi-agent LLM workflows, with a focus on robust engineering, cloud-native deployment, and demonstrable business impact.
            </p>
          </motion.div>



          {/* Scroll Indicator */}
          <MagneticButton className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <motion.button
              onClick={scrollToAbout}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col items-center gap-2 text-neutral-500 hover:text-primary transition-colors cursor-pointer group"
            >
              <span className="text-xs uppercase tracking-widest">Explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </MagneticButton>
        </div>
      </motion.div>
    </div>
  );
}
