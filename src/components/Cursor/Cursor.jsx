import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTextHovering, setIsTextHovering] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Standard interactive elements
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('hoverable')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      // Text highlighter effect
      if (target.classList.contains('text-highlighter') || target.closest('.text-highlighter')) {
        setIsTextHovering(true);
      } else {
        setIsTextHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-[100] transition-opacity duration-300"
        style={{
          background: 'linear-gradient(135deg, #39FF14, #10B981)',
          boxShadow: '0 0 10px rgba(57, 255, 20, 0.6)',
          mixBlendMode: 'screen',
          opacity: isTextHovering ? 0 : 1
        }}
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isClicking ? 0.5 : 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.08 }}
      />
      {/* Follower Ring / Highlighter */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[99]"
        style={{
          border: isTextHovering ? 'none' : '1.5px solid rgba(57, 255, 20, 0.3)',
          mixBlendMode: isTextHovering ? 'difference' : 'normal',
          filter: isTextHovering ? 'blur(4px)' : 'none'
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isTextHovering ? 3.5 : (isClicking ? 0.7 : isHovering ? 1.6 : 1),
          borderColor: isHovering && !isTextHovering ? 'rgba(46, 204, 113, 0.5)' : 'rgba(57, 255, 20, 0.3)',
          backgroundColor: isTextHovering ? '#39FF14' : (isHovering ? 'rgba(46, 204, 113, 0.05)' : 'transparent')
        }}
        transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 0.4 }}
      />
    </>
  );
};

export default Cursor;
