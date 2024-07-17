import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'


function OtherBook() {
    const [books ,setBooks]=useState([]);
   
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:8080/all-books");
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
       <BookCard books={books} headlines="Other Book"/>
    </div>
  )
}

export default OtherBook