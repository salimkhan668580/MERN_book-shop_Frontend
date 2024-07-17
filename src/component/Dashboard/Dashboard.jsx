import React, { useEffect } from 'react'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { BsCloudArrowUp } from "react-icons/bs";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Outlet } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";                                      

import { useAuth } from '../../../AuthProvider';
function Dashboard() {
  useEffect(()=>{
    document.title = "Shoping Dashboard";
  },[])
  const {authInfo}=useAuth();
    const Logout=authInfo.logout
  const user=authInfo.userinfo;
  return (
    <div className='flex justify-between '>
      <div className='sidebar  h-screen bg-red-200 '>

      <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
{
  user?
          <div className='flex gap-3'> 
            <div>
              <img src={authInfo.userinfo.photoURL} alt="" className='rounded-full h-10 w-10 '/></div>
            <div>
              <p className='font-semibold text-xl capitalize'>{authInfo.userinfo.displayName}</p></div>
          </div>
      :""
}
         
          <Sidebar.Item href="/" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/Admin/dashboard/upload" icon={BsCloudArrowUp} >
        
           Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/Admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
         
          <Sidebar.Item href="/Admin/dashboard/Products" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
        
        {
          user?
          <button onClick={()=>Logout()}>

          <Sidebar.Item  icon={IoMdLogOut} >
            Logout
          </Sidebar.Item>
          </button>
          :
          <> 
           <Sidebar.Item href="/Admin/dashboard/Signin" icon={HiArrowSmRight}>
            Sign In
           </Sidebar.Item>
          <Sidebar.Item href="/Admin/dashboard/Signup" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
          </>
         
        }
        </Sidebar.ItemGroup>
     
      </Sidebar.Items>
    </Sidebar>

      </div>
      <div className="bodySection  h-screen bg-slate-100 w-full">

       <Outlet/>

      </div>
        
    </div>
  )
 
}

export default Dashboard