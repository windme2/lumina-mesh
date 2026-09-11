import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  fallback: ["SF Mono", "Menlo", "Consolas", "Monaco", "monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://windme2.github.io/lumina-mesh"),
  title: "LUMINA — Architectural Lighting & Spatial Intelligence",
  description:
    "Lumina Mesh: Architectural Wi-Fi Mesh Lamp & Spatial Intelligence showcase comparing Zero-Shot vs Few-Shot prompt engineering across AI Image Generation, Desmos, Mermaid, LaTeX, and NotebookLM synthesis.",
  keywords: [
    "Lumina Mesh",
    "Architectural Lighting",
    "Spatial Intelligence",
    "Prompt Engineering",
    "Zero-Shot vs Few-Shot",
    "AI Image Generation",
    "LaTeX",
    "Desmos",
    "Mermaid",
    "NotebookLM",
  ],
  openGraph: {
    title: "LUMINA — Architectural Lighting & Spatial Intelligence",
    description:
      "Academic research contrasting Zero-Shot vs Few-Shot prompt engineering across AI Image Generation, LaTeX Typesetting, Desmos, and NotebookLM.",
    url: "https://windme2.github.io/lumina-mesh/",
    siteName: "LUMINA Mesh",
    images: [
      {
        url: "/assets/images/living_room.webp",
        width: 1376,
        height: 768,
        alt: "LUMINA Architectural Mesh Living Room Showcase",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUMINA — Architectural Lighting & Spatial Intelligence",
    description:
      "Academic prompt engineering study for architectural spatial lighting, AI Image generation, and LaTeX mathematical derivations.",
    images: ["/assets/images/living_room.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} font-sans h-full antialiased bg-black text-neutral-100`}
    >
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
