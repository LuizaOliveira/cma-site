"use client";

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '../../components/ui/Button';

export default function AdminDashboard() {
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-900">
      
      <aside className="w-64 bg-[#1B1B3A] text-white hidden md:flex flex-col fixed h-full shadow-xl">
        <div className="p-8 border-b border-white/5 flex items-center gap-3">
          <div className="w-8 h-8 bg-[#F97D0E] rounded-lg flex items-center justify-center">
            <Icon icon="solar: Bengal-bold" className="text-white text-xl" />
          </div>
          <span className="font-black text-lg tracking-tighter italic">ADMIN<span className="text-[#F97D0E]">PANEL</span></span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 mt-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#F97D0E]/20 to-transparent rounded-xl text-[#F97D0E] border-l-4 border-[#F97D0E] transition-all duration-300">
            <Icon icon="solar:document-add-bold-duotone" className="text-xl" />
            <span className="font-bold">Nova Notícia</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group">
            <Icon icon="solar: gallery-bold-duotone" className="group-hover:scale-110 transition-transform" />
            <span>Galeria</span>
          </button>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all group">
            <Icon icon="solar:logout-3-bold-duotone" className="group-hover:translate-x-1 transition-transform" />
            <span className="font-medium">Sair do Sistema</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 flex flex-col ml-64">
        
        
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 h-20 flex items-center justify-between px-10 border-b border-slate-200">
          <div>
            <h2 className="text-[#1B1B3A] font-extrabold text-xl tracking-tight">Criar Publicação</h2>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-widest">Dashboard &gt; Notícias &gt; Novo</p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-[#1B1B3A]">Admin Principal</p>
              <p className="text-[10px] text-green-500 font-bold uppercase">Online agora</p>
            </div>
            <div className="w-10 h-10 bg-slate-100 border-2 border-[#F97D0E] rounded-full flex items-center justify-center text-[#1B1B3A] font-black shadow-inner">
              A
            </div>
          </div>
        </header>

        
        <div className="p-10 max-w-6xl w-full mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-8 py-4 border-b border-slate-100 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Informações Gerais</span>
              <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-1 rounded-md font-bold italic">Rascunho Automático</span>
            </div>

            <form className="p-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              
              <div className="lg:col-span-7 space-y-8">
                <div className="group">
                  <label className="block text-xs font-black text-[#1B1B3A] mb-2 uppercase tracking-widest transition-colors group-focus-within:text-[#F97D0E]">
                    Título da Notícia
                  </label>
                  <input 
                    type="text" 
                    placeholder="Ex: Novo decreto municipal sobre educação..."
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-slate-50 outline-none focus:bg-white focus:border-[#F97D0E] focus:ring-4 focus:ring-[#F97D0E]/10 transition-all text-slate-800 font-medium placeholder:text-slate-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-black text-[#1B1B3A] mb-2 uppercase tracking-widest">Categoria</label>
                        <select className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-slate-50 outline-none focus:border-[#F97D0E] transition-all appearance-none cursor-pointer font-medium">
                            <option>Informativo Jurídico</option>
                            <option>Notícias da Educação</option>
                            <option>Comunicados Internos</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-black text-[#1B1B3A] mb-2 uppercase tracking-widest">Data de Exibição</label>
                        <input type="date" className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-slate-50 outline-none focus:border-[#F97D0E] transition-all text-slate-500 uppercase text-xs" />
                    </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-[#1B1B3A] mb-2 uppercase tracking-widest">Conteúdo da Matéria</label>
                  <textarea 
                    rows={10} 
                    placeholder="Desenvolva o texto da notícia aqui com todos os detalhes..."
                    className="w-full px-5 py-4 rounded-xl border-2 border-slate-100 bg-slate-50 outline-none focus:bg-white focus:border-[#F97D0E] focus:ring-4 focus:ring-[#F97D0E]/10 transition-all resize-none text-slate-800 leading-relaxed font-medium"
                  ></textarea>
                </div>
              </div>

              
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <label className="block text-xs font-black text-[#1B1B3A] mb-2 uppercase tracking-widest">Mídia de Capa</label>
                  <div 
                    onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                    onDragLeave={() => setDragActive(false)}
                    className={`relative border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center transition-all duration-300 group ${
                      dragActive ? 'border-[#F97D0E] bg-orange-50/50 scale-[1.02]' : 'border-slate-300 bg-slate-50 hover:border-[#F97D0E]/50 hover:bg-slate-100/50'
                    }`}
                  >
                    <div className={`p-4 rounded-full mb-4 transition-colors ${dragActive ? 'bg-[#F97D0E] text-white' : 'bg-white text-slate-400 shadow-sm group-hover:text-[#F97D0E]'}`}>
                        <Icon icon="solar:upload-minimalistic-bold-duotone" className="text-3xl" />
                    </div>
                    <p className="text-sm text-slate-600 font-bold">
                        Solte a imagem ou <span className="text-[#F97D0E] hover:underline transition-all">navegue</span>
                    </p>
                    <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase tracking-tighter">JPG, PNG ou WEBP (Max 5MB)</p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl space-y-4">
                   <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Configurações de Envio</h4>
                   
                   <label className="flex items-center gap-3 cursor-pointer group">
                     <div className="relative flex items-center">
                        <input type="checkbox" className="peer hidden" id="notif" />
                        <div className="w-5 h-5 border-2 border-slate-300 rounded peer-checked:bg-[#F97D0E] peer-checked:border-[#F97D0E] transition-all"></div>
                        <Icon icon="ph:check-bold" className="absolute text-white text-xs left-[4px] opacity-0 peer-checked:opacity-100 transition-opacity" />
                     </div>
                     <span className="text-sm text-slate-700 font-bold group-hover:text-[#F97D0E] transition-colors">Disparar Notificação Push</span>
                   </label>

                   <label className="flex items-center gap-3 cursor-pointer group">
                     <div className="relative flex items-center">
                        <input type="checkbox" className="peer hidden" id="destaque" />
                        <div className="w-5 h-5 border-2 border-slate-300 rounded peer-checked:bg-[#F97D0E] peer-checked:border-[#F97D0E] transition-all"></div>
                        <Icon icon="ph:check-bold" className="absolute text-white text-xs left-[4px] opacity-0 peer-checked:opacity-100 transition-opacity" />
                     </div>
                     <span className="text-sm text-slate-700 font-bold group-hover:text-[#F97D0E] transition-colors">Fixar no Topo da Home</span>
                   </label>
                </div>

                <div className="flex flex-col gap-3 pt-6">
                  <button 
                    type="submit"
                    className="w-full py-5 bg-[#F97D0E] hover:bg-[#e06d0a] text-white rounded-xl font-black text-sm uppercase tracking-widest shadow-xl shadow-orange-500/30 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Icon icon="solar:paper-plane-bold-duotone" className="text-xl" />
                    Publicar Agora
                  </button>
                  <button className="w-full py-4 text-slate-400 hover:text-slate-600 font-bold text-xs uppercase transition-all tracking-widest">
                    Salvar como Rascunho
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
} 