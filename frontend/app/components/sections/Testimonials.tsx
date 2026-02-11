'use client'

import Image from 'next/image'
import { SectionTitle } from '../ui/SectionTitle'
import { Icon } from '@iconify/react'
import { useState, useRef, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { DURATIONS, EASINGS } from '../../lib/animations/constants'

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
    name: "Mario José Medeiros",
    location: "Acari",
    role: "Professor",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the! Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
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
  const [cardsPerPage, setCardsPerPage] = useState(2)
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const paginationRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()


  const touchStartX = useRef<number | null>(null)
  const isAnimating = useRef(false)
  const totalPages = Math.ceil(testimonials.length / cardsPerPage)

  useEffect(() => {
    const checkMobile = () => setCardsPerPage(window.innerWidth < 1024 ? 1 : 2)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const scrollToIndex = useCallback((index: number) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth
      scrollRef.current.scrollTo({
        left: containerWidth * index,
        behavior: 'smooth'
      })
      setActiveIndex(index)
      
      
      isAnimating.current = true
      setTimeout(() => {
        isAnimating.current = false
      }, 600) 
    }
  }, [])

  const navigate = useCallback((direction: 'next' | 'prev') => {
    if (isAnimating.current) return
    
    if (direction === 'next' && activeIndex < totalPages - 1) {
      scrollToIndex(activeIndex + 1)
    } else if (direction === 'prev' && activeIndex > 0) {
      scrollToIndex(activeIndex - 1)
    }
  }, [activeIndex, totalPages, scrollToIndex])

  
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX
    const threshold = 50 

    if (Math.abs(diff) > threshold) {
      navigate(diff > 0 ? 'next' : 'prev')
    }
    touchStartX.current = null
  }

  
  const onWheel = (e: React.WheelEvent) => {
   
    if (Math.abs(e.deltaX) > 10 || Math.abs(e.deltaY) > 10) {
      
      const isNext = e.deltaX > 0 || e.deltaY > 0
      navigate(isNext ? 'next' : 'prev')
    }
  }

  // GSAP Animations
  useEffect(() => {
    if (!sectionRef.current) return
    const ctx = gsap.context(() => {
      const animDuration = prefersReducedMotion ? DURATIONS.instant : DURATIONS.slower
      const shouldAnimate = !prefersReducedMotion

      gsap.fromTo(headerRef.current,
        { y: shouldAnimate ? -40 : 0, opacity: 0 },
        { y: 0, opacity: 1, duration: animDuration, ease: EASINGS.easeOut, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )

      const cards = sectionRef.current?.querySelectorAll('.testimonial-card')
      cards?.forEach((card, i) => {
        gsap.fromTo(card,
          { scale: shouldAnimate ? 0.9 : 1, opacity: 0 },
          { scale: 1, opacity: 1, duration: animDuration, ease: EASINGS.easeOut, delay: shouldAnimate ? i * 0.1 : 0, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [prefersReducedMotion, cardsPerPage])

  return (
    <section ref={sectionRef} className="bg-primary py-12 lg:py-20 px-4 lg:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full mt-4 lg:mt-9 pointer-events-none opacity-60">
        <Image src="/Lines.svg" alt="" width={1920} height={100} className="w-full h-10 lg:h-auto object-cover" />
      </div>

      <div className="container mx-auto relative z-10">
        <div ref={headerRef} className="py-6 lg:py-10">
          <SectionTitle title='Relatos e' subtitle='Veja o que dizem sobre a gente' center dark>Avaliações</SectionTitle>
        </div>

        <div
          ref={scrollRef}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onWheel={onWheel}
          className="flex overflow-hidden pb-4 mb-8 lg:mb-12 cursor-grab active:cursor-grabbing select-none"
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="flex gap-4 lg:gap-6 shrink-0 w-full justify-center px-2 lg:px-4"
            >
              {testimonials
                .slice(pageIndex * cardsPerPage, (pageIndex + 1) * cardsPerPage)
                .map((item, index) => (
                  <div
                    key={index}
                    className="bg-secondary-blue p-6 lg:p-8 rounded-2xl border border-white/5 relative w-full lg:max-w-135 testimonial-card min-h-105 flex flex-col justify-between"
                  >
                    <Image
                      src="/Vector.svg"
                      alt=""
                      width={120}
                      height={120}
                      className="absolute top-4 right-4 lg:right-8 opacity-10 pointer-events-none w-24 lg:w-32 z-0"
                    />

                    <div className="relative z-10"> 
                      <div className="flex gap-1 mb-4 lg:mb-6">
                        {[...Array(item.stars)].map((_, i) => (
                          <Icon key={i} icon="mdi:star" className="text-secondary-orange text-xl" />
                        ))}
                      </div>
                      <p className="text-[#A9B5CE] text-base lg:text-lg text-justify leading-relaxed mb-6 lg:mb-8">
                        {item.content}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 relative z-10">
                      <div className="w-12 h-12 rounded-full overflow-hidden relative border border-white/10">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm lg:text-base">{item.name} — {item.location}</h4>
                        <p className="text-[#6A80B0] text-xs lg:text-sm">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

        <div ref={paginationRef} className="flex justify-center gap-2 lg:gap-3 py-6 lg:py-14">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                ? 'w-8 bg-[#F97D0E]'
                : 'w-4 lg:w-8 bg-[#313164] hover:bg-[#4a4a8a]'
                }`}
              aria-label={`Ir para página ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className='absolute bottom-0 left-0 w-full pointer-events-none'>
        <Image src="/linhas verticais.svg" alt="" width={1920} height={100} className="w-full h-16 lg:h-auto object-cover opacity-50" />
      </div>
    </section>
  )
}