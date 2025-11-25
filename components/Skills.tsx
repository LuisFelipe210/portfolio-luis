import React from 'react';
import { SKILLS } from '../constants';
import { Check, Code2, Database, TerminalSquare, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

// Ícones mapeados
const categoryIcons = [Code2, Database, TerminalSquare, BrainCircuit];

// Fumainha chique (Vapor)
const Steam = () => {
    return (
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: 0, opacity: 0, scale: 0.8 }}
                    animate={{
                        y: -40,
                        opacity: [0, 0.4, 0],
                        scale: [1, 1.5, 2],
                        x: i % 2 === 0 ? [0, 5, 0] : [0, -5, 0] // Zigue-zague leve
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                    }}
                    className="w-4 h-12 bg-white rounded-full blur-xl"
                />
            ))}
        </div>
    );
};

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-32 bg-[#eaddd7] relative overflow-hidden">
            {/* Background de Mesa */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                 style={{ backgroundImage: 'radial-gradient(#6f5247 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-rooster-600 font-bold tracking-widest uppercase text-sm mb-3">Cardápio da Casa</h2>
                        <p className="text-4xl md:text-5xl font-extrabold font-serif text-coffee-900 mb-6 drop-shadow-sm">
                            Menu de Habilidades
                        </p>
                        <p className="max-w-2xl mx-auto text-coffee-800 text-lg font-medium">
                            Preparado na hora, quente e sem bugs (na maioria das vezes).
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20 pt-10">
                    {SKILLS.map((skillGroup, idx) => {
                        const Icon = categoryIcons[idx] || Code2;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15 }}
                                className="relative group mt-10"
                            >
                                {/* 1. VAPOR (Saindo de trás do café) */}
                                <Steam />

                                {/* 2. ALÇA DA XÍCARA (Fica atrás do corpo - z-0) */}
                                <div className="absolute top-8 -right-8 w-20 h-24 border-[12px] border-coffee-800 rounded-r-[3rem] border-l-0 bg-transparent shadow-xl transition-transform duration-300 group-hover:rotate-6 z-0" />

                                {/* 3. CORPO DA XÍCARA (z-10) */}
                                <div className="relative z-10 bg-gradient-to-br from-coffee-50 to-[#dcd0c8] min-h-[380px] w-full rounded-b-[4rem] rounded-t-sm shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] border-x border-b border-white/50 flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-4">

                                    {/* BOCA DA XÍCARA (Abertura Oval em cima) */}
                                    <div className="absolute -top-8 w-[104%] h-16 bg-[#3f2e2a] rounded-[50%] border-4 border-[#eaddd7] shadow-inner overflow-hidden flex items-center justify-center z-20">
                                        {/* Café líquido */}
                                        <div className="w-[90%] h-[80%] bg-[#2c1a16] rounded-[50%] shadow-[inset_0_5px_10px_rgba(0,0,0,0.8)] opacity-95 relative overflow-hidden">
                                            {/* Reflexo no café */}
                                            <div className="absolute top-2 left-4 w-1/3 h-4 bg-white/5 blur-sm -rotate-12 rounded-full" />

                                            {/* Bolhas no café (Decorativo) */}
                                            <div className="absolute bottom-2 right-8 w-2 h-2 bg-[#6f5247] rounded-full opacity-50" />
                                            <div className="absolute top-4 right-12 w-1 h-1 bg-[#6f5247] rounded-full opacity-50" />
                                        </div>
                                    </div>

                                    {/* Ícone flutuando sobre o café */}
                                    <div className="absolute -top-12 z-30 bg-rooster-600 p-3 rounded-2xl shadow-lg border-2 border-white/20 transform group-hover:scale-110 group-hover:-rotate-12 transition-all duration-300">
                                        <Icon size={28} className="text-white" />
                                    </div>

                                    {/* Conteúdo do Card */}
                                    <div className="mt-12 px-6 pb-8 w-full flex flex-col h-full">
                                        <h3 className="text-xl font-extrabold text-coffee-900 text-center mb-1 font-serif">
                                            {skillGroup.category.split('(')[0]}
                                        </h3>
                                        <p className="text-[10px] text-center text-coffee-600 uppercase tracking-widest mb-6 font-bold opacity-70">
                                            {skillGroup.category.match(/\((.*?)\)/)?.[1] || "Blend Especial"}
                                        </p>

                                        <ul className="space-y-3 w-full flex-1">
                                            {skillGroup.items.map((tech) => (
                                                <li key={tech} className="flex items-center justify-between text-white bg-coffee-900 px-3 py-2 rounded-lg shadow-md border border-coffee-800 transition-colors">
                                                    <span className="font-bold text-sm">{tech}</span>
                                                    <Check size={14} className="text-rooster-300" strokeWidth={3} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Brilho lateral na xícara (Cerâmica) */}
                                    <div className="absolute top-10 left-3 w-4 h-[80%] bg-gradient-to-b from-white/40 to-transparent blur-md rounded-full pointer-events-none" />
                                </div>

                                {/* 4. PIRES (Sombra de base) */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[120%] h-8 bg-[#3f2e2a] rounded-[50%] blur-sm opacity-20 shadow-xl z-0 scale-90 group-hover:scale-75 transition-transform duration-300" />

                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;