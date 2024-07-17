import React from 'react'
import poster from '../assets/favoritebook.jpg'
function BookPoster() {
  return (
  <div className='md:flex  justify-evenly py-5 my-5 '>
    <div className='md:w-2/5 '>
        <img src={poster} alt="book poster" className=' p-5' />
      
    </div>
    <div className='md:w-2/5 space-y-2 h-[550px]  justify-center  p-5 flex flex-col '>
           <h1 className='text-6xl font-bold leading-snug text-black '>Find Your Favorite <br /> <p className='text-blue-700'>Book Here!</p> </h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic veritatis obcaecati nostrum tempora labore! Maxime, quas ab? Maiores dolor dolores odio exercitationem velit, recusandae molestias deserunt at mollitia aut nulla.</p>
           <div className='flex gap-9 '>
            <div>
                <p className='text-2xl font-bold '>800+</p>
                <p>Book Listing</p>
                </div>
            <div>
                <p className='text-2xl font-bold '>550+</p>
                <p> Register User</p>
            </div>
            <div>
                <p className='text-2xl font-bold '>1200+</p>
                <p>Pdf Downloaded</p>
            </div>
           </div>
       <div>

           <button className='btn py-1  my-3 px-2 font-semibold bg-blue-700 text-white'>Explore Now</button>
       </div>
    </div>
  </div>
  )
}

export default BookPoster