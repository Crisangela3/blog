"use client";

import { useState } from "react";

export default function Home() {
  const [imageError, setImageError] = useState(false);

  const courses = [
    {
      title: "Desenvolvimento Web Full Stack",
      description: "HTML, CSS, JavaScript, React, Node.js",
      level: "Avançado",
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Programação em Python",
      description: "Python, Django, Flask, Data Science",
      level: "Intermediário",
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Banco de Dados",
      description: "SQL, PostgreSQL, MongoDB, Redis",
      level: "Intermediário",
      color: "from-pink-400 to-rose-400"
    },
    {
      title: "DevOps & Cloud",
      description: "Docker, Kubernetes, AWS, CI/CD",
      level: "Básico",
      color: "from-indigo-400 to-purple-400"
    },
    {
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android",
      level: "Intermediário",
      color: "from-cyan-400 to-blue-400"
    },
    {
      title: "Arquitetura de Software",
      description: "Design Patterns, Clean Code, SOLID",
      level: "Avançado",
      color: "from-rose-400 to-pink-400"
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
    "Python", "Django", "PostgreSQL", "MongoDB", "Git",
    "Docker", "AWS", "Tailwind CSS", "REST APIs", "GraphQL"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Floating animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-gradient-to-br from-blue-300/30 to-cyan-300/30 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-gradient-to-br from-pink-300/30 to-rose-300/30 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-indigo-300/30 to-purple-300/30 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-44 h-44 bg-gradient-to-br from-cyan-300/30 to-blue-300/30 rounded-full blur-2xl animate-float-delayed"></div>
      </div>

      {/* Cute floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-1/4 text-6xl animate-bounce-slow">✨</div>
        <div className="absolute top-1/2 right-1/4 text-5xl animate-bounce-delayed">🌸</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl animate-bounce-slow">💫</div>
        <div className="absolute top-2/3 right-1/3 text-5xl animate-bounce">🦋</div>
        <div className="absolute bottom-20 left-1/2 text-4xl animate-bounce-delayed">🌟</div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <section className="text-center mb-20 animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient"></div>
              <div className="relative w-40 h-40 rounded-full overflow-hidden bg-white p-1">
                {!imageError ? (
                  <img
                    src="/profile.jpg"
                    alt="Foto de perfil"
                    className="w-full h-full object-cover rounded-full"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center text-white text-6xl font-bold">
                    👨‍💻
                  </div>
                )}
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient font-[var(--font-poppins)]">
            Olá, eu sou [Seu Nome]
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-[var(--font-poppins)] font-light">
            Desenvolvedor de Software
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-[var(--font-inter)]">
            Apaixonado por tecnologia e sempre em busca de novos conhecimentos
          </p>
        </section>

        {/* About Section */}
        <section className="mb-20 animate-slide-up">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-[var(--font-poppins)]">
              Sobre Mim
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4 font-[var(--font-inter)]">
              Sou um desenvolvedor apaixonado por criar soluções inovadoras e eficientes. 
              Minha jornada na programação começou com curiosidade e se transformou em uma 
              paixão que me motiva todos os dias a aprender e evoluir.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed font-[var(--font-inter)]">
              Acredito que a tecnologia tem o poder de transformar vidas e estou sempre 
              buscando maneiras de aplicar meus conhecimentos para fazer a diferença. 
              Adoro trabalhar em equipe, compartilhar conhecimento e enfrentar novos desafios.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-[var(--font-poppins)]">
            Habilidades
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white/70 backdrop-blur-lg rounded-full text-gray-700 font-medium shadow-lg border border-white/50 hover:scale-110 hover:shadow-xl transition-all duration-300 cursor-pointer font-[var(--font-inter)]"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section className="mb-20 animate-slide-up">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent font-[var(--font-poppins)]">
            Cursos & Formação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="group relative bg-white/70 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${course.color} mb-4`}>
                    {course.level}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 font-[var(--font-poppins)]">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 font-[var(--font-inter)]">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl p-12 shadow-2xl animate-gradient">
            <h2 className="text-4xl font-bold mb-6 text-white font-[var(--font-poppins)]">
              Vamos Conversar?
            </h2>
            <p className="text-white/90 text-lg mb-8 font-[var(--font-inter)]">
              Estou sempre aberto a novos projetos e oportunidades
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:seu-email@exemplo.com"
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:scale-110 transition-transform duration-300 shadow-lg font-[var(--font-poppins)]"
              >
                📧 Email
              </a>
              <a
                href="https://github.com/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:scale-110 transition-transform duration-300 shadow-lg font-[var(--font-poppins)]"
              >
                💻 GitHub
              </a>
              <a
                href="https://linkedin.com/in/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:scale-110 transition-transform duration-300 shadow-lg font-[var(--font-poppins)]"
              >
                💼 LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-gray-600 font-[var(--font-inter)]">
          <p>© 2025 - Feito com 💜 e muito ☕</p>
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(20px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        
        @keyframes bounce-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-40px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-bounce-delayed {
          animation: bounce-delayed 5s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
      `}</style>
    </div>
  );
}
