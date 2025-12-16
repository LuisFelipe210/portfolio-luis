"use client"

import React, { Suspense } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
// Importando a estrela da festa
import CoffeeScene from './CoffeeScene';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-end pb-12 px-6 sm:px-12 overflow-hidden bg-[#0f0a08]">

            {/* === AQUI TÁ A TUA ANIMAÇÃO, PORRA === */}
            {/* Botei opacity-60 pro texto na frente ficar legível, mas a animação brilhar no fundo */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Suspense fallback={null}>
                    <CoffeeScene />
                </Suspense>
            </div>

            {/* Overlay sutil na base pra o texto não sumir se passar um grão na frente */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0f0a08] via-transparent to-transparent pointer-events-none" />

            <div className="max-w-[1600px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

                {/* LADO ESQUERDO: Introdução Técnica */}
                <div className="lg:col-span-4 mb-8 lg:mb-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {/* Linha Fina Decorativa */}
                        <div className="w-12 h-[2px] bg-rooster-600 mb-6" />

                        <div className="font-mono-code text-sm text-white/50 space-y-1 bg-[#0f0a08]/50 backdrop-blur-sm p-2 rounded-lg w-fit border border-white/5">
                            <p>LOCATION: SALVADOR, BA</p>
                            <p>ROLE: FULL STACK DEV</p>
                            <p>STATUS: <span className="text-green-500 animate-pulse">●</span> AVAILABLE</p>
                        </div>

                        <p className="text-white/80 text-lg leading-relaxed max-w-md drop-shadow-md">
                            Engenharia de software com foco em <strong className="text-white">robustez</strong> e <strong className="text-white">estética</strong>.
                            Transformo cafeína em código limpo, escalável e memorável.
                        </p>

                        <div className="flex gap-4 pt-4">
                            {[
                                { icon: Github, link: PERSONAL_INFO.github },
                                { icon: Linkedin, link: PERSONAL_INFO.linkedin },
                                { icon: Mail, link: `mailto:${PERSONAL_INFO.email}` }
                            ].map((item, i) => (
                                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-rooster-500 transition-colors p-2 hover:bg-white/5 rounded-full">
                                    <item.icon size={24} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* CENTRO/DIREITA: Título Gigante Assímetrico */}
                <div className="lg:col-span-8 flex flex-col items-start lg:items-end pointer-events-none">
                    <motion.h1
                        className="font-serif-display text-6xl sm:text-8xl md:text-9xl font-medium text-[#eaddd7] leading-[0.9] tracking-tight mix-blend-screen drop-shadow-2xl"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="block italic text-white/30 text-4xl sm:text-6xl mb-2 font-light">The</span>
                        Roost & <br />
                        <span className="text-rooster-600">Roast.</span>
                    </motion.h1>

                    <motion.div
                        className="mt-8 flex items-center gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="font-mono-code text-xs text-rooster-600 uppercase tracking-widest bg-[#0f0a08]/80 px-2 py-1 rounded">
                            Luis Felipe Portfolio &copy; {new Date().getFullYear()}
                        </span>
                        <div className="w-24 h-[1px] bg-white/20" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-[10px] font-mono-code uppercase tracking-widest">Scroll</span>
                <ArrowDown size={16} />
            </motion.div>
        </section>
    );
};

export default Hero;