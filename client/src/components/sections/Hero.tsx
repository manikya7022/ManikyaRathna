import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_3d_neural_network_background.png";
import avatar from "@assets/generated_images/futuristic_engineer_silhouette_avatar.png";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background z-10" />
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </motion.div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-mono tracking-widest uppercase mb-2 backdrop-blur-sm">
              AI Engineer & Researcher
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tight leading-tight">
              Manikya <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-glow">
                Rathna
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Architecting intelligent systems at the intersection of NLP, Deep Learning, and Real-world Application. 
              Currently pursuing MS in Intelligent Systems at University of Pittsburgh.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <SocialLink href="mailto:mar805@pitt.edu" icon={Mail} label="Email" />
              <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
              <SocialLink href="#" icon={Github} label="GitHub" />
              <SocialLink href="#" icon={FileText} label="Resume" />
            </div>
          </motion.div>

          {/* Avatar / 3D Element */}
          <motion.div
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[500px] h-[600px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-[100px] animate-pulse" />
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/20 backdrop-blur-sm group">
                <img 
                  src={avatar} 
                  alt="Manikya Rathna" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                
                {/* Floating Stats Cards */}
                <FloatingCard 
                  label="GPA" 
                  value="3.91" 
                  sub="University of Pittsburgh"
                  className="top-10 -right-10 delay-100"
                />
                <FloatingCard 
                  label="Experience" 
                  value="3+ Years" 
                  sub="AI & ML Engineering"
                  className="bottom-20 -left-10 delay-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 text-primary" />
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a
      href={href}
      className="p-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all duration-300 group"
      aria-label={label}
    >
      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </a>
  );
}

function FloatingCard({ label, value, sub, className }: { label: string; value: string; sub: string; className?: string }) {
  return (
    <div className={cn(
      "absolute p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-xl min-w-[160px] animate-in fade-in zoom-in duration-700",
      className
    )}>
      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{label}</div>
      <div className="text-2xl font-bold text-white font-mono">{value}</div>
      <div className="text-[10px] text-primary mt-1">{sub}</div>
    </div>
  );
}
