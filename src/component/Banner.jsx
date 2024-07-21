
import React from 'react'
import SwaperCard from './SwaperCard'
import 'animate.css';
function Banner() {
  return (
   <div className='flex px-4  lg:px-24 bg-teal-100 items-center'>
    <div className='flex w-full flex-col md:flex-row justify-between item-center gap-12 py-40'>
    <div className='md:w-1/2 space-y-8 animate__animated animate__zoomIn h-full'>
        <h2 className='text-6xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices </span></h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis deserunt porro quis obcaecati incidunt similique reprehenderit harum delectus sapiente placeat. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, commodi!</p>
        <div>
            <input type="search" name="search" id="search" className='py-2 px-2 rounded-s-sm outline-none' placeholder='search'/>
            <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
        </div>
    </div>
    <div className='md:pr-9 animate__animated animate__zoomIn'><SwaperCard/></div>

    </div>
   </div>
  )
}

export default Banner