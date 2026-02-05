import Image from "next/image";
import equipe from "../../equipe.png";
import { AdvCard } from "./AdvCard";

export function NossaEquipe() {

  const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-0">
        {/* título */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-text-darkgray">
          <span className="w-8 h-1 bg-secondary rounded-full"></span>
          <span className="text-xl font-bold text-primary">Nossa equipe</span>
        </div>
        <h2 className="text-primary text-3xl md:text-5xl font-bold">
          Nosso <span className="text-secondary">Time De Advogados</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-8 gap-6 lg:gap-0">
          <div className="lg:col-span-6">
            <div
              className="rounded-xl relative"
              style={{
                clipPath:
                  "polygon(40px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 40px)",
              }}
            >
              <Image
                src="/equipe.png"
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
            <p className="text-[#6A80B0] text-justify leading-relaxed md:leading-loose text-base md:text-lg">Nossa equipe é formada por profissionais experientes em diferentes áreas, os quais trabalham de forma integrada e usam habilidades técnicas e talentos coordenados ligados a casos rotineiros direcionados aos litígios de Servidores Públicos.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-10 mt-8 gap-4">
          <h2 className="text-primary text-3xl md:text-5xl font-bold">
            Advogados fundadores <span className="text-secondary"><br /> e Sócios</span>
          </h2>
          <div className="flex gap-3">
            <div className="rounded-full bg-secondary px-4 py-2 md:py-0 flex items-center justify-center font-bold text-sm md:text-base">Ver toda equipe</div>
            <div className="rounded-full bg-primary w-10 h-10 flex items-center justify-center"> {">"} </div>
          </div>
        </div>
        <div className="space-y-6 md:space-y-0">
          <AdvCard imgSrc="clodonilBG.png" nome="Clodonil Monteiro" titulo="Fundador" texto={loremIpsum} />
          <AdvCard imgSrc="edjaneBG.png" nome="Edjane Lucena" titulo="Fundadora" texto={loremIpsum} />
          <AdvCard imgSrc="lauraBG.png" nome="Laura Maria" titulo="Sócia" texto={loremIpsum} />
          <AdvCard imgSrc="diegoBG.png" nome="Diego Medeiros" titulo="Sócio" texto={loremIpsum} />
        </div>
      </div>
    </section>
  );
}
