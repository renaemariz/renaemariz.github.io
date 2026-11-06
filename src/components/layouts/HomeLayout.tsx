"use client";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import { useSectionObserver } from "@/hooks/useSectionObserver";

export default function HomeLayout() {
  const activeNav = useSectionObserver();
  return (
    <>
      <Navbar activeNav={activeNav} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
