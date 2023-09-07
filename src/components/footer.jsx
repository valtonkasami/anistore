/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export const Footer = () => {
  return (
    <div>
      <div className='flex bg-[#111111] h-32 justify-center items-center'>
    <div className='flex space-x-7 items-center justify-center'>
        <a href='/about'><h1 className='text-xl hover:text-[orange]'>About</h1></a>
        <a className='max-sm:hidden' href='#'><h1 className='text-xl hover:text-[orange]'>News</h1></a>
        <a href='#'><h1 className='text-xl hover:text-[orange]'>Carrers</h1></a>
        <a href='#'><h1 className='text-xl hover:text-[orange]'>News</h1></a>
        
        <a href='/contact'><h1 className='text-xl hover:text-[orange]'>Contact</h1></a>
    </div>
    </div>
    </div>
  )
}