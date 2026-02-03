"use client"
import { Button, Icons } from './Button';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-orange-50 pt-16">
            {/* Conteúdo principal */}
            <div className="container mx-auto px-4 lg:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[60vh] py-4 lg:py-0">
                    {/* Área da imagem do tablet - À ESQUERDA */}
                    <div className="relative lg:pr-8 order-2 lg:order-1 px-4 lg:px-0">
                        <div className='mt-12 mb-5'>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-text-darkgray">
                                <span className="w-4 h-1 bg-secondary rounded-full"></span>
                                Aqui o servidor público tem voz
                            </div>
                            <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                <span className="text-primary">Advocacia para</span>
                                <br />
                                <span className="text-secondary">servidores Públicos</span>
                            </h1>

                        </div>
                        {/* Container do tablet */}
                        <div className="relative mx-auto lg:mx-0 w-[min(85vw,20rem)] sm:w-[min(70vw,25rem)] lg:w-[min(90vw,35rem)] lg:max-w-[500px]">
                            {/* Tablet Real */}
                            <div className="relative">
                                <Image
                                    src="/Tablet.svg"
                                    alt="Tablet com notificações para servidores públicos"
                                    width={800}
                                    height={1000}
                                    priority
                                    className="w-full h-auto drop-shadow-2xl"
                                />

                                {/* Ícone de like flutuante */}
                                <div className="absolute bottom-[15%] right-[8%] bg-white rounded-full p-2 shadow-lg">
                                    <span className="text-lg">👍</span>
                                </div>
                            </div>

                            {/* Elementos decorativos */}
                            <div className="absolute -bottom-4 lg:-bottom-8 -left-4 lg:-left-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-32 lg:h-32 opacity-40 rounded-full" style={{ backgroundColor: '#01165A20' }}></div>
                        </div>

                    </div>

                    {/* Conteúdo à direita */}
                    <div className="space-y-6 lg:space-y-8 lg:pl-8 order-1 lg:order-2 flex flex-col justify-center px-4 lg:px-0">

                        {/* Redes Sociais no topo */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
                            <div className='border border-secondary p-2 sm:p-3 rounded-full'>
                                <span className="text-xs sm:text-sm font-medium text-secondary">Nossas Redes Sociais</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <a
                                    href="#"
                                    className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary rounded-full flex items-center justify-center text-white hover:opacity-90 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Icons.Instagram />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-white hover:opacity-90 transition-colors"
                                    aria-label="WhatsApp"
                                >
                                    <Icons.WhatsApp />
                                </a>
                            </div>
                        </div>

                        {/* Texto descritivo */}
                        <div className="space-y-4 lg:space-y-6">
                            <p className="text-base sm:text-lg lg:text-2xl text-custom leading-relaxed max-w-sm lg:max-w-lg">
                                Fique por dentro das principais notícias, atualizações e conteúdos
                                relevantes para servidores públicos
                            </p>
                        </div>

                        {/* Botões */}
                        <div className="flex flex-col gap-3 sm:gap-4 items-start">
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
                                className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                            >
                                Receber PDF
                            </Button>
                        </div>



                    </div>
                </div>
            </div>

            {/* Faixa azul inferior que ocupa metade da tela */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-primary">
                <div className="container mx-auto px-4 lg:px-6 h-full flex items-center">
                   <Image
                        src="/lines.svg"
                        alt="Tablet com notificações para servidores públicos"
                        width={800}
                        height={100}
                        priority
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}