import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { Meteors } from "../ui/meteors";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-neutral-950 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Education
          </h2>
          <p className="text-neutral-400 mt-2">
            Academic foundation and research milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="relative w-full">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl opacity-20" />
              <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-8 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                
                {/* Meteor Effect */}
                <Meteors number={20} />

                <div className="flex justify-between items-start w-full mb-4 relative z-50">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-400">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </div>
                </div>

                <h3 className="font-bold text-2xl text-white mb-2 relative z-50">
                  {edu.degree}
                </h3>
                <p className="font-medium text-neutral-300 mb-4 relative z-50">
                  {edu.school}
                </p>

                <div className="flex items-center gap-2 text-sm text-cyan-300 mb-6 bg-cyan-900/20 w-fit px-3 py-1 rounded-full border border-cyan-500/20 relative z-50">
                  <Award className="w-4 h-4" />
                  GPA: {edu.gpa}
                </div>

                <div className="space-y-2 relative z-50">
                  {edu.details.map((detail, i) => (
                    <div key={i} className="text-sm text-neutral-400 flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-neutral-500" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
