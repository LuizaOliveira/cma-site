import Image from "next/image";
import equipe from "../../equipe.png";
import { AdvCard } from "./AdvCard";

export function NossaEquipe() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        {/* título */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-text-darkgray">
          <span className="w-8 h-1 bg-secondary rounded-full"></span>
          <span className="text-xl font-bold text-primary">Nossa equipe</span>
        </div>
        <h2 className="text-primary text-5xl font-bold">
          Nosso <span className="text-secondary">Time De Advogados</span>
        </h2>
        <div className="grid grid-cols-12 mt-8 px-4">
          <div className="col-span-6">
            <div
              className="rounded-xl"
              style={{
                clipPath:
                  "polygon(80px 0%, 100% 0%, 100% 100%, 0% 100%, 0% 80px)",
              }}
            >
              <Image
                src="/equipe.png"
                alt="Tablet com notificações para servidores públicos"
                width={1000}
                height={1000}
                className="rounded-xl"
              />
              <div className="bg-secondary text-white text-xl font-bold px-6 py-2 relative bottom-25 -right-112 w-fit rounded-lg">
                Experiencia e Inovação <br /> em equipe
              </div>
            </div>
          </div>
          <div className="col-span-6 p-10">
            <p className="text-[#6A80B0] text-justify leading-loose text-lg">Nossa equipe é formada por profissionais experientes em diferentes áreas, os quais trabalham de forma integrada e usam habilidades técnicas e talentos coordenados ligados a casos rotineiros direcionados aos litígios de Servidores Públicos.</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-primary text-5xl font-bold mb-10">
            Advogados fundadores <span className="text-secondary"><br /> e Sócios</span>
          </h2>
          <div className="flex gap-3">
            <div className="rounded-full bg-secondary px-4">Ver toda equipe</div>
            <div className="rounded-full bg-primary w-10 h-10"> {">"} </div>
          </div>
        </div>
        <AdvCard />
        <AdvCard />
        <AdvCard />
        <AdvCard />
      </div>
    </section>
  );
}
