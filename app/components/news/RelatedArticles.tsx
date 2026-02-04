'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const relatedArticles = [
  {
    id: 1,
    title: 'Entenda os Direitos do Servidor em Licença Médica',
    summary: 'Guia completo sobre licenças médicas para servidores públicos.',
    category: 'Direitos',
    publishedAt: '2024-02-01T10:00:00Z',
    readTime: 5,
  },
  {
    id: 2,
    title: 'Aposentadoria Especial: Requisitos e Documentação',
    summary: 'Tudo que você precisa saber sobre aposentadoria especial.',
    category: 'Previdência',
    publishedAt: '2024-01-30T14:30:00Z',
    readTime: 7,
  },
  {
    id: 3,
    title: 'Progressão na Carreira: Como Acelerar sua Evolução',
    summary: 'Estratégias para progredir na carreira pública.',
    category: 'Carreira',
    publishedAt: '2024-01-28T09:15:00Z',
    readTime: 6,
  },
];

export function RelatedArticles() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <div className="w-1 h-6 bg-orange-500 mr-3 rounded-full"></div>
          Artigos Relacionados
        </h3>
        
        <div className="space-y-4">
          {relatedArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              {/* Category */}
              <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs font-medium mb-2">
                {article.category}
              </span>
              
              {/* Title */}
              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                {article.title}
              </h4>
              
              {/* Summary */}
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {article.summary}
              </p>
              
              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <Icon icon="lucide:calendar" className="h-3 w-3 mr-1" />
                    <span>{new Date(article.publishedAt).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center">
                    <Icon icon="lucide:clock" className="h-3 w-3 mr-1" />
                    <span>{article.readTime} min</span>
                  </div>
                </div>
                
                <Icon icon="lucide:arrow-right" className="h-4 w-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t">
          <button className="text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center">
            <span>Ver todos os artigos</span>
            <Icon icon="lucide:arrow-right" className="ml-1 h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}