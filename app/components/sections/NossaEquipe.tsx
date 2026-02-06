'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { SectionTitle } from '../ui/SectionTitle';
import { AdvCard } from '../ui/AdvCard';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { DURATIONS, EASINGS } from '../../lib/animations/constants';

gsap.registerPlugin(ScrollTrigger);

export function NossaEquipe() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."

  useEffect(() => {
    if (!titleRef.current) return;

    const ctx = gsap.context(() => {
      const shouldAnimate = !prefersReducedMotion;
      const animationDuration = prefersReducedMotion ? DURATIONS.instant : DURATIONS.slow;

      // Timeline para animar título, botão e cards em sequência
      const tl = gsap.timeline({
        defaults: { ease: EASINGS.easeOut },
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      // Animação do título "Advogados fundadores e Sócios"
      tl.fromTo(titleRef.current,
        { y: shouldAnimate ? 30 : 0, opacity: 0 },
        { y: 0, opacity: 1, duration: animationDuration }
      );

      // Animação do botão "Ver toda equipe"
      tl.fromTo(buttonRef.current,
        { y: shouldAnimate ? 20 : 0, opacity: 0 },
        { y: 0, opacity: 1, duration: animationDuration },
        shouldAnimate ? '-=0.3' : '-=0.05'
      );

      // Animação dos AdvCards com stagger
      tl.fromTo(cardsRef.current?.children || [],
        { y: shouldAnimate ? 25 : 0, opacity: 0 },
        { y: 0, opacity: 1, duration: animationDuration, stagger: 0.2 },
        shouldAnimate ? '-=0.2' : '-=0.05'
      );
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="equipe" className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        {/* título */}
        <div>
          <SectionTitle title="Nosso" subtitle="Nossa equipe">Time De Advogados</SectionTitle>
        </div>


        {/* Bloco 1: Imagem + Texto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-8 gap-6 lg:gap-0 mb-16 md:mb-24">
          <div className="lg:col-span-6">
            <div
              className="rounded-xl relative"
              style={{
                clipPath:
                  "polygon(40px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40px)",
              }}
            >
              <Image
                src="/equipe.svg"
                alt="Tablet com notificações para servidores públicos"
                width={1000}
                height={1000}
                className="rounded-xl w-full h-auto"
              />
              <div className="bg-secondary text-white text-sm md:text-xl font-bold px-4 md:px-6 py-2 absolute bottom-4 right-4 md:bottom-8 md:right-8 rounded-lg">
                Experiencia e Inovação <br /> em equipe
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 p-0 lg:p-10">
            <p className="text-[#6A80B0] text-justify leading-relaxed md:leading-loose text-base md:text-lg">Contamos com um corpo jurídico formado por advogados especializados e experientes, que atuam de maneira estratégica e coordenada na condução de demandas relacionadas aos direitos de Servidores Públicos. Nosso trabalho é pautado pelo rigor técnico, atualização constante e compromisso com resultados sólidos e eficazes</p>
          </div>
        </div>

        {/* Separador visual sutil */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-12 md:mb-20"></div>

        {/* Bloco 2: Título + Cards (agrupados) */}
        <div className="mt-12 md:mt-16">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12 gap-4">
            <h2 ref={titleRef} className="text-primary text-3xl md:text-5xl font-bold">
              Advogados fundadores <span className="text-secondary"><br /> e Sócios</span>
            </h2>
            <div ref={buttonRef} className="flex gap-3">
              <div className="rounded-full bg-secondary px-4 py-2 md:py-0 flex items-center justify-center font-bold text-sm md:text-base">Ver toda equipe</div>
              <div className="rounded-full bg-primary w-10 h-10 flex items-center justify-center"> {">"} </div>
            </div>
          </div>

          <div ref={cardsRef} className="space-y-6 md:space-y-0">
            <AdvCard imgSrc="clodonilBG.png" nome="Clodonil Monteiro" titulo="Fundador" texto={loremIpsum} />
            <AdvCard imgSrc="edjaneBG.png" nome="Edjane Lucena" titulo="Fundadora" texto={loremIpsum} />
            <AdvCard imgSrc="lauraBG.png" nome="Laura Maria" titulo="Sócia" texto={loremIpsum} />
            <AdvCard imgSrc="diegoBG.png" nome="Diego Medeiros" titulo="Sócio" texto={loremIpsum} />
          </div>
        </div>
      </div>
    </section>
  );
}
