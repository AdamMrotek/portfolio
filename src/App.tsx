import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { FeaturedProject } from "./components/FeaturedProject";
import { AIProjects } from "./components/AIProjects";
import { Experience } from "./components/Experience";
import { Stack } from "./components/Stack";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { useScrollSnap } from "./hooks/useScrollSnap";
import { useSectionStack } from "./hooks/useSectionStack";
import { useDeckNavigation } from "./hooks/useDeckNavigation";

export default function App() {
  useSectionStack();
  useDeckNavigation();
  useScrollSnap();

  return (
    <>
      <Nav />
      {/* data-deck: every direct <section> child is a card in the section stack */}
      <main data-deck>
        <Hero />
        <FeaturedProject />
        <AIProjects />
        <Experience />
        <Stack />
        <About />
        <Contact />
      </main>
    </>
  );
}
