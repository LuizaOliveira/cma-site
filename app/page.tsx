"use client";
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
      <AreaAtuacao />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
