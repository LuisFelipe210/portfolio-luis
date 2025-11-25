import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X, Egg } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RoosterLogo from './RoosterLogo';

// Fumacinha dos links (Mantida porque é estilosa)
const LinkSteam = () => (
    <motion.div
        className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-0.5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        {[...Array(3)].map((_, i) => (
            <motion.div
                key={i}
                className="w-0.5 h-3 bg-white/40 rounded-full blur-[1px]"
                animate={{
                    y: -10,
                    opacity: [0, 0.8, 0],
                }}
                transition={{
                    duration: 1 + Math.random(),
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                }}
            />
        ))}
    </motion.div>
);

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const navLinks = [
        { name: 'Sobre', href: '#sobre' },
        { name: 'Menu (Skills)', href: '#skills' },
        { name: 'Safra (Projetos)', href: '#projetos' },
        { name: 'O Caixa', href: '#contato' },
    ];

    return (
        <>
            {/* NAVBAR FIXA FULL-WIDTH */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-[#2c1a16]/95 backdrop-blur-md shadow-md py-3 border-b border-white/5' // Fundo na barra toda
                        : 'bg-transparent py-6' // Transparente no topo
                }`}
            >
                {/* Container do Conteúdo (Centralizado) */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14">

                        {/* LOGO */}
                        <motion.div
                            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group relative z-50"
                            onClick={() => {
                                setIsOpen(false);
                                window.scrollTo(0,0);
                            }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className={`p-2 rounded-full border-2 transition-all duration-300 relative overflow-hidden ${
                                scrolled || isOpen ? 'bg-rooster-600 border-rooster-500' : 'bg-white/10 border-white/20 hover:bg-white/20'
                            }`}>
                                <RoosterLogo className="w-8 h-8 relative z-10 translate-y-1" isScrolled={scrolled || isOpen} />
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                            </div>

                            <div className="flex flex-col">
                <span className={`font-serif font-bold text-xl tracking-wide leading-none transition-colors ${
                    scrolled || isOpen ? 'text-[#eaddd7]' : 'text-coffee-900'
                }`}>
                  Luis<span className="text-rooster-500">.</span>Dev
                </span>
                                <span className={`text-[10px] uppercase tracking-[0.3em] font-bold ${
                                    scrolled || isOpen ? 'text-white/40' : 'text-coffee-700'
                                }`}>
                  Roost & Roast
                </span>
                            </div>
                        </motion.div>

                        {/* DESKTOP MENU */}
                        <div className="hidden md:block">
                            <div className="flex items-center space-x-1">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onMouseEnter={() => setHoveredLink(link.name)}
                                        onMouseLeave={() => setHoveredLink(null)}
                                        className={`relative px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 group ${
                                            scrolled
                                                ? 'text-white/80 hover:text-white hover:bg-white/5'
                                                : 'text-coffee-900 hover:text-rooster-600 hover:bg-coffee-900/5'
                                        }`}
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        <AnimatePresence>
                                            {hoveredLink === link.name && <LinkSteam />}
                                        </AnimatePresence>
                                        <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-rooster-500 transition-all duration-300 group-hover:w-1/2 opacity-0 group-hover:opacity-100" />
                                    </a>
                                ))}

                                <motion.a
                                    href="#contato"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`ml-4 px-6 py-2.5 rounded-full text-sm font-black uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all border ${
                                        scrolled
                                            ? 'bg-[#eaddd7] text-coffee-900 border-white/20 hover:bg-white'
                                            : 'bg-coffee-900 text-[#eaddd7] border-coffee-800 hover:bg-rooster-600 hover:border-rooster-500'
                                    }`}
                                >
                                    <Coffee size={16} strokeWidth={3} />
                                    <span className="hidden lg:inline">Pedir</span>
                                </motion.a>
                            </div>
                        </div>

                        {/* MOBILE MENU BUTTON */}
                        <div className="-mr-2 flex md:hidden relative z-50">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`p-2 rounded-full transition-colors border-2 ${
                                    isOpen
                                        ? 'text-coffee-900 border-coffee-900 bg-[#eaddd7]'
                                        : scrolled
                                            ? 'text-white hover:bg-white/10 border-transparent'
                                            : 'text-coffee-900 hover:bg-coffee-900/5 border-transparent'
                                }`}
                            >
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* MOBILE MENU FULL SCREEN (Mantido igual porque tá show) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        transition={{ type: "spring", damping: 30, stiffness: 100, duration: 0.5 }}
                        className="fixed inset-0 w-full h-full bg-[#f4f1ea] z-40 md:hidden flex flex-col justify-between overflow-hidden"
                        style={{
                            backgroundImage: 'url("https://www.transparenttextures.com/patterns/cardboard-flat.png")',
                            backgroundAttachment: 'fixed'
                        }}
                    >
                        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-coffee-900 to-transparent" />

                        <div className="h-24"></div>

                        <div className="flex-1 flex flex-col items-center justify-center space-y-6 p-6 relative z-10">
                            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-rooster-500 mb-4">Cardápio</h2>

                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ y: 40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 + (i * 0.1), type: "spring" }}
                                    onClick={() => setIsOpen(false)}
                                    className="relative group text-center"
                                >
                   <span className="font-serif font-black text-4xl text-coffee-900 group-hover:text-rooster-600 transition-colors block mb-2">
                     {link.name.split(' ')[0]}
                   </span>
                                    <span className="text-xs uppercase tracking-widest text-coffee-500 font-bold group-hover:text-rooster-400 transition-colors">
                     {link.name.includes('(') ? link.name.match(/\((.*?)\)/)?.[1] : 'Ver mais'}
                   </span>
                                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-rooster-500 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
                                </motion.a>
                            ))}
                        </div>

                        <div className="p-8 pb-12 text-center bg-coffee-100/50 border-t border-coffee-200 backdrop-blur-sm relative z-10">
                            <a
                                href="#contato"
                                onClick={() => setIsOpen(false)}
                                className="inline-block w-full max-w-xs py-4 bg-coffee-900 text-[#eaddd7] font-black uppercase tracking-widest rounded-xl shadow-xl hover:bg-rooster-600 hover:scale-105 transition-all"
                            >
                                Fazer Pedido
                            </a>

                            <div className="mt-8 flex justify-center gap-6 text-coffee-400">
                                <span className="text-xs font-bold uppercase">Instagram</span>
                                <span className="text-xs font-bold uppercase">LinkedIn</span>
                                <span className="text-xs font-bold uppercase">GitHub</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;