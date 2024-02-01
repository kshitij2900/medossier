import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import profileImg from '../resources/fotor_2023-4-6_14_33_25.png'

const DoctorDashboard= () => {
    const navigate = useNavigate();
    return (
        <>
            <div className=' w-full dark:bg-LandingPageBK dark:text-white flex flex-col '>
                <div className="flex md:flex-row flex-wrap  md:m-[2vh]">
                    <img src={profileImg} alt="profile" className='md:h-[16vh] px-[1vw] relative z-0 md:w-[8vw] w-[24vw] h-[10vh] my-[2vh] md:px-[1vw] group justify-center items-center' />
                    <div className="md:h-[16vh] md:w-2/5 w-3/4 grid md:grid-cols-2 grid-cols-2 grid-rows-2 relative z-0 group text-xs">
                            <div className='p-[1vw] md:m-[1vh] m-[1vw]  bg-green-200 rounded-xl border-2 border-green-400 dark:border-none dark:bg-transparent'>Name</div>
                            <div className='p-[1vw] md:m-[1vh] m-[1vw] bg-green-200 rounded-xl border-2 border-green-400 dark:border-none dark:bg-transparent'>Age</div>
                            <div className='p-[1vw] md:m-[1vh] m-[1vw] bg-green-200 rounded-xl border-2 border-green-400 dark:border-none dark:bg-transparent'>AIMR Number</div>
                            <div className='p-[1vw] md:m-[1vh] m-[1vw] bg-green-200 rounded-xl border-2 border-green-400 dark:border-none dark:bg-transparent'>Zone</div>
                    </div>
                    <div className="md:h-[16vh] w-full md:w-1/6 mt-[2vh] md:mt-0 md:mx-[2vw] mx-[6vw] grid grid-cols-1  relative z-0 justify-center items-center ">
                            <div className="relative z-0 w-full py-[2vh] md:py-0">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " required />
                                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-green-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Reference Number</label>
                            </div>
                            <div className="relative z-0 w-full py-[2vh] md:py-0">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " required />
                                <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-green-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">One Time Password</label>
                            </div>
                    </div>
                        <div className=" flex flex-col md:mb-[1vh] justify-center md:w-1/6 w-full md:mx-0 mx-[4vw]">
                            <div className="grid grid-cols-2 ">
                            <button type="button" className="text-white bg-gradient-to-r from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-[1vw] py-[1vh]  mr-[1vw]   text-center " > Send OTP </button>
                            <button type="button" className="text-white bg-gradient-to-r from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-[1.5vw] py-[1vh]   text-center " >Add Dossier </button>
                            </div>
                            <button type="button" className="text-white bg-gradient-to-r from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-[1vw] py-[1vh]  h-[6vh] my-[1vh] w-full text-center" onClick={() => navigate('/analysisdisplay')}>Show All Analysis </button>
                        </div>
                        <button type="button" className="text-white bg-gradient-to-r justify-center items-center from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm md:px-[2vw] px-[40vw] py-[1vw] md:mt-[3vh]  md:w-[2/6] md:h-[12vh] ml-[4vw] md:ml-[1vw] text-center " onClick={() => navigate('/forum')}> Forum </button>
                    </div>
                    
                <hr className='md:h-px my-3 mx-8 bg-gray-200 border-0 dark:bg-purple-300' />
                <h1 className='text-3xl px-[1vw] py-[1vh] text-center w-full '>Your Files</h1>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-[1vw]">
                    <table className="w-full text-sm text-left text-white dark:text-white pb-[4vh]">
                        <thead className="text-xs text-white uppercase bg-green-700 dark:bg-purple-500 dark:text-white">
                            <tr>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    Patient's Name
                                </th>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    <div className="flex items-center">
                                        Type
                                        <a href="/"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    <div className="flex items-center">
                                        Date
                                        <a href='/'><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    <div className="flex items-center">
                                        Venue
                                        <a href="/"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    <div className="flex items-center">
                                        Reference I'd
                                        <a href="/"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a>
                                    </div>
                                </th>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    <span className="sr-only">Edit</span>
                                </th>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-green-200 border-b text-green-700 font-medium dark:text-white border-green-700 dark:bg-purple-800 dark:border-purple-300">
                                <th scope="row" className="px-[1.5vw] py-[2.2vh] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    Silver
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    Laptop
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    $2999
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    $2999
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh] text-left">
                                    <a href="/" className="font-medium text-blue-600 dark:text-black hover:underline">View</a>
                                </td>
                                <td>
                                    <div className="flex items-center">
                                        <button data-dismiss-target="#sticky-banner" type="button" className="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-purple-900 dark:hover:text-white">
                                            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span className="sr-only">Close banner</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-green-200 border-b text-green-600 dark:text-white border-green-700 dark:bg-purple-800 dark:border-purple-300">
                                <th scope="row" className="px-[1.5vw] py-[2.2vh] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    Silver
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    Laptop
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    $2999
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    $2999
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh] text-left">
                                    <a href="/" className="font-medium text-blue-600 dark:text-black hover:underline">View</a>
                                </td>
                                <td>
                                    <div className="flex items-center">
                                        <button data-dismiss-target="#sticky-banner" type="button" className="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-purple-900 dark:hover:text-white">
                                            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span className="sr-only">Close banner</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-green-200 border-b text-green-600 dark:text-white border-green-700 dark:bg-purple-800 dark:border-purple-300">
                                <th scope="row" className="px-[1.5vw] py-[2.2vh] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    Silver
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    Laptop
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    $2999
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    $2999
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh] text-left">
                                    <a href="/" className="font-medium text-blue-600 dark:text-black hover:underline">View</a>
                                </td>
                                <td>
                                    <div className="flex items-center">
                                        <button data-dismiss-target="#sticky-banner" type="button" className="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-purple-900 dark:hover:text-white">
                                            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span className="sr-only">Close banner</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="bg-green-200 border-b text-green-600 dark:text-white border-green-700 dark:bg-purple-800 dark:border-purple-300">
                                <th scope="row" className="px-[1.5vw] py-[2.2vh] font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    Silver
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    Laptop
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    $2999
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh]">
                                    $2999
                                </td>
                                <td className="px-[1.5vw] py-[2.2vh] text-left">
                                    <a href="/" className="font-medium text-blue-600 dark:text-black hover:underline">View</a>
                                </td>
                                <td>
                                    <div className="flex items-center">
                                        <button data-dismiss-target="#sticky-banner" type="button" className="flex-shrink-0 inline-flex justify-center items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-purple-900 dark:hover:text-white">
                                            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                            <span className="sr-only">Close banner</span>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                           
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default DoctorDashboard