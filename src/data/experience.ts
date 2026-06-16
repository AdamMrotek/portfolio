export type Bullet = { lead?: string; text: string };
export type Section = { label?: string; bullets: Bullet[] };

export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary?: string;
  sections?: Section[];
  stack?: string;
  /** Logo filename in /public (e.g. "croud_logo.jpeg"), shown in the timeline node. Falls back to the company initial. */
  logo?: string;
  /** "pre" softens styling for the pre-software architecture career. */
  kind?: "tech" | "pre";
};

export const facts = {
  location: "United Kingdom · Hybrid / Remote",
  linkedin: "https://www.linkedin.com/in/adam-mrotek",
};

export const positioning =
  "Full-stack engineer with 4 years of commercial experience specialising in type-safe UI architectures (TypeScript, Vue 3, React) and robust backend services (Python, FastAPI). Actively focused on applied LLM product engineering — building production-ready autonomous tooling and owning features from technical roadmap through to containerized delivery.";

export const experience: ExperienceEntry[] = [
  {
    id: "croud",
    role: "Full-Stack Engineer",
    company: "Croud",
    logo: "croud_logo.jpeg",
    period: "Jul 2023 – Mar 2026",
    location: "London · Hybrid",
    summary:
      "Full-stack delivery across Croud's marketing-platform suite — owning front-end features and supporting FastAPI endpoints, co-owning the Vue 3 / React + Tailwind + Storybook design system, and migrating legacy Nuxt surfaces to type-safe patterns. Took solo ownership of features and entire internal products from spec through to production, alongside high-stakes client-facing platform work and a parallel investment in AI-aided developer tooling.",
    sections: [
      {
        label: "Selected work",
        bullets: [
          {
            lead: "Croud Control — core marketing platform (3,000+ users).",
            text: "Flagship platform across agency and client teams. Operated as feature owner: scoped with product, built and shipped the frontend with full test coverage, and helped move legacy Nuxt screens onto a modern TypeScript (Vue 3) stack.",
          },
          {
            lead: "Creator Platform — influencer-marketing build.",
            text: "Delivered the internal alternative to a multi-million-pound external agency proposal, built in-house by a five-engineer team. Owned the pixel-perfect responsive frontend (Shadcn) against demanding Figma specs — using the Figma MCP to drive faithful Figma-to-code — and authored the supporting FastAPI endpoints end-to-end, keeping a major client opportunity in-house.",
          },
          {
            lead: "Internal tool interface — frontend, end to end.",
            text: "Built the interface for an internal tool used by agency teams, owning it from roadmap through to full delivery — drafting the product roadmap, running clarifications with stakeholders, and designing and shipping the frontend without a formal PM.",
          },
          {
            lead: "Taxonomy Tool — marketing-tag alignment.",
            text: "Built the frontend (plus supporting backend tweaks) for an internal app that aligns marketing tags across teams — projected to save ~£100k/month (pre-build estimate) by removing tagging inconsistency.",
          },
        ],
      },
      {
        label: "Cross-cutting practice",
        bullets: [
          {
            lead: "Platform modernization:",
            text: "multi-year migration of legacy Nuxt platforms onto Vue 3 + Shadcn + Tailwind, focused on reusable component libraries that lift team-wide velocity.",
          },
          {
            lead: "AI-aided developer tooling (DevEx):",
            text: "engineered internal Claude / MCP “skills” and sub-agents to automate repetitive coding tasks and enforce code-quality standards across the codebase.",
          },
          {
            lead: "Automated QA:",
            text: "testing across the surface area touched — Vitest (unit), Playwright (E2E), Storybook (component) — inside containerized Docker environments.",
          },
          {
            lead: "Design partnership:",
            text: "close Figma-to-code collaboration with UX, including the Creator Platform where pixel-perfect fidelity was a contractual quality bar.",
          },
        ],
      },
    ],
    stack:
      "Vue 3 · TypeScript · Shadcn · Tailwind · Nuxt · FastAPI · Python · Docker · Claude / MCP · Figma · Vitest · Playwright · Storybook",
  },
  {
    id: "hullabalook",
    role: "Customer Engineer",
    company: "Hullabalook",
    logo: "hullabalook_logo.jpeg",
    period: "Apr 2022 – Jul 2023",
    location: "London",
    summary:
      "Built and launched features and multiple apps within cross-functional product teams, shipping through CI/CD pipelines.",
    sections: [
      {
        bullets: [
          {
            text: "Constructed robust applications with React, Vue, Vuex and Nuxt, plus visual / canvas tooling using Fabric.js and the Canvas API for retail discovery products.",
          },
          {
            text: "Investigated programmatic solutions for unstructured and incomplete datasets using Python, Google Colab and GCP to improve data accuracy.",
          },
          {
            text: "Prototyped features that drove successful upsells across multiple clients.",
          },
          {
            text: "Improved Lighthouse / SEO scores to enhance overall app performance.",
          },
        ],
      },
    ],
    stack: "JavaScript · React · Vue · Vuex · Nuxt · Fabric.js · Canvas API · Python · GCP · GitHub Actions",
  },
  {
    id: "bryden-wood",
    role: "Architectural Assistant (Part I & II)",
    company: "Bryden Wood",
    logo: "brydenwoodtechnology_logo.jpeg",
    period: "2015–2016 · 2018–2021",
    location: "London",
    kind: "pre",
    summary:
      "Pre-software career in architecture — relevant as a systems-thinking and platform-design narrative: parametric design, BIM, and reasoning about large, interdependent systems.",
    stack: "BIM · Revit · AutoCAD · Parametric design · Adobe Creative Suite",
  },
];

export type EducationEntry = {
  qualification: string;
  institution: string;
  period: string;
  note?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  summary?: string;
  skills?: string[];
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Claude with Amazon Bedrock",
    issuer: "Anthropic · AWS",
    date: "Issued May 2026",
    summary:
      "Building production-ready AI applications with Claude on Amazon Bedrock — the Bedrock API, prompt engineering and evaluations, tool use, retrieval-augmented generation (RAG), the Model Context Protocol (MCP), and agents.",
    skills: [
      "AWS Bedrock",
      "Claude",
      "Prompt engineering",
      "Evals",
      "Tool use",
      "RAG",
      "MCP",
      "Agents",
    ],
    url: "https://anthropic.skilljar.com/claude-in-amazon-bedrock",
  },
];

export const education: EducationEntry[] = [
  {
    qualification: "MSc, Architecture",
    institution: "Politechnika Poznańska (Poznan University of Technology)",
    period: "2016–2017",
    note: "Focus: parametric design, BIM",
  },
  {
    qualification: "BArch, Architecture",
    institution: "Politechnika Poznańska",
    period: "2011–2015",
  },
  {
    qualification: "Erasmus",
    institution: "Università degli Studi di Firenze",
    period: "2013",
  },
];
