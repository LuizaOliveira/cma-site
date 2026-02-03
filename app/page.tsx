import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AreaAtuacao } from './components/AreaAtuacao';
import { Footer } from './components/Footer';

import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Espaçamento antes de Avaliações */}
      <div className="h-16 lg:h-24 bg-gradient-to-b from-slate-50 to-[#F8F9FC]" />
      
      <Testimonials />
      
      {/* Espaçamento antes de Contato */}
      <div className="h-16 lg:h-24 bg-gradient-to-b from-[#01165A] to-[#F8F9FC]" />
      
      <Contact />
      <AreaAtuacao />
      <Footer />
    </main>
  );
}
