import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-t from-black to-transparent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-sans">
                  Let's <span className="text-primary">Connect</span>
                </h2>
                <p className="text-muted-foreground">
                  I'm currently looking for new opportunities in AI/ML Engineering. 
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                
                <div className="space-y-4 pt-4">
                  <ContactItem icon={Mail} text="mar805@pitt.edu" href="mailto:mar805@pitt.edu" />
                  <ContactItem icon={Linkedin} text="LinkedIn Profile" href="#" />
                  <ContactItem icon={Github} text="GitHub Profile" href="#" />
                </div>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none"
                    placeholder="Hello, I'd like to discuss..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-black font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-16 text-muted-foreground text-sm">
        <p>© 2025 Manikya Rathna. Built with React & Tailwind.</p>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, text, href }: { icon: any; text: string; href: string }) {
  return (
    <a 
      href={href} 
      className="flex items-center gap-3 text-white hover:text-primary transition-colors group p-3 rounded-lg hover:bg-white/5 w-fit"
    >
      <div className="p-2 rounded-full bg-white/10 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-medium">{text}</span>
    </a>
  );
}
