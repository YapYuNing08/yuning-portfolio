import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <footer className="py-8 px-8 text-center font-mono text-sm text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Your Name. Built with vintage vibes & modern code.</p>
      </footer>
    </div>
  );
};

export default Index;
