import React from 'react';
import { motion } from 'framer-motion';

interface RoosterLogoProps {
    className?: string;
    isScrolled?: boolean;
}

const RoosterLogo: React.FC<RoosterLogoProps> = ({ className = "w-10 h-10", isScrolled = false }) => {
    // Cores dinâmicas
    const mainColor = isScrolled ? "#2c1a16" : "#eaddd7";
    const accentColor = "#e34234";

    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none" strokeLinecap="round" strokeLinejoin="round">

                {/* === 1. O CORPO (A Xícara Base) === */}
                <motion.path
                    d="M 30 40
             L 75 40
             C 75 40 82 40 82 60
             C 82 82 65 92 52 92
             C 35 92 22 80 22 60
             C 22 45 30 40 30 40 Z"
                    fill={mainColor}
                    stroke={mainColor}
                    strokeWidth="2"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />

                {/* === 2. ASA (Detalhe interno) === */}
                <motion.path
                    d="M 40 65 C 40 65 45 55 55 55 C 65 55 70 65 65 75"
                    stroke={isScrolled ? "#3f2e2a" : "#d6c4bc"}
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                />

                {/* === 3. ALÇA/RABO === */}
                <motion.g
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <path
                        d="M 22 50 C 8 50 2 35 15 28"
                        stroke={mainColor}
                        strokeWidth="5"
                    />
                    <path
                        d="M 25 68 C 12 75 12 55 20 52"
                        stroke={mainColor}
                        strokeWidth="4"
                    />
                </motion.g>

                {/* === 4. A CABEÇA (Bico Mais Baixo e Crista) === */}
                <motion.g
                    initial={{ y: 5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    {/* BICO: Desci mais 5px (Agora Y=55 no topo) */}
                    <path
                        d="M 82 55 L 95 58 L 82 65 Z"
                        fill={accentColor}
                        stroke={accentColor}
                        strokeWidth="1"
                    />

                    {/* CRISTA (Mantida na posição ajustada da esquerda) */}
                    {/* Gomo 1 (Trás) */}
                    <path
                        d="M 38 35 C 34 20 41 15 46 25 L 44 38"
                        fill={accentColor}
                        stroke={accentColor}
                    />
                    {/* Gomo 2 (Meio) */}
                    <path
                        d="M 48 38 C 46 8 64 5 68 25 L 61 38"
                        fill={accentColor}
                        stroke={accentColor}
                    />
                    {/* Gomo 3 (Frente) */}
                    <path
                        d="M 64 38 C 68 22 78 22 78 30 L 72 38"
                        fill={accentColor}
                        stroke={accentColor}
                    />
                </motion.g>

                {/* === 5. OLHO === */}
                <motion.circle
                    cx="72"
                    cy="55"
                    r="3"
                    fill={isScrolled ? "#eaddd7" : "#2c1a16"}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                />

            </svg>
        </div>
    );
};

export default RoosterLogo;