import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight, BookOpen, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SmokeEffect from './SmokeEffect';
import { Project } from '../types';

// Importa os componentes e módulos do Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// --- COMPONENTE: ProjectModal ---
interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    return (
        <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-6 backdrop-blur-sm bg-coffee-900/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="relative w-full max-w-3xl max-h-[75vh] bg-coffee-50/95 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] border-4 border-rooster-500/50 flex flex-col overflow-hidden"
                initial={{ y: 50, scale: 0.9 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 50, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botão de Fechar */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 p-2 bg-rooster-600 text-white rounded-full shadow-xl border-2 border-white/50 hover:bg-rooster-500 transition-colors z-50"
                >
                    <X size={20} strokeWidth={3} />
                </button>

                {/* Header - Fixo */}
                <div className="flex-shrink-0 p-4 border-b-2 border-coffee-200">
                    <h3 className="text-xl font-extrabold font-serif text-coffee-900">
                        {project.title}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-rooster-600 font-bold mt-1">{project.category}</p>
                </div>

                {/* Content - Grid Layout */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3 p-4 overflow-auto">
                    {/* Coluna Esquerda - Imagem */}
                    <div className="flex flex-col justify-center">
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg border-2 border-coffee-300 shadow-lg">
                            <img
                                src={project.imagePlaceholder}
                                alt={project.title}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/6f5247/eaddd7?text=Imagem+N%C3%A3o+Encontrada'; }}
                            />
                            <div className="absolute top-2 right-2 bg-coffee-900 text-white text-[8px] font-bold px-1.5 py-0.5 uppercase tracking-wider rounded-full shadow-md flex items-center gap-1">
                                <BookOpen size={8} /> Receita Completa
                            </div>
                        </div>
                    </div>

                    {/* Coluna Direita - Info */}
                    <div className="flex flex-col justify-between overflow-hidden">
                        {/* Descrição */}
                        <div className="flex-shrink-0">
                            <h4 className="text-sm font-bold text-coffee-900 border-b border-coffee-300 pb-1 mb-2 flex items-center gap-2">
                                <BookOpen size={14} className="text-rooster-500" /> Detalhes da Receita
                            </h4>
                            <p className="text-xs leading-relaxed text-coffee-800 line-clamp-3">
                                {project.description}
                            </p>
                        </div>

                        {/* Tags */}
                        <div className="flex-shrink-0 mt-3">
                            <span className="text-[9px] uppercase text-coffee-700 font-bold tracking-widest mb-1.5 block">Ingredientes/Tecnologias</span>
                            <div className="flex flex-wrap gap-1.5">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded-full bg-coffee-900 text-[#eaddd7] text-[10px] font-bold shadow-md">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Botões */}
                        <div className="flex-shrink-0 flex items-center gap-2 pt-3 mt-3 border-t border-coffee-300">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 text-center bg-rooster-600 text-[#eaddd7] py-2 rounded-lg text-xs font-black uppercase tracking-wider hover:bg-rooster-500 transition-colors shadow-lg flex items-center justify-center gap-1.5"
                            >
                                Degustar <ExternalLink size={14} />
                            </a>

                            {project.repoLink && (
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-coffee-700 text-white rounded-lg hover:bg-coffee-900 transition-colors shadow-lg"
                                    title="Ver Receita (Código)"
                                >
                                    <Github size={16} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects: React.FC = () => {
    // ESTADO PARA O MODAL
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Refs para navegação
    const prevRef = React.useRef(null);
    const nextRef = React.useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Efeito para travar o scroll quando o modal estiver aberto
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    return (
        <section id="projetos" className="py-32 bg-[#2c1a16] relative overflow-hidden overflow-x-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                 style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
                 }}>
            </div>
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#e34234]/10 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
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

                    <div className="hidden lg:block text-white/60 text-sm max-w-xs text-right pt-8">
                        <p>Arrasta pro lado pra ver a Safra completa!</p>
                        <p className="mt-1 text-xs italic">Clique nos botões laterais para navegar.</p>
                    </div>
                </div>

                {/* === CARROSSEL SWIPER === */}
                <div className="relative z-10 pb-16">
                    {/* CONTROLES DE NAVEGAÇÃO ABSOLUTOS (CUSTOMIZADOS) */}
                    <div className="absolute inset-0 hidden lg:block z-20 pointer-events-none">
                        {/* Botão Esquerdo */}
                        <button ref={prevRef} className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 p-2.5 rounded-lg bg-rooster-500 text-white shadow-xl hover:bg-rooster-600 transition-all pointer-events-auto">
                            <ChevronLeft size={24} strokeWidth={3} />
                        </button>
                        {/* Botão Direito */}
                        <button ref={nextRef} className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 p-2.5 rounded-lg bg-rooster-500 text-white shadow-xl hover:bg-rooster-600 transition-all pointer-events-auto">
                            <ChevronRight size={24} strokeWidth={3} />
                        </button>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1.1}
                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                        onInit={(swiper) => {
                            if(typeof swiper.params.navigation !== 'boolean') {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                            }
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                                allowTouchMove: false,
                            },
                        }}
                        className="projects-swiper"
                    >
                        {PROJECTS.map((project, idx) => (
                            <SwiperSlide key={project.id} className="h-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: isMobile ? 0 : 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "0px" }}
                                    transition={{ duration: isMobile ? 0 : 0.5, delay: idx * 0.1 }}
                                    className="group relative h-full"
                                >
                                    <div className="relative bg-[#e6e2de] w-full rounded-b-xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] overflow-hidden isolate flex flex-col h-full">
                                        {/* Selo do Pacote */}
                                        <div className="h-4 bg-[#d1c7c0] border-b-2 border-[#b8afa8] relative z-20 flex items-center justify-center">
                                            <div className="w-full h-full opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#000_2px,#000_4px)]"></div>
                                        </div>

                                        {/* Válvula de Aroma */}
                                        <div className="absolute top-8 right-6 w-6 h-6 rounded-full border border-gray-300 shadow-inner bg-transparent z-20 opacity-60 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-gray-400/50"></div>
                                        </div>

                                        {/* Imagem do Projeto */}
                                        <div className="p-4 pb-0">
                                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm bg-gray-100 group-hover:border-rooster-500/30 transition-colors">
                                                <img
                                                    src={project.imagePlaceholder}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover filter sepia-[0.2] contrast-110 group-hover:sepia-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                                                />
                                                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-coffee-900 text-[10px] font-bold px-2 py-1 uppercase tracking-wider border border-coffee-200 shadow-sm">
                                                    {project.category}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Informações do Café */}
                                        <div className="p-4 pt-3 flex flex-col flex-grow h-full">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-xl font-black text-coffee-900 font-serif leading-tight group-hover:text-rooster-600 transition-colors">
                                                    {project.title}
                                                </h3>
                                                <ArrowUpRight className="text-coffee-300 group-hover:text-rooster-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                                            </div>

                                            <div className="flex-grow">
                                                <p className="text-coffee-600 text-sm mb-6 leading-relaxed line-clamp-3 font-medium border-l-2 border-rooster-500/20 pl-3">
                                                    {project.description}
                                                </p>

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
                                            </div>

                                            <div className="flex items-center gap-3 pt-3 mt-4 border-t border-coffee-200/50 border-dashed mt-auto">
                                                <button
                                                    onClick={() => setSelectedProject(project)}
                                                    className="w-1/3 text-center bg-coffee-700/10 text-coffee-900 py-2.5 rounded text-sm font-bold uppercase tracking-wide hover:bg-coffee-700/20 transition-colors shadow-md flex items-center justify-center gap-1"
                                                >
                                                    <BookOpen size={16} /> Detalhes
                                                </button>

                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 text-center bg-coffee-900 text-[#eaddd7] py-2.5 rounded text-sm font-bold uppercase tracking-wide hover:bg-rooster-600 transition-colors shadow-lg hover:shadow-rooster-500/20"
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

                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-white/5 to-white/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 mix-blend-overlay rounded-b-xl"></div>
                                    </div>

                                    <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/40 blur-lg rounded-[100%] group-hover:scale-90 group-hover:bg-black/20 transition-all duration-500"></div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* ELEMENTO DA PRATELEIRA DE MADEIRA (Abaixo do Carrossel) */}
                    <div className="absolute bottom-0 left-0 right-0 h-10 -mb-3 z-0">
                        <div className="w-full h-10 bg-[#6f5247] shadow-[0_5px_15px_rgba(0,0,0,0.5),_inset_0_4px_8px_rgba(255,255,255,0.1)] absolute bottom-0 left-0"></div>
                        <div className="w-full h-2 bg-[#4e3a33] absolute -bottom-2 left-0"></div>
                    </div>
                </div>

                {/* MODAL DO PROJETO */}
                <AnimatePresence>
                    {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;