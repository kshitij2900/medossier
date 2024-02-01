import React from 'react'
import { Link,Outlet,useNavigate } from 'react-router-dom';

export default function PatientLogin() {
    const navigate=useNavigate();
    return (
        <>
        <div className="md:h-screen dark:bg-LandingPageBK p-[2vw] flex items-center justify-center">
            <div className="w-full dark:bg-LandingPageBK max-w-sm p-4 shadow-2xl bg-green-200 border border-green-600 rounded-lg  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="submit" >
                    <h5 className="text-xl font-medium text-green-900 dark:text-white">Patient login </h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="patientEmail" className="bg-gray-50 border border-green-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="patientPassword" placeholder="••••••••" className="bg-gray-50 border border-green-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-green-600 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700  dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="/" className="ml-auto text-sm text-green-700 hover:underline dark:text-pink-500">Lost Password?</a>
                    </div>
                    <button type="submit" className="text-white w-full bg-gradient-to-r from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l dark:focus:ring-4 dark:focus:outline-none  dark:focus:ring-purple-800 shadow-2xl hover:shadow-none  font-medium rounded-lg text-sm px-5 py-2.5  h-12 mb-[8vh] text-center " onClick={()=>navigate('userdashboard')}>Login to your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to="/patientsignup" className="text-green-700 hover:underline dark:text-pink-500">Create account</Link>
                    </div>
                </form>
            </div>
            </div>
            <div>
            <Outlet/>
            </div>
            
        </>
    )
}
