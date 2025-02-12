'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export const ContactSection = () => {
  return (
    <>
      <section className='scroll-m-28 bg-gray-50 py-16 lg:py-24 xl:py-32' id='contacto'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='text-center'>
            <h2 className='text-6xl font-bold text-gray-800'>Contacto</h2>
            <p className='mt-4 text-3xl text-gray-600'>¡Cuéntanos tu proyecto y empecemos a trabajar juntos!</p>
          </div>
          <div className='mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16'>
            <div className='flex flex-col space-y-6'>
              <Input type='text' placeholder='Nombre' className='w-full p-4' />
              <Input type='email' placeholder='Correo' className='w-full p-4' />
              <Textarea placeholder='Mensaje' className='w-full p-4' rows={6} />
              <Button className='w-full bg-blue-500 text-white hover:bg-blue-600'>Enviar mensaje</Button>
            </div>
            <div className='flex flex-col space-y-6'>
              <div>
                <h3 className='text-2xl font-semibold text-gray-800'>Correo</h3>
                <p className='text-xl text-gray-600'>contacto@tuempresa.com</p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-gray-800'>Teléfono</h3>
                <p className='text-xl text-gray-600'>+34 123 456 789</p>
              </div>
              <div>
                <h3 className='text-2xl font-semibold text-gray-800'>Ubicación</h3>
                <p className='text-xl text-gray-600'>Calle Ficticia 123, Ciudad, País</p>
              </div>
            </div>
          </div>
          <div className='mt-12 flex justify-center'>
            <div className='relative aspect-video w-full max-w-2xl overflow-hidden rounded-lg shadow-md'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.9537363156817!3d-37.817209742013434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772c9d1f4b2b3!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1619194863331!5m2!1sen!2sus'
                width='600'
                height='450'
                className='absolute inset-0 h-full w-full border-0'
                allowFullScreen
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
