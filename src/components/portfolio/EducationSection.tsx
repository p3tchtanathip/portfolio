import { educations } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";

export function EducationSection() {
  return (
    <section id="education" className="pt-40 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Education</h2>

        <div className="grid gap-6">
          {educations.map((edu, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{edu.institution}</h3>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <p className="text-primary font-medium mb-1">{edu.degree} in {edu.field}</p>
                <p className="text-sm text-muted-foreground">GPA: {edu.gpa?.toFixed(2)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}