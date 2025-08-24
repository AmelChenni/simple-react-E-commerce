import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './componets/Layout/Layout.jsx'
import Home from './componets/Home/Home.jsx'
// import Register from './componets/Register/Register.jsx';
// import Login from './componets/Login/Login.jsx';
import Notfound from './componets/NotFound/Notfound';
import Products from './componets/Products/Products';
import About from './componets/About/About.jsx';
import ProductDetails from './componets/ProductDetails/ProductDetails.jsx';


 const router = createBrowserRouter([
    {path:'',element:<Layout />,children:[
      {index:true,element:<Home/> },
      // {path:'register',element:<Register /> },
      // {path:'login',element:<Login /> },
      {path:'products',element:<Products /> },
      {path:'about',element:<About />},
      {path:"product/:productId", element:<ProductDetails />},
      {path:'*',element:<Notfound /> },

    ]}
  ])

export default function App() {
 
  return (
    <div>
      <RouterProvider  router={router}></RouterProvider>
    </div>
  )
}
