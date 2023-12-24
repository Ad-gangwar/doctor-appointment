import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doctors } from '../../../assets/data/doctors';

export default function DoctorDetails() {
  const { id } = useParams();
  const [doctor, setData] = useState({});
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    function fetchData() {
      const selectedDoctor = doctors.find(doctor => doctor.id === id);
      if (selectedDoctor) {
        setData(selectedDoctor);
      }
    }

    fetchData();
  }, [id]);

  const availableSlots = [
    { time: '9:00 AM - 10:00 AM', isAvailable: true },
    { time: '10:30 AM - 11:30 AM', isAvailable: false },
    { time: '12:00 PM - 1:00 PM', isAvailable: true },
    { time: '2:00 PM - 3:00 PM', isAvailable: true },
    { time: '3:30 PM - 4:30 PM', isAvailable: false },
  ];

  const handleSlotClick = (slot) => {
    if (slot.isAvailable) {
      setSelectedSlot(slot);
    } else {
      alert('Slot already booked!');
    }
  };

  return (

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4 mb-4">
          <img
            src={doctor.photo}
            className="img-fluid rounded-circle"
            alt={doctor.name}
            style={{ width: '250px', height: '250px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-8">
          <h2 className='fw-bold'>{doctor.name}'s Profile</h2>
          <p className="mb-2">
            <strong>Specialty:</strong> {doctor.specialty}
          </p>
          <p>
            <strong>Total Rating:</strong> {doctor.totalRating} ({doctor.avgRating} avg)
          </p>
          <p>
            <strong>Total Patients:</strong> {doctor.totalPatients}
          </p>
          <p>
            <strong>Hospital:</strong> {doctor.hospital}
          </p>
          <p>
            <strong>About {doctor.name}:</strong>
            {doctor ? (
              `${doctor.name} is a skilled ${doctor.specialty?.toLowerCase()} with
               a passion for providing exceptional healthcare. With an impressive total
               rating of ${doctor.totalRating} and an average rating of ${doctor.avgRating}, ${doctor.name} has
                successfully treated ${doctor.totalPatients} patients. ${doctor.name} is affiliated with ${doctor.hospital}
              and is dedicated to delivering the highest standard of care to the community.`
            ) : (
              'Loading doctor information...'
            )}
          </p>
        </div>
      </div>

      <h3 className="text-center mt-4 mb-3">Available Slots</h3>

      <div className="row row-cols-3">
        {availableSlots.map((slot, index) => (
          <div
            key={index}
            className={`col mb-3 ${selectedSlot === slot ? 'bg-success' : slot.isAvailable ? 'bg-info' : 'bg-danger'
              }`}
            style={{ cursor: 'pointer' }}
            onClick={() => handleSlotClick(slot)}
          >
            <div className="card-body text-center">
              <p className="card-text">{slot.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
