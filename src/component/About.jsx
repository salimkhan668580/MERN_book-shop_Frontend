import React, { useEffect } from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsFillMotherboardFill } from "react-icons/bs";
import { Card } from "flowbite-react";
import 'animate.css';
function About() {

  useEffect(()=>{
    document.title = "About Page";
  },[])

  const services=[
    {
      title:"Free Delivery",
      icon:<TbTruckDelivery />
    },
    {
      title:"Secure Payment",
      icon:<RiSecurePaymentLine />
    },
    {
      title:"24/7 support",
      icon:<BsFillMotherboardFill />
    }

  ]
  return (
    <div className='my-5 pt-5 h-auto'>
   
      <div className='flex my-10   justify-center '>
        <div className='w-2/5 space-y-9 animate__animated animate__zoomIn'>
          <h1 className='text-5xl font-bold '>who we are </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eaque sunt omnis rem minima velit inventore id fuga delectus ipsa laboriosam, voluptatibus consequatur impedit porro nobis at culpa sint numquam in amet nemo. Enim distinctio placeat architecto consectetur suscipit praesentium omnis delectus, dignissimos eveniet voluptas iure fugiat ullam corrupti beatae laborum est voluptate totam! Recusandae, a. Unde distinctio pariatur perspiciatis officiis quisquam corporis vel velit, officia, amet sapiente necessitatibus esse? Aliquam dicta sapiente natus ad doloremque eligendi, error iure quaerat illo voluptatum ipsum ratione nobis incidunt modi ullam mollitia excepturi optio cupiditate laborum quod voluptatibus perferendis magnam quae. Expedita, odio.</p>

        </div>
        <div className='w-2/5 animate__animated animate__zoomIn'>
          <img src="https://www.vgyanis.com/wp-content/uploads/2022/04/Internet-1.jpg" alt="" />

        </div>
      </div>

{/* =========================Services Card==================================== */}
   <div className='my-10'>
     <div className='text-center'><h1 className='text-5xl my-3 py-3 text-semibold'>Services</h1></div>
     <div className='flex justify-evenly'>
      {
        services.map((item,index)=>(
         <div key={index} >
        <Card href="#" className="max-w-sm text-center py-7 px-7">
              <div className='text-center'>
                <p className='text-4xl text-center ' >{item.icon}</p>
              </div>
               <div>
                <h1 className='font-semibold text-xl'>{item.title}</h1>
               </div>
     </Card>
       </div>
        ))
      }
     </div>

   </div>
      

    </div>
  )
}

export default About