"use client"

import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// IMPORTANTE: Importar o Link do router
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
    // Removemos o selectedProject (modal)
    // Mantemos apenas o hoveredProject para o efeito de background
    const [hoveredProject, setHoveredProject] = useState<string | null>(PROJECTS[0].id);

    return (
        <section id="projetos" className="relative min-h-screen flex items-center py-20 overflow-hidden bg-[#130e0c]">

            {/* === BACKGROUND IMERSIVO (MANTIDO) === */}
            <div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
                <AnimatePresence mode='wait'>
                    {PROJECTS.map((project) => (
                        project.id === hoveredProject && (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 0.4, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${project.imagePlaceholder})` }}
                            >
                                <div className="absolute inset-0 bg-[#0f0a08]/60 mix-blend-multiply" />
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0f0a08] via-[#0f0a08]/80 to-transparent" />
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 sm:px-12 relative z-10 w-full">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* COLUNA ESQUERDA: LISTA DE PROJETOS */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <div className="mb-12">
                            <h2 className="text-[#e34234] font-bold tracking-[0.2em] uppercase text-xs mb-4 flex items-center gap-2">
                                <span className="w-8 h-px bg-[#e34234]"></span>
                                Menu de Criações
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-serif text-[#eaddd7]">
                                Obras Selecionadas
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {PROJECTS.map((project, idx) => (
                                // AQUI ESTÁ A MUDANÇA PRINCIPAL: Link ao invés de div com onClick
                                <Link
                                    key={project.id}
                                    to={`/projetos/${project.id}`}
                                    className="block"
                                >
                                    <motion.div
                                        className={`group relative border-b border-white/10 pb-6 pt-2 cursor-pointer transition-all duration-300 ${
                                            hoveredProject === project.id ? 'lg:pl-8' : ''
                                        }`}
                                        onMouseEnter={() => setHoveredProject(project.id)}
                                    >
                                        {/* Indicador Hover (Desktop) */}
                                        {hoveredProject === project.id && (
                                            <motion.span
                                                layoutId="indicator"
                                                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-[#e34234] hidden lg:block"
                                            />
                                        )}

                                        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-8">
                                            <div className="flex items-baseline gap-4">
                                                <span className="font-mono text-xs text-white/30">0{idx + 1}</span>
                                                <h3 className={`text-2xl md:text-4xl font-serif transition-colors duration-300 ${
                                                    hoveredProject === project.id ? 'text-[#eaddd7]' : 'text-white/40'
                                                }`}>
                                                    {project.title}
                                                </h3>
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <span className="font-mono text-xs text-[#e34234] uppercase tracking-widest hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {project.category}
                                                </span>
                                                <ArrowUpRight className={`transition-all duration-300 ${
                                                    hoveredProject === project.id ? 'text-[#e34234] translate-x-0 opacity-100' : 'text-white/20 -translate-x-4 opacity-0'
                                                }`} />
                                            </div>
                                        </div>

                                        {/* PREVIEW MOBILE */}
                                        <div className="lg:hidden h-0 overflow-hidden group-hover:h-auto transition-all duration-500 mt-0 group-hover:mt-4">
                                            <div className="aspect-video w-full rounded-lg overflow-hidden relative border border-white/10">
                                                <img
                                                    src={project.imagePlaceholder}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover opacity-60"
                                                />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-white text-xs uppercase tracking-widest border border-white/50 px-3 py-1 bg-black/50 backdrop-blur-sm">Ver Detalhes</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* COLUNA DIREITA: DETALHES FIXOS (Desktop) */}
                    <div className="lg:col-span-5 hidden lg:flex flex-col justify-center h-full pl-12 border-l border-white/5">
                        <AnimatePresence mode='wait'>
                            {PROJECTS.map((project) => (
                                project.id === hoveredProject && (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="space-y-6"
                                    >
                                        <div className="inline-block px-3 py-1 border border-[#e34234]/30 bg-[#e34234]/10 rounded-full">
                                            <span className="text-[#e34234] font-mono text-xs uppercase tracking-widest">
                                                {project.category}
                                            </span>
                                        </div>

                                        <p className="text-xl text-[#d7ccc8] font-serif leading-relaxed italic">
                                            "{project.description}"
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-4">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-xs text-white/40 font-mono border border-white/10 px-2 py-1">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        <Link
                                            to={`/projetos/${project.id}`}
                                            className="group flex items-center gap-3 text-white mt-8 hover:text-[#e34234] transition-colors"
                                        >
                                            <span className="uppercase tracking-[0.2em] text-sm font-bold">Abrir Detalhes</span>
                                            <div className="w-8 h-px bg-white/30 group-hover:bg-[#e34234] transition-colors" />
                                        </Link>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;