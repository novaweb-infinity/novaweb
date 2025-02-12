'use client'

import Image from 'next/image'
import { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'

interface Project {
  title: string
  description: string
  imageUrl: string
  client: string
  solutions: string
  results: string
}

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Sitio web para un negocio de moda.',
      imageUrl: '/images/harpal.jpg',
      client: 'Cliente A',
      solutions: 'Desarrollo de un e-commerce con carrito de compras y gestión de inventarios.',
      results: 'Aumento del 40% en ventas en los primeros 3 meses.',
    },
    {
      title: 'Proyecto 2',
      description: 'Aplicación web para la gestión de proyectos internos.',
      imageUrl: '/images/harpal.jpg',
      client: 'Cliente B',
      solutions: 'Desarrollo de una plataforma interactiva con paneles de control y reportes.',
      results: 'Reducción del 30% en el tiempo de gestión de proyectos.',
    },
    {
      title: 'Proyecto 3',
      description: 'Rediseño de sitio web para un restaurante.',
      imageUrl: '/images/harpal.jpg',
      client: 'Cliente C',
      solutions: 'Optimización del diseño y experiencia de usuario, integración con sistema de reservas.',
      results: 'Incremento del 25% en reservas online.',
    },
  ]

  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <section className='bg-gray-50 py-16 lg:py-24 xl:py-32'>
      <div className='mx-auto max-w-7xl px-6 text-center'>
        <h2 className='text-6xl font-bold text-gray-800'>Proyectos Destacados</h2>
        <p className='mt-4 text-3xl text-gray-600'>
          Mira algunos de nuestros proyectos más exitosos y cómo hemos ayudado a nuestros clientes a crecer.
        </p>
        <div className='mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project, index) => (
            <Card
              key={index}
              onClick={() => handleOpenModal(project)}
              className='group relative w-full cursor-pointer rounded-lg border border-gray-200 shadow-md transition-shadow hover:shadow-xl'
            >
              <div className='overflow-hidden rounded-t-lg'>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className='h-[250px] w-full object-cover transition-transform group-hover:scale-105'
                />
              </div>
              <CardContent className='p-4'>
                <h3 className='text-2xl font-semibold text-gray-800'>{project.title}</h3>
                <p className='text-xl text-gray-600'>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        {selectedProject && (
          <div className='fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='w-11/12 max-w-2xl rounded-lg bg-white p-6'>
              <h3 className='text-2xl font-semibold text-gray-800'>{selectedProject.title}</h3>
              <p className='mt-2 text-gray-600'>{selectedProject.description}</p>
              <p className='mt-2 font-semibold text-gray-800'>Cliente: {selectedProject.client}</p>
              <p className='mt-2'>Soluciones implementadas: {selectedProject.solutions}</p>
              <p className='mt-2'>Resultados obtenidos: {selectedProject.results}</p>
              <button
                onClick={handleCloseModal}
                className='mt-4 rounded-full bg-red-600 px-6 py-2 text-white transition duration-300 hover:bg-red-700'
              >
                Cerrar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
