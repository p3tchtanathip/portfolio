import { experiences } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="pt-40 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-primary/20 h-full hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-4 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                <div className="flex-1 w-full">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{exp.role}</h3>
                      <span className="text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>

                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary shadow-lg z-10 shrink-0" />

                <div className="flex-1 w-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}