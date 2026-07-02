import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

// ── Falling Snow Canvas Component ──
const SnowParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Create particles
    const particles = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
      speedY: Math.random() * 0.5 + 0.2,
      speedX: Math.random() * 0.3 - 0.15,
      opacity: Math.random() * 0.5 + 0.1
    }));

    const render = () => {
      // Clear canvas completely
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        // Move
        p.y += p.speedY;
        p.x += p.speedX;
        
        // Reset if out of bounds
        if (p.y > 100) p.y = -5;
        if (p.x > 100) p.x = 0;
        if (p.x < 0) p.x = 100;
        
        // Draw
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        // Convert % to actual pixels
        const px = (p.x / 100) * canvas.width;
        const py = (p.y / 100) * canvas.height;
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    // Set canvas internal resolution to match display size for crispness
    const resize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    
    window.addEventListener('resize', resize);
    resize();
    render();
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-[30%] h-[55%] pointer-events-none opacity-80"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

const DishanPixelAvatar = () => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const currentTilt = useRef({ x: 0, y: 0 });
  const currentScale = useRef(1);
  const currentBrightness = useRef(1);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [brightness, setBrightness] = useState(1);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isPressedRef = useRef(false);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touch);

    // Track scroll for 3D effect
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lerp = (start, end, factor) => start + (end - start) * factor;

  const animateEyes = useCallback(() => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height * 0.45; // Eyes are roughly 45% down

    const deltaX = mouseRef.current.x - centerX;
    const deltaY = mouseRef.current.y - centerY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    // Normalize direction, scale by distance with diminishing returns
    const maxPupilShift = 7; // Increased shift for better visibility
    const influence = Math.min(distance / 400, 1); 
    const targetX = (deltaX / Math.max(distance, 1)) * influence * maxPupilShift;
    const targetY = (deltaY / Math.max(distance, 1)) * influence * maxPupilShift;

    // ── Calculate Parallax Tilt (Mouse + Scroll) ──
    const normX = deltaX / (window.innerWidth / 2);
    const normY = deltaY / (window.innerHeight / 2);
    const clampedX = Math.max(-1, Math.min(1, normX));
    const clampedY = Math.max(-1, Math.min(1, normY));
    
    // Base mouse tilt
    let targetTiltX = clampedY * -8; // Increased base tilt for more 3D depth
    let targetTiltY = clampedX * 12; 

    // Add scroll-based tilt (tilts up as you scroll down)
    const scrollFactor = Math.min(scrollYRef.current / 500, 1);
    targetTiltX += scrollFactor * 15;

    // 3D Card Click Effect Logic
    let targetScale = 1;
    let targetBrightness = 1;
    
    if (isPressedRef.current) {
      targetScale = 0.94; // Push inward
      targetTiltX *= 1.8; // Exaggerate tilt heavily when pressed
      targetTiltY *= 1.8;
      targetBrightness = 0.85; // Darken slightly to simulate pushing away from light
    }

    // Lerp for silky-smooth easing (higher factor for scale to feel responsive)
    currentTilt.current.x = lerp(currentTilt.current.x, targetTiltX, 0.12);
    currentTilt.current.y = lerp(currentTilt.current.y, targetTiltY, 0.12);
    currentScale.current = lerp(currentScale.current, targetScale, 0.2);
    currentBrightness.current = lerp(currentBrightness.current, targetBrightness, 0.15);

    setTilt({ x: currentTilt.current.x, y: currentTilt.current.y });
    setScale(currentScale.current);
    setBrightness(currentBrightness.current);

    rafRef.current = requestAnimationFrame(animateEyes);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animateEyes);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [isTouchDevice, animateEyes]);

  // ── Coffee Steam SVG Component ──
  // Adjusted positioning to sit perfectly above the coffee mug in the left corner
  const CoffeeSteam = () => (
    <div className="absolute pointer-events-none" style={{ bottom: '15%', left: '7%', width: '7%', height: '18%' }}>
      {[0, 1, 2].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 60"
          className="absolute bottom-0"
          style={{
            left: `${i * 30}%`,
            width: '50%',
            height: '100%',
            opacity: 0.6 - i * 0.15,
            animation: `steam ${2.5 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`,
          }}
        >
          <path
            d="M10 60 Q5 45 10 35 Q15 25 10 15 Q5 5 10 0"
            fill="none"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      ))}
    </div>
  );



  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 3, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full h-full flex items-center justify-center"
      style={{ perspective: '1500px' }}
    >
      {/* Speech Bubble on Hover */}
      <div 
        className={`absolute top-[-30px] right-0 md:right-[-20px] bg-surface-elevated border border-primary/30 px-4 py-3 rounded-xl rounded-br-none shadow-[0_0_20px_rgba(57,255,20,0.15)] z-50 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <p className="font-mono text-sm text-primary">
          <span className="text-text-muted mr-2">&gt;</span>
          success = inevitable
        </p>
        <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-surface-elevated border-b border-r border-primary/30 transform rotate-45"></div>
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[70%] h-[70%] rounded-full bg-primary/10 blur-[90px]" />
      </div>

      {/* Avatar wrapper — continuous breathing + 3D parallax tilt with blended edges */}
      <div
        className="relative w-[360px] h-[360px] md:w-[460px] md:h-[460px] lg:w-[540px] lg:h-[540px] overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); isPressedRef.current = false; }}
        onMouseDown={() => { isPressedRef.current = true; }}
        onMouseUp={() => { isPressedRef.current = false; }}
        onTouchStart={() => { isPressedRef.current = true; }}
        onTouchEnd={() => { isPressedRef.current = false; }}
        style={{
          animation: 'breathe 4s ease-in-out infinite',
          transform: `scale(${scale}) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: 'preserve-3d',
          filter: `brightness(${brightness})`,
          imageRendering: 'auto',
          // Mask that only feathers the outer 5-10% to keep corner text visible!
          maskImage: 'radial-gradient(ellipse 95% 95% at 50% 50%, black 85%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 95% 95% at 50% 50%, black 85%, transparent 100%)'
        }}
      >
        {/* CRT Scanline Overlay Effect */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-20 mix-blend-overlay"
             style={{ background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.8) 2px, rgba(0,0,0,0.8) 4px)' }} 
        />

        {/* Base pixel art image layer — Removed scaling so nothing is cut off! */}
        <img
          src="/dishan-avatar.jpg"
          alt="Dishan Shaikh — Pixel Art Coding Avatar"
          className="w-full h-full object-contain select-none pointer-events-none z-0"
          draggable={false}
          style={{ imageRendering: 'auto' }}
        />

        {/* Snow Canvas precisely over the window area (top left) */}
        <SnowParticles />

        {/* Dynamic Light Reflection from Parallax */}
        <div
          className="absolute inset-0 z-30 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${50 + tilt.y * 3}% ${50 + tilt.x * -3}%, rgba(255,255,255,0.08) 0%, transparent 50%)`,
          }}
        />



        {/* ── Monitor Blinking Cursor ── */}
        {/* Overlay a blinking div directly over the green cursor on the left monitor */}
        <div 
          className="absolute z-10 bg-primary animate-pulse"
          style={{
            bottom: '19.5%',
            left: '23.8%',
            width: '2%',
            height: '2.5%',
            animationDuration: '1s' // 1s blink speed
          }}
        />

        {/* Coffee steam animation */}
        <CoffeeSteam />
      </div>

      {/* ── Keyframe styles (injected once) ── */}
      <style>{`
        @keyframes breathe {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes steam {
          0% {
            transform: translateY(0) scaleX(1);
            opacity: 0;
          }
          15% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(-12px) scaleX(1.3);
            opacity: 0.35;
          }
          100% {
            transform: translateY(-30px) scaleX(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default DishanPixelAvatar;
