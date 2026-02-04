'use client'

import { Icon } from '@iconify/react'
import { Button } from './Button'
import Image from 'next/image'

const locations = [
  { state: "Rio grande do norte", phone: "(84) 3334-2179" },
  { state: "São Paulo", phone: "(11) 3334-2179" },
  { state: "Rio de Janeiro", phone: "(84) 3334-2179" },
  { state: "Maranhão", phone: "(84) 3334-2179" },
]

export function Contact() {
  return (
    <section className="bg-[#F8F9FC] py-20 px-4 lg:px-6 relative overflow-hidden">
      {/* Logo caixa no canto inferior direito */}
      <div className="absolute bottom-7 right-4 z-10">
        <Image 
          src="/logo_caixa.svg" 
          alt="Logo" 
          width={300} 
          height={300} 
          className="w-auto h-auto"
        />
      </div>
      
      <div className="container mx-auto">
        {/* Header Contato */}
        <div className="text-center mb-16">
          <p className="text-[#313164] font-medium mb-2">Precisa de ajuda?</p>
          <h2 className="text-4xl font-bold text-[#01165A]">
            Entre em <span className="text-[#F97D0E]">contato conosco</span>
          </h2>
        </div>

        {/* Cards de Localização */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {locations.map((loc, i) => (
            <div 
              key={i} 
              className="p-6 rounded-lg flex justify-between items-center cursor-pointer transition-all duration-300 bg-[#E9EEF7] text-[#313164] hover:bg-[#01165A] hover:text-white"
            >
              <div>
                <p className="text-xs uppercase mb-1 transition-colors duration-300 text-[#6A80B0]">{loc.state}</p>
                <p className="text-lg font-bold text-[#F97D0E]">{loc.phone}</p>
              </div>
              <Icon icon="mdi:phone-in-talk" className="text-2xl" color="#F97D0E" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Lado Esquerdo: Texto e Ilustração */}
          <div>
            <h3 className="text-3xl font-bold text-[#01165A] leading-tight mb-8">
              Marque o que precisa e receba uma <span className="text-[#F97D0E]">análise gratuita do seu caso.</span>
            </h3>
            <div className="relative w-full max-w-md aspect-square">
              <Image src="/contact_image.svg" alt="Análise de caso" fill className="object-contain drop-shadow" />
            </div>
          </div>

          {/* Lado Direito: Formulário Checklist */}
          <div className="space-y-8">
            <div className="flex gap-8 items-center">
              <span className="text-[#6A80B0] font-semibold">Tipo de profissional</span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="tipo" className="accent-[#01165A]" defaultChecked />
                <span className="text-[#6A80B0]">Professor</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="tipo" className="accent-[#01165A]" />
                <span className="text-[#6A80B0]">Servidor</span>
              </label>
            </div>

            <div className="bg-gradient-to-b from-[#0F2464] to-[#273C7D] rounded-2xl p-8 text-white grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              <div>
                <h4 className="font-bold mb-4 border-b border-white/10 pb-2">Ativos</h4>
                <div className="space-y-3">
                  {['Progressão de Letras', 'Progressão de nível', 'Retificação de Titulação', 'Terço de férias', 'Gratificação natalina 2018'].map((item) => (
                    <label key={item} className="flex items-center gap-3 text-sm text-[#A9B5CE]">
                      <input type="checkbox" className="w-4 h-4 rounded accent-[#F97D0E]" />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-4 border-b border-white/10 pb-2">Aposentados</h4>
                <div className="space-y-3">
                  {['Licença Prêmio', 'Demora para aposentadoria', 'Retificação de Letra', 'Entrega de documentação'].map((item) => (
                    <label key={item} className="flex items-center gap-3 text-sm text-[#A9B5CE]">
                      <input type="checkbox" className="w-4 h-4 rounded accent-[#F97D0E]" />
                      {item}
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-2 flex justify-end mt-4">
                <Button variant="secondary" className="px-10 py-3 flex items-center gap-2">
                  <span>Enviar</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}