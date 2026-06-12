import { projects } from "@/data/portfolio"
import { ProjectCard } from "./ProjectCard"
import { AnimatedSection } from "./AnimatedSection"

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="pt-[80px] md:pt-[120px] px-6">
      <div className="max-w-[760px] mx-auto">
        <p className="text-[11px] font-sans uppercase tracking-widest text-muted-foreground mb-3">
          Projects
        </p>
        <div className="w-12 h-px bg-border mb-8" />

        <div className="grid gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
