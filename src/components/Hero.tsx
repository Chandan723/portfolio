"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-start px-8 md:px-20 z-10 overflow-hidden">
            <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <div className="space-y-2">
                        <h2 className="text-xl md:text-2xl font-medium text-slate-400">
                            Hello, I&apos;m
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                            Chandan <br />
                            <span className="text-gradient">Kumar Mahato</span>
                        </h1>
                    </div>

                    <p className="text-lg text-slate-400 max-w-md">
                        ECE Student (2026) & Aspiring Engineer.
                        Transforming ideas into interactive digital experiences.
                        Specializing in AI/ML, Web, and VLSI.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-6 py-3 rounded-full bg-sky-500 text-white font-medium hover:bg-sky-400 transition-colors">
                            View Projects
                        </button>
                        <button className="px-6 py-3 rounded-full bg-transparent border border-slate-600 text-slate-300 font-medium hover:border-slate-400 hover:text-white transition-colors">
                            Contact Me
                        </button>
                        <a
                            href="https://chandan723.github.io/portfolio/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-transparent border border-slate-600 text-slate-300 font-medium hover:border-slate-400 hover:text-white transition-colors flex items-center justify-center"
                        >
                            Resume
                        </a>
                    </div>
                </motion.div>

                {/* Profile Image (Visible on Mobile/Tablet, or supplementary on Desktop) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-64 h-64 md:w-80 md:h-80 mx-auto md:mx-0 glass-panel p-2 rotate-3 hover:rotate-0 transition-transform duration-500"
                >
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                        <Image
                            src="https://chandan723.github.io/portfolio/profile.jpg"
                            alt="Chandan Kumar Mahato"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
