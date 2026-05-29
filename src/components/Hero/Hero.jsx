import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Briefcase, Mail, Terminal } from 'lucide-react';
import NeuralCanvas from './NeuralCanvas';
import gsap from 'gsap';

const Typewriter = () => {
  const words = [
    "AI & ML Engineer",
    "Full Stack Developer",
    "Computer Vision Expert",
    "LLM Systems Builder",
    "Agentic AI Specialist"
  ];
  const [currentWord, setCurrentWord] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setCurrentWord(isDeleting ? fullText.substring(0, currentWord.length - 1) : fullText.substring(0, currentWord.length + 1));
      setTypingSpeed(isDeleting ? 30 : 100);

      if (!isDeleting && currentWord === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typingSpeed]);

  return (
    <span className="font-mono text-primary text-2xl md:text-3xl lg:text-4xl inline-block">
      {currentWord}
      <span className="animate-blink">_</span>
    </span>
  );
};

const Hero = () => {
  const headlineRef = useRef(null);

  useEffect(() => {
    const chars = headlineRef.current.querySelectorAll('.char');
    gsap.fromTo(chars, 
      { opacity: 0, y: 50, rotateX: -90 },
      { opacity: 1, y: 0, rotateX: 0, stagger: 0.05, duration: 1, ease: "back.out(1.7)", delay: 3 }
    );
  }, []);

  const headline = "Dishan Shaikh";

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-mesh">
      {/* Neural Canvas as full background */}
      <NeuralCanvas />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="w-full h-[2px] bg-primary/20 absolute top-0" style={{ animation: 'scan 6s linear infinite' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center relative z-20">
        
        {/* Content — shifted right and made larger */}
        <div className="w-full lg:w-[75%] flex flex-col justify-center items-start pt-10 lg:pt-0 lg:pl-24 xl:pl-32">
          
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-blink" />
            <span className="text-xs font-space text-primary uppercase tracking-widest">Available for Internships & Projects</span>
          </motion.div>

          {/* Headline */}
          <h1 
            ref={headlineRef}
            className="font-syne text-[4.5rem] sm:text-[6rem] lg:text-[7rem] leading-[0.9] text-text-primary font-bold mb-6 whitespace-nowrap tracking-tighter"
            style={{ perspective: '1000px' }}
          >
            {headline.split(' ').map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 lg:mr-6 last:mr-0">
                {word.split('').map((char, index) => (
                  <span key={index} className="char inline-block">{char}</span>
                ))}
              </span>
            ))}
          </h1>

          {/* Typewriter */}
          <div className="mb-10 h-12">
            <Typewriter />
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
            className="font-sans text-xl md:text-2xl text-text-muted max-w-2xl mb-12 leading-relaxed"
          >
            Building intelligent systems at the intersection of AI, data, and real-world impact. PCCOE Pune → Global.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 mb-16"
          >
            <a href="#projects" className="px-10 py-5 bg-primary text-background font-space font-bold uppercase tracking-wider rounded border border-primary hover:bg-transparent hover:text-primary hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] transition-all duration-300 text-center text-lg">
              View My Projects
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-transparent text-text-primary font-space font-bold uppercase tracking-wider rounded border border-text-muted hover:border-primary hover:text-primary transition-colors duration-300 text-center text-lg">
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
            className="flex gap-6"
          >
            {[
              { icon: Code2, href: "https://github.com/dishan775", label: "GitHub" },
              { icon: Briefcase, href: "https://www.linkedin.com/in/dishan-shaikh-68b116311?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
              { icon: Terminal, href: "https://leetcode.com/u/Dishan7/", label: "LeetCode" },
              { icon: Mail, href: "mailto:dishan.shaikh24@pccoe.org", label: "Email" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full border border-text-muted/30 text-text-muted hover:text-primary hover:border-primary hover:scale-110 hover:shadow-[0_0_15px_rgba(0,212,255,0.4)] transition-all duration-300 group"
              >
                <social.icon size={20} className="group-hover:animate-pulse" />
              </a>
            ))}
          </motion.div>
          
        </div>

        {/* Right side — empty space */}
        <div className="hidden lg:block w-[25%]" />

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-space text-text-muted tracking-widest uppercase">Scroll</span>
        <ArrowDown className="text-primary animate-bounce" size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;
