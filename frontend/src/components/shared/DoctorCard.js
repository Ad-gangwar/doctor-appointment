import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const DoctorCard = ({ doctor }) => {
    const navigate=useNavigate();
  return (
    <div className="card mb-4 w-75">
      <img
        src={doctor.photo}
        className="card-img-top"
        alt={doctor.name}
        style={{ height: '300px',objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <div className="mb-auto">
          <h5 className="card-title">{doctor.name}</h5>
          <div className="mb-2">
            <div className="bg-light p-2 rounded">{doctor.specialty}</div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <div>
            <span className="me-2">Rating: {doctor.avgRating}</span>
          </div>
          <div onClick={()=>{
                navigate(`/doctors/${doctor.id}`)
              }} className='cursor-pointer'><Icon icon="icons8:right-round" width={50} /></div>
          </div>
        </div>
      </div>
  );
};

export default DoctorCard;
