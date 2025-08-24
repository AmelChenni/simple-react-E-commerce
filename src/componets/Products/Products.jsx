import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Product from '../Product/Product';
import { Link } from 'react-router-dom';
import './Products.css'

export default function Products() {
  const [produts,setProducts] =useState([])
  const [categories,setCategories] =useState([])
  let getProdect = async()=>{
    let {data} =await axios.get('https://dummyjson.com/products');
    // console.log(data.products);
    setProducts(data.products)
  }

    let getCategories= async()=>{
    let {data} =await axios.get('https://dummyjson.com/products/category-list');
    // console.log(data);
    setCategories(data)
  }
     let getCategory= async(catName)=>{
    let {data} =await axios.get(`https://dummyjson.com/products/category/${catName}`);
    // console.log(data.products);
    setProducts(data.products)
  }

 
  useEffect(
    ()=>{
      getProdect();
      getCategories();
    },[]
  )
  return (
    <div>
        <button className='spBtn btn d-block text-center w-100
        mt-3' onClick={()=>{getProdect()}}> All the Products</button>
     <div className="container text-center">
      {categories.map((cat)=>{
      return(
        <Link className='btn btn-info m-1' onClick={()=>getCategory(cat)}>{cat}</Link>
      )
     })}
      <div className="container">
        <div className="row">
            {produts.map((product)=>{
              return(<div className="col-3 mt-4"  key={product.id}>
                <Product  {...product} showButton = {true}/>
              </div>)
            })}
        </div>
      </div>

     </div>
    </div>
  )
}
