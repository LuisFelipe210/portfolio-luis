import React, { Suspense } from 'react';
import { PERSONAL_INFO, RADAR_DATA } from '../constants';
import { ArrowRight, Github, Linkedin, Mail, Coffee, Zap } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { motion } from 'framer-motion';
// Importa a porra do 3D
import CoffeeScene from './CoffeeScene';
import SmokeEffect from './SmokeEffect';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center pt-20 pb-12 overflow-hidden relative bg-coffee-50">

            {/* BACKGROUND 3D AQUI, DESGRAÇA! */}
            {/* Suspense pra não quebrar se demorar 1ms carregando */}
            <Suspense fallback={<div className="absolute inset-0 bg-coffee-50" />}>
                <CoffeeScene />
            </Suspense>

            {/* Overlay gradiente pra garantir que o texto fique legível */}
            <div className="absolute inset-0 bg-gradient-to-r from-coffee-50/90 via-coffee-50/70 to-transparent z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        className="lg:col-span-7 text-center lg:text-left"
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

                        <h1 className="text-5xl tracking-tight font-extrabold text-coffee-900 sm:text-6xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-sm">
                            <span className="block">Transformando</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rooster-600 to-coffee-800">
                Cafeína em Software
              </span>
                        </h1>

                        <p className="mt-4 text-xl text-coffee-800 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed bg-white/30 backdrop-blur-sm p-4 rounded-xl border border-white/50">
                            Sou <span className="font-bold text-rooster-600">{PERSONAL_INFO.name}</span>.
                            Desenvolvo soluções fullstack robustas enquanto a cafeteira trabalha.
                            Especialista em criar experiências digitais que despertam seus usuários.
                        </p>

                        <motion.div
                            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <a
                                href="#projetos"
                                className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-coffee-900 hover:bg-coffee-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden"
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
                                        className="p-4 bg-white/80 backdrop-blur rounded-xl text-coffee-900 hover:text-rooster-500 shadow-lg border border-white transition-all hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        <item.icon size={24} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Chart Content */}
                    <motion.div
                        className="mt-16 lg:mt-0 lg:col-span-5 relative"
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Mantive o gráfico que tu já tinha porque ele é informativo, mas dei um boost no visual */}
                        <div className="relative mx-auto w-full max-w-md bg-white/40 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/60 z-20">
                            <div className="absolute -top-6 -right-6 z-30">
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-10 h-2">
                                    <SmokeEffect />
                                </div>
                                <div className="bg-rooster-500 text-white p-4 rounded-2xl shadow-lg rotate-12 relative z-20">
                                    <Zap size={32} fill="currentColor" />
                                </div>
                            </div>

                            <h3 className="text-center text-lg font-bold text-coffee-800 font-serif mb-6 border-b border-coffee-900/10 pb-4">
                                Blend de Habilidades
                            </h3>

                            <div className="h-[320px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <RadarChart cx="50%" cy="50%" outerRadius="75%" data={RADAR_DATA}>
                                        <PolarGrid stroke="#e0cec7" strokeDasharray="3 3" />
                                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#4e3a33', fontSize: 13, fontWeight: 700, fontFamily: 'Merriweather' }} />
                                        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                                        <Radar
                                            name="Luis"
                                            dataKey="A"
                                            stroke="#e34234"
                                            strokeWidth={3}
                                            fill="#e34234"
                                            fillOpacity={0.5}
                                        />
                                    </RadarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;