import React from 'react'
import FooterLogo from '../images/Asset 18@4x.png'
import { navigation } from './Nav'
const Footer = () => {
  return (
    <>
      <div className='mx-auto max-w-7xl px-2 py-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between'>
          <div className='hidden md:block'>
            <img src={FooterLogo} className=' max-w-[165px] max-h-[280px]' alt='little lemon logo footer' />
          </div>
          <div className='grid grid-cols-2 gap-5'>
            {/* Doormat Navigation */}
            <div className='px-4'>
              <h4 className=' font-bold text-lg text-[#495E57]'>Doormat Navigation</h4>
              <div className='flex flex-col'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='rounded-md py-1 text-sm font-medium'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div >
            {/* Contact */}
            <div className='px-4'>
              <div className='flex flex-col'>
                <h4 className=' font-bold text-lg text-[#495E57]'>Contact</h4>
                <p>abc@email.com</p>
                <p>123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer