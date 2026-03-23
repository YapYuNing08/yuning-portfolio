const projects = [
  {
    title: "Peer Support System",
    description: "A safe, interactive platform for university students to seek emotional support, track their mental well-being, and connect anonymously through interest-based forums.",
    tech: ["React", "Firebase"],
    color: "#468CCF",
  },
  {
    title: "Multilingual AI for Public Services",
    description: "An AI-driven solution designed to break down language barriers and make essential public services easily accessible to diverse, multilingual communities.",
    tech: ["React Native", "Expo", "Python", "FastAPI", "Llama", "Groq", "ChromaDB"],
    color: "#E57D25",
  },
  {
    title: "Food Ordering System",
    description: "A full-stack web application that provides a seamless user experience for browsing menus, placing orders, and managing food deliveries.",
    tech: ["HTML", "CSS", "JavaScript", "Django", "Python", "SQLite"],
    color: "#63B548",
  },
  {
    title: "Parking Lot Management System",
    description: "A GUI system that streamlines vehicle tracking, automates billing, dynamic fine management, and generates comprehensive administrative reports for parking facilities.",
    tech: ["Java", "Java Swing", "SQLite"],
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
          Some of the cool stuff I've been working on lately. Feel free to click around and see what I've been coding
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
