import React, { useState } from "react";
import { Outlet, Link, useNavigate } from "react-router";
import ExplorePage from "./ExplorePage";
import StudenProfileButton from "./StudenProfileButton";

function StudentExplorePage() {
  const navigate = useNavigate();
  const userName = ExplorePage.alumniname;
  const [cse,SetCse] = useState(false);
  

 



  return (
    <>
        
        <div className="w-full flex justify-end gap-4 items-center bg-neutral">
          <button onClick={()=>navigate('/')} className="btn bg-white text-black border-[#e5e5e5]">
        <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
        Logout
        </button>
            <StudenProfileButton />
        </div>
         <div className="bg-neutral min-h-screen">
        <form className="flex flex-wrap justify-center mt-0.5 p-2 gap-2 md:gap-8 mb-4">
        <button className="btn" >More Filter</button>
        <input className="btn rounded-2xl " type="reset" value="Show All"/>
        <input className="btn rounded-2xl" type="checkbox" name="frameworks" aria-label="CSE"/>
        <input className="btn rounded-2xl" type="checkbox" name="frameworks" aria-label="2025"/>
        <input className="btn rounded-2xl" type="checkbox" name="frameworks" aria-label="2024"/>
        
        </form>
        

        <div className=" flex gap-10  md:flex-row flex-wrap justify-center m-2 ">
        {ExplorePage.map((alumni, index) => (
          <div key={index}>
            <div className="card bg-base-100 md:w-96 w-80 shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  
                  alt="Alumni Image"
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{alumni.alumniname}</h2>
                <p> {alumni.company}</p>
                <hr />
                <p className="text-neutral-400/90">
                   {alumni.branch} ● {alumni.yog} ● {alumni.city} 
                </p>
                <div className="card-actions">
                  <button className="btn btn-primary">Connect</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> 
      </div>
      <Outlet />
    </>
  );
}
export default StudentExplorePage;
