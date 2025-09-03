import React, { lazy, Suspense } from 'react'
import {Routes,Route,Link} from 'react-router'
import Loginpage from './Components/LoginPage/Loginpage'
const  StudentLogin = lazy(()=>import('./Components/LoginPage/StudentLogin'))
const StudentLoginCard = lazy(()=>import('./Components/LoginPage/StudentLoginCard'))
const  AlumniLogin = lazy(()=>import('./Components/LoginPage/AlumniLogin'))
const  AdminLogin = lazy(()=>import('./Components/LoginPage/AdminLogin'))
import Navbar from './Components/Navbar'
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
             <Route path='Alumni' element={<AlumniLogin/>}/> 
            </Route>
            <Route path='student/explore' element={<StudentExplorePage/>}></Route>
            <Route path='student/profile' element={<StudentDashboard/>} />
            
         </Routes>
   </>
  )
}

export default App
