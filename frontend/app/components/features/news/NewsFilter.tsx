'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';


const categories = [
  'Todas as categorias',
  'Legislação',
  'Jurisprudência', 
  'Previdência',
  'Concursos',
  'Direitos',
  'Carreira',
  'Benefícios',
  'Trabalho'
];

const timeFilters = [
  'Todos os períodos',
  'Última semana',
  'Último mês',
  'Últimos 3 meses',
  'Último ano'
];

export function NewsFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas as categorias');
  const [selectedTimeFilter, setSelectedTimeFilter] = useState('Todos os períodos');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-xl shadow-lg p-6 sticky top-6"
      >
      <div className="flex items-center mb-6">
        <Icon icon="lucide:filter" className="h-5 w-5 text-orange-500 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Filtros</h3>
      </div>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Buscar notícias
        </label>
        <div className="relative">
          <Icon icon="lucide:search" className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Digite palavras-chave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Icon icon="lucide:tag" className="inline h-4 w-4 mr-1" />
          Categoria
        </label>
        <div className="relative">
          <button
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <span className="text-sm">{selectedCategory}</span>
            <Icon icon="lucide:chevron-down" className={`h-4 w-4 transition-transform ${showCategoryDropdown ? 'rotate-180' : ''}`} />
          </button>
          
          {showCategoryDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowCategoryDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 first:rounded-t-lg last:rounded-b-lg"
                >
                  {category}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Time Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Icon icon="lucide:calendar" className="inline h-4 w-4 mr-1" />
          Período
        </label>
        <div className="relative">
          <button
            onClick={() => setShowTimeDropdown(!showTimeDropdown)}
            className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
            <span className="text-sm">{selectedTimeFilter}</span>
            <Icon icon="lucide:chevron-down" className={`h-4 w-4 transition-transform ${showTimeDropdown ? 'rotate-180' : ''}`} />
          </button>
          
          {showTimeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              {timeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setSelectedTimeFilter(filter);
                    setShowTimeDropdown(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 first:rounded-t-lg last:rounded-b-lg"
                >
                  {filter}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Tags populares */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Tags populares
        </label>
        <div className="flex flex-wrap gap-2">
          {['Aposentadoria', 'Reajuste', 'Concurso', 'INSS', 'STF'].map((tag) => (
            <button
              key={tag}
              className="px-3 py-1 text-xs bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => {
          setSearchTerm('');
          setSelectedCategory('Todas as categorias');
          setSelectedTimeFilter('Todos os períodos');
        }}
        className="w-full py-2 text-sm text-gray-500 hover:text-orange-600 transition-colors"
      >
        Limpar filtros
      </button>
      </motion.div>
      
      {/* Related Articles */}
      {/* <RelatedArticles /> */}
      
      {/* Newsletter Subscription */}
      {/* <NewsletterSubscription /> */}
    </div>
  );
}