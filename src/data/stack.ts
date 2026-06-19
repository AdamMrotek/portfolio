export type StackGroup = {
  label: string;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "React 19",
      "Next.js",
      "TanStack Query",
      "shadcn/ui",
      "Tailwind CSS",
      "Vue 3",
      "Nuxt",
    ],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "REST · JWT"],
  },
  {
    label: "AI",
    items: [
      "Applied LLM product engineering",
      "Structured extraction (Pydantic · instructor)",
      "Eval harness",
      "OpenAI · Groq",
      "Claude / MCP",
      "AWS Bedrock",
    ],
  },
  {
    label: "Data",
    items: ["PostgreSQL · Supabase", "Firebase", "MongoDB"],
  },
  {
    label: "Testing & Tooling",
    items: ["Vitest", "Playwright", "Storybook", "Docker", "Vite", "Figma"],
  },
  {
    label: "Infra & DevOps",
    items: ["AWS Lambda · SAM", "GitHub Actions · OIDC", "GCP", "Vercel", "PostHog", "CI/CD"],
  },
];
