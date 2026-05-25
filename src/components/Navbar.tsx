import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Competitions", href: "#competitions" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(l => l.href.replace("#", ""));
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Check if we're at the bottom of the page (for Contact section)
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 100;
      if (isAtBottom) {
        setActiveSection(sections[sections.length - 1]);
        return;
      }

      // Check for other sections
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
        <a href="#home" className="font-serif text-3xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
          <span className="italic">YN</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex gap-1">
          {links.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <a
                key={l.href}
                href={l.href}
                className={`font-mono text-base px-4 py-2 rounded-md transition-all duration-300 relative group ${
                  isActive
                    ? "text-foreground bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                <span
                  className={`absolute bottom-1 left-4 right-4 h-0.5 bg-primary rounded-full transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden font-mono text-xl text-foreground transition-transform duration-300"
          aria-label="Toggle menu"
          style={{ transform: open ? "rotate(90deg)" : "rotate(0)" }}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border/50 px-8 py-4 space-y-2 animate-in fade-in duration-300">
          {links.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block font-mono text-base px-4 py-3 rounded-md transition-all duration-300 ${
                  isActive
                    ? "text-foreground bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
