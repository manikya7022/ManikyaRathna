import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import StarsCanvas from "@/components/ui/stars-background";
import sharpBg from "@assets/generated_images/sharp_wireframe_cybernetic_structure.png";

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
          
          {/* Main Title - Massive */}
          <h1 className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 leading-tight pb-4 drop-shadow-2xl">
            Manikya Rathna.
          </h1>

          {/* Subtitle / Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-300 max-w-3xl text-lg leading-relaxed font-light space-y-4 bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-xl"
          >
            <p>
              I’m a graduate student in Intelligent Systems at the University of Pittsburgh, specializing in machine learning, NLP, and LLM alignment, with hands-on experience across healthcare, HR-tech, and industrial automation.
            </p>
            <p>
              As an AI Engineer and NLP Developer, I’ve built and deployed production-grade pipelines for recommendation systems, visa-sponsorship classification, and large-scale clinical text mining over 135M+ notes using AWS, SageMaker, PostgreSQL, and modern ML stacks.
            </p>
            <p>
              I’ve led end-to-end projects spanning uncertainty-aware RLHF for LLMs, biomedical knowledge graphs, and secure DevOps code search, as well as an EEG-based brain–computer interface for wheelchair control, giving me a strong blend of research rigor and real-world engineering impact.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Grid at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  );
}
