import React, { Children, useEffect, useState } from 'react'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Layout from './componets/Layout/Layout.jsx'
import Home from './componets/Home/Home.jsx'
import Register from './componets/Register/Register.jsx';
import Login from './componets/Login/Login.jsx';
import Notfound from './componets/NotFound/Notfound';
import Products from './componets/Products/Products';
import Cart from './componets/Cart/Cart.jsx';

import { jwtDecode } from "jwt-decode";
import ProtectedRouter from './componets/ProtectedRouter/ProtectedRouter.jsx';
import Product from './componets/Product/Product.jsx';
import { CounterContext, CounterContextProveder } from './componets/Context/ContextStore.jsx';
import Categories from './componets/Catefories/Categories.jsx';



export default function App() {
let [user,setUser] =useState(null)
  function saveCurrentUser(){
    let token  = localStorage.getItem('userToken');
    let decode =  jwtDecode(token);
    setUser(decode); 
    console.log(user);  
  }


  useEffect(()=>{
    if(localStorage.getItem('userToken')){
      saveCurrentUser();
    }
  },[])
  const router = createBrowserRouter([
    {path:'',element:<Layout user= {user} setUser={setUser}/>,children:[
      {index:true,element:<Home/> },
      {path:'register',element:<Register /> },
      {path:'login',element:<Login info={saveCurrentUser} /> },
      {path:'products',element:<Products /> },
      {path:'categories',element:<Categories /> },
      {path:'products/:slug',element:<Product /> },
      {path:'/:slug',element:<Product /> },
      {path:'cart',element:<ProtectedRouter ><Cart /></ProtectedRouter> },
      {path:'*',element:<Notfound /> },

    ]}
  ])
  return (
    <div>
      <CounterContextProveder>
              <RouterProvider  router={router}></RouterProvider>
      </CounterContextProveder>
    </div>
  )
}
