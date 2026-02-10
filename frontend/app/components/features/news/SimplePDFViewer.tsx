'use client'

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configurar o worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configurar o worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  pdfUrl: string;
  totalPages?: number;
}

export function SimplePDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoom, setZoom] = useState(0.75);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGridView, setShowGridView] = useState(false);
  const [pageWidth, setPageWidth] = useState(600);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Callback quando o PDF é carregado
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setCurrentPage(1);
  };

  const nextPage = () => {
    if (currentPage < numPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const zoomIn = () => setZoom(prev => Math.min(prev + 0.2, 3));
  const zoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.5));
  
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

// ...existing code...

const handleDownload = () => {
  fetch(pdfUrl)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const now = new Date();
      const pad = (n: number) => n.toString().padStart(2, '0');
      const dateStr = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}_${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
      const filename = `clodonews_${dateStr}.pdf`;

      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
};

// ...existing code...

  // Ajustar zoom baseado no fullscreen
  useEffect(() => {
    if (isFullscreen) {
      setZoom(0.5); // 50% em fullscreen
    } else {
      setZoom(0.75); // 75% normal
    }
  }, [isFullscreen]);

  // Listener para mudanças de fullscreen e ajuste de tamanho
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const handleResize = () => {
      const maxWidth = isFullscreen ? window.innerWidth - 100 : Math.min(600, window.innerWidth - 100);
      setPageWidth(maxWidth);
    };

    handleResize();
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      window.removeEventListener('resize', handleResize);
    };
  }, [isFullscreen]);

  return (
    <div 
      ref={containerRef}
      className={`bg-white border border-gray-200 rounded relative ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}
    >
      {/* Grid de páginas */}
      {showGridView && (
        <div className="absolute inset-0 bg-white z-20 overflow-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Todas as páginas</h3>
              <button
                onClick={() => setShowGridView(false)}
                className="p-2 hover:bg-gray-200 rounded"
              >
                <Icon icon="mdi:close" className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from({ length: numPages }, (_, i) => i + 1).map(pageNum => (
                  <button
                    key={pageNum}
                    onClick={() => { setCurrentPage(pageNum); setShowGridView(false); }}
                    className={`relative aspect-[3/4] border-2 rounded-lg overflow-hidden hover:border-blue-500 transition-colors ${
                      pageNum === currentPage ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300'
                    }`}
                  >
                    <Page 
                      pageNumber={pageNum} 
                      width={150}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-xs py-1 text-center">
                      {pageNum}
                    </div>
                  </button>
                ))}
              </Document>
            </div>
          </div>
        </div>
      )}

      {/* Barra de ferramentas superior */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200 bg-gray-50/95 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <button 
            onClick={prevPage}
            disabled={currentPage === 1}
            className="p-1 hover:bg-gray-200 rounded disabled:opacity-50 transition-colors"
            title="Página anterior"
          >
            <Icon icon="mdi:chevron-left" className="w-4 h-4 text-gray-600" />
          </button>
          <span className="text-sm text-gray-600 font-medium">
            {currentPage}/{numPages || '...'}
          </span>
          <button 
            onClick={nextPage}
            disabled={currentPage === numPages}
            className="p-1 hover:bg-gray-200 rounded disabled:opacity-50 transition-colors"
            title="Próxima página"
          >
            <Icon icon="mdi:chevron-right" className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="flex items-center space-x-1">
          <button 
            onClick={() => setShowGridView(!showGridView)}
            className="p-1 hover:bg-gray-200 rounded"
            title="Visualização em grade"
          >
            <Icon icon="mdi:grid-large" className="w-4 h-4 text-gray-600" />
          </button>
          <button 
            onClick={zoomIn}
            disabled={zoom >= 3}
            className="p-1 hover:bg-gray-200 rounded disabled:opacity-50"
            title="Aumentar zoom"
          >
            <Icon icon="mdi:magnify-plus" className="w-4 h-4 text-gray-600" />
          </button>
          <button 
            onClick={zoomOut}
            disabled={zoom <= 0.5}
            className="p-1 hover:bg-gray-200 rounded disabled:opacity-50"
            title="Diminuir zoom"
          >
            <Icon icon="mdi:magnify-minus" className="w-4 h-4 text-gray-600" />
          </button>
          <button 
            onClick={handleDownload}
            className="p-1 hover:bg-gray-200 rounded"
            title="Baixar PDF"
          >
            <Icon icon="mdi:download" className="w-4 h-4 text-gray-600" />
          </button>
          <button 
            onClick={toggleFullscreen}
            className="p-1 hover:bg-gray-200 rounded"
            title={isFullscreen ? "Sair da tela cheia (Esc)" : "Tela cheia (F)"}
          >
            <Icon icon="mdi:crop-free" className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Área do PDF */}
      <div className={`relative bg-gray-100 overflow-auto ${isFullscreen ? 'h-screen' : 'h-[70vh]'}`} style={{padding: 0, margin: 0}}>
        <div 
          className="w-full flex items-start justify-center overflow-auto"
          style={{ minHeight: 0, padding: 0, margin: 0 }}
        >
          <div
            className="transition-transform duration-200"
            style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}
          >
            <Document 
              file={pdfUrl} 
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex items-center justify-center h-[60vh]">
                  <div className="text-center text-gray-500">
                    <Icon icon="mdi:loading" className="w-16 h-16 mx-auto mb-0 animate-spin" />
                    <p>Carregando PDF...</p>
                  </div>
                </div>
              }
              error={
                <div className="flex items-center justify-center h-[60vh]">
                  <div className="text-center text-gray-500">
                    <Icon icon="mdi:alert-circle" className="w-16 h-16 mx-auto mb-2 text-red-500" />
                    <p>Erro ao carregar PDF</p>
                  </div>
                </div>
              }
            >
              {isFullscreen ? (
                // Fullscreen: mostrar todas as páginas em lista
                <div>
                  {Array.from({ length: numPages }, (_, i) => i + 1).map(pageNum => (
                    <div key={pageNum} className="bg-white">
                      <Page 
                        pageNumber={pageNum} 
                        width={pageWidth}
                        renderTextLayer={true}
                        renderAnnotationLayer={true}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                // Modo normal: mostrar apenas página atual
                <Page 
                  pageNumber={currentPage} 
                  width={pageWidth}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                />
              )}
            </Document>
          </div>
        </div>
        
        {/* Indicador de zoom */}
        {zoom !== 1 && (
          <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs z-10">
            {Math.round(zoom * 100)}%
          </div>
        )}
      </div>
    </div>
  );
}