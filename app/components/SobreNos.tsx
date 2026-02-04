import Image from 'next/image';
import { Icon } from '@iconify/react';
import { SobreNosCard } from './SobreNosCard';

export function SobreNos() {
  return (
    <section className="py-16 bg-[#F2F4F5]">
      <div className="container mx-auto">
      {/* título */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-text-darkgray">
          <span className="w-8 h-1 bg-secondary rounded-full"></span>
          <span className="text-xl font-bold text-primary">Sobre nós</span>
        </div>
        <div className="grid grid-cols-12 mt-8 px-4">
          <div className="col-span-6">
            <h2 className="text-primary text-5xl font-bold mb-8">Tradição, compromisso <br /> <span className="text-secondary">e excelência jurídica</span></h2>
            <p className="text-[#6A80B0] mt-4 text-justify leading-loose text-lg">Somos um escritório que pratica a advocacia com visão estratégica e inovação para que os nossos resultados apresentem sempre melhoria contínua em todos os âmbitos desde os processos operacionais aos gerenciais. Com foco em resultados, desenvolvemos soluções customizadas para os servidores públicos, com ênfase nos servidores da educação</p>
            <div className='text-[#6A80B0] flex items-center mt-6'>
              <Icon icon="lets-icons:check-fill" className="inline-block text-secondary w-9 h-9 mr-2" />
              Professores Ativos e Aposentados
            </div>
            <div className='text-[#6A80B0] flex items-center mt-6'>
              <Icon icon="lets-icons:check-fill" className="inline-block text-secondary w-9 h-9 mr-2" />
              Servidores públicos
            </div>
          </div>
          <div className="col-span-6 flex justify-center items-center">
            <div className="h-96 w-96 rounded-full relative">
              <Image src="/fotoEscritorio.png" alt="escritorio" layout="fill" objectFit="cover" className="rounded-full" />
              <div className="h-56 w-56 rounded-full relative -right-64 bottom-8">
                <Image src="/fotoAssinando.png" alt="assinando" layout="fill" objectFit="cover" className="rounded-full" />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-24 flex gap-40'>
          <SobreNosCard titulo='Transparencia' texto='Mais de 15 mil ações procedentes' icone="octicon:law-16" />

          <SobreNosCard titulo='Atuação' texto='Atuação em seis Estados brasileiros' icone="game-icons:brazil" />

          <SobreNosCard titulo='Atuação' texto='Quase 10 anos de atuação na área jurídica' icone="fa7-solid:hourglass-2" />
        </div>

      </div>
    </section>
  );
}
