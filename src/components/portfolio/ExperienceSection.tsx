import { experiences } from "@/data/portfolio"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "./AnimatedSection"

export function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="pt-[80px] md:pt-[120px] px-6">
      <div className="max-w-[760px] mx-auto">
        <p className="text-[11px] font-sans uppercase tracking-widest text-muted-foreground mb-3">
          Experience
        </p>
        <div className="w-12 h-px bg-border mb-8" />

        <div className="grid gap-5">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardContent className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4 mb-1">
                  <h3 className="font-heading text-lg sm:text-xl text-foreground">{exp.role}</h3>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-muted-foreground shrink-0">
                    {exp.period}
                  </span>
                </div>
                <p className="font-sans text-sm text-foreground mb-3">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="font-sans text-sm text-muted-foreground pl-4 relative">
                      <span className="absolute left-0 top-[0.6em] w-1 h-px bg-muted-foreground/40" />
                      {desc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
