import { competitions } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";

export function CompetitionsSection() {
  return (
    <section id="competitions" className="pt-40 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Competitions</h2>

        <div className="grid gap-6">
          {competitions.map((comp, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{comp.title}</h3>
                  <span className="text-sm text-muted-foreground">{comp.period}</span>
                </div>
                <p className="text-muted-foreground">{comp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}