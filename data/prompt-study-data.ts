export interface PromptStudyItem {
  id: string;
  name: string;
  category: string;
  iconName: string;
  overview: string;
  objective: string;

  // Step 1: Zero-shot
  zeroShotPrompt: string;
  zeroShotOutput: {
    title: string;
    description: string;
    type: "image" | "code" | "latex" | "markdown" | "mermaid";
    content: string;
    previewUrl?: string;
    notes: string;
  };

  // Step 2: Information enrichment & Few-shot
  enrichmentStrategy: {
    addedContext: string[];
    principlesApplied: string[];
  };
  fewShotPrompt: string;
  fewShotOutput: {
    title: string;
    description: string;
    type: "image" | "code" | "latex" | "markdown" | "mermaid";
    content: string;
    previewUrl?: string;
    highlights: string[];
  };

  // Step 3: Reflection & Comparative Analysis
  reflection: {
    comparisonSummary: string;
    keyDifferences: { aspect: string; zeroShot: string; fewShot: string }[];
    pedagogicalInsights: string[];
    promptEngineeringTakeaways: string;
  };
}

export const PROMPT_STUDIES: PromptStudyItem[] = [
  {
    id: "ai-image",
    name: "AI Image Generation",
    category: "Generative Visual (Canva AI)",
    iconName: "Sparkles",
    overview:
      "Comparative study on generating architectural lighting in residential spaces to achieve photorealistic depth, shadow gradients, and accurate color temperatures.",
    objective:
      "Modern Living Space Visualization\n• Lighting Scheme: Architectural Indirect Lighting\n• Color Temperature: 2700K (Warm Circadian)\n• Material Interaction: Photometric reflectance across physical surfaces",

    zeroShotPrompt:
      "A simple dark cylinder table lamp on a wooden table, warm light, white background",

    zeroShotOutput: {
      title: "Initial Output (Zero-Shot)",
      description:
        "A generic modern living room rendering lacking architectural lighting hierarchy, depth, and spatial context.",
      type: "image",
      content: "/assets/images/zeroshot/ai_image.webp",
      previewUrl: "/assets/images/zeroshot/ai_image.webp",
      notes:
        "Limitations: Overexposed uniform illumination with flat shadows, undefined camera focal length, and absence of professional architectural luminaire classification.",
    },

    enrichmentStrategy: {
      addedContext: [
        "Specified architectural luminaire types: 2700K cove lighting, micro-recessed downlights, and wall-washing",
        "Defined camera optics and exposure settings: Hasselblad X2D 100C, 28mm f/8, ISO 64, 1/4s exposure",
        "Curated architectural materials and IOR reflectance: Micro-cement walls, brushed anodized bronze, and smoked oak",
        "Incorporated professional architectural photography reference styling",
      ],
      principlesApplied: [
        "Domain-Specific Lighting Vocabulary",
        "Constraint-Based Spectral & Temperature Detailing",
        "Optics & Architectural Composition Physics",
      ],
    },

    fewShotPrompt: `Commercial product photography of a premium smart ambient desk lamp integrated with a Wi-Fi mesh node. The device features a matte dark titanium-grey cylindrical base with a tapered crystal-clear glass dome on top. Inside the glass dome stands an architectural glowing geometric double-helix antenna sculpture, emitting a warm amber golden glow (2200K sunset light) from within. Beside it sits a matching compact cylindrical satellite unit with a warm glowing light ring. Placed on a rich dark oak console table next to a large window with dramatic, low-angle late-afternoon sunlight casting long diagonal shadows across a warm beige wall, cinematic editorial lighting, 8k resolution.`,

    fewShotOutput: {
      title: "Refined Output (Few-Shot Prompting)",
      description:
        "Photometrically realistic scene with authentic shadow falloff, volumetric depth, and balanced dual-chroma temperature gradients (Warm 2700K vs Dusk Indigo).",
      type: "image",
      content: "/assets/images/fewshot/ai_image.webp",
      previewUrl: "/assets/images/fewshot/ai_image.webp",
      highlights: [
        "Three-dimensional layered illumination (Ambient + Task + Accent)",
        "Accurate material reflections across travertine and smoked oak adhering to physical IOR",
        "Elimination of uncalibrated light spill seen in zero-shot baselines",
      ],
    },

    reflection: {
      comparisonSummary:
        "Transitioning from zero-shot to domain-enriched few-shot prompting elevates generic imagery into a master-grade architectural lighting design study.",
      keyDifferences: [
        {
          aspect: "Illumination Control",
          zeroShot: "Uncontrolled ambient light washing out room contrast",
          fewShot:
            "Targeted 2700K cove with 15° narrow beam accents providing distinct contrast",
        },
        {
          aspect: "Surface Materiality",
          zeroShot: "Flat textures unresponsive to directional light sources",
          fewShot:
            "Authentic micro-textures on travertine and fluted bronze naturally interacting with light",
        },
        {
          aspect: "Spatial Consistency",
          zeroShot:
            "Randomized perspectives with out-of-scale furniture elements",
          fewShot:
            "Strict architectural perspective alignment achieved via tilt-shift specifications",
        },
      ],
      pedagogicalInsights: [
        "Generative visual models respond far better to specific optical parameters (camera, lens, Kelvin temperature) than generic quality descriptors like 'high quality'.",
        "Few-shot style exemplars establish sharp architectural guardrails, preventing AI hallucination.",
        "Explicit beam angle specifications naturally dictate realistic silhouette and shadow falloff.",
      ],
      promptEngineeringTakeaways:
        "The foundational principle is 'Physics-First Prompting' — specify light source physics, beam angles, material reflectance, and optical recording gear rather than abstract subjective adjectives.",
    },
  },

  {
    id: "desmos",
    name: "Desmos Graphing",
    category: "Mathematical & Photometric Visualization",
    iconName: "Activity",
    overview:
      "Parametric mathematical modeling of photometric light beam distribution and illuminance falloff curves simulated in Desmos.",
    objective:
      "Photometric Luminous Intensity Modeling\n• Core Theory: Polar Luminous Intensity Distribution\n• Attenuation: Inverse-Square Law Falloff\n• Projection Target: Two-Dimensional Architectural Plane",

    zeroShotPrompt:
      "Write Desmos equations to graph Wi-Fi signals and lamp brightness.",

    zeroShotOutput: {
      title: "Initial Output (Zero-Shot)",
      description:
        "Two isolated, disconnected 2D curves for W(x) and L(x) lacking physical coupling between RF signal attenuation and illumination levels.",
      type: "image",
      content: "/assets/images/zeroshot/desmos.webp",
      previewUrl: "/assets/images/zeroshot/desmos.webp",
      notes:
        "Limitations: Static separate curves without governing physical interdependence or interactive sliders for threshold modulation.",
    },

    enrichmentStrategy: {
      addedContext: [
        "Photometric formulation: Inverse-Square Law E = (I * cos(θ)) / d²",
        "Polar luminous intensity model: I(θ) = I₀ * cosⁿ(θ)",
        "Interactive control parameters (Sliders): Peak Candela (I₀), mounting height (h), and beam concentration index (n)",
        "Parametric equation structuring for real-time slider manipulation",
      ],
      principlesApplied: [
        "Mathematical Physics Grounding",
        "Interactive Parameterization (Real-Time Sliders)",
        "Visual Shading & Lux Distribution Regions",
      ],
    },

    fewShotPrompt: `Elaborate on the details of Wi-Fi Graph → Light Graph → Threshold → Interactive Control.`,

    fewShotOutput: {
      title: "Refined Output (Few-Shot Prompting)",
      description:
        "Comprehensive mathematical model linking RF signal loss to photometric illuminance with dynamic sliders for variable height and beam angles.",
      type: "image",
      content: "/assets/images/fewshot/desmos.webp",
      previewUrl: "/assets/images/fewshot/desmos.webp",
      highlights: [
        "Mathematically precise simulation of the Inverse-Square Law coupled with RF attenuation curves",
        "Dynamic sliders (h, I₀, n, W_T, L_T) for real-time adjustments of mounting height, beam concentration, and thresholds",
        "Adaptive brightness function B(x) dynamically compensating for distance from the Wi-Fi mesh node",
      ],
    },

    reflection: {
      comparisonSummary:
        "Transforming a rudimentary cone into an illumination engineering tool enables true photometric lux calculations on target architectural planes.",
      keyDifferences: [
        {
          aspect: "Physical Fidelity",
          zeroShot:
            "Standard uncalibrated parabola lacking physical measurement units",
          fewShot:
            "Photometric equation computing true lux values from candela and physical distance",
        },
        {
          aspect: "Interactivity",
          zeroShot: "Static unadjustable graph",
          fewShot:
            "Full slider set (h, I₀, n) for instant real-time beam and height adjustments",
        },
        {
          aspect: "Engineering Utility",
          zeroShot: "Unusable for lighting design specifications",
          fewShot:
            "Directly applicable by lighting engineers to evaluate luminaire spacing criteria",
        },
      ],
      pedagogicalInsights: [
        "LLMs possess extensive mathematical physics knowledge but require domain terms like 'Lambertian cosine falloff' or 'FWHM' to activate rigorous formulas.",
        "Specifying slider variable names in few-shot templates generates clean, error-free Desmos syntax ready for instant calculation.",
      ],
      promptEngineeringTakeaways:
        "Supplying mathematical constraints and governing physical laws transitions the AI from a simple curve drawer into a rigorous computational simulation partner.",
    },
  },

  {
    id: "mermaid",
    name: "Mermaid",
    category: "System Topology & Network Flow",
    iconName: "GitBranch",
    overview:
      "Modeling the decentralized LuminaMesh architecture using Mermaid to represent ESP-NOW topology, fast roaming, and self-healing route failover.",
    objective:
      "LuminaMesh Network Architecture\n• Topology: Decentralized Multi-Hop Mesh Network\n• Protocols: ESP-NOW 2.4GHz & Dynamic Leader Election\n• Reliability: Autonomous Fallback & Self-Healing Routing",

    zeroShotPrompt:
      "Write a Mermaid diagram code for the workflow of a Wi-Fi router lamp.",

    zeroShotOutput: {
      title: "Initial Output (Zero-Shot)",
      description:
        "Basic centralized star topology flowchart with rudimentary decision branches and no mesh redundancy.",
      type: "image",
      content: "/assets/images/zeroshot/mermaid.webp",
      previewUrl: "/assets/images/zeroshot/mermaid.webp",
      notes:
        "Limitations: Simplistic single-node structure with coarse signal levels (Strong/Medium/Weak), lacking 802.11k/v fast roaming and thermal cutoff safeguards.",
    },

    enrichmentStrategy: {
      addedContext: [
        "Decentralized topology: Peer-to-Peer Multi-hop Mesh (IEEE 802.11s / ESP-NOW)",
        "Dynamic leader election: Leader node failover with 500ms heartbeat monitoring",
        "Target latency boundaries: < 12ms for local relay, < 15ms for circadian sync",
        "Lumina semantic styling classes: Amber glow #E6A756 on obsidian #0A0A0A",
      ],
      principlesApplied: [
        "Distributed Fault-Tolerant Topology",
        "Micro-Latency Edge Protocol Specifications",
        "Mermaid ClassDef Semantic Theme Styling",
      ],
    },

    fewShotPrompt: `Add two decision loops:Wi-Fi Signal: {RSSI < -65 dBm?} If yes, trigger an 802.11k/v Fast BSS Transition to roam the client to the low-profile Satellite Unit.Lighting Control: {Ambient Light < 30 Lux?} If yes, the MCU commands the PWM Dimmer to initiate the 2200K Sunset Glowing mode on the Double-Helix core. If the bulb temperature {Temp > 60°C?}, enter the Thermal Throttling loop to reduce brightness by 15%.`,

    fewShotOutput: {
      title: "Refined Output (Few-Shot Prompting)",
      description:
        "Fully architected decentralized mesh state machine incorporating autonomous self-healing routes, ambient lux dimming, and thermal safeguards.",
      type: "image",
      content: "/assets/images/fewshot/mermaid.webp",
      previewUrl: "/assets/images/fewshot/mermaid.webp",
      highlights: [
        "IEEE 802.11k/v Fast BSS Transition triggered when RSSI falls below -65 dBm to roam to Satellite Units",
        "Automated ambient lux sensor trigger (< 30 Lux) engaging the 2200K Sunset Glowing mode",
        "Embedded safety loop executing thermal throttling when the double-helix core exceeds 60°C",
      ],
    },

    reflection: {
      comparisonSummary:
        "Grounding the prompt in ESP-NOW network protocols and automated failover rules transformed a crude flowchart into an enterprise IoT systems architecture.",
      keyDifferences: [
        {
          aspect: "Algorithmic Complexity",
          zeroShot:
            "Linear flowchart with crude qualitative signal decisions (Strong/Medium/Weak)",
          fewShot:
            "Multi-loop state machine handling Wi-Fi roaming, lux dimming, and thermal safety",
        },
        {
          aspect: "Engineering Standards",
          zeroShot: "No mention of RF protocols or empirical thresholds",
          fewShot:
            "Explicit IEEE 802.11k/v, -65 dBm RSSI, 30 Lux ambient trigger, and 60°C cutoff",
        },
        {
          aspect: "Implementation Readiness",
          zeroShot: "Abstract conceptual diagram",
          fewShot:
            "Directly implementable into LuminaMesh ESP32 production firmware",
        },
      ],
      pedagogicalInsights: [
        "Declaring subgraphs and diagram directions (e.g., 'direction TB') within prompts prevents tangled, illegible node connections.",
        "Pre-defining classDef style rules enables the LLM to output production-ready diagrams matching brand visual design.",
      ],
      promptEngineeringTakeaways:
        "Incorporating protocol specifications and state-transition conditions shifts Mermaid generation from conceptual sketches into definitive IoT system blueprints.",
    },
  },

  {
    id: "latex",
    name: "LaTeX Typesetting",
    category: "Academic & Mathematical Formulation",
    iconName: "BookOpen",
    overview:
      "Rigorous mathematical derivation of solid angles, luminous flux integration, and electro-optical/RF co-design specifications typeset in LaTeX.",
    objective:
      "Total Luminous Flux Integration\n• Parameter: Total Luminous Flux (Φ)\n• Coordinate System: Spherical Coordinates (r, θ, φ)\n• Field Function: Axially Symmetric Intensity Distribution I(θ)",

    zeroShotPrompt:
      "Provide a LaTeX code for the specifications of a glass-dome Wi-Fi router lamp.",

    zeroShotOutput: {
      title: "Initial Output (Zero-Shot)",
      description:
        "A single unformatted equation lacking solid angle integration, spherical coordinate transformations, and academic structure.",
      type: "image",
      content: "/assets/images/zeroshot/latex.webp",
      previewUrl: "/assets/images/zeroshot/latex.webp",
      notes:
        "Limitations: Rudimentary single-page draft with basic inline formulas and no peer-reviewed manuscript formatting.",
    },

    enrichmentStrategy: {
      addedContext: [
        "Differential solid angle formulation: dΩ = sin(θ) dθ dφ",
        "Axially symmetric luminous intensity profile: I(θ)",
        "Formatting standards: IEEE Two-Column Technical Report format with explicit parameter declarations",
        "Typesetting conventions: align* environments and rigorous dimensional analysis",
      ],
      principlesApplied: [
        "Multivariate Calculus Integration Formulation",
        "Standards-Compliant Typesetting (CIE 1987 / IEEE Format)",
        "Step-by-Step Algebraic Derivation",
      ],
    },

    fewShotPrompt: `Add the section title 'Electro-Optical and RF Co-Design Specification for LuminaMesh Ambient Nodes' with an Abstract, and format it into a 2-column layout to keep it concise within a single page.`,

    fewShotOutput: {
      title: "Refined Output (Few-Shot Prompting)",
      description:
        "Complete publication-grade LaTeX manuscript deriving total lumen equations with an electro-optical and RF co-design defense specification.",
      type: "image",
      content: "/assets/images/fewshot/latex.webp",
      previewUrl: "/assets/images/fewshot/latex.webp",
      highlights: [
        "Formatted in standard IEEE Two-Column academic layout complete with Abstract and structured sections",
        "Formulates the electro-optical and RF co-design principles of the LuminaMesh ambient node",
        "Comprehensive physical parameters detailing luminaire geometry, luminous intensity, and RF signal strength (RSSI)",
      ],
    },

    reflection: {
      comparisonSummary:
        "Providing structured derivation steps and coordinate definitions elevates the output from high school math into peer-reviewed research caliber.",
      keyDifferences: [
        {
          aspect: "Document Layout",
          zeroShot:
            "Unstructured single-column draft lacking scholarly hierarchy",
          fewShot:
            "Official IEEE Two-Column layout featuring Abstract, Sections, and formatted math blocks",
        },
        {
          aspect: "Theoretical Completeness",
          zeroShot: "Single isolated equation without system definition",
          fewShot:
            "Comprehensive electro-optical & RF co-design equations with full parameter nomenclature",
        },
        {
          aspect: "Publication Readiness",
          zeroShot: "Informal scratchpad formula",
          fewShot:
            "Ready for submission as an official defense technical paper",
        },
      ],
      pedagogicalInsights: [
        "Directing the model to include 'step-by-step derivations' forces the use of aligned math environments with correct spacing.",
        "Enforcing explicit physical units [Lumens, lm, cd] triggers internal dimensional analysis in the model, preventing unit errors.",
      ],
      promptEngineeringTakeaways:
        "Role and Publication Standard Prompting compels the LLM to adopt mathematical rigor appropriate for peer-reviewed academic literature.",
    },
  },

  {
    id: "notebooklm",
    name: "NotebookLM Synthesis",
    category: "Knowledge Synthesis & Research Grounding",
    iconName: "FileText",
    overview:
      "Extracting and synthesizing architectural lighting standards (IESNA, CIE, WELL Building Standard v2) into actionable engineering matrices using NotebookLM.",
    objective:
      "International Lighting Standards Synthesis\n• Reference Baselines: WELL Standard v2 & IESNA Handbook\n• Core Scope: Circadian Lighting Design (EML / CS)\n• Architectural Zones: Living Space, Workspace, Bedroom",

    zeroShotPrompt:
      "Summarize all the key features and highlights of the Lumina Mesh lamp.",

    zeroShotOutput: {
      title: "Initial Output (Zero-Shot)",
      description:
        "High-level marketing summary of brightness lacking building standard citations and empirical metric benchmarks.",
      type: "image",
      content: "/assets/images/zeroshot/notebooklm.webp",
      previewUrl: "/assets/images/zeroshot/notebooklm.webp",
      notes:
        "Limitations: Consumer product overview lacking architectural depth, human health circadian factors, and invisible tech engineering value.",
    },

    enrichmentStrategy: {
      addedContext: [
        "Primary source grounding: WELL Building Standard v2 (Feature L03: Circadian Lighting Design)",
        "Visual comfort standards: IESNA Lighting Handbook 10th Edition & EN 12464-1",
        "Key quantitative metrics: Equivalent Melanopic Lux (m-EDI), CRI Ra ≥ 90, R9 ≥ 50, UGR < 16",
        "Structured output matrix: Quantitative benchmark table coupled with LuminaMesh protocol control guidelines",
      ],
      principlesApplied: [
        "Source Grounding & Citation Framing",
        "Multi-Metric Comparative Synthesis",
        "Actionable Architectural Engineering Guidelines",
      ],
    },

    fewShotPrompt: `Summarize all the key highlights of the Lumina Architectural Systems, incorporating additional details and simulating real-world use-case scenarios.`,

    fewShotOutput: {
      title: "Refined Output (Few-Shot Prompting)",
      description:
        "High-level architectural engineering synthesis establishing empirical compliance metrics and mesh network control strategies.",
      type: "image",
      content: "/assets/images/fewshot/notebooklm.webp",
      previewUrl: "/assets/images/fewshot/notebooklm.webp",
      highlights: [
        "Synthesizes the 'Invisible Tech' philosophy merging telecommunications hardware into Modern Japandi aesthetics",
        "Structured 5-slide defense deck outlining problem statements, hardware anatomy, and circadian wellness",
        "Engineered for professional presentation before academic evaluation committees and industry reviewers",
      ],
    },

    reflection: {
      comparisonSummary:
        "Grounded source corpus framing and matrix constraints prevent superficial summaries, generating verifiable technical benchmarks for green building certification (WELL / LEED).",
      keyDifferences: [
        {
          aspect: "Depth of Analysis",
          zeroShot:
            "Broad commercial sales highlights of desk lamp and Wi-Fi features",
          fewShot:
            "Deep synthesis of invisible technology seamlessly merging RF engineering with Japandi minimalism",
        },
        {
          aspect: "Presentation Structure",
          zeroShot: "Single generic introductory overview",
          fewShot:
            "Structured 5-slide architecture: Design Concept, Hardware Anatomy, Network Engineering, and Circadian Health",
        },
        {
          aspect: "Academic Defense Readiness",
          zeroShot: "Elementary summary unsuited for rigorous technical review",
          fewShot:
            "Defense-ready presentation deck prepared for faculty and peer evaluation",
        },
      ],
      pedagogicalInsights: [
        "NotebookLM achieves peak analytical precision when given an authoritative persona paired with specific architectural standards.",
        "Demanding output as a Markdown Table with empirical scientific columns prevents verbose, unsubstantiated prose.",
      ],
      promptEngineeringTakeaways:
        "Grounding & Matrix Constraint Prompting transforms generative AI from an imaginative narrator into an evidence-backed professional research analyst.",
    },
  },
];
