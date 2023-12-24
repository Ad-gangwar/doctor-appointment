import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h1 className="mb-4 text-center text-primary fw-bold">About Us</h1>
        <p className="lead">
          Welcome to our Doctor Appointment System! We are committed to providing you with a seamless and user-friendly experience for managing your healthcare appointments.
        </p>
        <p>
          Our platform offers a range of features to make your experience efficient and enjoyable:
        </p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Schedule Appointments:</strong> Easily book appointments with your preferred doctors.</li>
          <li className="list-group-item"><strong>View Availability:</strong> Explore available time slots for each doctor at your convenience.</li>
          <li className="list-group-item"><strong>Receive Reminders:</strong> Get timely reminders for upcoming appointments to stay organized.</li>
          <li className="list-group-item"><strong>Provide Feedback:</strong> Share your valuable feedback and reviews after each appointment.</li>
        </ul>
        <p className="mt-4">
          Our dedicated team is focused on enhancing the healthcare experience for both patients and doctors. If you have any questions or suggestions, feel free to reach out to us.
        </p>
        <p>
          Thank you for choosing our Doctor Appointment System!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
