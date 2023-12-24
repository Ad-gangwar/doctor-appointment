import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();

  let id = localStorage.getItem("userId");
  
  const [name, setName] = useState("");

  function handleLogout() {
    localStorage.removeItem("authToken");
    navigate("/login");
  }


  useEffect(() => {
    if (id) {
      async function fetchUserName() {
        try {
          const response1 = await fetch("http://localhost:5000/user/"+id);
          const response2 = await fetch("http://localhost:5000/doctor/"+id);
          const data1 = await response1.json();
          const data2 = await response2.json();
          if (data1.success) {
            setName(data1.data.name);
          }
          else if(data2.success){
            setName(data2.data.name)
          } 
          else {
            console.error("Failed to fetch user data");
          }
        } catch (error) {
          console.error("Error fetching user data", error);
        }
      }
      fetchUserName();
    }
  }, [id]);
  // console.log(name);

  function abbreviateName(name) {
    const words = name.split(' ');
    const initials = words.map(word => word.charAt(0).toUpperCase());
    const abbreviatedName = initials.join('');
    return abbreviatedName;
 }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-row sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fst-italic fw-bold mx-3" to="/">Appoint-Well</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li className='nav-item'><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
            <li className='nav-item'><Link to="/doctors" className="nav-link px-2 link-dark">Find a Doctor</Link></li>
            <li className='nav-item'><Link to="/services" className="nav-link px-2 link-dark">Services</Link></li>
            <li className='nav-item'><Link to="/contact" className="nav-link px-2 link-dark">Contact</Link></li>
            <li className='nav-item'><Link to="/about" className="nav-link px-2 link-dark">About</Link></li>
          </ul>

        </div>
      </div>
      {!localStorage.getItem("authToken") ?
        <div className="col-md-3 mx-3 text-end">
          <button type="button" className="btn btn-outline-primary mx-2" onClick={() => {
            navigate("/login")
          }}>Login</button>
          <button type="button" className="btn btn-primary mx-2" onClick={() => {
            navigate("/register")
          }}>Sign-up</button>
        </div> :
        <div className="col-md-3 mx-3 text-end">
          <button type="button" className="btn btn-outline-primary mx-2 rounded-circle" onClick={()=>{
            navigate("/profile")
          }}>{abbreviateName(name)}</button>
          <button type="button" className="btn btn-primary mx-2" onClick={handleLogout}>Log Out</button>
        </div>
      }

    </nav>
  )
}