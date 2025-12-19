"use client"

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowLeft, Layers, Calendar, User, Terminal, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const COFFEE_MODERN = {
    bgDark: "#0F0B09",
    bgPanel: "#1A1410",
    accentGold: "#D4A373",
    textMain: "#EAE0D5",
    textMuted: "#8D7B68",
    glassBorder: "rgba(212, 163, 115, 0.15)"
};

const ProjectDetails: React.FC = () => {
    const { id } = useParams();
    const project = PROJECTS.find((p) => p.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) return null;

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="min-h-screen w-full selection:bg-[#D4A373] selection:text-[#0F0B09] relative"
            style={{ backgroundColor: COFFEE_MODERN.bgDark, color: COFFEE_MODERN.textMain }}
        >
            {/* === BACKGROUND === */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(${COFFEE_MODERN.accentGold} 1px, transparent 1px), linear-gradient(90deg, ${COFFEE_MODERN.accentGold} 1px, transparent 1px)`,
                        backgroundSize: '100px 100px'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B09] via-transparent to-[#0F0B09]" />
            </div>

            <div className="relative z-10 pt-32 pb-20 px-6 sm:px-12 max-w-[1600px] mx-auto">

                <motion.div variants={fadeInUp} className="mb-12">
                    <Link
                        to="/#projetos"
                        className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] transition-colors hover:text-[#D4A373]"
                        style={{ color: COFFEE_MODERN.textMuted }}
                    >
                        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                        <span>/ Return_To_Index</span>
                    </Link>
                </motion.div>

                {/* IMPORTANTE: O 'items-start' impede que a coluna da esquerda estique
                    automaticamente até a altura da direita, permitindo o scroll interno.
                */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* === COLUNA ESQUERDA (STICKY) === */}
                    <aside className="lg:col-span-5 lg:sticky lg:top-32 self-start">
                        <div className="space-y-10">
                            <motion.div variants={fadeInUp}>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-2 h-2 bg-[#D4A373] rounded-full animate-pulse" />
                                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8D7B68]">
                                        Case Study: {project.category}
                                    </span>
                                </div>

                                <h1 className="text-5xl sm:text-7xl xl:text-7xl font-sans font-black leading-[0.9] text-white tracking-tighter uppercase">
                                    {project.title}
                                    <span className="text-[#D4A373]">.</span>
                                </h1>
                            </motion.div>

                            <motion.div
                                variants={fadeInUp}
                                className="border-y py-8 space-y-8"
                                style={{ borderColor: COFFEE_MODERN.glassBorder }}
                            >
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <h4 className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#8D7B68]">
                                            <User size={12} /> Client_ID
                                        </h4>
                                        <p className="font-sans font-bold text-lg text-[#EAE0D5]">Portfolio Work</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#8D7B68]">
                                            <Calendar size={12} /> Deployment
                                        </h4>
                                        <p className="font-sans font-bold text-lg text-[#EAE0D5]">2024</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h4 className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#8D7B68]">
                                        <Layers size={12} /> Tech_Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-[11px] font-mono px-3 py-1 border bg-[#0F0B09] text-[#D4A373]"
                                                style={{ borderColor: COFFEE_MODERN.glassBorder }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeInUp} className="flex flex-col gap-4 pt-2">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group w-full py-4 font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-between px-6 bg-[#D4A373] text-[#0F0B09] hover:bg-white transition-all rounded-sm"
                                >
                                    <span>Launch Project</span>
                                    <ExternalLink size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"/>
                                </a>

                                {project.repoLink && (
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group w-full py-4 font-bold uppercase tracking-[0.2em] text-xs flex items-center justify-between px-6 border border-[#8D7B68]/30 text-[#8D7B68] hover:border-[#D4A373] hover:text-[#D4A373] transition-all rounded-sm"
                                    >
                                        <span>Source Code</span>
                                        <Github size={16} />
                                    </a>
                                )}
                            </motion.div>
                        </div>
                    </aside>

                    {/* === COLUNA DIREITA (CONTEÚDO) === */}
                    <div className="lg:col-span-7 space-y-16 lg:pt-4">
                        <motion.div
                            variants={fadeInUp}
                            className="relative aspect-video w-full overflow-hidden rounded-sm border bg-[#1A1410]"
                            style={{ borderColor: COFFEE_MODERN.glassBorder }}
                        >
                            <img
                                src={project.imagePlaceholder}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                            />
                        </motion.div>

                        <motion.div variants={fadeInUp} className="prose prose-invert max-w-none">
                            <div className="flex items-center gap-2 mb-6 text-[#D4A373]">
                                <Terminal size={20} />
                                <h3 className="font-mono text-lg uppercase tracking-wider m-0">
                                    Project_Log
                                </h3>
                            </div>

                            <div className="p-6 rounded-sm border bg-[#1A1410]/50 mb-8 font-mono text-sm leading-relaxed text-[#8D7B68]"
                                 style={{ borderColor: COFFEE_MODERN.glassBorder }}>
                                <span className="text-[#D4A373] block mb-2">// Executive Summary:</span>
                                <p className="text-[#EAE0D5]">
                                    {project.description}
                                </p>
                            </div>

                            <div className="space-y-6 text-lg font-light leading-relaxed text-[#EAE0D5]">
                                <p>
                                    <strong className="text-white">Foco:</strong> Implementação de alta performance e escalabilidade.
                                </p>
                                <p>
                                    O desenvolvimento priorizou a entrega de uma experiência fluida, utilizando padrões de design modernos e uma arquitetura robusta.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="space-y-4 pt-8 border-t border-[#D4A373]/10">
                            <h4 className="font-mono text-xs uppercase tracking-widest text-[#8D7B68] mb-4">Visual_Assets</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {[1, 2].map((i) => (
                                    <div key={i} className="aspect-video rounded-sm border flex items-center justify-center bg-[#1A1410]"
                                         style={{ borderColor: COFFEE_MODERN.glassBorder }}>
                                        <Cpu size={32} className="text-[#8D7B68] opacity-20" />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;