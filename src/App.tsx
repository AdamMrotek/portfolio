import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { FeaturedProject } from "./components/FeaturedProject";
import { AIProjects } from "./components/AIProjects";
import { Experience } from "./components/Experience";
import { Stack } from "./components/Stack";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useScrollSnap } from "./hooks/useScrollSnap";

export default function App() {
  useScrollSnap();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FeaturedProject />
        <AIProjects />
        <Experience />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
