import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { id: "profile", label: "Profile" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "activities", label: "Activities" },
  { id: "skills", label: "Skills" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("profile")
  const [mobileOpen, setMobileOpen] = useState(false)

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    setMobileOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background">
      <div className="max-w-[760px] mx-auto px-6">
        <div className="flex items-center justify-between h-12">
          <button
            onClick={() => scrollToSection("profile")}
            className="text-[13px] uppercase tracking-wide text-foreground font-medium"
          >
            Tanathip Pona
          </button>

          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-[13px] uppercase tracking-wide transition-colors ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex items-center justify-center w-8 h-8 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="max-w-[760px] mx-auto px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-[13px] uppercase tracking-wide py-2 transition-colors ${
                  activeSection === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
