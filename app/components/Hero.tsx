"use client"
import { useEffect, useRef } from 'react';
import { Button, Icons } from './Button';
import { AnimatedTablet } from './AnimatedTablet';
import { Icon } from '@iconify/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const tabletRef = useRef<HTMLDivElement>(null);
    const socialRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current || !contentRef.current) return;

        const ctx = gsap.context(() => {
            // Função que executa a animação de entrada
            const playEnterAnimation = () => {
                const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

                // Badge aparece deslizando da esquerda
                tl.fromTo(badgeRef.current,
                    { x: -50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.8 }
                );

                // Título aparece com fade in e slide up
                tl.fromTo(titleRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    '-=0.5'
                );

                // Tablet aparece com scale e fade
                tl.fromTo(tabletRef.current,
                    { scale: 0.9, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 1 },
                    '-=0.6'
                );

                // Redes sociais aparecem da direita
                tl.fromTo(socialRef.current,
                    { x: 50, opacity: 0 },
                    { x: 0, opacity: 1, duration: 0.8 },
                    '-=0.7'
                );

                // Texto descritivo fade in
                tl.fromTo(textRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    '-=0.6'
                );

                // Botões aparecem com fade in simples
                tl.fromTo(buttonsRef.current,
                    { opacity: 0 },
                    { opacity: 1, duration: 0.8 },
                    '-=0.5'
                );
            };

            // Executa a animação inicial
            playEnterAnimation();

            // ScrollTrigger que detecta quando volta para a seção
            ScrollTrigger.create({
                trigger: heroRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                onEnter: () => playEnterAnimation(),
                onEnterBack: () => playEnterAnimation(), // Quando volta rolando para cima
            });

            // Fade out suave apenas no conteúdo quando está saindo da tela
            gsap.to(contentRef.current, {
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'bottom 40%',
                    end: 'bottom top',
                    scrub: 1,
                }
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-orange-50 pt-16">
            {/* Conteúdo principal */}
            <div ref={contentRef} className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[60vh] py-4 lg:py-0">
                    {/* Área da imagem do tablet - À ESQUERDA */}
                    <div className="relative lg:pr-8 order-2 lg:order-1 px-4 lg:px-0">
                        <div className='mt-12 mb-5'>
                            <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-text-darkgray">
                                <span className="w-4 h-1 bg-secondary rounded-full"></span>
                                Aqui o servidor público tem voz
                            </div>
                            <h1 ref={titleRef} className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                <span className="text-primary font-red-hat-text">Advocacia para</span>
                                <br />
                                <span className="text-secondary">servidores Públicos</span>
                            </h1>

                        </div>
                        {/* Container do tablet */}
                        <div className="relative mx-auto lg:mx-0 w-[min(85vw,20rem)] sm:w-[min(70vw,25rem)] lg:w-[min(90vw,35rem)] lg:max-w-125">
                            {/* Tablet Animado */}
                            <div ref={tabletRef} className="relative">
                                <AnimatedTablet />
                            </div>

                            {/* Elementos decorativos */}
                            <div
                                className="absolute -bottom-4 lg:-bottom-8 -left-4 lg:-left-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-32 lg:h-32 opacity-40 rounded-full"
                                style={{ backgroundColor: '#01165A20' }}
                            ></div>
                            

                        </div>

                    </div>

                    {/* Conteúdo à direita */}
                    <div className="space-y-6 lg:space-y-8 lg:pl-8 order-1 lg:order-2 flex flex-col justify-center px-4 lg:px-0">

                        {/* Redes Sociais no topo */}
                        <div ref={socialRef} className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 lg:gap-6 relative sm:-translate-y-4 lg:-translate-y-8">
                            <div className='border border-secondary p-2 sm:p-3 rounded-full'>
                                <span className="text-xs sm:text-sm font-medium text-secondary">Nossas Redes Sociais</span>
                            </div>
                            <div className="flex items-center">
                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/clodonilmonteiro/"
                                    aria-label="Instagram"
                                    className="w-5 h-5 sm:w-16 sm:h-16 bg-secondary rounded-full flex items-center justify-center text-white z-10"
                                >
                                    <Icon icon="mdi:instagram" className="w-5 h-5 sm:w-8 sm:h-8" />
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://www.facebook.com/clodonilmonteiroadvocacia/"
                                    aria-label="WhatsApp"
                                    className="-ml-3 w-5 h-5 sm:w-16 sm:h-16 bg-primary rounded-full flex items-center justify-center text-white"
                                >
                                    <Icon icon="ic:baseline-whatsapp" className="w-5 h-5 sm:w-8 sm:h-8" />
                                </a>
                            </div>

                        </div>

                        <div className='bottom-0 gap-8'>
                            <div ref={textRef} className="space-y-4 lg:space-y-6 sm:text-justify mb-10">
                                <p className="text-base sm:text-lg lg:text-2xl text-custom leading-relaxed max-w-sm lg:max-w-lg sm:ml-auto">
                                    Fique por dentro das principais notícias, atualizações e conteúdos
                                    relevantes para servidores públicos
                                </p>
                            </div>

                            {/* Botões */}
                            <div ref={buttonsRef} className="flex flex-col gap-3 sm:gap-4 items-end sm:ml-auto sm:max-w-sm lg:max-w-lg">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                                >
                                    Ver Últimas Notícias
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    icon={<Icons.Mail />}
                                    className="text-sm sm:text-base px-6 sm:px-10 py-3 sm:py-4"
                                >
                                    Receber PDF
                                </Button>
                            </div>

                        </div>
                        {/* Texto descritivo */}

                    </div>
                </div>
            </div>

            {/* Faixa azul inferior que ocupa metade da tela */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-primary overflow-hidden">
                {/* Container com padrão CSS responsivo posicionado no final */}
                <div className="w-full h-full flex items-end justify-center px-2 pb-4">
                    <div
                        className="w-full h-6"
                        style={{
                            backgroundImage: `
                            repeating-linear-gradient(
                                75deg,
                                transparent 0px,
                                transparent 8px,
                                rgba(39, 52, 89, 0.5) 8px,
                                rgba(59, 52, 89, 0.5) 10px,
                                transparent 8px,
                                transparent 6px
                            )
                            `,
                            filter: "blur(0.5px)",
                            willChange: "transform"
                        }}
                    />

                </div>
            </div>
        </section>
    );
}