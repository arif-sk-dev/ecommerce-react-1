import React from 'react'
import banner from '../assets/banner1.jpg'
import { Link } from 'react-router-dom'

const MidBanner = () => {
  return (
    <div className='max-w-7xl mx-auto bg-gray-100 mt-20'>
      <div className='relative mx-auto bg-cover bg-center h-[450px] md:h-[500px] lg:h-[550px]' style={{backgroundImage: `url(${banner})`, backgroundPosition:'center', backgroundAttachment:'fixed'}}>
        <div className='absolute inset-0 bg-black/70 bg-opacity-30'>
          <div className='max-w-7xl mx-auto text-center text-white px-2 py-10'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mt-4 md:mt-10 lg:mt-13'>Next-Gen Fashion & Electronics</h1>
            <p className='text-lg md:text-2xl mt-10 mb-8'>Discover the latest text innovation with unbeatable prices and Free Shipping on selected products—experience cutting-edge design, premium quality, and seamless performance tailored to elevate your everyday workflow.!</p>
            <Link to="/shop"><button className="bg-red-400 text-white px-6 py-2 rounded-full hover:bg-red-500 transition border-1 cursor-pointer">Shop Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner