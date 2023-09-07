import React from 'react'

export const Footer = () => {
  return (
    <div>
      <div className='relative flex bg-[#111111] h-32 justify-center items-center'>
        <p className='max-big:hidden absolute left-5 font-sans font-light'>Created By <span className='text-[orange]'>- Valton Kasami</span></p>
    <div className='flex space-x-7 items-center justify-center'>
        <a href='/about'><h1 className='text-xl hover:text-[orange]'>About</h1></a>
        <a className='max-sm:hidden' href='#'><h1 className='text-xl hover:text-[orange]'>News</h1></a>
        <a href='#'><h1 className='text-xl hover:text-[orange]'>Carrers</h1></a>
        <a href='#'><h1 className='text-xl hover:text-[orange]'>News</h1></a>
        
        <a href='/contact'><h1 className='text-xl hover:text-[orange]'>Contact</h1></a>
    </div>
    <p className='font-sans font-light absolute right-5 max-big:hidden'>@2023 - All rights are reserved</p>
    </div>
    </div>
  )
}