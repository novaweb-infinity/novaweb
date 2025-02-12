import Image from 'next/image'

import { rubikMonoOne } from '@/app/layout'

export const HeroSection = () => {
  return (
    <div className='bg-background-image relative flex min-h-screen items-center justify-center overflow-hidden'>
      <div className='relative z-10 flex items-center justify-center'>
        <div className='container flex flex-col items-center justify-center text-center'>
          <div className='w-fit items-center space-y-48'>
            <h1
              className={`flex w-fit flex-col text-6xl font-bold text-white sm:text-7xl md:text-8xl lg:text-9xl ${rubikMonoOne.className}`}
            >
              NOVAWEB{' '}
              <span className='rubik-one self-end bg-gradient-to-r from-[#3898FF] to-[#3898FF] bg-clip-text text-5xl text-transparent sm:text-6xl md:text-7xl lg:text-8xl'>
                infinity
              </span>
            </h1>
            <p className='text-2xl text-white/80 sm:text-3xl md:text-4xl lg:text-5xl'>Tu socio en innovación digital</p>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-transparent via-[#001a2c]/50 to-transparent' />
    </div>
  )
}
