'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Link from 'next/link';

// Mock data para notícias
const newsItems = [
  {
    id: 1,
    title: 'Título da Notícia principal',
    description: 'Descrição da notícia principal com pelo menos esse tamanho, ocupando duas linhas',
    category: 'PÚBLICA',
  },
  {
    id: 2,
    title: 'Título da Notícia principal',
    description: 'Descrição da notícia principal com pelo menos esse tamanho, ocupando duas linhas',
    category: 'PÚBLICA',
  },
  {
    id: 3,
    title: 'Título da Notícia principal',
    description: 'Descrição da notícia principal com pelo menos esse tamanho, ocupando duas linhas',
    category: 'PÚBLICA',
  },
  {
    id: 4,
    title: 'Título da Notícia principal',
    description: 'Descrição da notícia principal com pelo menos esse tamanho, ocupando duas linhas',
    category: 'PÚBLICA',
  },
];

export function FeaturedNews() {
  return (
    <section className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-2">— Veja o que dizem sobre a gente</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Fique atualizado e confira as
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            últimas <span className="text-orange-500">notícias e conteúdos</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Image Placeholder */}
          <div className="bg-gray-200 rounded-lg h-[500px] flex items-center justify-center">
            <Icon icon="mdi:newspaper" className="h-24 w-24 text-gray-400" />
          </div>

          {/* Right Side - News List */}
          <div className="space-y-6">
            {newsItems.map((news) => (
              <article key={news.id} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="mb-3">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
                    {news.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {news.description}
                </p>
              </article>
            ))}

            {/* Ver todas button */}
            <div className="flex items-center justify-between pt-4">
              <Link 
                href="/news"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors inline-block"
              >
                Ver todas
              </Link>
              <button className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors">
                <Icon icon="mdi:arrow-right" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}