import React from 'react';

const Marquee = () => {
  const row1 = [
    "Python", "TensorFlow", "YOLOv8", "LangChain", "React", "Node.js",
    "LLMs", "RAG", "OpenCV", "Docker", "MongoDB", "FastAPI", "HuggingFace"
  ];
  const row2 = [
    "Agentic AI", "Next.js", "AWS", "Scikit-learn", "Framer Motion", "PyTorch",
    "Git", "SQL", "C++", "Kotlin", "Arduino", "REST APIs", "GraphQL"
  ];

  return (
    <div className="w-full overflow-hidden flex flex-col gap-6 py-12 border-t border-primary/10 mt-12 bg-background/50">
      
      {/* Row 1 */}
      <div className="w-full relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {[...row1, ...row1, ...row1].map((tech, index) => (
            <span key={index} className="mx-8 text-2xl font-syne font-bold text-text-muted/40 uppercase tracking-widest hover:text-primary hover:text-glow transition-all duration-300">
              {tech} <span className="text-primary/20 ml-8">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 */}
      <div className="w-full relative flex overflow-x-hidden group">
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center group-hover:[animation-play-state:paused]">
          {[...row2, ...row2, ...row2].map((tech, index) => (
            <span key={index} className="mx-8 text-2xl font-syne font-bold text-text-muted/40 uppercase tracking-widest hover:text-secondary hover:text-glow transition-all duration-300">
              {tech} <span className="text-secondary/20 ml-8">·</span>
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Marquee;
