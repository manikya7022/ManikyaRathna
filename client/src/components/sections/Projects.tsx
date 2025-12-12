import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import {
  Brain,
  Database,
  Search,
  Lock,
  Network,
  Cpu,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Zap,
  BarChart3,
  Shield,
  Users,
  GitBranch,
  Microscope
} from "lucide-react";
import { Card3D, Card3DBody, Card3DItem } from "../ui/3d-card";
import {
  NeuralNetworkShape,
  KnowledgeGraphShape,
  DataSearchShape,
  AlignmentShape
} from "../ui/3d-shape";

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: {
    metric: string;
    description: string;
    icon: React.ReactNode;
  }[];
  technologies: string[];
  color: string;
  gradientFrom: string;
  gradientTo: string;
  ThreeJSComponent: React.ComponentType;
  icon: React.ReactNode;
}

const projects: ProjectData[] = [
  {
    id: "infrasyntax",
    title: "InfraSyntax",
    subtitle: "Secure Graph-Augmented DevOps Search",
    description: "A hybrid Elasticsearch pipeline fusing semantic and keyword retrieval with Reciprocal Rank Fusion and cross-encoder re-ranking for highly accurate DevOps code search.",
    highlights: [
      {
        metric: "40% MRR Gain",
        description: "Increased Mean Reciprocal Rank from 0.60 to 0.85 through hybrid retrieval",
        icon: <BarChart3 className="w-4 h-4" />
      },
      {
        metric: "300-600ms Latency",
        description: "Maintained low latency with async FastAPI, batched graph lookups, avoiding N+1 queries",
        icon: <Zap className="w-4 h-4" />
      },
      {
        metric: "Real-time Security",
        description: "Auto-detects hardcoded secrets, 0.0.0.0/0 network rules via GraphRAG + Phi-3-mini explanations",
        icon: <Shield className="w-4 h-4" />
      }
    ],
    technologies: ["Elasticsearch", "FastAPI", "NetworkX", "GraphRAG", "Phi-3-mini", "AST/HCL Parsing"],
    color: "#f59e0b",
    gradientFrom: "from-amber-500/20",
    gradientTo: "to-orange-600/20",
    ThreeJSComponent: DataSearchShape,
    icon: <Search className="h-5 w-5" />
  },
  {
    id: "brain-machine",
    title: "Brain Machine Interface",
    subtitle: "EEG-Controlled Wheelchair System",
    description: "An end-to-end EEG-based brain-computer interface for electric wheelchair control, mapping four locomotion commands from frontal and parietal EEG channels into microcontroller-driven motor actions.",
    highlights: [
      {
        metric: "94.9% MAP",
        description: "Achieved Mean Average Precision using Random Forest and XGBoost with wavelet-based cognitive features",
        icon: <BarChart3 className="w-4 h-4" />
      },
      {
        metric: "200 EEG Trials",
        description: "Validated with 4 commands × 10 reps × 5 participants across varying ages, genders, and disabilities",
        icon: <Users className="w-4 h-4" />
      },
      {
        metric: "Real-time Control",
        description: "NIC2 8-channel headset with 8-31 Hz bandpass, FFT + wavelet extraction, Arduino actuation",
        icon: <Cpu className="w-4 h-4" />
      }
    ],
    technologies: ["EEG Processing", "Wavelet Transform", "XGBoost", "Random Forest", "Arduino", "PCA"],
    color: "#06b6d4",
    gradientFrom: "from-cyan-500/20",
    gradientTo: "to-blue-600/20",
    ThreeJSComponent: NeuralNetworkShape,
    icon: <Brain className="h-5 w-5" />
  },
  {
    id: "uncertainty-alignment",
    title: "Uncertainty-Aware Alignment",
    subtitle: "Robust RLHF with Preference Distillation",
    description: "An uncertainty-aware preference distillation framework that improves robustness of RLHF alignment under noisy/OOD reward signals through ensemble rewards and adaptive KL regularization.",
    highlights: [
      {
        metric: "29.76% Win Rate",
        description: "Boosted Llama3.2-3B AlpacaEval 2.0 length-controlled win rate from 27.15% baseline",
        icon: <BarChart3 className="w-4 h-4" />
      },
      {
        metric: "41.80% Qwen Score",
        description: "Validated generality with Qwen2.5-7B outperforming single-reward RLHF and DPO baselines",
        icon: <GitBranch className="w-4 h-4" />
      },
      {
        metric: "4×H100 Scale",
        description: "Large-scale preference optimization on Ultrafeedback-aligned models with ensemble RLHF",
        icon: <Zap className="w-4 h-4" />
      }
    ],
    technologies: ["RLHF", "DPO", "Llama3", "Qwen2.5", "Uncertainty Quantification", "Kendall Tau"],
    color: "#a855f7",
    gradientFrom: "from-purple-500/20",
    gradientTo: "to-violet-600/20",
    ThreeJSComponent: AlignmentShape,
    icon: <Network className="h-5 w-5" />
  },
  {
    id: "biomedical-kg",
    title: "Biomedical Knowledge Graph",
    subtitle: "Multi-Ontology Discovery Platform",
    description: "A full-stack biomedical knowledge discovery platform enabling multi-hop gene-disease-protein relationship exploration with interactive graph visualization.",
    highlights: [
      {
        metric: "100K+ Entities",
        description: "Integrated 6+ ontology databases (GO, DOID, HP, PR) with React/D3.js visualization",
        icon: <Database className="w-4 h-4" />
      },
      {
        metric: "1,300+ Mappings",
        description: "NLP-powered cross-ontology entity matching with 0.5+ confidence via BERT semantic analysis",
        icon: <Microscope className="w-4 h-4" />
      },
      {
        metric: "Drug Discovery Ready",
        description: "Demonstrated feasibility for medical research with reproducible workflows and statistical validation",
        icon: <Shield className="w-4 h-4" />
      }
    ],
    technologies: ["React", "D3.js", "FastAPI", "BERT", "NetworkX", "GO/DOID/HP/PR Ontologies"],
    color: "#22c55e",
    gradientFrom: "from-green-500/20",
    gradientTo: "to-emerald-600/20",
    ThreeJSComponent: KnowledgeGraphShape,
    icon: <Database className="h-5 w-5" />
  }
];

const ProjectCard = ({ project, index }: { project: ProjectData; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ThreeJS = project.ThreeJSComponent;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={index < 2 ? "md:col-span-1" : "md:col-span-1"}
    >
      <Card3D className="h-full w-full">
        <Card3DBody
          className="bg-neutral-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 h-full flex flex-col group/card relative overflow-hidden rounded-2xl"
        >
          {/* Hover Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} via-transparent ${project.gradientTo} opacity-0 group-hover/card:opacity-100 transition-opacity duration-500`}
          />

          {/* 3D Visualization Header */}
          <Card3DItem translateZ="60" className="relative z-10">
            <div
              className={`w-full h-48 rounded-t-xl overflow-hidden relative bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} border-b border-white/5`}
            >
              <div className="absolute inset-0 bg-grid-white/[0.05]" />
              <div className="w-full h-full">
                <ThreeJS />
              </div>
              {/* Project Type Badge */}
              <div
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-mono border backdrop-blur-md"
                style={{
                  borderColor: `${project.color}50`,
                  backgroundColor: `${project.color}15`,
                  color: project.color
                }}
              >
                Graduate Project
              </div>
            </div>
          </Card3DItem>

          <div className="p-6 flex flex-col flex-grow relative z-10">
            {/* Title Section */}
            <Card3DItem translateZ="50" className="flex items-start gap-3 mb-3">
              <div
                className="p-2.5 rounded-xl border"
                style={{
                  backgroundColor: `${project.color}15`,
                  borderColor: `${project.color}30`,
                  color: project.color
                }}
              >
                {project.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white group-hover/card:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-400 mt-0.5">{project.subtitle}</p>
              </div>
            </Card3DItem>

            {/* Description */}
            <Card3DItem translateZ="30" className="mb-4">
              <p className="text-sm text-neutral-400 leading-relaxed">
                {project.description}
              </p>
            </Card3DItem>

            {/* Key Metrics - Always Visible */}
            <Card3DItem translateZ="25" className="mb-4">
              <div className="grid grid-cols-3 gap-2">
                {project.highlights.map((highlight, i) => (
                  <div
                    key={i}
                    className="text-center p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div
                      className="text-xs font-bold mb-1"
                      style={{ color: project.color }}
                    >
                      {highlight.metric}
                    </div>
                  </div>
                ))}
              </div>
            </Card3DItem>

            {/* Expandable Details */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5"
                      >
                        <div
                          className="p-1.5 rounded-md mt-0.5"
                          style={{
                            backgroundColor: `${project.color}20`,
                            color: project.color
                          }}
                        >
                          {highlight.icon}
                        </div>
                        <div>
                          <div
                            className="text-xs font-semibold mb-1"
                            style={{ color: project.color }}
                          >
                            {highlight.metric}
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-neutral-400 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Footer */}
            <Card3DItem translateZ="20" className="mt-auto pt-4 flex justify-between items-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    View Details
                  </>
                )}
              </button>
              <button
                className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:text-primary hover:border-primary/50 transition-all"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </Card3DItem>
          </div>
        </Card3DBody>
      </Card3D>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black relative z-20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              <TextReveal direction="up" className="inline-block">Personal Projects</TextReveal>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Explorations in high-dimensional space — from brain-computer interfaces to
            uncertainty-aware AI alignment and biomedical knowledge discovery.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
