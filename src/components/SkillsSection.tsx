import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillCategories = [
  {
    title: "Languages",
    items: ["Python", "Java", "TypeScript", "C", "C++", "C#"],
  },
  {
    title: "Web/App Development",
    items: ["HTML", "CSS", "JavaScript", "React", "React Native", "Django"],
  },
  {
    title: "Database",
    items: ["Firebase", "SQLite", "PostgreSQL", "MySQL"],
  },
  {
    title: "Dev Tools",
    items: ["Git", "GitHub", "Google AI Studio", "Figma", "ChatGPT", "Claude"],
  },
];

const SkillsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Use gsap.context for React cleanup safety
    let ctx = gsap.context(() => {
      
      // 1. Animate Header Text
      gsap.fromTo(
        ".skill-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // Triggers when the top of the section hits 80% down the viewport
          },
        }
      );

      // 2. Cascade the Skill Columns
      gsap.fromTo(
        ".skill-category",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15, // Delay between each column appearing
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 85%",
          },
        }
      );

      // 3. Terminal Boot Sequence
      const terminalTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".terminal-block",
          start: "top 85%",
        },
      });

      // Pop the terminal box in
      terminalTimeline.fromTo(
        ".terminal-block",
        { y: 30, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
      )
      // Stagger the lines of code inside the terminal
      .fromTo(
        ".terminal-line",
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.2, stagger: 0.1, ease: "none" }
      );

    }, sectionRef);

    // Cleanup animations when component unmounts
    return () => ctx.revert();
  }, []);

  return (
    // Added ref and overflow-hidden to prevent scrollbar jumps during animation
    <section id="skills" ref={sectionRef} className="py-24 px-8 bg-card overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Added "skill-header" class for targeting */}
        <h2 className="skill-header font-serif text-5xl md:text-6xl font-medium mb-4 tracking-tight">
          <span className="italic">Skills</span>
        </h2>
        <p className="skill-header font-serif text-xl text-muted-foreground mb-16 max-w-[600px]">
          The tools and technologies in my toolkit.
          <br />
          Always expanding, always sharpening.
        </p>

        {/* Added "skills-grid" class for the trigger point */}
        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, i) => (
            // Added "skill-category" class to stagger these containers
            <div key={i} className="skill-category">
              <h3 className="uppercase tracking-widest text-xs font-semibold mb-4 text-muted-foreground">
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="font-mono text-lg bg-background border border-border rounded px-4 py-2 hover:border-foreground/30 transition-colors hover:-translate-y-1 hover:shadow-sm duration-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Added "terminal-block" and "terminal-line" classes */}
        <div className="terminal-block mt-16 bg-retro-screen rounded-lg p-8 font-mono text-sm crt-scanlines relative overflow-hidden shadow-lg">
          <div className="relative z-10 space-y-3" style={{ color: "#fff", textShadow: "0 0 2px rgba(255,255,255,0.3)" }}>
            <p className="terminal-line">$ skill --list --verbose</p>
            <p className="terminal-line text-gray-400">Loading skill matrix...</p>
            <p className="terminal-line">
              <span style={{ color: "#33ff00" }}>FRONTEND</span>  {"█".repeat(14)}{"░".repeat(2)} 88%
            </p>
            <p className="terminal-line">
              <span style={{ color: "#33ff00" }}>BACKEND</span>   {"█".repeat(12)}{"░".repeat(4)} 75%
            </p>
            <p className="terminal-line">
              <span style={{ color: "#33ff00" }}>DEVOPS</span>    {"█".repeat(10)}{"░".repeat(6)} 62%
            </p>
            <p className="terminal-line">
              <span style={{ color: "#33ff00" }}>DESIGN</span>    {"█".repeat(9)}{"░".repeat(7)} 56%
            </p>
            <p className="terminal-line text-gray-400 mt-2">Ready.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;