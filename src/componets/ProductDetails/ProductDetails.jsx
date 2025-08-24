import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
export default function ProductDetails() {
    const {productId} = useParams();
    console.log(productId);
    
    const[singleProduct, setSingleProduct] =useState({})

    let getSingleProduct= async ()=>{
        let {data} = await axios.get(`https://dummyjson.com/products/${productId}`);
        console.log(data); 
        setSingleProduct(data);
        
    }

    useEffect(
          ()=>{
            getSingleProduct();
        },[]);


  return (
    <div className="product-details-container">
      <div className="card product-card d-flex">
        <div className="img">
            <img
          className="card-img-top product-image"
          src={singleProduct.images?.[0] || 'https://via.placeholder.com/400x300'}
          alt={singleProduct.title || ''}
        />
        </div>
        <div className="card-body">
          <h3 className="card-title">{singleProduct.title}</h3>
          <h5 className="card-category text-muted">{singleProduct.category}</h5>
          <p className="card-description">{singleProduct.description}</p>
          <p className="card-price">Price: <strong>${singleProduct.price}</strong></p>
          <p className="card-rating">Rating: <strong>{singleProduct.rating} ⭐</strong></p>
          <p className="card-stock">Stock: <strong>{singleProduct.stock}</strong></p>
          <a href="#" className="btn btn-primary mt-2">Buy Now</a>
        </div>
      </div>
    </div>
  );
}
