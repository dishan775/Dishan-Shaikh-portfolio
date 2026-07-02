import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Diamond } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-background">
      {/* Background styling elements similar to About/Projects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-[#00D4FF]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-primary/50" />
            <span className="text-primary font-mono text-sm tracking-widest uppercase">
              Career Path
            </span>
          </div>
          <h2 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tight">
            Experience<span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glassmorphism rounded-2xl p-6 sm:p-8 md:p-10 border border-primary/10 hover:border-primary/30 transition-all duration-300 relative group"
        >
          {/* Subtle Glow on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            
            {/* Logo / Icon Area */}
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-surface rounded-xl border border-primary/20 flex items-center justify-center p-2 shadow-lg shadow-primary/5">
              {/* Fallback to generic icon if logo isn't provided, or we can use a generic IEEE/medical placeholder text */}
              <div className="w-full h-full flex flex-col items-center justify-center text-primary font-syne font-bold text-xs text-center leading-tight">
                IEEE<br/><span className="text-[10px] opacity-80">EMBS</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="flex-grow">
              <h3 className="font-space text-2xl sm:text-3xl font-bold text-text-primary mb-1">
                Research Intern in AI/ML
              </h3>
              
              <div className="font-sans text-lg text-text-primary/90 font-medium mb-3">
                IEEE Engineering Medicine and Biology Society <span className="text-text-muted font-normal text-sm md:text-base ml-1">· Full-time</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted font-mono mb-5">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-primary" />
                  <span>Jun 2026 - Present · 2 mos</span>
                </div>
                <div className="hidden sm:block text-primary/30">•</div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary" />
                  <span>Pune City, Maharashtra, India · Hybrid</span>
                </div>
              </div>

              <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed mb-6">
                Created Flutter mobile App with ABHA integration, Scan and share documents Api, applied ml applications
              </p>

              {/* Skills Area */}
              <div className="flex items-start sm:items-center gap-2 text-sm font-sans text-text-primary/90">
                <Diamond size={16} className="text-primary mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="font-semibold">
                  Artificial Intelligence (AI), Machine Learning <span className="font-normal text-text-muted">and +3 skills</span>
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
