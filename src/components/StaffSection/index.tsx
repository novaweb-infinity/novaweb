'use client'

import Image from 'next/image'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const StaffSection = () => {
  const teamMembers = [
    {
      name: 'José Pozo',
      role: 'CEO Fundador',
      specialty: 'Full Stack Web Developer',
      experience: 'Apasionado por liderar proyectos que transforman ideas en realidades digitales.',
      image: '/jose-pozo.jpg',
    },
    {
      name: 'José A. Canto',
      role: 'CTO Fundador',
      specialty: 'Full Stack Web Developer',
      experience: 'Dedicado a diseñar soluciones que combinan tecnología y creatividad.',
      image: '/jose-canto.jpg',
    },
  ]

  return (
    <section className='bg-gray-200 py-16 lg:py-24 xl:py-32'>
      <div className='mx-auto max-w-7xl px-6 text-center'>
        <h2 className='text-6xl font-bold text-gray-800'>Nuestro Equipo</h2>
        <p className='mt-4 text-3xl text-gray-600'>Conoce a las personas apasionadas detrás de nuestros proyectos.</p>
        <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2'>
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className='relative overflow-hidden rounded-xl border-0 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl'
            >
              <CardHeader className='flex flex-col items-center space-y-4'>
                <div className='relative h-32 w-32 overflow-hidden rounded-full border-4 border-blue-400'>
                  <Image src={member.image} alt={member.name} fill className='object-cover' />
                </div>
                <CardTitle className='text-2xl font-semibold'>{member.name}</CardTitle>
                <CardDescription className='text-xl font-semibold text-blue-400'>{member.role}</CardDescription>
              </CardHeader>
              <CardContent className='space-y-4 px-6 text-center text-xl'>
                <p className=''>{member.specialty}</p>
                <p className=''>{member.experience}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
