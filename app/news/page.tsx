import { Footer } from "../components/Footer";
import { Header } from "../components/Header";


export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fique atualizado e confira as
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              últimas <span className="text-orange-500">notícias e conteúdos</span>
            </h2>
          </div>
          
          {/* News List */}
          <div className="space-y-6">
            {/* Main Featured Article */}
            <article className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-3">
                <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded">
                  PÚBLICA
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Título da Notícia principal
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Descrição da notícia principal com pelo menos duas linhas detalhando o assunto, 
                ocupando duas linhas
              </p>
            </article>
            
            {/* Secondary Articles */}
            <article className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-3">
                <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded">
                  PÚBLICA
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Título da Notícia principal
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Descrição da notícia principal com pelo menos duas linhas detalhando o assunto, 
                ocupando duas linhas
              </p>
            </article>
            
            <article className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-3">
                <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded">
                  PÚBLICA
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Título da Notícia principal
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Descrição da notícia principal com pelo menos duas linhas detalhando o assunto, 
                ocupando duas linhas
              </p>
            </article>
            
            <article className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="mb-3">
                <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded">
                  PÚBLICA
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Título da Notícia principal
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Descrição da notícia principal com pelo menos duas linhas detalhando o assunto, 
                ocupando duas linhas
              </p>
            </article>
          </div>
          
          {/* Show More Button */}
          <div className="text-center mt-8">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-lg transition-colors">
              Ver todas
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}