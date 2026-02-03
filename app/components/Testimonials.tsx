'use client'

import Image from 'next/image'
import { SectionTitle } from './SectionTitle'
import { Icon } from '@iconify/react'



const testimonials = [
  {
    name: "Michael Junior Junior",
    location: "Acari",
    role: "Professor",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the!",
    stars: 5,
    image: "/user-placeholder.png"
  },
  {
    name: "Mario rosé silva",
    location: "Acari",
    role: "Professor",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the!",
    stars: 5,
    image: "/user-placeholder.png"
  }
]

export function Testimonials() {
  return (
    <section className="bg-[#01165A] py-20 px-4 lg:px-6 relative overflow-hidden">
      {/* Linhas decorativas (LinePattern) simuladas no topo/fundo */}
      <div className="absolute top-0 left-0 w-full h-1 opacity-20 bg-[repeating-linear-gradient(90deg,#6A80B0,6A80B0_2px,transparent_2px,transparent_10px)]"></div>
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#A9B5CE] text-sm mb-2 uppercase tracking-widest">— Veja o que dizem sobre a gente</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Relatos e <span className="text-[#F97D0E]">Avaliações</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-[#0A1F66] p-8 rounded-xl border border-white/5 relative">
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <span key={i} className="text-[#F97D0E] text-xl">★</span>
                ))}
              </div>
              
              <p className="text-[#A9B5CE] text-lg leading-relaxed mb-8">
                {item.content}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.name} - {item.location}</h4>
                  <p className="text-[#6A80B0] text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Paginação dots */}
        <div className="flex justify-center gap-3">
          <span className="w-8 h-2 rounded-full bg-[#F97D0E]"></span>
          <span className="w-8 h-2 rounded-full bg-[#313164]"></span>
          <span className="w-8 h-2 rounded-full bg-[#313164]"></span>
          <span className="w-8 h-2 rounded-full bg-[#313164]"></span>
        </div>
      </div>
    </section>
  )
}