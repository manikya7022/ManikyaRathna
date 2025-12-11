import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Education
          </h2>
          <p className="text-neutral-400 mt-2">
            Academic foundation and research.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-8 rounded-2xl border border-white/10 bg-neutral-900/30 hover:bg-neutral-900/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <div className="text-neutral-400 font-medium mb-4">{edu.school}</div>

                <div className="flex items-center gap-2 text-sm text-primary/80 mb-6 bg-primary/10 w-fit px-3 py-1 rounded-full border border-primary/20">
                  <Award className="w-4 h-4" />
                  GPA: {edu.gpa}
                </div>

                <div className="space-y-3">
                  {edu.details.map((detail, i) => (
                    <div key={i} className="text-sm text-neutral-500 flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-600" />
                      {detail}
                    </div>
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

const education = [
  {
    school: "University of Pittsburgh",
    degree: "Master of Science in Intelligent Systems",
    period: "Aug 2024 – Apr 2026",
    gpa: "3.917/4.0",
    details: [
      "Specialization in Artificial Intelligence",
      "Focus on NLP, Deep Learning, and Intelligent Systems"
    ]
  },
  {
    school: "Visvesvaraya Technological University",
    degree: "Bachelor of Engineering in Electronics & Communication",
    period: "Aug 2017 – Aug 2021",
    gpa: "8.23/10.0",
    details: [
      "Foundation in Electronics and Signal Processing",
      "Undergraduate coursework in Engineering Mathematics and Systems"
    ]
  }
];
