import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import './app.scss'
import { Navbar } from './components/Navbar';
import { Slogan } from './components/Slogan';
import axios from 'axios';


function App() {

  const [data, setdata] = useState({
   
    Brand: '',
    explanation: '',
    Price : ''
  })
  useEffect(() => {
    axios.get('http://localhost:3000/products')
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
        <div className="container">
          <h2>Featured Products</h2>
          <div className="row">
            <div className="col-4" style={{ background: 'red', height: '450px' }}>
              <div className='products__brand'>{Brand}</div>
              <div className='products__text'>{explanation}</div>
              <div className='price'>{Price}</div>
              
            </div>
            {/* <div className="col-4"></div>
            <div className="col-4"></div> */}

          </div>
        </div>
      </section>

      {
        data.map((element, i) => <p key={i}> {element.Brand}  </p>)
      }

    </>
  )
}

export default App
