import { Icon } from '@iconify/react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-brand text-white py-12 font-sans">
      <div className="container mx-auto px-6">
        
        
        <div className="flex justify-center mb-12">
          <Image
            src="/logo.svg" 
            alt="Clodonil Monteiro Advocacia"
            width={250}
            height={70}
            className="h-16 md:h-20 w-auto"
          />
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8 max-w-6xl mx-auto">
          
          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-2 border-b border-orange-500/50 w-full pb-1 text-center md:text-left">
              Redes Sociais
            </h3>
            <ul className="space-y-4 mt-4 w-full flex flex-col items-center md:items-start">
              <li>
                <a href="https://www.facebook.com/clodonilmonteiroadvocacia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <Icon icon="mdi:facebook" className="text-xl" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@clodonilmonteiroadvocacia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <Icon icon="mdi:youtube" className="text-xl" /> Youtube
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <Icon icon="mdi:linkedin" className="text-xl" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/clodonilmonteiro/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <Icon icon="mdi:instagram" className="text-xl" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@clodonilmonteiro" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                  <Icon icon="ic:baseline-tiktok" className="text-xl" /> TikTok
                </a>
              </li>
            </ul>
          </div>

          
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-2 border-b border-orange-500/50 w-full pb-1 text-center md:text-left">
              Links úteis
            </h3>
            <ul className="space-y-4 mt-4 w-full flex flex-col items-center md:items-start">
              <li><a href="#" className="hover:text-orange-400 flex items-center gap-2"><span>▶</span> Início</a></li>
              <li><a href="#" className="hover:text-orange-400 flex items-center gap-2"><span>▶</span> Institucional</a></li>
              <li><a href="#" className="hover:text-orange-400 flex items-center gap-2"><span>▶</span> Conteúdo</a></li>
              <li><a href="#" className="hover:text-orange-400 flex items-center gap-2"><span>▶</span> Contato</a></li>
            </ul>
          </div>

          
          <div className="flex flex-col items-center md:items-start md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-2 border-b border-orange-500/50 w-full pb-1 text-center md:text-left">
              Funcionamento
            </h3>
            <div className="mt-4 space-y-4 text-center md:text-left">
              <div>
                <p className="font-bold">Segunda à Sexta-feira</p>
                <p className="text-slate-300">07:00 AM - 18:00 PM</p>
              </div>
              <div>
                <p className="font-bold">Sábado e Domingo</p>
                <p className="text-slate-300">Fechado</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-700/30 text-[10px] md:text-[11px] text-center text-slate-400 leading-relaxed">
          <p className="max-w-3xl mx-auto">
            © 2025 Clodonil Monteiro Advocacia – CNPJ 37.694.573/0001-72 – Rua Silvino Adonias Bezerra, 02 – Acari-RN – Fone: (84) 3433-2179 – Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}