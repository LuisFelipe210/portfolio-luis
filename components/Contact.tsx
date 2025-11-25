import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { MapPin, Send, Coffee, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('sent');
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 2000);
    };

    return (
        <section id="contato" className="py-16 sm:py-20 bg-[#1a110e] relative overflow-hidden font-sans">
            {/* Background Madeira Escura */}
            <div className="absolute inset-0 opacity-40 pointer-events-none"
                 style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%233f2e2a' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                 }}>
            </div>

            {/* Container Reduzido */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* AQUI ESTÁ A CHAVE: gap-8 separa os dois painéis */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[450px]">

                    {/* LADO ESQUERDO: QUADRO NEGRO (Infos) */}
                    <motion.div
                        className="bg-[#2b2b2b] p-6 sm:p-8 text-[#e0e0e0] border-[8px] border-[#463325] relative flex flex-col justify-between shadow-2xl"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Textura de Giz */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-chalk.png')] pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-6 border-b-2 border-dashed border-white/20 pb-3">
                                <Coffee className="text-white/80" size={24} />
                                {/* Tamanho menor para celular (sm:text-3xl) */}
                                <h2 className="text-xl sm:text-2xl font-serif text-white tracking-wide" style={{ fontFamily: '"Chalkboard SE", "Comic Sans MS", sans-serif' }}>
                                    Fale Conosco
                                </h2>
                            </div>

                            <div className="space-y-6 font-serif text-sm">
                                <div>
                                    <h3 className="text-rooster-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-1">Balcão (Email)</h3>
                                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm sm:text-base text-white hover:text-rooster-400 border-b border-white/20 hover:border-rooster-400 transition-all pb-0.5 inline-block">
                                        {PERSONAL_INFO.email}
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-rooster-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-1">Localização</h3>
                                    <p className="text-sm sm:text-base text-white flex items-center gap-2">
                                        <MapPin size={16} /> Salvador, Bahia
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-rooster-500 font-bold uppercase text-[10px] tracking-[0.2em] mb-1">Certificação</h3>
                                    <div className="bg-white/5 p-3 border border-white/10 border-dashed">
                                        <p className="font-bold text-white text-xs">{PERSONAL_INFO.education.degree}</p>
                                        <p className="text-xs text-gray-400 mt-1">{PERSONAL_INFO.education.institution} • {PERSONAL_INFO.education.period}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 relative z-10">
                            <div className="bg-[#e34234] text-white py-2 px-4 -rotate-1 shadow-md border border-white/20 text-center font-bold uppercase tracking-widest text-xs">
                                Aberto para Freelas!
                            </div>
                        </div>
                    </motion.div>

                    {/* LADO DIREITO: COMANDA DE PAPEL (Formulário Otimizado) */}
                    <motion.div
                        className="bg-[#f4f1ea] p-6 sm:p-8 text-coffee-900 relative flex flex-col shadow-2xl"
                        initial={{ x: 30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                            backgroundImage: 'linear-gradient(#e5e0d8 1px, transparent 1px)',
                            backgroundSize: '100% 2rem'
                        }}
                    >
                        {/* Furinhos Laterais */}
                        <div className="absolute left-0 top-0 bottom-0 w-6 border-r border-double border-red-300/40 flex flex-col justify-evenly items-center py-2 bg-gray-50/50">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="w-2 h-2 rounded-full bg-[#1a110e] opacity-70 shadow-inner"></div>
                            ))}
                        </div>

                        <div className="pl-8 relative h-full flex flex-col">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-black uppercase tracking-widest text-coffee-900 border-b-2 border-coffee-900 inline-block pb-0.5">
                                    Guest Check
                                </h3>
                                <p className="text-[10px] font-mono text-coffee-600 mt-1 font-bold">Nº {Math.floor(Math.random() * 9999)} // MESA 01</p>
                            </div>

                            <form className="space-y-4 flex-1 font-mono text-sm" onSubmit={handleSubmit}>
                                <div className="relative group">
                                    <label htmlFor="name" className="block text-[14px] font-bold uppercase text-coffee-700 mb-0.5">Cliente</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-transparent border-b border-coffee-400 focus:border-rooster-500 outline-none py-1.5 text-base text-black font-medium placeholder-coffee-400 transition-colors"
                                        placeholder="Seu Nome"
                                    />
                                    <PenTool className="absolute right-0 bottom-2 text-coffee-400 opacity-50 group-hover:opacity-100 transition-opacity" size={14} />
                                </div>

                                <div className="relative group">
                                    <label htmlFor="email" className="block text-[14px] font-bold uppercase text-coffee-700 mb-0.5">Contato</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-transparent border-b border-coffee-400 focus:border-rooster-500 outline-none py-1.5 text-base text-black font-medium placeholder-coffee-400 transition-colors"
                                        placeholder="Seu Email"
                                    />
                                </div>

                                <div className="relative group flex-1">
                                    <label htmlFor="message" className="block text-[14px] font-bold uppercase text-coffee-700 mb-0.5">Pedido / Mensagem</label>
                                    <textarea
                                        id="message"
                                        rows={3} // Reduzi o número de linhas para caber melhor
                                        required
                                        className="w-full bg-white/40 border border-coffee-300 focus:border-rooster-500 outline-none p-3 text-sm text-black font-medium leading-[2rem] shadow-inner resize-none"
                                        placeholder="Sua Mensagem..."
                                        style={{
                                            backgroundImage: 'linear-gradient(transparent, transparent 1.95rem, #e5e0d8 2rem)',
                                            backgroundSize: '100% 2rem'
                                        }}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus !== 'idle'}
                                    className={`w-full py-3 px-4 border-2 border-coffee-900 uppercase font-black tracking-widest text-xs transition-all duration-200 relative overflow-hidden group mt-2 shadow-md ${
                                        formStatus === 'sent' ? 'bg-green-600 border-green-700 text-white' : 'bg-coffee-900 text-[#f4f1ea] hover:bg-rooster-600 hover:border-rooster-600 hover:-translate-y-0.5'
                                    }`}
                                >
                                    {formStatus === 'idle' && (
                                        <span className="flex items-center justify-center gap-2 relative z-10">
                      Enviar Pedido <Send size={14} />
                    </span>
                                    )}

                                    {formStatus === 'sending' && (
                                        <span className="flex items-center justify-center gap-2">
                       <span className="animate-spin text-lg">⟳</span> Processando...
                    </span>
                                    )}

                                    {formStatus === 'sent' && (
                                        <span className="flex items-center justify-center gap-2">
                      Recebido! <Coffee size={16} />
                    </span>
                                    )}
                                </button>
                            </form>

                            <div className="mt-4 pt-3 border-t-2 border-dashed border-coffee-300 text-center">
                                <p className="font-cursive text-lg text-coffee-700 transform -rotate-1" style={{ fontFamily: 'cursive' }}>Volte sempre!</p>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Rodapé Minimalista */}
                <div className="mt-12 text-center">
                    <p className="text-[10px] text-white/30 uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} The Roost & Roast
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;