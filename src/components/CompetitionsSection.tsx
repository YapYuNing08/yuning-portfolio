import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const competitions = [
  {
    year: "2026",
    name: "AWS CendekiAwan Competition",
    role: "AWS AI Application Competition",
  },
  {
    year: "2026",
    name: "VHack",
    role: "USM Hackathon",
  },
  {
    year: "2026",
    name: "KitaHack",
    role: "GDGoC Malaysia Hackathon",
  },
  {
    year: "2025",
    name: "Huawei ICT Competition",
    role: "National Level",
  },
  {
    year: "2025",
    name: "CodeNection",
    role: "MMU Hackathon",
  },
];

const CompetitionsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // 1. Animate Header Text
      gsap.fromTo(
        ".comp-header",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // Triggers when the section is 80% visible
          },
        }
      );

      // 2. Cascade the Competition Rows
      gsap.fromTo(
        ".comp-row",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15, // The delay that creates the domino effect
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".comp-list",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    // Cleanup animations on unmount
    return () => ctx.revert();
  }, []);

  return (
    // Added ref and overflow-hidden to prevent layout jumps during animation
    <section id="competitions" ref={sectionRef} className="py-24 px-8 bg-secondary/20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Added 'comp-header' class */}
        <h2 className="comp-header font-serif text-5xl md:text-6xl font-medium mb-4 tracking-tight">
          <span className="italic">Competitions</span> 
        </h2>
        <p className="comp-header font-serif text-xl text-muted-foreground mb-16 max-w-[600px]">
          Continuously challenging myself beyond the standard curriculum through intense coding sprints and collaborative problem-solving.
        </p>

        {/* Added 'comp-list' class as the trigger point for the rows */}
        <div className="comp-list flex flex-col border-t border-border">
          {competitions.map((comp, index) => (
            
            // Added 'comp-row' class to animate each individual row
            <div
              key={index}
              className="comp-row group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border hover:bg-card/50 transition-colors duration-300 px-4 -mx-4 rounded-lg cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12">
                {/* Year */}
                <span className="font-mono text-sm text-muted-foreground w-12">
                  {comp.year}
                </span>
                
                {/* Competition Name (Kept your awesome translate-x-2 hover effect!) */}
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground group-hover:translate-x-2 transition-transform duration-300">
                  {comp.name}
                </h3>
              </div>

              {/* Organization / Level */}
              <div className="mt-4 md:mt-0 flex items-center gap-4">
                <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {comp.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitionsSection;