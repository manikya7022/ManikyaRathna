import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const experiences = [
  {
    role: "AI Engineer Intern",
    company: "Northbridge",
    location: "Pittsburgh, USA",
    period: "Nov 2025 – Present",
    desc: [
      "Enhanced job-candidate matching accuracy by 35% using hybrid recommendation engine (AWS SageMaker, Collaborative Filtering).",
      "Automated visa-sponsorship classification for 6,000+ postings with 73% accuracy via BERT fine-tuning.",
      "Improved resume-to-job matching relevance by 28% using transformer-based extraction and OpenSearch."
    ]
  },
  {
    role: "NLP Software Developer",
    company: "University of Pittsburgh",
    location: "Pittsburgh, USA",
    period: "Sept 2025 – Present",
    desc: [
      "Extracted clinical insights from 135M+ patient notes with 92% accuracy for tendinopathy cases using OHNLP.",
      "Streamlined ETL pipelines reducing processing time by 65% for 6 EHR clinical domains.",
      "Optimized query performance by 70% on 135M+ row database using advanced PostgreSQL indexing."
    ]
  },
  {
    role: "Fellowship",
    company: "Premium Automation and Premium Labs",
    location: "Pittsburgh, USA",
    period: "Mar 2025 – May 2025",
    desc: [
      "Architected AI pipeline with LLMs (GPT, Gemini) and RAG for industrial market analysis, reducing manual effort by 70%.",
      "Engineered scoring mechanism for stakeholder responses and market signals.",
      "Built RAG-based NLP framework for semantic keyword identification."
    ]
  },
  {
    role: "Machine Learning Engineer",
    company: "Tata Consultancy Services",
    location: "Bangalore, India",
    period: "Aug 2021 – Jul 2024",
    desc: [
      "Developed predictive models (XGBoost, Random Forest) for insurance premiums.",
      "Managed scalable ETL pipelines in AWS Glue with PySpark.",
      "Integrated Spark with NoSQL databases for large unstructured datasets.",
      "Designed Flask-based RESTful APIs for ML model delivery."
    ]
  }
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 md:-translate-x-1/2 ml-6 md:ml-0" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index }: { exp: any; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px"
  });

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row gap-8 ${
        isLeft ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Node */}
      <div className="absolute left-6 md:left-1/2 top-0 w-4 h-4 rounded-full bg-black border-2 border-primary shadow-[0_0_10px_rgba(0,240,255,0.5)] md:-translate-x-1/2 z-10 mt-1.5 -ml-2 md:ml-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="ml-12 md:ml-0 md:w-1/2"
      >
        <div className={`p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm group ${
          isLeft ? "md:mr-12" : "md:ml-12"
        }`}>
          <div className="flex flex-col gap-1 mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
              {exp.role}
            </h3>
            <div className="flex items-center gap-2 text-secondary font-medium">
              <Briefcase className="w-4 h-4" />
              {exp.company}
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-1 font-mono">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {exp.period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {exp.location}
              </span>
            </div>
          </div>

          <ul className="space-y-2">
            {exp.desc.map((item: string, i: number) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      
      {/* Empty space for the other side */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  );
}
