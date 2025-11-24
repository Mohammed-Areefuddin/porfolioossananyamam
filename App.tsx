import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Download, 
  Briefcase, 
  GraduationCap, 
  Award, 
  BookOpen, 
  Code2, 
  Cpu,
  Menu,
  X
} from 'lucide-react';
import { AIChat } from './components/AIChat';
import { Section } from './components/Section';
import { RESUME } from './constants';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isNavOpen, setIsNavOpen] = useState(false);

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    setIsNavOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Publications' },
    { id: 'skills', label: 'Skills' },
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400 cursor-pointer" onClick={() => scrollTo('hero')}>
            ASM
          </span>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a 
              href={RESUME.social.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 text-xs font-bold bg-white text-dark rounded-full hover:bg-slate-200 transition-colors"
            >
              Connect
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsNavOpen(!isNavOpen)}>
            {isNavOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isNavOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-dark border-b border-white/5 p-6 flex flex-col gap-4">
             {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left text-lg font-medium text-slate-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative px-6">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
              <span className="text-sm font-medium text-primary">Data Science & AI Enthusiast</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight">
              Hello, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                {RESUME.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              {RESUME.title}
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a 
                href={RESUME.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-3 bg-white text-dark font-semibold rounded-full hover:bg-slate-200 transition-all transform hover:scale-105"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
              <button 
                onClick={() => scrollTo('projects')}
                className="flex items-center gap-2 px-8 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                View Publications
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" darker>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-6">About Me</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              {RESUME.summary}
            </p>
            <div className="flex gap-4">
               <div className="p-4 bg-card rounded-2xl border border-white/5 flex-1">
                 <div className="text-primary font-bold text-3xl mb-1">3+</div>
                 <div className="text-sm text-slate-500">Years Education</div>
               </div>
               <div className="p-4 bg-card rounded-2xl border border-white/5 flex-1">
                 <div className="text-secondary font-bold text-3xl mb-1">5+</div>
                 <div className="text-sm text-slate-500">Publications</div>
               </div>
               <div className="p-4 bg-card rounded-2xl border border-white/5 flex-1">
                 <div className="text-green-400 font-bold text-3xl mb-1">1.5</div>
                 <div className="text-sm text-slate-500">Years Exp</div>
               </div>
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-xl opacity-20"></div>
             <div className="relative bg-card p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Award className="text-yellow-400" /> Honors & Awards
                </h3>
                <ul className="space-y-4">
                  {RESUME.awards.map((award, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2.5 flex-shrink-0"></span>
                      {award}
                    </li>
                  ))}
                  {RESUME.certifications.map((cert, i) => (
                    <li key={`cert-${i}`} className="flex gap-3 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
                      {cert}
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </Section>

      {/* Experience & Education Grid */}
      <Section id="experience" title="Experience & Education">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Work */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary" size={24} />
              <h3 className="text-2xl font-bold">Work History</h3>
            </div>
            <div className="space-y-8 pl-2 border-l border-white/10">
              {RESUME.experience.map((exp) => (
                <div key={exp.id} className="relative pl-8 group">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-primary transition-colors ring-4 ring-dark" />
                  <span className="text-xs font-mono text-primary mb-1 block">{exp.duration}</span>
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h4>
                  <div className="text-sm text-slate-400 mb-2">{exp.company} • {exp.location}</div>
                  <p className="text-slate-500 text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-secondary" size={24} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-8 pl-2 border-l border-white/10">
              {RESUME.education.map((edu) => (
                 <div key={edu.id} className="relative pl-8 group">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-slate-700 group-hover:bg-secondary transition-colors ring-4 ring-dark" />
                  <span className="text-xs font-mono text-secondary mb-1 block">{edu.year}</span>
                  <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                  <p className="text-slate-400 text-sm mt-1">{edu.degree}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Publications */}
      <Section id="projects" title="Publications" darker>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESUME.publications.map((pub, i) => (
            <motion.div 
              key={pub.id}
              whileHover={{ y: -5 }}
              className="bg-card border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                <BookOpen size={24} />
              </div>
              <h3 className="text-lg font-bold mb-3 line-clamp-2" title={pub.title}>{pub.title}</h3>
              <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                {pub.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-2 py-1 bg-white/5 rounded-md text-xs text-slate-400">Research</span>
                <span className="px-2 py-1 bg-white/5 rounded-md text-xs text-slate-400">AI/ML</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Technical Arsenal">
        <div className="grid gap-8">
          {RESUME.skills.map((skillGroup, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-lg font-medium text-slate-300">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <div 
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-card border border-white/10 hover:border-white/30 transition-all cursor-default flex items-center gap-2 group"
                  >
                    {skillGroup.category === "Languages" && <Code2 size={16} className="text-primary opacity-50 group-hover:opacity-100" />}
                    {skillGroup.category === "Core" && <Cpu size={16} className="text-secondary opacity-50 group-hover:opacity-100" />}
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-dark text-center">
         <div className="max-w-4xl mx-auto px-6">
           <h2 className="text-2xl font-display font-bold mb-6">Let's Connect</h2>
           <p className="text-slate-400 mb-8 max-w-lg mx-auto">
             I am eager to connect with like-minded people and explore data-driven opportunities.
           </p>
           <div className="flex justify-center gap-6">
             <a href={RESUME.social.linkedin} className="text-slate-400 hover:text-white transition-colors">
               <Linkedin size={24} />
             </a>
             <a href={`mailto:contact@example.com`} className="text-slate-400 hover:text-white transition-colors">
               <Mail size={24} />
             </a>
           </div>
           <p className="mt-12 text-xs text-slate-600">
             © {new Date().getFullYear()} Ananya S M. All rights reserved. <br/>
             Powered by React, Tailwind, and Gemini API.
           </p>
         </div>
      </footer>

      {/* Interactive Chat Bot */}
      <AIChat />
    </div>
  );
};

export default App;