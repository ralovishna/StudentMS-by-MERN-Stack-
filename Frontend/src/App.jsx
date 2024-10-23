import React from 'react'
import Login from './Components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/DashBoard/Dashboard';
import ProfileHome from './Components/Student Profile/ProfileHome';
import StudentsPage from './Components/ALL Students/studentsPage';
import Sidebar from './Components/SideBar/Sidebar';
import { Outlet } from 'react-router-dom';



const App = () => {
  return (
    <>
    {/* <Login/> */}
    {/* <Dashboard/> */}
    
    {/* <ProfileHome/> */}
    <div className='h-screen w-screen flex'>
    <Sidebar className='w-1/5'/>
    <div className='flex-1 '>
    <Outlet />

    </div>
    </div>
    {/* <StudentsPage/> */}
   
  </>
  )
}

export default App