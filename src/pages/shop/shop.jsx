/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {PRODUCTS} from '../../products1'
import {Product} from './product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { setCartClick } from '../../features/redux'
import { setNavbarClick } from '../../features/redux' 

export const Shop = () => {
    const dispatch = useDispatch()
    const cartClick = useSelector((state) => state.cartClick)
    const navbarClick = useSelector((state) => state.navbarClick)
  return (
    <div className='bg-[#222222]'>
        <div onClick={() => dispatch(setNavbarClick())} className={navbarClick}></div>
        <div onClick={() => dispatch(setCartClick())} className={cartClick}></div>
        <div className='flex flex-col items-center'>
            <h1 className='pt-[35px] pb-3 text-5xl pr-1'>#staycool</h1>
            <p className='tracking-wide text-[19px] font-sans font-light'>Save more with coupons & up to 70% off!</p>
        </div>
        <div className='flex justify-center mt-[50px]'>
        <div className='grid grid-cols-4 gap-y-[40px] gap-x-[50px] max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
            {PRODUCTS.map((product) => (
                <Product key={product.id} data={product} />
            ))}
        </div>
        </div>
        <div className='flex justify-center items-center h-[150px] space-x-2'>
            <a href="#"><button className='transition ease-in-out delay-50 hover:scale-110 focus:outline-none focus:ring focus:ring-[silver] text-2xl bg-[orange] h-[50px] w-[50px] rounded-[10px]'>1</button></a>
            <a href="/shop2"><button className='transition ease-in-out delay-50 hover:scale-110 focus:outline-none focus:ring focus:ring-[silver] text-2xl bg-[orange] h-[50px] w-[50px] rounded-[10px]'>2</button></a>
            <a href="/shop2"><button className='transition ease-in-out delay-50 hover:scale-110 focus:outline-none focus:ring focus:ring-[silver] text-3xl bg-[orange] h-[50px] w-[60px] rounded-[10px]'><FontAwesomeIcon icon={faArrowRight} /></button></a>
        </div>
    </div>
  )
}
