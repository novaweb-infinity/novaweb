'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaEnvelope, FaTools, FaUsers } from 'react-icons/fa'

import { BurgerMenu } from './components/BurgerMenu'
import { NavItem } from './components/NavItem'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const menuItems = [
    { label: 'Sobre Nosotros', href: '#nosotros', icon: <FaUsers /> },
    { label: 'Servicios', href: '#servicios', icon: <FaTools /> },
    { label: 'Contacto', href: '#contacto', icon: <FaEnvelope /> },
  ]

  return (
    <header className='fixed z-20 flex w-full items-center justify-between bg-gradient-to-br from-[#4A74D9] via-[#4A74D9] to-[#6A90E5] py-6 pl-16 pr-12 shadow-md transition-colors duration-300'>
      <div className='flex items-center'>
        <Image width={120} height={120} src='/images/logo-circle.png' alt='nova web logo' />
      </div>
      <ul className='hidden flex-wrap justify-end space-x-2 text-white md:flex'>
        {menuItems.map((item, index) => (
          <NavItem key={index} {...item} />
        ))}
      </ul>
      <div className='absolute right-2 top-5 md:hidden'>
        <BurgerMenu menuItems={menuItems} />
      </div>
    </header>
  )
}
