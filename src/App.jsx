
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Footer from './component/Footer/FooterBase'
import toast, { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
    <Toaster />
    <Navbar />
     <Outlet />

    <Footer/>

    </>
  )
}






export default App
