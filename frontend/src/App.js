import React from 'react';
import Layout from './Layout/Layout';
import './App.css';
import toast, { Toaster, ToastBar } from 'react-hot-toast';
import { AuthContextProvider } from './components/context/AuthContext';

export default function App() {
  return (
    <>
      <AuthContextProvider>
        <Toaster
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
          containerStyle={{ zIndex: "3453534" }}
        />
        <Layout />
      </AuthContextProvider>
    </>
  );
}
