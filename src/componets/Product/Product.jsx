import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom';

export default function Product(props) {
    console.log("props");
    console.log(props);
    
    
  return (
    <>
      <div className="card">
  <img className="card-img-top " src={props.images?.[0]} alt={props.title||""} />
  <div className="card-body">
    <h5 className="card-title">{props?.title}</h5>
    <p className="card-text">  {props.description?.substring(0, 100)}...</p>
    {props.showButton &&<Link href="#" className="btn btn-primary" to={`product/${props.id}`} >Details</Link>}
  </div>
</div>

    </>
  )
}
