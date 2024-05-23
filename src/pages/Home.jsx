import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { Slogan } from '../components/Slogan';


function Home() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/products/')
            .then(res => setdata(res.data))
    }, [])
    return (
        <>

            <Navbar />

            <section id='sectionTwo'>

                <div style={{ width: '45%' }}></div>

                <div className='sectionTwo__text'>
                    <h1 >Finding Your Perfect Shoes</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
                    <button className='button'>Shop Now</button>
                </div>


            </section>


            <Slogan />


            <div className='container mt-5 mb-5'>
                <div className="row">
                    <div className="col-12 col-md-5 col-lg-4 mt-4">
                        <img src="https://preview.colorlib.com/theme/shoppers/images/women.jpg.webp" className='image' alt="shekil" />
                    </div>
                    <div className="col-12 col-md-5 col-lg-4 mt-4">
                        <img src="https://preview.colorlib.com/theme/shoppers/images/children.jpg.webp" className='image' alt="shekil" />
                    </div>
                    <div className="col-12 col-md-5 col-lg-4 mt-4">
                        <img src="https://preview.colorlib.com/theme/shoppers/images/men.jpg.webp" className='image' alt="shekil" />
                    </div>
                </div>
            </div>



            <section id='products'>
                <h1 className='mb-5'>Featured Products</h1>
                <div className="container">
                    <div className="row">
                        {/* <div className="col-4 box">
        <div className="prod__image"></div>
      </div> */}
                        {data.map((element, i) =>
                            <div className="col-4 box mb-5">
                                <div className="prod__image">
                                    <img src={element.image} alt="" />
                                </div>
                                <div className='prod__text'>
                                    <h6 className='product-price'>{element.brand}</h6>
                                    <p>{element.about}</p>
                                    <h6 className='product-price'>{element.price}</h6>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home