import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen, Trophy, Star } from "lucide-react";
import { Meteors } from "../ui/meteors";
import { AbstractShape, FloatingParticles } from "../ui/3d-shape";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 opacity-20">
        <FloatingParticles count={60} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-5" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
            Education
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Academic foundation and research milestones shaping my journey in AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative w-full group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Glow Background */}
              <div
                className="absolute inset-0 h-full w-full rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${edu.color}40, ${edu.secondaryColor}40)` }}
              />

              <div className="relative shadow-2xl bg-gradient-to-br from-gray-900/90 to-gray-900/50 border border-gray-800/50 backdrop-blur-xl px-8 py-8 h-full overflow-hidden rounded-3xl flex flex-col transition-all duration-500 hover:border-white/20 hover:shadow-primary/10">

                {/* 3D Shape Floating in Background */}
                <div className="absolute -right-10 -top-10 w-48 h-48 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700">
                  <AbstractShape color={edu.color} />
                </div>

                {/* Meteor Effect */}
                <Meteors number={15} />

                {/* Header Row */}
                <div className="flex justify-between items-start w-full mb-6 relative z-10">
                  <div
                    className="p-4 rounded-2xl border transition-all duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: `${edu.color}15`,
                      borderColor: `${edu.color}30`,
                    }}
                  >
                    <GraduationCap className="w-8 h-8" style={{ color: edu.color }} />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-mono text-neutral-400">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                </div>

                {/* Degree & School */}
                <h3 className="font-bold text-2xl text-white mb-2 relative z-10 group-hover:text-primary transition-colors">
                  {edu.degree}
                </h3>
                <p className="font-medium text-neutral-300 mb-4 relative z-10 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-neutral-500" />
                  {edu.school}
                </p>

                {/* GPA Badge */}
                <div
                  className="flex items-center gap-2 text-sm w-fit px-4 py-2 rounded-full border mb-6 relative z-10"
                  style={{
                    backgroundColor: `${edu.color}10`,
                    borderColor: `${edu.color}30`,
                    color: edu.color
                  }}
                >
                  <Trophy className="w-4 h-4" />
                  <span className="font-bold">GPA: {edu.gpa}</span>
                </div>

                {/* Details */}
                <div className="space-y-3 relative z-10 mb-6">
                  {edu.details.map((detail, i) => (
                    <div key={i} className="text-sm text-neutral-400 flex items-start gap-3">
                      <Star className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: edu.color }} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Coursework Tags */}
                <div className="mt-auto pt-4 border-t border-white/5 relative z-10">
                  <div className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Key Coursework</div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-[10px] font-mono rounded bg-white/5 text-neutral-400 border border-white/5"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { icon: Trophy, value: "3.9+", label: "Graduate GPA" },
            { icon: Award, value: "Top 10%", label: "Class Rank" },
            { icon: BookOpen, value: "6+", label: "Research Projects" },
            { icon: Star, value: "3", label: "Publications" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-primary/30 transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-neutral-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
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
    color: "#06b6d4",
    secondaryColor: "#22c55e",
    details: [
      "Specialization in Artificial Intelligence & Machine Learning",
      "Focus on NLP, Deep Learning, and LLM Alignment",
      "Graduate Research in Uncertainty-Aware RLHF"
    ],
    coursework: ["Deep Learning", "NLP", "Computer Vision", "ML Systems", "AI Ethics"]
  },
  {
    school: "Visvesvaraya Technological University",
    degree: "Bachelor of Engineering in Electronics & Communication",
    period: "Aug 2017 – Aug 2021",
    gpa: "8.23/10.0",
    color: "#a855f7",
    secondaryColor: "#ec4899",
    details: [
      "Foundation in Electronics and Signal Processing",
      "Undergraduate research in Brain-Computer Interfaces",
      "Engineering Mathematics and Systems Design"
    ],
    coursework: ["Signal Processing", "Embedded Systems", "Digital Electronics", "Control Systems"]
  }
];
