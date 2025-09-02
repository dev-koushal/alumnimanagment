import React from 'react'
import { Link, Routes, Route, Outlet } from 'react-router'
import StudentLogin from './StudentLogin'
import AlumniLogin from './AlumniLogin'
import AdminLogin from './AdminLogin'
import Services from "../Service"
import Contact from '../Contact'
import Home from '../Home'

const Loginpage = () => {
  return (
    <>
    <div className='bg-blue-100'>
    <Home />
    <Services />
    <Contact />
    <Outlet />
    </div>
    </>
  )
}

export default Loginpage