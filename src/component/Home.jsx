import React, { useEffect } from 'react'
import Banner from './Banner'
import FavrioutBooks from './FavrioutBooks'
import BookPoster from './BookPoster'
import AwardedBook from './AwardedBook'
import OtherBook from './OtherBook'
import CustomerReviews from './CustomerReviews'
import AuthProvider from '../../AuthProvider'




function Home() {
  useEffect(()=>{
   document.title = 'Home page';
  },[])
  return (
    <div>
     <Banner/>
     <FavrioutBooks/>
     <BookPoster/>
     <AwardedBook/>
     <OtherBook/>
     <CustomerReviews/>
     
    </div>
  )
}

export default Home