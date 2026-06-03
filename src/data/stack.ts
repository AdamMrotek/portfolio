export type StackGroup = {
  label: string;
  items: string[];
};

export const stack: StackGroup[] = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "Vue 3",
      "React 19",
      "Nuxt",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Node.js", "REST · JWT"],
  },
  {
    label: "AI",
    items: [
      "Applied LLM product engineering",
      "Eval harness",
      "Claude / MCP",
      "OpenAI SDK",
      "AWS Bedrock",
    ],
  },
  {
    label: "Data",
    items: ["PostgreSQL / Supabase", "Firebase", "MongoDB"],
  },
  {
    label: "Testing & Tooling",
    items: ["Vitest", "Playwright", "Storybook", "Docker", "Vite", "Figma"],
  },
  {
    label: "Infra & DevOps",
    items: ["AWS", "GCP", "Vercel", "Git · GitHub Actions", "CI/CD"],
  },
];
