import { useState } from "react"
import { Dialog } from "radix-ui"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface ImageModalProps {
  images: string[]
  initialIndex: number
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ImageModal({ images, initialIndex, open, onOpenChange }: ImageModalProps) {
  const [index, setIndex] = useState(initialIndex)

  const currentImage = images[index]
  if (!currentImage) return null

  const goNext = () => setIndex((prev) => (prev + 1) % images.length)
  const goPrev = () => setIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-[#1A1814]/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out duration-300" />
        <Dialog.Content
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 duration-300"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") { e.preventDefault(); goPrev() }
            if (e.key === "ArrowRight") { e.preventDefault(); goNext() }
          }}
        >
          <div className="relative max-h-[90vh] max-w-[90vw] flex items-center justify-center">
            <img
              key={index}
              src={currentImage}
              alt="Project screenshot"
              className="max-h-[85vh] max-w-[90vw] object-contain animate-in fade-in duration-300"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev() }}
                  className="absolute left-[-48px] top-1/2 -translate-y-1/2 z-10 border border-background/30 w-10 h-10 flex items-center justify-center bg-transparent text-background hover:bg-background hover:text-foreground transition-colors max-md:left-2 max-md:bg-background/20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext() }}
                  className="absolute right-[-48px] top-1/2 -translate-y-1/2 z-10 border border-background/30 w-10 h-10 flex items-center justify-center bg-transparent text-background hover:bg-background hover:text-foreground transition-colors max-md:right-2 max-md:bg-background/20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          <Dialog.Close className="absolute top-4 right-4 z-20 border border-background/30 w-10 h-10 flex items-center justify-center bg-transparent text-background hover:bg-background hover:text-foreground transition-colors">
            <X className="w-4 h-4" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
