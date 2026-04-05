import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Peer Support System",
    description: "A safe, interactive platform for university students to seek emotional support, track their mental well-being, and connect anonymously through interest-based forums.",
    tech: ["React", "Firebase"],
    color: "#5b93c7",
    links: { github: "https://github.com/YapYuNing08/PeerSupportSystem", demo: "https://peersupportsystem.web.app/", media: "https://www.youtube.com/watch?v=Nzou_sNH5Oc" }
  },
  {
    title: "Multilingual AI for Public Services in Malaysia",
    description: "An AI-driven solution designed to break down language barriers and make essential public services easily accessible to diverse, multilingual communities.",
    tech: ["React Native", "Expo", "Python", "FastAPI", "Llama", "Groq"],
    color: "#cc874f",
    links: { github: "https://github.com/YapYuNing08/vhack_multilingual_ai", demo: "#", media: "https://youtu.be/UN4LSzk9MWU" }
  },
  {
    title: "Food Ordering System",
    description: "A full-stack web application that provides a seamless user experience for browsing menus, placing orders, and managing food deliveries.",
    tech: ["HTML", "CSS", "JavaScript", "Django", "Python", "SQLite"],
    color: "#8ea77a",
    links: { github: "https://github.com/YapYuNing08/CuppaClick", demo: "#", media: "#" }
  },
  {
    title: "Parking Lot Management System",
    description: "A GUI system that streamlines vehicle tracking, automates billing, dynamic fine management, and generates comprehensive administrative reports for parking facilities.",
    tech: ["Java", "Java Swing", "SQLite"],
    color: "#736085",
    links: { github: "https://github.com/Y3ee/parking-lot-management-system", demo: "#", media: "#" }
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Register the plugin
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // 1. Animate Header Text
      gsap.fromTo(
        ".project-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // 2. Cascade the Project Folders
      gsap.fromTo(
        ".project-folder",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
          },
        }
      );

      // 3. Fade in the "View More on GitHub" button slightly after the folders drop
      gsap.fromTo(
        ".github-link-anim",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.4, // Wait for the folders to start cascading first
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    // Cleanup on unmount
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        <h2 className="project-header font-serif text-5xl md:text-6xl font-medium mb-4 tracking-tight">
          <span className="italic">Projects</span>
        </h2>
        <p className="project-header font-serif text-xl text-muted-foreground mb-16 max-w-[600px]">
          Some of the cool stuff I've been working on lately. Feel free to click around and see what I've been coding.
        </p>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, i) => (
            
            <div key={i} className="project-folder group relative w-full flex flex-col pt-16">
              
              {/* BACK FLAP OF THE FOLDER */}
              <div 
                className="absolute inset-0 top-16 rounded-2xl rounded-tl-none shadow-sm z-0"
                style={{ backgroundColor: project.color, filter: "brightness(0.85)" }} 
              />
              {/* FOLDER TAB (Attached to the back flap) */}
              <div 
                className="absolute top-10 left-0 h-6 w-1/3 max-w-[140px] rounded-t-xl z-0"
                style={{ backgroundColor: project.color, filter: "brightness(0.85)" }}
              />

              {/* THE EXPANDING FILES (Hidden behind front flap) */}
              <div className="absolute top-12 left-4 right-4 flex justify-start gap-3 z-10 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-16">
                
                {/* 1. GitHub File */}
                {project.links.github && project.links.github !== "#" && (
                  <a href={project.links.github} target="_blank" rel="noreferrer" className="flex flex-col items-center w-24 bg-[#FDFDFD] h-28 rounded-t-lg border border-border pt-3 shadow-sm hover:bg-white text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    <span className="text-[10px] font-mono uppercase tracking-widest">Code</span>
                  </a>
                )}

                {/* 2. Deployment Link File */}
                {project.links.demo && project.links.demo !== "#" && (
                  <a href={project.links.demo} target="_blank" rel="noreferrer" className="flex flex-col items-center w-24 bg-[#FDFDFD] h-28 rounded-t-lg border border-border pt-3 shadow-sm hover:bg-white text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    <span className="text-[10px] font-mono uppercase tracking-widest">Demo</span>
                  </a>
                )}

                {/* 3. Media/YouTube File */}
                {project.links.media && project.links.media !== "#" && (
                  <a href={project.links.media} target="_blank" rel="noreferrer" className="flex flex-col items-center w-24 bg-[#FDFDFD] h-28 rounded-t-lg border border-border pt-3 shadow-sm hover:bg-white text-muted-foreground hover:text-foreground transition-colors">
                    <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                    <span className="text-[10px] font-mono uppercase tracking-widest">Media</span>
                  </a>
                )}
                
              </div>

              {/* FRONT FLAP OF THE FOLDER (Contains your text) */}
              <div 
                className="relative z-20 flex-grow w-full p-8 rounded-2xl rounded-tl-none shadow-[0_-4px_12px_rgba(0,0,0,0.15)] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.01]"
                style={{ backgroundColor: project.color }}
              >
                <h3 className="font-serif text-2xl font-semibold mb-3 text-white drop-shadow-sm">
                  {project.title}
                </h3>
                
                <p className="font-serif text-white/90 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs font-medium bg-white/20 text-white backdrop-blur-sm border border-white/30 px-3 py-1.5 rounded-md shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* NEW: GitHub "View More" Button added below the grid */}
        <div className="github-link-anim mt-20 text-center">
          <a 
            href="https://github.com/YapYuNing08" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm tracking-widest uppercase border border-border px-8 py-4 rounded-lg hover:bg-foreground hover:text-background transition-all duration-300 group"
          >
            <span>View More on GitHub</span>
            {/* Arrow icon that slides slightly to the right on hover */}
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;