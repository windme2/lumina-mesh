"use client"

import * as React from "react"
import { PROMPT_STUDIES } from "@/data/prompt-study-data"
import {
  Sparkles,
  Activity,
  GitBranch,
  BookOpen,
  FileText,
  Presentation,
  CheckCircle2,
  Copy,
  Check,
} from "lucide-react"
import katex from "katex"
import "katex/dist/katex.min.css"
import { assetPath } from "@/lib/utils"

interface PromptStudySectionProps {
  onOpenPresentation: (studyId?: string) => void
  activeTab?: string
  onTabChange?: (tabId: string) => void
}

export function PromptStudySection({
  onOpenPresentation,
  activeTab: controlledActiveTab,
  onTabChange,
}: PromptStudySectionProps) {
  const [internalActiveTab, setInternalActiveTab] = React.useState<string>("ai-image")
  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab
  const [copiedZero, setCopiedZero] = React.useState(false)
  const [copiedFew, setCopiedFew] = React.useState(false)

  const handleTabSelect = (studyId: string) => {
    setInternalActiveTab(studyId)
    if (onTabChange) {
      onTabChange(studyId)
    }
  }

  const activeStudy = PROMPT_STUDIES.find((s) => s.id === activeTab) || PROMPT_STUDIES[0]

  const copyToClipboard = (text: string, isFew: boolean) => {
    navigator.clipboard.writeText(text)
    if (isFew) {
      setCopiedFew(true)
      setTimeout(() => setCopiedFew(false), 2000)
    } else {
      setCopiedZero(true)
      setTimeout(() => setCopiedZero(false), 2000)
    }
  }

  // Render KaTeX HTML safely
  const renderMath = (expression: string) => {
    try {
      return {
        __html: katex.renderToString(expression, {
          displayMode: true,
          throwOnError: false,
        }),
      }
    } catch {
      return { __html: expression }
    }
  }

  return (
    <section
      id="prompt-study"
      className="w-full bg-black text-neutral-100 py-24 sm:py-32 px-6 md:px-16 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with / 03 Category */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-10 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-3 font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
              <span className="text-amber-400 font-bold">/ 03</span>
              <span>Academic Research & Prompt Engineering</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-sans font-bold text-white tracking-tight leading-tight">
              Zero-Shot vs Few-Shot
            </h2>
            <p className="mt-3 text-sm sm:text-base font-sans font-light text-neutral-400 max-w-2xl leading-relaxed">
              Learn how to compare zero-shot and few-shot prompts to maximize accuracy in architectural lighting and mesh rendering.
            </p>
          </div>

          {/* Presentation Launcher Button */}
          <button
            onClick={() => onOpenPresentation(activeStudy.id)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-sans text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap shadow-lg"
          >
            <Presentation className="size-4 text-amber-400" />
            <span>Open PDF Presentation</span>
          </button>
        </div>

        {/* Tool Navigation Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto py-6 border-b border-white/10 no-scrollbar">
          {PROMPT_STUDIES.map((study) => {
            const isActive = activeTab === study.id
            const getIcon = () => {
              switch (study.id) {
                case "ai-image":
                  return <Sparkles className="size-3.5" />
                case "desmos":
                  return <Activity className="size-3.5" />
                case "mermaid":
                  return <GitBranch className="size-3.5" />
                case "latex":
                  return <BookOpen className="size-3.5" />
                case "notebooklm":
                  return <FileText className="size-3.5" />
                default:
                  return null
              }
            }

            return (
              <button
                key={study.id}
                id={study.id}
                data-study-tab={study.id}
                onClick={() => handleTabSelect(study.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-mono tracking-wider transition-all whitespace-nowrap cursor-pointer uppercase ${
                  isActive
                    ? "bg-white text-black font-bold shadow-lg"
                    : "bg-neutral-950 hover:bg-neutral-900 text-neutral-400 hover:text-white border border-white/10"
                }`}
              >
                {getIcon()}
                <span>{study.name}</span>
              </button>
            )
          })}
        </div>

        {/* Active Study Content Card */}
        <div className="mt-10">
          {/* Overview Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-2 font-medium">
                {activeStudy.category}
              </span>
              <p className="text-base font-sans font-light text-neutral-200 leading-relaxed">
                {activeStudy.overview}
              </p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-black border border-white/10 text-xs font-mono text-neutral-300 flex flex-col gap-2 shrink-0 md:max-w-md w-full">
              <span className="text-[10px] uppercase font-semibold text-amber-400 tracking-wider">
                Target Objective
              </span>
              <p className="font-sans text-xs text-neutral-300 whitespace-pre-line leading-relaxed font-light">
                {activeStudy.objective}
              </p>
            </div>
          </div>

          {/* Grid Comparison: Zero-shot vs Few-shot */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* 1. ZERO-SHOT COLUMN */}
            <div className="flex flex-col p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-white/10 shadow-2xl justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-400">
                    1. Initial Prompt (Zero-Shot)
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">Unconstrained</span>
                </div>

                {/* Prompt Box */}
                <div className="mt-4 relative group">
                  <div className="p-4 rounded-2xl bg-black border border-white/10 font-mono text-xs text-neutral-300 whitespace-pre-wrap leading-relaxed">
                    {activeStudy.zeroShotPrompt}
                  </div>
                  <button
                    onClick={() => copyToClipboard(activeStudy.zeroShotPrompt, false)}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy prompt"
                  >
                    {copiedZero ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                  </button>
                </div>

                {/* Output Visualization */}
                <div className="mt-6">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 mb-2.5 block">
                    {activeStudy.zeroShotOutput.title}
                  </span>

                  {activeStudy.zeroShotOutput.type === "image" && (
                    <div className="aspect-16/10 rounded-2xl overflow-hidden bg-neutral-900 shadow-xl">
                      <img
                        src={assetPath(activeStudy.zeroShotOutput.content)}
                        alt="Zero-shot Output"
                        className="size-full object-cover"
                      />
                    </div>
                  )}

                  {activeStudy.zeroShotOutput.type === "code" && (
                    <div className="p-4 rounded-2xl bg-black border border-white/10 font-mono text-xs text-neutral-300 overflow-x-auto whitespace-pre-wrap">
                      {activeStudy.zeroShotOutput.content}
                    </div>
                  )}

                  {activeStudy.zeroShotOutput.type === "latex" && (
                    <div className="p-8 rounded-2xl bg-black border border-white/10 text-center">
                      <div
                        className="text-2xl text-white font-serif"
                        dangerouslySetInnerHTML={renderMath("\\Phi = I \\times \\Omega")}
                      />
                    </div>
                  )}

                  {activeStudy.zeroShotOutput.type === "markdown" && (
                    <div className="p-4 rounded-2xl bg-black border border-white/10 font-mono text-xs text-neutral-300 whitespace-pre-wrap">
                      {activeStudy.zeroShotOutput.content}
                    </div>
                  )}

                  {activeStudy.zeroShotOutput.type === "mermaid" && (
                    <div className="p-4 rounded-2xl bg-black border border-white/10 font-mono text-xs text-neutral-300 overflow-x-auto whitespace-pre-wrap">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] uppercase text-neutral-500 font-semibold">
                        <span>Mermaid Flowchart</span>
                      </div>
                      {activeStudy.zeroShotOutput.content}
                    </div>
                  )}
                </div>
              </div>

              {/* Limitations / Notes */}
              <div className="mt-6 p-4 rounded-2xl bg-black/60 border border-white/10 text-xs font-sans text-neutral-400 font-light leading-relaxed">
                <strong className="font-semibold text-neutral-200 block mb-1 font-mono text-[11px] uppercase tracking-wider">
                  Limitations of Initial Output:
                </strong>
                {activeStudy.zeroShotOutput.notes}
              </div>
            </div>

            {/* 2. FEW-SHOT & ENRICHMENT COLUMN */}
            <div className="flex flex-col p-6 sm:p-8 rounded-3xl bg-neutral-950 border border-amber-400/30 shadow-2xl justify-between">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider font-semibold text-amber-300">
                    2. Refined Prompt (Few-Shot & Domain Precision)
                  </span>
                  <span className="text-[11px] font-mono text-amber-400">High Precision</span>
                </div>

                {/* Prompt Box */}
                <div className="mt-4 relative group">
                  <div className="p-4 rounded-2xl bg-black border border-white/10 font-mono text-xs text-neutral-200 max-h-40 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                    {activeStudy.fewShotPrompt}
                  </div>
                  <button
                    onClick={() => copyToClipboard(activeStudy.fewShotPrompt, true)}
                    className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy few-shot prompt"
                  >
                    {copiedFew ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
                  </button>
                </div>

                {/* Output Visualization */}
                <div className="mt-6">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-300 mb-2.5 block">
                    {activeStudy.fewShotOutput.title}
                  </span>

                  {activeStudy.fewShotOutput.type === "image" && (
                    <div className="aspect-16/10 rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl">
                      <img
                        src={assetPath(activeStudy.fewShotOutput.content)}
                        alt="Few-shot Output"
                        className="size-full object-cover"
                      />
                    </div>
                  )}

                  {activeStudy.fewShotOutput.type === "code" && (
                    <div className="p-4 rounded-2xl bg-black border border-white/10 font-mono text-xs text-amber-300 overflow-x-auto max-h-56 whitespace-pre-wrap">
                      {activeStudy.fewShotOutput.content}
                    </div>
                  )}

                  {activeStudy.fewShotOutput.type === "latex" && (
                    <div className="p-6 rounded-2xl bg-black border border-white/10 text-left overflow-x-auto max-h-64">
                      <div
                        className="text-base text-white font-serif"
                        dangerouslySetInnerHTML={renderMath(
                          "\\Phi_{\\text{total}} = \\int_{0}^{2\\pi} \\int_{0}^{\\frac{\\pi}{2}} I_0 \\cos^n(\\theta) \\sin(\\theta) \\, d\\theta \\, d\\phi = \\frac{2\\pi I_0}{n+1}"
                        )}
                      />
                    </div>
                  )}

                  {activeStudy.fewShotOutput.type === "markdown" && (
                    <div className="p-4 rounded-2xl bg-black border border-white/10 font-mono text-xs text-neutral-200 max-h-56 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                      {activeStudy.fewShotOutput.content}
                    </div>
                  )}

                  {activeStudy.fewShotOutput.type === "mermaid" && (
                    <div className="p-4 rounded-2xl bg-black border border-amber-400/20 font-mono text-xs text-amber-300 overflow-x-auto max-h-56 whitespace-pre-wrap">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] uppercase text-amber-400/70 font-semibold">
                        <span>Mermaid Flowchart (ESP-NOW Topology)</span>
                      </div>
                      {activeStudy.fewShotOutput.content}
                    </div>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div className="mt-6 space-y-2">
                {activeStudy.fewShotOutput.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs font-sans text-neutral-300 font-light">
                    <CheckCircle2 className="size-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. REFLECTION & COMPARATIVE MATRIX */}
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-white/10">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/50 block mb-6">
              Reflection & Comparative Analysis
            </span>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-left text-xs font-sans font-light">
                <thead className="bg-black font-mono uppercase tracking-wider text-neutral-400 border-b border-white/10">
                  <tr>
                    <th className="py-3.5 px-5">Evaluation Metric</th>
                    <th className="py-3.5 px-5 text-neutral-400">Initial Prompt (Zero-Shot)</th>
                    <th className="py-3.5 px-5 text-white">Refined Prompt (Few-Shot)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-neutral-950">
                  {activeStudy.reflection.keyDifferences.map((diff, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-5 font-mono font-medium text-neutral-300">
                        {diff.aspect}
                      </td>
                      <td className="py-4 px-5 text-neutral-400 leading-relaxed">
                        {diff.zeroShot}
                      </td>
                      <td className="py-4 px-5 text-white leading-relaxed font-normal">
                        {diff.fewShot}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
