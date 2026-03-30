const competitions = [
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
  return (
    <section id="competitions" className="py-24 px-8 bg-secondary/20">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-medium mb-4 tracking-tight">
          <span className="italic">Competitions</span> 
        </h2>
        <p className="font-serif text-xl text-muted-foreground mb-16 max-w-[600px]">
          Continuously challenging myself beyond the standard curriculum through intense coding sprints and collaborative problem-solving.
        </p>

        <div className="flex flex-col border-t border-border">
          {competitions.map((comp, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-border hover:bg-card/50 transition-colors duration-300 px-4 -mx-4 rounded-lg cursor-default"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-12">
                {/* Year */}
                <span className="font-mono text-sm text-muted-foreground w-12">
                  {comp.year}
                </span>
                
                {/* Competition Name */}
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