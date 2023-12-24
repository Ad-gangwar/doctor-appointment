import React, { useState } from 'react';
import Input from '../shared/Input';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [gender, setGender] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/auth/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name,
                role: role,
                gender: gender,
                phone: ""
            })
        });

        if (response.status === 200) {
            const json = await response.json();
            console.log(json);
            if (!json.success) {
                alert('Enter valid credentials');
            } else {
                navigate("/login");
            }
        } else {
            alert('Server error');
        }
    }
   
    return (
        <div className='h-100 w-100 d-flex flex-column font-poppins'>
            <div className='w-100 d-flex'>
                <main className="form-signin m-auto mt-4 w-25">
                    <h2 className='fw-bold my-3'>Create an Account</h2>
                    <form className='mb-3' onSubmit={handleSubmit}>
                        <Input label="Full name" placeholder="Enter your Full name." type="text" value={name} setValue={setName} />
                        <Input label="What's your email?" placeholder="Enter your email." type="email" value={email} setValue={setEmail} />
                        <Input label="Create a password" placeholder="Password." type="password" value={password} setValue={setPassword} />
                        <div className='d-flex justify-content-between'>
                            <label htmlFor=''>Are you a:
                                <select name='role' value={role} onChange={(e) => {
                                    setRole(e.target.value);
                                    // console.log('Role:', e.target.value); 
                                }}>
                                    <option value="doctor">Doctor</option>
                                    <option value="patient">Patient</option>
                                </select>
                            </label>
                            <label htmlFor=''>Gender:
                                <select name='gender' value={gender} onChange={(e) => {
                                    setGender(e.target.value);
                                    // console.log('Gender:', e.target.value);
                                }}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </label>
                        </div>

                        <div className='d-flex justify-content-center mt-5 mb-3'>
                            <button type="submit" className="btn rounded-pill py-3 px-5 text-dark fw-bold border-0" style={{ backgroundColor: "#00cd10" }}>Sign Up</button>
                        </div>
                    </form>
                    <div className='d-flex justify-content-center' style={{ fontWeight: "600" }}>
                        <div className='mx-2'>Have an account?</div>
                        <Link to="/login" className='text-success'>Log In</Link>
                    </div>

                </main>
            </div>
        </div>
    )
}


