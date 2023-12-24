import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Router from '../components/Routes/Routers';

const Layout=()=> {
  return (
    <div className='w-100 vh-100'>
      <Header/>
      <main>
        <Router/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout;