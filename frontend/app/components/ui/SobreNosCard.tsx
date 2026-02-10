import { Icon } from "@iconify/react";

interface SobreNosCardProps {
  titulo: string;
  icone: string;
  texto: string;
}

export function SobreNosCard({ titulo, icone, texto }: SobreNosCardProps) {
  return (
    <div className="flex items-center min-w-60 min-h-40 w-60 h-40">
      <div className="flex items-center border border-text-color shadow-text-color shadow-md rounded-lg w-full bg-white">
          <span className="bg-secondary h-16 w-1 rounded-r-full shrink-0" />
          <div className="p-3 flex-1">
            <div className="flex items-center justify-between mb-2">
              <div className="text-primary text-xs">{titulo}</div>
              <Icon icon={icone} className="text-secondary w-7 h-7" />
            </div>
            <h2 className="text-primary font-bold text-sm sm:text-base">{texto}</h2>

          </div>
        </div>
    </div>
    
  )
}