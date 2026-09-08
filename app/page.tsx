"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { HoverSliderDemo } from "@/components/blocks/hover-slider-demo"
import { PromptStudySection } from "@/components/sections/prompt-study-section"
import { PresentationSection } from "@/components/sections/presentation-section"
import { PresentationDeck } from "@/components/presentation/presentation-deck"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  const [isPresentationOpen, setIsPresentationOpen] = React.useState<boolean>(false)
  const [initialPresentationId, setInitialPresentationId] = React.useState<string | undefined>(undefined)

  const handleOpenPresentation = (studyId?: string) => {
    setInitialPresentationId(studyId)
    setIsPresentationOpen(true)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-white selection:text-black">
      {/* Top Sticky Luxury Minimalist Navbar */}
      <Navbar />

      <main className="flex-1 flex flex-col">
        {/* Hero Section: Bright Video, Fullscreen, Ultra-Minimal */}
        <HeroSection onOpenPresentation={() => handleOpenPresentation()} />

        {/* / 01 Design & Identity: Concept & Typography System */}
        <AboutSection />

        {/* / 02 Spatial Architecture: Full-Bleed Spaces with Sticky Locked-Scroll */}
        <HoverSliderDemo />

        {/* / 03 Academic Research: Prompt Study (Ai-Image, Desmos, LaTeX, NotebookLM) */}
        <PromptStudySection onOpenPresentation={(studyId) => handleOpenPresentation(studyId)} />

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
