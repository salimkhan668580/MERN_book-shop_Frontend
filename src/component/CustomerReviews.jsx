
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import profile from '../assets/profile.jpg'
import 'swiper/css';
import '../../style/CustomerReviews.css'
import 'swiper/css/pagination';
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import { Card } from "flowbite-react";

function CustomerReviews() {
 let  reviewData=[
        {   image: <Avatar img="/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />,
            name: 'John Doe',
            review: 'This product was amazing, I really enjoyed it!',
            rating: 5,
            company:'ABC, Inc',
            posstion:"CEO"
        },
        {   image: <Avatar img="/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />,
            name: 'John Doe',
            review: 'This product was amazing, I really enjoyed it!',
            rating: 5,
            company:'ABC, Inc',
            posstion:"CEO"
        },
        {   image: <Avatar img="/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />,
            name: 'John Doe',
            review: 'This product was amazing, I really enjoyed it!',
            rating: 5,
            company:'ABC, Inc',
            posstion:"CEO"
        },
        {   image: <Avatar img="/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />,
            name: 'John Doe',
            review: 'This product was amazing, I really enjoyed it!',
            rating: 5,
            company:'ABC, Inc',
            posstion:"CEO"
        },
        {   image: <Avatar img="/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />,
            name: 'John Doe',
            review: 'This product was amazing, I really enjoyed it!',
            rating: 5,
            company:'ABC, Inc',
            posstion:"CEO"
        },
        {   image: <Avatar img="/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />,
            name: 'John Doe',
            review: 'This product was amazing, I really enjoyed it!',
            rating: 5,
            company:'ABC, Inc',
            posstion:"CEO"
        },
        {   image: <Avatar img="/images/people/profile-picture-5.jpg" alt="avatar of Jese" rounded />,
            name: 'John Doe',
            review: 'This product was amazing, I really enjoyed it!',
            rating: 5,
            company:'ABC, Inc',
            posstion:"CEO"
        }
    
    

    ]

    const [review,setReview]=useState(reviewData);

  return (
  <>
 
    <div className='text-center py-5 my-5'>
    <p className='font-bold text-4xl'>Our Customers</p>
 </div>
    <Swiper
    slidesPerView={1}
    spaceBetween={20}
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }}
    modules={[Pagination]}
    className="mySwiper  my-5 py-5 reviews"
  >
   
    {review.map((item,index)=>(

    <SwiperSlide key={index}>
           <Card href="#" className="max-w-sm my-5 shadow-2xl text-left">
            <div className='flex gap-2 '>

         <span ><FaStar  className='text-yellow-400'/></span>
         <span ><FaStar  className='text-yellow-400'/></span>
         <span ><FaStar  className='text-yellow-400'/></span>
         <span ><FaStar  className='text-yellow-400'/></span>
         <span ><FaStar  className='text-yellow-400'/></span>
         
            </div>
         <p>{item.review}</p>
         <Avatar img={profile} alt="avatar of Jese" className='h-8 w-8' rounded />
         <div>
           
            <p className='font-semibold text-xl'>{item.name}</p>
         
            <span className='text-sm'>{item.posstion}</span>
            <span className='text-sm'>{item.company} Company</span>
           
         </div>
       
    </Card>
    </SwiperSlide>
    ))}
   

  </Swiper>
  </>
  )
}

export default CustomerReviews