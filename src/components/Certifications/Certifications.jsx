import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, GraduationCap, Medal, Star } from 'lucide-react';

const CertCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: `0 10px 30px -10px ${cert.glowColor}30` }}
      className="glassmorphism p-8 rounded-2xl flex flex-col h-full relative overflow-hidden group"
      style={{ borderTopColor: `${cert.glowColor}50`, borderTopWidth: '2px' }}
    >
      <div className="flex justify-between items-start mb-6">
        <div 
          className="p-4 rounded-xl flex items-center justify-center bg-background/50 border border-white/5"
        >
          <cert.icon size={32} style={{ color: cert.glowColor }} />
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-background text-text-muted border border-white/5">
            {cert.year}
          </span>
          {cert.completed && (
            <span className="flex items-center gap-1 text-xs font-space uppercase tracking-wide text-tertiary">
              <CheckCircle2 size={14} /> Verified
            </span>
          )}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-end">
        <h3 className="text-xl font-space font-bold mb-3 leading-tight text-text-primary group-hover:text-primary transition-colors">
          {cert.title}
        </h3>
        <p className="text-base font-sans flex items-center gap-2 text-text-muted">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: cert.glowColor }}></span>
          {cert.issuer}
        </p>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  const certsData = [
    {
      title: "Oracle Cloud Infrastructure Generative AI",
      issuer: "Oracle",
      year: "2024",
      completed: true,
      icon: GraduationCap,
      glowColor: '#E81C24',
    },
    {
      title: "Convolve 4.0 - A Pan-IIT AI/ML",
      issuer: "IIT, Guwahati",
      year: "2025",
      completed: true,
      icon: Award,
      glowColor: '#7C3AED',
    },
    {
      title: "Indradhanu Hackathon (AI For Climate Change) - Final Round",
      issuer: "Indradhanu",
      year: "2025",
      completed: true,
      icon: Medal,
      glowColor: '#10B981',
    },
    {
      title: "India Innovates Hackathon 2026 - Finalist",
      issuer: "India Innovates",
      year: "2026",
      completed: true,
      icon: Star,
      glowColor: '#F59E0B',
    }
  ];

  return (
    <section className="w-full py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="font-mono text-primary animate-pulse">// ACHIEVEMENTS</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-space font-bold text-text-primary"
          >
            Certifications & Awards
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certsData.map((cert, index) => (
            <CertCard key={index} cert={cert} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
