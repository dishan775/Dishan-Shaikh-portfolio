import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BrainCircuit, Layers, Server, Code2, Cloud, Wrench } from 'lucide-react';
import Marquee from './Marquee';

const SkillBar = ({ name, percentage }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="mb-4" ref={ref}>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-sans text-text-primary">{name}</span>
        <span className="text-sm font-mono text-text-muted">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-background rounded-full overflow-hidden border border-text-muted/20">
        <motion.div
          className="h-full bg-primary shadow-[0_0_10px_rgba(0,212,255,0.8)]"
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  );
};

const SkillCard = ({ title, icon: Icon, skills, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, boxShadow: '0 20px 40px -10px rgba(0,212,255,0.15)' }}
      className="glassmorphism p-8 rounded-2xl flex flex-col h-full transform transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-space font-bold text-text-primary">{title}</h3>
      </div>
      
      <div className="flex-1 flex flex-col justify-center">
        {skills.map((skill, idx) => (
          <SkillBar key={idx} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "AI / Machine Learning",
      icon: BrainCircuit,
      skills: [
        { name: "Machine Learning", percentage: 90 },
        { name: "Deep Learning (CNN)", percentage: 85 },
        { name: "Computer Vision (YOLO)", percentage: 80 },
        { name: "Generative AI / LLMs", percentage: 88 },
        { name: "Agentic AI / RAG", percentage: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: [
        { name: "TensorFlow / PyTorch", percentage: 85 },
        { name: "LangChain / LlamaIndex", percentage: 78 },
        { name: "HuggingFace", percentage: 72 },
        { name: "OpenCV", percentage: 80 },
        { name: "Scikit-learn", percentage: 88 }
      ]
    },
    {
      title: "Full Stack Development",
      icon: Server,
      skills: [
        { name: "React / Next.js", percentage: 85 },
        { name: "Node.js / Express", percentage: 82 },
        { name: "MongoDB / PostgreSQL", percentage: 76 },
        { name: "REST APIs / GraphQL", percentage: 88 },
        { name: "Docker / CI-CD", percentage: 65 }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", percentage: 92 },
        { name: "JavaScript/TypeScript", percentage: 84 },
        { name: "C++", percentage: 72 },
        { name: "Kotlin", percentage: 60 },
        { name: "SQL", percentage: 78 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS (EC2, S3)", percentage: 70 },
        { name: "Google Cloud Platform", percentage: 65 },
        { name: "Git / GitHub", percentage: 90 },
        { name: "Vercel / Railway", percentage: 82 },
        { name: "Docker", percentage: 65 }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "Jupyter / Colab", percentage: 92 },
        { name: "VS Code", percentage: 95 },
        { name: "Figma", percentage: 65 },
        { name: "Postman", percentage: 80 },
        { name: "Arduino IDE", percentage: 72 }
      ]
    }
  ];

  return (
    <section id="skills" className="w-full min-h-screen py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="font-mono text-primary animate-pulse">// TECHNICAL_ARSENAL</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-space font-bold text-text-primary"
          >
            What I Build With
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <SkillCard 
              key={idx} 
              title={category.title} 
              icon={category.icon} 
              skills={category.skills} 
              delay={idx * 0.1}
            />
          ))}
        </div>

      </div>

      <Marquee />
    </section>
  );
};

export default Skills;
