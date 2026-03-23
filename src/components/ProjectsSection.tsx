const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack online store with payment integration, user auth, and real-time inventory management.",
    tech: ["React", "Node.js", "PostgreSQL"],
    color: "#468CCF",
  },
  {
    title: "AI Chat Assistant",
    description: "Conversational AI tool built with natural language processing for automated customer support.",
    tech: ["Python", "FastAPI", "OpenAI"],
    color: "#E57D25",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with drag-and-drop boards and real-time updates.",
    tech: ["TypeScript", "React", "Firebase"],
    color: "#63B548",
  },
  {
    title: "Portfolio Generator",
    description: "CLI tool that generates developer portfolios from GitHub data and custom templates.",
    tech: ["Go", "CLI", "GitHub API"],
    color: "#9C4595",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-medium mb-4 tracking-tight">
          <span className="italic">Projects</span>
        </h2>
        <p className="font-serif text-xl text-muted-foreground mb-16 max-w-[600px]">
          A curated selection of things I've built — from weekend experiments to semester-long endeavors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              {/* CRT-style header bar */}
              <div
                className="w-full h-2 rounded-full mb-6"
                style={{ background: project.color }}
              />
              <h3 className="font-serif text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="font-serif text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {/* Hover arrow */}
              <span className="absolute top-8 right-8 font-mono text-2xl text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
