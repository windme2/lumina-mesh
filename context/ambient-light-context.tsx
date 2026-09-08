"use client"

import * as React from "react"

export interface AmbientLightContextType {
  kelvin: number
  setKelvin: (k: number) => void
  brightness: number
  setBrightness: (b: number) => void
  colorRgb: string
  presetName: string
  applyPreset: (k: number) => void
}

export const KELVIN_PRESETS = [
  { name: "Candlelight", kelvin: 1800, desc: "Ultra-warm atmospheric glow" },
  { name: "Warm Incandescent", kelvin: 2700, desc: "Relaxed residential living" },
  { name: "Neutral Studio", kelvin: 4000, desc: "Balanced architectural focus" },
  { name: "Crisp Daylight", kelvin: 6500, desc: "High alertness daylight spectrum" },
]

function kelvinToRgb(kelvin: number): { r: number; g: number; b: number } {
  const temp = kelvin / 100
  let red: number, green: number, blue: number

  if (temp <= 66) {
    red = 255
    green = 99.4708025861 * Math.log(temp) - 161.1195681661
    if (temp <= 19) {
      blue = 0
    } else {
      blue = 138.5177312231 * Math.log(temp - 10) - 305.0447927307
    }
  } else {
    red = 329.698727446 * Math.pow(temp - 60, -0.1332047592)
    green = 288.1221695283 * Math.pow(temp - 60, -0.0755148492)
    blue = 255
  }

  return {
    r: Math.min(255, Math.max(0, Math.round(red))),
    g: Math.min(255, Math.max(0, Math.round(green))),
    b: Math.min(255, Math.max(0, Math.round(blue))),
  }
}

const AmbientLightContext = React.createContext<AmbientLightContextType | undefined>(undefined)

export function AmbientLightProvider({ children }: { children: React.ReactNode }) {
  const [kelvin, setKelvin] = React.useState<number>(3000)
  const [brightness, setBrightness] = React.useState<number>(85)

  const rgb = React.useMemo(() => kelvinToRgb(kelvin), [kelvin])
  const colorRgb = `${rgb.r}, ${rgb.g}, ${rgb.b}`

  const presetName = React.useMemo(() => {
    const matched = KELVIN_PRESETS.find((p) => Math.abs(p.kelvin - kelvin) < 250)
    return matched ? matched.name : `${kelvin}K Custom`
  }, [kelvin])

  const applyPreset = React.useCallback((k: number) => {
    setKelvin(k)
  }, [])

  return (
    <AmbientLightContext.Provider
      value={{
        kelvin,
        setKelvin,
        brightness,
        setBrightness,
        colorRgb,
        presetName,
        applyPreset,
      }}
    >
      <div
        style={
          {
            "--ambient-r": rgb.r,
            "--ambient-g": rgb.g,
            "--ambient-b": rgb.b,
            "--ambient-rgb": colorRgb,
            "--ambient-kelvin": kelvin,
            "--ambient-brightness": brightness / 100,
          } as React.CSSProperties
        }
        className="w-full"
      >
        {children}
      </div>
    </AmbientLightContext.Provider>
  )
}

export function useAmbientLight() {
  const ctx = React.useContext(AmbientLightContext)
  if (!ctx) {
    throw new Error("useAmbientLight must be used within AmbientLightProvider")
  }
  return ctx
}
