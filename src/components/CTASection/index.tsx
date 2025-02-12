'use client'

import { Button } from '@/components/ui/button'

export const CTASection = () => {
  return (
    <section className='bg-gray-600 py-16 text-white lg:py-24 xl:py-32'>
      <div className='mx-auto max-w-7xl px-6 text-center'>
        <h2 className='text-4xl font-bold sm:text-5xl md:text-6xl'>
          ¿Listo para transformar tu idea en realidad? ¡Hablemos!
        </h2>
        <p className='mx-auto mt-6 max-w-2xl text-xl sm:text-2xl'>
          ¡Es el momento perfecto para dar el siguiente paso! Contáctanos hoy y empecemos a trabajar juntos.
        </p>
        <div className='mt-8 flex justify-center gap-6'>
          <Button
            className='bg-white px-8 py-3 text-lg font-semibold text-blue-500 transition-all duration-300 hover:bg-gray-200'
            onClick={() => (window.location.href = '#contacto')}
          >
            Contáctanos
          </Button>
          <Button
            className='border-2 border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-blue-500'
            onClick={() => (window.location.href = '#agenda')}
          >
            Agendar llamada
          </Button>
        </div>
      </div>
    </section>
  )
}
