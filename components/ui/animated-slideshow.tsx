"use client"

import * as React from "react"
import { HTMLMotionProps, motion } from "motion/react"
import { cn } from "@/lib/utils"

interface TextStaggerHoverProps {
  text: string
  index: number
  onClickSlide?: (index: number) => void
}

interface HoverSliderImageProps {
  index: number
  imageUrl: string
}

interface HoverSliderProps {
  totalSlides?: number
  activeSlide?: number
  onSlideSelect?: (index: number) => void
  onSlideChange?: (index: number) => void
}

interface HoverSliderContextValue {
  activeSlide: number
  changeSlide: (index: number) => void
  onSlideSelect?: (index: number) => void
}

const HoverSliderContext = React.createContext<
  HoverSliderContextValue | undefined
>(undefined)

export function useHoverSliderContext() {
  const context = React.useContext(HoverSliderContext)
  if (context === undefined) {
    throw new Error(
      "useHoverSliderContext must be used within a HoverSliderProvider"
    )
  }
  return context
}

export const HoverSlider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & HoverSliderProps
>(({ children, className, totalSlides = 6, activeSlide: controlledActiveSlide, onSlideSelect, onSlideChange, ...props }, ref) => {
  const [uncontrolledActiveSlide, setUncontrolledActiveSlide] = React.useState<number>(0)
  const isControlled = controlledActiveSlide !== undefined
  const activeSlide = isControlled ? controlledActiveSlide : uncontrolledActiveSlide

  const changeSlide = React.useCallback(
    (index: number) => {
      if (!isControlled) {
        setUncontrolledActiveSlide(index)
      }
      onSlideChange?.(index)
    },
    [isControlled, onSlideChange]
  )

  // Keyboard Navigation: ArrowUp / ArrowDown / Keys 1-6
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return
      }

      if (e.key === "ArrowDown") {
        e.preventDefault()
        changeSlide((activeSlide + 1) % totalSlides)
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        changeSlide((activeSlide - 1 + totalSlides) % totalSlides)
      } else if (e.key >= "1" && e.key <= String(totalSlides)) {
        const targetIdx = parseInt(e.key, 10) - 1
        changeSlide(targetIdx)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [totalSlides])

  return (
    <HoverSliderContext.Provider value={{ activeSlide, changeSlide, onSlideSelect }}>
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    </HoverSliderContext.Provider>
  )
})
HoverSlider.displayName = "HoverSlider"

export const TextStaggerHover = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement> & TextStaggerHoverProps
>(({ text, index, onClickSlide, children, className, ...props }, ref) => {
  const { activeSlide, changeSlide, onSlideSelect } = useHoverSliderContext()
  const isActive = activeSlide === index

  const handleHover = () => changeSlide(index)
  const handleClick = () => {
    changeSlide(index)
    if (onClickSlide) onClickSlide(index)
    else if (onSlideSelect) onSlideSelect(index)
  }

  return (
    <span
      className={cn(
        "relative inline-block select-none cursor-pointer whitespace-nowrap transition-all duration-300",
        isActive
          ? "text-white font-black opacity-100 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          : "text-white/40 font-bold opacity-40 hover:opacity-80 hover:text-white/90",
        className
      )}
      {...props}
      ref={ref}
      onMouseEnter={handleHover}
      onClick={handleClick}
      onTouchStart={handleClick}
    >
      {text}
    </span>
  )
})
TextStaggerHover.displayName = "TextStaggerHover"

// Silky Smooth Cinematic Crossfade (Calm & Non-dizzying)
export const fadeVariants = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeInOut" as const },
  },
  hidden: {
    opacity: 0,
    scale: 1.02,
    transition: { duration: 0.6, ease: "easeInOut" as const },
  },
}

export const HoverSliderImageWrap = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid overflow-hidden [&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1 [&>*]:size-full",
        className
      )}
      {...props}
    />
  )
})
HoverSliderImageWrap.displayName = "HoverSliderImageWrap"

export const HoverSliderImage = React.forwardRef<
  HTMLImageElement,
  HTMLMotionProps<"img"> & HoverSliderImageProps
>(({ index, imageUrl, children, className, ...props }, ref) => {
  const { activeSlide } = useHoverSliderContext()
  return (
    <motion.img
      className={cn("inline-block align-middle", className)}
      variants={fadeVariants}
      animate={activeSlide === index ? "visible" : "hidden"}
      initial="hidden"
      ref={ref}
      {...props}
    />
  )
})
HoverSliderImage.displayName = "HoverSliderImage"
