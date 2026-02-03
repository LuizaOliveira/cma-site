"use client";
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AreaAtuacao } from './components/AreaAtuacao';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AreaAtuacao />
      <Footer />
    </main>
  );
}
