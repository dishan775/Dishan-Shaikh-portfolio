import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PixelGhost = () => (
  <div id="ghost-loader-container" className="relative flex justify-center items-center h-48 w-48 mb-8 scale-[0.85] md:scale-100">
    <div id="ghost">
      <div id="shadow"></div>
      <div id="green-ghost">
        {/* Static body parts */}
        <div id="top0"></div>
        <div id="top1"></div>
        <div id="top2"></div>
        <div id="top3"></div>
        <div id="top4"></div>
        {[0, 1, 2, 3, 4, 5].map(i => <div key={`st${i}`} id={`st${i}`}></div>)}
        
        {/* Animated flickering bottom pixels */}
        {[...Array(18)].map((_, i) => <div key={`an${i + 1}`} id={`an${i + 1}`}></div>)}
        
        {/* Eyes and pupils */}
        <div id="eye"></div>
        <div id="eye1"></div>
        <div id="pupil"></div>
        <div id="pupil1"></div>
      </div>
    </div>
    <style>{`
      #ghost {
        position: relative;
        scale: 0.8;
      }

      #green-ghost {
        animation: upNDown infinite 0.5s;
        position: relative;
        width: 140px;
        height: 140px;
        display: grid;
        grid-template-columns: repeat(14, 1fr);
        grid-template-rows: repeat(14, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        grid-template-areas:
          "a1  a2  a3  a4  a5  top0  top0  top0  top0  a10 a11 a12 a13 a14"
          "b1  b2  b3  top1 top1 top1 top1 top1 top1 top1 top1 b12 b13 b14"
          "c1 c2 top2 top2 top2 top2 top2 top2 top2 top2 top2 top2 c13 c14"
          "d1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 d14"
          "e1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 e14"
          "f1 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 top3 f14"
          "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
          "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
          "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
          "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
          "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
          "top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4 top4"
          "st0 st0 an4 st1 an7 st2 an10 an10 st3 an13 st4 an16 st5 st5"
          "an1 an2 an3 an5 an6 an8 an9 an9 an11 an12 an14 an15 an17 an18";
      }

      @keyframes upNDown {
        0%, 49% { transform: translateY(0px); }
        50%, 100% { transform: translateY(-10px); }
      }

      #top0, #top1, #top2, #top3, #top4,
      #st0, #st1, #st2, #st3, #st4, #st5 {
        background-color: #39FF14;
      }

      #top0 { grid-area: top0; }
      #top1 { grid-area: top1; }
      #top2 { grid-area: top2; }
      #top3 { grid-area: top3; }
      #top4 { grid-area: top4; }
      #st0 { grid-area: st0; }
      #st1 { grid-area: st1; }
      #st2 { grid-area: st2; }
      #st3 { grid-area: st3; }
      #st4 { grid-area: st4; }
      #st5 { grid-area: st5; }

      #an1 { grid-area: an1; animation: flicker0 infinite 0.5s; }
      #an18 { grid-area: an18; animation: flicker0 infinite 0.5s; }
      #an2 { grid-area: an2; animation: flicker1 infinite 0.5s; }
      #an17 { grid-area: an17; animation: flicker1 infinite 0.5s; }
      #an3 { grid-area: an3; animation: flicker1 infinite 0.5s; }
      #an16 { grid-area: an16; animation: flicker1 infinite 0.5s; }
      #an4 { grid-area: an4; animation: flicker1 infinite 0.5s; }
      #an15 { grid-area: an15; animation: flicker1 infinite 0.5s; }
      #an6 { grid-area: an6; animation: flicker0 infinite 0.5s; }
      #an12 { grid-area: an12; animation: flicker0 infinite 0.5s; }
      #an7 { grid-area: an7; animation: flicker0 infinite 0.5s; }
      #an13 { grid-area: an13; animation: flicker0 infinite 0.5s; }
      #an9 { grid-area: an9; animation: flicker1 infinite 0.5s; }
      #an10 { grid-area: an10; animation: flicker1 infinite 0.5s; }
      #an8 { grid-area: an8; animation: flicker0 infinite 0.5s; }
      #an11 { grid-area: an11; animation: flicker0 infinite 0.5s; }

      @keyframes flicker0 {
        0%, 49% { background-color: #39FF14; }
        50%, 100% { background-color: transparent; }
      }

      @keyframes flicker1 {
        0%, 49% { background-color: transparent; }
        50%, 100% { background-color: #39FF14; }
      }

      #eye { width: 40px; height: 50px; position: absolute; top: 30px; left: 10px; }
      #eye::before { content: ""; background-color: white; width: 20px; height: 50px; transform: translateX(10px); display: block; position: absolute; }
      #eye::after { content: ""; background-color: white; width: 40px; height: 30px; transform: translateY(10px); display: block; position: absolute; }
      
      #eye1 { width: 40px; height: 50px; position: absolute; top: 30px; right: 30px; }
      #eye1::before { content: ""; background-color: white; width: 20px; height: 50px; transform: translateX(10px); display: block; position: absolute; }
      #eye1::after { content: ""; background-color: white; width: 40px; height: 30px; transform: translateY(10px); display: block; position: absolute; }

      #pupil { width: 20px; height: 20px; background-color: #0b1021; position: absolute; top: 50px; left: 10px; z-index: 1; animation: eyesMovement infinite 3s; }
      #pupil1 { width: 20px; height: 20px; background-color: #0b1021; position: absolute; top: 50px; right: 50px; z-index: 1; animation: eyesMovement infinite 3s; }

      @keyframes eyesMovement {
        0%, 49% { transform: translateX(0px); }
        50%, 99% { transform: translateX(10px); }
        100% { transform: translateX(0px); }
      }

      #shadow {
        background-color: #10B981;
        width: 140px;
        height: 140px;
        position: absolute;
        border-radius: 50%;
        transform: rotateX(80deg);
        filter: blur(25px);
        top: 80%;
        animation: shadowMovement infinite 0.5s;
        z-index: -1;
      }

      @keyframes shadowMovement {
        0%, 49% { opacity: 0.15; }
        50%, 100% { opacity: 0.05; }
      }
    `}</style>
  </div>
);

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
                background: i === 0 ? '#39FF14' : i === 1 ? '#2ecc71' : '#10B981',
                boxShadow: `0 0 15px ${i === 0 ? '#39FF14' : i === 1 ? '#2ecc71' : '#10B981'}`,
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
              background: '#39FF14',
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
        {/* Pixel Ghost Loader */}
        <PixelGhost />

        {/* Text Cycling */}
        <div className="h-6 mb-6 overflow-hidden relative w-72 text-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              className="text-sm font-mono tracking-wider"
              style={{ color: 'rgba(57, 255, 20, 0.7)' }}
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
          <div className="w-full h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(57, 255, 20, 0.1)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ 
                background: 'linear-gradient(90deg, #39FF14, #10B981)',
                boxShadow: '0 0 20px rgba(57, 255, 20, 0.8), 0 0 40px rgba(57, 255, 20, 0.4)'
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
