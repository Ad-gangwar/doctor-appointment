import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doctors } from '../../../assets/data/doctors';
import { faqs } from '../../../assets/data/faqs';
import doctorImg from '../../../assets/images/doctor-img02.png';
import starIcon from '../../../assets/images/Star.png';
import AboutDoctor from './AboutDoctor';
import Feedback from './Feedback';
import SidePanel from './SidePanel';
import userFetchData from '../../../hooks/userFetchData'
import Loader from '../../Loader/Loading'
import Error from '../../Error/Error'

export default function DoctorDetails() {
  const [tab, setTab] = useState("about");

const {data: doctor, loading, error} = userFetchData("/doctor/profile/me");
  return <section>
    <div className='max-w-[1170px] px-5 mx-auto'>
    {loading && <Loader />}
      {error && <Error />}

      {!loading && !error && <div className='grid md:grid-cols-3 gap-[50px]'>
        <div className='md:col-span-2'>
          <div className='flex items-center gap-5'>
            <figure className='max-w-[200px] max-h-[200px]'>
              <img src={doctorImg} alt='' className='w-full' />
            </figure>

            <div>
              <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
                {doctor.specialization}
              </span>
              <h3 className=' text-headingColor text-[22px] leading-9 mt-3 font-bold'>
                {doctor.name}
              </h3>
              <div className='flex items-center gap-[6px]'>
                <span className='flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
                  <img src={starIcon} alt='' />{doctor.avgRating}
                </span>
                <span className='text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
                  ({doctor.totalRating})
                </span>
              </div>

              <p className='text_para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]'>
                {doctor.bio}
              </p>
            </div>
          </div>
          
          <div className='mt-[50px] border-b border-solid border-[#0066ff34]'>
            <button onClick={()=> setTab('about')}
              className={`${tab==='about' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
            >About</button>
            <button onClick={()=> setTab('feedback')}
              className={`${tab==='feedback' && 'border-b border-solid border-primaryColor'} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
            >Feedback</button>
          </div>
         <div className='mt-[50px]'>
          {tab==='about' && <AboutDoctor doctor={doctor}/>}
          {tab==='feedback' && <Feedback reviews = {doctor.reviews} totalRating = {doctor.totalRating}/>}
         </div>
        </div>

        <div>
          <SidePanel doctorId={doctor._id} ticketPrice={doctor.ticketPrice} timeSlots= {doctor.timeSlots}/>
        </div>
      </div>}
    </div>
  </section>
}
