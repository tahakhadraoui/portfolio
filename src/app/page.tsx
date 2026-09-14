import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Certifications } from "@/components/Certifications";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Projects />
        <Stack />
        <Certifications />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
