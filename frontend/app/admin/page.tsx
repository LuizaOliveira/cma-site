"use client";

import React from 'react';
import { Icon } from '@iconify/react';
import { Button } from '../components/ui/Button';

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2F4F5]">
      <div
        className="
          w-full max-w-md bg-white rounded-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          hover:shadow-[0_25px_70px_rgba(0,0,0,0.18)]
          transition-all duration-300
          overflow-hidden border border-gray-100
        "
      >
        
        
        <div className="bg-[#1B1B3A] p-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#273459] rounded-xl mb-4 border border-white/10">
            <Icon icon="material-symbols:admin-panel-settings-outline" className="text-3xl text-[#F97D0E]" />
          </div>
          <h1 className="text-white text-xl font-bold tracking-tight">Painel Administrativo</h1>
          <p className="text-[#6A80B0] text-sm mt-1">Gestão de Conteúdo e Notícias</p>
        </div>

        
        <div className="p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#1B1B3A] mb-1.5">Usuário</label>
              <div className="relative">
                <Icon icon="ph:user-bold" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F97D0E] focus:border-transparent outline-none transition-all text-sm"
                  placeholder="Seu usuário"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1B1B3A] mb-1.5">Senha</label>
              <div className="relative">
                <Icon icon="ph:lock-key-bold" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  type="password" 
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F97D0E] focus:border-transparent outline-none transition-all text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <Button 
              variant="secondary" 
              className="w-full py-3 mt-4 font-bold flex items-center justify-center gap-2"
            >
              <span>Acessar Dashboard</span>
              <Icon icon="ph:arrow-right-bold" />
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <button className="text-xs text-[#6A80B0] hover:text-[#1B1B3A] transition-colors flex items-center justify-center mx-auto gap-1">
              <Icon icon="ph:arrow-left" />
              Voltar para o site público
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
