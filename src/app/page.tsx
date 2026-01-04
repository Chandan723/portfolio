"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Scene = dynamic(() => import("@/components/canvas/Scene"), { ssr: false });
const HeroModel = dynamic(() => import("@/components/canvas/HeroModel"), { ssr: false });

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      {/* 3D Background */}
      <Scene>
        <HeroModel />
      </Scene>

      {/* Content */}
      <div className="relative z-10 w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}
