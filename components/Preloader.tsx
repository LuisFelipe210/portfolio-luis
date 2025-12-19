"use client"

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
    "INITIALIZING_GRIND...",
    "EXTRACTING_DATA...",
    "FILTERING_LATENCY...",
    "READY_TO_SERVE"
];

const COFFEE_MODERN = {
    bgDark: "#0F0B09",
    accentGold: "#D4A373",
    textMuted: "#8D7B68"
};

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % messages.length);
        }, 500);

        const timer = setTimeout(() => {
            onComplete();
        }, 2500);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
            style={{ backgroundColor: COFFEE_MODERN.bgDark }}
            initial={{ opacity: 1 }}
            exit={{
                y: "-100%",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
        >
            {/* GRID DE FUNDO DECORATIVO */}
            <div
                className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(${COFFEE_MODERN.accentGold} 1px, transparent 1px), linear-gradient(90deg, ${COFFEE_MODERN.accentGold} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="relative w-64 h-64 flex flex-col items-center justify-center">

                {/* ANIMAÇÃO CENTRAL: O "SISTEMA" DE CAFÉ TÉCNICO */}
                <svg width="160" height="160" viewBox="0 0 160 160" className="relative z-20">
                    {/* LINHAS DE GUIA TÉCNICA */}
                    <circle cx="80" cy="80" r="78" fill="none" stroke={COFFEE_MODERN.accentGold} strokeWidth="0.5" strokeDasharray="4 4" opacity="0.2" />

                    {/* O COADOR (ESTILO WIREFRAME) */}
                    <motion.path
                        d="M 40 40 L 120 40 L 95 90 L 65 90 Z"
                        fill="none"
                        stroke={COFFEE_MODERN.accentGold}
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                    {/* FLUXO DE DADOS / CAFÉ */}
                    <motion.line
                        x1="80" y1="90" x2="80" y2="130"
                        stroke={COFFEE_MODERN.accentGold}
                        strokeWidth="2"
                        strokeDasharray="4 8"
                        animate={{ strokeDashoffset: [0, -24] }}
                        transition={{ repeat: Infinity, duration: 0.5, ease: "linear" }}
                    />

                    {/* BASE / RECIPIENTE */}
                    <motion.path
                        d="M 50 135 L 110 135"
                        stroke={COFFEE_MODERN.accentGold}
                        strokeWidth="1.5"
                        strokeLinecap="square"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1 }}
                    />
                </svg>

                {/* TEXTO DE STATUS (ESTILO TERMINAL) */}
                <div className="mt-8 h-4 overflow-hidden">
                    <AnimatePresence mode='wait'>
                        <motion.p
                            key={textIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#D4A373] font-bold"
                        >
                            {messages[textIndex]}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* BARRA DE PROGRESSO INDUSTRIAL */}
                <div className="absolute bottom-0 w-48 h-[2px] bg-white/5 overflow-hidden">
                    <motion.div
                        className="h-full bg-[#D4A373]"
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 2.5, ease: "linear" }}
                    />
                </div>
            </div>

            {/* DECORAÇÃO DE CANTO (UI ELEMENTS) */}
            <div className="absolute top-10 left-10 font-mono text-[8px] text-[#8D7B68] opacity-40 uppercase tracking-widest leading-loose">
                System: Espresso_v3.0<br/>
                Status: Brewing_Logic<br/>
                Origin: Salvador_BA
            </div>
        </motion.div>
    );
};

export default Preloader;