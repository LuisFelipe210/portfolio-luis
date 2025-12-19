"use client"

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { MapPin, Mail, Linkedin, Github, CheckCircle2, ArrowRight, MessageSquare, Send, Terminal } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { motion } from 'framer-motion';

// Paleta Industrial Espresso (Consistente com os outros componentes)
const COFFEE_MODERN = {
    bgDark: "#0F0B09",
    bgPanel: "#1A1410",
    accentGold: "#D4A373",
    textMain: "#EAE0D5",
    textMuted: "#8D7B68",
    glassBorder: "rgba(212, 163, 115, 0.15)"
};

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
        <section id="contato" className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: COFFEE_MODERN.bgDark }}>

            {/* === BACKGROUND === */}
            {/* Grid Decorativo */}
            <div
                className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(${COFFEE_MODERN.accentGold} 1px, transparent 1px), linear-gradient(90deg, ${COFFEE_MODERN.accentGold} 1px, transparent 1px)`,
                    backgroundSize: '100px 100px'
                }}
            />
            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0B09] via-transparent to-[#0F0B09] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* === LADO ESQUERDO: PITCH TÉCNICO === */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <Terminal size={16} className="text-[#D4A373]" />
                                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#8D7B68]">
                                    / Connection_Request
                                </span>
                            </div>

                            <h3 className="text-5xl lg:text-7xl font-sans font-black leading-[0.9] mb-6 text-white tracking-tighter">
                                INITIATE <br />
                                <span className="text-[#D4A373]">
                                    PROJECT.
                                </span>
                            </h3>

                            <p className="text-lg leading-relaxed max-w-sm font-light text-[#8D7B68]">
                                Tem um desafio técnico ou precisa escalar sua operação? Vamos compilar uma solução robusta. Sem conversa fiada, direto ao código.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6 pt-8 border-t border-[#D4A373]/10"
                        >
                            {/* Botão WhatsApp Tech */}
                            <a
                                href="https://wa.me/5574988284631"
                                target="_blank"
                                rel="noreferrer"
                                className="group relative flex items-center justify-between p-6 rounded-sm border transition-all hover:bg-[#1A1410]"
                                style={{
                                    borderColor: COFFEE_MODERN.glassBorder,
                                    backgroundColor: "rgba(26, 20, 16, 0.4)"
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 flex items-center justify-center border border-[#D4A373]/30 rounded text-[#D4A373] bg-[#0F0B09]">
                                        <FaWhatsapp size={20} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-mono uppercase tracking-widest text-[#8D7B68]">Direct Link</p>
                                        <p className="text-lg font-bold text-[#EAE0D5] group-hover:text-white transition-colors">Start Chat</p>
                                    </div>
                                </div>
                                <ArrowRight className="transition-transform group-hover:translate-x-1 text-[#D4A373]" size={20} />
                            </a>

                            {/* Info de Contato - Estilo Terminal */}
                            <div className="space-y-4 pl-1 font-mono text-sm">
                                <div className="flex items-center gap-4 group">
                                    <span className="text-[#D4A373]">&gt;</span>
                                    <Mail size={16} className="text-[#8D7B68]" />
                                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#8D7B68] transition-colors hover:text-[#D4A373]">
                                        {PERSONAL_INFO.email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[#D4A373]">&gt;</span>
                                    <MapPin size={16} className="text-[#8D7B68]" />
                                    <span className="text-[#8D7B68]">
                                        Salvador, BA :: Remote_Mode
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* === LADO DIREITO: FORMULÁRIO (Estilo Painel) === */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="p-8 sm:p-10 relative rounded-sm border backdrop-blur-md bg-[#1A1410]/80 shadow-2xl"
                            style={{
                                borderColor: COFFEE_MODERN.glassBorder,
                            }}
                        >
                            {/* Detalhe decorativo topo */}
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D4A373]/50 to-transparent opacity-50"></div>

                            {/* Header do Form */}
                            <div className="mb-8 flex items-center justify-between pb-4 border-b border-[#D4A373]/10">
                                <h3 className="text-xl font-sans font-bold text-[#EAE0D5] flex items-center gap-2">
                                    <MessageSquare size={18} className="text-[#D4A373]" />
                                    SEND MESSAGE
                                </h3>
                                <div className="flex items-center gap-2 font-mono text-[10px] text-[#8D7B68]">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/>
                                    <span>SYSTEM READY</span>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-widest text-[#8D7B68]">Name_ID</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full bg-[#0F0B09] border border-[#D4A373]/20 focus:border-[#D4A373] rounded-sm px-4 py-3 text-[#EAE0D5] placeholder:text-[#8D7B68]/30 font-mono text-sm outline-none transition-all"
                                            placeholder="Insert name..."
                                        />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label htmlFor="whatsapp" className="text-[10px] font-mono uppercase tracking-widest text-[#8D7B68]">Contact_No</label>
                                        <input
                                            type="tel"
                                            id="whatsapp"
                                            className="w-full bg-[#0F0B09] border border-[#D4A373]/20 focus:border-[#D4A373] rounded-sm px-4 py-3 text-[#EAE0D5] placeholder:text-[#8D7B68]/30 font-mono text-sm outline-none transition-all"
                                            placeholder="+55..."
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label htmlFor="email" className="text-[10px] font-mono uppercase tracking-widest text-[#8D7B68]">Email_Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-[#0F0B09] border border-[#D4A373]/20 focus:border-[#D4A373] rounded-sm px-4 py-3 text-[#EAE0D5] placeholder:text-[#8D7B68]/30 font-mono text-sm outline-none transition-all"
                                        placeholder="user@domain.com"
                                    />
                                </div>

                                <div className="space-y-2 group">
                                    <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-widest text-[#8D7B68]">Payload / Message</label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        className="w-full bg-[#0F0B09] border border-[#D4A373]/20 focus:border-[#D4A373] rounded-sm px-4 py-3 text-[#EAE0D5] placeholder:text-[#8D7B68]/30 font-mono text-sm outline-none transition-all resize-none"
                                        placeholder="Describe requirements..."
                                    ></textarea>
                                </div>

                                {/* Botão Tech */}
                                <button
                                    type="submit"
                                    disabled={formStatus !== 'idle'}
                                    className={`relative w-full py-4 mt-4 font-bold text-xs uppercase tracking-[0.2em] transition-all transform active:scale-[0.99] rounded-sm overflow-hidden group border
                                        ${formStatus === 'sent'
                                        ? 'bg-green-900/20 border-green-500 text-green-500'
                                        : 'bg-[#D4A373] border-[#D4A373] text-[#0F0B09] hover:bg-transparent hover:text-[#D4A373]'
                                    }`}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        {formStatus === 'idle' && (
                                            <>TRANSMIT DATA <Send size={16} /></>
                                        )}
                                        {formStatus === 'sending' && (
                                            <span className="animate-pulse">PROCESSING...</span>
                                        )}
                                        {formStatus === 'sent' && (
                                            <>DATA RECEIVED <CheckCircle2 size={16} /></>
                                        )}
                                    </span>
                                </button>
                            </form>
                        </motion.div>
                    </div>

                </div>

                {/* Footer Minimalista */}
                <div className="mt-20 pt-8 border-t border-[#D4A373]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-[#8D7B68]">
                    <div className="flex items-center gap-6">
                        <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#D4A373] transition-colors"><Linkedin size={16} /></a>
                        <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="hover:text-[#D4A373] transition-colors"><Github size={16} /></a>
                        <span className="h-px w-8 bg-[#D4A373]/20"></span>
                        <p>&copy; {new Date().getFullYear()} Luis Felipe.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        <span>Open for Contracts</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;