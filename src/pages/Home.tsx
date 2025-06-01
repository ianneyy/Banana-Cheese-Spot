import { Hero } from "@/components/ui/hero-with-image-text-and-two-buttons";
import {About} from "@/pages/About";
import { Contact } from "./Contact";
function Home() {
  return (
    <div className="block">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export { Home };
