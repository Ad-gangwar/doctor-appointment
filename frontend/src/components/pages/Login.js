import React, { useState } from 'react';
import Input from '../shared/Input';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        if (response.status === 200) {
            const json = await response.json();
            if (!json.success) {
                alert('Enter valid credentials');
            }
            else {
                localStorage.setItem("authToken", json.authToken)
                localStorage.setItem("userId", json.data.user.id);
                navigate("/");
            }


        } else {
            alert('User not found! Please signup.');
        }
    }


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


