"use client";

import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function ArquivoDashboard() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-900">
      
      <aside className="w-64 bg-[#1B1B3A] text-white hidden md:flex flex-col fixed h-full shadow-xl">
        <div className="p-8 border-b border-white/5 flex items-center gap-3">
          <div className="w-8 h-8 bg-[#F97D0E] rounded-lg flex items-center justify-center">
            <Icon icon="solar:bengal-bold" className="text-white text-xl" />
          </div>
          <span className="font-black text-lg tracking-tighter italic">ADMIN<span className="text-[#F97D0E]">PANEL</span></span>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 mt-4">
          <Link href="/admin/dashboard" className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all group">
            <Icon icon="solar:document-add-bold-duotone" className="text-xl group-hover:scale-110 transition-transform" />
            <span className="font-bold">Nova Notícia</span>
          </Link>
          
          <Link href="/admin/arquivo" className="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-[#F97D0E]/20 to-transparent rounded-xl text-[#F97D0E] border-l-4 border-[#F97D0E] transition-all">
            <Icon icon="solar:archive-minimalistic-bold-duotone" className="text-xl" />
            <span className="font-bold">Postagens Antigas</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-white/5">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all">
            <Icon icon="solar:logout-3-bold-duotone" />
            <span className="font-medium">Sair do Sistema</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col ml-64">
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 h-20 flex items-center justify-between px-10 border-b border-slate-200">
          <h2 className="text-[#1B1B3A] font-extrabold text-xl tracking-tight">Arquivo de Notícias</h2>
          <div className="w-10 h-10 bg-slate-100 border-2 border-[#F97D0E] rounded-full flex items-center justify-center font-black">A</div>
        </header>

        <div className="p-10 max-w-6xl w-full mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-8 py-4 border-b border-slate-100 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Histórico de Publicações</span>
            </div>
            
            <div className="p-8">
               <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Notícia</th>
                      <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Data</th>
                      <th className="pb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-50 group hover:bg-slate-50/50">
                      <td className="py-4 font-bold text-[#1B1B3A]">Título de Exemplo</td>
                      <td className="py-4 text-sm text-slate-500">12/02/2026</td>
                      <td className="py-4 text-right">
                        <button className="text-slate-400 hover:text-[#F97D0E] transition-colors"><Icon icon="solar:pen-bold" className="text-xl" /></button>
                      </td>
                    </tr>
                  </tbody>
               </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}