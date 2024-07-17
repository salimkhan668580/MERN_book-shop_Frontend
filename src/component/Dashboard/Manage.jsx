import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import {Link} from "react-router-dom";
function Manage() {
  const [bookData,setbookData] =useState([]);
  useEffect(()=>{
    // fetch('http://localhost:8080/all-books')
    fetch('https://mern-book-shop-backend.onrender.com/all-books')
   .then(res=>res.json()).then(data=>setbookData(data));
 
  },[]);

  let deleteHandler=(id)=>{
    // fetch(`http://localhost:8080/book/${id}`,{method:'DELETE'})
    fetch(`https://mern-book-shop-backend.onrender.com/book/${id}`,{method:'DELETE'})
   .then(res=>res.json())
   .then(alert("Book deleted successfully"));
  }
  console.log(bookData);
  return (
    <div className="overflow-x-auto">
    <Table>
      <Table.Head>
        <Table.HeadCell>No.</Table.HeadCell>
        <Table.HeadCell>Book </Table.HeadCell>
        <Table.HeadCell>Author </Table.HeadCell>
        <Table.HeadCell>Category </Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>Edit or Manage</Table.HeadCell>
     
      </Table.Head>
      <Table.Body className="divide-y">
        {
          bookData.map((book,index)=>(
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">{index+1}</Table.Cell>
              <Table.Cell>{book.bookTitle}</Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>$10</Table.Cell>
              <Table.Cell >
                <Link to={`/admin/dashboard/edit/${book._id}`}  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Edit
                </Link>
                <button className='bg-red-600 mx-2 text-white font-semibold py-1 px-2 rounded ' onClick={()=>deleteHandler(book._id)}>Delete</button>
              </Table.Cell>
            </Table.Row>
          ))
        }
    

        
      </Table.Body>
    </Table>
  </div>
  )
}

export default Manage