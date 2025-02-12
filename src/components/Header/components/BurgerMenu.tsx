'use client'

import Link from 'next/link'
import React from 'react'
import { FaBars } from 'react-icons/fa'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar'

interface BurgerMenuProps {
  menuItems: {
    label: string

    href: string

    icon: React.ReactNode
  }[]
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ menuItems }) => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <FaBars className='h-5 w-5 cursor-pointer' />
        </MenubarTrigger>
        <MenubarContent className='shadow-l left-2 mr-2 space-y-2 rounded-lg bg-white p-4'>
          {menuItems.map((item, index) => (
            <MenubarItem key={index} className='flex justify-center'>
              <Link href={item.href} className='flex items-center text-lg font-semibold'>
                {item.icon}
                <span className='ml-2'>{item.label}</span>
              </Link>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
