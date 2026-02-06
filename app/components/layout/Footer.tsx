import { Icons } from '../ui/Button';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo e informações */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Clodonil Monteiro Advocacia"
                width={150}
                height={35}
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-300 text-sm">
              Advocacia especializada em servidores públicos. Defendendo seus direitos com excelência e dedicação.
            </p>
          </div>

          {/* Links úteis */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#area-atuacao" className="text-slate-300 hover:text-secondary transition-colors text-sm">
                  Área de Atuação
                </a>
              </li>
              <li>
                <a href="#equipe" className="text-slate-300 hover:text-secondary transition-colors text-sm">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="#noticias" className="text-slate-300 hover:text-secondary transition-colors text-sm">
                  Notícias
                </a>
              </li>
              <li>
                <a href="#contato" className="text-slate-300 hover:text-secondary transition-colors text-sm">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato e redes sociais */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Contato</h3>
            <div className="space-y-2">
              <p className="text-slate-300 text-sm">
                📧 contato@clonilmonteiro.com.br
              </p>
              <p className="text-slate-300 text-sm">
                📱 (11) 99999-9999
              </p>
            </div>
            
            <div className="pt-2">
              <h4 className="text-white font-medium mb-3 text-sm">Siga-nos</h4>
              <div className="flex items-center gap-3">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white hover:opacity-90 transition-colors"
                  aria-label="Instagram"
                >
                  <Icons.Instagram />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white hover:opacity-90 transition-colors"
                  aria-label="WhatsApp"
                >
                  <Icons.WhatsApp />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Clodonil Monteiro. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}