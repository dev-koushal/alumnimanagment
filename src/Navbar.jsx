import React from 'react'
import { Link, Outlet } from 'react-router'
import { motion } from "motion/react"
function Navbar() {
  return (
   <>
   <motion.div initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}}  className="navbar fixed bg-base-100 shadow-sm z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-2 w-52 p-2 shadow">
       <li><a href='#home' >Home</a></li>
        <li>
          <a>Login</a>
          <ul className="p-2">
             <li> <Link to='Student'>Login as Student</Link></li>
            <li><Link to='Admin'>Login as Admin</Link> </li>
            <li><Link to='Alumni'>Login as Alumni</Link></li>
          </ul>
        </li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
    </div>
    <div className="btn btn-ghost text-xl"><Link to='/'>AMS</Link></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[18px]">
      <ul className='flex gap-20'>
      <li><a href='#home' >Home</a></li>
      <li><a href='#services'>Services</a></li>
      <li><a href='#contact'>Contact</a></li>
      </ul>
      <li>
        <details>
          <summary className='shadow-[0_0_0_2px_white] rounded-full ml-80 mr-32'>Login/Register</summary>
          <ul className="p-2 w-60 right-0 top-10 transition ease-in-out duration-1000">
            <li> <Link to='Student'>Login as Student</Link></li>
            <li><Link to='Admin'>Login as Admin</Link> </li>
            <li><Link to='Alumni'>Login as Alumni</Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</motion.div>
<Outlet/>
   </>
  )
}

export default Navbar