"use client"

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { MapPin, Send, Mail, Terminal, Linkedin, Github, CheckCircle2, Phone } from 'lucide-react';
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

    return (
        <section id="contato" className="py-20 lg:py-32 bg-[#120c0b] relative overflow-hidden">

            {/* === BACKGROUND EFFECTS === */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-rooster-600/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-coffee-800/10 blur-[100px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* === LADO ESQUERDO: INFOS === */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-rooster-500 font-bold tracking-widest uppercase text-sm mb-3 flex items-center gap-2">
                                <span className="w-8 h-px bg-rooster-500"></span>
                                Contato
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                                Vamos construir algo <br />
                                <span className="text-rooster-500">
                                    incrível juntos?
                                </span>
                            </h3>
                            <p className="text-lg text-white/60 leading-relaxed">
                                Tem um projeto em mente ou precisa de um desenvolvedor full-stack para escalar seu negócio? Me chame no WhatsApp ou mande um e-mail.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Card WhatsApp (DESTAQUE COM ÍCONE FA) */}
                            <a
                                href="https://wa.me/5574988284631"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 p-4 rounded-2xl border border-rooster-500/30 bg-rooster-500/10 hover:bg-rooster-500/20 transition-all group cursor-pointer"
                            >
                                <div className="h-12 w-12 bg-rooster-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-rooster-600/20 group-hover:scale-110 transition-transform">
                                    {/* Ícone do Font Awesome aqui */}
                                    <FaWhatsapp size={28} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-rooster-400 tracking-wider mb-1">WhatsApp (Rápido)</p>
                                    <p className="text-lg font-bold text-white">(74) 98828-4631</p>
                                </div>
                            </a>

                            {/* Card Email */}
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 hover:border-white/10 transition-all group">
                                <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center text-white/80 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-white/40 tracking-wider mb-1">Email</p>
                                    <p className="text-base font-bold text-white">{PERSONAL_INFO.email}</p>
                                </div>
                            </a>

                            {/* Card Localização */}
                            <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-white/5">
                                <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center text-white/80">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-white/40 tracking-wider mb-1">Base</p>
                                    <p className="text-base font-bold text-white">Salvador, Bahia (Remoto)</p>
                                </div>
                            </div>
                        </div>

                        {/* Redes Sociais */}
                        <div className="flex gap-4 pt-2">
                            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-white/10 text-white/60 hover:border-rooster-500 hover:text-rooster-500 transition-all hover:-translate-y-1 bg-white/5">
                                <Linkedin size={20} />
                            </a>
                            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-3 rounded-full border border-white/10 text-white/60 hover:border-rooster-500 hover:text-rooster-500 transition-all hover:-translate-y-1 bg-white/5">
                                <Github size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* === LADO DIREITO: FORMULÁRIO === */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#1f1615] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/50 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rooster-600 to-transparent opacity-50" />

                        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1">Mande uma mensagem</h3>
                                <p className="text-sm text-white/50">Respondo rapidinho.</p>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-white/80 ml-1">Nome</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder="Seu nome"
                                        className="w-full bg-black/20 border border-white/10 focus:border-rooster-500 focus:ring-1 focus:ring-rooster-500 rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="whatsapp" className="text-sm font-medium text-white/80 ml-1">WhatsApp</label>
                                        <input
                                            type="tel"
                                            id="whatsapp"
                                            placeholder="(DDD) 99999-9999"
                                            className="w-full bg-black/20 border border-white/10 focus:border-rooster-500 focus:ring-1 focus:ring-rooster-500 rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-white/80 ml-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            placeholder="seu@email.com"
                                            className="w-full bg-black/20 border border-white/10 focus:border-rooster-500 focus:ring-1 focus:ring-rooster-500 rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-white/80 ml-1">Como posso ajudar?</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        placeholder="Descreva seu projeto..."
                                        className="w-full bg-black/20 border border-white/10 focus:border-rooster-500 focus:ring-1 focus:ring-rooster-500 rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus !== 'idle'}
                                className={`w-full py-4 rounded-xl font-bold text-base uppercase tracking-wide shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center gap-2
                                    ${formStatus === 'sent'
                                    ? 'bg-green-600 text-white hover:bg-green-700'
                                    : 'bg-rooster-600 text-white hover:bg-rooster-500 hover:shadow-rooster-500/20'
                                }`}
                            >
                                {formStatus === 'idle' && (
                                    <>Enviar <Send size={18} /></>
                                )}
                                {formStatus === 'sending' && (
                                    <><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Enviando...</>
                                )}
                                {formStatus === 'sent' && (
                                    <>Enviado! <CheckCircle2 size={18} /></>
                                )}
                            </button>
                        </form>
                    </motion.div>

                </div>

                {/* Footer */}
                <div className="mt-20 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} Luis Felipe. Todos os direitos reservados.
                    </p>
                    <div className="flex items-center gap-2 text-xs opacity-70 hover:opacity-100 transition-opacity">
                        <Terminal size={14} />
                        <span>Feito com Next.js & Tailwind</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;