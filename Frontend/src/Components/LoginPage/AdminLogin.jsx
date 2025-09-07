import React from 'react'
import {Route,Routes,Link, Outlet} from 'react-router';
export const AdminLogin = () => {
  return (
    <>
    <div className="h-screen flex justify-center items-center bg-neutral">
        <fieldset className="fieldset bg-base-200 border-base-300 m-2 md:m-0 rounded-box w-md h-[350px] border p-6">
          <h1 className="text-2xl">Admin Login</h1> 
          <label className="label">Email</label>
          <input type="email" className="input w-full" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" className="input w-full" placeholder="Password" />

          <button className="btn btn-neutral mt-4">Login</button>
          <button className="btn btn-neutral mt-4"> Register with Google</button>
        </fieldset>
      </div>
    <Outlet />
    </>
  )
}

export default AdminLogin