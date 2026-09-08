import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function assetPath(path: string): string {
  if (!path) return ""
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  if (!base || !path.startsWith("/")) return path
  return `${base.replace(/\/$/, "")}${path}`
}
