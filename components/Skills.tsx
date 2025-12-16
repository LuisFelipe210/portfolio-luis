"use client"

import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Database, TerminalSquare, BrainCircuit, Cpu, Layout, Server, Braces } from 'lucide-react';
import { motion } from 'framer-motion';

const getIcon = (idx: number) => {
    const icons = [Layout, Server, Database, TerminalSquare, BrainCircuit, Braces];
    return icons[idx] || Cpu;
}

const Skills: React.FC = () => {
    return (
        // MUDANÇA 1: Cor de fundo base um pouco diferente (#130e0c) para quebrar a monotonia
        <section id="skills" className="py-24 bg-[#130e0c] relative overflow-hidden">

            {/* MUDANÇA 2: Spotlight Central (Luz de fundo) */}
            {/* Cria um brilho avermelhado muito sutil no centro, dando volume 3D */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e34234] opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />

            {/* MUDANÇA 3: Grid Técnico de Fundo (Blueprint Pattern) */}
            {/* Essas linhas finas no fundo dão a cara de "Engenharia" e tiram o aspecto liso */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Background Noise (Mantido para textura tátil) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* --- HEADER TÉCNICO --- */}
                <div className="border-b border-white/10 pb-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative">
                    {/* Detalhe de luz no header */}
                    <div className="absolute bottom-0 left-0 w-32 h-px bg-gradient-to-r from-rooster-600 to-transparent" />

                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-2"
                        >
                            <div className="w-2 h-2 bg-rooster-600 rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-rooster-600 uppercase tracking-widest">System_Specs v2.0</span>
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-black text-[#eaddd7] uppercase tracking-tighter leading-none">
                            Arsenal <br />
                            <span className="text-white/30">Técnico</span>
                        </h2>
                    </div>

                    <div className="font-mono text-xs text-white/50 text-right hidden md:block">
                        <p>CAPACITY: 100%</p>
                        <p>STATUS: OPTIMIZED</p>
                        <p>/// SEC_02</p>
                    </div>
                </div>

                {/* --- GRID ESTRUTURAL --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10 shadow-2xl bg-[#0f0a08]/50 backdrop-blur-sm">

                    {SKILLS.map((skillGroup, idx) => {
                        const Icon = getIcon(idx);

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative border-r border-b border-white/10 p-8 min-h-[320px] flex flex-col justify-between hover:bg-[#1a1110] transition-colors duration-500"
                            >
                                {/* Crosshair */}
                                <div className="absolute -top-[5px] -left-[5px] text-white/40">
                                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.5 0V9M0 4.5H9" stroke="currentColor" strokeWidth="1"/>
                                    </svg>
                                </div>

                                {/* Header Card */}
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="font-mono text-xs text-white/40">0{idx + 1}</span>
                                        <Icon className="text-white/30 group-hover:text-rooster-500 transition-colors duration-300" size={28} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-xl font-bold text-[#eaddd7] uppercase tracking-wide mb-1 group-hover:translate-x-1 transition-transform duration-300">
                                        {skillGroup.category.split(' ')[0]}
                                    </h3>
                                    <div className="h-0.5 w-8 bg-rooster-600 opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-500" />
                                </div>

                                {/* Lista */}
                                <ul className="space-y-3 relative z-10 mt-8">
                                    {skillGroup.items.map((tech) => (
                                        <li key={tech} className="flex items-center gap-3 group/item">
                                            <div className="w-1 h-1 bg-white/40 group-hover/item:bg-rooster-500 transition-colors" />
                                            <span className="text-sm font-mono text-white/60 group-hover/item:text-white transition-colors">
                                                {tech}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Spotlight BG (Hover Interno) */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                {/* Barcode Decor */}
                                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                                    <div className="flex gap-0.5 h-4 items-end">
                                        {[...Array(10)].map((_, i) => (
                                            <div key={i} className="w-0.5 bg-white" style={{ height: `${Math.random() * 100}%` }} />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* --- BARRA DE MÍDIA INFERIOR --- */}
                <div className="mt-12 border-t border-b border-white/10 py-4 overflow-hidden relative">
                    {/* Gradiente lateral pra suavizar as pontas (Vignette) */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#130e0c] via-transparent to-[#130e0c] z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-12 whitespace-nowrap"
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    >
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex gap-12 text-[#eaddd7]/50 font-mono text-sm uppercase tracking-[0.3em]">
                                <span>React.js</span> <span>Next.js</span> <span>TypeScript</span> <span>Node.js</span> <span>Docker</span> <span>AWS</span> <span>Tailwind</span> <span>PostgreSQL</span> <span>GraphQL</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Skills;