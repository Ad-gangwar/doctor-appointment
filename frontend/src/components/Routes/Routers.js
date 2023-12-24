import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import Profile from '../pages/Profile';
import About from '../pages/About';
export default function routers() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/doctors' element={<Doctors/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/doctors/:id' element={<DoctorDetails/>}/>
    <Route path='/profile' element={<Profile/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
  )
}
