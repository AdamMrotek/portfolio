export type StackItem = {
  name: string;
  /** Core skill: shown larger and in ink. */
  key?: boolean;
  /** Where it's been used, shown on hover / tap. */
  note?: string;
};

export type StackGroup = {
  label: string;
  items: StackItem[];
};

export const stack: StackGroup[] = [
  {
    label: "Frontend",
    items: [
      {
        name: "TypeScript / JavaScript",
        key: true,
        note: "My daily driver in professional settings. I used it to build dashboards and AI tools at Croud and embedded apps at Hullabalook.",
      },
      {
        name: "React",
        key: true,
        note: "The core of my front-end work: Croud's component design system and product UI, the apps at Hullabalook, and the VillageOS and Metafora front ends.",
      },
      {
        name: "Next.js",
        key: true,
        note: "VillageOS runs on Next.js 16, and so does Showroom, the photo tool I built for my dad's estate-agent work.",
      },
      { name: "TanStack Query", note: "Server state at Croud and in VillageOS." },
      { name: "Vue 3", note: "Used at Croud alongside React, and with Vuex at Hullabalook." },
    ],
  },
  {
    label: "Backend",
    items: [
      {
        name: "Python",
        key: true,
        note: "Used to build data ingestion pipelines and REST APIs for AI tools at Croud, and the back ends of my VillageOS and Metafora AI projects.",
      },
      {
        name: "FastAPI",
        key: true,
        note: "Supporting endpoints at Croud, the VillageOS API on AWS Lambda, and the Metafora services.",
      },
      { name: "Node.js" },
      { name: "REST, JWT" },
    ],
  },
  {
    label: "AI",
    items: [
      {
        name: "LLM product engineering",
        key: true,
        note: "VillageOS turns parent messages into calendar events with an LLM, and Metafora runs a live clinical voice interview with one.",
      },
      {
        name: "Structured extraction (Pydantic, instructor)",
        key: true,
        note: "VillageOS extracts events from text and images against strict Pydantic schemas.",
      },
      { name: "Eval harness", note: "A golden-dataset eval harness tracks VillageOS extraction accuracy." },
      {
        name: "OpenAI, Groq",
        note: "Both power VillageOS, with a live A/B test between extraction models. Metafora runs on Groq.",
      },
      { name: "CodeRabbit" },
    ],
  },
  {
    label: "Data",
    items: [
      {
        name: "PostgreSQL, Supabase",
        key: true,
        note: "Supabase Postgres with auth and row-level security behind VillageOS, and Postgres in Metafora.",
      },
      { name: "Firebase", note: "The back end of Broccoli, my meal-planning app." },
      { name: "MongoDB" },
    ],
  },
  {
    label: "Testing & Tooling",
    items: [
      {
        name: "Docker",
        key: true,
        note: "My development setup at Croud, and VillageOS and Metafora are built in containers.",
      },
      { name: "Vitest", note: "Unit tests at Croud." },
      { name: "Playwright", note: "End-to-end tests at Croud." },
      { name: "Storybook", note: "Component tests and docs for the Croud design system." },
    ],
  },
  {
    label: "Infra & DevOps",
    items: [
      {
        name: "AWS (Lambda, CloudWatch, IAM, CloudFormation)",
        key: true,
        note: "The VillageOS FastAPI back end runs on Lambda, deployed as CloudFormation stacks with SAM, with IAM roles and CloudWatch logs.",
      },
      { name: "GitHub Actions CI/CD, OIDC", note: "CI/CD for VillageOS, and pipelines at Hullabalook." },
      { name: "GCP", note: "Data work at Hullabalook ran on GCP." },
      { name: "Vercel", note: "Hosts the Metafora front end and the VillageOS prototype." },
    ],
  },
];
