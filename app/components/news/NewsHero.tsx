'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export function NewsHero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2220%22%20height%3D%2220%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2020%200%20L%200%200%200%2020%22%20fill%3D%22none%22%20stroke%3D%22%2523ffffff%22%20stroke-width%3D%220.5%22%20opacity%3D%220.1%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width%3D%22100%2525%22%20height%3D%22100%2525%22%20fill%3D%22url%28%2523grid%29%22%20/%3E%3C/svg%3E')]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Notícias e
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent"> Atualizações</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fique atualizado com as últimas notícias do setor público, mudanças na legislação 
            e análises especializadas sobre direitos dos servidores
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <Icon icon="lucide:trending-up" className="h-8 w-8 text-orange-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">150+</div>
              <div className="text-blue-100">Artigos Publicados</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <Icon icon="lucide:calendar" className="h-8 w-8 text-orange-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">Semanal</div>
              <div className="text-blue-100">Atualizações</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <Icon icon="lucide:clock" className="h-8 w-8 text-orange-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white">24h</div>
              <div className="text-blue-100">Cobertura</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}