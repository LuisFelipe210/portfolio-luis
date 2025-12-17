import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';
import Preloader from './components/Preloader'; // Certifique-se que este arquivo existe

// Componente Home separado para organização
const Home = () => (
    <main>
        <Hero />
        <div className="relative z-10">
            <Projects />
            <Skills />
            <Contact />
        </div>
    </main>
);

function App() {
    const [loading, setLoading] = useState(true);

    // Lógica de Trava de Scroll do Preloader
    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [loading]);

    return (
        <div className="relative bg-[#0f0a08] min-h-screen selection:bg-[#e34234] selection:text-white">

            {/* === PRELOADER === */}
            <AnimatePresence mode='wait'>
                {loading && (
                    <Preloader onComplete={() => setLoading(false)} />
                )}
            </AnimatePresence>

            {/* === CONTEÚDO DO SITE (Só carrega depois do loading) === */}
            {!loading && (
                <Router>

                    {/* Textura de Ruído Global */}
                    <div className="noise-overlay" />

                    {/* Navbar Fixa Global */}
                    <Navbar />

                    <Routes>
                        {/* Rota Principal */}
                        <Route path="/" element={<Home />} />

                        {/* Rota de Detalhes do Projeto */}
                        <Route path="/projetos/:id" element={<ProjectDetails />} />
                    </Routes>
                </Router>
            )}
        </div>
    );
}

export default App;