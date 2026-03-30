import { About } from "@/components/about";
import { BackToTop } from "@/components/back-to-top";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { Projects } from "@/components/projects";
import { Reveal } from "@/components/reveal";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal delay={40}>
        <About />
      </Reveal>
      <Reveal delay={60}>
        <Skills />
      </Reveal>
      <Reveal delay={80}>
        <Projects />
      </Reveal>
      <Reveal delay={100}>
        <Journey />
      </Reveal>
      <Reveal delay={120}>
        <Certifications />
      </Reveal>
      <Reveal delay={140}>
        <Contact />
      </Reveal>
      <Footer />
      <BackToTop />
    </main>
  );
}
