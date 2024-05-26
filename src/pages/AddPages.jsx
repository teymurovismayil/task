import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"




export const AddPages = () => {

  const [image, setimage] = useState(null)

  const convertoBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setimage(reader.result)
    }
  }




  const { register, formState: { errors }, handleSubmit } = useForm()
  const onSubmit = (data) => {
    axios.post('http://localhost:3000/products', { ...data, image: image })
  }



  return (


    <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column align-items-center  mt-5 gap-3'>
      <label>Mehsulun adini yazin :
        <input {...register("brand", { required: true })}
          aria-invalid={errors.brand ? "true" : "false"} />
        {errors.brand?.type === 'required' && <p className='ErrorAlert' role="alert">Brand Daxil Edilmeyib</p>}
      </label>
      <label>Mehsulun haqqinda melumat :
        <input {...register("about", { required: true })}
          aria-invalid={errors.about ? "true" : "false"}

        />
        {errors.about?.type === 'required' && <p className='ErrorAlert' role="alert">Haqqinda Hec Bir Melumat Yazilmayib</p>}
      </label>
      <label>Mehsulunun qiymeti:
        <input {...register("price", { required: true })}
          aria-invalid={errors.price ? "true" : "false"} />
        {errors.about?.type === 'required' && <p className='ErrorAlert' role="alert">Qiymet Haqqinda Hec Bir Melumat Yazilmayib</p>}
      </label>
      <label>Image :
        <input type="file" onInput={(e) => convertoBase64(e.target.files[0])} />
      </label>

      <input className='btn btn-outline-danger' type="submit" />
    </form>


  )
}
