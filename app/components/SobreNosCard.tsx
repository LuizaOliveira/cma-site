import { Icon } from "@iconify/react";

interface SobreNosCardProps {
  titulo: string;
  icone: string;
  texto: string;
}

export function SobreNosCard({ titulo, icone, texto }: SobreNosCardProps) {
  return (
    <div className="flex items-center">
      <div className="flex items-center border border-text-color shadow-text-color shadow-2xl rounded-lg w-70 bg-white">
          <span className="bg-secondary h-20 w-1 rounded-r-full" />
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-primary text-sm">{titulo}</div>
              <Icon icon={icone} className="inline-block text-secondary w-10 h-10 p-0 m-0" />
            </div>
            <h2 className="text-primary font-bold">{texto}</h2>

          </div>
        </div>
    </div>
    
  )
}