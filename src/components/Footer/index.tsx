import Image from 'next/image'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

import { CustomLink } from '@/components/Footer/components/CustomLink'
import { Separator } from '@/components/ui/separator'
import { novaWeb } from '@/constants/constants'

export const Footer = () => {
  return (
    <footer className='mt-auto bg-gradient-to-tr from-[#4A74D9] via-[#4A74D9] to-[#6A90E5]'>
      <div className='mx-auto px-16 py-6'>
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <div className='flex items-center space-x-2'>
            <Image width={120} height={120} src='/images/logo-circle.png' alt='nova web logo' />
          </div>
          <div className='flex space-x-6'>
            <CustomLink href='https://x.com/novawebinfinity' icon={FaXTwitter} label='Facebook' />
            <CustomLink href='https://www.instagram.com/novawebinfinity/' icon={FaInstagram} label='Instagram' />
            <CustomLink href='https://linkedin.com' icon={FaLinkedinIn} label='LinkedIn' />
          </div>
        </div>
        <Separator className='my-4' />
        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
          <div className='flex gap-4 space-x-6 text-xl'>
            <CustomLink href='#' label='FAQ' />
          </div>
          <p className='text-center text-xl text-white'>
            © {new Date().getFullYear()} {novaWeb}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
