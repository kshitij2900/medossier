import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
// import DoctorLogin from './DoctorLogin'
// import PatientLogin from './PatientLogin'


export default function LoginDisplay() {
    const navigate= useNavigate();
    return (<>
    <div className="flex h-screen relative bg-LandingPageBK ">
        <div className=" w-1/2 h-screen mt-32 ml-36">
        <h1 className='mt-5 text-center text-white text-6xl'>For Doctors</h1>
        <p className=' text-xl text-white text-center mt-6 '>I am here to... <br /> Watch my patient's recovery</p>
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 w-44 h-12 ml-56 mt-12 text-center " onClick={()=>navigate('/doctorlogin')}> Login </button>
        </div>
        <div className=" w-1/2 h-screen mt-32 mr-36 ">
        <h1 className='mt-5 text-center text-white text-6xl'>For Patients</h1>
        <p className=' text-xl text-white text-center mt-6 '>I am here to... <br /> see myself getting healthy</p>
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 w-44 h-12 ml-56 mt-12 text-center " onClick={()=>navigate('/patientlogin')}> Login </button>
        </div>
        </div>
        <Outlet/>
    </>
    )
}
// {/* <div className="px-80 m- sm:px-36 py-10 flex h-screen">
//         {/* <DoctorLogin/> */}
//         {/* <PatientLogin/> */}
//         {/* <h4 className="text-xl">otp system</h4> */}
//     </div> */}