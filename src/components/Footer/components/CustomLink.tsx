import Link from 'next/link'

import { CustomLinkProps } from '@/interfaces/interfaces'

export const CustomLink: React.FC<CustomLinkProps> = ({ href, icon: Icon, label }) => {
  return (
    <Link href={href} target='_blank' rel='noopener noreferrer' className='hover:text-primary'>
      {Icon ? <Icon className='size-8 text-white' /> : <p className='text-white'>{label}</p>}
      <span className='sr-only'>{label}</span>
    </Link>
  )
}
