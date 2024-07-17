import React, { useEffect, useState } from 'react'
import BookCard from './BookCard';

function FavrioutBooks() {
    const [books ,setBooks]=useState([]);
   
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // const response = await fetch("http://localhost:8080/all-books");
        const response = await fetch("https://mern-book-shop-backend.onrender.com/all-books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);
 
  return (
    <div>
        <BookCard books={books} headlines="Best Seller Books" />
    </div>
  )
}

export default FavrioutBooks