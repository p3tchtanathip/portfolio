import { useState } from "react";
import {
  Home,
  Briefcase,
  FolderCode,
  Trophy,
  Code,
} from "lucide-react";

const navItems = [
  { id: "profile", label: "Profile", icon: Home },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderCode },
  { id: "competitions", label: "Competitions", icon: Trophy },
  { id: "skills", label: "Skills", icon: Code },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("profile");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="font-semibold text-lg">{"p3tchtanathip"}</span>

          <div className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm transition-colors ${activeSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-2 rounded-md transition-colors ${activeSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
                  }`}
              >
                <item.icon className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}