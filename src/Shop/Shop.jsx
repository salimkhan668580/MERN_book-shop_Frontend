import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';
import 'animate.css';
function Shop() {
  const [allBooks,setAllBooks]=useState([]);
  const [searchText,setSearchText]=useState();
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
    
  let handelCategory= (e)=>{
    // https://mern-book-shop-backend.onrender.com/all-books/?category=Fiction
    fetch(`https://mern-book-shop-backend.onrender.com/all-books/?category=${e.target.value}`)
    .then(res=>res.json())
    .then(data=>setAllBooks(data))
   

  }

  let handleSearch=() =>{
    
    fetch(`https://mern-book-shop-backend.onrender.com/all-books/?search=${searchText}`)
   .then(res=>res.json())
   .then(data => setAllBooks(data))
  }
 
 
  useEffect(()=>{
    fetch('https://mern-book-shop-backend.onrender.com/all-books/')
   .then(res=>res.json())
   .then(data=>setAllBooks(data))

  },[])

  useEffect(()=>{
    document.title = "Shoping";
  },[])

  return (
    <div className='my-14  py-3'>
      <div className='mt-10 py-10  bg-slate-200 text-center'>
       
        <form >
        <select name="category"   className='w-1/2  py-1 rounded'  onChange={handelCategory} >
        <option value="">Select category</option>
      {
        categoryOpt.map((item,index)=>(
          <option value={item.name} key={index}> {item.name}</option>

        ))
      }
        </select>

        </form>
      </div>
      <div className='text-center bg-slate-200 py-3'>
      
        
         
          <input type="search" name='search'   onChange={(e)=>setSearchText(e.target.value)} value={searchText}  className='py-1 border w-1/3  hover:border-blue-500 rounded' placeholder='search'/>
          <button className='btn mx-4 py-1 px-2 bg-blue-700 text-white  font-semibold rounded' onClick={handleSearch}>Search Here</button>
     
      </div>

      <div className='w-full my-5 py-4 '>

      {
       allBooks && allBooks.length===0? <h1 className='text-red-600 text-center text-xl'>No Books found</h1>
        :
        <div className='grid grid-cols-3 space-x-2'>
        {
          allBooks.map((item,index)=>(
            <Link to={`/book/${item._id}`} key={index}>
           
            <Card  className="max-w-sm m-2 animate__animated animate__zoomIn ">
              <img src={item.imageURL} alt=""  className='w-full h-[300px]'/>
              <div>
                <h2> <b>Title:</b> {item.bookTitle}</h2>
                <p><b>Author:</b> {item.authorName}</p>
                <p><b>Category:</b> {item.category}</p>
                <p> <b>Price: </b><del>₹300</del> ₹200</p>

              </div>
          
          <div>
            <button className='py-1 px-2 w-full bg-blue-500 hover:bg-red-600 rounded text-white font-semibold'>Add to cart</button>
          </div>
          </Card>
             
          </Link>

          ))
        }

        </div>

      }
    

      </div>
    
  

    </div>
  )
}

export default Shop