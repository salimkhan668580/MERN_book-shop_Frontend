import React, { useEffect } from 'react'


import { useAuth } from '../../AuthProvider';
import { useLoaderData } from 'react-router-dom';

import { Accordion } from "flowbite-react";
  

function SignleBook() {


  const {authInfo}=useAuth();
  let incCount = authInfo.incCount;
 
  let decCount=authInfo.decCount;
  let addTOCart=authInfo.addTOCart;
 
  
const {_id,bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL}=useLoaderData()
const data={
  _id,
  bookTitle,
  authorName,
  imageURL,
  category,
  bookDescription,
  bookPDFURL
}
 
  return (
    <div className=' h-auto  mt-10 pt-10'> 
      <div className='flex h-4/5 shadow-lg justify-evenly  px-5 border '>

    <div className=' h-full w-1/4  p-5  ' >
      <img src={imageURL} alt="" className='h-full w-full border border-r' />
    </div>

    <div className='w-3/4 px-2  space-y-8 flex flex-col justify-center items-start'>
        <div > 
          <h1 className=' text-2xl font-bold'>{bookTitle}</h1>
        </div>
        <div className='space-y-4'>
          <p> <b>Auther- </b>{authorName}</p>
          <p> <b>Description-</b> {bookDescription}</p>
          <p><b>category - </b> {category}</p>
          
         
        </div>
        
        <div className='text-xl'><del className='text-slate-500'> ₹ 300</del> ₹ 200</div>

        <div className='flex'>
        
           <div>
            <button  className='btn px-2 py-1 rounded font-semibold text-white bg-blue-700' onClick={()=>addTOCart(data)}>Add to Card</button>
           </div>
        </div>
    </div>


      </div>
{/* ====================================Book details ================================= */}
      <div className='my-5 flex justify-center  py-5'>
      <Accordion className='w-4/5'>
      <Accordion.Panel>
        <Accordion.Title>Deteils</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odit vero maxime nisi distinctio quas animi dicta itaque eveniet cum, eum sint, magnam officia nam illo veniam esse quod! Sapiente qui minima, cum consectetur incidunt officia, optio blanditiis, reprehenderit facilis in inventore quo delectus sequi temporibus error ipsa eos. Doloribus pariatur itaque dolorum harum a asperiores vitae quae, reiciendis fugiat nisi debitis tenetur inventore. Mollitia voluptatem ut aperiam? Error suscipit voluptas laudantium voluptatem doloribus rerum illum commodi labore sint totam numquam, molestiae veritatis aut consequuntur quod maxime. Placeat est, quod voluptatibus totam, tempora reprehenderit asperiores dolor, possimus laborum veritatis exercitationem.
          </p>
       
        </Accordion.Content>
      </Accordion.Panel>
     
      <Accordion.Panel>
        <Accordion.Title>More About book</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime aperiam, a nobis veritatis eligendi ut pariatur voluptate, nihil quibusdam, amet quam id consequatur aliquam quaerat ad in ab reiciendis nemo illum blanditiis cupiditate nam impedit molestias. Molestias numquam modi nam ab. Distinctio asperiores quam quas magni quo consequatur at modi. Cupiditate saepe dolorum sit? Delectus voluptates labore inventore, reiciendis officia beatae earum. Explicabo beatae earum tenetur sequi dignissimos omnis, eaque iure laboriosam voluptatem dolore. Cupiditate pariatur voluptas voluptatibus sunt aliquam, aut minus, impedit repellat itaque molestiae nam soluta praesentium iure temporibus? Culpa, dicta quas molestias quo repellendus nam consequuntur minima?
          </p>
        
        </Accordion.Content>
      </Accordion.Panel>
     
     
    </Accordion>
       
      </div>
    </div>
  )
}

export default SignleBook
