import { useState, useEffect } from "react"
import { personalInfo } from "@/data/portfolio"
import { ArrowUpRight } from "lucide-react"
import { RoleTypewriter } from "./RoleTypewriter"

export function ProfileSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % personalInfo.profiles.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="profile" className="pt-[100px] md:pt-[140px] pb-[80px] md:pb-[120px] px-6">
      <div className="max-w-[760px] mx-auto">

        {/* Responsive layout: stack on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">

          {/* Left — profile image */}
          <div className="relative w-[140px] h-[180px] md:w-[180px] md:h-[220px] shrink-0 border border-border overflow-hidden">
            {personalInfo.profiles.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Profile"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Right — all text content */}
          <div className="flex flex-col justify-start pt-1 min-w-0">

            {/* Role label */}
            <p className="text-[11px] font-sans uppercase tracking-widest text-muted-foreground mb-4">
              <RoleTypewriter />
            </p>

            {/* Name */}
            <h1
              className="font-serif leading-[0.88] text-foreground ml-[-2px] animate-in fade-in slide-in-from-left-4 duration-700 fill-mode-both"
              style={{ fontSize: "clamp(40px, 7vw, 72px)" }}
            >
              Tanathip Pona
            </h1>

            <br />

            {/* Bio */}
            <p className="font-sans text-[14px] leading-relaxed text-muted-foreground animate-in fade-in duration-700 delay-300 fill-mode-both">
              {personalInfo.bio}
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-2 mt-6 animate-in fade-in duration-700 delay-[450ms] fill-mode-both">
              {[
                { label: "GitHub", href: personalInfo.github },
                { label: "LinkedIn", href: personalInfo.linkedin },
                { label: "Resume", href: personalInfo.resume },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-1.5 h-7 px-3 border border-foreground text-[12px] text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  {label} <ArrowUpRight className="w-3 h-3" />
                </a>
              ))}
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-x-5 gap-y-1 mt-4 text-[11px] font-sans uppercase tracking-widest text-muted-foreground animate-in fade-in duration-700 delay-500 fill-mode-both">
              <span>{personalInfo.location}</span>
              <span>{personalInfo.email}</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}