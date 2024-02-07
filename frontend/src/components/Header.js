import React, { useEffect, useState, useRef, useContext } from 'react'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi';
import { useCookies } from "react-cookie";
import logo from '../assets/images/logo.png';
import { AuthContext } from './context/AuthContext';

export default function Header() {
  const navigate = useNavigate();
  const { user} = useContext(AuthContext);
  const [cookies] = useCookies(["token"]);
  const token=cookies.token;
  // let id = localStorage.getItem("userId");

  const menuRef = useRef(null);

  const navLinks = [
    {
      path: 'home',
      display: 'Home'
    },
    {
      path: '/doctors',
      display: 'Find a Doctor'
    },
    {
      path: '/services',
      display: 'Services'
    },
    {
      path: '/contact',
      display: 'Contact'
    }
  ]

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <header className='header flex items-center sticky_header'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* name of the website */}
          <div>
            <img src={logo} alt=''></img>
          </div>

          {/* menu */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {
                navLinks.map((link, index) => {
                  return <li key={index}>
                    <NavLink to={link.path}
                      className={navClass =>
                        navClass.isActive ?
                          'text-primaryColor text-[16px] leading-7 font-[600]'
                          : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>
                      {link.display}
                    </NavLink>
                  </li>
                })
              }
            </ul>
          </div>

          {/* ----------------nav right--------- */}
          <div className='flex items-center gap-4'>
            {token && user ? (
              <div>
                <Link to={`${user.role==='doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                  <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                    <img src={user?.photo} className='w-full rounded-full' alt=''></img>
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to='/login'>
                <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
              </Link>
            )}

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}