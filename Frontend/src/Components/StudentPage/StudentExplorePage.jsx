import React, { useState } from "react";
import { Outlet, Link, useNavigate, useParams } from "react-router";
import ExplorePage from "./ExplorePage";
import StudenProfileButton from "./StudenProfileButton";
import {easeIn, easeInOut, motion} from "motion/react"
function StudentExplorePage() {
  const navigate = useNavigate();
  const [all,setAll] = useState(true);
  const[filterCard,setFilterCard] = useState(ExplorePage);
  

function PassAlumniProfile(id){
  navigate(`/alumni/profile/${id}`) 
}

  
const FilterCse = ()=>{
  setFilterCard(ExplorePage.filter((alumni)=>alumni.branch === "CSE"));
}

const FilterYear = ()=>{
  setFilterCard(ExplorePage.filter((alumni)=> alumni.yog == "2025"));    
}

  return (
    <>
        
        <div className="w-full flex justify-between gap-4 items-center bg-gradient-to-b from-[#605dff] to-gray-900">
          <Link to='/'><button className="btn ml-2  bg-white text-black border-[#e5e5e5]">
        <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
        Logout
        </button></Link>
            <div className="flex justify-center ">
              <h1 className="mt-4 mr-4 font-serif">Go to Profile</h1>
            <StudenProfileButton />
            </div>
        </div>
         <div className="bg-gray-900 min-h-screen ">
        <form className="flex flex-wrap justify-center p-2 gap-2 md:gap-8 mb-4">
        
        <input onClick={()=>setFilterCard(ExplorePage)} className="btn rounded-2xl " type="reset" value="Show All"/>
        <input onClick={()=>FilterCse()} className="btn rounded-2xl" type="checkbox" name="frameworks" aria-label="CSE"/>
        <input onClick={()=>FilterYear()} className="btn rounded-2xl" type="checkbox" name="frameworks" aria-label="2025"/>
        
        </form>

        {/* cardddddesssss */}

        <div className=" grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-6 md:m-10">
        {filterCard.map((alumni, index) => (
          <div key={index}>
            <motion.div initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}} transition={{duration:0.2}} viewport={{once:true}} className="card flex flex-row md:block bg-base-100 hover:scale-[1.01] transition-all ease-in-out duration-300 shadow-md shadow-gray-800 hover:shadow-[#605dff]">
              <figure className="">
                <img 
                  src={alumni.alumniImg}
                  alt="Alumni Image"
                  className="rounded-full md:rounded-4xl md:-mb-6 md:h-60 h-36 shrink-0 p-4"
                />
              </figure>
              <div className="card-body items-center text-center text-sm md:text-md -ml-8 md:ml-0  ">
                <h2 className="card-title font-semibold -mb-1 ">{alumni.alumniname}</h2>
                <p className="font-extrabold  -mb-4 font-mono text-xl text-white"> {alumni.company}</p>
                <hr />
                <p className="text-neutral-400/90 ">
                   {alumni.branch} ● {alumni.yog} ● {alumni.city} 
                </p>
                <div className="card-actions">
                  <button onClick={()=>PassAlumniProfile(alumni.id)} className="btn btn-primary hover:scale-[1.1] -mb-10 rounded-full hover:shadow-[1px_2px_0_0] hover:shadow-[#605dff] transition ease-in-out  duration-300">View Profile</button>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div> 
      </div>
    </>
  );
}
export default StudentExplorePage;
