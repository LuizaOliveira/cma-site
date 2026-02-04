        'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Início' },
    { href: '#area-atuacao', label: 'Área de atuação' },
    { href: '#equipe', label: 'Equipe' },
    { href: '/news', label: 'Notícias' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Clodonil Monteiro Advocacia"
              width={180}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#2C3056] hover:text-orange-500 transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <div className="flex flex-col space-y-1">
              <span className={`block w-5 h-0.5 bg-[#2C3056] transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-[#2C3056] transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-[#2C3056] transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 px-4 text-custom hover:text-secondary hover:bg-slate-50 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}