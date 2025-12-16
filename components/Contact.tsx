"use client"

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { MapPin, Mail, Terminal, Linkedin, Github, CheckCircle2, ArrowRight, Hash, MessageSquare } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        // Simulação de envio
        setTimeout(() => {
            setFormStatus('sent');
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 2000);
    };

    // Animações dos elementos técnicos de fundo
    const techVariant = {
        hidden: { opacity: 0, pathLength: 0 },
        visible: { opacity: 0.3, pathLength: 1, transition: { duration: 1.5, ease: "easeInOut" } }
    };

    return (
        <section id="contato" className="py-16 lg:py-24 bg-[#0a0504] relative overflow-hidden">

            {/* === BACKGROUND TÉCNICO === */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />

                {/* Detalhe diagonal */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#120c0b] transform -skew-x-12 translate-x-1/4 z-0 border-l border-white/5" />

                {/* SVG Decorativo */}
                <svg className="absolute top-10 left-0 w-40 h-40 text-rooster-500/20 opacity-50" viewBox="0 0 100 100">
                    <motion.path d="M0,50 L100,50 M50,0 L50,100" stroke="currentColor" strokeWidth="0.5" variants={techVariant} initial="hidden" whileInView="visible" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

                    {/* === LADO ESQUERDO: APRESENTAÇÃO === */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <h2 className="text-rooster-500 font-mono tracking-[0.2em] uppercase text-xs mb-4 flex items-center gap-2 before:w-6 before:h-px before:bg-rooster-500">
                                <Terminal size={14} /> Fale Comigo
                            </h2>

                            <h3 className="text-3xl lg:text-5xl font-black text-white mb-4 leading-[0.95] uppercase tracking-tight">
                                Vamos <br />
                                <span className="text-rooster-500">
                                    Construir
                                </span> <br />
                                Algo Incrível.
                            </h3>
                            <p className="text-sm text-white/60 leading-relaxed font-light border-l border-rooster-900/50 pl-4 max-w-sm">
                                Tem um projeto em mente ou precisa escalar seu negócio? Entre em contato para discutirmos a solução ideal.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6 pt-6 border-t border-white/10"
                        >
                            {/* Card WhatsApp (Design Técnico, Texto Normal) */}
                            <a
                                href="https://wa.me/5574988284631"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative flex items-center justify-between p-4 bg-rooster-600 rounded-sm overflow-hidden shadow-lg transition-all hover:bg-rooster-500"
                            >
                                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>

                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="h-10 w-10 bg-white text-rooster-700 rounded-sm flex items-center justify-center shadow-inner relative">
                                        <FaWhatsapp size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-mono uppercase text-rooster-200">Atendimento Direto</p>
                                        <p className="text-lg font-bold text-white tracking-wide">WhatsApp</p>
                                    </div>
                                </div>
                                <ArrowRight className="text-white/70 group-hover:translate-x-1 transition-transform" size={18} />
                            </a>

                            {/* Info de Contato */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 group">
                                    <Mail size={16} className="text-rooster-500" />
                                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs text-white/80 hover:text-rooster-400 transition-colors font-mono">
                                        {PERSONAL_INFO.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin size={16} className="text-rooster-500" />
                                    <span className="text-xs text-white/80 font-mono">
                                        Salvador, BA (Remoto)
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* === LADO DIREITO: FORMULÁRIO (Design Industrial, Texto Profissional) === */}
                    <div className="lg:col-span-7 relative">
                        {/* Ícones decorativos nos cantos */}
                        <div className="absolute -top-3 -left-3 text-white/10"><Hash size={20}/></div>
                        <div className="absolute -bottom-3 -right-3 text-white/10"><Hash size={20}/></div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#130f0e] border border-white/10 p-6 sm:p-8 relative overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-[2px] before:bg-rooster-600"
                        >
                            <div className="mb-6 flex items-end justify-between border-b border-white/10 pb-4">
                                <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-rooster-500 rounded-full animate-pulse"/>
                                    Mensagem
                                </h3>
                                <p className="text-[10px] font-mono text-white/30 hidden sm:block">
                                    STATUS: ONLINE
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div className="space-y-1 group">
                                        {/* Rótulo Técnico mas com texto claro */}
                                        <label htmlFor="name" className="text-[10px] font-mono uppercase text-rooster-500/80 ml-1">Seu Nome</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full bg-black/40 border-b border-white/10 focus:border-rooster-500 rounded-t-sm px-3 py-3 text-white placeholder:text-white/10 font-mono text-xs outline-none transition-all focus:bg-white/5"
                                            placeholder="> Digite seu nome..."
                                        />
                                    </div>
                                    <div className="space-y-1 group">
                                        <label htmlFor="whatsapp" className="text-[10px] font-mono uppercase text-rooster-500/80 ml-1">WhatsApp / Telefone</label>
                                        <input
                                            type="tel"
                                            id="whatsapp"
                                            className="w-full bg-black/40 border-b border-white/10 focus:border-rooster-500 rounded-t-sm px-3 py-3 text-white placeholder:text-white/10 font-mono text-xs outline-none transition-all focus:bg-white/5"
                                            placeholder="> (00) 00000-0000..."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1 group">
                                    <label htmlFor="email" className="text-[10px] font-mono uppercase text-rooster-500/80 ml-1">Seu E-mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-black/40 border-b border-white/10 focus:border-rooster-500 rounded-t-sm px-3 py-3 text-white placeholder:text-white/10 font-mono text-xs outline-none transition-all focus:bg-white/5"
                                        placeholder="> exemplo@email.com..."
                                    />
                                </div>

                                <div className="space-y-1 group">
                                    <label htmlFor="message" className="text-[10px] font-mono uppercase text-rooster-500/80 ml-1">Sobre o Projeto</label>
                                    <textarea
                                        id="message"
                                        rows={3}
                                        required
                                        className="w-full bg-black/40 border-b border-white/10 focus:border-rooster-500 rounded-t-sm px-3 py-3 text-white placeholder:text-white/10 font-mono text-xs outline-none transition-all resize-none focus:bg-white/5"
                                        placeholder="> Como posso ajudar?..."
                                    ></textarea>
                                </div>

                                {/* Botão "Switch" Mantido */}
                                <button
                                    type="submit"
                                    disabled={formStatus !== 'idle'}
                                    className={`relative w-full py-3 mt-2 font-bold text-xs uppercase tracking-[0.2em] transition-all transform active:translate-y-1 border overflow-hidden group
                                        ${formStatus === 'sent'
                                        ? 'bg-green-900/20 border-green-500 text-green-500'
                                        : 'bg-rooster-900/20 border-rooster-600 text-rooster-500 hover:bg-rooster-600 hover:text-white'
                                    }`}
                                >
                                    <span className={`absolute inset-0 bg-rooster-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ${formStatus !== 'idle' ? 'hidden' : ''}`}></span>

                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        {formStatus === 'idle' && (
                                            <>Enviar Mensagem <MessageSquare size={14} /></>
                                        )}
                                        {formStatus === 'sending' && (
                                            <span className="animate-pulse">Enviando...</span>
                                        )}
                                        {formStatus === 'sent' && (
                                            <>Enviado com Sucesso <CheckCircle2 size={14} /></>
                                        )}
                                    </span>
                                </button>
                            </form>
                        </motion.div>
                    </div>

                </div>

                {/* Footer Técnico */}
                <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-[10px] font-mono uppercase tracking-widest">
                    <div className="flex items-center gap-4">
                        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-rooster-500 transition-colors"><Linkedin size={14} /></a>
                        <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-rooster-500 transition-colors"><Github size={14} /></a>
                        <span className="h-px w-6 bg-white/10"></span>
                        <p>&copy; {new Date().getFullYear()} Luis Felipe. Todos os direitos reservados.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500/50 rounded-full animate-pulse"></span>
                        <span>Disponível</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;