import React from "react";
import { BentoGrid } from "../ui/bento-grid";
import { Brain, Database, ShieldCheck, Cpu, Network, ArrowUpRight, Search, Lock } from "lucide-react";
import { Card3D, Card3DBody, Card3DItem } from "../ui/3d-card";
import nlpImg from "@assets/generated_images/abstract_nlp_visualization.png";
import recImg from "@assets/generated_images/abstract_recommendation_engine_visualization.png";
import heroImg from "@assets/generated_images/abstract_3d_neural_network_background.png";
import { AbstractShape } from "../ui/3d-shape";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black relative z-20">
      <div className="container mx-auto px-4">
         <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Personal Projects
            </h2>
            <p className="text-neutral-400 mt-4 max-w-lg text-lg">
              Explorations in high-dimensional space.
            </p>
         </div>

        <BentoGrid className="max-w-7xl mx-auto gap-8">
          {items.map((item, i) => (
            <div key={i} className={item.className}>
              <Card3D className="h-full w-full">
                <Card3DBody className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 h-full flex flex-col justify-between group/card relative overflow-hidden">
                  
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                  {/* 3D Shape Background for visual interest */}
                  <div className="absolute -right-10 -bottom-10 w-40 h-40 opacity-20 pointer-events-none">
                     <AbstractShape color={i % 2 === 0 ? "#06b6d4" : "#a855f7"} />
                  </div>

                  <div className="relative z-10">
                    <Card3DItem translateZ="50" className="mb-4">
                      {item.header}
                    </Card3DItem>

                    <Card3DItem translateZ="60" className="flex items-center gap-2 mb-2">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-primary">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover/card:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </Card3DItem>

                    <Card3DItem translateZ="40" as="p" className="text-sm text-neutral-400 leading-relaxed">
                      {item.description}
                    </Card3DItem>
                  </div>

                  <Card3DItem translateZ="30" className="mt-6 flex justify-between items-center relative z-10">
                    <div className="flex gap-2">
                       <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-mono border border-neutral-800 px-2 py-1 rounded">
                         System V.1
                       </span>
                    </div>
                    <button className="text-white hover:text-primary transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </Card3DItem>
                </Card3DBody>
              </Card3D>
            </div>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const ProjectImage = ({ img }: { img: string }) => (
  <div className="w-full h-40 rounded-xl overflow-hidden relative group-hover/card:shadow-2xl transition-all duration-500 border border-white/5">
    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover/card:opacity-100 transition-opacity" />
    <img 
      src={img} 
      alt="project" 
      className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700" 
    />
  </div>
);

const ProjectPlaceholder = ({ gradient, icon: Icon }: { gradient: string, icon: any }) => (
  <div className={`w-full h-40 rounded-xl overflow-hidden relative border border-white/5 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
     <div className="absolute inset-0 bg-grid-white/[0.1]" />
     <div className="w-16 h-16 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center border border-white/10">
        <Icon className="w-8 h-8 text-white/70" />
     </div>
  </div>
);

const items = [
  {
    title: "InfraSyntax",
    description: "Secure Graph-Augmented DevOps Search. Hybrid Elasticsearch & GraphRAG pipeline with Phi-3-mini explanations.",
    header: <ProjectPlaceholder gradient="from-cyan-500/20 to-blue-600/20" icon={Search} />,
    icon: <Lock className="h-4 w-4" />,
    className: "md:col-span-2"
  },
  {
    title: "Brain Machine Interface",
    description: "EEG-based wheelchair control system. Achieved 94.9% classification accuracy using Wavelet features and Ensemble Learning.",
    header: <ProjectImage img={heroImg} />, 
    icon: <Cpu className="h-4 w-4" />,
    className: "md:col-span-1"
  },
  {
    title: "Uncertainty-Aware Alignment",
    description: "Robust RLHF framework using uncertainty-aware preference distillation. Improved AlpacaEval 2.0 scores for Llama3 and Qwen models.",
    header: <ProjectImage img={recImg} />,
    icon: <Brain className="h-4 w-4" />,
    className: "md:col-span-1"
  },
  {
    title: "Biomedical Knowledge Graph",
    description: "Full-stack discovery platform integrating 6+ ontologies with BERT-based entity matching and interactive D3.js visualization.",
    header: <ProjectImage img={nlpImg} />,
    icon: <Network className="h-4 w-4" />,
    className: "md:col-span-2"
  }
];
