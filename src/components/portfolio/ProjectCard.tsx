import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"
import { useState } from "react"
import type { Project } from "@/models/portfolio"
import { ImageModal } from "./ImageModal"

export function ProjectCard({ project }: { project: Project; index: number }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalKey, setModalKey] = useState(0)

  const openModal = (imgIndex: number) => {
    setCurrentImage(imgIndex)
    setModalKey((prev) => prev + 1)
    setModalOpen(true)
  }
  const images = project.images ?? []
  const hasImages = images.length > 0 && images.some(img => img !== "")

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <Card className="transition-colors duration-300 hover:border-foreground/30">
        <CardContent className="p-5">
          {hasImages && (
            <div className="mb-5 border border-border bg-background group/image relative overflow-hidden">
              <button
                onClick={() => openModal(currentImage)}
                className="relative flex items-center justify-center w-full h-48 md:h-72 cursor-pointer"
              >
                <img
                  src={images[currentImage]}
                  alt={`${project.title} screenshot`}
                  className="max-h-full max-w-full object-contain p-2 transition-transform duration-500 group-hover/image:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover/image:bg-foreground/5 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 border border-foreground/20 w-10 h-10 flex items-center justify-center bg-background/80">
                    <Expand className="w-4 h-4 text-foreground" />
                  </span>
                </div>
              </button>

              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 border border-border w-8 h-8 flex items-center justify-center bg-background hover:bg-foreground hover:text-background transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 border border-border w-8 h-8 flex items-center justify-center bg-background hover:bg-foreground hover:text-background transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4 mb-1">
            <h3 className="font-heading text-lg sm:text-xl text-foreground">{project.title}</h3>
            <span className="text-[11px] font-sans uppercase tracking-widest text-muted-foreground shrink-0">
              {project.period}
            </span>
          </div>

          <p className="font-sans text-sm text-foreground mb-2">{project.role}</p>
          <p className="font-sans text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex}>{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <ImageModal
        key={modalKey}
        images={images}
        initialIndex={currentImage}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  )
}
