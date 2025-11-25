import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Tag, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SmokeEffect from './SmokeEffect';

const Projects: React.FC = () => {
    return (
        <section id="projetos" className="py-32 bg-[#2c1a16] relative overflow-hidden">
            {/* Background: Textura de Juta/Saca de café escura */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                 style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 }}>
            </div>

            {/* Luz de Spot vindo de cima */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#e34234]/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6 border-b border-white/10 pb-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <h2 className="text-rooster-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 flex items-center gap-2">
                            <span className="w-8 h-px bg-rooster-500"></span>
                            Portfolio Selecionado
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-extrabold font-serif text-[#eaddd7] relative inline-block">
                            Grãos Especiais
                            <div className="absolute -top-12 -right-12 opacity-30 pointer-events-none scale-75">
                                <SmokeEffect />
                            </div>
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-white/60 text-sm max-w-xs text-right hidden md:block"
                    >
                        <p>Safra {new Date().getFullYear()}</p>
                        <p>100% Código Arábica</p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                    {PROJECTS.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 100, rotate: 2 }}
                            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: idx * 0.15, type: "spring", bounce: 0.3 }}
                            className="group relative"
                        >
                            {/* O PACOTE DE CAFÉ (Coffee Bag) */}
                            <div className="relative bg-[#e6e2de] w-full rounded-b-xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-1 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden isolate">

                                {/* 1. SELO DO PACOTE (Topo ondulado/crimped) */}
                                <div className="h-4 bg-[#d1c7c0] border-b-2 border-[#b8afa8] relative z-20 flex items-center justify-center">
                                    {/* Textura de lacre */}
                                    <div className="w-full h-full opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#000_2px,#000_4px)]"></div>
                                </div>

                                {/* 2. VÁLVULA DE AROMA (Detalhe Realista) */}
                                <div className="absolute top-8 right-6 w-6 h-6 rounded-full border border-gray-300 shadow-inner bg-transparent z-20 opacity-60 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-gray-400/50"></div>
                                </div>

                                {/* 3. O RÓTULO (Imagem do Projeto) */}
                                <div className="p-4 pb-0">
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm bg-gray-100 group-hover:border-rooster-500/30 transition-colors">
                                        <img
                                            src={project.imagePlaceholder}
                                            alt={project.title}
                                            className="w-full h-full object-cover filter sepia-[0.2] contrast-110 group-hover:sepia-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                                        />

                                        {/* Badge de Categoria (Selo de Qualidade) */}
                                        <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-coffee-900 text-[10px] font-bold px-2 py-1 uppercase tracking-wider border border-coffee-200 shadow-sm">
                                            {project.category}
                                        </div>
                                    </div>
                                </div>

                                {/* 4. INFORMAÇÕES DO CAFÉ (Texto) */}
                                <div className="p-6 pt-5">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-2xl font-black text-coffee-900 font-serif leading-tight group-hover:text-rooster-600 transition-colors">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight className="text-coffee-300 group-hover:text-rooster-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                                    </div>

                                    <p className="text-coffee-600 text-sm mb-6 leading-relaxed line-clamp-3 font-medium border-l-2 border-rooster-500/20 pl-3">
                                        {project.description}
                                    </p>

                                    {/* Notas de Sabor (Tags) */}
                                    <div className="mb-6">
                                        <span className="text-[10px] uppercase text-coffee-400 font-bold tracking-widest mb-2 block">Notas Sensoriais</span>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="inline-flex items-center px-2 py-1 rounded bg-[#dcd0c8] text-coffee-800 text-xs font-bold border border-transparent group-hover:border-rooster-500/20 transition-colors">
                          {tag}
                        </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Botões de Ação */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-coffee-200/50 border-dashed">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center bg-coffee-900 text-[#eaddd7] py-3 rounded text-sm font-bold uppercase tracking-wide hover:bg-rooster-600 transition-colors shadow-lg hover:shadow-rooster-500/20"
                                        >
                                            Degustar (Ver)
                                        </a>

                                        {project.repoLink && (
                                            <a
                                                href={project.repoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 text-coffee-700 hover:text-coffee-900 hover:bg-white rounded transition-colors"
                                                title="Ver Receita (Código)"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Efeito de Material do Pacote (Brilho Plástico/Papel) */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-white/5 to-white/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 mix-blend-overlay rounded-b-xl"></div>
                            </div>

                            {/* Sombra de Chão */}
                            <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/40 blur-lg rounded-[100%] group-hover:scale-90 group-hover:bg-black/20 transition-all duration-500"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Decorativo de Prateleira no fundo */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#4e3a33] opacity-30"></div>
            </div>
        </section>
    );
};

export default Projects;