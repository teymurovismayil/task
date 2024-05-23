import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useParams } from 'react-router-dom'

function Edit() {

    const [image, setimage] = useState(null)

    const convertoBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setimage(reader.result)
        }
    }

    const {id} = useParams()
    const [info, setinfo] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/products/'+id)
        .then(res=>setinfo(res.data))
    }, [])


    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        axios.patch('http://localhost:3000/products/'+id, { ...data, image: image })
        .then(res=>setimage(res.data))
    }


    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column align-items-center  mt-5 gap-3'>
                <label className='d-flex gap-5'>Mehsulun adini yazin :
                    <input {...register("brand")}  defaultValue={info.brand}/>
                </label>
                <label>Mehsulun haqqinda melumat :
                    <input {...register("about")} defaultValue={info.about}/>
                </label>
                <label>Mehsulunun qiymeti:
                    <input {...register("price")} defaultValue={info.price}/>
                </label>
                <label>Image :
                    <input type="file" onInput={(e) => convertoBase64(e.target.files[0])} />
                </label>

                <input className='btn btn-outline-danger' type="submit" />
            </form>
        </>
    )
}

export default Edit