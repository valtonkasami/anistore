import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setVisibility } from '../../../features/redux';
import { addProduct1 } from '../../../features/redux';

export const Productz = (props) => {
    const {id, title, price, description, image1, image2, image3} = props.data
    const [ picture, setPicture ] = useState(`${image1}`)
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(1)

  return (
    <div className='flex flex-col items-center'>
        <div className='mt-10 text-2xl h-[40px] px-5 bg-[#444444] rounded-[20px] flex items-center justify-center ipad:hidden'>{title}</div>
        <div className='h-[550px] mt-9 max-sm:mt-[235px] max-ipad:mt-[265px] flex max-ipad:flex-col items-center justify-center space-x-[40px] max-ipad:space-x-0'>
        <div className='custom max-ipad:mb-10'>
            <img className='one w-[500px] max-ipad:mb-2 h-[500px] max-big:w-[400px] max-big:h-[400px] max-sm:h-[350px] max-sm:w-[350px] ml-2 max-ipad:ml-0 rounded-[20px] border-4 border-solid border-[silver] hover:border-[orange]' src={picture} />
            
                <img onMouseEnter={() => setPicture(`${image1}`)} className='w-[90px] h-[90px] max-sm:w-[100px] max-sm:h-[100px] max-big:w-[80px] max-big:h-[80px] max-ipad:w-[120px] max-ipad:h-[120px] two rounded-[20px] border-4 border-solid border-[silver] hover:border-[orange]' src={image1} />
                <img onMouseEnter={() => setPicture(`${image2}`)} className='w-[90px] h-[90px] max-sm:w-[100px] max-sm:h-[100px] max-big:w-[80px] max-big:h-[80px] max-ipad:w-[120px] max-ipad:h-[120px] three rounded-[20px] border-4 border-solid border-[silver] hover:border-[orange]' src={image2} />
                <img onMouseEnter={() => setPicture(`${image3}`)} className='w-[90px] h-[90px] max-sm:w-[100px] max-sm:h-[100px] max-big:w-[80px] max-big:h-[80px] max-ipad:w-[120px] max-ipad:h-[120px] four rounded-[20px] border-4 border-solid border-[silver] hover:border-[orange]' src={image3} />
            
        </div>

        <div className='h-[500px] w-[700px] max-ipad:w-[400px] max-ipad:h-[1100px] max-big:w-[600px] max-big:h-[400px] bg-[#444444] rounded-[20px] max-sm:w-[350px]'>
            <div className='ml-[50px] max-ipad:mr-[20px] mt-[40px] max-ipad:ml-[20px] max-ipad:mt-[20px]'>
            <h1 className='text-2xl mb-1 max-ipad:hidden'>{title} - ${price}</h1>
            <h1 className='text-2xl mb-1 ipad:hidden'>Price <span className='ml-2'>- ${price}</span></h1>
            <div className='max-big:h-[120px] overflow-auto'>
            <p className='w-[600px] max-sm:w-[290px] max-ipad:w-[340px] max-big:w-[500px] font-sans'>{description}</p>
            </div>    
                <div className='flex items-center mt-[30px] justify-left space-x-5'>
                    <h1 className='text-4xl max-sm:text-3xl mb-1'>Quantity</h1>
                <div className='flex ml-2 border-solid border-2 border-[white] w-[170px] items-center'>    
                <button onClick={() => {if (amount > 1) { setAmount(amount - 1) }}} className='bg-[black] text-[white] px-5 h-10 text-3xl'>-</button>
                <div className='text-[white] w-[60px] text-2xl flex justify-center'>{amount}</div>
                <button onClick={() => {if (amount < 20) { setAmount(amount + 1) }}} className='text-[black] bg-[black] text-[white] px-5 h-10 text-3xl'>+</button>
                </div>
                </div>

                <div className='flex max-ipad:mt-9 max-ipad:flex-col max-ipad:space-x-0 items-center h-[135px] max-ipad:h-[190px] space-x-5 text-3xl'>
                    <button onClick={() => {dispatch(addProduct1({id, image1, title, price, amount})); dispatch(setVisibility());}} className='max-sm:w-[300px] max-ipad:mb-5 active:border-[orange] hover:scale-110 transition ease-in-out hover:border-4 bg-black h-[70px] w-[250px] max-ipad:w-[350px] rounded-full'>ADD TO CART</button>
                    <button className='max-sm:w-[300px] cursor-not-allowed hover:scale-110 transition ease-in-out hover:border-[orange] hover:bg-[white] hover:text-[orange] border-solid border-4 bg-[orange] h-[70px] w-[250px] max-ipad:w-[350px] rounded-full'>BUY NOW</button>
                </div>

            </div>
        </div>
        </div>
    </div>
  )
}