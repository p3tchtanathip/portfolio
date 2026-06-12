import { skills } from "@/data/portfolio"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "./AnimatedSection"

export function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="pt-[80px] md:pt-[120px] pb-[80px] md:pb-[120px] px-6">
      <div className="max-w-[760px] mx-auto">
        <p className="text-[11px] font-sans uppercase tracking-widest text-muted-foreground mb-3">
          Skills
        </p>
        <div className="w-12 h-px bg-border mb-8" />

        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((category, index) => (
            <Card key={index}>
              <CardContent className="p-5">
                <h3 className="font-heading text-base text-foreground mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIndex) => (
                    <Badge key={itemIndex}>{item}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
