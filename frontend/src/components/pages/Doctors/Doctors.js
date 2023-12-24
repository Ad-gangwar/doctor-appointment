import React from 'react';
import DoctorCard from '../../shared/DoctorCard';
import { doctors } from '../../../assets/data/doctors';

export default function Doctors() {
  return (
    <div className='container'>
      <h2 className='text-center my-4'>Our Great Doctors</h2>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
        {doctors.map((doctor, index) => (
          <div key={index} className='col'>
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </div>
    </div>
  );
}
