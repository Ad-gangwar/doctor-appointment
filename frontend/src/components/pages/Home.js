import React from 'react'
import heroImg01 from '../../assets/images/hero-img01.png';
import heroImg02 from '../../assets/images/hero-img02.png';
import heroImg03 from '../../assets/images/hero-img03.png';
export default function Home() {
  return (
    <div className='vh-90 w-100 d-flex position-relative'>
    
      <div className='container d-flex flex-column justify-content-center align-items-center text-center mx-3 '>
      <div className='w-75 text-start'>
        <div className='my-3'>
          <h1 className='fw-bold '>We help patients live a healthy, longer life.</h1>
        </div>
        <div className='my-3'>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
          </p>
        </div>
        <div className='my-5'>
          <button className='btn btn-primary rounded-pill d-block'>Request an Appointment</button>
        </div>
        <div className='d-flex my-3'>
          <div style={{fontSize: "0.9rem", marginRight: "5px"}} ><span className='d-block fs-3 fw-bold'>30+</span> years of experience</div>
          <div style={{fontSize: "0.9rem"}} className='mx-3'><span className='d-block fs-3 fw-bold'>15+</span> Clinic Locations</div>
          <div style={{fontSize: "0.9rem"}} className='mx-3'><span className='d-block fs-3 fw-bold'>100+</span> Patients satisfaction</div>
        </div>
      </div>
   </div>
      <div className='container mt-3'>
        <div className='row'>
          <div className='col-lg-6 p-3'>
            <img src={heroImg01} alt="Hero 1" style={{ height: '75%', marginBottom: '20px' }}/>
          </div>
          <div className='col-lg-6 p-3'>
            <div className='row'>
              <div className='col-lg-12'>
                <img src={heroImg02} style={{ height: '80%', marginTop: '20px' }} alt="Hero 2" />
              </div>
              <div className='col-lg-12'>
                <img src={heroImg03} style={{ height: '80%' }} alt="Hero 3" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}