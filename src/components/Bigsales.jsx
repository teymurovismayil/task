import React from 'react'

function Bigsales() {
  return (
    <>
    
        <section id="bigsales">
            <h2 style={{marginTop:'120px',  textAlign:'center'}}>Big Sale</h2>
            <div className="container mt-5">
                <div className="row g-3">
                    <div className="col-12 col-md-6">
                        <img style={{width:'100%', height:'100%', objectFit:'cover'}} src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg" alt="" />
                    </div>
                    <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center gap-3">
                    <div className="d-flex flex-column align-items-center justify-content-center gap-3" style={{width:'70%'}}>
                        <h2><a href="#">50% less in all items</a></h2>
                        <p><a href="#">By Carl Smith • September 3, 2018</a></p>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?
                        </p>
                        <button className='btn btn-outline-secondary'>SHOP NOW</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    
    </>
  )
}

export default Bigsales