import Image from "next/image";

export function AdvCard() {
  return (
    <div className="grid grid-cols-12 mb-10">
      <div className="w-50 bg-[#F5F8FF] col-span-2">
        <div>
          <Image
            src="/clodonilBG.png"
            alt="Tablet com notificações para servidores públicos"
            width={200}
            height={200}
          />
          <div className="flex">
            <div className="text-white bg-primary p-2 w-full">
              Clodonil Monteiro
            </div>
            <span className="bg-[#001F7B] w-4" />
            <span className="bg-[#1C3174] w-6" />
          </div>
        </div>
      </div>
      <div className="col-span-10">
        <div className="text-white bg-secondary w-fit px-4 rounded-2xl my-2">
          Fundador
        </div>
        <p className="text-[#6A80B0] max-w-300 text-justify leading-loose">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
        </p>
      </div>
    </div>
  );
}
