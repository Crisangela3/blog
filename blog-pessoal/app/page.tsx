'use client';

import Image from 'next/image';

export default function Portfolio() {

  const projects = [
    {
      id: 1,
      title: 'Projeto E-commerce',
      description: 'Plataforma completa de e-commerce com carrinho de compras, pagamentos e painel administrativo.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'App de Gestão',
      description: 'Sistema de gestão empresarial com dashboard interativo e relatórios em tempo real.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['TypeScript', 'Next.js', 'PostgreSQL'],
    },
    {
      id: 3,
      title: 'Rede Social',
      description: 'Plataforma social com feed de notícias, mensagens em tempo real e sistema de amizades.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      tags: ['React', 'Firebase', 'Tailwind'],
    },
    {
      id: 4,
      title: 'Portfolio Criativo',
      description: 'Site portfolio com animações 3D, transições suaves e design moderno.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['Three.js', 'React', 'GSAP'],
    },
    {
      id: 5,
      title: 'App Mobile',
      description: 'Aplicativo mobile multiplataforma com funcionalidades offline e sincronização.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      tags: ['React Native', 'Redux', 'API REST'],
    },
    {
      id: 6,
      title: 'Dashboard Analytics',
      description: 'Dashboard de análise de dados com gráficos interativos e visualizações complexas.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['D3.js', 'Vue.js', 'Python'],
    },
  ];

  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
    'Python', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Git'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section com Gradiente Animado */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gradiente Animado de Fundo */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 animate-gradient-x opacity-50"></div>
        
        {/* Círculos Animados */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Conteúdo Hero */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up">
            Olá, sou <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Desenvolvedor</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
            Criando experiências digitais incríveis com código limpo e design moderno
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up animation-delay-400">
            <a 
              href="#projetos" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Ver Projetos
            </a>
            <a 
              href="#contato" 
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Contato
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section className="py-20 px-6 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Mim</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Sou um desenvolvedor apaixonado por criar soluções digitais que fazem a diferença. 
                Com experiência em desenvolvimento full-stack, transformo ideias em realidade através 
                de código elegante e interfaces intuitivas.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Especializado em tecnologias modernas como React, Next.js e Node.js, estou sempre 
                buscando aprender e aplicar as melhores práticas do mercado.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 text-center hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-white font-semibold">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Projetos</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Confira alguns dos projetos que desenvolvi
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Imagem do Projeto */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-purple-600/30 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Overlay com botão */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <button className="px-6 py-3 bg-white text-purple-900 rounded-full font-semibold hover:bg-purple-100 transition-colors">
                    Ver Detalhes
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20 px-6 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Conversar?</span>
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:seu@email.com" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Enviar Email
            </a>
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Meu Portfólio. Feito com ❤️ e Next.js</p>
        </div>
      </footer>
    </div>
  );
}
