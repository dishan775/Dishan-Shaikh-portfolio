import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const TimelineNode = ({ item, index }) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`relative flex items-center justify-between md:justify-normal w-full mb-20 ${isEven ? 'flex-row-reverse md:flex-row' : 'md:flex-row-reverse'}`}>
      
      {/* Node Dot */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
        <motion.div 
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(0,212,255,0.8)] relative"
        >
          <div className="absolute inset-0 rounded-full animate-ping bg-primary/40" style={{ animationDuration: '2s' }} />
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="hidden md:block w-5/12"></div>

      {/* Content Card */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-5/12 z-10"
      >
        <div className={`glassmorphism p-8 rounded-2xl relative transition-transform duration-300 hover:-translate-y-2 border-l-2 ${isEven ? 'border-primary' : 'border-secondary'}`}>
          <div className={`font-mono text-sm mb-4 tracking-wider ${isEven ? 'text-primary' : 'text-secondary'}`}>
            {item.period}
          </div>
          <h3 className="text-2xl font-space font-bold mb-4 text-text-primary">
            {item.title}
          </h3>
          <ul className="space-y-3">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-base items-start font-sans text-text-muted">
                <span className={isEven ? 'text-primary/50' : 'text-secondary/50'}>→</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timelineData = [
    {
      period: "2026 July — Present",
      title: "3rd Year — B.Tech CSE (AI & ML), PCCOE",
      bullets: [
        "Building Elevate and AI Avatar in parallel",
        "Deep-diving LLMs, RAG, Agentic AI systems"
      ]
    },
    {
      period: "2025-2026 May",
      title: "2nd Year Completed",
      bullets: [
        "Built AQI Prediction, PollutionEye (YOLO), CarbonTrack",
        "Won Best Project Award — CSE Department, PCCOE",
        "Finalist — PCCOE Innovation Hackathon 2024"
      ]
    },
    {
      period: "2024 — Started",
      title: "Began B.Tech Journey at PCCOE Pune",
      bullets: [
        "Started with Python, ML foundations, DSA",
        "Built first Arduino solar car project with team"
      ]
    }
  ];

  return (
    <section id="timeline" className="w-full py-24 bg-surface relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="font-mono text-primary animate-pulse">// JOURNEY</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-space font-bold text-text-primary"
          >
            My Timeline
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Center Line Background */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-primary/10 rounded-full" />
          
          {/* Animated Glowing Line */}
          <motion.div 
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] rounded-full z-10 origin-top bg-gradient-to-b from-primary via-secondary to-tertiary shadow-[0_0_15px_rgba(57,255,20,0.5)]"
            style={{ height: lineHeight }}
          />

          {timelineData.map((item, index) => (
            <TimelineNode key={index} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
