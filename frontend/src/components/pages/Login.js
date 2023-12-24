import React, { useState } from 'react';
import Input from '../shared/Input';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
// import { makeUnauthPostReq } from '../components/utils/serverHelper';
// import { useCookies } from 'react-cookie';

export default function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [cookie, setCookie] = useCookies(["token"])

    const handleSubmit = async (e) => {
        e.preventDefault();
    //     const data = { email, password };
    //     try {
    //         const response = await makeUnauthPostReq('/auth/login', data);
    //         if (response && !response.err) {
    //             console.log(response);
    //             // Assuming the token is directly present in the response object
    //             const token = response.token;
    //             // console.log(token);
    //             //setting time for the expiry of the token
    //             const date = new Date();
    //             date.setDate(date.getDate() + 30);
    //             setCookie("token", token, { path: "/", expires: date });
    //             // Assuming setCookie updates a state variable named 'cookie'
    //             console.log(cookie);
    //             alert("Logged in Successfully!");
    //             navigate("/");
    //         } else {
    //             alert("Enter valid Credentials!");
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    };


    return (
        <div className='h-100 w-100 d-flex flex-column'>
            <div className='fw-bold text-center mt-5 mb-4 fs-3'>Welcome back!</div>
            <div className='w-100 d-flex'>
                <main className="form-signin m-auto w-25">
                    <form className='mb-3' onSubmit={handleSubmit}>
                        <Input label="Email address or username" placeholder="Email address or username" type="email" value={email} setValue={setEmail}
                        />
                        <Input label="Password" placeholder="Password" type="password" value={password} setValue={setPassword} />

                        <div className='d-flex justify-content-between my-4'>
                            <div className="form-group form-check fw-bold">
                                <input type="checkbox" className="form-check-input" id="Check1" />
                                <label className="form-check-label" htmlFor="Check1">Remember me</label>
                            </div>
                            <button type="submit" className="btn rounded-pill w-25 text-dark py-2 fw-bold border-0" style={{ backgroundColor: "#00cd10" }}>LOG IN</button>
                        </div>
                    </form>
                    <div className='border-bottom border-3'></div>
                    <div className='fw-bold text-center my-4' style={{ fontSize: "1.2rem" }}>Don't have an account?</div>
                    <button type="submit" className="btn rounded-pill w-100 text-secondary fw-bold border-1 border-secondary p-3" onClick={() => {
                        navigate("/register");
                    }}>SIGN UP</button>
                </main>
            </div>
        </div>
    )
}


