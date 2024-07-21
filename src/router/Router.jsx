import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"; 
import App from "../App";
import About from "../component/About";
import Shop from "../Shop/Shop";
import Home from "../component/Home";

import Dashboard from "../component/Dashboard/Dashboard";
import UploadBook from "../component/Dashboard/UploadBook";
import Manage from "../component/Dashboard/Manage";
import Products from "../component/Dashboard/Products";
import Signup from "../component/Dashboard/Signup";
import Singin from "../component/Dashboard/Singin";
import Edit from "../component/Dashboard/Edit";
import SignleBook from "../component/SignleBook";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import DashboardLayOut from "../component/Dashboard/DashboardLayOut";
import BayerPage from "../component/Cart/BayerPage";



const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      
      children:[
        {
            path: "/",
            element: <Home />

        },
        {
          path:"Cart",
          element:<PrivateRoute><BayerPage/></PrivateRoute>
        },
        {
            path: "/about",
            element: <About />

        },
        {
            path: "/shop",
            element: <Shop />

        },
      
        
       
        {
            path: "/book/:id",
            element: <SignleBook/>,
            // loader:({params})=>fetch(`http://localhost:8080/book/${params.id}`)
            loader:({params})=>fetch(`https://mern-book-shop-backend.onrender.com/book/${params.id}`)
        },
    
      ]
   
    },
 


    {
     
      path: "/Admin/dashboard",
      element:<Dashboard/>,
      children:[
        {
          path:"/Admin/dashboard",
          element:<PrivateRoute><DashboardLayOut/></PrivateRoute>
          
          
        },
        {
          path:"upload",
          element:<UploadBook/>
          
        },
        {
          path:"manage",
          element:<Manage/>
        },
        {
          path:"edit/:id",
          element:<Edit/>,
          // loader:({params})=>fetch(`http://localhost:8080/book/${params.id}`)
          loader:({params})=>fetch(`https://mern-book-shop-backend.onrender.com/book/${params.id}`)
        
        
        },
        {
          path:"Products",
          element:<Products/>
        },
        {
          path:"signup",
          element:<Signup/>
        },
        {
          path:"signin",
          element:<Singin/>
        }
        
      ]
    },

    {
      path:"login",
      element:<Singin/>
    }
   
  ]);

  export default router;