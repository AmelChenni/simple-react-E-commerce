import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'

export default function Register() {
    let [errors,setErrors] =useState([]);

    let formik = useFormik({
      initialValues :{
        name : "",
        email:"",
        password: "",
        // cPassword : '',
        avatar: ""


      },onSubmit:sendRegisterData,
      })
    async function sendRegisterData(values){
      let {data} = await axios.post('https://api.escuelajs.co/api/v1/users/',values)
      console.log(data);
    } 
    
  return (
      <div className='container-login'>
  
     <form 
    //  method="get" action="javascript: void(0);" id="log in-form" 
     className="login-form" autoComplete="off" role="main"
     onSubmit={formik.handleSubmit}>
  <h1 className="a11y-hidden">Login Form</h1>
  <div>
    <label className="label-email">
      <input type="text" className="text"  placeholder="name" tabIndex={1} required 
      name="name" value={formik.values.name} onChange={formik.handleChange} />
      <span className="required">Name</span>
    </label>
  </div>

  <div>
    <label className="label-email">
      <input type="email" className="text"  placeholder="name" tabIndex={1} required 
      name="email" value={formik.values.email} onChange={formik.handleChange} />
      <span className="required">Email</span>
    </label>
  </div>

  <input type="checkbox" name="show-password" className="show-password a11y-hidden" id="show-password" tabIndex={3} />
  <label className="label-show-password" htmlFor="show-password">
    <span>Show Password</span>
  </label>
  <div>
    <label className="label-password">
      <input type="text" className="text" name="password" placeholder="Password" tabIndex={2} required value={formik.values.password}  onChange={formik.handleChange}/>
      <span className="required">Password</span>
    </label>
  </div> 
   <div>
    <label className="label-password">
      <input type="text" className="text" name="avatar" placeholder="Avatar URL (ex: https://i.pravatar.cc/150?img=3)" tabIndex={4}  value={formik.values.avatar} onChange={formik.handleChange}/>
      <span className="required">Avatar</span>
    </label>
  </div>
  <button type="submit" className='submit' defaultValue="Log In" >Register</button>
  <div className="email">
    <a href="#">Forgot password?</a>
  </div>
  <figure aria-hidden="true">
    <div className="person-body" />
    <div className="neck skin" />
    <div className="head skin">
      <div className="eyes" />
      <div className="mouth" />
    </div>
    <div className="hair" />
    <div className="ears" />
    <div className="shirt-1" />
    <div className="shirt-2" />
  </figure>
</form>

  
  </div>
  )
}
