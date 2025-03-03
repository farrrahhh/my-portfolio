
import Hero from "../../public/components/Hero";
import Navbar from "../../public/components/Navbar";
import About from "../../public/components/About";
import Experience from "../../public/components/Experience";
import Works from "../../public/components/Works";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience/>
      <Works />
    </div>
    
  );
}
