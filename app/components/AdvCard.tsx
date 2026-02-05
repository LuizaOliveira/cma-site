import Image from "next/image";

interface AdvCardProps {
  imgSrc: string;
  nome: string;
  titulo: string;
  texto: string;
}

export function AdvCard({ imgSrc, nome, titulo, texto }: AdvCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 mb-6 md:mb-10">
      <div className="w-full md:w-50 bg-[#F5F8FF] md:col-span-2">
        <div>
          <Image
            src={`/${imgSrc}`}
            alt="Tablet com notificações para servidores públicos"
            width={200}
            height={200}
            className="w-full md:w-auto h-auto object-cover"
          />
          <div className="flex">
            <div className="text-white bg-primary p-2 w-full text-sm md:text-base">
              {<span className="underline underline-offset-4 decoration-2 decoration-secondary md:text-base sm:text-2xl">{nome.split(' ')[0]}</span>}
              {<span className="md:text-base sm:text-2xl"> {nome.split(' ')[1]}</span>}
              {/* <div className="bg-secondary py-[1px] w-12 -mt-1" /> */}
            </div>
            <span className="bg-[#001F7B] w-4" />
            <span className="bg-[#1C3174] w-6" />
          </div>
        </div>
      </div>
      <div className="md:col-span-10 px-2 md:px-0">
        <div className="text-white bg-secondary w-fit px-4 py-1 rounded-2xl my-3 md:my-6 text-sm md:text-base">
          {titulo}
        </div>
        <p className="text-[#6A80B0] max-w-full md:max-w-300 text-justify leading-relaxed md:leading-loose text-sm md:text-base">
          {texto}
        </p>
      </div>
    </div>
  );
}
