import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Router from '../components/Routes/Routers';

const Layout = () => {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <Header />
      <main className='flex-grow-1'>
        <Router />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
