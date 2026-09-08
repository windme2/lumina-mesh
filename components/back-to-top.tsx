"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to Top"
      title="Scroll to Top"
      className="fixed bottom-6 right-6 z-40 hidden md:flex items-center justify-center size-12 rounded-full bg-neutral-950/90 backdrop-blur-md border border-white/20 text-neutral-300 hover:text-amber-400 hover:border-amber-400/50 transition-all duration-300 shadow-2xl group cursor-pointer active:scale-95"
    >
      {/* Subtle Continuous Rotating Outer Text/Ring */}
      <div className="absolute inset-0 size-full pointer-events-none animate-[spin_10s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="size-full fill-current text-white/40 group-hover:text-amber-400/60 transition-colors">
          <path
            id="textPathBackToTop"
            d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
            fill="none"
          />
          <text className="text-[9.5px] font-mono uppercase tracking-[0.24em]">
            <textPath href="#textPathBackToTop" startOffset="0%">
              • BACK TO TOP • LUMINA •
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center Static Up Arrow */}
      <div className="relative z-10 size-6 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-colors">
        <ArrowUp className="size-3.5 text-white group-hover:text-amber-400 transition-colors" />
      </div>
    </button>
  )
}
