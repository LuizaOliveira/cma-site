'use client'

import { Icon } from '@iconify/react'
import { Button } from '../ui/Button'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { DURATIONS, EASINGS, STAGGER } from '../../lib/animations/constants'

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
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const animDuration = prefersReducedMotion ? DURATIONS.instant : DURATIONS.slowest;
      const shouldAnimate = !prefersReducedMotion;

      const animateHeaderIn = () => {
        gsap.fromTo(headerRef.current,
          { opacity: 0, y: shouldAnimate ? 50 : 0 },
          { opacity: 1, y: 0, ease: EASINGS.easeOut, duration: animDuration }
        );
      };

      const animateLocationsIn = () => {
        if (locationsRef.current?.children) {
          gsap.fromTo([...locationsRef.current.children],
            { opacity: 0, y: shouldAnimate ? 40 : 0, scale: shouldAnimate ? 0.95 : 1 },
            { opacity: 1, y: 0, scale: 1, ease: EASINGS.easeOut, duration: prefersReducedMotion ? DURATIONS.instant : DURATIONS.slower, stagger: prefersReducedMotion ? 0 : STAGGER.normal }
          );
        }
      };

      const animateLeftSideIn = () => {
        gsap.fromTo(leftSideRef.current,
          { opacity: 0, x: shouldAnimate ? -60 : 0 },
          { opacity: 1, x: 0, ease: EASINGS.easeOut, duration: animDuration }
        );
      };

      const animateFormIn = () => {
        gsap.fromTo(formRef.current,
          { opacity: 0, x: shouldAnimate ? 60 : 0 },
          { opacity: 1, x: 0, ease: EASINGS.easeOut, duration: animDuration }
        );
      };

      ScrollTrigger.create({ trigger: headerRef.current, start: 'top 80%', onEnter: animateHeaderIn });
      ScrollTrigger.create({ trigger: locationsRef.current, start: 'top 85%', onEnter: animateLocationsIn });
      ScrollTrigger.create({ trigger: leftSideRef.current, start: 'top 80%', onEnter: animateLeftSideIn });
      ScrollTrigger.create({ trigger: formRef.current, start: 'top 80%', onEnter: animateFormIn });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="contato" className="bg-[#F8F9FC] py-12 lg:py-20 px-4 lg:px-6 relative overflow-hidden">
      
      
      <div className="hidden lg:block absolute lg:bottom-7 lg:right-4 z-0 pointer-events-none">
        <Image
          src="/logo_caixa.svg"
          alt="Logo"
          width={300}
          height={300}
          className="w-auto h-auto opacity-100"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div ref={headerRef} className="text-center mb-10 lg:mb-16">
          <p className="text-[#313164] font-medium mb-2">Precisa de ajuda?</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#01165A]">
            Entre em <span className="text-[#F97D0E]">contato conosco</span>
          </h2>
        </div>

        <div ref={locationsRef} className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12 lg:mb-20">
          {locations.map((loc, i) => (
            <div
              key={i}
              className="p-6 rounded-lg flex justify-between items-center bg-[#E9EEF7] text-[#313164] transition-all duration-300 lg:hover:bg-[#01165A] lg:hover:text-white group"
            >
              <div>
                <p className="text-[10px] lg:text-xs uppercase mb-1 text-[#6A80B0] lg:group-hover:text-white/70">{loc.state}</p>
                <p className="text-base lg:text-lg font-bold text-[#F97D0E]">{loc.phone}</p>
              </div>
              <Icon icon="mdi:phone-in-talk" className="text-2xl" color="#F97D0E" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div ref={leftSideRef} className="text-center lg:text-left">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#01165A] leading-tight mb-8">
              Marque o que precisa e receba uma <span className="text-[#F97D0E]">análise gratuita do seu caso.</span>
            </h3>
            <div className="relative w-full max-w-[280px] lg:max-w-md aspect-square mx-auto lg:mx-0">
              <Image src="/contact_image.svg" alt="Análise" fill className="object-contain" />
            </div>
          </div>

          <div ref={formRef} className="space-y-8">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center justify-center lg:justify-start">
              <span className="text-[#6A80B0] font-semibold">Tipo de profissional</span>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="tipo" className="accent-[#01165A]" defaultChecked />
                  <span className="text-[#6A80B0]">Professor</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="tipo" className="accent-[#01165A]" />
                  <span className="text-[#6A80B0]">Servidor</span>
                </label>
              </div>
            </div>

            <div className="bg-linear-to-b from-[#0F2464] to-[#273C7D] rounded-2xl p-6 lg:p-8 text-white grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10 shadow-xl">
              <div className="space-y-4">
                <h4 className="font-bold border-b border-white/10 pb-2">Ativos</h4>
                <div className="space-y-3">
                  {['Progressão de Letras', 'Progressão de nível', 'Retificação de Titulação', 'Terço de férias', 'Gratificação natalina 2018'].map((item) => (
                    <label key={item} className="flex items-start gap-3 text-sm text-[#A9B5CE]">
                      <input type="checkbox" className="w-4 h-4 mt-0.5 rounded accent-[#F97D0E] shrink-0" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold border-b border-white/10 pb-2">Aposentados</h4>
                <div className="space-y-3">
                  {['Licença Prêmio', 'Demora para aposentadoria', 'Retificação de Letra', 'Entrega de documentação'].map((item) => (
                    <label key={item} className="flex items-start gap-3 text-sm text-[#A9B5CE]">
                      <input type="checkbox" className="w-4 h-4 mt-0.5 rounded accent-[#F97D0E] shrink-0" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-2 flex justify-center lg:justify-end mt-4">
                <Button variant="secondary" className="w-full lg:w-auto px-10 py-3 font-bold">
                  <span>Enviar Agora</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}