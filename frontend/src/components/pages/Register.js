import React, { useState } from 'react';
import Input from '../shared/Input';
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';
// import { makeUnauthPostReq } from '../components/utils/serverHelper';
// import { useCookies } from "react-cookie";

export default function Register() {
    // const [cookie, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [confirmEmail, setconfirmEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email !== confirmEmail) {
            alert("Email and confirm email does not match. Please check again");
            return;
        }
        // const data = { email, username, password, firstName, lastName };
        // const response = await makeUnauthPostReq('/auth/register', data);
        // if (response && !response.err) {
        //     alert("Congratulations! You are successfully registered.");
        //     const token = response.token;
        //     const date = new Date();
        //     date.setDate(date.getDate() + 30);
        //     setCookie("token", token, { path: "/", expires: date });
        //     navigate("/login");
        // }
    }
    return (
        <div className='h-100 w-100 d-flex flex-column font-poppins'>
            <div className='w-100 d-flex'>
                <main className="form-signin m-auto mt-4 w-25">
                <h2 className='fw-bold my-3'>Create an Account</h2>
                    <form className='mb-3' onSubmit={handleSubmit}>
                        <Input label="Full name" placeholder="Enter your Full name." type="text" value={username} setValue={setUsername} />
                        <Input label="What's your email?" placeholder="Enter your email." type="email" value={email} setValue={setEmail} />
                        <Input label="Create a password" placeholder="Password." type="password" value={password} setValue={setPassword} />
                        <div className='d-flex justify-content-between'>
                        <label htmlFor='' >Are you a: 
                            <select name='role'>
                              <option value="Doctor">Doctor</option>
                              <option value="Patient">Patient</option>
                            </select>
                        </label>
                        <label htmlFor=''>Gender: 
                            <select name='gender'>
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


