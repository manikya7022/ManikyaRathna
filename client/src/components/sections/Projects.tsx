import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Brain, Database, ShieldCheck, Cpu, Network } from "lucide-react";
import nlpImg from "@assets/generated_images/abstract_nlp_visualization.png";
import recImg from "@assets/generated_images/abstract_recommendation_engine_visualization.png";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black relative z-20">
      <div className="container mx-auto px-4">
         <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              System Modules
            </h2>
            <p className="text-neutral-400 mt-2 max-w-lg">
              Deployed architectures and intelligent pipelines.
            </p>
         </div>

        <BentoGrid className="max-w-7xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const Skeleton = ({ img, className }: { img?: string, className?: string }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/5 overflow-hidden relative ${className}`}>
    {img && (
      <img 
        src={img} 
        alt="project" 
        className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity hover:opacity-80 duration-500" 
      />
    )}
    {!img && (
      <div className="absolute inset-0 bg-dot-white/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
    )}
  </div>
);

const items = [
  {
    title: "Biomedical Knowledge Graph",
    description: "Unified KG integrating multiple ontologies with Proof-Path Similarity Discovery.",
    header: <Skeleton img={nlpImg} />,
    icon: <Network className="h-4 w-4 text-primary" />,
  },
  {
    title: "Uncertainty-Aware Alignment",
    description: "LLM alignment framework using test-time reward ensembles & epistemic uncertainty.",
    header: <Skeleton img={recImg} />,
    icon: <Brain className="h-4 w-4 text-secondary" />,
  },
  {
    title: "Brain Machine Interface",
    description: "EEG-based wheelchair control enabling directional movement via BCI.",
    header: <Skeleton />,
    icon: <Cpu className="h-4 w-4 text-green-500" />,
  },
  {
    title: "Industrial RAG Pipeline",
    description: "Architected end-to-end AI pipeline integrating GPT & Gemini for market analysis, reducing manual effort by 70%.",
    header: <Skeleton className="bg-gradient-to-r from-primary/10 to-secondary/10" />,
    icon: <Database className="h-4 w-4 text-blue-500" />,
  },
  {
    title: "Visa Sponsorship Classifier",
    description: "Automated classification for 6,000+ job postings with 73% accuracy using BERT.",
    header: <Skeleton />,
    icon: <ShieldCheck className="h-4 w-4 text-orange-500" />,
  },
];
