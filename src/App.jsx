import React from 'react'
import {Routes,Route,Link} from 'react-router'
import Loginpage from './Components/LoginPage/Loginpage'
import StudentLogin from './Components/LoginPage/StudentLogin'
import AlumniLogin from './Components/LoginPage/AlumniLogin'
import AdminLogin from './Components/LoginPage/AdminLogin'
import Navbar from './Navbar'
import StudentDashboard from './Components/StudentPage/StudentDashboard'
function App() {
  return (
   <>
           
        <Navbar/> 
          <Routes>
            <Route path='/' element = {<Loginpage />} />
            <Route path='Student' element={<StudentLogin/>} />
            <Route path='student/dashboard' element={<StudentDashboard/>} />
            <Route path='Alumni' element={<AlumniLogin/>}/>
            <Route path='Admin' element={<AdminLogin/>}/>
         </Routes>
   </>
  )
}

export default App