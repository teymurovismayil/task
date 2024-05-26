import React from 'react'

function Footer() {
    return (
        <section id="footer">
            <div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-2">
                            <h3>Navigations</h3>
                            <ul>
                                <li>Sell online</li>
                                <li>Features</li>
                                <li>Shopping cart</li>
                                <li>Store builder</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-2">
                            <ul>
                                <li>Mobile commerce</li>
                                <li>Dropshipping</li>
                                <li>Website development</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-2">
                            <ul>
                                <li>Point of sale</li>
                                <li>Hardware</li>
                                <li>Software</li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-2">
                            <h3>Promo</h3>
                            <div style={{ height: '130px' }}>
                                <img src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
                            </div>
                            <p><a href="#">Finding Your Perfect Shoes</a></p>
                            <p>Promo from nuary 15 — 25, 2019</p>
                        </div>
                        <div className="col-12 col-md-2">
                            <h3>Contact Info</h3>
                            <ul>
                                <li>203 Fake St. Mountain View, San Francisco, California, USA</li>
                                <li>+2 392 3929 210</li>
                                <li>emailaddress@domain.com</li>
                            </ul>
                            <h2>Subscribe</h2>
                            <div className='d-flex'>
                                <input type="text"  placeholder='Email'/>
                                <button className='btn btn-outline-secondary'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-center'>
                    Copyright ©2024 All rights reserved | This template is made with  by Colorlib
                </p>
            </div>
        </section>
    )
}

export default Footer