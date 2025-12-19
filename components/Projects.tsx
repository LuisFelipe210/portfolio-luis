"use client"

import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Coffee, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const COFFEE_MODERN = {
    bgDark: "#0F0B09",
    bgPanel: "#1A1410",
    accentGold: "#D4A373",
    textMain: "#EAE0D5",
    textMuted: "#8D7B68",
    glassBorder: "rgba(212, 163, 115, 0.15)"
};

const ProjectListItem = ({ project, index, isHovered, onHover }: any) => {
    return (
        <div
            className="block group relative z-10"
            onMouseEnter={() => onHover(project.id)}
        >
            <div
                className={`relative py-6 transition-all duration-300 border-b border-[#D4A373]/10
                    ${isHovered ? 'lg:pl-6 bg-[#D4A373]/5' : 'pl-0'}
                `}
            >
                {/* Indicador lateral apenas para desktop */}
                {isHovered && (
                    <motion.div
                        layoutId="active-indicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4A373] hidden lg:block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                )}

                <div className="flex flex-col gap-3 pr-2 lg:pr-4">
                    <Link to={`/projetos/${project.id}`} className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 lg:gap-6">
                            <span className={`font-mono text-[10px] lg:text-xs tracking-widest transition-colors duration-300 ${isHovered ? `text-[#D4A373]` : `text-[#8D7B68]/40`}`}>
                                0{index + 1}
                            </span>

                            <h3 className={`text-xl md:text-4xl font-sans font-bold tracking-tight transition-colors duration-300 ${
                                isHovered ? `text-[#EAE0D5]` : `text-[#8D7B68] group-hover:text-[#EAE0D5]`
                            }`}>
                                {project.title}
                            </h3>
                        </div>

                        <ArrowUpRight
                            className={`transition-all duration-300 ${
                                isHovered ? `text-[#D4A373] rotate-45` : `text-[#8D7B68]/30 rotate-0`
                            }`}
                            size={20}
                        />
                    </Link>

                    {/* DESCRIÇÃO EMBAIXO DO NOME - Visível apenas no Mobile ou quando Hovered no Mobile */}
                    <AnimatePresence>
                        {isHovered && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="lg:hidden pl-8 pr-4"
                            >
                                <p className="text-sm text-[#8D7B68] leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.slice(0, 3).map((tag: string) => (
                                        <span key={tag} className="text-[9px] font-mono text-[#D4A373] border border-[#D4A373]/20 px-2 py-0.5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    to={`/projetos/${project.id}`}
                                    className="text-[10px] font-mono uppercase tracking-widest text-[#D4A373] flex items-center gap-2"
                                >
                                    Ver Detalhes <ArrowUpRight size={12} />
                                </Link>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

const Projects: React.FC = () => {
    const [hoveredProject, setHoveredProject] = useState<string | null>(PROJECTS[0].id);
    const activeProject = PROJECTS.find(p => p.id === hoveredProject) || PROJECTS[0];

    useEffect(() => {
        const isMobile = window.innerWidth < 1024;
        if (isMobile) {
            const interval = setInterval(() => {
                setHoveredProject((current) => {
                    const currentIndex = PROJECTS.findIndex(p => p.id === current);
                    const nextIndex = (currentIndex + 1) % PROJECTS.length;
                    return PROJECTS[nextIndex].id;
                });
            }, 4000); // 4 segundos pra dar tempo de ler a desgraça da descrição
            return () => clearInterval(interval);
        }
    }, []);

    return (
        <section id="projetos" className="relative py-16 lg:py-24 overflow-hidden" style={{ backgroundColor: COFFEE_MODERN.bgDark }}>
            {/* Grid Decorativo */}
            <div
                className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(${COFFEE_MODERN.accentGold} 1px, transparent 1px), linear-gradient(90deg, ${COFFEE_MODERN.accentGold} 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />

            <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-20 pb-6 border-b border-[#D4A373]/20 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-2 text-[#D4A373]">
                            <Terminal size={14} />
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">/Select/Work</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-sans font-black text-white tracking-tighter leading-none">
                            SELECTED <span className="text-[#8D7B68]">WORK.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* LISTA DE PROJETOS COM DESCRIÇÃO EMBUTIDA NO MOBILE */}
                    <div className="lg:col-span-7 border-t border-[#D4A373]/10">
                        {PROJECTS.map((project, idx) => (
                            <ProjectListItem
                                key={project.id}
                                index={idx}
                                project={project}
                                isHovered={hoveredProject === project.id}
                                onHover={setHoveredProject}
                            />
                        ))}
                    </div>

                    {/* CARD LATERAL - VISÍVEL APENAS DESKTOP */}
                    <div className="hidden lg:flex lg:col-span-5 flex-col lg:sticky lg:top-32">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeProject.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="p-8 rounded-sm bg-[#1A1410]/80 border border-[#D4A373]/20 backdrop-blur-md shadow-2xl"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between pb-4 border-b border-[#D4A373]/10">
                                        <div className="flex items-center gap-2">
                                            <Coffee size={14} className="text-[#D4A373]" />
                                            <span className="text-[#8D7B68] font-mono text-[10px] uppercase tracking-widest">Project Specs</span>
                                        </div>
                                    </div>
                                    <p className="text-lg text-[#EAE0D5] font-light leading-relaxed">
                                        {activeProject.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {activeProject.tags.map((tag: string) => (
                                            <span key={tag} className="text-[11px] font-mono text-[#D4A373] bg-[#0F0B09] px-3 py-1 border border-[#D4A373]/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        to={`/projetos/${activeProject.id}`}
                                        className="group w-full flex items-center justify-between bg-[#D4A373] text-[#0F0B09] px-6 py-4 font-bold uppercase tracking-[0.2em] text-xs transition-all hover:bg-white"
                                    >
                                        <span>Case Details</span>
                                        <ArrowUpRight size={18} />
                                    </Link>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;