export type DetailTab = {
  label: string;
  items: { title: string; text: string }[];
};

export type Project = {
  id: string;
  eyebrow: string;
  name: string;
  summary: string;
  highlights?: string[];
  /** Tabbed write-up shown instead of the highlights. */
  tabs?: DetailTab[];
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
  /** Label for the live link when it's the project's main action (shown as a button). */
  liveLabel?: string;
  /** Optional proof-of-concept / prototype deployment, shown alongside the live link. */
  pocUrl?: string;
  repoUrl?: string;
};

// Vite serves /public at the base URL; build the path with BASE_URL so it
// resolves correctly under the GitHub Pages "/portfolio/" subpath.
const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

export const featured: Project = {
  id: "villageos",
  eyebrow: "Featured project",
  name: "VillageOS",
  summary:
    "An AI-powered family OS that turns scattered parent communication (WhatsApp threads, PDF newsletters, photos of flyers) into calendar events with action items. Built end to end: front end, back end, data, infrastructure, CI/CD and LLM evals.",
  tabs: [
    {
      label: "Product details",
      items: [
        {
          title: "Measured accuracy",
          text: "Every change to extraction runs against a golden-dataset eval harness, so accuracy is measured before it ships.",
        },
        {
          title: "Mobile friendly",
          text: "The whole flow works on a phone, where most school messages arrive: forward a thread or snap a flyer and get the events.",
        },
        {
          title: "Low latency",
          text: "Extraction runs on fast inference, with a live PostHog A/B test between models to balance speed and accuracy.",
        },
        {
          title: "Automatic retries",
          text: "If a model response fails schema validation, the request is retried automatically, so users never see a broken event.",
        },
        {
          title: "Fast, safe releases",
          text: "A CI/CD pipeline with an end-to-end test suite runs on every change, so new features ship quickly without breaking the core flow.",
        },
      ],
    },
    {
      label: "Technical details",
      items: [
        {
          title: "CI/CD and testing",
          text: "GitHub Actions tests and deploys on every push and authenticates to AWS with OIDC, so there are no stored keys. The end-to-end suite has to pass before a deploy.",
        },
        {
          title: "Security and compliance",
          text: "Supabase auth with row-level security keeps each family's data isolated at the database level.",
        },
        {
          title: "Logging",
          text: "The FastAPI back end runs on AWS Lambda, with logs and errors in CloudWatch.",
        },
        {
          title: "OpenAI API",
          text: "Text and image extraction through the OpenAI API against strict Pydantic v2 schemas. The TypeScript client mirrors the same shapes, so the contract holds at the API edge.",
        },
      ],
    },
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
  liveUrl: "https://www.villageos.co.uk",
  pocUrl: "https://village-os-poc.vercel.app/create_event",
  repoUrl: "https://github.com/AdamMrotek/VillageOS",
};

/** Additional AI projects, shown beneath the featured one. */
export const aiProjects: Project[] = [
  {
    id: "metafora",
    eyebrow: "Voice agent",
    name: "Metafora",
    summary:
      "Clinical voice intake. A patient opens a link and talks to an AI interviewer, and the clinician gets a structured, signed intake record with red flags escalated live.",
    tabs: [
      {
        label: "Product details",
        items: [
          {
            title: "Safety first",
            text: "The agent is required to raise urgent and critical flags and escalate them for human review.",
          },
          {
            title: "Live clinician dashboard",
            text: "Red flags reach the clinician's dashboard live while the call is still running.",
          },
          {
            title: "Low latency",
            text: "Each turn is a single pass, so the interviewer replies quickly and the conversation feels natural.",
          },
          {
            title: "Full ledger",
            text: "Every turn of the conversation and every change to the intake record is logged, so a clinician can trace how each record was built.",
          },
          {
            title: "Mobile friendly",
            text: "Patients join from a link on their phone, with nothing to install.",
          },
        ],
      },
      {
        label: "Technical details",
        items: [
          {
            title: "Voice pipeline",
            text: "Pipecat and LiveKit carry the real-time audio. The spoken reply travels inside the update_intake tool call.",
          },
          {
            title: "Flexible models and providers",
            text: "The model and its provider are configuration, not code (Groq today for fast responses), so either can be swapped without touching the conversation logic.",
          },
          {
            title: "Typed contracts",
            text: "Pydantic models generate the TypeScript types, and the auth module is shared across services.",
          },
          {
            title: "Live updates",
            text: "Flags are pushed to the clinician dashboard over server-sent events.",
          },
          {
            title: "Deployment",
            text: "The services run in Docker containers on Fly.io, with Postgres on Supabase and the front end on Vercel.",
          },
        ],
      },
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
    ],
    desktopImage: asset("Patien_View.webp"),
    mobileImage: asset("Moblie_conversation.webp"),
    desktopAspect: 2730 / 1530,
    mobileAspect: 744 / 1390,
    liveUrl: "https://metafora-call.vercel.app/",
    liveLabel: "Speak with Metafora",
    repoUrl: "https://github.com/AdamMrotek/Metafora",
  },
];

export const projects: Project[] = [
  {
    id: "showroom",
    eyebrow: "Photo tool in daily use",
    name: "Showroom",
    summary:
      "A light touch-up for amateur real-estate photos. It straightens the frame, brightens the room, removes clutter and improves the window view, with the same look across a listing. It also has a browser-only converter and size optimiser. I built it quickly for my dad's estate-agent work, where it replaced a paid subscription. One user, hardcoded login.",
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
