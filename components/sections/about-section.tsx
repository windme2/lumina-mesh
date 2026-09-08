"use client"

import * as React from "react"
import { Sparkles, Compass, Smartphone, Layers } from "lucide-react"
import { assetPath } from "@/lib/utils"

export function AboutSection() {
  return (
    <section
      id="concept"
      className="w-full bg-black text-white py-20 sm:py-28 md:py-32 px-6 sm:px-10 md:px-16 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Grid: Left Side (Title & 4 Identity Cards) + Right Side (Organic Pebble Close-up Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading & 4 Identity Cards */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Header Badge & Title — Unified format with / 02, / 03, / 04 */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
                <span className="text-amber-400 font-bold">/ 01</span>
                <span>Design & Identity</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-white leading-tight">
                The Lumina Identity
              </h2>
              <p className="mt-4 text-sm sm:text-base font-sans font-light text-neutral-400 max-w-xl leading-relaxed">
                Lumina balances Japanese minimalist design with Scandinavian
                functionality (Japandi aesthetic), creating a clean sensory digital space
                for architectural spatial lighting.
              </p>
            </div>

            {/* Mobile-Only: Sculptural Close-up Image positioned above 4 cards */}
            <div className="lg:hidden flex justify-center w-full my-8">
              <div
                className="relative w-full max-w-xs sm:max-w-sm aspect-square overflow-hidden shadow-2xl border border-white/15 bg-neutral-900 group"
                style={{
                  borderRadius: "58% 42% 65% 35% / 48% 58% 42% 52%",
                }}
              >
                <img
                  src={assetPath("/assets/images/close_up.webp")}
                  alt="Lumina Architectural Close-up Detail"
                  className="size-full object-cover brightness-105 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* 4 Architectural Identity Cards (2x2 Grid, Responsive 1-col on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Card 1: About & Core Philosophy */}
              <div className="p-6 sm:p-7 rounded-[28px] bg-neutral-950 border border-white/10 flex flex-col justify-between shadow-xl hover:border-white/20 transition-all">
                <div>
                  <div className="size-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-5">
                    <Compass className="size-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-sans font-bold text-white mb-2">
                    About & Core Philosophy
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-light text-neutral-400 leading-relaxed">
                    Named after the Latin word for light, Lumina stands for organic growth,
                    circular longevity, and community-driven actions. The platform represents
                    simplicity, transparent measurements, and immediate positive feedback loops.
                  </p>
                </div>
              </div>

              {/* Card 2: Architectural Color Palette */}
              <div className="p-6 sm:p-7 rounded-[28px] bg-neutral-950 border border-white/10 flex flex-col justify-between shadow-xl hover:border-white/20 transition-all">
                <div>
                  <div className="size-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-5">
                    <Sparkles className="size-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-sans font-bold text-white mb-2">
                    Architectural Palette
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-light text-neutral-400 leading-relaxed mb-4">
                    Natural architectural lighting palette curated for atmospheric depth and spatial warmth:
                  </p>

                  {/* 4 Palette Pills in 2x2 Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-900 border border-white/10">
                      <span className="size-3 rounded-full bg-[#0A0A0A] shrink-0 border border-white/20" />
                      <span className="text-neutral-300 font-mono text-[11px]">#0A0A0A</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-900 border border-white/10">
                      <span className="size-3 rounded-full bg-[#2A2A2E] shrink-0" />
                      <span className="text-neutral-300 font-mono text-[11px]">#2A2A2E</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-900 border border-white/10">
                      <span className="size-3 rounded-full bg-[#E2D9CE] shrink-0" />
                      <span className="text-neutral-300 font-mono text-[11px]">#E2D9CE</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-900 border border-white/10">
                      <span className="size-3 rounded-full bg-[#E6A756] shrink-0 shadow-[0_0_8px_rgba(230,167,86,0.5)]" />
                      <span className="text-amber-400 font-mono text-[11px]">#E6A756</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Clean Typography */}
              <div className="p-6 sm:p-7 rounded-[28px] bg-neutral-950 border border-white/10 flex flex-col justify-between shadow-xl hover:border-white/20 transition-all">
                <div>
                  <div className="size-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-5">
                    <Smartphone className="size-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-sans font-bold text-white mb-2">
                    Clean Typography
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-light text-neutral-400 leading-relaxed mb-4">
                    Clean font pairings ensure content layout hierarchy and seamless scannability:
                  </p>

                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase block">
                        SANS-SERIF (GEIST SANS)
                      </span>
                      <span className="text-sm font-sans font-bold text-white block mt-0.5">
                        Headline → Body copy & titles
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase block">
                        MONOSPACE (GEIST MONO)
                      </span>
                      <span className="text-xs font-mono text-amber-300 block mt-0.5">
                        TX-9034 → System IDs & Metrics
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: Japandi Aesthetic — Concise & Punchy */}
              <div className="p-6 sm:p-7 rounded-[28px] bg-neutral-950 border border-white/10 flex flex-col justify-between shadow-xl hover:border-white/20 transition-all">
                <div>
                  <div className="size-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-5">
                    <Layers className="size-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-sans font-bold text-white mb-2">
                    Japandi Aesthetic
                  </h3>
                  <p className="text-xs sm:text-sm font-sans font-light text-neutral-400 leading-relaxed mb-4">
                    Lumina blends Japanese Zen minimalism with Scandinavian functionality — prioritizing clean open space, and warm circadian light.
                  </p>

                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase block">
                        JAPANESE ZEN STYLE
                      </span>
                      <span className="text-xs font-sans text-neutral-200 block font-medium mt-0.5">
                        Simplicity, natural light, raw textures
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase block">
                        SCANDI FUNCTIONALITY
                      </span>
                      <span className="text-xs font-sans text-neutral-200 block font-medium mt-0.5">
                        Practical layouts, warm tones, cozy spaces
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Larger Sculptural Organic Pebble Close-up Image Frame (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col items-center justify-center w-full mt-6 lg:mt-0">
            <div
              className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl aspect-square overflow-hidden shadow-2xl border border-white/15 bg-neutral-900 group"
              style={{
                borderRadius: "58% 42% 65% 35% / 48% 58% 42% 52%",
              }}
            >
              <img
                src={assetPath("/assets/images/close_up.webp")}
                alt="Lumina Architectural Close-up Detail"
                className="size-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-105 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
