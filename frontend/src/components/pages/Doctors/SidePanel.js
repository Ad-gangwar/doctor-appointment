import React from 'react'
import convertTime from '../../../utils/convertTime';

export default function SidePanel({ doctorId, ticketPrice, timeSlots }) {
  return (
    <div className=' shadow-panelShadow p-3 lg:p-5 rounded-md'>
      <div className='flex items-center justify-between'>
        <p className='text_para mt-0 font-semibold'>Total Price</p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
          Rs. {ticketPrice}/-
        </span>
      </div>

      <div className='mt-[30px]'>
        <p className='text_para mt-0 font-semibold text-headingColor'>Available Time Slots: </p>
      </div>
      <ul className='mt-3'>
        {timeSlots?.map((item, index) => (
          <li className='flex items-center justify-between mb-2' key={index}>
            <p className='text-[15px] leading-6 text-textColor font-semibold'>
              {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
            </p>
            <p className='text-[15px] leading-6 text-textColor font-semibold'>
              {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
            </p>

          </li>
        ))}
      </ul>

      <div className='btn rounded-md w-full px-2 text-center'>Book Appointment</div>
    </div>
  )
}
