import React, { lazy } from 'react'
import {Routes,Route,Link} from 'react-router'
import Loginpage from './Components/LoginPage/Loginpage'
const  StudentLogin = lazy(()=>import('./Components/LoginPage/StudentLogin'))
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
            <Route path='Alumni' element={<AlumniLogin/>}/>
            </Route>
            <Route path='student/explore' element={<StudentExplorePage/>}></Route>
            <Route path='student/profile' element={<StudentDashboard/>} />
            
           
         </Routes>
   </>
  )
}

export default App
