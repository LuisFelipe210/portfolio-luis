"use client"

import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight, BookOpen, X, Layers, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

// Swiper & Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- COMPONENTE: ProjectModal ---
interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6 backdrop-blur-md bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                // Mudei o fundo do modal pra um tom SÓLIDO e ESCURO (#120c0b) pra contrastar com a nova cor da seção
                className="relative w-full max-w-5xl h-[95vh] sm:h-[85vh] bg-[#120c0b] rounded-t-2xl sm:rounded-2xl shadow-2xl border-t sm:border border-white/10 flex flex-col overflow-hidden"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botão de Fechar Flutuante */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 bg-black/60 text-white/80 rounded-full hover:bg-rooster-600 hover:text-white transition-all z-50 backdrop-blur-sm border border-white/10"
                >
                    <X size={20} />
                </button>

                {/* --- CONTEÚDO SCROLLABLE --- */}
                <div className="flex-1 overflow-y-auto custom-scrollbar bg-[#120c0b]">

                    {/* CONTAINER DA IMAGEM */}
                    <div className="relative w-full bg-[#0a0605] min-h-[300px] sm:min-h-[450px] flex items-center justify-center overflow-hidden border-b border-white/5 group">

                        {/* Background Borrado */}
                        <div
                            className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-110"
                            style={{ backgroundImage: `url(${project.imagePlaceholder})` }}
                        />

                        {/* Imagem Real */}
                        <img
                            src={project.imagePlaceholder}
                            alt={project.title}
                            className="relative w-full h-full max-h-[60vh] object-contain z-10 p-4 sm:p-0 shadow-2xl"
                            loading="lazy"
                        />

                        {/* Gradiente base */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#120c0b] via-transparent to-transparent z-20 pointer-events-none" />

                        {/* Indicador de Scroll */}
                        <div className="absolute bottom-6 right-6 z-30 animate-bounce bg-black/50 p-2 rounded-full backdrop-blur-sm border border-white/10 text-white/70 pointer-events-none">
                            <ChevronDown size={20} />
                        </div>
                    </div>

                    {/* --- INFO --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 sm:p-10 max-w-5xl mx-auto">

                        {/* Texto */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="border-b border-white/5 pb-6">
                                <span className="inline-block px-3 py-1 rounded bg-rooster-600/10 text-rooster-500 text-xs font-bold uppercase tracking-widest border border-rooster-600/20 mb-3">
                                    {project.category}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                                    {project.title}
                                </h3>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-rooster-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <BookOpen size={16} /> Sobre o Projeto
                                </h4>
                                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold text-rooster-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <Layers size={16} /> Tecnologias
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1.5 rounded bg-white/5 text-gray-300 text-sm border border-white/10 font-mono">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="lg:col-span-1">
                            <div className="bg-white/5 rounded-xl p-5 border border-white/5 sticky top-6">
                                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Acesso Rápido</h4>
                                <div className="space-y-3">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-rooster-600 text-white font-bold hover:bg-rooster-500 transition-all shadow-lg active:scale-95"
                                    >
                                        Visitar Site <ExternalLink size={18} />
                                    </a>

                                    {project.repoLink && (
                                        <a
                                            href={project.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-lg bg-black/40 border border-white/10 text-gray-300 font-bold hover:text-white hover:border-white/30 transition-all active:scale-95"
                                        >
                                            Ver Código <Github size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        if (selectedProject) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [selectedProject]);

    return (
        // AQUI ESTÁ A COR NOVA: Um gradiente sutil de marrom café (do médio para o escuro)
        // Isso dá volume e separa das outras seções que são chapadas
        <section id="projetos" className="py-20 lg:py-32 bg-gradient-to-b from-[#2e211e] to-[#1a1210] relative overflow-hidden">

            {/* Background Texture para tirar o aspecto "liso" */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-white/10 pb-6">
                    <div>
                        <h2 className="text-rooster-500 font-bold tracking-[0.2em] uppercase text-xs mb-2 flex items-center gap-2">
                            <span className="w-6 h-px bg-rooster-500"></span>
                            Portfólio
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                            Trabalhos <span className="text-rooster-500">Recentes</span>
                        </h3>
                    </div>

                    {/* Navegação (Apenas Desktop) */}
                    <div className="hidden lg:flex gap-3">
                        <button ref={prevRef} className="p-3 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-rooster-600 hover:bg-rooster-600/10 transition-all">
                            <ChevronLeft size={24} />
                        </button>
                        <button ref={nextRef} className="p-3 rounded-full border border-white/10 text-white/50 hover:text-white hover:border-rooster-600 hover:bg-rooster-600/10 transition-all">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Swiper */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1.15}
                    centeredSlides={false}
                    navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                    onInit={(swiper) => {
                        // @ts-ignore
                        swiper.params.navigation.prevEl = prevRef.current;
                        // @ts-ignore
                        swiper.params.navigation.nextEl = nextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 24 },
                        1024: { slidesPerView: 3, spaceBetween: 32 },
                    }}
                    className="projects-swiper !pb-8"
                >
                    {PROJECTS.map((project) => (
                        <SwiperSlide key={project.id} className="h-auto">
                            {/* Card Inteiro Clicável - Fundo mais escuro (#150f0e) para contrastar com a seção nova */}
                            <div
                                onClick={() => setSelectedProject(project)}
                                className="group h-full flex flex-col bg-[#150f0e] border border-white/5 rounded-2xl overflow-hidden hover:border-rooster-500/40 transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-lg"
                            >
                                {/* Imagem */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                                    <img
                                        src={project.imagePlaceholder}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                                        loading="lazy"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#150f0e] to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                    <div className="absolute top-3 left-3">
                                        <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px] font-bold text-rooster-400 uppercase tracking-widest border border-white/10">
                                            {project.category}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-3 right-3 bg-rooster-600 p-2 rounded-full text-white shadow-lg translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>

                                {/* Info Body */}
                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="text-lg font-bold text-white group-hover:text-rooster-500 transition-colors mb-2 line-clamp-1">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Minimalista */}
                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                                        {project.tags.slice(0, 3).map((tag) => (
                                            <span key={tag} className="text-[10px] font-medium text-gray-300 bg-white/5 px-2 py-1 rounded border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* MODAL */}
            <AnimatePresence>
                {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
            </AnimatePresence>
        </section>
    );
};

export default Projects;