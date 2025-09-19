import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router'
import { motion } from "motion/react"
function Navbar() {
 const navigate=  useNavigate(); 
  return (
   <>
   <motion.div initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}}  className="navbar fixed mt-2 h-12 rounded-full shadow-md shadow-gray-800 z-50 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100  border-gray-500 
        bg-[#80808030] text-[#8236c1] border-[1px] font-Inter">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-2 w-52 p-2 shadow">
       <li><a href='#home' onClick={()=>navigate('/')} >Home</a></li>
        <li>
          <a>Login</a>
          <ul className="p-2">
             <li> <Link to='studentcard'>Login as Student</Link></li>
            <li><Link to='Admin'>Login as Admin</Link> </li>
            <li><Link to='Alumni'>Login as Alumni</Link></li>
          </ul>
        </li>
        <li><a href='#services ' onClick={()=>navigate('/')}>Services</a></li>
      <li><a href='#contact' onClick={()=>navigate('/')}>Contact</a></li>
      </ul>
    </div>
    <div className="btn btn-ghost text-xl text-neutral hover:bg-white border-0 rounded-full"><Link to='/'>A.M.S</Link></div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[18px]">
      <ul className='flex gap-20 font-bold'>
      <li><a href='#home' onClick={()=>navigate('/')} >Home</a></li>
      <li><a href='#services ' onClick={()=>navigate('/')}>Services</a></li>
      <li><a href='#contact' onClick={()=>navigate('/')}>Contact</a></li>
      </ul>
      <li>
        <details>
          <summary className='shadow-[0_0_0_1px_black] rounded-full ml-80 mr-32 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-0 backdrop-saturate-80 backdrop-contrast-150  border-gray-500 
        bg-[#80808030]'>Login/Register</summary>
          <ul className="p-2 w-60 right-0 top-10 transition ease-in-out duration-1000">
            <li> <Link to='studentcard' className='text-white'>Login as Student</Link></li>
            <li><Link to='Admin' className='text-white'>Login as Admin</Link> </li>
            <li><Link to='Alumni' className='text-white'>Login as Alumni</Link></li>
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