import Image from "next/image";

interface AdvCardProps {
  imgSrc: string;
  nome: string;
  titulo: string;
  texto: string;
}

export function AdvCard({ imgSrc, nome, titulo, texto }: AdvCardProps) {
  return (
    <div className="md:flex md:gap-10 md:mb-10 -mb-1">
      <div className="md:flex md:items-center w-full md:w-50">
        <div className="min-w-50">
          <Image
            src={`/${imgSrc}`}
            alt="Tablet com notificações para servidores públicos"
            width={200}
            height={200}
            className="w-full md:w-auto h-auto object-cover"
          />
          <div className="flex gap-0">
            <div className="text-white bg-primary p-2 w-full text-sm md:text-base">
              {<span className="underline underline-offset-4 decoration-2 decoration-secondary md:text-base text-2xl">{nome.split(' ')[0]}</span>}
              {<span className="md:text-base text-2xl"> {nome.split(' ')[1]}</span>}
            </div>
            <span className="bg-[#001F7B] w-4" />
            <span className="bg-secondary-blue w-8" />
          </div>
        </div>
      </div>
      <div className="px-2 md:px-0">
        <div className="text-white bg-secondary w-fit px-4 py-1 rounded-2xl my-3 md:my-6 text-sm md:text-base">
          {titulo}
        </div>
        <p className="text-[#6A80B0] text-justify leading-relaxed md:leading-loose text-sm md:text-base">
          {texto}
        </p>
      </div>
    </div>
  );
}
