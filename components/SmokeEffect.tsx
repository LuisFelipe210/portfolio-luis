// src/components/SmokeEffect.tsx
import React from 'react';
import { motion } from 'framer-motion';

const SmokeEffect = () => {
    const particles = Array.from({ length: 20 }); // Aumentei pra 20 partículas

    return (
        <div className="absolute inset-0 pointer-events-none overflow-visible" aria-hidden="true">
            {particles.map((_, i) => {
                const randomX = Math.random() * 40 - 20;
                const randomDelay = Math.random() * 2; // Mais rápido pra começar
                const randomDuration = 2 + Math.random() * 2;
                const randomScale = 1 + Math.random();

                return (
                    <motion.div
                        key={i}
                        // Mudei a cor para 'bg-gray-400' e tirei a transparência da classe pra controlar na animação
                        // Se ainda achar claro, muda bg-gray-400 para bg-gray-600
                        className="absolute bottom-0 left-1/2 w-6 h-6 bg-gray-400 rounded-full blur-xl origin-bottom"
                        initial={{
                            opacity: 0,
                            y: 0,
                            x: 0,
                            scale: 0.5
                        }}
                        animate={{
                            opacity: [0, 0.4, 0], // Opacidade máxima de 0.4 (antes era muito baixo)
                            y: -120 - Math.random() * 80,
                            x: randomX,
                            scale: randomScale,
                            rotate: Math.random() * 360
                        }}
                        transition={{
                            duration: randomDuration,
                            repeat: Infinity,
                            delay: randomDelay,
                            ease: "easeInOut"
                        }}
                        style={{
                            marginLeft: '-0.75rem' // Ajuste fino pra centralizar (metade da largura w-6)
                        }}
                    />
                );
            })}
        </div>
    );
};

export default SmokeEffect;