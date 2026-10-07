export type Project = {
  id: string;
  eyebrow: string;
  name: string;
  summary: string;
  highlights?: string[];
  tags: string[];
  image?: string;
  /** Desktop screenshot for the responsive showcase. */
  desktopImage?: string;
  /** Mobile screenshot for the responsive showcase. */
  mobileImage?: string;
  /** Width / height of the screenshots, so the showcase frames match them. */
  desktopAspect?: number;
  mobileAspect?: number;
  /** Optional looping demo clip, revealed in place of the card on request. */
  video?: string;
  /** Optional still frame shown before the demo clip starts playing. */
  videoPoster?: string;
  liveUrl?: string;
  /** Optional proof-of-concept / prototype deployment, shown alongside the live link. */
  pocUrl?: string;
  repoUrl?: string;
};

// Vite serves /public at the base URL; build the path with BASE_URL so it
// resolves correctly under the GitHub Pages "/portfolio/" subpath.
const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

export const featured: Project = {
  id: "villageos",
  eyebrow: "Featured · AI product",
  name: "VillageOS",
  summary:
    "An AI-powered family OS that turns scattered parent communication — WhatsApp threads, PDF newsletters, photos of flyers — into schema-valid calendar events with action items. Built and deployed solo: frontend, backend, data, infrastructure, CI/CD and LLM evals.",
  highlights: [
    "Typed on both sides — Pydantic v2 is the single source of truth for the LLM extraction and FastAPI validation; the TypeScript client mirrors the same shapes, enforcing the contract at the API edge.",
    "Structured AI, not vibes — strict-schema extraction over text + vision, tracked by a golden-dataset eval harness.",
    "Real infra — FastAPI on AWS Lambda, Supabase auth + RLS, with a live PostHog A/B on the extraction model.",
  ],
  tags: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "TanStack Query",
    "shadcn/ui",
    "FastAPI",
    "Pydantic",
    "AWS Lambda",
    "Supabase",
    "OpenAI",
    "Groq",
    "PostHog",
  ],
  image: asset("villageos-events.png"),
  desktopImage: asset("villageos-desktop.png"),
  mobileImage: asset("villageos-mobile.png"),
  video: asset("happy-path-fullres.mp4"),
  videoPoster: asset("happy-path-poster.jpg"),
  liveUrl: "https://www.villageos.co.uk/events",
  pocUrl: "https://village-os-poc.vercel.app/create_event",
  repoUrl: "https://github.com/AdamMrotek/VillageOS",
};

/** Additional AI projects, shown beneath the featured one. */
export const aiProjects: Project[] = [
  {
    id: "metafora",
    eyebrow: "AI project · Voice agent",
    name: "Metafora",
    summary:
      "Clinical voice intake: a patient opens a link and talks to an AI interviewer; the clinician gets a structured, signed intake record with red flags escalated live. A portfolio deployment on synthetic data, not a compliant clinical system.",
    highlights: [
      "Two-layer safety — predefined red-flag phrases are matched before the LLM sees anything, with model escalation as a second detector; flags are pushed to the clinician dashboard live over SSE.",
      "Single-pass turn for low latency — the spoken reply travels inside the update_intake tool call and is released once the record is written, so the call can't end mid-question.",
      "Pydantic models generate the TypeScript types, and the auth module is shared across services.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "Pipecat",
      "LiveKit",
      "Groq",
      "Postgres",
      "Supabase",
      "React",
      "TypeScript",
      "Fly.io",
      "Playwright",
    ],
    desktopImage: asset("Patien_View.webp"),
    mobileImage: asset("Moblie_conversation.webp"),
    desktopAspect: 2730 / 1530,
    mobileAspect: 744 / 1390,
    liveUrl: "https://metafora-call.vercel.app/",
    repoUrl: "https://github.com/AdamMrotek/Metafora",
  },
];

export const projects: Project[] = [
  {
    id: "showroom",
    eyebrow: "AI tool · In real use",
    name: "Showroom",
    summary:
      "A standardised light touch-up for amateur real-estate photos: straighten the frame, brighten the room, remove clutter, improve the window view — with a consistent look across a listing. Includes a browser-only converter and size optimiser. Built quickly for my dad's estate-agent work, where it replaced a paid subscription. One user, hardcoded login.",
    tags: ["Next.js", "React", "TypeScript", "OpenAI", "Tailwind"],
    desktopImage: asset("Real-estate-touchup app.webp"),
    mobileImage: asset("Real-estate-touchap-conversion.webp"),
    desktopAspect: 2378 / 1550,
    mobileAspect: 718 / 1384,
  },
  {
    id: "broccoli",
    eyebrow: "Web app",
    name: "Broccoli",
    summary:
      "A community-driven take on meal-kit services like HelloFresh and Gusto: members browse recipes from an API and the app generates a consolidated grocery list for them.",
    tags: ["React", "Firebase", "Framer Motion", "Hooks", "Context API"],
    image: asset("broccoli-screenshot.jpg"),
    liveUrl: "https://broccoli-55235.firebaseapp.com/",
    repoUrl: "https://github.com/AdamMrotek/Broccoli",
  },
];
