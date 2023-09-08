import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCartClick } from '../../features/redux'
import { setNavbarClick } from '../../features/redux'

export const About = () => {

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
        
        <div className='drop-shadow-[0_10px_10px_rgba(0,0,0,1)] bg-banner flex flex-col justify-center items-center'>
          <h1 className='text-7xl drop-shadow-[0_10px_10px_rgba(0,0,0,1)] pr-5'>#KnowUs</h1>
          <p className='text-xl max-sm:text-lg drop-shadow-[0_4px_2px_rgba(0,0,0,1)]'>Lorem ipsum dolor sit amet constructor dolor sit.</p>
        </div>
        <div className='mt-10 mb-10 ml-[200px] mr-[200px] max-ipad:ml-[100px] max-ipad:mr-[100px] max-sm:ml-[20px] max-sm:mr-[20px] max-sm:text-center'>
          <h1 className='text-5xl mb-5'>Who We Are?</h1>
          <div className='bg-[#444444] rounded-[20px]'>
            <p className='mr-[27px] ml-[27px] pt-5 pb-5'>
            <span className="text-2xl">About AniStore:</span><br/>

            <span className="font-sans">Welcome to AniStore, where Your Anime Dreams come to Life, your ultimate destination for all things anime! At AniStore, we're more than just an eCommerce platform; we're your gateway to a world filled with enchanting characters, meticulously crafted figurines, and a vibrant community of like-minded anime enthusiasts.</span><div className='mb-5'/>

            <span className="text-2xl">Our Story:</span><br/>

            <span className="font-sans">Founded by a group of passionate anime devotees in 2012, AniStore was born from a shared love for the intricate storytelling, vibrant personalities, and breathtaking artistry that define the anime universe. What began as a modest online store has since blossomed into a thriving community, uniting fans from across the globe and nurturing a sense of camaraderie among fellow anime aficionados.</span><div className='mb-5'/>

            <span className="text-2xl">Our Mission:</span><br/>

            <span className="font-sans">Our mission is simple yet profound: to provide a haven for anime fans to explore, collect, and celebrate their beloved characters. We are dedicated to meticulously curating a vast collection of top-tier anime figurines, meticulously designed to bring both iconic and lesser-known characters to life in extraordinary detail. Our aim is to ignite your passion, whether you're a seasoned collector or embarking on your anime journey for the first time.</span><div className='mb-5'/>

            <span className="text-2xl">Why Choose AniStore:</span><br/>

            <span className="font-sans">Unmatched Selection: We've scoured the anime cosmos to present you with an unparalleled and diverse assortment of anime figurines. From timeless classics to the latest releases, we offer characters spanning every genre and era.

Quality Excellence: Each figurine in our catalog is handpicked for its exceptional craftsmanship and authenticity. We collaborate with reputable manufacturers and skilled artisans to ensure that every piece you acquire meets the highest quality standards.

A Vibrant Community: When you shop with AniStore, you become a valued member of our passionate anime community. Connect with like-minded enthusiasts, proudly showcase your collection, and embark on a journey of discovery together.

Dedicated Customer Support: Our committed support team is always ready to assist you. Whether you have inquiries about a product, require assistance with an order, or simply wish to chat about your favorite anime series, we're here to help, just a message away.

Secure Shopping: Your trust and safety are of paramount importance to us. AniStore employs cutting-edge encryption technology to safeguard your personal information, and our streamlined checkout process ensures convenience and security.</span><div className='mb-5'/>

            <span className="text-2xl">Our Vision:</span><br/>

            <span className="font-sans">At AniStore, we envision a world where anime fans from all walks of life can come together to celebrate their shared passion. We're committed to continually expanding our offerings, hosting exclusive events, and nurturing a sense of community that transcends geographical boundaries.</span><div className='mb-5'/>

            <span className="text-2xl">Join the AniStore Experience:</span><br/>

            <span className="font-sans">Whether you're an experienced collector, a casual enthusiast, or simply curious about the world of anime figurines, we cordially invite you to embark on this exciting journey with us. Explore the wonders of AniStore, connect with fellow fans, and immerse yourself in the enchanting realm of anime, one figurine at a time.</span><br/>
            </p>
          </div>
        </div>
    </div>
  )
}