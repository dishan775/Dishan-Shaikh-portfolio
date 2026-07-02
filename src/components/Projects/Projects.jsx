import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

import './Projects.css';

const projectsData = [
  {
    number: "01",
    category: "FULL STACK · GEN AI",
    title: "Elevate",
    subtitle: "AI-Powered Adaptive Learning Platform",
    description:
      "Full-stack platform delivering personalized education via LLM-driven RAG pipelines. Features AI tutor with memory, auto-quiz generation, and spaced-repetition scheduling.",
    image: "/elevate.png",
    tech: ["React", "Node.js", "MongoDB", "LangChain", "OpenAI API"],
    link: "https://elevateai-psi.vercel.app/",
    accentFrom: "#39FF14",
    accentTo: "#0a2a3f",
  },
  {
    number: "02",
    category: "CV · NLP · AGENTIC AI",
    title: "AI Avatar",
    subtitle: "Government Citizen Services Platform",
    description:
      "Lifelike multilingual AI avatar for government portals — citizens interact in Hindi, Marathi & English via STT → LLM → TTS pipeline with lip-synced avatar rendering.",
    image: "/pratinidhi.png",
    tech: ["Python", "FastAPI", "Whisper", "D-ID", "Multilingual NLP"],
    link: "https://pratinidhiai.vercel.app",
    accentFrom: "#10B981",
    accentTo: "#1a0f2e",
  },
  {
    number: "03",
    category: "ML · CNN · ENV AI",
    title: "AQI Predict",
    subtitle: "Advanced AQI Prediction System",
    description:
      "Machine learning model predicting hyper-local air quality indices with 91% accuracy using convolutional neural networks on time-series environmental data.",
    image: null,
    tech: ["Python", "TensorFlow", "CNN", "Scikit-learn"],
    link: null,
    accentFrom: "#10B981",
    accentTo: "#0a2e1f",
  },
  {
    number: "04",
    category: "CV · YOLOv8 · DL",
    title: "Air Vision",
    subtitle: "Predicting Air Pollution with AI",
    description:
      "Combining YOLOv8 vehicle detection, NDVI vegetation analysis, and ML to predict air quality and understand pollution patterns in urban environments.",
    image: "/air-vision.png",
    tech: ["YOLOv8", "OpenCV", "Python", "Flask"],
    link: "#",
    accentFrom: "#10B981",
    accentTo: "#0a2e1f",
  },
  {
    number: "05",
    category: "FULL STACK · ANALYTICS",
    title: "CarbonTrack",
    subtitle: "Carbon Emission Tracking Platform",
    description:
      "A comprehensive dashboard for organizations to track, visualize, and reduce their carbon footprint in real-time with predictive modeling for future emissions.",
    image: null,
    tech: ["Node.js", "React", "MongoDB", "Chart.js"],
    link: null,
    accentFrom: "#F59E0B",
    accentTo: "#2e1f0a",
  },
  {
    number: "06",
    category: "EMBEDDED · HARDWARE",
    title: "SolarDrive",
    subtitle: "Arduino-Based Solar Vehicle",
    description:
      "Hardware engineering project building a scaled solar-powered vehicle controlled via an Arduino micro-controller. Managed power distribution and motor control algorithms.",
    image: null,
    tech: ["Arduino", "C++", "Embedded Systems", "PCB Design"],
    link: null,
    accentFrom: "#39FF14",
    accentTo: "#0a2a3f",
  },
];

/* ─── Single Project Card (Scale AI style) ─── */
const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="project-scale-card group"
      style={{
        "--accent-from": project.accentFrom,
        "--accent-to": project.accentTo,
      }}
    >
      {/* Go‑corner arrow */}
      <div className="project-card-corner">
        <span className="project-card-arrow">→</span>
      </div>

      {/* Number watermark */}
      <span className="project-card-number">{project.number}</span>

      {/* Category badge */}
      <div className="project-card-badge">
        <span
          className="project-card-badge-dot"
          style={{ background: project.accentFrom }}
        />
        {project.category}
      </div>

      {/* Image thumbnail */}
      {project.image && (
        <div className="project-card-img-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="project-card-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = "none";
            }}
          />
        </div>
      )}

      {/* Title */}
      <h3 className="project-card-title">{project.title}</h3>

      {/* Subtitle */}
      {project.subtitle && (
        <p className="project-card-subtitle">{project.subtitle}</p>
      )}

      {/* Description */}
      <p className="project-card-desc">{project.description}</p>

      {/* Tech pills */}
      <div className="project-card-tech">
        {project.tech.slice(0, 4).map((t, i) => (
          <span key={i} className="project-card-tech-pill">
            {t}
          </span>
        ))}
      </div>

      {/* CTA */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-cta"
        >
          <ExternalLink size={14} />
          See Website
        </a>
      )}
    </motion.div>
  );
};

/* ─── Projects Section ─── */
const Projects = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    setScrollProgress(
      scrollWidth - clientWidth > 0
        ? scrollLeft / (scrollWidth - clientWidth)
        : 0
    );
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section
      id="projects"
      className="w-full min-h-screen py-32 bg-background relative overflow-hidden"
    >


      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="font-mono text-primary animate-pulse">
              // FEATURED_WORK
            </span>
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

        {/* Horizontal scrollable cards */}
        <div
          ref={scrollRef}
          className="project-scroll-container"
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Scroll bar + arrows */}
        <div className="flex items-center gap-4 mt-10 px-2">
          {/* Left arrow */}
          <button
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full border shrink-0 transition-all duration-300 ${
              canScrollLeft
                ? "border-primary/40 text-primary hover:bg-primary/10 hover:shadow-[0_0_12px_rgba(57,255,20,0.25)]"
                : "border-text-muted/20 text-text-muted/30 cursor-not-allowed"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Interactive scrollbar track */}
          <div
            className="project-scrollbar-track flex-1"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickRatio = (e.clientX - rect.left) / rect.width;
              const el = scrollRef.current;
              if (el) {
                el.scrollTo({
                  left: clickRatio * (el.scrollWidth - el.clientWidth),
                  behavior: "smooth",
                });
              }
            }}
          >
            <div
              className="project-scrollbar-thumb"
              style={{ left: `${scrollProgress * 100}%` }}
            />
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            className={`p-2 rounded-full border shrink-0 transition-all duration-300 ${
              canScrollRight
                ? "border-primary/40 text-primary hover:bg-primary/10 hover:shadow-[0_0_12px_rgba(57,255,20,0.25)]"
                : "border-text-muted/20 text-text-muted/30 cursor-not-allowed"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
