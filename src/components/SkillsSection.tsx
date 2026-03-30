const skillCategories = [
  {
    title: "Languages",
    items: ["Python", "Java", "TypeScript", "C", "C++", "C#"],
  },
  {
    title: "Web/App Development",
    items: ["HTML", "CSS", "JavaScript", "React",  "React Native", "Django"],
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
  return (
    <section id="skills" className="py-24 px-8 bg-card">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-medium mb-4 tracking-tight">
          <span className="italic">Skills</span>
        </h2>
        <p className="font-serif text-xl text-muted-foreground mb-16 max-w-[600px]">
          The tools and technologies in my toolkit.
          <br />
          Always expanding, always sharpening.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, i) => (
            <div key={i}>
              <h3 className="uppercase tracking-widest text-xs font-semibold mb-4 text-muted-foreground">
                {cat.title}
              </h3>
              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="font-mono text-lg bg-background border border-border rounded px-4 py-2 hover:border-foreground/30 transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Retro terminal-style skill meter */}
        <div className="mt-16 bg-retro-screen rounded-lg p-8 font-mono text-sm crt-scanlines relative overflow-hidden">
          <div className="relative z-10 space-y-3" style={{ color: "#fff", textShadow: "0 0 2px rgba(255,255,255,0.3)" }}>
            <p>$ skill --list --verbose</p>
            <p className="text-gray-400">Loading skill matrix...</p>
            <p>
              <span style={{ color: "#33ff00" }}>FRONTEND</span>  {"█".repeat(14)}{"░".repeat(2)} 88%
            </p>
            <p>
              <span style={{ color: "#33ff00" }}>BACKEND</span>   {"█".repeat(12)}{"░".repeat(4)} 75%
            </p>
            <p>
              <span style={{ color: "#33ff00" }}>DEVOPS</span>    {"█".repeat(10)}{"░".repeat(6)} 62%
            </p>
            <p>
              <span style={{ color: "#33ff00" }}>DESIGN</span>    {"█".repeat(9)}{"░".repeat(7)} 56%
            </p>
            <p className="text-gray-400 mt-2">Ready.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
