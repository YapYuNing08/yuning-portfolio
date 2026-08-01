import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDownRight } from "lucide-react";
import RetroComputer from "./RetroComputer";
import Typewriter from "./Typewriter";

const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-text-anim",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.2 }
      )
      .fromTo(
        ".hero-stat-anim",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
        "-=0.4"
      )
      .fromTo(
        ".hero-3d-anim",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
        "-=0.6"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={sectionRef} className="min-h-screen flex items-center justify-center px-8 py-16 overflow-hidden bg-primary/5">
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-center gap-8">
        
        {/* Content */}
        <div className="z-10 lg:pl-16 text-center lg:text-left pt-8 lg:pt-0">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-[5rem] leading-[0.85] tracking-tight font-medium mb-8">
            <span className="hero-text-anim block">Hello I'm</span>
            <span className="hero-text-anim block italic -ml-1 text-primary">Yu Ning</span>
          </h1>
          
          <p className="hero-text-anim font-serif text-xl md:text-2xl leading-snug mb-8 max-w-[600px] tracking-tight text-muted-foreground mx-auto lg:mx-0">
            <Typewriter
              prefix="I'm a "
              texts={["tech enthusiast.", "problem solver.", "cat lover."]}
              className="block min-h-[1.5em] text-foreground"
              typedClassName="italic text-primary"
              cursorClassName="font-mono text-retro-orange"
            />
            Passionate about solving complex problems, learning new technologies, and writing code that makes a real impact.
          </p>
          
          <div className="hero-text-anim flex gap-4 items-center justify-center lg:justify-start">
            <div className="relative group flex">
              <img
                src="/cat-look.png"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 -mb-3 w-20 h-20 object-contain opacity-0 translate-y-2 scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100"
              />
              <a
                href="#projects"
                className="group/btn inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-xl font-serif rounded-lg border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                View My Work
                <ArrowDownRight
                  className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:translate-y-1"
                  aria-hidden="true"
                />
              </a>
            </div>
            <span className="font-mono text-lg font-bold text-muted-foreground">v1.0.0</span>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 max-w-[400px] mx-auto lg:mx-0">
            <div className="hero-stat-anim">
              <h4 className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">Focus</h4>
              <p className="font-mono mt-2 text-foreground font-medium">Full-Stack Development</p>
            </div>
            <div className="hero-stat-anim">
              <h4 className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">Status</h4>
              <p className="font-mono mt-2 text-foreground font-medium flex items-center justify-center lg:justify-start gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Open to Work
              </p>
            </div>
            <div className="hero-stat-anim">
              <h4 className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">Study</h4>
              <p className="font-mono mt-2 text-foreground font-medium">Software Engineering</p>
            </div>
            <div className="hero-stat-anim">
              <h4 className="uppercase tracking-widest text-xs font-semibold text-muted-foreground">Role</h4>
              <p className="font-mono mt-2 text-foreground font-medium">Intern & Freelancer</p>
            </div>
          </div>
        </div>

        {/* 3D Computer Section */}
        <div className="hero-3d-anim flex justify-center items-center h-full">
          {/* NEW INNER WRAPPER 
            - scale-[0.85] makes it slightly smaller 
            - hover:-translate-y-4 makes it float up when touched/hovered
            - hover:scale-[0.90] makes it slightly pop outward
          */}
          <div className="scale-[0.65] sm:scale-[0.75] md:scale-[0.85] transition-all duration-500 ease-out hover:-translate-y-4 hover:scale-[0.90] cursor-pointer w-full flex justify-center">
            <RetroComputer />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;