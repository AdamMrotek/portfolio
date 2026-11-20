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
  location: "United Kingdom, hybrid or remote",
  linkedin: "https://www.linkedin.com/in/adam-mrotek",
};

export const positioning =
  "Senior software engineer with 4+ years of commercial experience leading front-end delivery on complex web applications, from TypeScript design systems to hands-on Python and FastAPI back ends. I work mostly in React and Next.js with TanStack Query and shadcn/ui, and I'm currently running a live AI product built on LLMs.";

export const experience: ExperienceEntry[] = [
  {
    id: "croud",
    role: "Full-Stack Engineer",
    company: "Croud",
    logo: "croud_logo.jpeg",
    period: "Jul 2023 – Mar 2026",
    location: "London, hybrid",
    summary:
      "Delivered across Croud's marketing automation and AI tools, used by 3,000+ people. I co-architected the TypeScript design system, took features and whole internal products from spec to production, and built the AI tooling used in client pitches.",
    sections: [
      {
        label: "Selected work",
        bullets: [
          {
            lead: "Croud Control, the core marketing platform.",
            text: "Owned front-end delivery for the main product. Co-architected the TypeScript component design system (React, Tailwind, shadcn/ui, Storybook) and moved legacy screens to type-safe patterns, which sped up feature work across product areas.",
          },
          {
            lead: "Social Influencer Platform.",
            text: "Early engineer on an in-house influencer-marketing platform that replaced a £17M quote from an outside agency. Built user profiles, dashboards and registration-of-interest flows to strict Figma specs against the FastAPI back end, and set up a Figma-to-code pipeline.",
          },
          {
            lead: "Taxonomy Tool.",
            text: "Built an internal app for aligning marketing tags, front end and supporting back end. It was projected to save about £100k a month by removing tagging inconsistencies between teams and cleaning data for analytics.",
          },
          {
            lead: "AI tooling.",
            text: "Built the front-end apps that demoed internal AI tools and agent pipelines in client pitches, and shipped a Claude sub-agent that turns Figma designs into code in our codebase. Other teams adopted it, and it helped win new business.",
          },
        ],
      },
      {
        label: "Cross-cutting practice",
        bullets: [
          {
            lead: "Platform modernisation:",
            text: "moved legacy screens onto type-safe React, shadcn/ui and Tailwind, with reusable component libraries the whole team builds on.",
          },
          {
            lead: "Developer tooling:",
            text: "built internal Claude and MCP skills and sub-agents that automate repetitive coding tasks and enforce code-quality standards.",
          },
          {
            lead: "Automated QA:",
            text: "unit tests in Vitest, end-to-end tests in Playwright and component tests in Storybook, all run in Docker.",
          },
          {
            lead: "Design partnership:",
            text: "worked closely with UX from Figma to code, including on the Social Influencer Platform, where pixel-perfect fidelity was written into the contract.",
          },
        ],
      },
    ],
    stack:
      "React, TypeScript, Next.js, TanStack Query, shadcn/ui, Tailwind, Vue 3, FastAPI, Python, Docker, Claude, MCP, Figma, Storybook",
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
            text: "Built applications in React, Vue, Vuex and Nuxt, plus canvas tooling with Fabric.js and the Canvas API for retail discovery products.",
          },
          {
            text: "Cleaned up unstructured and incomplete datasets with Python, Google Colab and GCP to improve data accuracy.",
          },
          {
            text: "Prototyped features that drove successful upsells across multiple clients.",
          },
          {
            text: "Raised Lighthouse and SEO scores.",
          },
          {
            text: "Mentored junior engineers through code reviews and pairing sessions, helping raise code quality and shorten onboarding.",
          },
        ],
      },
    ],
    stack: "JavaScript, React, Vue, Vuex, Nuxt, Fabric.js, Canvas API, Python, GCP, GitHub Actions",
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
      "My career before software. I worked on airport and data-centre projects using platform-based design, which is where I learned to reason about large, interdependent systems.",
    stack: "BIM, Revit, AutoCAD, parametric design, Adobe Creative Suite",
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
    issuer: "Anthropic Academy and AWS",
    date: "May 2026",
    summary:
      "Building AI applications with Claude on Amazon Bedrock: the Bedrock API, prompt engineering and evaluations, tool use, retrieval-augmented generation, the Model Context Protocol and agents.",
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
    qualification: "MSc Architecture",
    institution: "Politechnika Poznańska (Poznan University of Technology)",
    period: "2011–2017",
    note: "Focus: parametric design, BIM",
  },
  {
    qualification: "Erasmus",
    institution: "Università degli Studi di Firenze",
    period: "2013",
  },
];
