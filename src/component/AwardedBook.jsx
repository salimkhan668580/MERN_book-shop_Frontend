import React from 'react'

import awardedBook from '../assets/awardbooks.png'
function AwardedBook() {

  return (
    <div className=' my-5 p-5 flex  justify-evenly bg-blue-300 h-[350px]'>
        <div className='w-2/5 space-y-2 flex flex-col  justify-center'>
            <p className='text-2xl font-bold text-black'>2023 National Book Awarda for Fiction Shortlist</p>
            <div>

            <button className='bg-blue-600 py-1 px-2 text-white font-semibold'>Explore Now</button>
            </div>
        </div>
        <div className='w-2/5  flex flex-col  justify-center'>
        <img src={awardedBook} alt="" className='h-[400px] w-[400px]' />
        </div>
    </div>
  )
}

export default AwardedBook