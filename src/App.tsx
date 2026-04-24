import "./App.css";
import { Navigation } from "./components/portfolio/Navigation";
import { ProfileSection } from "./components/portfolio/ProfileSection";
import { ExperienceSection } from "./components/portfolio/ExperienceSection";
import { EducationSection } from "./components/portfolio/EducationSection";
import { ProjectsSection } from "./components/portfolio/ProjectsSection";
import { CompetitionsSection } from "./components/portfolio/CompetitionsSection";
import { SkillsSection } from "./components/portfolio/SkillsSection";

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ProfileSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <CompetitionsSection />
        <SkillsSection />
      </main>
    </div>
  );
}

export default App;