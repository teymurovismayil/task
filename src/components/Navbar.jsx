import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { FaBasketShopping } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {

    const [isOpen, setisOpen] = useState(false)
    const [isAboutOpen, setisAboutOpen] = useState(false)

    return (

        <div className="container p-3 mt-2">
            <div className="row align-items-center p-2">
                <div className='col-6 col-lg-4 col-md-4  order-2 order-md-1'><form><IoSearchSharp /><input style={{ border: 'none' }} type="text" placeholder='Search' /></form></div>
                <div className="col-lg-4 col-md-4 col-xs-12 order-1 order-md-2 d-flex justify-content-center">
                    <div className="logo"><a href="#">Shoppers</a></div>
                </div>
                <div className="icons col-6 col-lg-4 col-md-4 order-3 order-md-3  d-flex justify-content-end align-items-center gap-3 ">
                    <IoMdPerson className='icon' />
                    <FaRegHeart className='icon' />
                    <FaBasketShopping className='icon' />
                    <GiHamburgerMenu className='icon dropIcon' />
                </div>
            </div>

            <div className="lists">
                <ul>
                    <li onClick={() => setisOpen(!isOpen)}>Home <FaAngleDown />
                        {isOpen && (
                            <div className='dorowMenu'>
                                <p>Option A</p>
                                <p>Option B</p>
                                <p>Option C</p>
                            </div>
                        )}
                    </li>
                    <li onClick={() => setisAboutOpen(!isAboutOpen)}>About <FaAngleDown />
                        {isAboutOpen && (
                            <div className='dorowMenu'>
                                <p>Option A</p>
                                <p>Option B</p>
                                <p>Option C</p>
                            </div>
                        )}
                    </li>
                    <li>Shop</li>
                    <li>Cataloge</li>
                    <li>New Arrivals</li>
                    <li>Contact</li>
                    <Link to='/admin'><li>Admin</li></Link>
                </ul>
            </div>

        </div>


    )
}
