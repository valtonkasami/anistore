import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCartClick } from '../../features/redux'
import { setNavbarClick } from '../../features/redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMessage} from '@fortawesome/free-solid-svg-icons'
import {faPhone} from '@fortawesome/free-solid-svg-icons'
import {faMailBulk} from '@fortawesome/free-solid-svg-icons'
import {faMapLocation} from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {

    const dispatch = useDispatch()
    const cartClick = useSelector((state) => state.cartClick)
    const navbarClick = useSelector((state) => state.navbarClick)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  

  return (
    <div>
        <div onClick={() => dispatch(setNavbarClick())} className={navbarClick}></div>
        <div onClick={() => dispatch(setCartClick())} className={cartClick}></div>

        <div className='flex flex-col items-center justify-center mb-16'>
            <h2 className='text-6xl mt-10 pr-5 mb-7'>#ContactUs</h2>
            <div className='bg-[#444444] rounded-[20px] px-10 max-sm:px-3 flex max-lg:flex-col max-lg:text-center space-x-[50px] max-lg:space-x-[0]'>
              <div className='flex flex-col max-lg:items-center'>
              <h1 className='text-5xl mt-10 mb-5 pt-1'>Need additional <br/> information?</h1>
              <p className='w-[400px] max-sm:w-[360px] font-sans'>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
              <div className='flex items-center space-x-2 hover:text-[orange] cursor-pointer'><FontAwesomeIcon className='mt-5 text-[17px]' icon={faPhone}/> <p className='font-sans text-xl mt-5 font-[500]'>(123) 456-7869</p></div>
              <div className='flex items-center space-x-2 ml-[-4px] hover:text-[orange] cursor-pointer'><FontAwesomeIcon className='mt-2 text-xl' icon={faMailBulk}/> <p className='font-sans text-xl mt-2 font-[500]'>anistore@animail.com</p></div>
              <div className='flex items-center space-x-2 ml-[-3px] hover:text-[orange] cursor-pointer'><FontAwesomeIcon className='mt-2 text-xl' icon={faMapLocation}/> <p className='font-sans text-xl mt-2 font-[500]'>Tokyo, Japan</p></div>
              </div>
            <form>
                <label className='block text-2xl mt-10' htmlFor="name">Full Name <span className='text-[orange]'>*</span></label>
                <input
                    className='bg-[silver] border-none text-black text-md font-medium font-sans pl-6 py-3 w-[500px] max-sm:w-[340px] rounded-[5px]'
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder='E.g: "John Cena"'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                /><br /><br />

                <label className='block text-2xl' htmlFor="email">Email <span className='text-[orange]'>*</span></label>
                <input
                className='max-sm:w-[340px] bg-[silver] text-black text-md font-medium font-sans pl-6 py-3 w-[500px] rounded-[5px]'
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder='youremail@example.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /><br /><br />

                <label className='block text-2xl' htmlFor="message">Tell us about it <span className='text-[orange]'>*</span></label>
                <input
                    className='max-sm:w-[340px] bg-[silver] text-black text-md font-medium font-sans pl-6 py-3 w-[500px] rounded-[5px]'
                    type="text"
                    id="message"
                    name="message"
                    required
                    placeholder='Write Here...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    /><br /><br />
                <div className='relative rounded-[5px] h-[50px] mb-10 text-center bg-[orange] hover:bg-[#b67f00] hover:drop-shadow-xl w-[500px] max-sm:w-[340px] max-sm:ml-[10px]'>
                  <input className='w-[500px] max-sm:w-[340px] left-0 h-[50px] absolute bg-blac' type="submit" value='' />
                  <div className='flex items-center justify-center h-[50px] space-x-2'><FontAwesomeIcon className='text-2xl pt-1' icon={faMessage} /> <h1 className='text-2xl'>Send Message</h1></div>
                </div>
            </form>
            </div>

        </div>

    </div>
  )
}