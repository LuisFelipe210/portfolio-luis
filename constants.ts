import { Project, ProjectCategory, Skill, StatData } from './types';

export const PERSONAL_INFO = {
    name: "Luis Felipe Rodrigues",
    role: "Desenvolvedor Web Fullstack",
    email: "luisfelipe.rb2104@gmail.com",
    linkedin: "https://linkedin.com/in/luis-feliipe-desenvolvedor",
    github: "https://github.com/LuisFelipe210",
    education: {
        degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas", // ATUALIZADO: Tecnólogo
        institution: "UNIFACS – Universidade Salvador",
        period: "Previsão de Conclusão: Dez 2027" // ATUALIZADO: Previsão
    },
    summary: "Desenvolvedor Web em início de carreira, transformando café em código limpo. Sólida experiência prática em projetos full-stack utilizando TypeScript, React, Node.js e Docker. Apaixonado por criar soluções, criar galinhas (metaforicamente ou não) e resolver problemas complexos."
};

export const PROJECTS: Project[] = [
    {
        id: 'hello-foto',
        title: 'Hellô Borges Fotografia',
        description: 'Plataforma robusta para gestão de estúdio fotográfico. Inclui portfólio público, blog (Journal), e área do cliente para seleção de fotos. Dashboard administrativo completo para gestão de ativos.',
        link: 'https://www.hellofotografia.com.br/',
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Cloudinary'],
        category: ProjectCategory.PROFESSIONAL,
        imagePlaceholder: 'https://picsum.photos/id/250/800/600'
    },
    {
        id: 'ian-granja',
        title: 'Ian Granja Advocacia',
        description: 'Site institucional profissional desenvolvido para advogado, focando em credibilidade, performance e SEO para captar clientes.',
        link: 'https://www.iangranja.adv.br/',
        tags: ['React', 'UI/UX', 'Responsive'],
        category: ProjectCategory.PROFESSIONAL,
        imagePlaceholder: 'https://picsum.photos/id/450/800/600'
    },
    {
        id: 'emanuel-silvestre',
        title: 'Emanuel Silvestre Advocacia',
        description: 'Presença digital desenvolvida para escritório de advocacia, com design sóbrio e foco na conversão de contatos através de WhatsApp e formulários.',
        link: 'https://www.emanuelsilvestre.adv.br/',
        tags: ['Frontend', 'Landing Page', 'SEO'],
        category: ProjectCategory.PROFESSIONAL,
        imagePlaceholder: 'https://picsum.photos/id/106/800/600'
    },
    {
        id: 'domino',
        title: 'Dominó Multiplayer',
        description: 'Plataforma de jogo em tempo real. Backend Node.js com WebSockets para baixa latência, autenticação e containers Docker.',
        link: '#',
        repoLink: 'https://github.com/LuisFelipe210',
        tags: ['Node.js', 'WebSockets', 'Docker', 'PostgreSQL'],
        category: ProjectCategory.ACADEMIC,
        imagePlaceholder: 'https://picsum.photos/id/204/800/600'
    },
    {
        id: 'asset-maintenance',
        title: 'Assistente de Manutenção',
        description: 'Aplicação Fullstack para gerenciamento de ativos e alertas de manutenção preventiva. Dashboard intuitivo e API RESTful.',
        link: '#',
        repoLink: 'https://github.com/LuisFelipe210',
        tags: ['NestJS', 'React', 'PostgreSQL', 'TypeScript'],
        category: ProjectCategory.ACADEMIC,
        imagePlaceholder: 'https://picsum.photos/id/5/800/600'
    }
];

export const SKILLS: Skill[] = [
    {
        category: "Puro Arábica (Core Stack)",
        items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Node.js"]
    },
    {
        category: "Torra Intensa (Backend & BD)",
        items: ["NestJS", "Express", "PostgreSQL", "MongoDB", "Redis", "WebSockets"]
    },
    {
        category: "Maquinário (DevOps & Tools)",
        items: ["Docker", "Git/GitHub", "Nginx", "Linux"]
    },
    {
        category: "Notas Especiais (Data & AI)",
        items: ["Python", "Pandas/NumPy", "Engenharia de Prompts"]
    }
];

export const RADAR_DATA: StatData[] = [
    { subject: 'Frontend', A: 120, fullMark: 150 },
    { subject: 'Backend', A: 130, fullMark: 150 },
    { subject: 'DevOps', A: 85, fullMark: 150 },
    { subject: 'Data Science', A: 90, fullMark: 150 },
    { subject: 'Cafeína', A: 150, fullMark: 150 },
    { subject: 'Criatividade', A: 140, fullMark: 150 },
];