import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faRemove } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { addProduct } from '../features/redux';
import {decreaseAmount} from '../features/redux'
import {removeProduct} from '../features/redux'
import {setCartClick} from '../features/redux'
import { setNavbarClick } from '../features/redux'
import  cart  from '../img/home/prettycart.png'

export const Navbar = () => {
    const amount = useSelector((state) => state.amount);
    const visibility = useSelector((state) => state.visibility);
    const visibility2 = useSelector((state) => state.visibility2);
    const products = useSelector((state) => state.products);
    const subtotal = useSelector((state) => state.total)
    const cartSlide = useSelector((state) => state.cartSlide)
    const navbarSlide = useSelector((state) => state.navbarSlide)

    const dispatch = useDispatch();
    const formattedNumberString = subtotal.toFixed(2);
    const formattedNumber = parseFloat(formattedNumberString);

  return (
    <div>
         
    <div className='flex items-center text-2xl  h-20 pr-16 max-sm:pr-7'>
                <div className={navbarSlide}>
            <button onClick={() => {dispatch(setNavbarClick())}} className='transition ease-in-out delay-50 hover:text-[orange] ml-[240px] mt-3 lg:hidden'><FontAwesomeIcon className='text-3xl' icon={faRemove} /></button>
            <a href="/" className='transition ease-in-out delay-50 hover:text-[orange] w-0 pl-5 pb-3'>Home</a>
            <a href="/shop" className='transition ease-in-out delay-50 hover:text-[orange] w-0 pl-5 pb-3'>Shop</a>
            <a href="/about" className='transition ease-in-out delay-50 hover:text-[orange] w-0 pl-5 pb-3'>About</a>
            <a href='/contact' className='transition ease-in-out delay-50 hover:text-[orange] w-0 pl-5'>Contact</a>
                </div>
    </div>


        <div className='fixed top-0 right-0 left-0 z-[998]'>
    <div className='relative flex justify-between bg-[#222222] h-20 drop-shadow-[0_0px_5px_rgba(0,0,0,1)]'>
    <div className='flex items-center pl-16 max-sm:pl-7 text-5xl'>
        <a className='transition ease-in-out delay-50 hover:text-[orange]' href="/"><h1>AniStore</h1></a>
    </div>    
    <div className='flex items-center text-2xl  h-20 pr-16 max-sm:pr-7'>
        <div className='flex'>
            <div className='flex space-x-10'>
                <div className='max-lg:hidden space-x-10'>
            <a href="/" className='transition ease-in-out delay-50 hover:text-[orange]'>Home</a>
            <a href="/shop" className='transition ease-in-out delay-50 hover:text-[orange]'>Shop</a>
            <a href="/about" className='transition ease-in-out delay-50 hover:text-[orange]'>About</a>
            <a href='/contact' className='transition ease-in-out delay-50 hover:text-[orange]'>Contact</a>
                </div>
                <div className='flex'>    
            <button onClick={() => {dispatch(setCartClick(1))}}><FontAwesomeIcon className="transition ease-in-out delay-50 hover:text-[orange]" icon={faCartShopping} /></button>
            <button onClick={() => {dispatch(setNavbarClick(1))}} className='lg:hidden ml-5 text-[27px]'><FontAwesomeIcon className='transition ease-in-out delay-50 hover:text-[orange]' icon={faBars} /></button>    
                </div>
            </div>
           {visibility && <div onClick={() => {dispatch(setCartClick(1))}} className='cursor-pointer absolute right-[55px] max-lg:right-[99px] max-sm:right-[64px] top-[15px] rounded-full bg-[orange] flex items-center justify-center h-[22px] w-[22px] font-sans font-bold text-[15px]'>{amount}</div>}
        </div>
    </div>
    
    </div>
    </div>
    <div className={cartSlide}>
        <div className='flex items-center justify-between'>
    <h1 className='ml-[30px] text-2xl py-7'>Your Shopping Cart ({amount})</h1> <button className='w-[0px] mr-[56px]' onClick={() => {dispatch(setCartClick())}}><FontAwesomeIcon className='transition ease-in-out delay-50 hover:text-[orange] text-3xl' icon={faRemove} /></button>
        </div>
        { visibility2 && <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center justify-center mt-[50px] mb-[40px]'>
            <img alt='cart' className='w-[300px]' src={cart} />
            <h1 className='mb-[0px] text-2xl'>Your cart is empty</h1>
            </div>
            <button onClick={() => {dispatch(setCartClick())}} className='border-solid border-[4px] border-[white] transition ease-in-out delay-50 hover:scale-110 focus:outline-none focus:ring focus:ring-[orange] text-3xl bg-[orange] h-[60px] w-[280px] rounded-full'>Continue Browsing</button>
           </div>}
       {visibility && <div className='w-[510px h-[70vh] max-sm:h-[65vh] overflow-y-auto flex flex-col items-center'>
        {products.map((product) => (
            <div key={product.id} className='bg-[white] border-solid border-4 max-sm:border-[orange] border-[silver] mb-[20px] max-sm:pb-3 w-[440px] rounded-[15px] flex max-sm:w-[330px] max-sm:h-[480px] max-sm:flex-col max-sm:items-center '>
                <div className='sm:bg-[silver] sm:rounded-l-[15px]'>
                <img alt='productimg' className='mr-1 h-[100px] rounded-l-[10px] max-sm:border-[4px] border-[silver] max-sm:rounded-[10px] max-sm:w-[297px] max-sm:h-[297px] max-sm:mt-[9px] ' src={product.image1} />
                </div>
                <div className='max-sm:mt-[0px]'>
                <div className='flex justify-between w-[315px] max-sm:flex-col max-sm:items-center'>
                <h1 className='text-[black] pl-[6px] pt-[10px] text-[18px] max-sm:text-[23px]'>{product.title}</h1>
                <h1 className='pt-[8px] text-[#777777] text-[22px] max-sm:text-3xl max-sm:mt-[5px]'>${product.price}</h1>
                </div>
                <div className='flex mt-4 ml-3 max-sm:ml-2 max-sm:mt-3'>
                <div className='flex bg-[black] h-7 max-sm:h-10 max-sm:mt-2'>
                <button onClick={() => dispatch(decreaseAmount(product.id)) } className='bg-[black] text-[white] px-3 h-7 max-sm:px-5 max-sm:h-10 max-sm:text-3xl'>-</button>
                <div className='bg-white h-7 max-sm:h-10 text-[black] border-2 border-black border-solid w-[40px] max-sm:w-[60px] max-sm:text-2xl flex justify-center items-center bg-[white]'>{product.amount}</div>
                <button onClick={() => dispatch(addProduct({id: product.id})) } className='text-[black] bg-[black] h-7 text-[white] px-3 max-sm:px-5 max-sm:h-10 max-sm:text-3xl'>+</button>
                </div>
                <div className='text-[black] bg-[] ml-[165px] max-sm:ml-[77px] max-sm:mb-[1px] max-sm:mr-0 mb-[-4px] flex items-end text-2xl max-sm:text-3xl '><button onClick={() => dispatch(removeProduct(product.id)) } className='border-solid border-[1px] border-[black] bg-[#3333] h-9 w-9 max-sm:h-[50px] max-sm:w-[50px] rounded-full flex justify-center items-center transition ease-in-out delay-50 hover:scale-110 focus:outline-none focus:ring focus:ring-[orange]'><FontAwesomeIcon className="" icon={faRemove} /></button></div>
                </div>
                </div>
            </div>
        ))}
        </div> }
        { visibility && <div className='mt-4'> <hr class='line' />
        <div className='mt-2 flex items-end justify-between max-sm:flex-col max-sm:items-center'>
            <div className='ml-[30px] max-sm:ml-0'>
                <h1 className='text-[26px] mb-1 max-sm:text-4xl'>Subtotal</h1>
                <h1 className='text-2xl max-sm:text-center max-sm:text-3xl'>${formattedNumber}</h1>
            </div>

            <div className='mr-[30px] max-sm:mr-0 text-2xl max-sm:mt-4 max-sm:text-3xl'><button className='hover:bg-white hover:border-[orange] hover:text-[orange] cursor-not-allowed border-solid border-[4px] border-[white] bg-[orange] text-[white] h-[45px] w-[130px] max-sm:h-[50px] max-sm:w-[143px] rounded-full flex justify-center items-center transition ease-in-out delay-50 hover:scale-110'>Checkout</button></div>

        </div> </div>}
        <div>
        </div>
    </div>

    </div>
  )
}