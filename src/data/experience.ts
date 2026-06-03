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
  "Full-stack engineer with a frontend lean and 4 years of commercial experience shipping product-grade web apps in London. Strongest in TypeScript, Vue 3 and React, with hands-on backend work in Python (FastAPI) and an active focus on AI-aided developer tooling and applied LLM product engineering.";

export const experience: ExperienceEntry[] = [
  {
    id: "croud",
    role: "Front-end Engineer",
    company: "Croud",
    logo: "croud_logo.jpeg",
    period: "Jul 2023 – Present",
    location: "London · Hybrid",
    summary:
      "Part of a three-person frontend team building Croud's marketing-platform suite, with day-to-day scope spanning the full stack — Vue 3 / TypeScript / Shadcn on the frontend and FastAPI on the backend — plus a parallel investment in AI-aided developer tooling. Took solo ownership of features and entire internal products, from roadmap and scoping through build and delivery, alongside high-stakes client-facing platform work.",
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
            text: "Delivered the internal alternative to a multi-million-pound external agency proposal. Owned the pixel-perfect responsive frontend (Shadcn) against demanding Figma specs — using the Figma MCP to drive faithful Figma-to-code — and authored the supporting API endpoints end-to-end, keeping a major client opportunity in-house.",
          },
          {
            lead: "Internal tool interface — frontend, end to end.",
            text: "Built the interface for an internal tool used by agency teams, owning it from roadmap through to full delivery — drafting the product roadmap, running clarifications with stakeholders, and designing and shipping the frontend without a formal PM.",
          },
          {
            lead: "Taxonomy Tool — full vertical, full-stack.",
            text: "Built both the backend (FastAPI) and the frontend for an internal tool, clearing a feature that had stalled on backend resourcing — schema-touching API work through to the production UI.",
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
    stack: "JavaScript · React · Vue · Vuex · Nuxt · Fabric.js · Canvas API · Python · GCP",
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
  summary?: string;
  skills?: string[];
  url?: string;
};

export const certifications: Certification[] = [
  {
    name: "Claude with Amazon Bedrock",
    issuer: "Anthropic",
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
