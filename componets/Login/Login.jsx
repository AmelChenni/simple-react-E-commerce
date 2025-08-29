import { useFormik } from 'formik';
import './Login.css'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';



export default function Login(props) {
  
    let [errors,setErrors] =useState("");
      let[data,setData] = useState([]);
      const navigate = useNavigate();
  
  
    const schema = Yup.object({
      email :Yup.string().required('email is required').email('Email Not Valid'),
      password :Yup.string().required(' password is required'),
    })

     let formik = useFormik({
          initialValues :{
            email:"",
            password: "",
    
          },validationSchema :schema,
          onSubmit:sendLoginData,
          })

  async function sendLoginData(values){
  try{
    let {data} = await axios.post('https://api.escuelajs.co/api/v1/auth/login',values);
      // console.log(data);
      // console.log("data");
      localStorage.setItem('userToken',data.access_token)
      props.info();

      // console.log(localStorage.getItem('userToken'));
      
      // setData(data);
      formik.resetForm();
      navigate('/cart');
    }catch (error){
      setErrors(error.response.data.message);  
      console.log("error");
      console.log(error.response.data.message);
        
   }   
  }
  return (
      <div className='container-login w-100'>
     <form 
     className="login-form" autoComplete="off" role="main"
     onSubmit={formik.handleSubmit}>
  <h1 className="a11y-hidden">Login Form</h1>
 

  <div>
        {errors && <p className='text-danger'>*Email Or password not Correct</p>}
    <label className="label-email">
      <input type="email" className="text"  placeholder="name" tabIndex={1} required 
      name="email" 
      value={formik.values.email}
      onBlur={formik.handleBlur}
      onChange={formik.handleChange} />
      <span className="required">Email</span>
    </label>
    {formik.touched.email &&formik.errors.email?<p className='text-danger'>*{formik.errors.email}</p>: ''}

  </div>

  <input type="checkbox" name="show-password" className="show-password a11y-hidden" id="show-password" tabIndex={3} />
  <label className="label-show-password" htmlFor="show-password">
    <span>Show Password</span>
  </label>
  <div>
    <label className="label-password">
      <input type="text" className="text" placeholder="Password" tabIndex={2} required
       name="password"  
       value={formik.values.password}
       onBlur={formik.handleBlur}
       onChange={formik.handleChange}/>
      <span className="required">Password</span>
    </label>
   {formik.touched.password && formik.errors.password?<p className='text-danger'>*{formik.errors.password}</p>: ''}

  </div> 
  
  <button type="submit" className='submit' defaultValue="Log In" >Login</button>
  <div className="email">
    {/* <a href="#" >Forgot password?</a> */}
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
  )}
