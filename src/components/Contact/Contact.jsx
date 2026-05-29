import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, Phone, Download, Code2, Terminal } from 'lucide-react';

const ContactCard = ({ icon: Icon, label, value, href }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="glassmorphism p-10 rounded-2xl flex flex-col items-center justify-center gap-5 w-full sm:w-72 transition-transform hover:-translate-y-2 group"
    >
      <div className="p-5 rounded-full bg-primary/10 text-primary group-hover:scale-110 transition-transform">
        <Icon size={32} />
      </div>
      <div className="text-center">
        <div className="text-sm font-mono uppercase tracking-[0.2em] text-text-muted mb-2">{label}</div>
        <div className="text-lg font-sans text-text-primary group-hover:text-primary transition-colors">{value}</div>
      </div>
    </a>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="w-full min-h-screen pt-24 pb-8 bg-surface relative overflow-hidden flex flex-col">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col items-center justify-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-8"
        >
          <span className="font-mono text-primary animate-pulse">// CONTACT</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border border-primary/30 p-1 bg-surface/50 backdrop-blur-sm shadow-[0_0_30px_rgba(0,212,255,0.15)] group relative flex items-center justify-center">
             <div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite] bg-gradient-to-tr from-primary/20 to-transparent" />
             <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-surface">
               <img src="/dishan-contact.jpg" alt="Dishan Shaikh" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
             </div>
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-[4rem] sm:text-[5rem] font-space font-bold text-center leading-tight mb-8 text-text-primary"
        >
          Let's Build <br /> Something Intelligent.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center font-sans text-lg text-text-muted max-w-2xl mb-16 leading-relaxed"
        >
          Open to internships, AI/ML projects, full-stack collaborations, and research opportunities. Based in Pune — available remotely.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-20 w-full"
        >
          <ContactCard 
            icon={Mail} 
            label="Email" 
            value="dishan.shaikh24@pccoe.org" 
            href="mailto:dishan.shaikh24@pccoe.org"
          />
          <ContactCard 
            icon={Mail} 
            label="Personal Email" 
            value="dishanshaikh775@gmail.com" 
            href="mailto:dishanshaikh775@gmail.com"
          />
          <ContactCard 
            icon={Briefcase} 
            label="LinkedIn" 
            value="/in/dishan-shaikh" 
            href="https://www.linkedin.com/in/dishan-shaikh-68b116311?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          />
          <ContactCard 
            icon={Phone} 
            label="Phone" 
            value="+91 87882 65908" 
            href="tel:+918788265908"
          />
        </motion.div>

        <motion.a 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          href="/Dishan_Shaikh_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 px-12 py-6 bg-primary text-background rounded-lg font-space font-bold text-xl uppercase tracking-wider hover:bg-transparent hover:text-primary border border-primary hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all duration-300 group"
        >
          <Download size={28} className="group-hover:-translate-y-1 transition-transform" />
          Download Full Resume
        </motion.a>

      </div>

      {/* Footer */}
      <footer className="w-full pt-20 pb-8 px-6 md:px-12 relative z-10 flex flex-col items-center">
        <div className="w-full max-w-7xl h-[1px] bg-primary/10 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl gap-4">
          <p className="text-base font-sans text-text-muted">
            Built with <span className="text-primary">♥</span> by Dishan Shaikh <span className="mx-2 text-text-muted/30">·</span> Pune, India <span className="mx-2 text-text-muted/30">·</span> 2026
          </p>
          <div className="flex items-center gap-6">
            {[
              { icon: Code2, href: "https://github.com/dishan775" },
              { icon: Briefcase, href: "https://www.linkedin.com/in/dishan-shaikh-68b116311?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
              { icon: Terminal, href: "https://leetcode.com/u/Dishan7/" },
              { icon: Mail, href: "mailto:dishan.shaikh24@pccoe.org" }
            ].map((s, i) => (
              <a 
                key={i} 
                href={s.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-text-muted hover:text-primary transition-colors"
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
