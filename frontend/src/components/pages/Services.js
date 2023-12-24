import React from 'react';

const ServicesPage = () => {
  return (
    <div className="container my-5">
      <div className="card p-4 shadow-lg">
        <h1 className="mb-4 text-center text-primary fw-bold">Our Services</h1>
        <p className="lead">
          Experience the comprehensive services offered by our Doctor Appointment System. We prioritize your health and convenience, providing a range of features to streamline your healthcare journey.
        </p>
        <div className="row">
          <div className="col-md-6">
            <h4 className="mt-4 mb-3">1. Easy Appointment Scheduling</h4>
            <p>
              Schedule appointments with your preferred doctors effortlessly through our user-friendly interface.
            </p>
          </div>
          <div className="col-md-6">
            <h4 className="mt-4 mb-3">2. View Doctor Availability</h4>
            <p>
              Explore available time slots for each doctor, making it convenient for you to choose the most suitable appointment time.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4 className="mt-4 mb-3">3. Appointment Reminders</h4>
            <p>
              Receive timely reminders for your upcoming appointments to help you stay organized and never miss a visit.
            </p>
          </div>
          <div className="col-md-6">
            <h4 className="mt-4 mb-3">4. Patient Feedback and Reviews</h4>
            <p>
              Share your feedback and reviews after each appointment, contributing to the improvement of healthcare services.
            </p>
          </div>
        </div>
        <p className="mt-4">
          Our commitment is to provide you with a seamless and satisfying healthcare experience. We strive to enhance the doctor-patient relationship and ensure your well-being.
        </p>
        <p>
          Thank you for choosing our Doctor Appointment System!
        </p>
      </div>
    </div>
  );
};

export default ServicesPage;
