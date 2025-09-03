import React, { useState } from "react";
import BannerImg from '../assets/Banner.jpg'
import { motion } from "motion/react"
import {Link} from "react-router"
import StudentLogin from "./LoginPage/StudentLogin";
function Home() {
const[popup,SetPop]=useState(false);

  return (
    <div id="home" className="min-h-screen overflow-hidden bg-blue-100">
    <section className="py-10 sm:py-16 lg:py-24 absolute md:top-8 lg:top-10 top-10 left-6 md:ml-18">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-20 lg:grid-cols-2">
                <motion.div initial={{ x:200,y:0,opacity:0}} transition={{duration:1}} animate={{x:0,y:0,opacity:1}}>
                    <h1  className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                        Connect and <br /> Collab  with <br />
                        <motion.div initial={{ x:-100  }} transition={{duration:1}} animate={{x:0,}}  className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                            <motion.h1  initial={{ x:-100  }} transition={{duration:1}} animate={{x:0}} className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Alumnis</motion.h1>
                        </motion.div>
                    </h1>

                    <motion.p  initial={{ x:-100  }} transition={{duration:1}} animate={{x:0}} className="mt-8 text-base text-black sm:text-xl">Now you can connect to any of your alumni and can take guidance from them to shape your future!!</motion.p>

                    <motion.div initial={{x:-100,opacity:0  }} transition={{duration:1}} animate={{x:0,opacity:1}} className="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <div title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#1b222b] hover:bg-orange-600 focus:bg-[#1b222b] rounded-2xl cursor-pointer" role="button" onClick={()=>SetPop(!popup)}> Login </div>
                    </motion.div>
                   {
                    popup? <div className="md:-translate-y-90 -translate-x-10 md:translate-x-32 z-50 absolute"><StudentLogin/></div> :null
                   }
                </motion.div>
                <motion.div initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1}} className="relative">
                    <img className="w-[90%] rounded-4xl " src={BannerImg} alt="" />
                     <motion.div initial={{scale:0}} animate={{scale:1}} transition={{duration:1.5}}>
                     <div className="bg-red-500 border-white p-2 px-6 absolute bottom-70 border-2 text-white font-mono font-extrabold -translate-x-5  md:-translate-x-20 -rotate-20">Zomato</div>
                     <div className="bg-red-500 border-white p-2 px-6 absolute bottom-70 border-2 text-white font-mono font-extrabold -translate-x-5  md:-translate-x-20 hover:-rotate-5">Zomato</div>
                     <div className="bg-red-500 border-white p-2 px-6 absolute bottom-70 border-2 text-white font-mono font-extrabold -translate-x-5  md:-translate-x-20 hover:-rotate-10">Zomato</div>
                     
                     <div className="bg-blue-600 border-blue-600 p-2 px-4 absolute bottom-20 border-2 text-white font-mono font-bold -translate-x-5 md:-translate-x-20 -rotate-20">LinkedIn</div>
                     <div className="bg-blue-600 border-blue-600 p-2 px-4 absolute bottom-20 border-2 text-white font-mono font-bold -translate-x-5 md:-translate-x-20 hover:-rotate-10">LinkedIn</div>
                     <div className="bg-blue-600 border-blue-600 p-2 px-4 absolute bottom-20 border-2 text-white font-mono font-bold -translate-x-5 md:-translate-x-20 hover:-rotate-5">LinkedIn</div>
                     <div className="bg-yellow-400 border-blue-600 p-2 px-4 absolute bottom-70 border-2 text-neutral font-mono font-bold right-0 md:translate-x-5 transform  hover:rotate-4 -rotate-20">Flipkart</div>
                    <div className="bg-yellow-400 border-blue-600 p-2 px-4 absolute bottom-70 border-2 text-neutral font-mono font-bold right-0 md:translate-x-5 transform hover:rotate-4 -rotate-10">Flipkart</div>
                    <div className="bg-yellow-400 border-blue-600 p-2 px-4 absolute bottom-70 border-2 text-neutral font-mono font-bold right-0 md:translate-x-5 transform hover:rotate-4 -rotate-5">Flipkart</div>

                    <div className="bg-blue-600 border-white p-2 px-4 absolute bottom-20 border-2 text-white font-mono font-bold right-0 md:translate-x-5 -rotate-20">Facebook</div>
                    <div className="bg-blue-600 border-white p-2 px-4 absolute bottom-20 border-2 text-white font-mono font-bold right-0 md:translate-x-5 hover:-rotate-10">Facebook</div>
                    <div className="bg-blue-600 border-white p-2 px-4 absolute bottom-20 border-2 text-white font-mono font-bold right-0 md:translate-x-5 hover:-rotate-5">Facebook</div>
                     </motion.div>
                </motion.div>
               
            </div> 
        </div>
    </section>
</div>

 );
}

export default Home;
