"use client"

import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Database, TerminalSquare, BrainCircuit, Cpu, Zap, Activity, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

// Mapeamento de ícones
const getIcon = (idx: number) => {
    const icons = [Code2, Database, TerminalSquare, BrainCircuit];
    return icons[idx] || Cpu;
}

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-24 bg-[#120c0b] relative overflow-hidden">

            {/* === BACKGROUND TECH === */}
            {/* Grid estilo "Blueprint" */}
            <div className="absolute inset-0 opacity-[0.05]"
                 style={{
                     backgroundImage: 'linear-gradient(#e34234 1px, transparent 1px), linear-gradient(90deg, #e34234 1px, transparent 1px)',
                     backgroundSize: '40px 40px'
                 }}>
            </div>

            {/* Vinheta escura nas bordas */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#120c0b_100%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* HEADER AGRESSIVO */}
                <div className="mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-rooster-600/10 border border-rooster-600/30 rounded-none mb-4"
                    >
                        <div className="w-2 h-2 bg-rooster-500 animate-pulse" />
                        <span className="text-rooster-500 text-xs font-mono font-bold uppercase tracking-widest">System Status: Online</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-[#eaddd7] tracking-tighter uppercase font-sans"
                    >
                        Arsenal <span className="text-transparent bg-clip-text bg-gradient-to-r from-rooster-500 to-orange-600">Técnico</span>
                    </motion.h2>
                    <div className="h-1 w-24 bg-rooster-600 mt-4" />
                </div>

                {/* GRID DE CARDS "SYSTEM MODULES" */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {SKILLS.map((skillGroup, idx) => {
                        const Icon = getIcon(idx);

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group relative"
                            >
                                {/* Efeito de Borda "Glow" no Hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-rooster-600 to-orange-600 rounded-sm opacity-0 group-hover:opacity-100 transition duration-500 blur-sm group-hover:blur-md" />

                                {/* O CARD EM SI (Estilo Industrial/Militar) */}
                                <div className="relative h-full bg-[#1a1110] border border-white/10 p-1 flex flex-col rounded-sm overflow-hidden">

                                    {/* Header do Card (Parecendo janela de terminal) */}
                                    <div className="bg-[#251816] border-b border-white/5 p-4 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-rooster-600/10 border border-rooster-600/20 rounded-sm text-rooster-500">
                                                <Icon size={20} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-[#eaddd7] text-lg leading-none uppercase tracking-wide">
                                                    {skillGroup.category.split(' ')[0]}
                                                </h3>
                                                <p className="text-[10px] text-white/40 font-mono mt-1">
                                                    MODULE_0{idx + 1}
                                                </p>
                                            </div>
                                        </div>
                                        <Activity size={16} className="text-green-500/50" />
                                    </div>

                                    {/* Corpo do Card */}
                                    <div className="p-6 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-opacity-5 flex-1 relative">
                                        {/* Linhas decorativas */}
                                        <div className="absolute top-0 right-6 w-px h-full bg-white/5 border-r border-dashed border-white/5" />

                                        <ul className="space-y-4 relative z-10">
                                            {skillGroup.items.map((tech, i) => (
                                                <li key={tech} className="flex flex-col gap-1">
                                                    <div className="flex justify-between items-end text-sm">
                                                        <span className="font-mono text-[#eaddd7] font-bold group-hover/li:text-rooster-400 transition-colors">
                                                            {tech}
                                                        </span>
                                                        <span className="text-[10px] text-white/30 font-mono">
                                                            v{(Math.random() * 5 + 1).toFixed(1)}.0
                                                        </span>
                                                    </div>
                                                    {/* Barra de Progresso Decorativa */}
                                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                        <motion.div
                                                            className="h-full bg-rooster-600"
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${85 + Math.random() * 15}%` }}
                                                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                                                        />
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Footer do Card */}
                                    <div className="bg-[#150e0d] p-3 border-t border-white/5 flex justify-between items-center text-[10px] text-white/30 font-mono uppercase">
                                        <span>Status: Operational</span>
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-rooster-600 rounded-full animate-pulse" />
                                            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                                            <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;