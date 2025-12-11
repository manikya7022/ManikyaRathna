import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { ContactGlobe } from "../ui/3d-shape";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:mar805@pitt.edu?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
              Let's Connect
            </h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              I'm currently looking for new opportunities in AI/ML Engineering.
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - 3D Globe & Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* 3D Globe */}
              <div className="h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-neutral-900/50 to-neutral-900/20 backdrop-blur-xl relative">
                <ContactGlobe />
                {/* Overlay Text */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-neutral-400">
                    <MapPin className="w-4 h-4 text-primary" />
                    Pittsburgh, PA
                  </div>
                  <div className="text-xs text-neutral-500 font-mono">
                    Open to Remote & Relocation
                  </div>
                </div>
              </div>

              {/* Contact Links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ContactCard
                  icon={Mail}
                  label="Email"
                  value="mar805@pitt.edu"
                  href="mailto:mar805@pitt.edu"
                  color="#06b6d4"
                />
                <ContactCard
                  icon={Linkedin}
                  label="LinkedIn"
                  value="Connect"
                  href="https://www.linkedin.com/in/manikya-rathna-098263196/"
                  color="#0077b5"
                />
                <ContactCard
                  icon={Github}
                  label="GitHub"
                  value="View Code"
                  href="https://github.com/manikya7022"
                  color="#ffffff"
                />
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none group-hover:bg-primary/20 transition-colors duration-500" />

                <h3 className="text-2xl font-bold text-white mb-6 relative z-10">
                  Send a Message
                </h3>

                <form className="space-y-5 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-neutral-400">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white placeholder:text-neutral-600"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-neutral-400">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white placeholder:text-neutral-600"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-neutral-400">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-white placeholder:text-neutral-600"
                      placeholder="Let's collaborate on..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-neutral-400">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-white placeholder:text-neutral-600"
                      placeholder="Hello, I'd like to discuss..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-black font-bold rounded-xl hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg shadow-primary/20 hover:shadow-primary/40"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-20 pt-8 border-t border-white/5">
        <p className="text-neutral-500 text-sm">
          © 2025 Manikya Rathna. Crafted with <span className="text-primary">React</span>, <span className="text-secondary">Three.js</span> & <span className="text-white">Tailwind</span>.
        </p>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  color
}: {
  icon: any;
  label: string;
  value: string;
  href: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group hover:bg-white/10"
    >
      <div
        className="p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-neutral-500 uppercase tracking-wider">{label}</div>
        <div className="text-sm text-white font-medium group-hover:text-primary transition-colors truncate">{value}</div>
      </div>
      <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-primary transition-colors" />
    </a>
  );
}
