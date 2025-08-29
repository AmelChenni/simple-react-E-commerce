import React from 'react'
import { Navigate } from 'react-router-dom';

export default function Logout() {
    function logout(){
        localStorage.removeItem('userToken');
        Navigate('/')
    }
  return (
    
    
    <div>
    </div>
  )
}
