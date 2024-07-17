
import React, { createContext, useContext, useEffect, useState } from 'react';
import fireBaseAuth from './firebase.config';

import { getAuth,signOut, onAuthStateChanged } from "firebase/auth";
import toast from 'react-hot-toast';
const AuthContext = createContext();


function AuthProvider({children}) {
  const [session,setSession]=useState(false);
  const [cartData, setCartData] = useState([]);
  const [count,setCount]=useState(1)
  const [userinfo,setUserInfo] = useState(null);
  const [errorMsg,setErrorMsg] = useState("")
  const auth = getAuth(fireBaseAuth);


  const addTOCart= (data) => {

    const isProductExist=cartData.find((findItem)=>findItem._id===data._id)
    if(session){
      if(isProductExist){
       
        const updateQuantity=cartData.map((item)=>(
          item.id===data.id?{...item,quantity:item.quantity+1}:item
        
        ))
        
        setCartData(updateQuantity);
       
        toast.success(" added quantity")
        
      }else{
        
        setCartData([...cartData, {...data,quantity:1}])
        toast.success(" added quantity")  
      }
    }else{
      toast.error("Please Login to add to cart")
    }


    };

  const logout=()=>{
    signOut(auth).then(() => {
      setSession(false)
      setUserInfo(null)
      setErrorMsg("")
      toast.success(" Logout Successfully")
    }).catch((error) => {
      toast.error(error)

    });
  
 
  }

  let incCount=(_id)=>{
    const incQnty= cartData.map((item)=>(
      item._id==_id?{...item,quantity:item.quantity+1}:item
    ))
    setCartData(incQnty);
    toast.success("increses")

  }
  let decCount=(_id)=>{


    const decQnty= cartData.map((item)=>(
      item._id==_id && item.quantity>1 ? {...item,quantity:item.quantity-1}:item
    

    ))
    setCartData(decQnty);
    toast.success("Decrease")

    

  }
  const handleRemove=(_id)=>{
    const delteProduct=cartData.filter((item)=>item._id !== _id)
  
    setCartData(delteProduct);
    toast.success("Remove Successfully")

           
  }

 
 
  const userLoginData= ()=>{

  onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(true)
       return setUserInfo(user)
        // ...
      } else {
        
        return setErrorMsg("user not Logged in");
      }
    });
     

  
  }

useEffect(()=>{
  userLoginData()
 }, []);

   // ...........total Value...............
   const getTotal=()=>{
    const totalPrice=cartData.reduce((total,cartData)=>{
      return total+200* cartData.quantity;
    },0);
    return totalPrice;
};
  const authInfo={
    
    userinfo,
    errorMsg,
   
    session,
    logout,
    count,
    incCount,
    decCount,
    addTOCart,
    cartData,
    handleRemove,
    getTotal
  }
  return (
    <AuthContext.Provider value={{ authInfo }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider
export const useAuth = () => {
  return useContext(AuthContext);
};

