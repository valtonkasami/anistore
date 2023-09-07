import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { setVisibility } from '../../features/redux';
import { addProduct } from '../../features/redux';

export const Product =  (props) => {
    const {amount, id, route, name, title, price, description, image1} = props.data
    const dispatch = useDispatch();


    const handleDivClick = () => {
        window.location.href = `${route}`;
      };
    
      const handleButtonClick = (e) => {
        e.stopPropagation();
        dispatch(addProduct({id, image1, title, price, amount}));
        dispatch(setVisibility());
      };

  return (
    <div onClick={handleDivClick} className='cursor-pointer border-solid border-4 border-[silver] hover:border-[orange] h-[410px] w-[290px] bg-[white] rounded-[30px] text-[black]'>
        <div className='flex flex-col items-center'>
        <img src={image1} className='border-solid border-2 border-[silver] mt-[13px] w-[260px] h-[260px] rounded-[30px] overflow-hidden'/>
        </div>
        <div className='pt-3'><p className='ml-[10px] font-sans font-[500] text-[#777777] tracking-wide text-[15px]'>anistore</p></div>
        <div className='ml-[10px] text-[20px]'>{title}</div>
        <div className='ml-[10px] flex'>
            <div className='flex flex-col'>
            <div><FontAwesomeIcon className="text-1xl" icon={faStar} /> <FontAwesomeIcon className="text-1xl" icon={faStar} /> <FontAwesomeIcon className="text-1xl" icon={faStar} /> <FontAwesomeIcon className="text-1xl" icon={faStar} /> <FontAwesomeIcon className="text-1xl" icon={faStar} /></div>        
        <div className='text-[23px] text-[#777777]'>${price}</div>
            </div>
        <div className='flex justify-end items-end h-[50px] w-[155px]'><button onClick={handleButtonClick} className='border-solid border-[1px] border-[black] bg-[#3333] h-9 w-9 rounded-full flex justify-center items-center transition ease-in-out delay-50 hover:scale-110 focus:outline-none focus:ring focus:ring-[orange]'><FontAwesomeIcon className="text-1xl" icon={faCartShopping} /></button></div>
        </div>
    </div>
  )
}