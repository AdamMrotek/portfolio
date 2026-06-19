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
  "Full-stack engineer with ~4 years of commercial experience building complex, user-facing web applications end to end. Strong in TypeScript, React and Next.js with a modern front-end toolchain (TanStack Query, shadcn/ui) and hands-on backend in Python / FastAPI. Proven track record of owning delivery from product spec to production, working closely with design, and an active focus on building real products on top of LLMs.";

export const experience: ExperienceEntry[] = [
  {
    id: "croud",
    role: "Full-Stack Engineer",
    company: "Croud",
    logo: "croud_logo.jpeg",
    period: "Jul 2023 – Mar 2026",
    location: "London · Hybrid",
    summary:
      "Full-stack delivery across Croud's marketing-automation suite — owning front-end features and supporting FastAPI endpoints, co-architecting the TypeScript component design system (React + Tailwind + shadcn/ui + Storybook), and modernising legacy surfaces to type-safe patterns. Took solo ownership of features and entire internal products from spec through to production, alongside high-stakes client-facing platform work and AI tooling that featured in client pitches.",
    sections: [
      {
        label: "Selected work",
        bullets: [
          {
            lead: "Croud Control — core marketing platform (3,000+ users).",
            text: "Owned front-end delivery across a marketing-automation suite serving 3,000+ users. Co-architected the TypeScript component design system (React + Tailwind + shadcn/ui + Storybook) and modernised legacy surfaces to type-safe patterns, accelerating feature delivery across product areas.",
          },
          {
            lead: "Social Influencer Platform — in-house build.",
            text: "Technical owner of key React (TanStack Query + shadcn/ui) front-end features and their supporting FastAPI backend for an influencer-marketing platform — an internal build that replaced a multi-million-pound third-party agency quote — delivering user-facing surfaces and API data modelling against strict Figma specs.",
          },
          {
            lead: "Taxonomy Tool — marketing-tag alignment.",
            text: "Built an internal tag-alignment app (front-end plus supporting backend) projected to save ~£100k/month by removing cross-team tagging inconsistency and cleaning data for downstream analytics.",
          },
          {
            lead: "AI Tooling — client pitches & DevEx.",
            text: "Built the front-end apps that showcased internal AI tools and agentic pipelines in client pitches, and shipped a custom Claude sub-agent that converts Figma designs directly into the codebase — driving cross-team adoption and supporting new-business upsell.",
          },
        ],
      },
      {
        label: "Cross-cutting practice",
        bullets: [
          {
            lead: "Platform modernization:",
            text: "migration of legacy surfaces onto type-safe React + shadcn/ui + Tailwind, focused on reusable component libraries that lift team-wide velocity.",
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
            text: "close Figma-to-code collaboration with UX, including the Social Influencer Platform where pixel-perfect fidelity was a contractual quality bar.",
          },
        ],
      },
    ],
    stack:
      "React · TypeScript · Next.js · TanStack Query · shadcn/ui · Tailwind · Vue 3 · FastAPI · Python · Docker · Claude / MCP · Figma · Storybook",
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
          {
            text: "Mentored junior engineers through code reviews and pairing sessions, helping raise code quality and shorten onboarding.",
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
    period: "Mar 2018 – Sep 2021",
    location: "London",
    kind: "pre",
    summary:
      "Pre-software career in architecture — designed and contributed to projects for airports and data centers, applying platform-based, systems-thinking design principles. Relevant as the origin of how I reason about large, interdependent systems.",
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
    issuer: "Anthropic Academy · AWS",
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
