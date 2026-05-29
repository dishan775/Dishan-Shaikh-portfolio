import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Sparkles, Server, Cpu, Car, Eye, ThermometerSun, Flame, Landmark, Zap } from 'lucide-react';
import ParticleSphere from './ParticleSphere';

const ProjectVisual = ({ type }) => {
  if (type === 'elevate') {
    return (
      <div className="w-full rounded-xl relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-500">
        <div className="absolute top-5 left-5 bg-background/90 backdrop-blur-md px-3 py-1.5 text-xs font-mono text-primary border border-primary/30 rounded-full flex items-center gap-2 z-20">
          <Flame size={12} className="text-orange-400" /> Featured Project
        </div>
        <div className="bg-surface border border-primary/20 rounded-xl overflow-hidden group-hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-background/80 border-b border-primary/10">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-surface/80 rounded-md px-3 py-1 text-[10px] font-mono text-text-muted text-center truncate">elevateai-psi.vercel.app</div>
            </div>
          </div>
          <img 
            src="/elevate.png" 
            alt="Elevate AI Learning Platform" 
            className="w-full h-auto block opacity-90 group-hover:opacity-100 transition-opacity duration-500"
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://via.placeholder.com/800x500/0D1B2A/00D4FF?text=elevate.png";
            }}
          />
        </div>
      </div>
    );
  }

  if (type === 'avatar') {
    return (
      <div className="w-full rounded-xl relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(255,165,0,0.15)] transition-all duration-500">
        <div className="absolute top-5 left-5 bg-background/90 backdrop-blur-md px-3 py-1.5 text-xs font-mono text-secondary border border-secondary/30 rounded-full flex items-center gap-2 z-20">
          <Landmark size={12} /> Civic Tech
        </div>
        <div className="bg-surface border border-secondary/20 rounded-xl overflow-hidden group-hover:border-secondary/40 transition-colors">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-background/80 border-b border-secondary/10">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-surface/80 rounded-md px-3 py-1 text-[10px] font-mono text-text-muted text-center truncate">pratinidhiai.vercel.app</div>
            </div>
          </div>
          <img 
            src="/pratinidhi.png" 
            alt="Pratinidhi AI Platform" 
            className="w-full h-auto block opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>
    );
  }

  if (type === 'aqi') {
    return (
      <div className="w-full h-full min-h-[300px] bg-surface/50 border border-tertiary/20 rounded-xl relative overflow-hidden flex items-center justify-center">
        <div className="relative w-48 h-48 rounded-full border-[10px] border-surface flex items-center justify-center shadow-[inset_0_0_20px_rgba(16,185,129,0.2)]">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="#10B981" strokeWidth="10" strokeDasharray="283" strokeDashoffset="50" className="opacity-50" />
            <motion.circle 
              initial={{ strokeDashoffset: 283 }}
              whileInView={{ strokeDashoffset: 100 }}
              transition={{ duration: 2, ease: "easeOut" }}
              cx="50" cy="50" r="45" fill="none" stroke="#10B981" strokeWidth="10" strokeDasharray="283" 
            />
          </svg>
          <div className="text-center">
            <div className="text-3xl font-syne font-bold text-tertiary">42</div>
            <div className="text-xs font-mono text-text-muted uppercase">AQI (Good)</div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'airvision') {
    return (
      <div className="w-full rounded-xl relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-500">
        <div className="absolute top-5 left-5 bg-background/90 backdrop-blur-md px-3 py-1.5 text-xs font-mono text-green-400 border border-green-500/30 rounded-full flex items-center gap-2 z-20">
          <Eye size={12} className="text-green-400" /> Environment AI
        </div>
        <div className="bg-surface border border-green-500/20 rounded-xl overflow-hidden group-hover:border-green-500/40 transition-colors">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-background/80 border-b border-green-500/10">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-surface/80 rounded-md px-3 py-1 text-[10px] font-mono text-text-muted text-center truncate">airvision.app</div>
            </div>
          </div>
          <img 
            src="/air-vision.png" 
            alt="Air Vision AI Platform" 
            className="w-full h-auto block opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </div>
    );
  }

  if (type === 'carbon') {
    return (
      <div className="w-full h-full min-h-[300px] bg-surface/50 border border-tertiary/20 rounded-xl relative overflow-hidden flex items-end justify-center p-8">
        <div className="w-full h-32 flex items-end justify-between gap-2 border-b border-l border-text-muted/30 p-2 relative">
           {[40, 60, 45, 80, 50, 30].map((h, i) => (
             <motion.div 
               key={i}
               initial={{ height: 0 }}
               whileInView={{ height: `${h}%` }}
               transition={{ duration: 1, delay: i * 0.1 }}
               className="w-1/6 bg-tertiary/20 border-t border-tertiary rounded-t-sm"
             />
           ))}
        </div>
      </div>
    );
  }

  if (type === 'solar') {
    return (
      <div className="w-full h-full min-h-[300px] bg-surface/50 border border-primary/20 rounded-xl relative overflow-hidden flex items-center justify-center" style={{ backgroundImage: 'radial-gradient(circle, #00D4FF11 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }}>
           <ThermometerSun size={80} className="text-primary opacity-50" />
        </motion.div>
        <Cpu size={40} className="absolute text-background bg-primary rounded-full p-2" />
      </div>
    );
  }

  return <div className="w-full h-full min-h-[300px] bg-surface rounded-xl"></div>;
};

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 mb-32 group relative`}
    >
      {/* Background Number */}
      <div className={`absolute top-0 ${isEven ? 'right-0 lg:-right-10' : 'left-0 lg:-left-10'} text-[8rem] lg:text-[12rem] font-syne font-bold text-text-muted/5 pointer-events-none leading-none z-0 select-none`}>
        {project.number}
      </div>

      {/* Visual */}
      <div className="w-full lg:w-5/12 z-10">
        <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.02]">
          <ProjectVisual type={project.visualType} />
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-7/12 flex flex-col justify-center z-10 pl-0 lg:pl-10">
        <div className="mb-6 text-sm font-mono text-primary uppercase tracking-widest flex items-center gap-3">
          <span className="w-12 h-[2px] bg-primary"></span>
          {project.category}
        </div>
        
        <h3 className="text-5xl md:text-6xl font-syne font-bold text-text-primary mb-4 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        {project.subtitle && (
          <h4 className="text-xl md:text-2xl font-space text-text-muted mb-8">{project.subtitle}</h4>
        )}
        
        <div className="glassmorphism p-10 rounded-2xl mb-10 shadow-xl relative">
          <p className="font-sans text-text-muted text-xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Impact */}
        {project.impact && (
          <div className="flex flex-wrap gap-5 mb-10">
            {project.impact.map((item, i) => (
              <span key={i} className="px-5 py-3 bg-surface border border-text-muted/20 rounded-lg text-base font-sans text-text-primary flex items-center gap-3 hover:border-primary/40 transition-colors">
                <Zap size={16} className="text-primary" /> {item}
              </span>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-12 font-mono text-base text-text-muted uppercase">
          {project.tech.map((t, i) => (
             <span key={i} className="hover:text-primary transition-colors cursor-default tracking-wider">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6">
          {project.links?.map((link, i) => (
            <a 
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 px-8 py-4 rounded-lg text-lg font-space uppercase tracking-wider transition-all ${
                link.primary 
                  ? 'bg-primary/10 text-primary border border-primary hover:bg-primary hover:text-background shadow-[0_0_15px_rgba(0,212,255,0.2)] hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]'
                  : 'text-text-primary border border-text-muted hover:border-primary hover:text-primary'
              }`}
            >
              {link.icon === 'demo' ? <ExternalLink size={20} /> : <Code size={20} />}
              {link.text}
            </a>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      number: "01",
      visualType: "elevate",
      category: "FULL STACK · GENERATIVE AI",
      title: "Elevate",
      subtitle: "AI-Powered Adaptive Learning Platform",
      description: "Full-stack platform delivering personalized education via LLM-driven RAG pipelines. Features AI tutor with memory, auto-quiz generation, concept gap detection, and spaced-repetition scheduling.",
      impact: ["LLM-Powered Tutoring", "Adaptive Quiz Engine", "Real-time Analytics"],
      tech: ["React", "Node.js", "MongoDB", "LangChain", "OpenAI API", "JWT"],
      links: [
        { text: "Live Demo", url: "https://elevateai-psi.vercel.app/", icon: "demo", primary: true },
        { text: "View Code", url: "#", icon: "code" }
      ]
    },
    {
      number: "02",
      visualType: "avatar",
      category: "COMPUTER VISION · NLP · AGENTIC AI",
      title: "AI Avatar",
      subtitle: "Government Citizen Services Platform",
      description: "Lifelike multilingual AI avatar for government portals — citizens interact in Hindi, Marathi & English via STT → LLM → TTS pipeline with lip-synced avatar rendering. Reduced query resolution time ~65%.",
      impact: ["~65% Faster Resolution", "Multilingual", "On-Premise Ready"],
      tech: ["Python", "FastAPI", "Whisper", "LLM APIs", "D-ID", "Multilingual NLP"],
      links: [
        { text: "Live Demo", url: "https://pratinidhiai.vercel.app", icon: "demo", primary: true }
      ]
    },
    {
      number: "03",
      visualType: "aqi",
      category: "MACHINE LEARNING · CNN · ENVIRONMENTAL AI",
      title: "AQI Predict",
      subtitle: "Advanced AQI Prediction System",
      description: "Machine learning model predicting hyper-local air quality indices with high accuracy using convolutional neural networks on time-series environmental data.",
      impact: ["91% Accuracy", "Hyperlocal Forecasting", "Auto Alerts"],
      tech: ["Python", "TensorFlow", "CNN", "Scikit-learn", "OpenWeatherMap API"]
    },
    {
      number: "04",
      visualType: "airvision",
      category: "COMPUTER VISION · YOLOv8 · DEEP LEARNING",
      title: "Air Vision",
      subtitle: "Predicting Air Pollution with Artificial Intelligence",
      description: "Combining YOLOv8 vehicle detection, NDVI vegetation analysis, and machine learning to predict air quality and understand pollution patterns in urban environments.",
      impact: ["Real-time Analysis", "Predictive ML Models", "Hyperlocal Insights"],
      tech: ["YOLOv8", "OpenCV", "Python", "Scikit-learn", "Flask"],
      links: [
        { text: "Live Demo", url: "#", icon: "demo", primary: true }
      ]
    },
    {
      number: "05",
      visualType: "carbon",
      category: "FULL STACK · PREDICTIVE ANALYTICS · SUSTAINABILITY",
      title: "CarbonTrack",
      subtitle: "Carbon Emission Tracking Platform",
      description: "A comprehensive dashboard for organizations to track, visualize, and reduce their carbon footprint in real-time with predictive modeling for future emissions.",
      impact: ["3 Pilot Organizations", "Real-time Tracking", "Compliance Scoring"],
      tech: ["Node.js", "React", "MongoDB", "Python ML", "REST APIs", "Chart.js"]
    },
    {
      number: "06",
      visualType: "solar",
      category: "EMBEDDED SYSTEMS · HARDWARE · ARDUINO",
      title: "SolarDrive",
      subtitle: "Arduino-Based Solar Vehicle — PCCOE Team Project",
      description: "Hardware engineering project building a scaled solar-powered vehicle controlled via an Arduino micro-controller. Managed power distribution and motor control algorithms.",
      tech: ["Arduino", "C++", "Embedded Systems", "PCB Design"]
    }
  ];

  return (
    <section id="projects" className="w-full min-h-screen py-32 bg-background relative overflow-hidden">
      <ParticleSphere />
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="font-mono text-primary animate-pulse">// FEATURED_WORK</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-space font-bold text-text-primary"
          >
            Projects That Ship
          </motion.h2>
        </div>

        <div>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
