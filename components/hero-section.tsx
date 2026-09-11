"use client"

import * as React from "react"
import { motion } from "motion/react"
import { FileText } from "lucide-react"
import { assetPath } from "@/lib/utils"

interface HeroSectionProps {
  onOpenPresentation?: () => void
}

export function HeroSection({ onOpenPresentation }: HeroSectionProps) {
  const scrollToConcept = () => {
    const el = document.getElementById("concept")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToSpaces = () => {
    const el = document.getElementById("spaces-explorer")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleOpenPresentation = () => {
    if (onOpenPresentation) {
      onOpenPresentation()
    }
  }

  return (
    <section className="relative w-full h-screen min-h-[660px] flex flex-col justify-between items-center text-center px-6 md:px-14 overflow-hidden bg-black">
      {/* Background Architectural Video - Bright, Clear, and Expansive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover opacity-85 contrast-110 brightness-105"
        >
          <source src={assetPath("/assets/videos/lumina_showcase.mp4")} type="video/mp4" />
        </video>
        {/* Soft edge gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      {/* Top Spacer */}
      <div className="w-full pt-16 sm:pt-20 z-10" />

      {/* Center Luxury Content with High-End Airy Typography */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center my-auto py-2">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[11px] sm:text-xs font-mono tracking-[0.45em] text-white/80 uppercase font-medium mb-3 sm:mb-4"
        >
          Architectural Wi-Fi Mesh Lamp
        </motion.p>

        {/* Ultra-Luxury Refined Title: Airy, Expensive, Museum-Grade Proportions */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-sans font-extralight tracking-[0.24em] text-white leading-none uppercase pl-4"
        >
          LUMINA
        </motion.h1>

        {/* Minimal Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 sm:mt-5 text-sm sm:text-lg text-white/90 font-sans font-light tracking-[0.08em] max-w-xl"
        >
          Where Light Meets Spatial Intelligence.
        </motion.p>

        {/* Action Buttons: EXPLORE LUMINA & PRESENTATION */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 sm:mt-7 flex flex-wrap items-center justify-center gap-3.5"
        >
          <button
            onClick={scrollToSpaces}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-all shadow-2xl active:scale-95 cursor-pointer font-sans"
          >
            <span>Explore Lumina</span>
          </button>

          <button
            onClick={handleOpenPresentation}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 bg-black/40 hover:bg-white/10 text-white font-medium text-xs tracking-widest uppercase transition-all backdrop-blur-md cursor-pointer font-sans"
          >
            <FileText className="size-3.5" />
            <span>Presentation</span>
          </button>
        </motion.div>

        {/* Scroll Down Button: Positioned directly below the two buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-7 flex flex-col items-center"
        >
          <button
            onClick={scrollToConcept}
            className="group flex flex-col items-center gap-2 cursor-pointer text-white/70 hover:text-white transition-all active:scale-95"
          >
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.28em] uppercase font-semibold text-neutral-300 group-hover:text-white transition-colors">
              SCROLL DOWN
            </span>

            <motion.div
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-5.5 h-9 sm:w-6 sm:h-10 rounded-full border-2 border-white/60 group-hover:border-white flex justify-center pt-1.5 shadow-lg transition-colors"
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full shadow-sm" />
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Academic Credits Bar: Raised up substantially so it is comfortably inside the hero section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-end justify-between gap-4 pb-14 sm:pb-18 md:pb-20 z-20 relative select-none">
        {/* Left: Prepared By */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center sm:text-left flex flex-col items-center sm:items-start"
        >
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold mb-1">
            Prepared By
          </span>
          <span className="font-sans text-xs sm:text-sm font-medium text-white tracking-wide">
            Mr. Intouch Charoenphon (2610717302050)
          </span>
          <span className="font-sans text-[10px] sm:text-[11px] text-neutral-400 font-light mt-0.5">
            Computer Engineering and Artificial Intelligence
          </span>
        </motion.div>

        {/* Right: Presented To */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center sm:text-right flex flex-col items-center sm:items-end"
        >
          <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold mb-1">
            Presented To
          </span>
          <span className="font-sans text-xs sm:text-sm font-medium text-white tracking-wide">
            Dr. Apimuk Muangsuk
          </span>
          <span className="font-sans text-[10px] sm:text-[11px] text-neutral-400 font-light mt-0.5">
            Instructor
          </span>
        </motion.div>
      </div>
    </section>
  )
}
