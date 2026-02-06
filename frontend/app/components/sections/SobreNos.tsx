'use client'

import Image from 'next/image';
import { Icon } from '@iconify/react';
import { SobreNosCard } from '../ui/SobreNosCard';
import { SectionTitle } from '../ui/SectionTitle';

export function SobreNos() {
  return (
    <section id="sobre-nos" className="py-8 md:py-16 bg-[#F2F4F5] relative">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-8 gap-8 lg:gap-0">
          <div className="lg:col-span-6">
            <SectionTitle subtitle='Sobre nós' title='Tradição, compromisso'>e excelência jurídica</SectionTitle>
            <p className="text-[#6A80B0] mt-4 text-justify leading-relaxed md:leading-loose text-base md:text-lg">Somos um escritório que pratica a advocacia com visão estratégica e inovação para que os nossos resultados apresentem sempre melhoria contínua em todos os âmbitos desde os processos operacionais aos gerenciais. Com foco em resultados, desenvolvemos soluções customizadas para os servidores públicos, com ênfase nos servidores da educação</p>
            <div className='mt-10'>
              <div className='text-[#6A80B0] flex items-center mt-4 md:mt-6 text-sm md:text-base'>
                <Icon icon="lets-icons:check-fill" className="inline-block text-secondary w-7 h-7 md:w-9 md:h-9 mr-2 shrink-0" />
                Professores Ativos e Aposentados
              </div>
              <div className='text-[#6A80B0] flex items-center mt-4 md:mt-6 text-sm md:text-base'>
                <Icon icon="lets-icons:check-fill" className="inline-block text-secondary w-7 h-7 md:w-9 md:h-9 mr-2 shrink-0" />
                Servidores públicos
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center items-center mt-8 lg:mt-0">
            <div className="h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80 lg:h-96 lg:w-96 rounded-full relative mt-20">
              <Image src="/fotoEscritorio.png" alt="escritorio" layout="fill" objectFit="cover" className="rounded-full" />
              <div className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 rounded-full relative -right-32 sm:-right-44 md:-right-52 lg:-right-64 bottom-4 sm:bottom-6 md:bottom-8">
                <Image src="/fotoAssinando.png" alt="assinando" layout="fill" objectFit="cover" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-14 md:mt-24 flex flex-wrap sm:gap-8 md:gap-12 lg:gap-40'>
          <SobreNosCard titulo='Transparencia' texto='Mais de 15 mil ações procedentes' icone="octicon:law-16" />
          <SobreNosCard titulo='Atuação' texto='Atuação em seis Estados brasileiros' icone="game-icons:brazil" />
          <SobreNosCard titulo='Atuação' texto='Quase 10 anos de atuação na área jurídica' icone="fa7-solid:hourglass-2" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <Image
          src="/lines.svg"
          alt=""
          width={1920}
          height={100}
          className="w-full h-auto [filter:brightness(0)_saturate(100%)_invert(91%)_sepia(8%)_saturate(1094%)_hue-rotate(196deg)_brightness(98%)_contrast(96%)]"
        />
      </div>
    </section>
  );
}
