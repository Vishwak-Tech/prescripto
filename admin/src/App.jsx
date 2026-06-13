import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";

import { AdminContext } from "./context/AdminContext";
import { DoctorContext } from "./context/DoctorContext";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import DoctorProfile from "./pages/Doctor/DoctorProfile";

const App = () => {

  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);

  // Not Logged In
  if (!aToken && !dToken) {
    return (
      <>
        <Login />
        <ToastContainer />
      </>
    );
  }

  // Admin Panel
  if (aToken) {
    return (
      <div className="bg-[#F8F9FD] min-h-screen">
        <ToastContainer />
        <Navbar />

        <div className="flex items-start">
          <Sidebar />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/admin-dashboard" replace />} />
              <Route path="/admin-dashboard" element={<Dashboard />} />
              <Route path="/all-appointments" element={<AllAppointments />} />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/doctor-list" element={<DoctorsList />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }

  // Doctor Panel
  if (dToken) {
    return (
      <div className="bg-[#F8F9FD] min-h-screen">
        <ToastContainer />
        <Navbar />

        <div className="flex items-start">
          <Sidebar />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Navigate to="/doctor-dashboard" replace />} />
              <Route path="/doctor-dashboard" element={<DoctorDashboard/>}/>
              <Route path="/doctor-appointments" element={<DoctorAppointments/>}/>
              <Route path="/doctor-profile" element={<DoctorProfile/>}/>
            </Routes>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
















// import { useContext } from "react"
// import Login from "./pages/Login"
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'
// import { AdminContext } from './context/AdminContext'
// import Navbar from "./components/Navbar"
// import Sidebar from "./components/Sidebar"
// import { Route, Routes } from "react-router-dom"
// import Dashboard from "./pages/Admin/Dashboard"
// import AllAppointments from "./pages/Admin/AllAppointments"
// import AddDoctor from "./pages/Admin/AddDoctor"
// import DoctorsList from "./pages/Admin/DoctorsList"
// import { DoctorContext } from "./context/DoctorContext"
// 
// const App = () => {
// 
  // const {aToken} = useContext(AdminContext)
  // const { dToken } = useContext(DoctorContext)
// 
  // return aToken || dToken ? (
    // <div className="bg-[#F8F9FD]">
      {/* <ToastContainer/> */}
      {/* <Navbar/> */}
      {/* <div className="flex items-start"> */}
        {/* <Sidebar/> */}
        {/* <Routes> */}
          {/* <Route path='/' element={<></>} /> */}
          {/* <Route path='/admin-dashboard' element={<Dashboard/>} /> */}
          {/* <Route path='/all-appointments' element={<AllAppointments/>} /> */}
          {/* <Route path='/add-doctor' element={<AddDoctor/>} /> */}
          {/* <Route path='/doctor-list' element={<DoctorsList/>} /> */}
        {/* </Routes> */}
      {/* </div> */}
    {/* </div> */}
  // ) : (
    // <>
      {/* <Login/> */}
      {/* <ToastContainer/> */}
    {/* </> */}
  // )
// }
// 
// export default App