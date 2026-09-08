"use client"

import * as React from "react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow"
import { ArrowDown } from "lucide-react"
import { assetPath } from "@/lib/utils"

export interface SlideItem {
  id: string
  title: string
  imageUrl: string
}

// Architectural sequence with single clean image directory
export const DEFAULT_SLIDES: SlideItem[] = [
  {
    id: "slide-1",
    title: "Living Room",
    imageUrl: "/assets/images/living_room.webp",
  },
  {
    id: "slide-2",
    title: "Dining Room",
    imageUrl: "/assets/images/dining_room.webp",
  },
  {
    id: "slide-3",
    title: "Working Room",
    imageUrl: "/assets/images/working_room.webp",
  },
  {
    id: "slide-4",
    title: "Studio Room",
    imageUrl: "/assets/images/studio_room.webp",
  },
  {
    id: "slide-5",
    title: "Reading Room",
    imageUrl: "/assets/images/reading_room.webp",
  },
  {
    id: "slide-6",
    title: "Bed Room",
    imageUrl: "/assets/images/bed_room.webp",
  },
]

interface HoverSliderDemoProps {
  slides?: SlideItem[]
  className?: string
  id?: string
}

export function HoverSliderDemo({
  slides = DEFAULT_SLIDES,
  className = "",
  id = "spaces-explorer",
}: HoverSliderDemoProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = React.useState<number>(0)

  // Sticky Scroll Locking: Maps container scroll progress across the 6 rooms
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // latest progresses from 0.0 to 1.0 through the 400vh container
    const step = 1 / slides.length
    const computedIndex = Math.min(
      slides.length - 1,
      Math.max(0, Math.floor(latest / step))
    )
    setActiveSlide(computedIndex)
  })

  return (
    // Outer scroll track: 400vh gives ample, calm scroll resistance before releasing
    <section
      id={id}
      ref={containerRef}
      className={`relative w-full h-[400vh] bg-black text-white ${className}`}
    >
      {/* Sticky Viewport pinned at top while scrolling through rooms */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <HoverSlider
          totalSlides={slides.length}
          activeSlide={activeSlide}
          onSlideChange={setActiveSlide}
          className="relative w-full h-full flex flex-col justify-between pt-24 sm:pt-28 md:pt-24 px-6 sm:px-10 md:px-14 lg:px-18 pb-6 sm:pb-10 overflow-hidden"
        >
          {/* Full-Section Background Images - Bright & Vibrant */}
          <div className="absolute inset-0 size-full z-0 overflow-hidden">
            <HoverSliderImageWrap className="size-full">
              {slides.map((slide, index) => (
                <HoverSliderImage
                  key={slide.id}
                  index={index}
                  imageUrl={assetPath(slide.imageUrl)}
                  src={assetPath(slide.imageUrl)}
                  alt={slide.title}
                  className="size-full object-cover brightness-100 contrast-105"
                  loading="eager"
                  decoding="async"
                />
              ))}
            </HoverSliderImageWrap>

            {/* Clean minimal shadow gradient for typography readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />
          </div>

          {/* Top Header Strip with / 02 Category and Step Indicator — Positioned cleanly below sticky navbar */}
          <div className="w-full flex flex-row items-center justify-between gap-3 pt-1 sm:pt-3 pb-4 border-b border-white/20 z-10 relative">
            <div className="flex items-center gap-2 sm:gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/90">
              <span className="text-amber-400 font-bold">/ 02</span>
              <span className="truncate">Spatial Architecture</span>
            </div>

            {/* Scroll Lock Step Indicator with Skip Button */}
            <div className="flex items-center gap-2 sm:gap-3 font-mono text-[11px] sm:text-xs text-neutral-400 shrink-0">
              <span className="text-amber-300 font-semibold tracking-wider">
                0{activeSlide + 1}
              </span>
              <span className="text-white/30">/</span>
              <span className="text-white/60">0{slides.length}</span>
              <div className="w-12 sm:w-16 h-1 bg-white/20 rounded-full overflow-hidden ml-1 hidden sm:block">
                <motion.div
                  className="h-full bg-amber-400"
                  animate={{ width: `${((activeSlide + 1) / slides.length) * 100}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>

              {/* Skip Button: Smooth scrolls down to / 03 Academic Research */}
              <button
                onClick={() => {
                  const el = document.getElementById("prompt-study")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-neutral-200 hover:text-white transition-all cursor-pointer active:scale-95 ml-1 sm:ml-2"
                title="Skip to Academic Prompt Study"
              >
                <span>Skip</span>
                <ArrowDown className="size-3" />
              </button>
            </div>
          </div>

          {/* Center Titles: Single-Line, Clean (Responsive typography that fits all mobile screens) */}
          <div className="my-auto py-3 sm:py-6 md:py-10 z-10 relative max-w-4xl">
            <div className="flex flex-col space-y-1.5 sm:space-y-3 md:space-y-5">
              {slides.map((slide, index) => (
                <div key={slide.id} className="group cursor-pointer">
                  <TextStaggerHover
                    index={index}
                    text={slide.title}
                    className="text-lg sm:text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight font-sans whitespace-nowrap"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Minimal Border without text clutter */}
          <div className="w-full border-t border-white/20 z-10 relative py-2 sm:py-3" />
        </HoverSlider>
      </div>
    </section>
  )
}
