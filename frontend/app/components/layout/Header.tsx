'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para adicionar sombra
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'hero', label: 'Início' },
    { id: 'area-atuacao', label: 'Área de Atuação' },
    { id: 'sobre-nos', label: 'Sobre Nós' },
    { id: 'equipe', label: 'Equipe' },
    { id: 'contato', label: 'Contato' },
  ];

  // Função de scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Altura do header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`bg-white fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'
        }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <Image
              src="/logo.svg"
              alt="Clodonil Monteiro Advocacia"
              width={180}
              height={40}
              priority
              className="h-10 w-auto transition-transform hover:scale-105 duration-300"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative text-[#2C3056] hover:text-secondary transition-colors duration-300 text-sm font-medium group"
              >
                {item.label}
                {/* Underline animado */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-all duration-300"
            aria-label="Menu"
          >
            <div className="flex flex-col space-y-1.5">
              <span className={`block w-6 h-0.5 bg-[#2C3056] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#2C3056] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#2C3056] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="flex flex-col space-y-1 py-4 border-t border-slate-200">
            {menuItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-3 px-4 text-[#2C3056] hover:text-secondary hover:bg-slate-50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}