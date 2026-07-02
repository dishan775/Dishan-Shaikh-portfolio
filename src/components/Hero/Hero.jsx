import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Briefcase, Mail, Terminal } from 'lucide-react';

const InstagramIcon = ({ size, className }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    className={className} 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
import NeuralCanvas from './NeuralCanvas';
import HeroAvatar from './HeroAvatar';
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
    <span 
      className="font-sans text-[#030712] bg-primary px-3 py-1 text-2xl md:text-3xl lg:text-4xl inline-block font-bold tracking-wide"
    >
      {currentWord}
      <span className="animate-blink font-light opacity-50 ml-1">_</span>
    </span>
  );
};

const Hero = () => {
  const headlineRef = useRef(null);

  useEffect(() => {
    const chars = headlineRef.current.querySelectorAll('.char');
    gsap.fromTo(chars, 
      { opacity: 0, y: 50, rotateX: -90 },
      { opacity: 1, y: 0, rotateX: 0, stagger: 0.05, duration: 1, ease: "back.out(1.7)", delay: 0.2 }
    );
  }, []);

  const headline = "Dishan Shaikh";

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-background hero-custom-bg">
      {/* Neural Canvas as full background */}
      <NeuralCanvas />
      
      {/* Scan Line Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="w-full h-[2px] bg-primary/20 absolute top-0" style={{ animation: 'scan 6s linear infinite' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative z-20">
        
        {/* Left side — Pixel Art Avatar */}
        <div className="w-full lg:w-[48%] flex items-center justify-center pt-8 lg:pt-0 order-2 lg:order-1">
          <HeroAvatar />
        </div>

        {/* Right side — Content */}
        <div className="w-full lg:w-[52%] flex flex-col justify-center items-start pt-10 lg:pt-0 order-1 lg:order-2">

          {/* Headline */}
          <h1 
            ref={headlineRef}
            className="font-space text-[3.5rem] sm:text-[4.5rem] lg:text-[6rem] leading-[0.95] text-text-primary font-bold mb-8 tracking-tight text-highlighter"
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
          <div className="mb-10 h-12 text-highlighter">
            <Typewriter />
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="font-sans text-lg md:text-xl text-text-muted max-w-xl mb-12 leading-relaxed text-highlighter"
          >
            Building intelligent systems at the intersection of AI, data, and real-world impact.<br/>
            PCCOE Pune <span className="font-bold text-text-primary mx-2">→</span> Global
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 mb-12"
          >
            <a href="#projects" className="px-8 py-4 bg-primary text-white font-space font-bold uppercase tracking-wider rounded border border-primary hover:bg-transparent hover:text-primary transition-all duration-300 text-center">
              View My Projects
            </a>
            <a href="/Dishan_Shaikh_Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent text-text-primary font-space font-bold uppercase tracking-wider rounded border border-text-muted hover:border-primary hover:text-primary transition-colors duration-300 text-center">
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="flex gap-5"
          >
            {[
              { icon: Code2, href: "https://github.com/dishan775", label: "GitHub" },
              { icon: Briefcase, href: "https://www.linkedin.com/in/dishan-shaikh-68b116311?utm_source=share_via&utm_content=profile&utm_medium=member_android", label: "LinkedIn" },
              { icon: Terminal, href: "https://leetcode.com/u/Dishan7/", label: "LeetCode" },
              { icon: InstagramIcon, href: "https://www.instagram.com/dishan5016/", label: "Instagram" },
              { icon: Mail, href: "mailto:dishan.shaikh24@pccoe.org", label: "Email" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full border border-text-muted/30 text-text-muted hover:text-primary hover:border-primary hover:scale-110 transition-all duration-300 group"
              >
                <social.icon size={20} className="group-hover:animate-pulse" />
              </a>
            ))}
          </motion.div>
          
        </div>

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
