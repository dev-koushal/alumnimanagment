import React, { lazy, Suspense } from 'react'
import {Routes,Route,Link} from 'react-router'
import Loginpage from './Components/LoginPage/Loginpage'
const  StudentLogin = lazy(()=>import('./Components/LoginPage/StudentLogin'))
const StudentLoginCard = lazy(()=>import('./Components/LoginPage/StudentLoginCard'))
const  AlumniLogin = lazy(()=>import('./Components/LoginPage/AlumniLogin'))
const  AdminLogin = lazy(()=>import('./Components/LoginPage/AdminLogin'))
import Navbar from './Navbar'
const StudentDashboard = lazy(()=>import('./Components/StudentPage/StudentDashboard'));
const StudentExplorePage = lazy(()=>import('./Components/StudentPage/StudentExplorePage'));

function App() {
  return (
   <>
           
        
          <Routes>
            <Route element={<Navbar/>}>
            <Route path='/' element = {<Loginpage />} />
            <Route path='Student' element={<StudentLogin/>} />
            <Route path='Admin' element={<AdminLogin/>}/>
             <Route path='studentcard' element={<StudentLoginCard/>}></Route>
            </Route>
            <Route path='student/explore' element={<StudentExplorePage/>}></Route>
            <Route path='student/profile' element={<Suspense fallback={<div className='mx-auto md:mt-0 mt-80 md:ml-80'><img src="https://i.pinimg.com/originals/ed/23/68/ed23685339ada1b6d88008cbe1a11e98.gif" alt="Loading" /></div>}><StudentDashboard/></Suspense>} />
            <Route path='Alumni' element={<AlumniLogin/>}/>
            <Route path='student/explore' element={<StudentExplorePage/>}></Route>
            <Route path='student/profile' element={<StudentDashboard/>} />
            <Route path='Alumni' element={<AlumniLogin/>}/> 
         </Routes>
   </>
  )
}

export default App
