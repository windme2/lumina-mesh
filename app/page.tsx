"use client"

import * as React from "react"
import { Navbar, NavItem } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { HoverSliderDemo } from "@/components/blocks/hover-slider-demo"
import { PromptStudySection } from "@/components/sections/prompt-study-section"
import { PresentationSection } from "@/components/sections/presentation-section"
import { PresentationDeck } from "@/components/presentation/presentation-deck"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

const STUDY_TAB_TO_LABEL: Record<string, string> = {
  "ai-image": "AI Image",
  "desmos": "Desmos",
  "mermaid": "Mermaid",
  "latex": "LaTeX",
  "notebooklm": "NotebookLM",
}

export default function Home() {
  const [isPresentationOpen, setIsPresentationOpen] = React.useState<boolean>(false)
  const [initialPresentationId, setInitialPresentationId] = React.useState<string | undefined>(undefined)

  // Controlled active study tab (AI Image, Desmos, Mermaid, LaTeX, NotebookLM)
  const [activeStudyTab, setActiveStudyTab] = React.useState<string>("ai-image")
  // Controlled active page section
  const [activeSection, setActiveSection] = React.useState<string>("concept")

  const isNavClickRef = React.useRef<boolean>(false)
  const navClickTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  // Compute illuminated label in the header navbar
  const currentNavLabel = React.useMemo(() => {
    if (activeSection === "concept") return "Concept"
    if (activeSection === "spaces-explorer") return "Spaces"
    if (activeSection === "prompt-study") {
      return STUDY_TAB_TO_LABEL[activeStudyTab] || "AI Image"
    }
    if (activeSection === "presentation") return "Presentation"
    return "Concept"
  }, [activeSection, activeStudyTab])

  // Scroll spy: automatically highlights the navbar item corresponding to current viewport position
  React.useEffect(() => {
    const handleScroll = () => {
      if (isNavClickRef.current) return

      // Reached near bottom of page -> highlight presentation
      const isBottom =
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 60

      if (isBottom) {
        setActiveSection("presentation")
        return
      }

      const sections = [
        { id: "concept", name: "concept" },
        { id: "spaces-explorer", name: "spaces-explorer" },
        { id: "prompt-study", name: "prompt-study" },
        { id: "presentation", name: "presentation" },
      ]

      const triggerOffset = 220
      let current = "concept"

      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= triggerOffset) {
            current = section.name
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (navClickTimeoutRef.current) {
        clearTimeout(navClickTimeoutRef.current)
      }
    }
  }, [])

  // Global Keyboard Shortcuts for presentation and prompt studies
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is inside an input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return
      }

      // Keys 1 to 5: Switch prompt study tabs
      const keyToStudyTab: Record<string, string> = {
        "1": "ai-image",
        "2": "desmos",
        "3": "mermaid",
        "4": "latex",
        "5": "notebooklm",
      }

      if (keyToStudyTab[e.key]) {
        const tabKey = keyToStudyTab[e.key]
        setActiveStudyTab(tabKey)
        setActiveSection("prompt-study")
        const el = document.getElementById("prompt-study")
        if (el) {
          el.scrollIntoView({ behavior: "smooth" })
        }
      }

      // Key 'P' or 'p': Toggle presentation modal
      if (e.key === "p" || e.key === "P") {
        e.preventDefault()
        setIsPresentationOpen((prev) => !prev)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleNavItemClick = (item: NavItem) => {
    isNavClickRef.current = true
    if (navClickTimeoutRef.current) clearTimeout(navClickTimeoutRef.current)
    navClickTimeoutRef.current = setTimeout(() => {
      isNavClickRef.current = false
    }, 900)

    if (item.tabKey) {
      setActiveStudyTab(item.tabKey)
      setActiveSection("prompt-study")
    } else if (item.targetId === "concept") {
      setActiveSection("concept")
    } else if (item.targetId === "spaces-explorer") {
      setActiveSection("spaces-explorer")
    } else if (item.targetId === "presentation") {
      setActiveSection("presentation")
    }

    const targetEl = document.getElementById(item.targetId)
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleBrandClick = () => {
    isNavClickRef.current = true
    if (navClickTimeoutRef.current) clearTimeout(navClickTimeoutRef.current)
    navClickTimeoutRef.current = setTimeout(() => {
      isNavClickRef.current = false
    }, 900)
    setActiveSection("concept")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleOpenPresentation = (studyId?: string) => {
    setInitialPresentationId(studyId)
    setIsPresentationOpen(true)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-white selection:text-black">
      {/* Top Sticky Luxury Minimalist Navbar */}
      <Navbar
        activeItem={currentNavLabel}
        onNavItemClick={handleNavItemClick}
        onBrandClick={handleBrandClick}
      />

      <main className="flex-1 flex flex-col">
        {/* Hero Section: Bright Video, Fullscreen, Ultra-Minimal */}
        <HeroSection onOpenPresentation={() => handleOpenPresentation()} />

        {/* / 01 Design & Identity: Concept & Typography System */}
        <AboutSection />

        {/* / 02 Spatial Architecture: Full-Bleed Spaces with Sticky Locked-Scroll */}
        <HoverSliderDemo />

        {/* / 03 Academic Research: Prompt Study (AI Image, Desmos, LaTeX, NotebookLM) */}
        <PromptStudySection
          activeTab={activeStudyTab}
          onTabChange={setActiveStudyTab}
          onOpenPresentation={(studyId) => handleOpenPresentation(studyId)}
        />

        {/* / 04 Official Architectural Presentation Section */}
        <PresentationSection onOpenPresentation={() => handleOpenPresentation()} />
      </main>

      {/* Luxury Minimalist Footer */}
      <Footer />

      {/* Desktop Rotating Back-to-Top Button */}
      <BackToTop />

      {/* Embedded Real PDF Presentation Modal */}
      <PresentationDeck
        isOpen={isPresentationOpen}
        onClose={() => setIsPresentationOpen(false)}
        initialStudyId={initialPresentationId}
      />
    </div>
  )
}
