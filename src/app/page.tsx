
import Hero from "../../public/components/Hero";
import Navbar from "../../public/components/Navbar";
import About from "../../public/components/About";
import Experience from "../../public/components/Experience";
import Works from "../../public/components/Works";
import TechSection from "../../public/components/TechSection";
import Contact from "../../public/components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Works />
      <TechSection />
      <Contact />

    </div>
    
  );
}
