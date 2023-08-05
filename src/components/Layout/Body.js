import React from 'react';
import img from '../resources/analysis (1).jpg';
// import LoginDisplay from '../Pages/LoginDisplay';
import {  useNavigate } from 'react-router-dom';
// import Crousel from './Crousel'


// all india medical council data
export default function Body() {
    const navigate = useNavigate();
    return (<>
    <div className='bg-LandingPageBK w-full z-10 overflow-hidden '>
        <h1 className=" md:text-4xl sm:text-5xl lg:text-6xl text-white h-[70vh] w-full justify-center align-middle m-auto p-10">Secure your medical history<br />Analyse Reports</h1>
        <div className="ml-[700px]">
        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 w-44 h-12 mb-[20vh] text-center " onClick={()=>navigate('/login')}>Get Started </button>
        </div>
        <div className="h-[60vh] relative left-[56vw] ">
            <img src={img} alt="1" className='h-[33vh] w-1/3 rounded-xl ' />
        </div>
        <div className="h-[60vh] relative left-[10vw]">
            <img src={img} alt="2" className='h-[33vh] w-1/3 rounded-xl ' />
        </div>
        <div className="h-[60vh] relative left-[56vw]">
            <img src={img} alt="3" className='h-[33vh] w-1/3 rounded-xl ' />
        </div>
        <div className="h-[60vh] relative left-[10vw]">
            <img src={img} alt="4" className='h-[33vh] w-1/3 rounded-xl ' />
        </div>
        <div className="h-[60vh] relative left-[56vw]">
            <img src={img} alt="5" className='h-[33vh] w-1/3 rounded-xl ' />
        </div>
        <div className="h-[60vh] relative left-[10vw]">
            <img src={img} alt="6" className='h-[33vh] w-1/3 rounded-xl ' />
        </div>
        {/* <LoginDisplay/> */}
    </div>
    </>
    )
}
