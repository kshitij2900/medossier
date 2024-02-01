import React from 'react';
import img from '../resources/analysis (1).jpg';
// import LoginDisplay from '../Pages/LoginDisplay';
import {  useNavigate } from 'react-router-dom';
// import Crousel from './Crousel'


// all india medical council data
export default function Body() {
    const navigate = useNavigate();
    return (<>
    <div className=' bg-green-100 dark:bg-LandingPageBK dark:w-full z-10 overflow-hidden '>
        <div className='md:mx-[20vw] md:w-3/5 w-5/6 mx-auto mb-[15vh] h-[70vh] md:h-[85vh] flex-column justify-center border-2 rounded-3xl mt-[4vh] border-green-700 dark:border-none bg-green-200 shadow-2xl  dark:bg-transparent'>
        <h1 className="text-center md:text-4xl sm:text-5xl lg:text-6xl text-green-700 dark:text-white md:h-[70vh] h-[55vh] w-full justify-center align-middle m-auto p-10">Secure your medical history<br />Analyse Reports</h1>
        <div className=" flex justify-center">
        <button type="button" className="text-white  bg-gradient-to-r from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l dark:focus:ring-4 dark:focus:outline-none  dark:focus:ring-purple-800 shadow-2xl hover:shadow-none  font-medium rounded-lg text-sm px-5 py-2.5 w-44 h-12 mb-[8vh] text-center " onClick={()=>navigate('/login')}>Get Started </button>
        </div>
        </div>
        <div className='mt-[4vh]'>
            <div className="flex justify-center my-[1vh] md:h-[60vh] md:relative left-[28vw] ">
                <img src={img} alt="1" className=' md:h-[33vh] w-2/3 md:w-1/3 rounded-xl ' />
            </div>
            <div className="flex justify-center my-[1vh] md:h-[60vh] md:relative right-[28vw] ">
                <img src={img} alt="2" className='md:h-[33vh] w-2/3 md:w-1/3 rounded-xl ' />
            </div>
            <div className="flex justify-center my-[1vh] md:h-[60vh] md:relative left-[28vw] ">
                <img src={img} alt="3" className=' md:h-[33vh] w-2/3 md:w-1/3 rounded-xl ' />
            </div>
            <div className="flex justify-center my-[1vh] md:h-[60vh] md:relative right-[28vw] ">
                <img src={img} alt="4" className='md:h-[33vh] w-2/3 md:w-1/3 rounded-xl ' />
            </div>
            <div className="flex justify-center my-[1vh] md:h-[60vh] md:relative left-[28vw] ">
                <img src={img} alt="5" className=' md:h-[33vh] w-2/3 md:w-1/3 rounded-xl ' />
            </div>
            <div className="flex justify-center my-[1vh] md:h-[60vh] md:relative right-[28vw] ">
                <img src={img} alt="6" className='md:h-[33vh] w-2/3 md:w-1/3 rounded-xl ' />
            </div>
            
        </div>
        {/* <LoginDisplay/> */}
    </div>
    </>
    )
}
