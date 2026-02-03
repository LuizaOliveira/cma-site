import Image from 'next/image';
import { SectionTitle } from './SectionTitle';

export function AreaAtuacao() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Título da seção */}
        <SectionTitle>Área De Atuação</SectionTitle>

        {/* Primeira linha - Principal público */}
        <div
          className=" bg-[#0f2a63] rounded-xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20"
          style={{
            clipPath: "polygon(40px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40px)"
          }}
        >
          <div className="p-6 lg:p-12">
            {/* Imagem do escritório */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/office-meeting.jpg"
                  alt="Escritório de advocacia - sala de reuniões"
                  width={500}
                  height={300}
                  className="w-full h-64 lg:h-80 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Conteúdo Principal público */}
          <div className="space-y-6 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold">Principal público</h3>
            <p className="text-base lg:text-lg leading-relaxed text-ligth-gray">
              Com ampla experiência no Direito do Direito Administrativo, nossa
              equipe assessora os servidores públicos da forma que você
              precisa, fazendo a melhor avaliação das relações existentes entre
              servidor e a competente administração pública interna.
            </p>

            {/* Lista de serviços */}
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full shrink-0"></div>
                <span className="text-ligth-gray">Professores ativos e aposentados</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full shrink-0"></div>
                <span className="text-ligth-gray">Servidores públicos</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full shrink-0"></div>
                <span className="text-ligth-gray">Lorem ipsum is am</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Segunda linha - Advocacia para servidores públicos */}
        <div
          className=" bg-[#0f2a63] rounded-xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20"
          style={{
            clipPath: "polygon(40px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40px)"
          }}
        >
          <div className="space-y-6 text-white lg:order-1">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Advocacia para servidores públicos
            </h3>
            <p className="text-base lg:text-lg leading-relaxed text-ligth-gray">
              O mundo do Direito Administrativo desperta sua atenção a sua dinâmica
              nos direitos dos Servidores Públicos através da defensoria e consultoria
              Jurídica com as bases de advocacia crítica, política, educativa e
              processual, de forma a possibilitar que cidadão publico tenha pleno
              direito de proteção patrimonial e situacional através das melhores
              interpretações existentes no meio educacional brasileiro. Garantindo
              assim que sempre estejam informados sobre direitos trabalhistas e que
              de forma nenhuma a jurisprudência sejam não documentos ou falha de
              compromissos dos direitos de advocacia através de diretrizes que nos
              encontramos aqui direcionando novas políticas dos direitos e
              anos motivados ou de interpretações juridicas pelos tribunais.
            </p>
          </div>

          {/* Imagem do escritório 2 */}
          <div className="relative lg:order-2">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/office-team.jpg"
                alt="Equipe de advocacia trabalhando"
                width={500}
                height={400}
                className="w-full h-64 lg:h-96 object-cover"
              />
            </div>
            {/* </div> */}
          </div>

        </div>
        {/* <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"> */}
        {/* Conteúdo Advocacia (ordem invertida no desktop) */}
      </div>
    </section>
  );
}