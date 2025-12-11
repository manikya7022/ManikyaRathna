import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Mail, Cpu, Terminal } from "lucide-react";
import sharpBg from "@assets/generated_images/sharp_wireframe_cybernetic_structure.png";
import StarsCanvas from "@/components/ui/stars-background";

export default function Hero() {
  return (
    <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-black antialiased relative overflow-hidden">
      {/* Dynamic 3D Stars */}
      <StarsCanvas />

      {/* Sharp Background Image with Low Opacity */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img src={sharpBg} alt="Structure" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Spotlights for dramatic lighting */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="#b3a4ee"
      />
      <Spotlight
        className="top-28 left-80 h-[80vh] w-[50vw]"
        fill="#7dd3fc"
      />

      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <div className="flex flex-col items-start justify-center min-h-[60vh]">
          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/20 bg-black/50 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(6,182,212,0.1)]"
          >
            <Terminal className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-400 tracking-wider">SYSTEM_READY // V.2.0.25</span>
          </motion.div>

          {/* Main Title - Massive */}
          <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight pb-4 drop-shadow-2xl">
            Manikya Rathna.
          </h1>

          {/* Subtitle with Typewriter Effect */}
          <div className="text-neutral-300 max-w-2xl text-lg md:text-2xl font-light">
            <TextGenerateEffect 
              words="Architecting intelligent systems at the intersection of NLP, Deep Learning, and real-world impact." 
              className="font-normal text-muted-foreground"
            />
          </div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <a 
              href="#projects"
              className="px-8 py-4 rounded-full bg-cyan-500 text-black font-bold text-sm hover:scale-105 transition-transform duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              <Cpu className="w-4 h-4" />
              View Architecture
            </a>
            <a 
              href="mailto:mar805@pitt.edu"
              className="px-8 py-4 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm text-white font-medium text-sm hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Initialize Comms
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Grid at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
}
