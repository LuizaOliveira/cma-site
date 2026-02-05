'use client'

import { Icon } from '@iconify/react'
import { Button } from './Button'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const locations = [
  { state: "Rio grande do norte", phone: "(84) 3334-2179" },
  { state: "São Paulo", phone: "(11) 3334-2179" },
  { state: "Rio de Janeiro", phone: "(84) 3334-2179" },
  { state: "Maranhão", phone: "(84) 3334-2179" },
]

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const locationsRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animação do header
      gsap.fromTo(headerRef.current,
        { 
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          duration: 1,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animação dos cards de localização
      if (locationsRef.current?.children) {
        gsap.fromTo([...locationsRef.current.children],
          { 
            opacity: 0,
            y: 40,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'power2.out',
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
              trigger: locationsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Animação do lado esquerdo (texto e imagem)
      gsap.fromTo(leftSideRef.current,
        { 
          opacity: 0,
          x: -60
        },
        {
          opacity: 1,
          x: 0,
          ease: 'power2.out',
          duration: 1.2,
          scrollTrigger: {
            trigger: leftSideRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animação do formulário
      gsap.fromTo(formRef.current,
        { 
          opacity: 0,
          x: 60
        },
        {
          opacity: 1,
          x: 0,
          ease: 'power2.out',
          duration: 1.2,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F8F9FC] py-20 px-4 lg:px-6">
      <div className="container mx-auto">
        {/* Header Contato */}
        <div ref={headerRef} className="text-center mb-16">
          <p className="text-[#313164] font-medium mb-2">Precisa de ajuda?</p>
          <h2 className="text-4xl font-bold text-[#01165A]">
            Entre em <span className="text-[#F97D0E]">contato conosco</span>
          </h2>
        </div>

        {/* Cards de Localização */}
        <div ref={locationsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
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
          <div ref={leftSideRef}>
            <h3 className="text-3xl font-bold text-[#01165A] leading-tight mb-8">
              Marque o que precisa e receba uma <span className="text-[#F97D0E]">análise gratuita do seu caso.</span>
            </h3>
            <div className="relative w-full max-w-md aspect-square">
              <Image src="/contact_image.svg" alt="Análise de caso" fill className="object-contain drop-shadow" />
            </div>
          </div>

          {/* Lado Direito: Formulário Checklist */}
          <div ref={formRef} className="space-y-8">
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