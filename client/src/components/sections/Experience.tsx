import React from "react";
import { motion } from "framer-motion";
import { Terminal, Database, Cloud, Code2, Briefcase, Calendar, ArrowRight } from "lucide-react";
import { TracingBeam } from "../ui/tracing-beam";
import { TimelineHelix, AbstractShape } from "../ui/3d-shape";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden">
      {/* 3D Helix Background - Left Side */}
      <div className="absolute left-0 top-0 w-1/3 h-full opacity-20 hidden lg:block">
        <TimelineHelix />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-5" />

      {/* Header */}
      <div className="container mx-auto px-4 mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
            Work Experience
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            A journey through production systems, research labs, and enterprise-scale ML infrastructure.
          </p>
        </motion.div>
      </div>

      <TracingBeam className="px-6">
        <div className="max-w-3xl mx-auto antialiased pt-4 relative z-10">
          {experiences.map((item, index) => (
            <motion.div
              key={`content-${index}`}
              className="mb-16 relative group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              {/* Floating 3D Element */}
              <div className="absolute -left-20 top-16 w-16 h-16 hidden lg:block opacity-0 group-hover:opacity-60 transition-opacity duration-700">
                <AbstractShape color={item.color} />
              </div>

              {/* Company Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-primary/20 to-secondary/20 text-white rounded-full text-sm px-4 py-1.5 border border-white/10 shadow-lg backdrop-blur-sm font-medium">
                  {item.company}
                </span>
                <div className="flex items-center gap-1 text-xs text-neutral-500 font-mono">
                  <Calendar className="w-3 h-3" />
                  {item.period}
                </div>
              </div>

              {/* Main Card */}
              <div
                className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:shadow-2xl relative overflow-hidden group/card"
                style={{
                  boxShadow: `0 0 60px ${item.color}10`
                }}
              >
                {/* Hover Glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${item.color}10, transparent 70%)`
                  }}
                />

                {/* Role Header */}
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div
                    className="p-3 rounded-xl border transition-all duration-300 group-hover/card:scale-110"
                    style={{
                      backgroundColor: `${item.color}15`,
                      borderColor: `${item.color}30`,
                    }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover/card:text-primary transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm text-neutral-400">{item.location}</p>
                  </div>
                </div>

                {/* Description List */}
                <ul className="space-y-4 relative z-10">
                  {item.desc.map((desc, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <span
                        className="mt-2 w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 group-hover/item:scale-150"
                        style={{
                          backgroundColor: item.color,
                          boxShadow: `0 0 10px ${item.color}`
                        }}
                      />
                      <span className="text-sm text-neutral-300 leading-relaxed group-hover/item:text-white transition-colors">
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2 relative z-10">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-[10px] font-mono rounded bg-white/5 text-neutral-400 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </TracingBeam>
    </section>
  );
}

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Northbridge",
    location: "Pittsburgh, PA (Remote)",
    period: "Nov 2025 – Present",
    icon: Cloud,
    color: "#06b6d4",
    tech: ["AWS Lambda", "SageMaker", "PostgreSQL", "Python", "EFS"],
    desc: [
      "Enhanced job-candidate matching by 35% using a hybrid recommendation engine combining collaborative filtering and semantic embeddings.",
      "Automated visa-sponsorship classification for 6k+ postings achieving 73% accuracy with fine-tuned NLP models.",
      "Deployed serverless inference endpoints with Lambda and EFS, reducing cold start times by 60%."
    ]
  },
  {
    role: "NLP Software Developer",
    company: "University of Pittsburgh",
    location: "Pittsburgh, PA",
    period: "Sept 2025 – Present",
    icon: Code2,
    color: "#a855f7",
    tech: ["Python", "BERT", "PostgreSQL", "AWS Glue", "NLP"],
    desc: [
      "Extracted clinical insights from 135M+ patient notes with 92% accuracy using transformer-based NER pipelines.",
      "Optimized query performance by 70% on 135M+ row database through indexing and query restructuring.",
      "Streamlined ETL pipelines reducing processing time by 65% with parallel processing and batch optimization."
    ]
  },
  {
    role: "AI/ML Fellowship",
    company: "Premium Automation & Labs",
    location: "Pittsburgh, PA",
    period: "Mar 2025 – May 2025",
    icon: Terminal,
    color: "#22c55e",
    tech: ["LLMs", "RAG", "LangChain", "Vector DBs", "Python"],
    desc: [
      "Architected AI pipeline with LLMs & RAG for industrial automation market analysis and competitor intelligence.",
      "Engineered multi-criteria scoring mechanism for stakeholder response evaluation and prioritization.",
      "Reduced manual research effort by 70% through automated report generation and insight extraction."
    ]
  },
  {
    role: "Machine Learning Engineer",
    company: "Tata Consultancy Services",
    location: "Bangalore, India",
    period: "Aug 2021 – Jul 2024",
    icon: Database,
    color: "#f59e0b",
    tech: ["XGBoost", "PySpark", "AWS Glue", "Docker", "NoSQL"],
    desc: [
      "Developed predictive models (XGBoost, Random Forest) for insurance premium estimation with 89% accuracy.",
      "Managed scalable ETL pipelines in AWS Glue processing 50M+ records daily with PySpark optimization.",
      "Integrated Spark with NoSQL databases for real-time analytics on large-scale datasets."
    ]
  }
];
