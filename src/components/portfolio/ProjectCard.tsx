import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/models/portfolio";

export function ProjectCard({ project }: { project: Project; index: number }) {
  const [currentImage, setCurrentImage] = useState(0);
  const images = project.images ?? [];
  const hasImages = images.length > 0 && images.some(img => img !== "");

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card>
      <CardContent className="p-6">
        {hasImages && (
          <div className="mb-6 h-[360px] flex items-center justify-center">
            <div className="relative flex items-center justify-center w-full h-full">

              <img
                src={images[currentImage]}
                alt={`${project.title} screenshot`}
                className="max-h-full max-w-full object-contain rounded-md shadow-2xl"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full cursor-pointer hover:bg-accent"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-background/80 p-2 rounded-full cursor-pointer hover:bg-accent"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        )}
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <span className="text-sm text-muted-foreground">{project.period}</span>
        </div>
        <p className="text-primary font-medium mb-2">{project.role}</p>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}