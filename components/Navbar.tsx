"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, Send, Code2, Github, Linkedin, Instagram } from 'lucide-react';
import RoosterLogo from './RoosterLogo';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Trava o scroll quando menu abre
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    // LINKS PROFISSIONAIS
    const navLinks = [
        { name: 'Sobre', href: '#sobre' },
        { name: 'Projetos', href: '#projetos' },
        { name: 'Habilidades', href: '#skills' },
        { name: 'Contato', href: '#contato' },
    ];

    return (
        <>
            {/* --- NAVBAR FIXA --- */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
                    scrolled
                        ? 'py-3 bg-[#1a1110]/90 backdrop-blur-md border-b border-white/5 shadow-md'
                        : 'py-6 bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14">

                        {/* === LOGO === */}
                        <a
                            href="#"
                            className="flex items-center gap-3 group relative z-50 shrink-0"
                            onClick={() => setIsOpen(false)}
                        >
                            <div className={`p-2 rounded-xl border transition-all duration-500 relative overflow-hidden group-hover:rotate-3 ${
                                scrolled || isOpen
                                    ? 'bg-rooster-600 border-rooster-500 shadow-[0_0_15px_rgba(220,38,38,0.2)]'
                                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                            }`}>
                                <RoosterLogo className="w-6 h-6 text-white relative z-10" isScrolled={true} />
                            </div>

                            <div className="flex flex-col">
                                <span className="font-serif font-bold text-xl tracking-wide leading-none text-[#eaddd7] group-hover:text-white transition-colors">
                                    Luis<span className="text-rooster-500">.</span>Dev
                                </span>
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/40 group-hover:text-rooster-500 transition-colors">
                                    Full Stack Developer
                                </span>
                            </div>
                        </a>

                        {/* === MENU DESKTOP (CÁPSULA) === */}
                        <div className="hidden lg:flex items-center">
                            <nav className={`flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ${
                                scrolled
                                    ? "bg-transparent"
                                    : "bg-[#1a1110]/60 backdrop-blur-md border border-white/10 shadow-lg"
                            }`}>
                                <ul className="flex items-center px-2">
                                    {navLinks.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="text-sm font-bold text-[#eaddd7]/80 hover:text-white hover:bg-white/5 px-4 py-2 rounded-full transition-all duration-200 block"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <div className="h-5 w-px bg-white/10 mx-1" />

                                <div className="pl-2 pr-1">
                                    <a
                                        href="#contato"
                                        className="flex items-center gap-2 px-5 py-2 rounded-full bg-rooster-600 text-white text-sm font-bold shadow-lg shadow-rooster-900/20 hover:bg-rooster-500 hover:-translate-y-0.5 transition-all"
                                    >
                                        <Send size={16} strokeWidth={2.5} />
                                        <span>Fale Comigo</span>
                                    </a>
                                </div>
                            </nav>
                        </div>

                        {/* === MENU MOBILE TOGGLE === */}
                        <div className="lg:hidden flex items-center z-50">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`p-2 rounded-full transition-all duration-300 ${
                                    isOpen
                                        ? 'bg-white/10 text-white rotate-90'
                                        : 'text-[#eaddd7] hover:bg-white/5'
                                }`}
                                aria-label="Menu"
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>

                    </div>
                </div>
            </header>

            {/* === MOBILE OVERLAY (PERFORMANCE MÁXIMA) === */}
            <div
                className={`fixed inset-0 z-40 bg-[#120c0b] lg:hidden transition-opacity duration-300 ease-in-out ${
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                }`}
            >
                {/* Elementos decorativos (Estáticos para não travar) */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-rooster-600/10 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-coffee-800/20 rounded-full blur-[80px] pointer-events-none" />

                <div className="flex flex-col h-full justify-center items-center px-6 gap-8 relative z-10">

                    {/* Links Mobile */}
                    <nav className="flex flex-col items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl font-serif font-bold text-[#eaddd7] hover:text-rooster-500 transition-colors tracking-tight"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="w-16 h-1 bg-rooster-600/20 rounded-full" />

                    {/* CTA Mobile */}
                    <div className="flex flex-col gap-6 w-full max-w-xs text-center">
                        <a
                            href="#contato"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center justify-center w-full py-4 bg-rooster-600 text-white font-black uppercase tracking-widest rounded-xl shadow-xl active:scale-95 transition-all"
                        >
                            <Send size={20} className="mr-2" />
                            Entre em Contato
                        </a>

                        <div className="flex justify-center gap-8 text-[#eaddd7]/40">
                            <a href="#" className="hover:text-rooster-500 transition-colors"><Instagram size={24} /></a>
                            <a href="#" className="hover:text-rooster-500 transition-colors"><Linkedin size={24} /></a>
                            <a href="#" className="hover:text-rooster-500 transition-colors"><Github size={24} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;