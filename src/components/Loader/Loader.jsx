import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const loadingTexts = [
    "Initializing Neural Systems...",
    "Loading AI Architecture...",
    "Rendering Experience..."
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.2;
      });
    }, 20);

    // Text cycling
    const textInterval = setInterval(() => {
      setTextIndex((prev) => {
        if (prev < loadingTexts.length - 1) return prev + 1;
        clearInterval(textInterval);
        return prev;
      });
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: 'radial-gradient(ellipse at center, #0a0f1e 0%, #030712 100%)' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {/* Orbiting particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
              width: `${200 + i * 80}px`,
              height: `${200 + i * 80}px`,
              marginLeft: `-${100 + i * 40}px`,
              marginTop: `-${100 + i * 40}px`,
            }}
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 8 + i * 4, 
              repeat: Infinity, 
              ease: "linear",
              direction: i % 2 === 0 ? "normal" : "reverse"
            }}
          >
            <div 
              className="absolute rounded-full"
              style={{
                width: '4px',
                height: '4px',
                background: i === 0 ? '#00D4FF' : i === 1 ? '#7C3AED' : '#10B981',
                boxShadow: `0 0 15px ${i === 0 ? '#00D4FF' : i === 1 ? '#7C3AED' : '#10B981'}`,
                top: '0',
                left: '50%',
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Background subtle stars */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              background: '#00D4FF',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ 
              duration: Math.random() * 2 + 1.5, 
              repeat: Infinity, 
              delay: Math.random() * 2 
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo */}
        <div className="relative mb-10 h-28 w-28 flex items-center justify-center">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: '1px solid rgba(0, 212, 255, 0.2)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner ring */}
          <motion.div
            className="absolute rounded-full"
            style={{ 
              inset: '8px',
              border: '1px solid rgba(124, 58, 237, 0.3)',
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Logo text */}
          <motion.div
            className="relative z-10 text-5xl font-syne font-bold tracking-tighter"
            style={{
              background: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            initial={{ filter: "blur(10px)", scale: 1.5, opacity: 0 }}
            animate={{ filter: "blur(0px)", scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            DS
          </motion.div>
          
          {/* Glow behind */}
          <div 
            className="absolute inset-0 rounded-full blur-[40px] opacity-30"
            style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }}
          />
        </div>

        {/* Text Cycling */}
        <div className="h-6 mb-6 overflow-hidden relative w-72 text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              className="text-sm font-mono tracking-wider"
              style={{ color: 'rgba(0, 212, 255, 0.7)' }}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {loadingTexts[textIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="w-72 relative">
          <div className="w-full h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(0, 212, 255, 0.1)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ 
                background: 'linear-gradient(90deg, #00D4FF, #7C3AED)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.8), 0 0 40px rgba(0, 212, 255, 0.4)'
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[10px] font-mono text-text-muted">[SYS.INIT]</span>
            <span className="text-[10px] font-mono text-text-muted">{Math.min(100, Math.floor(progress))}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Loader;
