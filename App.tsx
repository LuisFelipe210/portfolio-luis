import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Preloader from './components/Preloader';

function App() {
    const [loading, setLoading] = useState(true);

    // Trava o scroll enquanto carrega pra não bugar a entrada
    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
            // Scrolla pro topo pra garantir
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [loading]);

    return (
        <div className="min-h-screen bg-coffee-50 font-sans selection:bg-rooster-500 selection:text-white">
            <AnimatePresence mode='wait'>
                {loading && <Preloader onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            {!loading && (
                <>
                    <Navbar />
                    <main>
                        <Hero />
                        <Skills />
                        <Projects />
                    </main>
                    <Contact />
                </>
            )}
        </div>
    );
}

export default App;