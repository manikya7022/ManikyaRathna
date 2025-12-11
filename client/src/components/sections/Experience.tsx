import React from "react";
import { motion } from "framer-motion";
import { Terminal, Database, Cloud, Code2 } from "lucide-react";
import { TracingBeam } from "../ui/tracing-beam";
import { AbstractShape } from "../ui/3d-shape";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-4 mb-16 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
          Work Experience
        </h2>
        <p className="text-neutral-400 mt-4">
          Tracing the runtime history of professional engagements.
        </p>
      </div>

      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-4 relative">
          {experiences.map((item, index) => (
            <div key={`content-${index}`} className="mb-14 relative group">
              
              {/* Floating 3D Element for each block */}
              <div className="absolute -left-16 top-10 w-12 h-12 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                 <AbstractShape color="#06b6d4" />
              </div>

              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)] relative z-10">
                {item.company}
              </h2>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 border border-white/10 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <p className="text-xs text-neutral-400 font-mono">{item.period}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {item.desc.map((desc, i) => (
                    <li key={i} className="text-sm text-neutral-300 flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] flex-shrink-0" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
    period: "Nov 2025 – Present",
    icon: Cloud,
    desc: [
      "Enhanced job-candidate matching by 35% using hybrid recommendation engine.",
      "Automated visa-sponsorship classification for 6k+ postings with 73% accuracy.",
      "Deployed serverless inference endpoints with Lambda and EFS."
    ]
  },
  {
    role: "NLP Software Developer",
    company: "University of Pittsburgh",
    period: "Sept 2025 – Present",
    icon: Code2,
    desc: [
      "Extracted clinical insights from 135M+ patient notes with 92% accuracy.",
      "Optimized query performance by 70% on 135M+ row database.",
      "Streamlined ETL pipelines reducing processing time by 65%."
    ]
  },
  {
    role: "Fellowship",
    company: "Premium Automation & Labs",
    period: "Mar 2025 – May 2025",
    icon: Terminal,
    desc: [
      "Architected AI pipeline with LLMs & RAG for industrial market analysis.",
      "Engineered scoring mechanism for stakeholder responses.",
      "Reduced manual research effort by 70%."
    ]
  },
  {
    role: "Machine Learning Engineer",
    company: "Tata Consultancy Services",
    period: "Aug 2021 – Jul 2024",
    icon: Database,
    desc: [
      "Developed predictive models (XGBoost) for insurance premiums.",
      "Managed scalable ETL pipelines in AWS Glue with PySpark.",
      "Integrated Spark with NoSQL databases for large datasets."
    ]
  }
];
