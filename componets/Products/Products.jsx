import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CounterContext } from './../Context/ContextStore';

export default function Products() {

  let [products,setProducts] = useState([]);
  const {count,name}= useContext(CounterContext)
  

  const getProducts =async()=>{
    let {data} = await axios.get('https://api.escuelajs.co/api/v1/products')
    setProducts(data);
    
  }



  useEffect(()=>{
    getProducts();
  },[])
  return <>
 {/* start get Products */}
        <div className="mt-5">
            <div className="row">
                {products.map((product)=>
                <div className='col-4'>
                        <div className="card" style={{width: "18rem"}}>
                            <div>
                            <img className="card-img-top" src={product.images??[0]} alt={product.slug} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title} </h5>
                                <p className="card-description">{product.description}</p>
                                <p className="card-price">{product.price}</p>
                                <Link to={`${product.slug}`} state={`${product.slug}`} className="btn btn-primary">Details</Link>
                            </div>
                            </div>

                    </div>
            </div>
            )}
            </div>
        </div>
        {/* end  get Products */}  </>
}
