import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectDetails from './components/ProjectDetails';

// Componente apenas com o miolo da Home
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
    return (
        <Router>
            <div className="relative bg-[#0f0a08] min-h-screen selection:bg-[#e34234] selection:text-white">
                {/* Textura de ruído (opcional, mantendo se você usa) */}
                <div className="noise-overlay" />

                {/* === AQUI: Navbar fixa para TODAS as páginas === */}
                <Navbar />

                <Routes>
                    {/* Rota da Página Principal */}
                    <Route path="/" element={<Home />} />

                    {/* Rota de Detalhes */}
                    <Route path="/projetos/:id" element={<ProjectDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;