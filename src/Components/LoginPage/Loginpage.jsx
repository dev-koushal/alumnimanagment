import React ,{lazy}from 'react'
import { Link, Routes, Route, Outlet } from 'react-router'
import Services from "../Service"
import Contact from '../Contact'
import Home from '../Home'
const  AdminLogin = lazy(()=>import('./AdminLogin'))
const  AlumniLogin = lazy(()=>import('./AlumniLogin'))
const  StudentLogin = lazy(()=>import('./StudentLogin'))

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