'use client';

import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

interface PdfViewerProps {
  pdfUrl: string;
  title?: string;
  height?: string;
  onClose?: () => void;
}

export function PdfViewer({ 
  pdfUrl, 
  title = "Visualizar PDF", 
  height = "h-screen",
  onClose 
}: PdfViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(40); // Você pode implementar lógica para detectar total de páginas

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = title || 'documento.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Fechar com ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && onClose) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="w-full bg-black relative" style={{ height: '100vh' }}>
      {/* Barra superior - estilo Correio da Manhã */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-gray-800 text-white border-b border-gray-600">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Controles de navegação esquerda */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-700 rounded transition-colors">
              <Icon icon="mdi:menu" className="w-5 h-5" />
            </button>
            
            <button className="p-2 hover:bg-gray-700 rounded transition-colors">
              <Icon icon="mdi:view-grid" className="w-5 h-5" />
            </button>
            
            <div className="h-6 w-px bg-gray-600 mx-2"></div>
            
            <button 
              disabled={currentPage <= 1}
              className="p-2 hover:bg-gray-700 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            >
              <Icon icon="mdi:chevron-left" className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-2 text-sm">
              <span>{currentPage}</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-400">{totalPages}</span>
            </div>
            
            <button 
              disabled={currentPage >= totalPages}
              className="p-2 hover:bg-gray-700 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            >
              <Icon icon="mdi:chevron-right" className="w-5 h-5" />
            </button>
          </div>

          {/* Controles centrais */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-700 rounded transition-colors">
              <Icon icon="mdi:magnify" className="w-5 h-5" />
            </button>
            
            <button className="p-2 hover:bg-gray-700 rounded transition-colors">
              <Icon icon="mdi:magnify-plus" className="w-5 h-5" />
            </button>
            
            <button className="p-2 hover:bg-gray-700 rounded transition-colors">
              <Icon icon="mdi:magnify-minus" className="w-5 h-5" />
            </button>
            
            <div className="h-6 w-px bg-gray-600 mx-2"></div>
            
            <button className="p-2 hover:bg-gray-700 rounded transition-colors">
              <Icon icon="mdi:fit-to-page-outline" className="w-5 h-5" />
            </button>
          </div>

          {/* Controles direita */}
          <div className="flex items-center gap-3">
            {onClose && (
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-700 rounded transition-colors"
                title="Fechar"
              >
                <Icon icon="mdi:close" className="w-5 h-5" />
              </button>
            )}
            
            <div className="h-6 w-px bg-gray-600 mx-2"></div>
            
            <button 
              onClick={downloadPdf}
              className="p-2 hover:bg-gray-700 rounded transition-colors"
              title="Download PDF"
            >
              <Icon icon="mdi:download" className="w-5 h-5" />
            </button>
            
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-gray-700 rounded transition-colors"
              title="Abrir em nova aba"
            >
              <Icon icon="mdi:open-in-new" className="w-5 h-5" />
            </a>
            
            <div className="h-6 w-px bg-gray-600 mx-2"></div>
            
            <button className="p-2 hover:bg-gray-700 rounded transition-colors">
              <Icon icon="mdi:dots-vertical" className="w-5 h-5" />
            </button>
            
            <button className="p-2 hover:bg-gray-700 rounded transition-colors">
              <Icon icon="mdi:fullscreen" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Container principal do PDF */}
      <div className="absolute inset-0 pt-16 bg-black flex items-center justify-center">
        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
            <div className="text-center">
              <Icon icon="eos-icons:loading" className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-sm text-gray-300">Carregando documento...</p>
            </div>
          </div>
        )}

        {/* Error state */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
            <div className="text-center">
              <Icon icon="mdi:file-alert-outline" className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-sm text-gray-300 mb-3">Erro ao carregar o documento</p>
              <button
                onClick={downloadPdf}
                className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors"
              >
                Baixar PDF
              </button>
            </div>
          </div>
        )}

        {/* PDF Container - estilo Correio da Manhã */}
        <div className="w-full h-full max-w-5xl mx-auto relative p-4">
          <div className="h-full bg-white shadow-2xl relative overflow-hidden rounded-lg">
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0&page=${currentPage}&zoom=page-fit`}
              className="w-full h-full border-none"
              title={title}
              onLoad={handleLoad}
              onError={handleError}
            />
          </div>
        </div>
      </div>

      {/* Navegação inferior (setas laterais) */}
      <button 
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Icon icon="mdi:chevron-left" className="w-6 h-6" />
      </button>
      
      <button 
        disabled={currentPage >= totalPages}
        onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Icon icon="mdi:chevron-right" className="w-6 h-6" />
      </button>

      {/* Indicador de página inferior */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full text-sm">
        {currentPage} / {totalPages}
      </div>
    </div>
  );
}