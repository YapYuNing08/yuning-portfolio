import RetroComputer from "./RetroComputer";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 py-16">
      <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-center gap-8">
        {/* Content */}
        <div className="z-10 lg:pl-16 text-center lg:text-left">
          <h1 className="font-serif text-6xl md:text-7xl lg:text-[5rem] leading-[0.85] tracking-tight font-medium mb-8">
            <span className="block ">Hello I'm</span>
            <span className="block italic -ml-1">Yu Ning</span>
          </h1>
          <p className="font-serif text-xl md:text-2xl leading-snug mb-8 max-w-[600px] tracking-tight text-muted-foreground mx-auto lg:mx-0">
            Software engineering student. Tech enthusiast. Problem solver. 
            <br />
            Passionate about solving complex problems, learning new technologies, and writing code that makes a real impact.
          </p>
          <div className="flex gap-4 items-center justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 text-xl font-serif rounded-lg border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-200 cursor-pointer"
            >
              View My Work
            </a>
            <span className="font-mono text-lg font-bold text-muted-foreground">v1.0.0</span>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 max-w-[400px] mx-auto lg:mx-0">
            <div>
              <h4 className="uppercase tracking-widest text-xs font-semibold">Focus</h4>
              <p className="font-mono mt-2 text-foreground">Full-Stack Dev</p>
            </div>
            <div>
              <h4 className="uppercase tracking-widest text-xs font-semibold">Status</h4>
              <p className="font-mono mt-2 text-foreground">Open to Work</p>
            </div>
            <div>
              <h4 className="uppercase tracking-widest text-xs font-semibold">Education</h4>
              <p className="font-mono mt-2 text-foreground">Software Engineering Student</p>
            </div>
            <div>
              <h4 className="uppercase tracking-widest text-xs font-semibold">Location</h4>
              <p className="font-mono mt-2 text-foreground">Selangor</p>
            </div>
          </div>
        </div>

        {/* 3D Computer */}
        <div className="flex justify-center items-center h-full">
          <RetroComputer />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
