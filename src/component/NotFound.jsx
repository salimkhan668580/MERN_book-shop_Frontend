import React from 'react'
import 'animate.css';
import './../../style/Notfound.css'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="Notcontainer  ">
    <div className="gif">
      <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
    </div>
    <div className="content">
      <h1 className="main-heading">🛒 Your Cart is Empty!</h1>
      <p>
      Find amazing Books and add them to your cart.
      </p>
 
     <Link to="/">
      <button>Back to home <i className="far fa-hand-point-right"></i></button> 
     </Link> 
   
    </div>
  </div>
  )
}

export default NotFound