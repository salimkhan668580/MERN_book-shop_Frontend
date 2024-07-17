import React, { useEffect } from 'react'

function Blog() {
  useEffect(()=>{
    document.title = "Blog Page";
  },[])
  return (
    <div className='my-5 pt-5 h-screen'>Blog</div>
  )
}

export default Blog
