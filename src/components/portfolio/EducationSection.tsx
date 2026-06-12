import { educations } from "@/data/portfolio"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "./AnimatedSection"

export function EducationSection() {
  return (
    <AnimatedSection id="education" className="pt-[80px] md:pt-[120px] px-6">
      <div className="max-w-[760px] mx-auto">
        <p className="text-[11px] font-sans uppercase tracking-widest text-muted-foreground mb-3">
          Education
        </p>
        <div className="w-12 h-px bg-border mb-8" />

        <div className="grid gap-5">
          {educations.map((edu, index) => (
            <Card key={index}>
              <CardContent className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4 mb-1">
                  <h3 className="font-heading text-lg sm:text-xl text-foreground">{edu.institution}</h3>
                  <span className="text-[11px] font-sans uppercase tracking-widest text-muted-foreground shrink-0">
                    {edu.period}
                  </span>
                </div>
                <p className="font-sans text-sm text-foreground mb-0.5">
                  {edu.degree} in {edu.field}
                </p>
                <p className="font-sans text-[13px] text-muted-foreground">
                  GPA: {edu.gpa?.toFixed(2)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
