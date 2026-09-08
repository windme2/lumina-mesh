"use client"

import * as React from "react"
import { X, ExternalLink, Download, FileText } from "lucide-react"
import { assetPath } from "@/lib/utils"

interface PresentationDeckProps {
  isOpen: boolean
  onClose: () => void
  initialStudyId?: string
}

export function PresentationDeck({ isOpen, onClose }: PresentationDeckProps) {
  const pdfUrl = assetPath("/assets/presentation/Lumina_Mesh_Presentation.pdf")

  React.useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl text-neutral-100 p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-7xl h-[94vh] bg-neutral-950 border border-white/15 rounded-3xl flex flex-col justify-between shadow-2xl overflow-hidden">
        {/* Editorial Luxury Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-white/10 bg-black">
          <div className="flex items-center gap-4">
            <div className="size-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
              <FileText className="size-4" />
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-neutral-400 uppercase">
                <span className="text-amber-400 font-bold">/ 04</span>
                <span>Official Presentation</span>
              </div>
              <h3 className="text-base sm:text-lg font-sans font-bold text-white tracking-wide mt-0.5">
                Lumina Architectural Wi-Fi Mesh Lamp
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={pdfUrl}
              download="Lumina_Mesh_Presentation.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/15 text-xs font-mono text-neutral-200 hover:text-white transition-colors"
            >
              <Download className="size-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 bg-white text-black font-semibold text-xs font-sans tracking-wide hover:bg-neutral-200 transition-colors"
            >
              <ExternalLink className="size-3.5" />
              <span className="hidden sm:inline">Open in New Tab</span>
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer ml-2"
              title="Close Presentation"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 w-full bg-neutral-900 overflow-hidden relative">
          <iframe
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            title="Lumina_Mesh_Presentation.pdf"
            className="w-full h-full border-0"
          />
        </div>

        {/* Bottom Minimalist Bar */}
        <div className="px-6 py-3 bg-black border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500">
          <span>LUMINA MESH · SPATIAL PHOTOMETRIC PRESENTATION</span>
          <span>Press [Esc] to exit viewer</span>
        </div>
      </div>
    </div>
  )
}
