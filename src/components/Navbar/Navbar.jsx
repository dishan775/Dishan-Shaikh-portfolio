import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.5, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'py-3' 
          : 'py-5'
      }`}
    >
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 transition-all duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(180deg, rgba(3,7,18,0.95) 0%, rgba(3,7,18,0.8) 100%)'
            : 'linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 100%)',
          backdropFilter: 'blur(20px) saturate(1.8)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.8)',
          borderBottom: theme === 'dark' 
            ? '1px solid rgba(57, 255, 20, 0.06)'
            : '1px solid rgba(0, 0, 0, 0.06)',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative z-10">
        {/* Logo */}
        <a href="#" className="relative flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10">
            <span 
              className="text-lg font-syne font-bold z-10 transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #39FF14, #10B981)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              DS
            </span>
            <svg
              className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:rotate-90"
              viewBox="0 0 100 100"
            >
              <polygon
                fill="none"
                stroke="url(#navGrad)"
                strokeWidth="3"
                points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                className="opacity-40 group-hover:opacity-80 transition-opacity"
              />
              <defs>
                <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#39FF14" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="hidden sm:block text-sm font-space font-medium text-text-muted group-hover:text-text-primary transition-colors">
            Dishan<span className="text-primary">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div 
            className="flex items-center gap-1 px-2 py-1.5 rounded-full transition-colors duration-300" 
            style={{ 
              background: theme === 'dark' ? 'rgba(10, 15, 30, 0.6)' : 'rgba(240, 243, 246, 0.8)', 
              border: theme === 'dark' ? '1px solid rgba(255,255,255,0.04)' : '1px solid rgba(0,0,0,0.05)',
              backdropFilter: 'blur(10px)'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative text-[13px] font-space tracking-wide px-4 py-2 rounded-full transition-all duration-300 ${
                  activeSection === link.href.substring(1) 
                    ? 'text-background' 
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="navPill"
                    className="absolute inset-0 rounded-full"
                    style={{ 
                      background: 'linear-gradient(135deg, #39FF14, #10B981)',
                      boxShadow: '0 0 20px rgba(57, 255, 20, 0.3)'
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
          </div>
          
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="ml-6 group/btn flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-space font-semibold tracking-wide transition-all duration-300 overflow-hidden relative"
            style={{
              background: 'linear-gradient(135deg, rgba(57, 255, 20, 0.12), rgba(16, 185, 129, 0.12))',
              border: '1px solid rgba(57, 255, 20, 0.25)',
            }}
          >
            <span className="relative z-10 text-primary group-hover/btn:text-white transition-colors">Hire Me</span>
            <ArrowUpRight size={16} className="relative z-10 text-primary group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
            <div 
              className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #39FF14, #10B981)' }}
            />
          </a>

          {/* Theme Toggle Custom Switch */}
          <div className="ml-2 w-[86px] h-[48px] relative flex items-center justify-end">
            <div className="absolute right-0 scale-[0.45] origin-right">
              <div className={`w-48 aspect-video rounded-xl transition-colors duration-300 ${theme === 'dark' ? 'bg-[#1a1f35]' : 'bg-[#ebe6ef]'} border-4 border-[#121331]`}>
              <div className="flex h-full w-full px-2 items-center gap-x-2">
                <div className="w-6 h-6 flex-shrink-0 rounded-full border-4 border-[#121331]"></div>
                <label
                  htmlFor="theme-switch"
                  className={`w-full h-10 border-4 border-[#121331] rounded cursor-pointer transition-transform duration-300 ${theme === 'dark' ? 'scale-x-[-1]' : ''}`}
                >
                  <input 
                    type="checkbox" 
                    id="theme-switch" 
                    className="hidden" 
                    checked={theme === 'dark'}
                    onChange={toggleTheme} 
                  />
                  <div className="w-full h-full bg-[#39FF14] relative">
                    <div className="w-0 h-0 z-20 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[20px] border-t-[#121331] relative">
                      <div className="w-0 h-0 absolute border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[15px] border-t-[#2ECC71] -top-5 -left-[18px]"></div>
                    </div>
                    <div className="w-[24px] h-9 z-10 absolute top-[9px] left-0 bg-[#39FF14] border-r-2 border-b-4 border-[#121331] transform skew-y-[39deg]"></div>
                    <div className="w-[25px] h-9 z-10 absolute top-[9px] left-[24px] bg-[#10B981] border-r-4 border-l-2 border-b-4 border-[#121331] transform skew-y-[-39deg]"></div>
                  </div>
                </label>
                <div className="w-6 h-1 flex-shrink-0 bg-[#121331] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative p-2.5 rounded-xl transition-colors"
          style={{ background: 'rgba(57, 255, 20, 0.05)', border: '1px solid rgba(57, 255, 20, 0.1)' }}
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={22} className="text-primary" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 95% 5%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 95% 5%)' }}
            transition={{ type: 'tween', duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{ 
              background: theme === 'dark'
                ? 'radial-gradient(ellipse at center, #0a0f1e 0%, #030712 100%)'
                : 'radial-gradient(ellipse at center, #ffffff 0%, #f9fafb 100%)',
            }}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 p-3 rounded-xl text-primary"
              style={{ background: 'rgba(57, 255, 20, 0.05)', border: '1px solid rgba(57, 255, 20, 0.1)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            
            {/* Decorative elements */}
            <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
            
            <ul className="flex flex-col space-y-6 items-center text-center">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-4xl font-syne font-bold text-text-primary hover:text-transparent transition-all duration-300"
                    style={{
                      WebkitBackgroundClip: 'text',
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'linear-gradient(135deg, #39FF14, #10B981)';
                      e.target.style.WebkitBackgroundClip = 'text';
                      e.target.style.WebkitTextFillColor = 'transparent';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'none';
                      e.target.style.WebkitTextFillColor = 'unset';
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="px-10 py-4 rounded-full font-space font-bold text-lg tracking-wider text-background"
                  style={{
                    background: 'linear-gradient(135deg, #39FF14, #10B981)',
                    boxShadow: '0 0 30px rgba(57, 255, 20, 0.4)'
                  }}
                >
                  Hire Me ↗
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
