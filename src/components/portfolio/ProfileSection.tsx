import { useState, useEffect } from "react";
import { personalInfo } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, ArrowUpRight } from "lucide-react";

export function ProfileSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % personalInfo.profiles.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="profile" className="flex items-center justify-center pt-40 px-4">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <div className="relative w-75 h-90 rounded-xl overflow-hidden shadow-lg">
            {personalInfo.profiles.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Profile ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">{personalInfo.name}</h1>
          <p className="text-xl text-muted-foreground">{personalInfo.title}</p>
          <p className="text-lg leading-relaxed">{personalInfo.bio}</p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80" asChild>
              <a href={personalInfo.github}>
                GitHub <ArrowUpRight data-icon="inline-end" />
              </a>
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80" asChild>
              <a href={personalInfo.linkedin}>
                LinkedIn <ArrowUpRight data-icon="inline-end" />
              </a>
            </Badge>
            <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80" asChild>
              <a href={personalInfo.resume}>
                Resume <ArrowUpRight data-icon="inline-end" />
              </a>
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}