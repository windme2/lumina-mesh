"use client"

import { FileText, ExternalLink, Presentation } from "lucide-react"
import { assetPath } from "@/lib/utils"

interface PresentationSectionProps {
  onOpenPresentation: () => void
}

export function PresentationSection({ onOpenPresentation }: PresentationSectionProps) {
  const pdfUrl = assetPath("/assets/presentation/Lumina_Mesh_Presentation.pdf")

  return (
    <section
      id="presentation"
      className="w-full bg-black text-neutral-100 py-24 sm:py-32 px-6 md:px-16 border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Strip with / 04 Category - Left-aligned to match / 01, / 02, / 03 */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
            <span className="text-amber-400 font-bold">/ 04</span>
            <span>Official Architectural Presentation</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-sans font-bold text-white tracking-tight leading-[1.05]">
            Lumina Architectural
          </h2>

          <p className="mt-6 text-base sm:text-lg font-sans font-light text-neutral-400 leading-relaxed">
            Official Presentation Deck compiling the architectural lighting design concept, autonomous LuminaMesh protocol, electro-optical engineering specs, and prompt engineering research.
          </p>
        </div>

        {/* Presentation Preview Card & Center Action Button - Centered */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-2xl p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-white/10 shadow-2xl flex flex-col items-center text-center group hover:border-amber-400/30 transition-all">
            <div className="size-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 shadow-inner">
              <Presentation className="size-8" />
            </div>

            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 mb-2">
              PDF Document - Architectural Slides
            </span>
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-white mb-3">
              Lumina_Mesh_Presentation.pdf
            </h3>
            <p className="text-xs sm:text-sm font-sans font-light text-neutral-400 max-w-md leading-relaxed mb-8">
              Open the full presentation slides with interactive navigation, or download the PDF document for offline reading.
            </p>

            {/* Centered Trigger Button */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenPresentation}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-neutral-200 transition-all shadow-2xl active:scale-95 cursor-pointer font-sans"
              >
                <FileText className="size-4" />
                <span>Open Presentation</span>
              </button>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white font-medium text-xs tracking-widest uppercase transition-all cursor-pointer font-sans"
              >
                <ExternalLink className="size-4" />
                <span>Open in New Tab</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
