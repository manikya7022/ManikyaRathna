import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TextReveal from "@/components/ui/TextReveal";
import {
  Brain,
  Database,
  Search,
  Lock,
  Cpu,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Zap,
  BarChart3,
  Shield,
  Users,
  GitBranch,
  Microscope,
  Github,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Mic,
  Network,
  Code,
  Layers,
  Activity,
  Orbit
} from "lucide-react";

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
  icon: React.ReactNode;
  githubUrl?: string;
  liveUrl?: string;
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
    icon: <Code className="h-5 w-5" />
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
    icon: <Lock className="h-5 w-5" />
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
    icon: <Database className="h-5 w-5" />,
    githubUrl: "https://github.com/manikya7022/KnowledeDiscovery"
  },
  {
    id: "neuro-symbolic",
    title: "Neuro-Symbolic Fact-Checker",
    subtitle: "GraphRAG for Hallucination Prevention",
    description: "A Graph Retrieval Augmented Generation system combining LLMs with Knowledge Graphs for real-time fact verification and AI hallucination prevention.",
    highlights: [
      {
        metric: "Triple Extraction",
        description: "Converts unstructured text into (Subject → Predicate → Object) knowledge triples via LLM",
        icon: <CheckCircle className="w-4 h-4" />
      },
      {
        metric: "NL→Cypher Query",
        description: "Natural language to graph database queries with context-aware entity resolution",
        icon: <Database className="w-4 h-4" />
      },
      {
        metric: "Guardrail Verify",
        description: "Catches contradictions against graph evidence and generates corrections with explanations",
        icon: <AlertTriangle className="w-4 h-4" />
      }
    ],
    technologies: ["FastAPI", "Neo4j", "NetworkX", "Ollama", "LangChain", "D3.js", "Cypher"],
    color: "#3b82f6",
    gradientFrom: "from-blue-500/20",
    gradientTo: "to-indigo-600/20",
    icon: <CheckCircle className="h-5 w-5" />,
    githubUrl: "https://github.com/manikya7022/Neuro-Symbolic"
  },
  {
    id: "meeting-assistant",
    title: "Meeting Intelligence Assistant",
    subtitle: "Privacy-First Local Transcription & AI",
    description: "A real-time meeting transcription and AI-powered analysis system running entirely on local machine with no cloud dependencies using Whisper and Ollama.",
    highlights: [
      {
        metric: "Silero VAD",
        description: "Deep learning Voice Activity Detection with energy-based fallback and 1.5s silence detection",
        icon: <Cpu className="w-4 h-4" />
      },
      {
        metric: "30s Ring Buffer",
        description: "Circular audio buffer for continuous capture with overlap handling and streaming support",
        icon: <BarChart3 className="w-4 h-4" />
      },
      {
        metric: "RAG Q&A",
        description: "Keyword-based retrieval over JSONL meeting history for context-aware answers",
        icon: <Zap className="w-4 h-4" />
      }
    ],
    technologies: ["faster-whisper", "Silero VAD", "Ollama", "PyAudio", "WebSockets", "Docker"],
    color: "#ec4899",
    gradientFrom: "from-pink-500/20",
    gradientTo: "to-rose-600/20",
    icon: <Mic className="h-5 w-5" />,
    githubUrl: "https://github.com/manikya7022/MeetingAssistance"
  },
  {
    id: "gossip-rl",
    title: "Gossip-Based Distributed RL",
    subtitle: "Decentralized Multi-Agent Training System",
    description: "A distributed reinforcement learning system enabling multi-agent training without a central parameter server. Agents share gradients using a gossip protocol with push-pull hybrid for fast convergence, ensuring scalability and fault tolerance.",
    highlights: [
      {
        metric: "50 Agents",
        description: "Scaled to 50 concurrent agents sharing gradients via gossip protocol with 5,961 episodes and 65 gossip rounds",
        icon: <Users className="w-4 h-4" />
      },
      {
        metric: "10μs Latency",
        description: "High-performance zero-copy C++ RPC transport layer with intra-node latency under 10 microseconds",
        icon: <Zap className="w-4 h-4" />
      },
      {
        metric: "ε-δ Privacy",
        description: "Built-in differential privacy with Gaussian mechanism, Rényi DP accounting, and adaptive noise calibration",
        icon: <Shield className="w-4 h-4" />
      }
    ],
    technologies: ["PPO", "Gossip Protocol", "Differential Privacy", "C++ RPC", "SWIM Detection", "Prometheus"],
    color: "#f97316",
    gradientFrom: "from-orange-500/20",
    gradientTo: "to-red-600/20",
    icon: <Network className="h-5 w-5" />,
    githubUrl: "https://github.com/manikya7022/Gossip-Based-Distributed-RL-Training-System"
  },
  {
    id: "rag-uq",
    title: "RAG + Uncertainty Quantification",
    subtitle: "Learned Retrieval & Bayesian Calibration",
    description: "A research implementation combining differentiable retrieval gating with Bayesian uncertainty calibration for RAG. Features a learned MLP router that dynamically weights BM25 vs. dense retrieval scores per passage.",
    highlights: [
      {
        metric: "Hybrid Retrieval",
        description: "Differentiable gating network that dynamically fuses BM25 (sparse) and ChromaDB (dense) retrieval per passage",
        icon: <Search className="w-4 h-4" />
      },
      {
        metric: "MC Dropout",
        description: "Bayesian confidence calibration using Monte Carlo Dropout for uncertainty quantification in predictions",
        icon: <BarChart3 className="w-4 h-4" />
      },
      {
        metric: "Conformal UQ",
        description: "Conformal Prediction for calibrated confidence intervals with theoretical coverage guarantees",
        icon: <Shield className="w-4 h-4" />
      }
    ],
    technologies: ["ChromaDB", "BM25", "MC Dropout", "Conformal Prediction", "Ollama", "Docker"],
    color: "#8b5cf6",
    gradientFrom: "from-violet-500/20",
    gradientTo: "to-purple-600/20",
    icon: <Layers className="h-5 w-5" />,
    githubUrl: "https://github.com/manikya7022/Efficient-RAG-with-Learned-Retrieval-and-Uncertainty-Quantification"
  },
  {
    id: "self-healing-ml",
    title: "Self-Healing ML Pipeline",
    subtitle: "Formally Verified Autonomous Recovery",
    description: "A verified self-healing ML pipeline integrating Z3 SMT solver for compile-time invariant verification with eBPF monitoring and PPO reinforcement learning for autonomous runtime healing with proven safety properties.",
    highlights: [
      {
        metric: "18 Invariants",
        description: "Z3-verified data invariants with <100ms verification time per constraint and automatic counterexample detection",
        icon: <CheckCircle className="w-4 h-4" />
      },
      {
        metric: "2s Recovery",
        description: "Autonomous failure detection and service restoration within 2 seconds via PPO-based healing agent",
        icon: <Zap className="w-4 h-4" />
      },
      {
        metric: "eBPF Monitor",
        description: "Low-overhead kernel-level monitoring capturing CPU, memory, I/O latency and application health signals",
        icon: <Activity className="w-4 h-4" />
      }
    ],
    technologies: ["Z3 SMT Solver", "eBPF", "PPO", "Dagster", "gVisor", "FastAPI"],
    color: "#14b8a6",
    gradientFrom: "from-teal-500/20",
    gradientTo: "to-cyan-600/20",
    icon: <Activity className="h-5 w-5" />,
    githubUrl: "https://github.com/manikya7022/Formally-Verified-Self-Healing-ML-Pipeline"
  },
  {
    id: "hyperbolic-bo",
    title: "HyperbolicBO",
    subtitle: "Ultrametric Bayesian Optimization",
    description: "Bayesian Optimization using hyperbolic geometry to represent tree-structured search spaces. Configurations are embedded in the Poincaré ball model where distances are computed using hyperbolic metric for lower distortion.",
    highlights: [
      {
        metric: "Poincaré Ball",
        description: "Hyperbolic geometry operations including Möbius addition, exponential/logarithmic maps in unit ball",
        icon: <Orbit className="w-4 h-4" />
      },
      {
        metric: "39 Tests",
        description: "Comprehensive test suite covering GP regression, hyperbolic kernels, and acquisition functions",
        icon: <CheckCircle className="w-4 h-4" />
      },
      {
        metric: "NAS-Bench-201",
        description: "Neural Architecture Search benchmark integration with Thompson Sampling and Expected Improvement",
        icon: <GitBranch className="w-4 h-4" />
      }
    ],
    technologies: ["Gaussian Process", "Poincaré Ball", "Thompson Sampling", "NAS-Bench-201", "REST API", "PyTorch"],
    color: "#e11d48",
    gradientFrom: "from-rose-500/20",
    gradientTo: "to-pink-600/20",
    icon: <Orbit className="h-5 w-5" />,
    githubUrl: "https://github.com/manikya7022/HyperbolicBO---Ultrametric-Bayesian-Optimization"
  }
];

// Calculate card transform with infinite/continuous effect
const getCardStyle = (index: number, activeIndex: number, total: number) => {
  // Calculate the shortest distance considering wrap-around
  let diff = index - activeIndex;

  // Wrap around for continuous effect
  if (diff > total / 2) {
    diff = diff - total;
  } else if (diff < -total / 2) {
    diff = diff + total;
  }

  const absDiff = Math.abs(diff);

  // Only show cards within 2 positions (for performance)
  if (absDiff > 2) {
    return {
      scale: 0.6,
      x: diff > 0 ? 1000 : -1000,
      z: -150,
      rotateY: 0,
      opacity: 0,
      blur: 5,
      zIndex: 0,
      visible: false
    };
  }

  const scale = absDiff === 0 ? 1 : absDiff === 1 ? 0.85 : 0.7;
  const xOffset = diff * 360; // Increased spacing for wider active card
  const zOffset = absDiff === 0 ? 50 : absDiff === 1 ? -30 : -80;
  const rotateY = absDiff === 0 ? 0 : diff > 0 ? -8 : 8;
  const opacity = absDiff === 0 ? 1 : absDiff === 1 ? 0.7 : 0.4;
  const blur = absDiff === 0 ? 0 : absDiff === 1 ? 1 : 3;

  return {
    scale,
    x: xOffset,
    z: zOffset,
    rotateY,
    opacity,
    blur,
    zIndex: total - absDiff,
    visible: true
  };
};

// Project Card Component with View Details button
const ProjectCard = ({
  project,
  isActive,
  isExpanded,
  onToggleExpand
}: {
  project: ProjectData;
  isActive: boolean;
  isExpanded: boolean;
  onToggleExpand: () => void;
}) => {
  return (
    <div
      className={`
        relative
        bg-neutral-900/80 backdrop-blur-xl 
        border border-white/10 rounded-2xl overflow-hidden
        transition-all duration-500 ease-out
        ${isActive ? 'border-white/30 shadow-2xl' : ''}
        ${isExpanded ? 'w-[480px]' : isActive ? 'w-[420px]' : 'w-[380px]'}
      `}
      style={{
        boxShadow: isActive
          ? `0 25px 80px -20px ${project.color}40, 0 0 60px -30px ${project.color}30`
          : 'none'
      }}
    >
      {/* Gradient Header */}
      <div
        className={`relative h-44 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} overflow-hidden`}
      >
        <div className="absolute inset-0 bg-grid-white/[0.05]" />

        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              `radial-gradient(circle at 30% 50%, ${project.color}20 0%, transparent 50%)`,
              `radial-gradient(circle at 70% 50%, ${project.color}20 0%, transparent 50%)`,
              `radial-gradient(circle at 30% 50%, ${project.color}20 0%, transparent 50%)`
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={isActive ? {
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            } : {}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="p-8 rounded-full"
            style={{
              backgroundColor: `${project.color}15`,
              boxShadow: `0 0 60px ${project.color}30, inset 0 0 30px ${project.color}10`
            }}
          >
            <div style={{ color: project.color }} className="scale-[3.5]">
              {project.icon}
            </div>
          </motion.div>
        </div>

        <div
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-mono border backdrop-blur-md"
          style={{
            borderColor: `${project.color}50`,
            backgroundColor: `${project.color}15`,
            color: project.color
          }}
        >
          {project.id === "brain-machine" ? "Undergrad" : "Graduate"}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <div className="flex items-start gap-3 mb-3">
          <div
            className="p-2 rounded-xl border"
            style={{
              backgroundColor: `${project.color}15`,
              borderColor: `${project.color}30`,
              color: project.color
            }}
          >
            {project.icon}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
            <p className="text-xs text-neutral-400">{project.subtitle}</p>
          </div>
        </div>

        {/* Key Metrics - Always Visible */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {project.highlights.map((highlight, i) => (
            <div
              key={i}
              className="text-center p-2 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div
                className="text-xs font-bold"
                style={{ color: project.color }}
              >
                {highlight.metric}
              </div>
            </div>
          ))}
        </div>

        {/* Expandable Details - with max-height and scroll */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  {project.description}
                </p>

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
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer with View Details button */}
        <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleExpand();
            }}
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

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-2 rounded-full bg-white/5 border border-white/10 text-white hover:text-primary hover:border-primary/50 transition-all group/link"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
              <span className="text-xs opacity-0 group-hover/link:opacity-100 transition-opacity">View Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const INACTIVITY_TIMEOUT = 20000; // 20 seconds

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check if any card has details expanded
  const isDetailsExpanded = expandedIndex !== null;

  // Reset inactivity timer
  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    if (isDetailsExpanded) return;

    inactivityTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, INACTIVITY_TIMEOUT);
  }, [isDetailsExpanded]);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused || isDetailsExpanded) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, isDetailsExpanded]);

  // Cleanup inactivity timer on unmount
  useEffect(() => {
    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, []);

  // Restart auto-scroll when Projects section comes into view
  useEffect(() => {
    const section = document.getElementById('projects');
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            // Restart auto-scroll when scrolling to projects section
            setExpandedIndex(null);
            setIsPaused(false);
          }
        });
      },
      { threshold: [0.3, 0.5] }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Handle navigation - pause, collapse details, and start inactivity timer
  const handleNavigation = (newIndex: number) => {
    setIsPaused(true);
    setExpandedIndex(null); // Collapse any expanded details
    setActiveIndex(newIndex);
    resetInactivityTimer();
  };

  const goToPrev = () => {
    handleNavigation((activeIndex - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    handleNavigation((activeIndex + 1) % projects.length);
  };

  // Handle expand/collapse details
  const toggleExpand = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
      resetInactivityTimer();
    } else {
      setExpandedIndex(index);
      setIsPaused(true);
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-black relative z-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
            <TextReveal direction="up" className="inline-block">Personal Projects</TextReveal>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Explorations in high-dimensional space.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          ref={containerRef}
          className="relative h-[700px] flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          {/* Cards */}
          <div className="relative flex items-center justify-center">
            {projects.map((project, index) => {
              const style = getCardStyle(index, activeIndex, projects.length);

              // Skip rendering cards that are not visible
              if (!style.visible) return null;

              return (
                <motion.div
                  key={project.id}
                  className="absolute"
                  animate={{
                    x: style.x,
                    scale: style.scale,
                    rotateY: style.rotateY,
                    opacity: style.opacity,
                    z: style.z
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  style={{
                    zIndex: style.zIndex,
                    filter: style.blur > 0 ? `blur(${style.blur}px)` : 'none',
                    transformStyle: "preserve-3d"
                  }}
                >
                  <ProjectCard
                    project={project}
                    isActive={index === activeIndex}
                    isExpanded={expandedIndex === index}
                    onToggleExpand={() => toggleExpand(index)}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 md:left-12 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 md:right-12 z-50 p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                  ? 'w-8 bg-primary'
                  : 'bg-white/20 hover:bg-white/40'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
