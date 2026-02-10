// Cloudinary PDF to FlipBook Configuration

/**
 * Como configurar PDFs do Cloudinary para FlipBook
 * 
 * 1. UPLOAD DO PDF NO CLOUDINARY:
 * - Faça upload do PDF normalmente
 * - Anote o public_id (ex: "pdfs/correio-da-manha-janeiro-2026") 
 * 
 * 2. URL BASE DO PDF:
 * https://res.cloudinary.com/[cloud-name]/image/upload/v[version]/[public_id].pdf
 * 
 * 3. TRANSFORMAÇÕES AUTOMÁTICAS:
 * Para converter páginas do PDF em imagens, use:
 * https://res.cloudinary.com/[cloud-name]/image/upload/pg_[page]/[public_id].jpg
 * 
 * Onde:
 * - pg_1 = primeira página
 * - pg_2 = segunda página  
 * - etc.
 */

// Exemplo prático:
const cloudinaryConfig = {
  cloudName: "seu-cloud-name",
  pdfPublicId: "pdfs/correio-da-manha-janeiro-2026",
  version: "v1708123456" // opcional
};

// URL base do PDF:
const pdfUrl = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${cloudinaryConfig.version}/${cloudinaryConfig.pdfPublicId}.pdf`;

// URLs das páginas (geradas automaticamente pelo FlipBookViewer):
const page1 = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/pg_1/${cloudinaryConfig.pdfPublicId}.jpg`;
const page2 = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/pg_2/${cloudinaryConfig.pdfPublicId}.jpg`;

/**
 * VANTAGENS DO CLOUDINARY:
 * ✅ Conversão automática PDF → Imagens
 * ✅ CDN global (carregamento rápido)  
 * ✅ Redimensionamento automático
 * ✅ Cache inteligente
 * ✅ Fallbacks automáticos
 * ✅ Não precisa PDF na máquina local
 * 
 * TRANSFORMAÇÕES ADICIONAIS:
 * - w_300,h_400 = redimensionar
 * - q_auto = qualidade automática
 * - f_auto = formato automático (WebP, etc)
 * - c_fit = modo de ajuste
 */

export const generateFlipBookConfig = (cloudName: string, publicId: string, totalPages: number) => ({
  pdfUrl: `https://res.cloudinary.com/${cloudName}/image/upload/${publicId}.pdf`,
  pageUrls: Array.from({ length: totalPages }, (_, i) => 
    `https://res.cloudinary.com/${cloudName}/image/upload/pg_${i + 1}/${publicId}.jpg`
  ),
  optimizedPageUrls: Array.from({ length: totalPages }, (_, i) => 
    `https://res.cloudinary.com/${cloudName}/image/upload/w_400,h_500,c_fit,q_auto,f_auto/pg_${i + 1}/${publicId}.jpg`
  )
});