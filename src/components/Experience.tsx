"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Data Science Intern",
        company: "Sabudh Foundation",
        period: "July 2025 – Dec 2025",
        description: "Led 'Story Snap' Passion Project: Developed an end-to-end multimodal AI pipeline transforming audio to visual storyboards using Whisper & Stable Diffusion XL.",
        tags: ["Python", "GenAI", "LoRa", "Stable Diffusion"]
    },
    {
        role: "Microelectronics and VLSI Training",
        company: "Jadavpur University",
        period: "Jan 2025 – Feb 2025",
        description: "Gained hands-on experience in VLSI design, semiconductor fabrication, and FPGA programming.",
        tags: ["VLSI", "FPGA", "Semiconductors"]
    },
    {
        role: "Vocational Training",
        company: "WBSETCL",
        period: "Aug 2022 – Sept 2022",
        description: "Industrial training on Transformer maintenance, executing transmission oil checks and routine system analysis.",
        tags: ["Electrical Engineering", "Maintenance"]
    }
];

export default function Experience() {
    return (
        <section className="relative w-full py-20 px-8 md:px-20 bg-slate-900/30">
            <div className="max-w-6xl mx-auto space-y-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-panel p-6 hover:bg-slate-800/50 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                                    <p className="text-sky-400 text-sm">{exp.company}</p>
                                </div>
                                <span className="text-xs text-slate-500 bg-slate-900/50 px-2 py-1 rounded">{exp.period}</span>
                            </div>
                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                {exp.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {exp.tags.map(tag => (
                                    <span key={tag} className="text-xs text-slate-300 bg-slate-700/50 px-2 py-1 rounded-full border border-slate-600/30">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
