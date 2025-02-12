import Link from 'next/link'
import React from 'react'

import { Button } from '@/components/ui/button'

export interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
}

export const NavItem: React.FC<NavItemProps> = ({ href, icon, label }) => {
  return (
    <li>
      <Button variant='ghost' asChild>
        <Link href={href} className='flex items-center'>
          {icon}
          <span className='ml-2 text-xl'>{label}</span>
        </Link>
      </Button>
    </li>
  )
}
