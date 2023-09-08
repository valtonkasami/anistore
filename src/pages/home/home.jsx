import React from 'react';
import narutoImage from '../../img/home/naruto.png';
import benzema from '../../img/home/benzema.jpg';
import girl from '../../img/home/p6.jpeg';
import { useSelector, useDispatch } from 'react-redux'
import { setCartClick } from '../../features/redux';
import { setNavbarClick } from '../../features/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { Product } from '../shop/product'
import { TRENDING } from '../../trendingNow'

export const Home = () => {
    const dispatch = useDispatch()
    const cartClick = useSelector((state) => state.cartClick)
    const navbarClick = useSelector((state) => state.navbarClick)
    const closeMenu = () => {
        document.body.style.overflow = 'auto';
      };
  
    return (
      <div className='bg-[#fbe407]'>
          <div onClick={() => {dispatch(setNavbarClick()); closeMenu()}} className={navbarClick}></div>
          <div onClick={() => {dispatch(setCartClick()); closeMenu()}} className={cartClick}></div>
        <div id='hero' className='pt-[70px] pb-[70px] max-sm:pb-[40px] overflow-hidden flex justify-center items-center space-x-[150px] max-xl:space-x-[50px] max-ipad:space-x-[0] max-ipad:flex-col-reverse max-ipad:text-center text-7xl max-sm:text-5xl'>
            <div className=''>
                <h1 className='drop-shadow max-sm:text-5xl/[55px] hero-stroke max-sm:mb-[20px] max-ipad:mb-[25px] ipad:mb-[5px]'>
                The Best<br/>
                Cool and Durable<br/>
                Anime Figures
                </h1>
                <a href="/shop"><button className='border-4  border-[#e0ca00] hover:border-[white] drop-shadow transition ease-in-out delay-50 hover:scale-110 hover:bg-[orange] hover:text-[white] focus:outline-none  focus:ring focus:ring-[orange] bg-white text-[#e0ca00] text-5xl py-2 px-7 ipad:mt-4 max-ipad:text-7xl max-sm:text-6xl rounded-[50px]'>Shop Now</button></a>
            </div>
            <div className='max-sm:w-[300px] max-sm:h-[300px] max-ipad:mb-[80px] flex justify-center items-center bg-[#e0ca00] w-[500px] h-[500px] rounded-full'>
            <div className='max-sm:w-[220px] max-sm:h-[220px] bg-[#222222] w-[380px] h-[380px] rounded-full flex justify-center items-center'>
            <img className='pr-[30px] max-sm:h-[400px] h-[600px]' src={narutoImage} alt='naruto'/>
            </div>
            </div>
        </div>
        <div id="section2" className='bg-[#222222] rounded-t-[60px]'>
            <div className='text-5xl flex flex-col items-center justify-center h-[200px] max-sm:h-[150px]'>
                <h1 className='text-center max-sm:text-[33px]'>
                    Our Most <span className='text-[#fbe407]'>Popular</span><br/>
                    <span className='text-[#fbe407]'>Trending</span> Now Characters
                </h1>

                  
            </div>
            <div className='flex justify-center'>
            <div className='bg-[#333333] w-fit px-10 rounded-[50px] py-10 border-4 border-[#555555] hover:border-[yellow] flex items-center justify-center'>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-4 gap-y-[40px] gap-x-[50px] max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                {TRENDING.map((product) => (
                <Product key={product.id} data={product} />
                ))}
                </div>
                </div> 
                </div>
        </div>
        <div className='flex items-center justify-center mt-5'>
        <a href="/shop"><button className='border-4  border-[white] hover:border-[#e0ca00] drop-shadow transition ease-in-out delay-50 hover:scale-110 hover:bg-[white] hover:text-[#e0ca00] focus:outline-none  focus:ring focus:ring-[white] bg-[orange] text-[white] text-5xl py-2 px-7 ipad:mt-4 max-ipad:text-7xl max-sm:text-6xl rounded-[50px]'>See More</button></a>
        </div>

        <div className='flex justify-center'>
        <div className='text-3xl h-16 rounded-full bg-[#444444] mt-14 flex items-center justify-center'>
            <h1 className='ml-5 max-big:hidden text-[silver] cursor-pointer hover:text-[orange] mr-5'>WHY CHOOSE ANISTORE?</h1>
            <h1 className='text-[silver] max-sm:hidden max-big:ml-5 cursor-pointer hover:text-[orange] mr-5'>WHO WE ARE?</h1>
            <h1 className='max-ipad:hidden text-[silver] cursor-pointer hover:text-[orange] mr-5'>WHAT WE ARE ABOUT?</h1>
            <h1 className='mr-5 max-sm:ml-6 max-sm:text-[29px] text-[silver] cursor-pointer hover:text-[orange]'>LEARN MORE ABOUT US 👇</h1>
        </div>
        </div>
        
        <div className='flex items-center justify-center'>
        <div className='bg-[#444444] rounded-[20px] mx-5 mt-5 text-center w-[1300px]'>
            <p className='mr-[27px] ml-[27px] pt-7 pb-8'>
            <span className="text-2xl">About AniStore:</span><br/>

            <span className="font-sans">Welcome to AniStore, where Your Anime Dreams come to Life, your ultimate destination for all things anime! At AniStore, we're more than just an eCommerce platform; we're your gateway to a world filled with enchanting characters, meticulously crafted figurines, and a vibrant community of like-minded anime enthusiasts.</span><div className='mb-5'/>

            <span className="text-2xl">Our Story:</span><br/>

            <span className="font-sans">Founded by a group of passionate anime devotees in 2012, AniStore was born from a shared love for the intricate storytelling, vibrant personalities, and breathtaking artistry that define the anime universe. What began as a modest online store has since blossomed into a thriving community, uniting fans from across the globe and nurturing a sense of camaraderie among fellow anime aficionados.</span><div className='mb-5'/>

            <span className="text-2xl">Our Mission:</span><br/>

            <span className="font-sans">Our mission is simple yet profound: to provide a haven for anime fans to explore, collect, and celebrate their beloved characters. We are dedicated to meticulously curating a vast collection of top-tier anime figurines, meticulously designed to bring both iconic and lesser-known characters to life in extraordinary detail. Our aim is to ignite your passion, whether you're a seasoned collector or embarking on your anime journey for the first time.</span></p>
            </div>
            

        </div>
        
        <h1 className='text-center text-[27px] mt-16'>Reviewed by People</h1>
        <h1 className='text-center text-5xl mt-1'>Customer's Testimonials</h1>
        <div className='flex justify-center mt-2'><p className='w-[655px] text-center font-sans'>Discover the positive impact we've made on our costumers by reading through their testimonials. Our clients have bought and fully experienced our Figurines, and they're eager to share their positive experiences with you.</p></div>
        
        <div className='flex max-ipad:flex-col max-ipad:space-x-0 items-center justify-center space-x-7 mt-10'>
            <div className='drop-shadow-xl max-ipad:mb-5 max-sm:w-[350px] max-sm:h-[370px] w-[500px] h-[302px] bg-[#444444] rounded-[20px]'>
                <div className='mx-12 max-sm:mx-8 mt-10'>
                    <h1 className='font-sans font-medium text-2xl'>
                    "I bought some Figurines for my kids and had an amazing experience! The website was pretty and the Figurines were very high quality. "
                    </h1>
                    <div className='flex items-center'>
                <img className='border-[3px] border-[orange] h-[70px] rounded-full mt-[30px]' alt='benzema' src={benzema}/>
                    <div className='flex items-center'>
                    <div className='pt-8 ml-5'>
                        <h1 className='text-2xl'>Karim Benzema</h1>
                        <p className='font-sans text-lg mt-[-6px]'>France</p>
                    </div>
                    <FontAwesomeIcon className='max-sm:hidden text-6xl text-[orange] ml-[101px] pt-5' icon={faQuoteRight}/>
                    </div>
                    </div>
                </div>
            </div>

            <div className='drop-shadow-xl max-sm:w-[350px] max-sm:h-[370px] w-[500px] h-[302px] bg-[#444444] rounded-[20px]'>
                <div className='mx-12 max-sm:mx-8 mt-10'>
                    <h1 className='font-sans font-medium text-2xl'>
                    "As a huge Anime Fan I'm glad that i can have Figurines from my Favorite Characters, the figurines are so realistic i really love them alot."
                    </h1>
                    <div className='flex items-center'>
                <img className='border-[3px] border-[orange] h-[70px] rounded-full mt-[30px]' alt='girl' src={girl}/>
                    <div className='flex items-center'>
                    <div className='pt-8 ml-5'>
                        <h1 className='text-2xl'>Ariana Greenblatt</h1>
                        <p className='font-sans text-lg mt-[-6px]'>Germany</p>
                    </div>
                    <FontAwesomeIcon className='max-sm:hidden text-6xl text-[orange] ml-[76px] pt-5' icon={faQuoteRight}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        


        <div className='h-[410px] max-sm:h-[380px] bg-[#444444] max-sm:rounded-t-[60px] mt-20 rounded-t-[100px] flex flex-col items-center'>
            <h1 className='max-sm:text-4xl text-center text-5xl pt-10 mb-10'>
                Feeling Convinced Yet?<br/>
                <span className='max-sm:text-[29px]'>Choose Your Favorite Figurine!</span>
            </h1>
            <a href="/shop"><button className='border-4 border-[white] hover:border-[#e0ca00] drop-shadow transition ease-in-out delay-50 hover:scale-110 hover:bg-[white] hover:text-[#e0ca00] focus:outline-none  focus:ring focus:ring-[white] bg-[orange] text-[white] text-7xl py-2 px-7 max-sm:text-6xl rounded-full'>Choose Now</button></a>
            <h1 className='text-5xl text-[#888888] mt-12 hover:text-[orange] cursor-pointer'>AniStore</h1>
        </div>
        </div>
    </div>
  )
}
