import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import './Categories.css'
import Products from '../Products/Products';
import { Link } from 'react-router-dom';



export default function Categories() {
     const settings = {
    autoplay :true,    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,

  };



  let [categories, setCategories] = useState([])
  let [category, setCategory] = useState([])

  const getCategories =async()=>{
    let {data} = await axios.get('https://api.escuelajs.co/api/v1/categories')
    setCategories(data);
  }


     const getCategory =async(id)=>{
    let {data} = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
    setCategory(data);
    
  }

  useEffect(()=>{
    getCategories();
  },[])
  return (
    <>            
          <div className="slider-container m-auto">
            <Slider {...settings} >
              {categories.map((cat)=>
                <div className="col-4" key={cat.id} onClick={() => getCategory(cat.id)}>
                    <p>{cat.name}</p>
                    <img src={cat.image} alt="" className="w-50 m-auto" />
                </div>
             )}
            </Slider>
        </div>
             {/* <Products /> */}

        {/* start sub categories */}
        <div className="mt-5">
            <div className="row d-flex flex-wrap justify-content-center ">
                {category.map((cat)=>

                <div className='col-4 d-flex flex-column align-items-center'>
                    {console.log(cat)}

                        <div className="card" style={{width: "18rem"}}>
                            <div>
                            <img className="card-img-top" src={cat.images[0]} alt={cat.slug} />
                            <div className="card-body">
                                <h5 className="card-title">{cat.title}</h5>
                                <p className="card-description">{cat.description}</p>
                                <p className="card-price">{cat.price}</p>
                                <Link to={`${cat.slug}`} state={`${cat.slug}`} className="btn btn-primary">Details</Link>                     
                             </div>
                            </div>

                    </div>
            </div>
            )}
            </div>
        </div>
        {/* end sub categories */}
    </>
  )
}
