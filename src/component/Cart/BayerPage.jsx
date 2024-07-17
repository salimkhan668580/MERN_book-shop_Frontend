import React, { useEffect } from 'react'
 import { useAuth } from '../../../AuthProvider'
 import useRazorpay from "react-razorpay";
import toast from 'react-hot-toast';
import NotFound from '../NotFound';
 function BayerPage() {
  const [Razorpay] = useRazorpay();
  const {authInfo} = useAuth();
   const cartData=authInfo.cartData;
   let incCount = authInfo.incCount;
   let decCount=authInfo.decCount;
   const handleRemove=authInfo.handleRemove;
   let totalPrice=authInfo.getTotal;
  const Razor_Key=import.meta.env.VITE_RAZOR_KEY;
let order= async()=>{

//  let response= await fetch("http://localhost:8080/order")
 let response= await fetch("https://mern-book-shop-backend.onrender.com/order")
   let data=await response.json(response);
   const options = {
    key: Razor_Key, // Enter the Key ID generated from the Dashboard
    amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Book Shop",
    description: "Buying Book",
    image: "https://png.pngtree.com/template/20190316/ourmid/pngtree-books-logo-image_79143.jpg",
    order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
    handler: function (response) {
  
      toast.success("Payment Successfully")
    },
    prefill: {
      name: "Salim khan",
      email: "youremail@example.com",
      contact: "1234567890",
    },
   
  };

  const rzp1 = new Razorpay(options);

  rzp1.on("payment.failed", function (response) {
   
    toast.error(response.error.description);
  
  
  });

  rzp1.open();
   
}

  
  return (

    <div className='h-screen my-20 pt-10'>
      {
        (cartData.length>=1)?
      <div className='flex justify-center '>
      <div className='w-1/2   shadow-lg'>
     {
      cartData.map((item,index)=>(

      <div className='flex  p-5 gap-4 border shadow-md' key={index}>
        <div className="w-1/10"> 
          <img src={item.imageURL} alt='' className='h-40 '/>
        </div>
        <div className="space-y-3">
          <div>
            <p><b>Title : </b>{item.bookTitle}</p>
            <p> <b>Auther :</b>{item.authorName} </p>
          </div>
          <div className='flex gap-4 '>
            <div> <span><del>₹200</del></span> <span> ₹100</span></div>
            <div>
            <span onClick={()=>incCount(item._id)}><button className='text-xl   bg-slate-300 px-1  font-bold shadow'>+</button></span>
            <span className='px-4' ><input  className='w-5 h-5' value={item.quantity} /></span>
            <span onClick={()=>decCount(item._id)}> <button className='text-xl   bg-slate-300 px-1  font-bold shadow'>–</button></span>
           
            </div>
          </div>
          <div><button className='text-red-600' onClick={()=>handleRemove(item._id)}>Remove</button></div>
          
        </div>
      </div>

      ))

     }
  
       </div>

      <div className='w-2/5 shadow-lg'>
        
        <div className='py-3'>
          <h1 h1 className='font-semibold text-2xl  text-center'>Purchase Details</h1>
        </div>
        <div >
          <table className='w-full text-center'>
            <tr>
              <th>Quantity</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
            {
              cartData.map((item,index)=>(
            <tr>
              <td>{item.quantity}</td>
              <td>{item.bookTitle}</td>
              <td>{item.quantity*200}</td>
            </tr>
         
              ))
            }
          </table>
        </div>
        {/* <hr  className='font-semibold h-1 w-full bg-red-600 mt-5'/> */}
         <div className='text-center my-10'>
     <button className='btn bg-blue-600 rounded hover:bg-rose-600  shadow text-white px-8 py-1' onClick={order}><h1 className='font-semibold  '>Pay   ₹{totalPrice()} </h1></button>
          
         </div>
       </div>
      </div>
      :
      <NotFound/>
      }


    </div>
  )
}

export default BayerPage