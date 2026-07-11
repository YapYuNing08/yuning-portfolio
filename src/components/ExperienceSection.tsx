import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const education = [
  {
    period: "Aug 2024 – Present",
    title: "Bachelor of Computer Science (Honours) (Software Engineering)",
    place: "Multimedia University, Cyberjaya",
  },
];

const experience = [
  {
    period: "Jul 2026 – Present",
    title: "Product Manager Intern",
    place: "Ant International",
  },
];

const ExperienceGroup = ({
  label,
  entries,
}: {
  label: string;
  entries: { period: string; title: string; place: string }[];
}) => (
  <div className="mb-12 last:mb-0">
    <h3 className="uppercase tracking-widest text-xs font-semibold mb-4 text-muted-foreground">
      {label}
    </h3>
    <div className="exp-list flex flex-col border-t border-border">
      {entries.map((entry, index) => (
        <div
          key={index}
          className="exp-row group flex flex-col md:flex-row md:items-start justify-between gap-4 py-8 border-b border-border hover:bg-card/50 transition-colors duration-300 px-4 -mx-4 rounded-lg cursor-default"
        >
          <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
            {/* Period */}
            <span className="font-mono text-sm text-muted-foreground shrink-0 md:w-40">
              {entry.period}
            </span>

            {/* Title */}
            <h4 className="font-serif text-2xl md:text-3xl font-medium text-foreground group-hover:translate-x-2 transition-transform duration-300">
              {entry.title}
            </h4>
          </div>

          {/* Place */}
          <div className="mt-2 md:mt-0 flex items-center gap-4 shrink-0">
            <span className="font-mono text-sm uppercase tracking-widest text-muted-foreground bg-secondary px-3 py-1 rounded-full">
              {entry.place}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      // 1. Animate Header Text
      gsap.fromTo(
        ".exp-header",
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

      // 2. Cascade the Experience Rows
      gsap.fromTo(
        ".exp-row",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    // Cleanup animations on unmount
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-8 bg-secondary/20 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="exp-header font-serif text-5xl md:text-6xl font-medium mb-4 tracking-tight">
          <span className="italic">Education & Experience </span>
        </h2>
        <p className="exp-header font-serif text-xl text-muted-foreground mb-16 max-w-[600px]">
          Building my foundation in software engineering while gaining hands-on
          experience shaping products in the real world.
        </p>

        <ExperienceGroup label="Education" entries={education} />
        <ExperienceGroup label="Experience" entries={experience} />
      </div>
    </section>
  );
};

export default ExperienceSection;
