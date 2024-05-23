import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Admin() {

    const [info, setinfo] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/products')
        .then(res=>setinfo(res.data))
    }, [])


    return (
        <>
            <div className='d-flex flex-column align-items-center gap-3'>
                
            <table className='container mt-5'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Brand</th>
                        <th>About</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        info.map((el) => {
                            return (
                                <tr>
                                    <td>{el.id}</td>
                                    <td><div className='tableImg'><img src={el.image} alt="" /></div></td>
                                    <td>{el.brand}</td>
                                    <td>{el.about}</td>
                                    <td>{el.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
            <Link to='/addpage'><button className='btn btn-outline-danger w-100'>Add</button></Link>
            </div>
        </>
    )
}

export default Admin