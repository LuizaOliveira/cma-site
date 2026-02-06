"use client";
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { AreaAtuacao } from './components/sections/AreaAtuacao';
import { Footer } from './components/layout/Footer';
import { SobreNos } from './components/sections/SobreNos';
import { NossaEquipe } from './components/sections/NossaEquipe';

import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AreaAtuacao />
      <SobreNos />
      <NossaEquipe />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
