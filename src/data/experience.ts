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
  "Software engineer with 4+ years of commercial experience leading front-end delivery on complex web applications, from TypeScript design systems to hands-on Python and FastAPI back ends.\nI'm currently building production AI\u00a0apps end\u00a0to\u00a0end.";

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
        bullets: [
          {
            lead: "AI tooling.",
            text: "Planned internal AI tools and agent pipelines with stakeholders, then built them end to end: TypeScript and React interfaces on a Python FastAPI back end, all Dockerised. The apps were used to demo our AI work in client pitches.",
          },
          {
            lead: "Social Influencer Platform.",
            text: "Early engineer on an in-house influencer-marketing platform that replaced a £17M quote from an outside agency. Worked closely with the designer to build user profiles, dashboards and registration-of-interest flows to strict Figma specs, and contributed to the Python FastAPI back end behind them. Set up a Figma-to-TypeScript pipeline and delivered against a tight deadline.",
          },
          {
            lead: "Taxonomy Tool.",
            text: "Built an internal app for aligning marketing tags, covering both the React front end and the supporting Python FastAPI back end. It was projected to save about £100k a month by removing tagging inconsistencies between teams and cleaning data for analytics.",
          },
          {
            lead: "Croud Control, the core marketing platform.",
            text: "Delivered features end to end and migrated existing features to TypeScript.",
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
            lead: "Apps.",
            text: "Built applications in React, Vue, Vuex and Nuxt, plus canvas tooling with Fabric.js and the Canvas API for retail discovery products, and raised their Lighthouse and SEO scores.",
          },
          {
            lead: "Data pipelines.",
            text: "Cleaned up unstructured and incomplete datasets with Python, Google Colab and GCP to improve data accuracy.",
          },
          {
            lead: "Prototyping.",
            text: "Prototyped features that drove successful upsells across multiple clients.",
          },
          {
            lead: "Mentoring.",
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
      "My career before software. Platform-based design on large airport and data-centre projects is where I learned to reason about large, interdependent systems.",
    sections: [
      {
        bullets: [
          {
            lead: "BIM automation.",
            text: "Created a BIM automation pipeline.",
          },
          {
            lead: "Airport projects.",
            text: "Worked on projects at Stansted and Heathrow.",
          },
          {
            lead: "Data centre project.",
            text: "Drove multi-discipline coordination between the structural, mechanical and electrical engineers and the architecture team.",
          },
          {
            lead: "Diagrams and planning.",
            text: "Created functional diagrams and prepared presentations for planning permission applications.",
          },
        ],
      },
    ],
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
