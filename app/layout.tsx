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
  title: "LUMINA — Architectural Lighting & Spatial Intelligence",
  description: "Lumina Mesh transforms conventional lighting into intelligent spatial nodes.",
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
