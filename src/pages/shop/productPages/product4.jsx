import React from 'react'
import { Productz } from './product'
import { PRODUCTS } from '../../../products1'

import { Product } from '../../shop/product'
import { TRENDING } from '../../../trendingNow'

import { useDispatch, useSelector } from 'react-redux'
import { setCartClick } from '../../../features/redux'
import { setNavbarClick } from '../../../features/redux'

export const Product4 = () => {

    const dispatch = useDispatch()
    const cartClick = useSelector((state) => state.cartClick)
    const navbarClick = useSelector((state) => state.navbarClick)
    const closeMenu = () => {
        document.body.style.overflow = 'auto';
      };
  
    return (
      <div>
          <div onClick={() => {dispatch(setNavbarClick()); closeMenu()}} className={navbarClick}></div>
          <div onClick={() => {dispatch(setCartClick()); closeMenu()}} className={cartClick}></div>
        
        <div>
            <Productz data={PRODUCTS[3]}/>
        </div>

        <div className='flex flex-col items-center text-5xl mb-10 mt-10 max-ipad:mt-[300px] max-sm:mt-[270px]'>
            <h1 className='pb-3'>Trending Now</h1>
            <p className='tracking-wide text-[19px] font-sans font-light'>Save more with coupons & up to 70% off!</p>
        </div>
        
        <div className='flex items-center justify-center mb-10'>
        <div className='grid grid-cols-4 gap-y-[40px] gap-x-[50px] max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
            {TRENDING.map((product) => (
                <Product key={product.id} data={product} />
            ))}
        </div>
        </div>        

    </div>
  )
}