import { Card3D, Card3DBody, Card3DItem } from "../ui/3d-card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import recImg from "@assets/generated_images/abstract_recommendation_engine_visualization.png";
import nlpImg from "@assets/generated_images/abstract_nlp_visualization.png";

const projects = [
  {
    title: "Biomedical Knowledge Graph",
    period: "Aug 2025 - Dec 2025",
    description: "Constructed unified biomedical KG integrating multiple ontologies with Proof-Path Similarity Discovery to identify non-obvious relationships.",
    tags: ["Graph DB", "Python", "Ontology", "AI"],
    image: nlpImg,
    links: { demo: "#", code: "#" }
  },
  {
    title: "Uncertainty-Aware LLM Alignment",
    period: "Jan 2025 - Apr 2025",
    description: "Framework for LLM alignment using test-time reward ensembles and epistemic uncertainty quantification. Achieved superior performance on AlpacaEval 2.0.",
    tags: ["LLM", "RLHF", "Llama3", "Python"],
    image: recImg,
    links: { demo: "#", code: "#" }
  },
  {
    title: "Brain Machine Interface Control",
    period: "Sept 2022 - Dec 2022",
    description: "ML model for EEG-based wheelchair control enabling directional movement and communication via BCI. Published at ERCICA 2023.",
    tags: ["BCI", "Machine Learning", "EEG", "Python"],
    image: recImg, // Reusing for now as placeholder
    links: { demo: "#", code: "#" }
  }
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovation in AI, NLP, and Deep Learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card3D className="h-full w-full" containerClassName="h-[450px] w-full">
                <Card3DBody className="group/card relative w-full h-full rounded-xl p-0 border-white/10 bg-black/50 overflow-hidden">
                  
                  {/* Image Part */}
                  <Card3DItem translateZ="50" className="w-full h-48 overflow-hidden rounded-t-xl">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/0 transition-colors" />
                  </Card3DItem>

                  {/* Content Part */}
                  <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
                    <Card3DItem translateZ="30" className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white leading-tight group-hover/card:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </Card3DItem>
                    
                    <Card3DItem translateZ="20" as="p" className="text-xs text-muted-foreground font-mono mb-4">
                      {project.period}
                    </Card3DItem>
                    
                    <Card3DItem translateZ="40" as="p" className="text-sm text-gray-300 line-clamp-3 mb-4 flex-grow">
                      {project.description}
                    </Card3DItem>
                    
                    <Card3DItem translateZ="30" className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 border border-white/10 text-primary">
                          {tag}
                        </span>
                      ))}
                    </Card3DItem>
                    
                    {/* Hover Actions */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 translate-z-[60px]" style={{ transform: "translateZ(60px)" }}>
                      <button className="p-2 rounded-full bg-black/50 backdrop-blur border border-white/20 hover:bg-white hover:text-black transition-colors">
                        <Github className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-full bg-black/50 backdrop-blur border border-white/20 hover:bg-white hover:text-black transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Card3DBody>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
