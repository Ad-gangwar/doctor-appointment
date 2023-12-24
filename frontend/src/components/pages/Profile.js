import React, { useEffect, useState } from 'react';

const DoctorProfile = ({ doctor }) => {
    if (!doctor) {
        return <p>Loading...</p>;
    }
    //   console.log(doctor);
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Doctor Profile</h1>
            <div className="row">
                <div className="col-md-6">
                    <p><strong>Email:</strong> {doctor.email === null ? 'Not available' : doctor.email}</p>
                    <p><strong>Name:</strong> {doctor.name}</p>
                    <p><strong>Role:</strong> {doctor.role}</p>
                    <p><strong>Qualifications:</strong> {doctor.qualifications.length > 0 ? doctor.qualifications.join(', ') : 'Not available'}</p>
                    <p><strong>Experiences:</strong> {doctor.experiences.length > 0 ? doctor.experiences.join(', ') : 'Not available'}</p>
                </div>
                <div className="col-md-6">
                    <p><strong>Time Slots:</strong> {doctor.timeSlots.length > 0 ? doctor.timeSlots.join(', ') : 'Not available'}</p>
                    <p><strong>Reviews:</strong> {doctor.reviews.length > 0 ? doctor.reviews.join(', ') : 'Not available'}</p>
                    <p><strong>Average Rating:</strong> {doctor.averageRating}</p>
                    <p><strong>Total Rating:</strong> {doctor.totalRating}</p>
                    <p><strong>Approval Status:</strong> {doctor.isApproved}</p>
                </div>
            </div>
        </div>
    );
};
const UserProfile = ({ user }) => {
    if (!user) {
        return <p>Loading...</p>;
    }
    return (
        <div className="container mt-5">
            <h1 className="mb-4">User Profile</h1>
            <div className="row">
                <div className="col-md-6">
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Role:</strong> {user.role}</p>
                    <p><strong>Gender:</strong> {user.gender}</p>
                </div>
                <div className="col-md-6">
                    <p><strong>Appointments:</strong> {user.appointments.length > 0 ? user.appointments.join(', ') : 'No appointments'}</p>
                </div>
            </div>
        </div>
    );
};
// Example usage
const Profile = () => {
    const [data, setData] = useState([]);
    let id = localStorage.getItem("userId");

    useEffect(() => {
        if (id) {
            async function fetchUserName() {
                try {
                    const response1 = await fetch("http://localhost:5000/user/" + id);
                    const response2 = await fetch("http://localhost:5000/doctor/" + id);
                    const data1 = await response1.json();
                    const data2 = await response2.json();
                    if (data1.success) {
                        setData(data1);
                    }
                    else if (data2.success) {
                        setData(data2)
                    }
                } catch (error) {
                    console.error("Error fetching user data", error);
                }
            }
            fetchUserName();
        }
    }, [id]);

    console.log(data.data);
    return (
        <div>
            {data.data && data.data.role === "doctor" ? (
          <DoctorProfile doctor={data.data} />
        ) : (
          <UserProfile user={data.data} />
        )}
        </div>
    );
};


export default Profile;





