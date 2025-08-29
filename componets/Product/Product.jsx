import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import './Product.css'
export default function Product() {
    let {slug}= useParams();
    let [product,setProduct]=useState({});
    let [imgs,setImgs] =useState("")
    const location  = useLocation()
    console.log(location);
    
    let getProduct = async()=>{
        let {data}= await axios.get(`https://api.escuelajs.co/api/v1/products/slug/${slug}`)
        console.log(slug);
        
        setProduct(data);   
        setImgs(data.images?.[0])
        
    }

    useEffect(()=>{getProduct()},[])
  return (
       <div className="product-container container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="main-image mb-3">
            <img
              src={imgs}
              alt={product.title}
              className="img-fluid rounded shadow"
            />
          </div>


          <div className="d-flex gap-2 thumbnails">
            {product.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className="img-thumbnail small-thumb"
                onClick={()=>setImgs(img)}
                
              />
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <h2 className="product-title">{product.title}</h2>
          <p className="text-muted">{product.category?.name}</p>
          <p className="product-description">{product.description}</p>
          <h4 className="product-price">${product.price}</h4>
          <button className="btn btn-primary btn-lg mt-3">
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  )
}




