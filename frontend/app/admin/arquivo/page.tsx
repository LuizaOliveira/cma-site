"use client";

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function ArquivoDashboard() {
  // Exemplo de dados para popular a tabela
  const noticias = [
    { id: 1, titulo: "Lançamento da Nova Campanha 2026", data: "12/02/2026", status: "Publicado", categoria: "Marketing" },
    { id: 2, titulo: "Relatório Trimestral de Performance", data: "10/02/2026", status: "Rascunho", categoria: "Finanças" },
    { id: 3, titulo: "Atualização de Segurança do Sistema", data: "05/02/2026", status: "Arquivado", categoria: "TI" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-900">
      
      {/* SIDEBAR */}
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

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col ml-64">
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-10 h-20 flex items-center justify-between px-10 border-b border-slate-200">
          <h2 className="text-[#1B1B3A] font-extrabold text-xl tracking-tight">Arquivo de Notícias</h2>
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-slate-100 border-2 border-[#F97D0E] rounded-full flex items-center justify-center font-black">A</div>
          </div>
        </header>

        <div className="p-10 max-w-6xl w-full mx-auto space-y-6">
          
          {/* BARRA DE BUSCA E FILTROS */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96 group">
              <Icon 
                icon="solar:magnifer-linear" 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl group-focus-within:text-[#F97D0E] transition-colors pointer-events-none" 
              />
              <input 
                type="text" 
                placeholder="Pesquisar notícias..." 
                className="w-full pl-16 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F97D0E]/10 focus:border-[#F97D0E] transition-all shadow-sm text-sm"
              />
            </div>

  <div className="flex gap-2">
    <button className="flex items-center gap-2 px-5 py-3 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 hover:border-slate-300 transition-all font-bold text-sm shadow-sm">
      <Icon icon="solar:filter-bold-duotone" className="text-lg text-[#F97D0E]" /> 
      Filtros
    </button>
  </div>
</div>

          {/* TABELA */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 px-8 py-4 border-b border-slate-100 flex justify-between items-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Histórico de Publicações</span>
              <span className="text-[10px] bg-slate-200 text-slate-600 px-2 py-1 rounded-md font-bold">{noticias.length} Itens</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/30">
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Notícia</th>
                    <th className="py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Categoria</th>
                    <th className="py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Data</th>
                    <th className="py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {noticias.map((item) => (
                    <tr key={item.id} className="group hover:bg-slate-50/80 transition-colors">
                      <td className="px-8 py-5">
                        <span className="font-bold text-[#1B1B3A] block">{item.titulo}</span>
                        <span className="text-[10px] text-slate-400 uppercase font-medium">ID: #{item.id}</span>
                      </td>
                      <td className="py-5 text-sm text-slate-600 font-medium">{item.categoria}</td>
                      <td className="py-5 text-sm text-slate-500">{item.data}</td>
                      <td className="py-5">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight ${
                          item.status === 'Publicado' ? 'bg-green-100 text-green-600' : 
                          item.status === 'Rascunho' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button title="Visualizar" className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all">
                            <Icon icon="solar:eye-bold" className="text-xl" />
                          </button>
                          <button title="Editar" className="p-2 text-slate-400 hover:text-[#F97D0E] hover:bg-orange-50 rounded-lg transition-all">
                            <Icon icon="solar:pen-bold" className="text-xl" />
                          </button>
                          <button title="Excluir" className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                            <Icon icon="solar:trash-bin-trash-bold" className="text-xl" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* PAGINAÇÃO */}
            <div className="px-8 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">Mostrando 1-3 de 15 notícias</span>
              <div className="flex gap-2">
                <button className="p-2 border border-slate-200 rounded-lg hover:bg-white disabled:opacity-50 transition-all text-slate-400">
                  <Icon icon="solar:alt-arrow-left-bold" />
                </button>
                <button className="p-2 border border-slate-200 rounded-lg hover:bg-white transition-all text-slate-400">
                  <Icon icon="solar:alt-arrow-right-bold" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}