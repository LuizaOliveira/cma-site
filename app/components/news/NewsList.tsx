'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

// Mock data para lista de notícias
const newsList = [
  {
    id: 3,
    title: 'Mudanças no Sistema de Aposentadoria dos Servidores Estaduais',
    summary: 'Novo decreto estabelece novas regras para aposentadoria de servidores estaduais, incluindo tempo mínimo de contribuição.',
    category: 'Previdência',
    publishedAt: '2024-02-02T09:15:00Z',
    author: 'Clodonil Monteiro',
    readTime: 6,
    views: 1240,
  },
  {
    id: 4,
    title: 'Concurso Público: Novas Oportunidades para o Judiciário',
    summary: 'Tribunal de Justiça anuncia abertura de concurso com 500 vagas para diversas áreas do conhecimento.',
    category: 'Concursos',
    publishedAt: '2024-02-01T16:45:00Z',
    author: 'Clodonil Monteiro',
    readTime: 4,
    views: 890,
  },
  {
    id: 5,
    title: 'Licença Médica: Direitos e Procedimentos Atualizados',
    summary: 'Guia completo sobre os direitos dos servidores em licença médica e os novos procedimentos para solicitação.',
    category: 'Direitos',
    publishedAt: '2024-01-31T11:20:00Z',
    author: 'Clodonil Monteiro',
    readTime: 8,
    views: 2150,
  },
  {
    id: 6,
    title: 'Progressão por Capacitação: Como Funciona o Novo Sistema',
    summary: 'Entenda as mudanças no sistema de progressão por capacitação e como isso afeta a carreira dos servidores.',
    category: 'Carreira',
    publishedAt: '2024-01-30T13:30:00Z',
    author: 'Clodonil Monteiro',
    readTime: 5,
    views: 1680,
  },
  {
    id: 7,
    title: 'Auxílio Alimentação: Valores Reajustados para 2024',
    summary: 'Novo valor do auxílio alimentação para servidores públicos federais entra em vigor com aumento de 15%.',
    category: 'Benefícios',
    publishedAt: '2024-01-29T10:00:00Z',
    author: 'Clodonil Monteiro',
    readTime: 3,
    views: 3200,
  },
  {
    id: 8,
    title: 'Teletrabalho: Novas Regulamentações para Servidores',
    summary: 'Portaria estabelece novas diretrizes para o trabalho remoto de servidores públicos, com foco na produtividade.',
    category: 'Trabalho',
    publishedAt: '2024-01-28T14:15:00Z',
    author: 'Clodonil Monteiro',
    readTime: 7,
    views: 1450,
  },
];

function NewsListItem({ news }: { news: any }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer border border-gray-100 hover:border-orange-200"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1">
          {/* Category */}
          <div className="mb-2">
            <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
              {news.category}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {news.title}
          </h3>
          
          {/* Summary */}
          <p className="text-gray-600 mb-4 line-clamp-2 lg:line-clamp-1">
            {news.summary}
          </p>
          
          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Icon icon="lucide:user" className="h-4 w-4 mr-1" />
              <span>{news.author}</span>
            </div>
            <div className="flex items-center">
              <Icon icon="lucide:calendar" className="h-4 w-4 mr-1" />
              <span>{new Date(news.publishedAt).toLocaleDateString('pt-BR')}</span>
            </div>
            <div className="flex items-center">
              <Icon icon="lucide:clock" className="h-4 w-4 mr-1" />
              <span>{news.readTime} min de leitura</span>
            </div>
            <div className="flex items-center">
              <Icon icon="lucide:eye" className="h-4 w-4 mr-1" />
              <span>{news.views.toLocaleString()} visualizações</span>
            </div>
          </div>
        </div>
        
        {/* Read More Arrow */}
        <div className="mt-4 lg:mt-0 lg:ml-6">
          <div className="flex items-center text-orange-500 group-hover:text-orange-600 font-medium">
            <span className="mr-2">Ler mais</span>
            <Icon icon="lucide:arrow-right" className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function NewsList() {
  return (
    <section className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <h2 className="text-3xl font-bold text-gray-900">
          Todas as <span className="text-orange-500">Notícias</span>
        </h2>
        
        <div className="hidden lg:flex items-center text-gray-500">
          <span className="text-sm">Mostrando {newsList.length} de 50+ artigos</span>
        </div>
      </motion.div>
      
      <div className="space-y-6">
        {newsList.map((news, index) => (
          <motion.div
            key={news.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <NewsListItem news={news} />
          </motion.div>
        ))}
      </div>
      
      {/* Load More Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center pt-8"
      >
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 flex items-center mx-auto">
          <span>Carregar mais notícias</span>
          <Icon icon="lucide:arrow-right" className="ml-2 h-5 w-5" />
        </button>
      </motion.div>
    </section>
  );
}