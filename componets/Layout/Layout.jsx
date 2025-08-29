import React from 'react'
import Footer from './../Footer/Footer.jsx';
import Navbar from './../Navbar/Navbar.jsx';
import { useNavigate , Outlet } from 'react-router-dom';

export default function Layout({user,setUser}) {

    const navigate = useNavigate(); 

  


     function logout(){
        localStorage.removeItem('userToken');
        setUser(null)
        navigate('/login')
        
    }
  return (
    <>
    <Navbar user={user} logout ={logout}/>
    <div className="container">
          <Outlet/>
    </div>
    <Footer />
    </>
  )
}
