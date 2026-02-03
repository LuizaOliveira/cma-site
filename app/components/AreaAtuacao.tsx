"use client"
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { SectionTitle } from './SectionTitle';
import { Icon } from "@iconify/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AreaAtuacao() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      // Fade in com movimento up ao entrar - conteúdo geral
      gsap.fromTo(contentRef.current,
        { 
          opacity: 0,
          y: 60
        },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          duration: 1.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animação individual do primeiro card
      gsap.fromTo(card1Ref.current,
        { 
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          duration: 1,
          scrollTrigger: {
            trigger: card1Ref.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animação individual do segundo card
      gsap.fromTo(card2Ref.current,
        { 
          opacity: 0,
          y: 40
        },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          duration: 1,
          scrollTrigger: {
            trigger: card2Ref.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Fade out ao sair
      gsap.to(contentRef.current, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom 70%',
          end: 'bottom 20%',
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 sm:py-16 lg:py-20 bg-primary border-0">
      <div ref={contentRef} className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Título da seção */}
        {/* <AnimatedSection animation="fadeUp"> */}
        <SectionTitle title='Nossa' subtitle='Aqui o servidor público tem voz'>Área De Atuação</SectionTitle>
        {/* </AnimatedSection> */}

        {/* Primeira linha - Principal público */}
        <div ref={card1Ref} className="bg-[#0f2a63] rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 lg:mb-12 px-3 sm:px-6 lg:px-8 py-6 lg:py-8 clip-path-corner-left">
          <div className="order-2 md:order-1">
            {/* Imagem do escritório */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/office-meeting.svg"
                  alt="Escritório de advocacia - sala de reuniões"
                  width={600}
                  height={450}
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-lg clip-path-corner-left"
                />
              </div>
            </div>
          </div>

          {/* Conteúdo Principal público */}
          <div className="space-y-4 sm:space-y-6 text-white order-1 md:order-2 text-center md:text-left">
            {/* <AnimatedSection animation="fadeUp" delay={0.2}> */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Principal público</h3>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-ligth-gray">
              Com ampla experiência no Direito do Direito Administrativo, nossa
              equipe assessora os servidores públicos da forma que você
              precisa, fazendo a melhor avaliação das relações existentes entre
              servidor e a competente administração pública interna.
            </p>
            {/* </AnimatedSection> */}

            {/* Lista de serviços */}
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-5 h-5 bg-secondary rounded-full justify-center flex items-center shrink-0"><Icon icon="ic:round-check" className='h-4' /></div>
                <span className="text-ligth-gray text-sm sm:text-base">Professores ativos e aposentados</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-5 h-5 bg-secondary rounded-full justify-center flex items-center shrink-0"><Icon icon="ic:round-check" className='h-4' /></div>
                <span className="text-ligth-gray text-sm sm:text-base">Servidores públicos</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-5 h-5 bg-secondary rounded-full justify-center flex items-center shrink-0"><Icon icon="ic:round-check" className='h-4' /></div>
                <span className="text-ligth-gray text-sm sm:text-base">Lorem ipsum is am</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Segunda linha - Advocacia para servidores públicos */}
        <div ref={card2Ref} className="bg-[#0f2a63] rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 lg:mb-12 px-3 sm:px-6 lg:px-8 py-6 lg:py-8 clip-path-corner-right">
          <div className="space-y-4 sm:space-y-6 text-white order-1 md:order-1 px-2 sm:px-6 lg:px-10 my-2 sm:my-4 text-center md:text-left">
            <div className='flex gap-3 justify-center md:justify-start'>
              <div className='h-6 sm:h-8 w-1 bg-secondary'></div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Advocacia para servidores públicos
              </h3>
            </div>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-ligth-gray text-justify">
              O núcleo do Direito Administrativo direciona sua atuação e sua atenção nos direitos dos Servidores Públicos 
              através de assessoria e consultoria jurídica com o escopo de esclarecer direitos, analisar documentos e processos 
              de forma a estabelecer a melhor solução para cada pleito, uma vez que é necessário a discussão da legalidade e/ou 
              constitucionalidade do direito e obrigações por meio da interpretação de novas normas e jurisprudência, sejam elas 
              decorrentes da falta de cumprimento dos direitos da Administração Pública, sejam em razão de erros materiais ou de 
              interpretação pacificadas pelos tribunais.
            </p>
          </div>

          {/* Imagem do escritório 2 */}
          <div className="relative order-2 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/office-team.svg"
                alt="Equipe de advocacia trabalhando"
                width={500}
                height={400}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-lg clip-path-corner-right"
              />
            </div>
          </div>

        </div>

        {/* CTA de Contato - Dúvidas */}
        <div className="text-center mt-12 lg:mt-16">
          <div className="text-white mb-4">
            <span className="text-lg sm:text-xl lg:text-2xl font-semibold">Dúvidas? </span>
            <span className="text-lg sm:text-xl lg:text-2xl text-secondary">Entre em contato conosco</span>
          </div>
          <a 
            href="https://wa.me/558433342179" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Icon icon="ic:baseline-whatsapp" className="w-6 h-6" />
            <span>(84) 3334-2179</span>
          </a>
        </div>

      </div>
    </section>
  );
}