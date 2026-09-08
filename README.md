# LUMINA — Architectural Wi-Fi Mesh Lamp

> An interactive spatial intelligence showcase and academic prompt engineering presenting the convergence of architectural lighting, Japanese-Scandinavian (Japandi) minimalism, and decentralized Wi-Fi mesh telecommunications.

---

### Academic Information

- **Project Title:** Lumina Mesh: Architectural Wi-Fi Mesh Lamp & Spatial Intelligence
- **Prepared by:** Mr. Intouch Charoenphon (2610717302050)
- **Program:** Computer Engineering and Artificial Intelligence
- **Presented to:** Dr. Apimuk Muangkasem

---

## Architectural Concept & Philosophy

Lumina combines Japanese Zen minimalism with Scandinavian functionality (**Japandi** aesthetic). The design conceals high-performance Wi-Fi 6 mesh hardware within an understated ambient luminaire:

- **Invisible Technology:** Radiating high-bandwidth connectivity without industrial antenna clutter.
- **Circadian Lighting:** Dynamic color temperatures (1800K to 4000K) supporting natural human circadian biology.
- **Autonomous Mesh Routing:** Decentralized IEEE 802.11k/v Fast BSS Transition between primary nodes and satellite ambient units.

---

## Showcase Architecture

The web application is structured into four sequential architectural zones:

### 1. `/ 01` Design & Identity

- Core philosophy: Organic growth, circular longevity, and transparent sensory feedback.
- Architectural palette: `#0A0A0A` (Obsidian), `#2A2A2E` (Smoked Oak), `#5A6B5C` (Moss Slate), and `#E6A756` (Amber Glow).
- Typography system: **Geist Sans** (Headings & Body) paired with **Geist Mono** (Technical telemetry, frequencies, and metrics).

### 2. `/ 02` Spatial Architecture

- Interactive sticky scroll-locked space explorer showcasing Lumina integrated across 6 living environments:
  1. Living Room
  2. Dining Room
  3. Working Room
  4. Studio Room
  5. Reading Room
  6. Bed Room

### 3. `/ 03` Academic Research & Prompt Engineering

A comparative study of **Zero-Shot** versus domain-enriched **Few-Shot** prompting across 5 computational categories:

1. **AI Image Generation (Canva AI):** Architectural indirect lighting and photometric surface rendering.
2. **Desmos Graphing:** Parametric polar luminous intensity equations and inverse-square falloff curves with dynamic sliders.
3. **Mermaid Flowchart:** State-machine architecture detailing 802.11k/v roaming, ambient lux thresholds, and thermal throttling loops.
4. **LaTeX Typesetting:** Multivariate calculus derivation of total luminous flux ($\Phi$) and IEEE two-column paper styling.
5. **NotebookLM Knowledge Synthesis:** Synthesis of international green building standards (WELL Building Standard v2, IESNA, EN 12464-1) into actionable engineering matrices.

### 4. `/ 04` Official Architectural Presentation

- Integrated presentation slide viewer with slide-by-slide navigation.
- Direct download for the official presentation PDF (`Lumina_Mesh_Presentation.pdf`).

---

## Technology Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Motion (Framer Motion)](https://motion.dev/)
- **Mathematical Typesetting:** [KaTeX](https://katex.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** GitHub Pages via GitHub Actions

---

## Local Development

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/windme2/lumina-mesh
cd lumina-mesh

# Install optimized dependencies
npm install

# Launch local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Static Export

```bash
npm run build
```

The static website output will be generated inside the `/out` directory, ready for static hosting or CDN deployment.

---

## GitHub Pages Deployment

This project includes an automated deployment pipeline configured via GitHub Actions at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### Deployment Steps:

1. Push this repository to GitHub on branch `main` or `master`.
2. On GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow will automatically build the static export and deploy the application to:
   `https://windme2.github.io/lumina-mesh/`

---

## License & Attribution

Designed and engineered for academic presentation and research. All rights reserved.
