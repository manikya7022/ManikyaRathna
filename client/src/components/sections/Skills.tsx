import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SkillsVisualization } from "../ui/3d-shape";
import TextReveal from "@/components/ui/TextReveal";
import { Code2, Brain, Cloud, Database, Sparkles } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "#06b6d4",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "R", "React", "HTML/CSS"],
  },
  {
    title: "AI & NLP",
    icon: Brain,
    color: "#a855f7",
    skills: ["Hugging Face", "QLora", "PEFT", "DPO", "Fine-tuning", "Transformers", "LangChain", "Azure OpenAI"],
  },
  {
    title: "Deep Learning",
    icon: Sparkles,
    color: "#22c55e",
    skills: ["TensorFlow", "Keras", "PyTorch", "BERT", "AWS SageMaker", "Computer Vision", "RLHF"],
  },
  {
    title: "Tools & Cloud",
    icon: Cloud,
    color: "#f59e0b",
    skills: ["AWS (EC2, Glue, Lambda)", "PostgreSQL", "Git", "Docker", "Spark", "Flask", "FastAPI"],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <SkillsVisualization />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
              <TextReveal direction="up" className="inline-block">Technical Arsenal</TextReveal>
            </span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for building intelligent, scalable, and robust AI systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden hover:shadow-2xl hover:shadow-primary/5">
                {/* Animated Glow */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                  style={{ backgroundColor: category.color }}
                />

                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div
                    className="p-3 rounded-xl border transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${category.color}15`,
                      borderColor: `${category.color}30`,
                    }}
                  >
                    <category.icon className="w-6 h-6" style={{ color: category.color }} />
                  </div>
                  <h3
                    className="text-xl font-bold font-mono transition-colors duration-300"
                    style={{ color: category.color }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {category.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + index * 0.05 }}
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-black/50 border border-white/10 text-neutral-300 hover:text-white hover:border-white/30 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom Accent Line */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ backgroundColor: category.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: "ML Models Deployed", value: "15+" },
            { label: "Projects Completed", value: "20+" },
            { label: "Years Experience", value: "3+" },
            { label: "Technologies", value: "40+" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
