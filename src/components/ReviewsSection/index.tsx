'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'

import { Card, CardContent } from '@/components/ui/card'

const reviews = [
  {
    name: 'Juan Pérez',
    company: 'Empresa A',
    image: '/juan.jpg',
    review:
      'El equipo de Novaweb Infinity transformó nuestras ideas en soluciones digitales innovadoras. Estamos muy satisfechos con el resultado.',
  },
  {
    name: 'Ana López',
    company: 'Empresa B',
    image: '/ana.jpg',
    review:
      'Gracias a su trabajo, nuestra plataforma web ahora es mucho más rápida y funcional. Nos ayudaron a optimizar todos nuestros procesos.',
  },
  {
    name: 'Carlos García',
    company: 'Empresa C',
    image: '/carlos.jpg',
    review:
      'Novaweb Infinity no solo cumplió con nuestras expectativas, sino que las superó. El soporte continuo que nos brindan es excelente.',
  },
]

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  useEffect(() => {
    const interval = setInterval(nextReview, 5000)
    return () => clearInterval(interval)
  }, [])

  const { name, company, image, review } = reviews[currentIndex]

  return (
    <section className='py-16 lg:py-24 xl:py-32'>
      <div className='mx-auto max-w-7xl px-6 text-center'>
        <h2 className='text-6xl font-bold text-gray-800'>Reseñas de Clientes</h2>
        <p className='mt-4 text-3xl text-gray-600'>
          Nuestros clientes nos respaldan con su confianza. Mira lo que tienen que decir sobre nosotros.
        </p>

        <div className='relative mt-12 flex justify-center'>
          <Card className='flex w-full max-w-3xl flex-col items-center justify-center space-y-6 border-0 bg-transparent p-8 shadow-none'>
            <div className='flex items-center justify-center'>
              <FaQuoteLeft className='text-6xl text-gray-500' />
            </div>
            <CardContent>
              <p className='text-xl italic text-gray-600'>"{review}"</p>
            </CardContent>
            <div className='flex items-center space-x-4'>
              {image && (
                <div className='relative'>
                  <Image
                    src={image}
                    alt={name}
                    width={64}
                    height={64}
                    className='rounded-full object-cover'
                    layout='intrinsic'
                  />
                </div>
              )}
              <div className='flex flex-col items-center'>
                <h3 className='text-2xl font-semibold text-gray-800'>{name}</h3>
                <p className='text-xl text-gray-500'>{company}</p>
              </div>
            </div>
          </Card>

          <div className='absolute bottom-4 left-1/2 flex w-full -translate-x-1/2 transform justify-between px-4'>
            <button
              onClick={prevReview}
              className='transform rounded-full bg-blue-400 p-4 text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-blue-400 hover:shadow-2xl'
            >
              <FaChevronLeft className='text-2xl' />
            </button>
            <button
              onClick={nextReview}
              className='transform rounded-full bg-blue-400 p-4 text-white shadow-lg transition duration-300 hover:scale-110 hover:bg-blue-400 hover:shadow-2xl'
            >
              <FaChevronRight className='text-2xl' />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
