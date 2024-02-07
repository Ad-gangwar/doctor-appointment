import React from 'react';
import DoctorCard from '../../shared/DoctorCard';
import { doctors } from '../../../assets/data/doctors';

export default function Doctors() {
  return (
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] container'>
        {doctors.map((doctor, index) => (   
            <DoctorCard doctor={doctor} key={index}/>
        ))}
      </div>
  );
}
