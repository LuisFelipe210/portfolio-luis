"use client"

import React, { Suspense } from 'react';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import CoffeeScene from './CoffeeScene';

const COFFEE_MODERN = {
    bgDark: "#0F0B09",
    bgPanel: "#1A1410",
    accentGold: "#D4A373",
    textMain: "#EAE0D5",
    textMuted: "#8D7B68",
    glassBorder: "rgba(212, 163, 115, 0.15)"
};

const Hero: React.FC = () => {
    return (
        <section
            className="relative min-h-[100dvh] w-full flex flex-col justify-center overflow-hidden py-20 lg:py-0"
            style={{ backgroundColor: COFFEE_MODERN.bgDark }}
        >
            {/* === BACKGROUND === */}
            <div className="absolute inset-0 z-0 opacity-60 lg:opacity-90 mix-blend-screen pointer-events-none">
                <Suspense fallback={null}>
                    <CoffeeScene />
                </Suspense>
            </div>

            <div
                className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(${COFFEE_MODERN.accentGold} 1px, transparent 1px), linear-gradient(90deg, ${COFFEE_MODERN.accentGold} 1px, transparent 1px)`,
                    backgroundSize: 'clamp(50px, 10vw, 100px) clamp(50px, 10vw, 100px)'
                }}
            />

            <div className="absolute inset-0 z-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#0F0B09] via-[#0F0B09]/40 to-[#0F0B09] pointer-events-none" />

            {/* === CONTEÚDO === */}
            <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-12 items-center">

                {/* COLUNA ESQUERDA: TEXTO PESADO */}
                <div className="flex flex-col justify-center space-y-6 lg:space-y-8 order-2 lg:order-1">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-3 w-fit px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border backdrop-blur-md"
                        style={{
                            backgroundColor: 'rgba(26, 20, 16, 0.6)',
                            borderColor: COFFEE_MODERN.glassBorder
                        }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] lg:text-xs font-mono tracking-widest text-[#D4A373]">
                            SYSTEM ONLINE
                        </span>
                    </motion.div>

                    <div className="space-y-1 lg:space-y-0">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white"
                        >
                            ROBUST
                            <br />
                            <span style={{ color: COFFEE_MODERN.accentGold }}>FLAVOR.</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="font-sans font-bold text-3xl sm:text-5xl lg:text-6xl leading-[0.9] tracking-tighter text-[#4A3B32]"
                        >
                            CLEAN CODE.
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-base lg:text-xl max-w-lg leading-relaxed font-light"
                        style={{ color: COFFEE_MODERN.textMuted }}
                    >
                        Desenvolvo soluções Full Stack com a mesma precisão de um barista experiente. Performance pura, sem código sujo.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 pt-2 lg:pt-4"
                    >
                        <a
                            href={`mailto:${PERSONAL_INFO.email}`}
                            className="flex-1 sm:flex-none text-center px-6 py-3 lg:px-8 lg:py-4 bg-[#D4A373] hover:bg-[#C29060] text-[#0F0B09] font-bold tracking-wide rounded-sm transition-all transform hover:-translate-y-1"
                        >
                            HIRE ME
                        </a>
                        <div className="flex gap-6 items-center px-2 lg:px-4">
                            {[
                                { Icon: Github, link: PERSONAL_INFO.github },
                                { Icon: Linkedin, link: PERSONAL_INFO.linkedin }
                            ].map((item, i) => (
                                <a key={i} href={item.link} target="_blank" rel="noreferrer" className="text-[#8D7B68] hover:text-[#D4A373] transition-colors">
                                    <item.Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* COLUNA DIREITA: CARD DE SKILLS */}
                <div className="relative flex flex-col justify-center items-center lg:items-end order-1 lg:order-2 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative z-10 p-6 lg:p-8 rounded-xl border border-[#D4A373]/20 backdrop-blur-xl bg-[#0F0B09]/60 max-w-[320px] lg:max-w-sm w-full space-y-4 lg:space-y-6 shadow-2xl"
                    >
                        <div className="flex items-center justify-between border-b border-[#D4A373]/10 pb-3 lg:pb-4">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <Code2 size={16} className="text-[#8D7B68]" />
                        </div>

                        <div className="space-y-4 font-mono text-xs lg:text-sm">
                            <div className="flex justify-between items-center text-[#EAE0D5]">
                                <span>Stack</span>
                                <span className="text-[#D4A373]">Full Strength</span>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-[10px] lg:text-xs text-[#8D7B68] mb-1.5">
                                        <span>Frontend (React/Next)</span>
                                        <span>98%</span>
                                    </div>
                                    <div className="h-1 w-full bg-[#1A1410] rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "98%" }}
                                            transition={{ duration: 1.5, ease: "circOut" }}
                                            className="h-full bg-[#D4A373]"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-[10px] lg:text-xs text-[#8D7B68] mb-1.5">
                                        <span>Backend (Node/Python)</span>
                                        <span>92%</span>
                                    </div>
                                    <div className="h-1 w-full bg-[#1A1410] rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "92%" }}
                                            transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
                                            className="h-full bg-[#A4907C]"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-3 lg:pt-4 border-t border-[#D4A373]/10 text-[#8D7B68] text-[10px] lg:text-xs leading-relaxed">
                                <p>// Current Focus:</p>
                                <p className="text-[#EAE0D5]">Scalable architectures[cite: 7, 17].</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8D7B68]"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
            >
                <div className="w-[1px] h-8 lg:h-12 bg-gradient-to-b from-transparent via-[#D4A373] to-transparent opacity-50" />
            </motion.div>
        </section>
    );
};

export default Hero;