import { roles } from "@/data/portfolio"
import { useState, useEffect } from "react"

export function RoleTypewriter() {
  const [text, setText] = useState("")
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]

    if (!isDeleting && text === currentRole) {
      const t = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(t)
    }

    if (isDeleting && text === "") {
      const t = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }, 100)
      return () => clearTimeout(t)
    }

    const t = setTimeout(
      () => {
        setText(
          isDeleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        )
      },
      isDeleting ? 25 : 55 + Math.random() * 30
    )

    return () => clearTimeout(t)
  }, [text, roleIndex, isDeleting])

  return (
    <span>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-accent align-middle ml-0.5 animate-pulse" />
    </span>
  )
}
