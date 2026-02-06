"use client"
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { SectionTitle } from '../ui/SectionTitle';
import { Icon } from "@iconify/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { DURATIONS, EASINGS } from '../../lib/animations/constants';
import { CheckItem } from '../ui/CheckItem';

gsap.registerPlugin(ScrollTrigger);

export function AreaAtuacao() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      const animDuration = prefersReducedMotion ? DURATIONS.instant : DURATIONS.slowest;
      const shouldAnimate = !prefersReducedMotion;

      // Animações do conteúdo geral
      const animateContentIn = () => {
        gsap.fromTo(contentRef.current,
          { opacity: 0, y: shouldAnimate ? 60 : 0 },
          { opacity: 1, y: 0, ease: EASINGS.easeOut, duration: animDuration }
        );
      };

      const animateContentOut = () => {
        if (prefersReducedMotion) {
          gsap.to(contentRef.current, { opacity: 0, duration: DURATIONS.instant });
          return;
        }
        gsap.to(contentRef.current, { opacity: 0, y: -60, ease: EASINGS.easeIn, duration: DURATIONS.slow });
      };

      // Animações do card 1
      const animateCard1In = () => {
        gsap.fromTo(card1Ref.current,
          { opacity: 0, y: shouldAnimate ? 40 : 0 },
          { opacity: 1, y: 0, ease: EASINGS.easeOut, duration: animDuration }
        );
      };

      const animateCard1Out = () => {
        if (prefersReducedMotion) {
          gsap.to(card1Ref.current, { opacity: 0, duration: DURATIONS.instant });
          return;
        }
        gsap.to(card1Ref.current, { opacity: 0, y: -40, ease: EASINGS.easeIn, duration: DURATIONS.slow });
      };

      // Animações do card 2
      const animateCard2In = () => {
        gsap.fromTo(card2Ref.current,
          { opacity: 0, y: shouldAnimate ? 40 : 0 },
          { opacity: 1, y: 0, ease: EASINGS.easeOut, duration: animDuration }
        );
      };

      const animateCard2Out = () => {
        if (prefersReducedMotion) {
          gsap.to(card2Ref.current, { opacity: 0, duration: DURATIONS.instant });
          return;
        }
        gsap.to(card2Ref.current, { opacity: 0, y: -40, ease: EASINGS.easeIn, duration: DURATIONS.slow });
      };

      // ScrollTriggers
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: animateContentIn,
        onLeave: animateContentOut,
        onEnterBack: animateContentIn,
        onLeaveBack: animateContentOut,
      });

      ScrollTrigger.create({
        trigger: card1Ref.current,
        start: 'top 85%',
        onEnter: animateCard1In,
        onLeave: animateCard1Out,
        onEnterBack: animateCard1In,
        onLeaveBack: animateCard1Out,
      });

      ScrollTrigger.create({
        trigger: card2Ref.current,
        start: 'top 85%',
        onEnter: animateCard2In,
        onLeave: animateCard2Out,
        onEnterBack: animateCard2In,
        onLeaveBack: animateCard2Out,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="area-atuacao" ref={sectionRef} className="py-10 sm:py-16 lg:py-20 bg-primary border-0">
      <div ref={contentRef} className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 ">
        {/* Título da seção */}
        {/* <AnimatedSection animation="fadeUp"> */}
        <SectionTitle title='Nossa' subtitle='Aqui o servidor público tem voz' center dark>Área De Atuação</SectionTitle>
        {/* </AnimatedSection> */}

        {/* Primeira linha - Principal público */}
        <div
          ref={card1Ref}
          className="bg-secondary-blue grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 lg:mb-12 px-3 sm:px-6 lg:px-5 py-4 lg:py-5 rounded-lg "
          style={{ clipPath: "polygon(40px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40px)" }}
        >
          {/* <div className="order-2 md:order-1"> */}
          {/* Imagem do escritório */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/office-meeting.svg"
                alt="Escritório de advocacia - sala de reuniões"
                width={600}
                height={450}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-112 object-cover rounded-lg"
                style={{ clipPath: "polygon(40px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40px)" }}
              />
              {/* </div> */}
            </div>
          </div>



          {/* Conteúdo Principal público */}
          <div className="space-y-4 sm:space-y-6 text-ligth-gray order-1 md:order-2  md:text-left ">
            {/* <AnimatedSection animation="fadeUp" delay={0.2}> */}
            <div className='itens-center justify-center'>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium">Principal público</h3>
              <p className="text-sm sm:text-base lg:text-md  md:text-sm leading-relaxed pr-5 text-justify font-normal">
                Com ampla experiência no Direito do Direito Administrativo, nossa
                equipe assessora os servidores públicos da forma que você
                precisa, fazendo a melhor avaliação das relações existentes entre
                servidor e a competente administração pública interna.
              </p>

            </div>
            {/* </AnimatedSection> */}

            {/* Lista de serviços */}
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex md:justify-start">
                <CheckItem title='Professores ativos e aposentados' />

              </li>
              <li className="flex md:justify-start">
                <CheckItem title='Servidores públicos' />
                <span className="text-ligth-gray text-sm sm:text-base">Servidores públicos</span>
              </li>
              <li className="flex md:justify-start">
                <CheckItem title='Servidores públicos' />
              </li>
            </ul>
          </div>
        </div>

        <div
          ref={card1Ref}
          className="bg-secondary-blue grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 lg:mb-12 px-3 sm:px-6 lg:px-5 py-4 lg:py-5 rounded-lg lg:hidden xl:hidden"
          style={{ clipPath: "polygon(0% 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, 0% 100%)" }}
        >
          {/* <div className="order-2 md:order-1"> */}
          {/* Imagem do escritório */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/office-team.svg"
                alt="Equipe de advocacia trabalhando"
                width={500}
                height={400}
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-112 object-cover rounded-lg clip-path-corner-right"
                style={{ clipPath: "polygon(0% 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, 0% 100%)" }}
              />
              {/* </div> */}
            </div>
          </div>



          {/* Conteúdo Principal público */}
          <div className="space-y-4 sm:space-y-6 text-ligth-gray order-1 md:order-2 text-center md:text-left  ">
            {/* <AnimatedSection animation="fadeUp" delay={0.2}> */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium">Advocacia para <br/>servidores públicos</h3>
            <p className="text-sm sm:text-base lg:text-md  md:text-sm leading-relaxed pr-5 text-justify font-normal">
              O núcleo do Direito Administrativo direciona sua atuação e sua atenção nos direitos dos Servidores Públicos
              através de assessoria e consultoria jurídica com o escopo de esclarecer direitos, analisar documentos e processos
              de forma a estabelecer a melhor solução para cada pleito, uma vez que é necessário a discussão da legalidade e/ou
              constitucionalidade do direito e obrigações por meio da interpretação de novas normas e jurisprudência, sejam elas
              decorrentes da falta de cumprimento dos direitos da Administração Pública, sejam em razão de erros materiais ou de
              interpretação pacificadas pelos tribunais.
            </p>
            {/* </AnimatedSection> */}
          </div>
        </div>

        {/* Segunda linha - Advocacia para servidores públicos */}
        <div
          ref={card1Ref}
          className="bg-secondary-blue hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-8 lg:mb-12 px-3 sm:px-6 lg:px-5 py-4 lg:py-5 rounded-lg"
          style={{ clipPath: "polygon(0% 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, 0% 100%)" }}
        >
          <div className="space-y-4 sm:space-y-6 text-white order-1 md:order-1 px-2 sm:px-6 lg:px-10 my-2 sm:my-4 text-center md:text-left">
            <div className='flex gap-3 justify-center md:justify-start text-ligth-gray'>
              <div className='h-6 sm:h-16 w-1 bg-secondary '></div>
              <h3 className="w-80  text-xl sm:text-2xl lg:text-3xl font-medium">
                Advocacia para servidores públicos
              </h3>
            </div>
            <p className="text-sm sm:text-base lg:text-md leading-relaxed text-ligth-gray text-justify font-normal">
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
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-112 object-cover rounded-lg clip-path-corner-right"
                style={{ clipPath: "polygon(0% 0%, calc(100% - 40px) 0%, 100% 40px, 100% 100%, 0% 100%)" }}
              />
            </div>
          </div>

        </div>

        {/* CTA de Contato - Dúvidas */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="text-white mb-4">
            <span className="text-lg sm:text-xl lg:text-xl">Dúvidas? </span>
            <span className="text-lg sm:text-xl lg:text-xl text-secondary">Entre em contato conosco</span>
          </div>
          <a
            href="https://wa.me/558433342179"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-secondary hover:bg-orange-600 text-white font-semibold my-10 px-6 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <Icon icon="ic:baseline-whatsapp" className="w-6 h-6" />
            <span >(84) 3334-2179</span>
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/lines.svg"
          alt=""
          width={1920}
          height={100}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}