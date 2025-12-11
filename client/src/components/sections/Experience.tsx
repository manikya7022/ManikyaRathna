import { motion } from "framer-motion";
import { Terminal, Database, Cloud, Code2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden">
      {/* Vertical Line for Timeline */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Execution Logs
            </h2>
        </div>

        <div className="space-y-24">
          {experiences.map((exp, i) => (
            <TimelineItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ exp, index }: { exp: any; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex flex-col md:flex-row gap-8 items-center ${isLeft ? "md:flex-row-reverse" : ""}`}>
      
      {/* Center Point */}
      <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-black border border-white/20 md:-translate-x-1/2 flex items-center justify-center z-10">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      </div>

      {/* Content Side */}
      <div className="ml-12 md:ml-0 md:w-1/2 w-full">
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`p-6 rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 relative group ${
            isLeft ? "md:mr-12" : "md:ml-12"
          }`}
        >
          {/* Decorative corners */}
          <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-center gap-2 mb-2">
            <exp.icon className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-primary/80">{exp.period}</span>
          </div>

          <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
          <div className="text-neutral-400 text-sm font-medium mb-4 flex items-center gap-2">
             <span className="w-1 h-1 rounded-full bg-neutral-600" />
             {exp.company}
          </div>

          <ul className="space-y-3">
            {exp.desc.map((item: string, idx: number) => (
              <li key={idx} className="text-neutral-400 text-sm leading-relaxed flex items-start gap-2">
                <span className="mt-1.5 text-primary/50 text-[10px]">➜</span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Empty Side */}
      <div className="hidden md:block md:w-1/2" />
    </div>
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
