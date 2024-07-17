import React, { useEffect } from 'react'

function Shop() {
  useEffect(()=>{
    document.title = "Shoping";
  },[])
  return (
    <div className='my-5 pt-5 h-screen'>Shop</div>
  )
}

export default Shop