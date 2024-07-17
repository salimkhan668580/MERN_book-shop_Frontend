import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useLoaderData } from 'react-router-dom';
import { useAuth } from '../../AuthProvider';
// import '../../style/BookCard.css'

// import required modules
import { Pagination } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function BookCardSweeper({books}) {






  return (
    <div>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper  -z-50"
      >
        {
          books.map((item,index)=>(
            <SwiperSlide className='md:px-5 -z-1 cursor-pointer' key={index} >
              <Link to={`/book/${item._id}`} key={index}>
              <div className='relative'>
              <img src={item.imageURL} alt="" />
              <div className='absolute top-3 cursor-pointer right-3 bg-blue-600 hover:bg-black p-2 rounded' >
                <FaCartShopping className='w-4 h-4 text-white'/>
              </div>

              </div>
            <div>
              <p>{item.bookTitle}</p>
              <p>{item.authorName}</p>
              <p>$10</p>
            </div>
            
            </Link>
            </SwiperSlide>
          ))
        }
    
      </Swiper>
    </div>
  )
}

export default BookCardSweeper