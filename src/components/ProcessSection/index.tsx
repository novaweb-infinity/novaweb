import { FaCheckCircle, FaCode, FaPaintBrush, FaRegHandshake } from 'react-icons/fa'

import { Card, CardContent } from '@/components/ui/card'

export const ProcessSection = () => {
  const steps = [
    {
      icon: <FaRegHandshake className='text-5xl text-blue-400' />,
      title: 'Consulta Inicial',
      description: 'Entendemos tus necesidades y objetivos para ofrecerte la mejor solución.',
    },
    {
      icon: <FaPaintBrush className='text-5xl text-blue-400' />,
      title: 'Diseño',
      description: 'Creamos maquetas y conceptos visuales que reflejan la esencia de tu marca.',
    },
    {
      icon: <FaCode className='text-5xl text-blue-400' />,
      title: 'Desarrollo',
      description: 'Implementamos soluciones tecnológicas utilizando las últimas tecnologías web.',
    },
    {
      icon: <FaCheckCircle className='text-5xl text-blue-400' />,
      title: 'Entrega y Soporte',
      description: 'Te entregamos un producto funcional y te ofrecemos mantenimiento continuo.',
    },
  ]

  return (
    <section className='bg-gray-200 py-16 lg:py-24 xl:py-32'>
      <div className='mx-auto max-w-7xl px-6 text-center'>
        <h2 className='text-6xl font-bold text-gray-800'>Nuestro Proceso</h2>
        <p className='mt-4 text-3xl text-gray-600'>
          Un proceso claro y organizado que asegura el éxito de tu proyecto.
        </p>
        <div className='mt-10 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4'>
          {steps.map((step, index) => (
            <Card
              key={index}
              className='flex flex-col items-center space-y-6 border-0 bg-transparent p-8 shadow-none hover:bg-transparent'
            >
              <div className='flex items-center justify-center rounded-full bg-white p-6'>{step.icon}</div>
              <h3 className='whitespace-nowrap text-3xl font-semibold text-gray-800'>{step.title}</h3>
              <p className='mt-3 text-2xl text-gray-600'>{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
