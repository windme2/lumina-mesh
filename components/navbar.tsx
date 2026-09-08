"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export interface NavItem {
  label: string
  targetId: string
  tabKey?: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Concept", targetId: "concept" },
  { label: "Spaces", targetId: "spaces-explorer" },
  { label: "Ai Image", targetId: "prompt-study", tabKey: "ai-image" },
  { label: "Desmos", targetId: "prompt-study", tabKey: "desmos" },
  { label: "Mermaid", targetId: "prompt-study", tabKey: "mermaid" },
  { label: "LaTeX", targetId: "prompt-study", tabKey: "latex" },
  { label: "NotebookLM", targetId: "prompt-study", tabKey: "notebooklm" },
  { label: "Presentation", targetId: "presentation" },
]

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [activeItem, setActiveItem] = React.useState<string>("Concept")
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false)

  // Prevent background scrolling when full-screen mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (item: NavItem) => {
    setActiveItem(item.label)
    setMobileMenuOpen(false)

    // Trigger tab selection in prompt study if applicable
    if (item.tabKey) {
      const tabButton = document.querySelector(`[data-study-tab="${item.tabKey}"]`) as HTMLElement | null
      if (tabButton) tabButton.click()
    }

    const targetEl = document.getElementById(item.targetId)
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full bg-black/90 backdrop-blur-md border-b border-white/10 transition-colors select-none",
          className
        )}
      >
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Brand Logo: Smooth scroll to top on click */}
          <button
            onClick={scrollToTop}
            className="z-10 group flex flex-col text-left cursor-pointer transition-all active:scale-95 shrink-0"
            title="Scroll to Top"
          >
            <span className="font-sans font-light tracking-[0.28em] text-lg sm:text-xl text-white uppercase transition-colors group-hover:text-neutral-300">
              LUMINA
            </span>
            <span className="text-[8px] sm:text-[9px] tracking-[0.25em] text-neutral-400 uppercase font-sans font-normal mt-0.5 group-hover:text-neutral-300 transition-colors">
              Architectural Wi-Fi Mesh Lamp
            </span>
          </button>

          {/* Desktop Navigation Items: Aligned to the right to avoid collision with logo */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7 ml-auto">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem === item.label
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "text-[11px] lg:text-xs uppercase tracking-[0.16em] py-1 cursor-pointer transition-colors duration-200 whitespace-nowrap",
                    isActive
                      ? "text-white font-semibold"
                      : "text-neutral-400 hover:text-white font-normal"
                  )}
                >
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* Mobile Hamburger Trigger (only visible on mobile) */}
          <div className="md:hidden flex items-center z-10">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-neutral-900/80 border border-white/10 text-neutral-300 hover:text-white transition-all active:scale-95 cursor-pointer"
              aria-label="Open Menu"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay — Centered Luxury Design */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 animate-in fade-in zoom-in-95 duration-200">
          {/* Top Bar inside Fullscreen Overlay */}
          <div className="flex items-center justify-between w-full h-16 border-b border-white/10 pb-4">
            <button
              onClick={scrollToTop}
              className="flex flex-col text-left cursor-pointer"
            >
              <span className="font-sans font-light tracking-[0.28em] text-lg text-white uppercase">
                LUMINA
              </span>
              <span className="text-[8px] tracking-[0.25em] text-neutral-400 uppercase font-sans font-normal mt-0.5">
                Architectural Wi-Fi Mesh Lamp
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-full bg-neutral-900 border border-white/20 text-neutral-300 hover:text-white transition-all active:scale-90 cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Centered Navigation Menu Links */}
          <nav className="my-auto flex flex-col items-center justify-center space-y-3 sm:space-y-4 text-center py-6">
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-amber-400 mb-3">
              / Navigation
            </span>

            {NAV_ITEMS.map((item) => {
              const isActive = activeItem === item.label
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "group flex items-center justify-center gap-3 transition-all duration-300 py-1.5 cursor-pointer",
                    isActive
                      ? "text-white font-semibold scale-105"
                      : "text-neutral-400 hover:text-white"
                  )}
                >
                  <span className="font-sans text-xl sm:text-2xl tracking-[0.22em] uppercase transition-all duration-300 group-hover:tracking-[0.28em]">
                    {item.label}
                  </span>
                </button>
              )
            })}
          </nav>

          {/* Bottom Info Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-4 text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 gap-2 text-center sm:text-left">
            <span>Prepared by Mr. Intouch Charoenphon</span>
            <span className="text-neutral-400">CE & AI – Lumina Mesh</span>
          </div>
        </div>
      )}
    </>
  )
}
