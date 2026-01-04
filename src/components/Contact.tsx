"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
    return (
        <section className="relative w-full py-20 px-8 md:px-20 bg-slate-950 border-t border-slate-900">
            <div className="max-w-4xl mx-auto text-center space-y-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-slate-400 mt-4 max-w-lg mx-auto">
                        Whether you have a question, a project idea, or just want to say hi, feel free to reach out!
                    </p>
                </motion.div>

                <div className="flex justify-center gap-8">
                    <a
                        href="mailto:mahatochandan66@gmail.com"
                        className="flex flex-col items-center gap-2 group"
                    >
                        <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:bg-sky-500/20 group-hover:border-sky-500 transition-all">
                            <Mail className="text-slate-300 group-hover:text-sky-400" />
                        </div>
                        <span className="text-sm text-slate-400 group-hover:text-white">Email</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/chandan-kumar-mahato-2b5277300/" // Linkedin link
                        className="flex flex-col items-center gap-2 group"
                    >
                        <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:bg-indigo-500/20 group-hover:border-indigo-500 transition-all">
                            <Linkedin className="text-slate-300 group-hover:text-indigo-400" />
                        </div>
                        <span className="text-sm text-slate-400 group-hover:text-white">LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/Chandan723" // Github link
                        className="flex flex-col items-center gap-2 group"
                    >
                        <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:bg-purple-500/20 group-hover:border-purple-500 transition-all">
                            <Github className="text-slate-300 group-hover:text-purple-400" />
                        </div>
                        <span className="text-sm text-slate-400 group-hover:text-white">Github</span>
                    </a>
                </div>

                <footer className="pt-20 text-slate-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Chandan Kumar Mahato. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
}
