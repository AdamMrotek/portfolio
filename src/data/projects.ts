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
  /** Optional looping demo clip, revealed in place of the card on request. */
  video?: string;
  /** Optional still frame shown before the demo clip starts playing. */
  videoPoster?: string;
  liveUrl?: string;
  /** Optional proof-of-concept / prototype deployment, shown alongside the live link. */
  pocUrl?: string;
  repoUrl: string;
};

// Vite serves /public at the base URL; build the path with BASE_URL so it
// resolves correctly under the GitHub Pages "/portfolio/" subpath.
const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;

export const featured: Project = {
  id: "villageos",
  eyebrow: "Featured · AI product",
  name: "VillageOS",
  summary:
    "An AI-powered family OS that turns scattered parent communication — WhatsApp threads, PDF newsletters, photos of flyers — into structured calendar events with action items.",
  highlights: [
    "Structured LLM extraction with strict schema validation — built to avoid hallucinated dates.",
    "Golden-dataset eval harness tracking pass rate, latency, and cost across providers.",
    "Typed end-to-end contracts shared across a Next.js front end and FastAPI back end.",
  ],
  tags: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "FastAPI",
    "Python",
    "Pydantic",
    "OpenAI",
    "Supabase",
    "Turborepo",
    "AWS Lambda",
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

export const projects: Project[] = [
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
