import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


export default function Register() {
    let [errors,setErrors] =useState([]);
    let[data,setData] = useState([]);
    const navigate = useNavigate();


  const schema = Yup.object({
    name :Yup.string().required('name is required').max(15,'Must be 15 charagter or less'),
    email :Yup.string().required('email is required').email('Email Not Valid'),
    password :Yup.string().required(' password is required'),
    avatar :Yup.string().required(' avatar is required'),
  })

  

    let formik = useFormik({
      initialValues :{
        name : "",
        email:"",
        password: "",
        // cPassword : '',
        avatar: "",

      },validationSchema :schema,
      onSubmit:sendRegisterData,
      })
    async function sendRegisterData(values){
  try{
    let {data} = await axios.post('https://api.escuelajs.co/api/v1/users/',values);
      setData(data);
      formik.resetForm();
      navigate('/login');
    }catch (error){
      setErrors(error.response.data.message);    
   }   
  }
  // 
  // if(data.length !==0){
  //   console.log("data");
  //   console.log(data);
  // }else{
  //   console.log("no");
    
  // }
  return (
      <div className='container-login w-100'>
     <form 
     className="login-form" autoComplete="off" role="main"
     onSubmit={formik.handleSubmit}>
  <h1 className="a11y-hidden">Login Form</h1>
  <div>
    {errors.map((err)=><p className='text-danger'>*{err}</p>)}
    <label className="label-email">
      <input type="text" className="text"  placeholder="name" tabIndex={1} required 
      name="name" 
      value={formik.values.name} 
      onBlur={formik.handleBlur}
      onChange={formik.handleChange} />
      <span className="required">Name</span>
    </label>
          {formik.touched.name && formik.errors.name?(<p className='text-danger'>*{formik.errors.name}</p>): null}

  </div>

  <div>
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
   <div>
    <label className="label-password">
      <input type="text" className="text"
       name="avatar"
        placeholder="Avatar URL (ex: https://i.pravatar.cc/150?img=3)" tabIndex={4} 
         value={formik.values.avatar}
         onBlur={formik.handleBlur}
          onChange={formik.handleChange}/>

      <span className="required">Avatar</span>
    </label>
  {formik.touched.avatar && formik.errors.avatar?<p className='text-danger'>*{formik.errors.avatar}</p>: ''}

  </div>
  <button type="submit" className='submit' defaultValue="Log In" >Register</button>
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
  )
}
