import React from 'react';
import { Link } from 'react-router-dom';
import starIcon from '../../assets/images/Star.png';
import { BsArrowRight } from 'react-icons/bs';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={doctor.photo} className="w-full" alt={doctor.name} />
      </div>
      <h2 className='text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor font-[700] mt-3 lg:mt-5'>
        {doctor.name}
      </h2>
      <div className='mt-2 lg:mt-4 flex items-center justify-between'>
        <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded'>
          {doctor.specialization}
        </span>

        <div className='flex items-center gap-[6px]'>
          <span className='flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-semibold text-headingColor'>
            <img src={starIcon} alt='' />
            {doctor.avgRating}
          </span>
          <span className='text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor'>
            ({doctor.totalRating})
          </span>
        </div>
      </div>

      <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
        <div>
          <p className='text-[18px] leading-6 font-[400] text-textColor'>
            At {doctor.experiences && doctor.experiences[0]?.hospital}
          </p>
        </div>
        <Link to={`/doctors/${doctor._id}`} className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-primaryColor hover:border-none'><BsArrowRight className='group-hover:text-white w-6 h-5' /></Link>
      </div>
    </div>
  );
};

export default DoctorCard;
