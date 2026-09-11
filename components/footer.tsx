"use client"

import * as React from "react"

export function Footer() {
  const handleToolClick = (toolId: string) => {
    const tabButton = document.querySelector(`[data-study-tab="${toolId}"]`) as HTMLElement | null
    if (tabButton) tabButton.click()
    const targetEl = document.getElementById("prompt-study")
    if (targetEl) targetEl.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="w-full bg-neutral-950 text-neutral-400 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-neutral-900">
          {/* Brand Info */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex flex-col select-none mb-6">
                <span className="font-sans font-light tracking-[0.28em] text-2xl text-white uppercase">
                  LUMINA
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-neutral-400 uppercase font-sans font-normal mt-0.5">
                  Architectural Wi-Fi Mesh Lamp
                </span>
              </div>
              <p className="text-neutral-400 text-sm max-w-sm font-light leading-relaxed">
                Sculpting living environments through autonomous mesh intelligence,
                spectral precision, and understated architectural form factors.
              </p>
            </div>
          </div>

          {/* Navigation Tools Column */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-200 font-semibold mb-2">
              Computational Tools
            </span>
            <button
              onClick={() => handleToolClick("ai-image")}
              className="text-sm text-left hover:text-white transition-colors cursor-pointer"
            >
              AI Image
            </button>
            <button
              onClick={() => handleToolClick("desmos")}
              className="text-sm text-left hover:text-white transition-colors cursor-pointer"
            >
              Desmos
            </button>
            <button
              onClick={() => handleToolClick("mermaid")}
              className="text-sm text-left hover:text-white transition-colors cursor-pointer"
            >
              Mermaid
            </button>
            <button
              onClick={() => handleToolClick("latex")}
              className="text-sm text-left hover:text-white transition-colors cursor-pointer"
            >
              LaTeX
            </button>
            <button
              onClick={() => handleToolClick("notebooklm")}
              className="text-sm text-left hover:text-white transition-colors cursor-pointer"
            >
              NotebookLM
            </button>
          </div>

          {/* Spatial Zones Column */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-200 font-semibold mb-2">
              Spatial Zones
            </span>
            <a href="#spaces-explorer" className="text-sm hover:text-white transition-colors">
              Living Room
            </a>
            <a href="#spaces-explorer" className="text-sm hover:text-white transition-colors">
              Bed Room
            </a>
            <a href="#spaces-explorer" className="text-sm hover:text-white transition-colors">
              Reading Room
            </a>
            <a href="#spaces-explorer" className="text-sm hover:text-white transition-colors">
              Studio Room
            </a>
            <a href="#spaces-explorer" className="text-sm hover:text-white transition-colors">
              Dining Room
            </a>
            <a href="#spaces-explorer" className="text-sm hover:text-white transition-colors">
              Working Room
            </a>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} LUMINA Mesh | All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#concept" className="hover:text-neutral-300 transition-colors">
              Design Identity
            </a>
            <a href="#spaces-explorer" className="hover:text-neutral-300 transition-colors">
              Spatial Architecture
            </a>
            <a href="#presentation" className="hover:text-neutral-300 transition-colors">
              Presentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
