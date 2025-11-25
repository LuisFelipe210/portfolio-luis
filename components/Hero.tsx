import React, { Suspense } from 'react';
import { PERSONAL_INFO, RADAR_DATA } from '../constants';
import { ArrowRight, Github, Linkedin, Mail, Coffee, Zap } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { motion } from 'framer-motion';
import CoffeeScene from './CoffeeScene';
import SmokeEffect from './SmokeEffect';

const Hero: React.FC = () => {
    return (
        <section id="sobre" className="min-h-screen flex items-center pt-20 pb-12 overflow-hidden relative bg-coffee-50">

            {/* BACKGROUND 3D */}
            <Suspense fallback={<div className="absolute inset-0 bg-coffee-50" />}>
                <CoffeeScene />
            </Suspense>

            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-r from-coffee-50/90 via-coffee-50/70 to-transparent z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        className="sm:text-center lg:col-span-7 lg:text-left order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-md text-rooster-600 text-sm font-bold uppercase tracking-wide mb-6 border border-rooster-100 shadow-sm"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Coffee size={16} className="mr-2 animate-bounce" />
                            Café passado na hora & Código Limpo
                        </motion.div>

                        <h1 className="text-4xl tracking-tight font-extrabold text-coffee-900 sm:text-5xl md:text-6xl font-serif mb-4 leading-tight drop-shadow-sm">
                            <span className="block">Transformando</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rooster-600 to-coffee-800">
                Cafeína em Software
              </span>
                        </h1>

                        <p className="mt-3 text-base sm:text-lg text-coffee-800 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed bg-white/30 backdrop-blur-sm p-4 rounded-xl border border-white/50">
                            Sou <span className="font-bold text-rooster-600">{PERSONAL_INFO.name}</span>.
                            Desenvolvo soluções fullstack robustas enquanto a cafeteira trabalha.
                            Especialista em criar experiências digitais que despertam seus usuários.
                        </p>

                        <motion.div
                            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <a
                                href="#projetos"
                                className="group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-coffee-900 hover:bg-coffee-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative flex items-center">
                  Ver Cardápio (Projetos)
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                            </a>

                            <div className="flex items-center justify-center gap-4">
                                {[
                                    { icon: Github, href: PERSONAL_INFO.github },
                                    { icon: Linkedin, href: PERSONAL_INFO.linkedin },
                                    { icon: Mail, href: `mailto:${PERSONAL_INFO.email}` }
                                ].map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white/80 backdrop-blur rounded-xl text-coffee-900 hover:text-rooster-500 shadow-md border border-white transition-all hover:-translate-y-1"
                                    >
                                        <item.icon size={22} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Chart Content */}
                    <motion.div
                        className="mt-12 lg:mt-0 lg:col-span-5 relative order-1 lg:order-2"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative mx-auto w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-4 sm:p-6 border border-coffee-200">
                            <div className="absolute -top-6 -right-6 z-30">
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-2">
                                    <SmokeEffect />
                                </div>
                                <div className="bg-rooster-500 text-white p-3 rounded-2xl shadow-lg rotate-12 relative z-20">
                                    <Zap size={28} fill="currentColor" />
                                </div>
                            </div>

                            <h3 className="text-center text-sm font-bold text-coffee-800 font-serif mb-4 border-b border-coffee-100 pb-2">
                                Blend de Habilidades
                            </h3>

                            <div className="h-[240px] md:h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="75%" data={RADAR_DATA}>
                                        <PolarGrid stroke="#e0cec7" strokeDasharray="3 3" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#4e3a33', fontSize: 11, fontWeight: 600, fontFamily: 'Merriweather' }} />
                                        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                                        <Radar
                                            name="Luis"
                                            dataKey="A"
                                            stroke="#e34234"
                                            strokeWidth={3}
                                            fill="#e34234"
                                            fillOpacity={0.3}
                                        />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>

                            <p className="text-center text-xs text-coffee-400 mt-2 italic">
                                *Níveis de cafeína podem variar
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;