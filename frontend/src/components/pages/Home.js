import React from 'react';
import {useNavigate} from 'react-router-dom';
import heroImg01 from '../../assets/images/hero-img01.png';
import heroImg02 from '../../assets/images/hero-img02.png';
import heroImg03 from '../../assets/images/hero-img03.png';
import icon01 from '../../assets/images/icon01.png';
import icon02 from '../../assets/images/icon02.png';
import icon03 from '../../assets/images/icon03.png';
import { Icon } from '@iconify/react';

export default function Home() {
  const navigate=useNavigate();
  return (
    <div>
      <div className='vh-90 w-100 d-flex flex-row position-relative'>
        <div className='container d-flex flex-column justify-content-center align-items-center text-center mx-3 w-50'>
          <div className='w-75 text-start'>
            <div className='my-3'>
              <h1 className='fw-bold '>We help patients live a healthy, longer life.</h1>
            </div>
            <div className='my-3'>
              <p>
              Welcome to our state-of-the-art Doctor Appointment System, where your health is our top priority. Our user-friendly platform is designed to seamlessly connect patients with their preferred healthcare providers, offering a convenient and efficient way to schedule appointments. Experience the ease of exploring doctor availability, receiving timely reminders, and providing valuable feedback after each visit. We prioritize enhancing the doctor-patient relationship, ensuring a personalized and positive healthcare journey. Join us in revolutionizing the way you manage your health – where comprehensive care meets modern convenience. Your well-being, our commitment.
              </p>
            </div>
            <div className='my-5'>
              <button className='btn btn-primary rounded-pill d-block' onClick={()=>{
                navigate("/doctors")
              }}>Request an Appointment</button>
            </div>
            <div className='d-flex my-3'>
              <div style={{ fontSize: "0.9rem", marginRight: "5px" }} ><span className='d-block fs-3 fw-bold'>30+</span> years of experience</div>
              <div style={{ fontSize: "0.9rem" }} className='mx-3'><span className='d-block fs-3 fw-bold'>15+</span> Clinic Locations</div>
              <div style={{ fontSize: "0.9rem" }} className='mx-3'><span className='d-block fs-3 fw-bold'>100+</span> Patients satisfaction</div>
            </div>
          </div>
        </div>
        <div className='container mt-3 w-50'>
          <div className='row'>
            <div className='col-lg-6 p-3'>
              <img src={heroImg01} alt="Hero 1" style={{ height: '75%', marginBottom: '20px' }} />
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

      <div className='d-flex flex-column justify-content-center w-100 align-items-center'>
        <div className='w-25 '>
          <h1 className='fw-bold text-center'>Providing the best medical facilities</h1>
          <div className='text-align-center text-center'>World class care for everyone. Our health system offers unmatched, expert health care.</div>
        </div>
        <div className='d-flex justify-content-around w-100 my-5'>
          <div className='text-center'>
            <div className='p-2'><img src={icon01}></img></div>
            <div className='my-2' >Find a Doctor</div>
            <div onClick={()=>{
                navigate("/doctors")
              }} className='cursor-pointer'><Icon icon="icons8:right-round" width={50}/></div>
          </div>
          <div  className='text-center'>
            <div className='p-2'><img src={icon02}></img></div>
            <div className='my-2'>Find Location</div>
            <Icon icon="icons8:right-round" width={50}/>
          </div>
          <div  className='text-center'>
            <div className='p-2'><img src={icon03}></img></div>
            <div className='my-2'>Book a Appointment</div>
            <div onClick={()=>{
                navigate("/doctors")
              }} className='cursor-pointer'><Icon icon="icons8:right-round" width={50} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
