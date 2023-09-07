import React from 'react'
import {PRODUCTS2} from '../../products2'
import {Product} from './product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { setCartClick } from '../../features/redux'
import { setNavbarClick} from '../../features/redux'

export const Shop2 = () => {
    const dispatch = useDispatch()
    const cartClick = useSelector((state) => state.cartClick)
    const navbarClick = useSelector((state) => state.navbarClick)
    return (
    <div className='bg-[#222222]'>
        <div onClick={() => dispatch(setNavbarClick())} className={navbarClick}></div>
        <div onClick={() => dispatch(setCartClick())} className={cartClick}></div>
        <div className='flex flex-col items-center'>
            <h1 className='pt-[28px] pb-3 text-6xl'>#staycool</h1>
            <p className='tracking-wide text-[19px] font-sans font-light'>Save more with coupons & up to 70% off!</p>
        </div>
        <div className='flex justify-center mt-[50px]'>
        <div className='grid grid-cols-4 gap-y-[40px] gap-x-[50px] max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
            {PRODUCTS2.map((product) => (
                <Product data={product} />
            ))}
        </div>
        </div>
        <div className='flex justify-center items-center h-[150px] space-x-2'>
            <a href="/shop"><button className='transition ease-in-out delay-50 hover:scale-110 focus:outline-none focus:ring focus:ring-[silver] text-2xl bg-[orange] h-[50px] w-[50px] rounded-[10px]'>1</button></a>
            <a href="#"><button className='transition ease-in-out delay-50 hover:scale-110 focus:outline-none focus:ring focus:ring-[silver] text-2xl bg-[orange] h-[50px] w-[50px] rounded-[10px]'>2</button></a>
            <a href="#"><button className='transition ease-in-out delay-50 hover:scale-110 focus:outline-none focus:ring focus:ring-[silver] text-3xl bg-[orange] h-[50px] w-[60px] rounded-[10px]'><FontAwesomeIcon icon={faArrowRight} /></button></a>
        </div>
    </div>
  )
}
