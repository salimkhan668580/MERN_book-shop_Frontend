import React from 'react'
import BookCardSweeper from './BookCardSweeper'

function BookCard({books,headlines}) {
  return (
    <div className='z-[-20px]'>
        <h2 className='text-black text-center text-4xl font-bold my-6'>{headlines}</h2>
        <BookCardSweeper books={books}/>
    </div>
  )
}

export default BookCard