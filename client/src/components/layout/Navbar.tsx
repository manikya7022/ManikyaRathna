import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu, Code, Briefcase, User, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Cpu },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300",
            scrolled
              ? "bg-black/60 backdrop-blur-md border border-white/10 shadow-lg shadow-primary/5"
              : "bg-transparent border-transparent"
          )}
        >
          <a
            href="#"
            className="text-xl font-bold font-sans tracking-tight flex items-center gap-2 group"
          >
            <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary border border-primary/50 group-hover:bg-primary group-hover:text-black transition-colors">
              M
            </span>
            <span className="group-hover:text-primary transition-colors">Manikya Rathna</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors rounded-full group overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 transition-transform rounded-full origin-center" />
              </a>
            ))}
            <a
              href="mailto:mar805@pitt.edu"
              className="ml-4 px-5 py-2 bg-primary text-black font-semibold rounded-full hover:bg-white transition-colors text-sm shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-4 md:hidden"
          >
            <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-2 shadow-2xl">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-colors"
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </a>
              ))}
              <a
                href="mailto:mar805@pitt.edu"
                className="mt-2 w-full py-3 bg-primary text-black font-bold rounded-xl text-center hover:bg-white transition-colors"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
