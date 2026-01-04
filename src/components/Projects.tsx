"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, FileText } from "lucide-react";

const projects = [
    {
        title: "Story-Snap AI",
        description: "End-to-end multimodal AI pipeline utilizing OpenAI Whisper and Stable Diffusion XL to convert spoken audio into consistent 'Studio Ghibli' style visual storyboards. Features custom LoRa adapters for artistic consistency.",
        tags: ["Python", "GenAI", "OpenAI Whisper", "Stable Diffusion XL"],
        links: [
            { label: "Github", url: "#", icon: Github }
        ]
    },
    {
        title: "Mental Wellness Portal",
        description: "AI-driven wellness platform providing resources, self-assessment tools, and guided practices. Implements a recommendation engine based on user sentiment analysis.",
        tags: ["React", "Node.js", "ML", "Sentiment Analysis"],
        links: []
    },
    {
        title: "Optimizing Drug Management",
        description: "Published research (IEEE XPLORE, 2024) on AI-driven pharmacy analytics and electronic health records for efficient drug management.",
        tags: ["Research", "IEEE", "Data Analytics"],
        links: [
            { label: "Read Paper", url: "#", icon: FileText }
        ]
    }
];

export default function Projects() {
    return (
        <section className="relative w-full py-20 px-8 md:px-20 bg-slate-950">
            <div className="max-w-6xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-panel p-6 flex flex-col h-full hover:border-sky-500/30 transition-colors group"
                        >
                            <h3 className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors">{project.title}</h3>
                            <p className="text-slate-400 text-sm mt-3 flex-grow leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-4 mb-6">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs text-slate-300 bg-slate-800 px-2 py-1 rounded-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto">
                                {project.links.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                                    >
                                        <link.icon size={16} />
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
