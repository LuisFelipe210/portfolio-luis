import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SmokeEffect from './SmokeEffect';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Prateleira = ({ top }: { top: string }) => (
    <div className={`absolute left-0 right-0 h-8 z-0 transition-all duration-300 pointer-events-none ${top}`}>
        <div className="w-full h-4 bg-[#6f5247] shadow-[0_5px_15px_rgba(0,0,0,0.6),_inset_0_4px_8px_rgba(255,255,255,0.1)] absolute bottom-0 left-0"></div>
        <div className="w-full h-2 bg-[#4e3a33] absolute bottom-4 left-0"></div>
        <div className="w-full h-px bg-white/20 absolute bottom-6 left-0"></div>
    </div>
);

const Projects: React.FC = () => {
    // Configura os botões de navegação customizados
    const prevRef = React.useRef(null);
    const nextRef = React.useRef(null);

    return (
        <section id="projetos" className="py-32 bg-[#2c1a16] relative overflow-hidden">
            {/* Backgrounds */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                 style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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

                <div className="relative z-10 pb-16">

                    <div className="absolute inset-0 hidden lg:block z-20 pointer-events-none">
                        <button ref={prevRef} className="absolute left-0 top-1/2 -translate-y-1/2 -ml-12 p-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors pointer-events-auto">
                            <ChevronLeft size={24} />
                        </button>
                        <button ref={nextRef} className="absolute right-0 top-1/2 -translate-y-1/2 -mr-12 p-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-colors pointer-events-auto">
                            <ChevronRight size={24} />
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
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "0px" }}
                                    transition={{ duration: 0.5 }}
                                    className="group relative h-full"
                                >
                                    <div className="relative bg-[#e6e2de] w-full rounded-b-xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-1 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden isolate flex flex-col h-full">

                                        <div className="h-4 bg-[#d1c7c0] border-b-2 border-[#b8afa8] relative z-20 flex items-center justify-center">
                                            <div className="w-full h-full opacity-20 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,#000_2px,#000_4px)]"></div>
                                        </div>

                                        <div className="absolute top-8 right-6 w-6 h-6 rounded-full border border-gray-300 shadow-inner bg-transparent z-20 opacity-60 flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-gray-400/50"></div>
                                        </div>

                                        <div className="p-4 pb-0">
                                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm bg-gray-100 group-hover:border-rooster-500/30 transition-colors">
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

                                        <div className="p-5 pt-4 flex flex-col flex-grow h-full">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-2xl font-black text-coffee-900 font-serif leading-tight group-hover:text-rooster-600 transition-colors">
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

                                        {/* Efeito de Material do Pacote */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-white/5 to-white/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 mix-blend-overlay rounded-b-xl"></div>
                                    </div>

                                    {/* Sombra de Chão */}
                                    <div className="absolute -bottom-4 left-4 right-4 h-4 bg-black/40 blur-lg rounded-[100%] group-hover:scale-90 group-hover:bg-black/20 transition-all duration-500"></div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-10 -mb-3 z-0">
                    <div className="w-full h-10 bg-[#6f5247] shadow-[0_5px_15px_rgba(0,0,0,0.5),_inset_0_4px_8px_rgba(255,255,255,0.1)] absolute bottom-0 left-0"></div>
                    <div className="w-full h-2 bg-[#4e3a33] absolute -bottom-2 left-0"></div>
                </div>
            </div>
        </section>
    );
};

export default Projects;