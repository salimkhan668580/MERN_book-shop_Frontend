
import path from 'path';
import React, { useEffect, useState } from 'react'
import { FaBarsStaggered,FaBlog ,FaXmark} from "react-icons/fa6";

import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider';
import { IoCartOutline } from "react-icons/io5";


function Navbar() {
   
    const {authInfo}=useAuth();
    const session=authInfo.session;
    const cartItem=authInfo.cartData

 
    const [isMenuOpen,setIsMenuOpen] =useState(false);
    const[isSticky,setIsSticky] =useState(false);
    //toggle menu
    const toggleMenu =()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(()=>{
        const handleScroll =()=>{
            if(window.scrollY>100){
                setIsSticky(true);
            }else{
                setIsSticky(false);
            }
        }
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.addEventListener('scroll',handleScroll);
        }

    },[])

    //navItem here
    const navItem=[
        {link:"home", path:"/"},
        {link:"about", path:"/about"},
        {link:"Shop", path:"/shop"},
        {link:"Sell Your Book", path:"/admin/dashboard"},
   
        
    ]
    
  return (
   <header className='w-full z-50 inter-font  bg-transparent transition-all  ease-in duration-300 fixed top-0 left-0 right-0'>
    <nav className={`py-4 lg:px-24 px-4 ${isSticky?"sticky top-0 left-0 right-0 bg-blue-300":""}`}>
     
        <div className='flex justify-between items-center text-base gap-4  '>
            {/* logo */}
            <Link to='/' className='text-2xl font-bold text-blue-700 flex item-center gap-2'>
            <FaBlog className='inline-block'/>
            Books
            </Link>

            <ul className='md:flex space-x-12  hidden  '>
              {
                navItem.map((item,index)=>(
                    <li key={index}>
                        <Link to={item.path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700 '>
                        {item.link}
                        </Link>
                    </li>
                ))
              }
            </ul>
         {

            session ? 
         

    
                      <ul className='md:flex space-x-12  hidden  '>
                           <Link to='/cart'>
                         
                        <li className="relative "  >
                        <IoCartOutline  className='w-10 h-10 text-gray-700"'/>
                      
        <div className="absolute font-semibold top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
         
          {cartItem.length}
        </div>
                       
                        </li>
                        </Link>
                        <li >
  
                            <button  onClick={()=>authInfo.logout()} className='block text-base font-semibold py-1 px-2 text-black uppercase cursor-pointer  hover:text-white hover:bg-blue-700 '>
                            Logout
                            </button>
                        </li>
                     </ul>
                     :
                     <ul className='md:flex space-x-12  hidden  '>
             
               
                    <li>
                        <Link to='login' className='block text-base font-semibold py-1 px-2 text-black uppercase cursor-pointer  hover:text-white hover:bg-blue-700 '>
                        Login
                        </Link>
                    </li>
               
            </ul>
         }

            {/* btn for lg device */}
            <div className="space-x-12 hidden lg:flex items-center ">
                <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
            </div>

            {/* menu btn for the middle  devices  */}
            <div className='md:hidden'>
                <button onClick={toggleMenu} className='text-black focus:outline-none'>
                    {
                        isMenuOpen?
                        <FaXmark className='h-5 w-5 text-black'/>:
                        <FaBarsStaggered className='h-5 w-5 text-black'/>
                    }
                    
                    </button>
        
        </div>
            </div>
            {/* navigation for sm device */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen?"block fixed top-0 right-0 left-0":"hidden"}`}>
        {
           

                navItem.map((item,index)=>(
                   
                        <Link to={item.path} key={index} className='block text-white text-base text-black uppercase cursor-pointer  '>
                        {item.link}
                        </Link>
                    
                ))
              }
        </div>

    </nav>
 

   </header>
  )
}

export default Navbar