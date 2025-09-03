import React from "react";
import { Link, Outlet, Routes,Route } from "react-router";
import {motion} from "motion/react"
const StudentLogin = () => {
  return (
    <>
      
       <motion.div initial={{opacity:0,width:0}} animate={{opacity:1,width:"100%"}} transition={{ease:"easeInOut"}} >
         <fieldset className="mt-2 ease-in-out fieldset bg-base-200 border-base-300 m-2 md:m-0 rounded-box 
         w-sm md:w-md  h-[400px] border p-6">
          <h1 className="text-2xl">Student Login</h1> 
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />

          <button className="btn btn-neutral mt-4"><Link to='/student/profile'> Bypass Login</Link></button>
          <button className="btn btn-neutral mt-4">Login</button>
          <button className="btn btn-neutral mt-4"> Register with Google</button>
        </fieldset>
       </motion.div>
   
      
    </>
  );
};

export default StudentLogin;
