import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = {
  Languages: ["Python", "Java", "TypeScript", "JavaScript", "HTML/CSS", "SQL", "NoSQL", "R Studio", "React"],
  "AI & NLP": ["Hugging Face", "QLora", "PEFT", "DPO", "Fine-tuning", "Transformers", "LangChain", "Azure OpenAI"],
  "Deep Learning": ["TensorFlow", "Keras", "PyTorch", "BERT", "AWS SageMaker", "Computer Vision"],
  "Tools & Cloud": ["AWS (EC2, Glue, Lambda)", "PostgreSQL", "Git", "Docker", "Spark", "Flask"]
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/50">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Arsenal</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable, and robust AI systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary blur-xl" />
                </div>
                
                <h3 className="text-xl font-bold mb-6 font-mono text-primary group-hover:text-white transition-colors">
                  {category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-black/40 border border-white/10 text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
