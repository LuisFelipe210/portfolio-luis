"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Terminal } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import RoosterLogo from './RoosterLogo';

const COFFEE_MODERN = {
    bgDark: "#0F0B09",
    bgPanel: "#1A1410",
    accentGold: "#D4A373",
    textMain: "#EAE0D5",
    textMuted: "#8D7B68",
    glassBorder: "rgba(212, 163, 115, 0.15)"
};

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    // Função de clique unificada para tratar Home e Âncoras
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setIsOpen(false);

        if (href === '/') {
            e.preventDefault();
            if (isHomePage) {
                // Se já estiver na home, apenas sobe pro topo
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // Se estiver em outra página, navega pra home e o useEffect de scroll faz o resto
                navigate('/');
            }
            return;
        }

        if (!isHomePage && href.startsWith('#')) {
            e.preventDefault();
            navigate('/' + href);
        }
    };

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Projetos', href: '#projetos' },
        { name: 'Habilidades', href: '#skills' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
                    scrolled
                        ? 'py-3 backdrop-blur-md bg-[#0F0B09]/80 border-[#D4A373]/20 shadow-2xl'
                        : 'py-6 bg-transparent border-transparent'
                }`}
            >
                <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
                    <div className="flex items-center justify-between h-12">

                        {/* === LOGO TECH === */}
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                if (isHomePage) {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                } else {
                                    navigate('/');
                                }
                            }}
                            className="flex items-center gap-3 group relative z-50"
                        >
                            <div className={`p-1.5 rounded-sm border transition-all duration-500 ${
                                scrolled
                                    ? 'bg-[#D4A373] border-[#D4A373] text-[#0F0B09]'
                                    : 'bg-white/5 border-white/10 text-white'
                            }`}>
                                <RoosterLogo className="w-5 h-5" isScrolled={scrolled} />
                            </div>

                            <div className="flex flex-col items-start text-left">
                                <span className="font-sans font-black text-lg tracking-tighter leading-none text-white">
                                    LUIS<span className="text-[#D4A373]">.</span>FELIPE
                                </span>
                                <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-[#8D7B68]">
                                    Engineered_Code
                                </span>
                            </div>
                        </button>

                        {/* === DESKTOP MENU === */}
                        <nav className="hidden lg:flex items-center gap-8">
                            <ul className="flex items-center gap-6">
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className="text-[11px] font-mono uppercase tracking-widest text-[#8D7B68] hover:text-[#D4A373] transition-colors relative group"
                                        >
                                            <span className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#D4A373]">&gt;</span>
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="h-4 w-[1px] bg-[#D4A373]/20" />

                            <a
                                href="#contato"
                                onClick={(e) => handleNavClick(e, '#contato')}
                                className="px-5 py-2 bg-[#D4A373] text-[#0F0B09] text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all active:scale-95"
                            >
                                Get_In_Touch
                            </a>
                        </nav>

                        {/* === MOBILE TOGGLE === */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden z-50 p-2 text-[#D4A373]"
                            aria-label="Menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                    </div>
                </div>
            </header>

            {/* === MOBILE OVERLAY === */}
            <div
                className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out bg-[#0F0B09] ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div
                    className="absolute inset-0 opacity-5 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(${COFFEE_MODERN.accentGold} 1px, transparent 1px), linear-gradient(90deg, ${COFFEE_MODERN.accentGold} 1px, transparent 1px)`,
                        backgroundSize: '80px 80px'
                    }}
                />

                <div className="flex flex-col h-full justify-center px-10 gap-12 relative z-10">
                    <nav className="flex flex-col gap-6">
                        <span className="font-mono text-[10px] text-[#D4A373] tracking-[0.5em] mb-4">/MENU_INDEX</span>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-4xl font-sans font-black text-white hover:text-[#D4A373] transition-colors tracking-tighter uppercase"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex flex-col gap-6">
                        <a
                            href="#contato"
                            onClick={(e) => handleNavClick(e, '#contato')}
                            className="w-full py-4 bg-[#D4A373] text-[#0F0B09] font-bold text-center uppercase tracking-widest text-xs"
                        >
                            Start_Conversation
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;