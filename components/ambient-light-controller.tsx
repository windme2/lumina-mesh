"use client"

import * as React from "react"
import { useAmbientLight, KELVIN_PRESETS } from "@/context/ambient-light-context"
import { Sun, Flame, Sliders } from "lucide-react"

export function AmbientLightController() {
  const { kelvin, setKelvin, presetName, applyPreset } = useAmbientLight()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Controller Panel */}
      {isOpen && (
        <div className="mb-3 p-5 w-80 sm:w-96 rounded-2xl bg-neutral-900/95 backdrop-blur-xl border border-neutral-700/80 shadow-2xl text-neutral-100 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <div className="flex items-center gap-2">
              <div
                className="size-3 rounded-full transition-colors duration-300 shadow-sm"
                style={{ backgroundColor: `rgb(var(--ambient-rgb))` }}
              />
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
                Ambient Lighting Engine
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400">
              {kelvin}K
            </span>
          </div>

          {/* Current Preset Name */}
          <div className="mt-3 flex items-center justify-between text-xs text-neutral-400">
            <span>Active Scene:</span>
            <span className="text-neutral-200 font-medium">{presetName}</span>
          </div>

          {/* Kelvin Slider */}
          <div className="mt-4">
            <div className="flex justify-between text-[11px] text-neutral-400 mb-1.5 font-mono">
              <span className="flex items-center gap-1">
                <Flame className="size-3 text-amber-500" /> 1800K
              </span>
              <span>Kelvin Temperature</span>
              <span className="flex items-center gap-1">
                6500K <Sun className="size-3 text-sky-400" />
              </span>
            </div>
            <input
              type="range"
              min="1800"
              max="6500"
              step="50"
              value={kelvin}
              onChange={(e) => setKelvin(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-amber-600 via-amber-200 to-sky-200 accent-neutral-100"
            />
          </div>

          {/* Quick Presets */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {KELVIN_PRESETS.map((p) => (
              <button
                key={p.name}
                onClick={() => applyPreset(p.kelvin)}
                className={`px-2.5 py-1.5 rounded-lg text-[11px] font-medium border text-left transition-all cursor-pointer ${
                  Math.abs(kelvin - p.kelvin) < 250
                    ? "bg-neutral-800 border-neutral-600 text-white shadow-sm"
                    : "bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700"
                }`}
              >
                <div className="font-semibold">{p.kelvin}K</div>
                <div className="text-[9px] text-neutral-500 truncate">{p.name}</div>
              </button>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-neutral-800 text-[10px] text-neutral-500 text-center font-mono">
            Interactive real-time spatial photon temperature simulation
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 hover:border-neutral-500 text-neutral-200 hover:text-white shadow-2xl transition-all cursor-pointer hover:scale-105 active:scale-95"
        title="Toggle Ambient Light Controller"
      >
        <div
          className="size-3.5 rounded-full transition-all duration-300 shadow-[0_0_12px_rgba(255,200,100,0.6)]"
          style={{ backgroundColor: `rgb(var(--ambient-rgb))` }}
        />
        <span className="text-xs font-mono font-medium tracking-wide">
          {kelvin}K
        </span>
        <Sliders className="size-3.5 text-neutral-400 group-hover:text-neutral-200 transition-colors" />
      </button>
    </div>
  )
}
