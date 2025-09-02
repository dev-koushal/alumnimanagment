import React from 'react'
import {Routes,Route,Link} from 'react-router'
import Loginpage from './Components/LoginPage/Loginpage'
import StudentLogin from './Components/LoginPage/StudentLogin'
import AlumniLogin from './Components/LoginPage/AlumniLogin'
import AdminLogin from './Components/LoginPage/AdminLogin'
import Navbar from './Navbar'
import StudentDashboard from './Components/StudentPage/StudentDashboard'
import StudentExplorePage from './Components/StudentPage/StudentExplorePage'

function App() {
  return (
   <>
           
        
          <Routes>
            <Route element={<Navbar/>}>
            <Route path='/' element = {<Loginpage />} />
            <Route path='Student' element={<StudentLogin/>} />
            <Route path='Admin' element={<AdminLogin/>}/>
            </Route>
            <Route path='student/explore' element={<StudentExplorePage/>}></Route>
            <Route path='student/profile' element={<StudentDashboard/>} />
            <Route path='Alumni' element={<AlumniLogin/>}/>
           
         </Routes>
   </>
  )
}

export default App