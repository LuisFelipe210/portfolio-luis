"use client"

import React, { Suspense } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import CoffeeScene from './CoffeeScene';

const Hero: React.FC = () => {
    return (
        // MUDANÇA 1: min-h-[100dvh] previne pulos em navegadores mobile
        <section className="relative min-h-[100dvh] flex flex-col justify-end pb-20 sm:pb-12 px-6 sm:px-12 overflow-hidden bg-[#0f0a08]">

            {/* === BACKGROUND ANIMAÇÃO === */}
            <div className="absolute inset-0 z-0 opacity-60">
                <Suspense fallback={null}>
                    <CoffeeScene />
                </Suspense>
            </div>

            {/* MUDANÇA 2: Gradiente mais forte no mobile para garantir leitura do texto */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0f0a08] via-[#0f0a08]/40 to-transparent pointer-events-none" />

            {/* Container Principal */}
            <div className="max-w-[1600px] w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-end">

                {/* MUDANÇA 3: Ordem visual no Mobile.
                   Usamos 'order-2 lg:order-1' para que no celular o texto técnico fique ABAIXO ou ACIMA conforme sua preferência.
                   Neste design, deixei a Intro PRIMEIRO (padrão) mas ajustei os tamanhos.
                */}

                {/* LADO ESQUERDO: Introdução Técnica */}
                <div className="lg:col-span-4 mb-4 lg:mb-0 order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4 sm:space-y-6"
                    >
                        {/* Linha Decorativa */}
                        <div className="w-12 h-[2px] bg-rooster-600 mb-4 sm:mb-6" />

                        {/* Box de Status - Mais legível no mobile */}
                        <div className="font-mono-code text-[10px] sm:text-sm text-white/70 space-y-1 bg-[#0f0a08]/80 backdrop-blur-md p-3 rounded-lg w-fit border border-white/10 shadow-lg">
                            <p>LOCATION: SALVADOR, BA</p>
                            <p>ROLE: FULL STACK DEV</p>
                            <p>STATUS: <span className="text-green-500 animate-pulse">●</span> AVAILABLE</p>
                        </div>

                        <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-sm lg:max-w-md drop-shadow-md font-light">
                            Engenharia de software com foco em <strong className="text-white font-medium">robustez</strong> e <strong className="text-white font-medium">estética</strong>.
                            Transformo cafeína em código limpo, escalável e memorável.
                        </p>

                        {/* Ícones maiores no touch */}
                        <div className="flex gap-5 pt-2">
                            {[
                                { icon: Github, link: PERSONAL_INFO.github },
                                { icon: Linkedin, link: PERSONAL_INFO.linkedin },
                                { icon: Mail, link: `mailto:${PERSONAL_INFO.email}` }
                            ].map((item, i) => (
                                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-rooster-500 transition-colors p-1 active:scale-95">
                                    <item.icon size={22} className="sm:w-6 sm:h-6" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* CENTRO/DIREITA: Título Gigante */}
                {/* order-2 garante que fique na posição certa se decidirmos mudar o layout depois, mas aqui mantém o fluxo */}
                <div className="lg:col-span-8 flex flex-col items-start lg:items-end pointer-events-none order-2 pb-4 lg:pb-0">
                    <motion.h1
                        // MUDANÇA 4: Tipografia Responsiva Agressiva
                        // text-5xl no celular (cabe na tela), text-9xl no desktop
                        className="font-serif-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium text-[#eaddd7] leading-[0.9] tracking-tight mix-blend-screen drop-shadow-2xl"
                        initial={{ opacity: 0, x: 50 }} // Menos movimento no eixo X para mobile
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="block italic text-white/30 text-2xl sm:text-4xl sm:text-6xl mb-1 sm:mb-2 font-light">The</span>
                        Roost & <br />
                        <span className="text-rooster-600">Roast.</span>
                    </motion.h1>

                    <motion.div
                        className="mt-4 sm:mt-8 flex items-center gap-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="font-mono-code text-[10px] sm:text-xs text-rooster-600 uppercase tracking-widest bg-[#0f0a08]/80 px-2 py-1 rounded border border-rooster-600/20">
                            Luis Felipe &copy; {new Date().getFullYear()}
                        </span>
                        <div className="w-12 sm:w-24 h-[1px] bg-white/20" />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Ajustado para não sobrepor conteúdo em telas pequenas */}
            <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <span className="text-[9px] sm:text-[10px] font-mono-code uppercase tracking-widest">Scroll</span>
                <ArrowDown size={14} className="sm:w-4 sm:h-4" />
            </motion.div>
        </section>
    );
};

export default Hero;