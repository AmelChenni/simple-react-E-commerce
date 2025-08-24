import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  return (
    <>
     <nav id="navbar" className="navbar navbar-expand-lg ">
  <div className="container ">
    <Link className="navbar-brand" to="">A-Shop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      </ul>

       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white" to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="about">About</Link>
        </li>  
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}
