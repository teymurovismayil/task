import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



function Admin() {

    const [info, setinfo] = useState([])
    const [value, setvalue] = useState("")
    const [change, setchange] = useState('def')

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(res => setinfo(res.data))
    }, [])


    const deleteel = (id) => {
        axios.delete('http://localhost:3000/products/'+id)
    }

    const searchData = info.filter(inf=>{
        return inf.brand.toUpperCase().startsWith(value.toUpperCase())
    })

    
    const filterData = () => {
        if (change == 'inc') {
            return searchData.toSorted((a,b)=>a.price - b.price)
        }
        else if (change == 'dec') {
            return searchData.toSorted((a,b)=>b.price - a.price)
        }
        else {
            return searchData
        }
    }


    return (
        <>
         
            <div className='d-flex flex-column align-items-center gap-3'>
                <input className='mt-4 w-50 p-2' type="text" placeholder='Search' onInput={(e)=>setvalue(e.target.value)} />
                <select onChange={(e)=>setchange(e.target.value)}>
                    <option value="def">Default</option>
                    <option value="inc">Artan</option>
                    <option value="dec">Azalan</option>
                </select>
                <table className='container mt-5'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Brand</th>
                            <th>About</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterData().map((el) => {
                                return (
                                    <tr>
                                        <td>{el.id}</td>
                                        <td><div className='tableImg'><img src={el.image} alt="" /></div></td>
                                        <td>{el.brand}</td>
                                        <td>{el.about}</td>
                                        <td>{el.price}</td>
                                        <td><Link to={'/edit/' + el.id}><button className='btn btn-outline-danger'>Edit</button></Link></td>
                                        <td><button onClick={(e) => deleteel(el.id)} className='btn btn-outline-danger'>Delete</button></td>
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