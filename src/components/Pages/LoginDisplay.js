import React from 'react'
import DoctorLogin from './DoctorLogin'
import PatientLogin from './PatientLogin'
// import PatientLogin from './PatientLogin'
// import DoctorLogin from './DoctorLogin'
// {/* <PatientLogin/>
// <DoctorLogin/> */}

export default function LoginDisplay() {
    return (<>
        <DoctorLogin/>
    {/* ,marginTop:'2rem' */}
    {/* <div className="login-content"style={{height:'100vh'}}>
    <div className="left" style={{width:'49%', marginLeft:'5%',marginRight:'2%',padding:'2%',}}>
        <h3  style={{height:'40%'}}>For Doctors</h3>
        <button className="btn btn-primary mx-2 my-2">Login</button> 
        <span>with <br /> AIMC Registration Number<br /> or, <br /> </span>
        <button className="btn btn-primary my-2">Sign Up</button>
    </div>
    <div className="right" style={{width:'49%', marginRight:'5%',marginLeft:'2%',padding:'2%'}}>
        <h3  style={{height:'60%'}}>For Patients </h3>
        <button className="btn btn-primary mx-2">Login</button>
        <button className="btn btn-primary">Sign Up</button>
    </div>
    </div> */}
        <PatientLogin/>

    </>
    )
}
