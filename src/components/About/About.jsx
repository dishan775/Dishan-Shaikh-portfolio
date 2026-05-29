import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import AvatarCanvas from './AvatarCanvas';

const Counter = ({ from, to, duration, suffix = "", text = "" }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-4 glassmorphism rounded-xl">
      <div className="text-3xl font-syne font-bold text-primary mb-1 text-glow">
        {count}{suffix}
      </div>
      <div className="text-sm font-space text-text-muted uppercase tracking-wider text-center">
        {text}
      </div>
    </div>
  );
};

const About = () => {
  const passionTags = [
    "#GenerativeAI", "#ComputerVision", "#LLMs", "#SustainabilityTech",
    "#CivicTech", "#FullStackAI", "#OpenSource", "#ProblemSolver"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 10 }
    }
  };

  return (
    <section id="about" className="w-full min-h-screen py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Left: 3D Avatar */}
        <div className="w-full lg:w-5/12 h-[400px] lg:h-[600px] relative">
          <div className="absolute inset-0 bg-primary/5 rounded-full blur-[100px]" />
          <AvatarCanvas />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-7/12 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="font-mono text-primary animate-pulse">// ABOUT_ME</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-space font-bold text-text-primary mb-8">
              The Mind Behind the Machine
            </h2>
            
            <div className="space-y-6 font-sans text-[16px] leading-[1.8] text-text-muted mb-12">
              <p>
                I'm a pre-final year Computer Science student specializing in AI & Machine Learning at PCCOE, Pune — building systems that see, think, and reason.
              </p>
              <p>
                My work spans LLM-powered products, real-time computer vision pipelines, and full-stack platforms. I care deeply about making AI practical — not just theoretical.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
              <Counter from={0} to={6} duration={2} suffix="+" text="Projects" />
              <Counter from={0} to={5} duration={1.5} suffix="+" text="Technologies" />
              <Counter from={0} to={3} duration={1} suffix="" text="Languages" />
              <Counter from={2020} to={2024} duration={2} suffix="+" text="Present" />
            </div>

            {/* Passion Tags */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap gap-3"
            >
              {passionTags.map((tag, idx) => (
                <motion.span
                  key={idx}
                  variants={tagVariants}
                  className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-sm font-mono text-text-primary hover:bg-primary/20 hover:border-primary transition-colors cursor-default"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* Academics Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 }}
              className="mt-12"
            >
              <h3 className="text-lg font-space font-bold text-text-primary mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-primary"></span> 
                Academic Metrics
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="glassmorphism p-5 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors group">
                  <div className="text-2xl sm:text-3xl font-syne font-bold text-primary mb-1 group-hover:scale-105 transition-transform origin-left text-glow">
                    91.40%
                  </div>
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    10th SSC (Maharashtra)
                  </div>
                </div>
                <div className="glassmorphism p-5 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors group">
                  <div className="text-2xl sm:text-3xl font-syne font-bold text-primary mb-1 group-hover:scale-105 transition-transform origin-left text-glow">
                    81.50%
                  </div>
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    12th HSC
                  </div>
                </div>
                <div className="glassmorphism p-5 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors group">
                  <div className="text-2xl sm:text-3xl font-syne font-bold text-primary mb-1 group-hover:scale-105 transition-transform origin-left text-glow">
                    90.87%
                  </div>
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    JEE Mains
                  </div>
                </div>
                <div className="glassmorphism p-5 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors group">
                  <div className="text-2xl sm:text-3xl font-syne font-bold text-primary mb-1 group-hover:scale-105 transition-transform origin-left text-glow">
                    96.80%
                  </div>
                  <div className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    MHT CET
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
