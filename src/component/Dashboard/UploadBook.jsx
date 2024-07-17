import React, { useState } from 'react'

import { Button,  Label, Select, TextInput } from "flowbite-react";

import {  Textarea } from "flowbite-react";
function UploadBook() {
  const [uploadBookData,setUploadBookData]=useState({
    bookTitle:"" ,
authorName:"", 
imageURL:"",
category: "",
bookDescription: "",
bookPDFURL: "",
  });

  
  
  const categoryOpt=[
    {id:1, name:'Fiction'},
    {id:2, name:'Non-Fiction'},
    {id:3, name:'Children'},
    {id:4, name:'Sci-Fi'},
    {id:5, name:'History'},
    {id:6, name:'Biography'},
    {id:7, name:'Self-Help'},
    {id:8, name:'Cooking'},
    {id:9, name:'Business'},
    {id:10, name:'Health'},
    {id:11, name:'Education'},
    {id:12, name:'Travel'},
    {id:13, name:'Horror'},
    {id:14, name:'Thriller'},
    {id:15, name:'Mystery'},
    {id:16, name:'Romance'},
    {id:17, name:'Adventure'},
  ]

  let inputHandler=(e)=>{
    e.preventDefault();
    setUploadBookData({...uploadBookData,[e.target.name]:e.target.value});
  }
 let handelformData=(e)=>{
    // fetch("http://localhost:8080/upload-book",{
    fetch("https://mern-book-shop-backend.onrender.com/upload-book",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(uploadBookData)
    }).then(data=>data.json()).then(alert("update successfully"));

 }


  return (
<div className='md:flex  mt-5 gap-7'>
  <div className='md:w-full  p-8'>
   <h1 className='text-3xl font-bold text-center underline my-5 '>Upload Book </h1>
  <form className="  gap-4" onSubmit={handelformData}>
 <div className='md:flex justify-between'>

      <div className='md:w-full p-2'>
        <div className="mb-2  block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" type="text" onChange={inputHandler}  name='bookTitle' value={uploadBookData.bookTitle} placeholder="Book Title" required />
      </div>
      <div className='md:w-full p-2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" type="text" onChange={inputHandler} name ="authorName" value={uploadBookData.authorName} required />
      </div>
 </div>

 <div className=''>
        <div className="mb-2  block">
          <Label htmlFor="imageURL" value="Image URL" />
        </div>
      <TextInput id="imageURL" type="text" onChange={inputHandler}  name="imageURL" value={uploadBookData.imageURL} placeholder="Image url" required />
   </div>
    
   <div className='md:flex justify-between'>

      <div className='md:w-full p-2'>
        <div className="mb-2  block">
          <Label htmlFor="bookPDFURL" value="bookPDFURL" />
        </div>
        <TextInput id="bookPDFURL" onChange={inputHandler} type="text"  name="bookPDFURL" value={uploadBookData.bookPDFURL} placeholder="book PDF URL" required />
      </div>

      <div className='md:w-full p-2'>
      <div className="mb-2 block">
              <Label htmlFor="category" value="Select Book Category" />
            </div>
            <Select id="category" onChange={inputHandler} name='category' required>
              {
                categoryOpt.map((option) => (
                  <option key={option.id} value={option.name}>
                    {option.name}
                  </option>
                ))
              }
            </Select>
      </div>
    </div>

<div className='md:w-full p-2'>
  <div className="mb-2  block">
    <Label htmlFor="bookDescription" value="bookDescription" />
  </div>
  <Textarea id="bookDescription"  onChange={inputHandler} name='bookDescription' value={uploadBookData.bookDescription} placeholder="Book Description" required rows={4} />
</div>


      <Button type="submit" className='px-4 '>Upload </Button>
    </form>
  </div>
</div>


    
  )
}

export default UploadBook