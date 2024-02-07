import React from 'react'
import { URL } from '../../utils/config';
import UserFetchData from '../../hooks/userFetchData';
import DoctorCard from '../../components/shared/DoctorCard';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';

export default function MyBookings() {
  const { data: appointments, loading, error } = UserFetchData('/user/appointments/my-appointments');

  return (
    <div>
      {loading && !error && <Loading />}

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {appointments.map((doctor, index) => (
            <DoctorCard doctor={doctor} key={index} />
          ))}
        </div>
      )}

      {!loading && !error && appointments.length===0 && (
        <h2 className='mt-7 text-center leading-7 text-[20px] font-semibold text-primaryColor'>
          You did not booked any doctor's appointment yet!
        </h2>
      )}
    </div>
  )
}
