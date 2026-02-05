'use client'

import Image from 'next/image'
import { SectionTitle } from './SectionTitle'
import { Icon } from '@iconify/react'
import { useState, useRef, useEffect } from 'react'
import { AnimatedTextWithColor } from './AnimatedTextWithColor'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



const testimonials = [
  {
    name: "Michael Junior Junior",
    location: "Acari",
    role: "Professor",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the!",
    stars: 5,
    image: "https://www.loremfaces.net/96/id/3.jpg"
  },
  {
    name: "Mario rosé silva",
    location: "Acari",
    role: "Professor",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the!",
    stars: 5,
    image: "https://www.loremfaces.net/96/id/2.jpg"
  },
  {
    name: "Ana Clara Santos",
    location: "Natal",
    role: "Servidora Pública",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the!",
    stars: 5,
    image: "https://www.loremfaces.net/96/id/1.jpg"
  },
  {
    name: "Carlos Eduardo",
    location: "Mossoró",
    role: "Professor",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the!",
    stars: 5,
    image: "https://www.loremfaces.net/96/id/4.jpg"
  },
  {
    name: "Fernanda Lima",
    location: "Parnamirim",
    role: "Servidora Pública",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the!",
    stars: 5,
    image: "https://www.loremfaces.net/96/id/5.jpg"
  },
  {
    name: "Roberto Souza",
    location: "Caicó",
    role: "Professor",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the!",
    stars: 5,
    image: "https://www.loremfaces.net/96/id/4.jpg"
  },
  {
    name: "Juliana Mendes",
    location: "Currais Novos",
    role: "Professora",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the!",
    stars: 5,
    image: "https://www.loremfaces.net/96/id/1.jpg"
  },
  {
    name: "Pedro Henrique",
    location: "Macaíba",
    role: "Servidor Público",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the!",
    stars: 5,
    image: "https://www.loremfaces.net/96/id/2.jpg"
  }
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const paginationRef = useRef<HTMLDivElement>(null)
  
  // Número de cards por página
  const cardsPerPage = 2
  const totalPages = Math.ceil(testimonials.length / cardsPerPage)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Função que executa a animação do header
      const animateHeader = () => {
        gsap.fromTo(headerRef.current,
          { y: -40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out' }
        )
      }

      // Função que executa a animação dos cards
      const animateCards = () => {
        const pages = scrollRef.current?.querySelectorAll('.testimonial-page')
        pages?.forEach((page, index) => {
          const cards = page.querySelectorAll('.testimonial-card')
          
          cards.forEach((card, cardIndex) => {
            const fromX = cardIndex === 0 ? -80 : 80
            
            gsap.fromTo(card,
              { x: fromX, opacity: 0 },
              { 
                x: 0, 
                opacity: 1, 
                duration: 0.9, 
                ease: 'power2.out',
                delay: cardIndex * 0.2
              }
            )
          })
        })
      }

      // Função que executa a animação da paginação
      const animatePagination = () => {
        gsap.fromTo(paginationRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
        )
      }

      // Executa animações iniciais
      animateHeader()
      animateCards()
      animatePagination()

      // ScrollTrigger que reinicia as animações ao entrar na seção
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        onEnter: () => {
          animateHeader()
          animateCards()
          animatePagination()
        },
        onEnterBack: () => {
          animateHeader()
          animateCards()
          animatePagination()
        },
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft
      const containerWidth = scrollRef.current.offsetWidth
      const newIndex = Math.round(scrollLeft / containerWidth)
      setActiveIndex(newIndex)
    }
  }

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth
      scrollRef.current.scrollTo({
        left: containerWidth * index,
        behavior: 'smooth'
      })
      setActiveIndex(index)
    }
  }

  return (
    <section ref={sectionRef} className="bg-primary py-20 px-4 lg:px-6 relative overflow-hidden ">
      {/* Lines decorativas na parte superior */}
      <div className="absolute top-0 left-0 w-full">
        <Image 
          src="/lines.svg" 
          alt="" 
          width={1920} 
          height={100} 
          className="w-full h-auto"
        />
      </div>
      
      <div className="container mx-auto">
        <div ref={headerRef} className="text-center mb-16 py-10 lg:py-0">
          <p className="text-[#A9B5CE] text-sm mb-2 uppercase tracking-widest">— Veja o que dizem sobre a gente</p>
          <AnimatedTextWithColor
            text="Relatos e"
            highlightText="Avaliações"
            className="text-4xl md:text-5xl font-bold text-white"
            highlightClassName="text-secondary"
          />
        </div>

        {/* Carousel com scroll horizontal - 2 cards por página */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 mb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Agrupa os cards em páginas de 2 */}
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div 
              key={pageIndex}
              className="flex gap-6 shrink-0 w-full snap-start testimonial-page justify-center px-4"
            >
              {testimonials
                .slice(pageIndex * cardsPerPage, (pageIndex + 1) * cardsPerPage)
                .map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-secondary-blue p-8 rounded-xl border border-white/5 relative w-full max-w-170 overflow-hidden testimonial-card min-h-96 flex flex-col justify-between"
                  >
                    {/* Vector decorativo */}
                    <Image 
                      src="/vector.svg" 
                      alt="" 
                      width={150} 
                      height={150} 
                      className="absolute top-4 right-8 opacity-40 pointer-events-none"
                    />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(item.stars)].map((_, i) => (
                        <Icon key={i} icon="mdi:star" className="text-secondary text-xl" />
                      ))}
                    </div>
                    
                    <p className="text-[#A9B5CE] text-lg text-justify leading-relaxed mb-8">
                      {item.content}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold">{item.name} - {item.location}</h4>
                        <p className="text-[#6A80B0] text-sm">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Paginação dots - uma para cada página (2 cards) */}
        <div ref={paginationRef} className="flex justify-center gap-3 py-14">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? 'w-8 bg-[#F97D0E]' 
                  : 'w-8 bg-[#313164] hover:bg-[#4a4a8a]'
              }`}
              aria-label={`Ir para página ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Linhas verticais decorativas na parte inferior */}
      <div className="absolute bottom-0 left-0 w-full">
        <Image 
          src="/linhas verticais.svg" 
          alt="" 
          width={1920} 
          height={100} 
          className="w-full h-auto"
        />
      </div>
    </section>
  )
}