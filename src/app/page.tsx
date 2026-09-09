import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Photography from "@/components/Photography";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full bg-[#0c0c0d] text-neutral-100 selection:bg-neutral-100 selection:text-neutral-900">
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Photography />
      <Contact />
    </div>
  );
}
