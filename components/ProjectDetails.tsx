import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowLeft, Layers, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetails: React.FC = () => {
    const { id } = useParams();
    const project = PROJECTS.find((p) => p.id === id);

    // Rola para o topo sempre que abrir um novo projeto
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) return null; // Ou seu componente de Loading/404

    // Animações
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="min-h-screen bg-[#0f0a08] text-[#eaddd7] selection:bg-[#e34234] selection:text-white"
        >
            {/* PADDING TOP GRANDE (pt-32 ou pt-40)
               Isso garante que o conteúdo comece bem abaixo da Navbar
            */}
            <div className="pt-32 pb-20 px-6 sm:px-12 max-w-[1600px] mx-auto">

                {/* BOTÃO VOLTAR (Estilo minimalista) */}
                {/* BOTÃO VOLTAR */}
                <motion.div variants={fadeInUp} className="mb-12">
                    {/* AQUI: Adicionei o #projetos ao final da rota */}
                    <Link
                        to="/#projetos"
                        className="group inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-white/40 hover:text-[#e34234] transition-colors"
                    >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300" />
                        Voltar para Projetos
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* === COLUNA ESQUERDA (STICKY) ===
                        Fica fixa na tela enquanto o conteúdo da direita rola
                    */}
                    <div className="lg:col-span-5 relative">
                        <div className="lg:sticky lg:top-32 space-y-10">

                            <motion.div variants={fadeInUp}>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="w-12 h-[1px] bg-[#e34234]"></span>
                                    <span className="font-mono text-[#e34234] text-xs uppercase tracking-widest">
                                        {project.category}
                                    </span>
                                </div>
                                <h1 className="text-5xl sm:text-7xl xl:text-6xl font-serif text-[#eaddd7] leading-[0.9]">
                                    {project.title}
                                </h1>
                            </motion.div>

                            {/* Tabela de Metadados */}
                            <motion.div variants={fadeInUp} className="border-t border-white/10 pt-8 space-y-6">
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="flex items-center gap-2 font-mono text-xs text-white/40 uppercase tracking-widest mb-2">
                                            <User size={12} /> Cliente / Contexto
                                        </h4>
                                        <p className="font-serif text-lg">Portfolio Work</p>
                                    </div>
                                    <div>
                                        <h4 className="flex items-center gap-2 font-mono text-xs text-white/40 uppercase tracking-widest mb-2">
                                            <Calendar size={12} /> Ano
                                        </h4>
                                        <p className="font-serif text-lg">2024</p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="flex items-center gap-2 font-mono text-xs text-white/40 uppercase tracking-widest mb-3">
                                        <Layers size={12} /> Tech Stack
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono text-[#eaddd7] border border-white/10 px-2 py-1 bg-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Botões de Ação */}
                            <motion.div variants={fadeInUp} className="flex flex-col gap-4 pt-4">
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group w-full py-4 bg-[#e34234] text-white font-bold uppercase tracking-[0.15em] text-xs flex items-center justify-center gap-3 hover:bg-[#c62828] transition-all"
                                >
                                    Visitar Projeto
                                    <ExternalLink size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                                </a>

                                {project.repoLink && (
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group w-full py-4 border border-white/10 text-white/60 font-bold uppercase tracking-[0.15em] text-xs flex items-center justify-center gap-3 hover:border-[#eaddd7] hover:text-[#eaddd7] transition-all"
                                    >
                                        Ver Código <Github size={14} />
                                    </a>
                                )}
                            </motion.div>
                        </div>
                    </div>

                    {/* === COLUNA DIREITA (SCROLLABLE CONTENT) === */}
                    <div className="lg:col-span-7 space-y-16 lg:pt-8">

                        {/* Imagem Principal (Hero) */}
                        <motion.div
                            variants={fadeInUp}
                            className="relative aspect-video w-full bg-[#1a1110] overflow-hidden border border-white/5 group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a08] via-transparent to-transparent opacity-20 z-10" />
                            <img
                                src={project.imagePlaceholder}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </motion.div>

                        {/* Texto Descritivo */}
                        <motion.div variants={fadeInUp} className="prose prose-invert max-w-none">
                            <h3 className="font-serif text-3xl text-[#eaddd7] mb-6">O Desafio</h3>
                            <p className="text-xl text-[#d7ccc8] font-serif font-light leading-relaxed mb-8">
                                {project.description}
                            </p>

                            {/* Texto fictício para preencher o design (Simulando um case study real) */}
                            <p className="text-[#9d8d88] text-lg leading-relaxed mb-6">
                                O objetivo principal deste projeto foi criar uma interface que não apenas funcionasse perfeitamente,
                                mas que também transmitisse a identidade visual da marca de forma coesa. Utilizamos uma abordagem
                                centrada no usuário para garantir que cada interação fosse intuitiva.
                            </p>
                            <p className="text-[#9d8d88] text-lg leading-relaxed">
                                A performance foi um pilar chave. Otimizamos cada imagem e script para garantir tempos de carregamento
                                mínimos, resultando em uma pontuação alta no Lighthouse e uma experiência fluida em dispositivos móveis.
                            </p>
                        </motion.div>

                        {/* Galeria Secundária (Placeholder) - Opcional se você tiver mais imagens */}
                        <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
                            <div className="aspect-square bg-[#1a1110] border border-white/5 flex items-center justify-center text-white/20 font-mono text-xs uppercase">
                                [Imagem Detalhe 01]
                            </div>
                            <div className="aspect-square bg-[#1a1110] border border-white/5 flex items-center justify-center text-white/20 font-mono text-xs uppercase">
                                [Imagem Detalhe 02]
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetails;