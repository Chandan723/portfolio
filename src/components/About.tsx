"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="relative w-full py-20 px-8 md:px-20 bg-slate-950">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        I am an Electronics and Communication Engineering student (Class of 2026) at the Institute of Engineering and Management, Kolkata.
                        My passion lies in bridging the gap between hardware and software, with a strong foundation in VLSI, Data Science, and Web Technologies.
                        I actively seek opportunities to apply my technical skills to impactful engineering projects.
                    </p>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h3 className="text-2xl font-semibold text-white">Education</h3>

                    <div className="relative border-l-2 border-slate-800 ml-3 pl-8 space-y-10">
                        <div className="relative">
                            <span className="absolute -left-[39px] w-5 h-5 rounded-full bg-sky-500 border-4 border-slate-950" />
                            <h4 className="text-xl font-medium text-white">B.Tech in ECE</h4>
                            <p className="text-slate-400 text-sm">Institute of Engineering and Management, Kolkata</p>
                            <p className="text-slate-500 text-xs mt-1">Exp. June 2026 | CGPA: 8.3</p>
                            <p className="text-slate-400 mt-2 text-sm">
                                Coursework: ML, DSA, OOPS, DBMS, CyberSecurity, Networks.
                            </p>
                        </div>

                        <div className="relative">
                            <span className="absolute -left-[39px] w-5 h-5 rounded-full bg-indigo-500 border-4 border-slate-950" />
                            <h4 className="text-xl font-medium text-white">Diploma in EE</h4>
                            <p className="text-slate-400 text-sm">Central Calcutta Polytechnic</p>
                            <p className="text-slate-500 text-xs mt-1">Aug 2019 – Aug 2022 | CGPA: 8.1</p>
                            <p className="text-slate-400 mt-2 text-sm">
                                Coursework: Electrical Machines, Power Systems, Instrumentation.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
