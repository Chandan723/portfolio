"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Languages",
        skills: ["C++", "Python", "JavaScript", "TypeScript"]
    },
    {
        title: "Web Technologies",
        skills: ["React.js", "Next.js", "Node.js", "HTML5", "CSS3", "Tailwind"]
    },
    {
        title: "AI & ML",
        skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Stable Diffusion", "Whisper"]
    },
    {
        title: "Tools & Cloud",
        skills: ["Git", "AWS (Cloud Practitioner)", "VS Code", "Postman"]
    }
];

export default function Skills() {
    return (
        <section className="relative w-full py-20 px-8 md:px-20 bg-slate-900/30">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-slate-400 text-lg">
                        My technical toolkit spans across software development, data science, and hardware engineering.
                        I focus on building scalable web applications and deploying efficient AI models.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {skillCategories.map((cat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-panel p-5 hover:bg-slate-800/60 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-white mb-3 border-b border-slate-700/50 pb-2">
                                {cat.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {cat.skills.map(skill => (
                                    <span key={skill} className="text-sm text-sky-300 bg-sky-900/20 px-2 py-1 rounded">
                                        {skill}
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
