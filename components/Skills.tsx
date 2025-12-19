"use client"

import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Database, TerminalSquare, BrainCircuit, Cpu, Layout, Server, Braces, Settings2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Mesma paleta Industrial dos outros componentes
const COFFEE_MODERN = {
    bgDark: "#0F0B09",
    bgPanel: "#1A1410",
    accentGold: "#D4A373",
    textMain: "#EAE0D5",
    textMuted: "#8D7B68",
    glassBorder: "rgba(212, 163, 115, 0.15)"
};

const getIcon = (idx: number) => {
    const icons = [Layout, Server, Database, TerminalSquare, BrainCircuit, Braces];
    return icons[idx] || Cpu;
}

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden" style={{ backgroundColor: COFFEE_MODERN.bgDark }}>

            {/* === BACKGROUND === */}
            {/* Grid Decorativo igual ao Hero/Projects */}
            <div
                className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(${COFFEE_MODERN.accentGold} 1px, transparent 1px), linear-gradient(90deg, ${COFFEE_MODERN.accentGold} 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />

            {/* Vignette para profundidade */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F0B09] via-transparent to-[#0F0B09] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10">

                {/* --- HEADER TECH --- */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#D4A373]/20 pb-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-2 mb-3 text-[#D4A373]"
                        >
                            <Settings2 size={16} />
                            <span className="font-mono text-xs uppercase tracking-[0.2em]">
                                System Architecture
                            </span>
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-sans font-black text-white tracking-tighter leading-none">
                            TECHNICAL <br />
                            <span className="text-[#8D7B68]">CAPABILITIES.</span>
                        </h2>
                    </div>

                    <div className="font-mono text-xs text-right hidden md:block opacity-60 space-y-1 text-[#8D7B68]">
                        <p>KERNEL: STABLE v3.0</p>
                        <p>MEMORY: OPTIMIZED</p>
                        <p>STATUS: DEPLOY READY</p>
                    </div>
                </div>

                {/* --- GRID DE CARDS (Estilo Hardware) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                    {SKILLS.map((skillGroup, idx) => {
                        const Icon = getIcon(idx);

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                // Card mais quadrado e escuro
                                className="group relative p-8 rounded-sm border bg-[#1A1410] transition-all duration-300 hover:bg-[#221a15]"
                                style={{
                                    borderColor: COFFEE_MODERN.glassBorder
                                }}
                            >
                                {/* Marcador de canto decorativo */}
                                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4A373]/30 group-hover:border-[#D4A373] transition-colors" />

                                {/* Header do Card */}
                                <div className="relative z-10 mb-8 flex justify-between items-start">
                                    <div>
                                        <span className="font-mono text-[10px] mb-2 block text-[#8D7B68] tracking-widest">
                                            MODULE_0{idx + 1}
                                        </span>
                                        <h3 className="text-xl font-sans font-bold tracking-tight text-[#EAE0D5] group-hover:text-white transition-colors">
                                            {skillGroup.category.split(' ')[0]}
                                        </h3>
                                    </div>
                                    <div
                                        className="p-2 rounded bg-[#0F0B09] border border-[#D4A373]/20 group-hover:border-[#D4A373] transition-colors text-[#D4A373]"
                                    >
                                        <Icon size={20} strokeWidth={1.5} />
                                    </div>
                                </div>

                                {/* Lista de Skills */}
                                <ul className="space-y-3 relative z-10">
                                    {skillGroup.items.map((tech) => (
                                        <li key={tech} className="flex items-center gap-3 group/item">
                                            {/* Seta estilo terminal > */}
                                            <span className="text-[#8D7B68] text-xs font-mono group-hover/item:text-[#D4A373] transition-colors">
                                                &gt;
                                            </span>
                                            <span
                                                className="text-sm font-mono transition-colors text-[#8D7B68] group-hover/item:text-[#EAE0D5]"
                                            >
                                                {tech}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Barra de progresso decorativa no fundo */}
                                <div className="absolute bottom-0 left-0 h-[2px] bg-[#D4A373] w-0 group-hover:w-full transition-all duration-500 ease-out opacity-50" />
                            </motion.div>
                        );
                    })}
                </div>

                {/* --- TICKER DE DADOS (Data Stream) --- */}
                <div className="mt-20 border-y border-[#D4A373]/10 py-4 overflow-hidden relative bg-[#1A1410]/50 backdrop-blur-sm">
                    {/* Sombras laterais */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0F0B09] to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0F0B09] to-transparent z-10 pointer-events-none" />

                    <motion.div
                        className="flex gap-16 whitespace-nowrap"
                        animate={{ x: [0, -1000] }}
                        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                    >
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="flex gap-12 font-mono text-xs uppercase tracking-[0.3em] text-[#8D7B68]">
                                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#D4A373] rounded-full animate-pulse"/> REACT.JS</span>
                                <span>NEXT.JS</span>
                                <span>TYPESCRIPT</span>
                                <span className="flex items-center gap-2"><span className="w-2 h-2 bg-[#D4A373] rounded-full animate-pulse"/> NODE.JS</span>
                                <span>DOCKER</span>
                                <span>AWS</span>
                                <span>TAILWIND</span>
                                <span>POSTGRESQL</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Skills;