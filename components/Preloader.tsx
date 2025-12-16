"use client"

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
    "Moendo...",
    "Infusão...",
    "Filtrando...",
    "Servindo..."
];

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        // Intervalo mais rápido (400ms)
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % messages.length);
        }, 400);

        // Tempo total reduzido para 2000ms (2s) + um chorinho pra transição
        const timer = setTimeout(() => {
            onComplete();
        }, 2200);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#150f0d] text-[#eaddd7]"
            initial={{ opacity: 1 }}
            // Saída mais explosiva e rápida (0.5s)
            exit={{ y: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
        >
            <div className="relative w-48 h-64 mb-6 flex flex-col items-center scale-90 sm:scale-100">

                {/* --- 1. O COADOR V60 --- */}
                <div className="relative z-20 w-full flex justify-center">
                    <svg width="120" height="80" viewBox="0 0 120 80" className="drop-shadow-lg">
                        <path d="M 10 10 L 110 10 L 70 70 L 50 70 Z" fill="#2b2b2b" stroke="#eaddd7" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M 30 10 L 55 60" stroke="#eaddd7" strokeWidth="0.5" opacity="0.3" />
                        <path d="M 90 10 L 65 60" stroke="#eaddd7" strokeWidth="0.5" opacity="0.3" />
                        <path d="M 60 10 L 60 60" stroke="#eaddd7" strokeWidth="0.5" opacity="0.3" />
                        <path d="M 20 15 L 100 15 L 70 50 L 50 50 Z" fill="#3E2723" />
                    </svg>
                </div>

                {/* --- 2. O FLUXO DE CAFÉ (Jato Rápido) --- */}
                <div className="relative h-24 w-full flex justify-center -mt-1 z-10">
                    <motion.div
                        className="w-1.5 bg-[#4E342E] rounded-full"
                        initial={{ height: 0 }}
                        animate={{ height: "100%" }}
                        transition={{ duration: 0.3, delay: 0.2 }} // Começa logo
                    />
                    {[1, 2, 3].map(i => (
                        <motion.div
                            key={i}
                            className="absolute top-0 w-1.5 h-3 bg-[#4E342E] rounded-full"
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: 170, opacity: [0, 1, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 0.4, // Caindo muito rápido
                                delay: 0.2 + (i * 0.1),
                                ease: "linear"
                            }}
                        />
                    ))}
                </div>

                {/* --- 3. A JARRA DE VIDRO --- */}
                <div className="relative z-20 -mt-1">
                    <svg width="140" height="120" viewBox="0 0 140 120" className="drop-shadow-2xl">
                        <defs>
                            <mask id="liquid-mask">
                                <path d="M 40 0 L 100 0 L 120 100 Q 120 115 100 115 L 40 115 Q 20 115 20 100 Z" fill="white" />
                            </mask>
                            <linearGradient id="coffeeGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#5D4037" />
                                <stop offset="100%" stopColor="#21130d" />
                            </linearGradient>
                        </defs>

                        <path d="M 40 0 L 100 0 L 120 100 Q 120 115 100 115 L 40 115 Q 20 115 20 100 Z" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />

                        <g mask="url(#liquid-mask)">
                            <motion.rect
                                x="0"
                                y="0"
                                width="140"
                                height="140"
                                fill="url(#coffeeGradient)"
                                initial={{ y: 120 }}
                                animate={{ y: 30 }}
                                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }} // Enche em 1.8s
                            />

                            <motion.path
                                d="M 0 0 Q 35 10 70 0 T 140 0 V 10 H 0 Z"
                                fill="#8D6E63"
                                initial={{ y: 120 }}
                                animate={{ y: 30 }}
                                transition={{ duration: 1.8, ease: "easeInOut", delay: 0.3 }}
                            />
                        </g>

                        <path d="M 30 20 L 25 90" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.05" />
                        <path d="M 110 20 L 115 90" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.05" />
                    </svg>
                </div>
            </div>

            {/* TEXTO DE STATUS */}
            <div className="h-6 overflow-hidden flex flex-col items-center z-30">
                <AnimatePresence mode='wait'>
                    <motion.p
                        key={textIndex}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.15 }} // Troca de texto instantânea
                        className="text-xs font-mono uppercase tracking-[0.2em] text-rooster-500 font-bold"
                    >
                        {messages[textIndex]}
                    </motion.p>
                </AnimatePresence>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-[#2c1a16] rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-rooster-500 box-shadow-[0_0_10px_#e34234]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.2, ease: "linear" }} // Barra de progresso acompanha o tempo total
                />
            </div>
        </motion.div>
    );
};

export default Preloader;