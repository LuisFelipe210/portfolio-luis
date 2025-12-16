import { Project, ProjectCategory, Skill, StatData } from './types';

export const PERSONAL_INFO = {
    name: "Luis Felipe Rodrigues",
    role: "Desenvolvedor Web Fullstack",
    email: "luisfelipe.rb2104@gmail.com",
    linkedin: "https://linkedin.com/in/luis-feliipe-desenvolvedor",
    github: "https://github.com/LuisFelipe210",
    education: {
        degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        institution: "UNIFACS – Universidade Salvador",
        period: "Previsão de Conclusão: Dez 2027"
    },
    summary: "Desenvolvedor Web focado em performance e escalabilidade. Experiência prática na construção de aplicações modernas utilizando o ecossistema JavaScript (React, Node.js) e TypeScript. Apaixonado por código limpo e arquitetura de software eficiente."
};

export const PROJECTS: Project[] = [
    {
        id: 'brand-criativo',
        title: 'Brand Criativo - Identidade & Web',
        description: '"Desenvolvimento da nova casa digital da Brand Criativo. O objetivo era fugir do minimalismo padrão e criar uma experiência memorável que gritasse \'autoridade\'. Utilizei uma abordagem brutalista com tipografia pesada e contrastes altos para retenção de atenção. O site não é apenas um portfólio, é uma ferramenta de conversão com arquitetura de informação focada em transformar visitantes em leads qualificados.',
        link: 'https://brandcriativo.com.br/',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
        category: ProjectCategory.PROFESSIONAL,
        imagePlaceholder: 'assets/brand-criativo-cover.png',
    },
    {
        id: 'hello-foto',
        title: 'Hellô Borges Fotografia',
        description: 'Plataforma completa de gestão para estúdio fotográfico. Sistema de portfólio, blog e área do cliente exclusiva para seleção e aprovação de fotos.',
        link: 'https://www.hellofotografia.com.br/',
        tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
        category: ProjectCategory.PROFESSIONAL,
        imagePlaceholder: 'assets/hello-fotografia-cover.png',
    },
    {
        id: 'emanuel-silvestre',
        title: 'Emanuel Silvestre Advocacia',
        description: 'Landing Page estratégica para captação de clientes previdenciários. Integração direta com WhatsApp e otimização para mobile.',
        link: 'https://www.emanuelsilvestre.adv.br/',
        tags: ['Landing Page', 'Conversion', 'Mobile First'],
        category: ProjectCategory.PROFESSIONAL,
        imagePlaceholder: 'assets/emanuel-cover.png'
    },

    {
        id: 'ian-granja',
        title: 'Ian Granja Advocacia',
        description: 'Site institucional de alta performance focado em SEO local e conversão de leads. Design otimizado para transmitir autoridade e confiança.',
        link: 'https://www.iangranja.adv.br/',
        tags: ['React', 'SEO', 'Performance'],
        category: ProjectCategory.PROFESSIONAL,
        imagePlaceholder: 'assets/ian-cover.png'
    },
    {
        id: 'domino',
        title: 'Dominó Multiplayer',
        description: 'Aplicação de jogo em tempo real utilizando WebSockets para comunicação bidirecional de baixa latência.',
        link: '#',
        repoLink: 'https://github.com/LuisFelipe210',
        tags: ['Node.js', 'WebSockets', 'Docker'],
        category: ProjectCategory.ACADEMIC,
        imagePlaceholder: 'https://picsum.photos/id/204/800/600'
    },
    {
        id: 'asset-maintenance',
        title: 'Gestão de Ativos',
        description: 'Sistema Fullstack para controle de manutenção preventiva de equipamentos. Dashboard administrativo e relatórios.',
        link: '#',
        repoLink: 'https://github.com/LuisFelipe210',
        tags: ['NestJS', 'React', 'PostgreSQL'],
        category: ProjectCategory.ACADEMIC,
        imagePlaceholder: 'https://picsum.photos/id/5/800/600'
    }
];

export const SKILLS: Skill[] = [
    {
        category: "Frontend Moderno",
        items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]
    },
    {
        category: "Backend & API",
        items: ["Node.js", "NestJS", "Express", "RESTful APIs"]
    },
    {
        category: "Banco de Dados",
        items: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM"]
    },
    {
        category: "DevOps & Tools",
        items: ["Docker", "Git/GitHub", "Linux", "CI/CD"]
    }
];

export const RADAR_DATA: StatData[] = [
    { subject: 'Frontend', A: 140, fullMark: 150 },
    { subject: 'Backend', A: 130, fullMark: 150 },
    { subject: 'DevOps', A: 90, fullMark: 150 },
    { subject: 'Mobile', A: 80, fullMark: 150 },
    { subject: 'Database', A: 120, fullMark: 150 },
    { subject: 'Architecture', A: 110, fullMark: 150 },
];