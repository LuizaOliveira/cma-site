'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

export function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
      >
        <Icon icon="lucide:check-circle" className="h-12 w-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          Inscrição confirmada!
        </h3>
        <p className="text-green-600">
          Você receberá nossas atualizações em {email}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl p-6 text-white"
    >
      <div className="flex items-center mb-4">
        <Icon icon="lucide:mail" className="h-6 w-6 mr-2" />
        <h3 className="text-lg font-semibold">Newsletter Jurídica</h3>
      </div>
      
      <p className="mb-4 text-blue-100">
        Receba as principais atualizações sobre direitos dos servidores públicos
        diretamente no seu e-mail.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-orange-300 focus:outline-none"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-white text-blue-600 font-medium py-2 rounded-lg hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Inscrevendo...' : 'Inscrever-se gratuitamente'}
        </button>
      </form>
      
      <p className="text-xs text-blue-200 mt-2">
        Sem spam. Cancele a qualquer momento.
      </p>
    </motion.div>
  );
}