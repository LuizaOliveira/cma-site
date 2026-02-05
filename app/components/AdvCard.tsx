import Image from "next/image";

interface AdvCardProps {
  imgSrc: string;
  nome: string;
  titulo: string;
  texto: string;
}

export function AdvCard({ imgSrc, nome, titulo, texto }: AdvCardProps) {
  return (
    <div className="grid grid-cols-12 mb-10">
      <div className="w-50 bg-[#F5F8FF] col-span-2">
        <div>
          <Image
            src={`/${imgSrc}`}
            alt="Tablet com notificações para servidores públicos"
            width={200}
            height={200}
          />
          <div className="flex">
            <div className="text-white bg-primary p-2 w-full">
              {<span className="underline underline-offset-1 decoration-2 decoration-secondary">{nome.split(' ')[0]}</span>}
              {<span> {nome.split(' ')[1]}</span>}
              {/* <div className="bg-secondary py-[1px] w-12 -mt-1" /> */}
            </div>
            <span className="bg-[#001F7B] w-4" />
            <span className="bg-[#1C3174] w-6" />
          </div>
        </div>
      </div>
      <div className="col-span-10">
        <div className="text-white bg-secondary w-fit px-4 rounded-2xl my-6">
          {titulo}
        </div>
        <p className="text-[#6A80B0] max-w-300 text-justify leading-loose">
          {texto}
        </p>
      </div>
    </div>
  );
}
