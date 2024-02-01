import React from 'react'
// add a verify button 
const PatientDataForm = () => {
    return (
        <div className='  md:px-[4vw] dark:bg-LandingPageBK '>
            <form>
                <div className="grid md:grid-cols-2 md:gap-6 md:pt-[2vh] pt-[2vh] px-10">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " required />
                        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-green-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Doctor's name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " required />
                        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-green-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Venue of Treatment</label>
                        {/* location api usage preffered */}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6 px-10">
                    <div className="relative z-0 w-full mb-6 group flex flex-row">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-[1.5vh] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " required />
                        <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-green-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Doctor's Unique I'd</label>
                        <button type="button" className="text-white bg-gradient-to-r from-green-800 to-green-500  dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 w-44 h-12 m-1 text-center ">Verify </button>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_company" id="floating_company" className="block py-[1.5vh] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " required />
                        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-green-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Specialisation of Doctor</label>
                    </div>
                </div>
                
                <hr className='h-px my-3 mx-6 bg-green-600 border-0 dark:bg-purple-300' />
                <div className=" md:flex opacity-0 md:opacity-100  flex-row md:w-full w-0 h-0 md:h-[4vh] dark:text-white text-center mt-[1vh] ">
                <h1 className='text-2xl w-1/3 font-medium text-green-700 dark:text-gray-200'>Prescriptions</h1>
                <h1 className='text-2xl w-1/3 font-medium text-green-700 dark:text-gray-200'>Reports</h1>
                <h1 className='text-2xl w-1/3 font-medium text-green-700 dark:text-gray-200'>Scans</h1>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-center w-full mb-[2vh] md:mt-[2vh] px-[4vw] md:px-0 ">
                <h1 className='md:hidden text-2xl font-medium text-green-700 dark:text-gray-200 h-[8vh] py-[1vh] justify-center text-center border-2 border-green-600 dark:border-gray-200 w-full rounded-2xl pt-[1.5vh] mt-[3vh] mb-[1vh]'>Prescriptions</h1>
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-green-100 dark:bg-LandingPageBK opacity-70 hover:opacity-95 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mx-4">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-green-600 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-green-600 dark:text-gray-400">SVG, PNG, JPG or PDF </p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" formEncType='multipart/form-data' multiple/>
                    </label>
                    <h1 className='md:hidden text-2xl font-medium text-green-700 dark:text-gray-200 h-[8vh] py-[1vh] justify-center text-center border-2 border-green-600 dark:border-gray-200 w-full rounded-2xl pt-[1.5vh] mt-[3vh] mb-[1vh]'>Reports</h1>
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-green-100 dark:bg-LandingPageBK opacity-70 hover:opacity-95 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mx-4">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-green-600 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-green-600 dark:text-gray-400">SVG, PNG, JPG </p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" formEncType='multipart/form-data' multiple />
                    </label>
                    <h1 className='md:hidden text-2xl font-medium text-green-700 dark:text-gray-200 h-[8vh] py-[1vh] justify-center text-center border-2 border-green-600 dark:border-gray-200 w-full rounded-2xl pt-[1.5vh] mt-[3vh] mb-[1vh]'>Scans</h1>
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-green-100 dark:bg-LandingPageBK opacity-70 hover:opacity-95 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mx-4">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-green-600 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-green-600 dark:text-gray-400">SVG, PNG, JPG </p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" formEncType='multipart/form-data' multiple/>
                    </label>
                </div>
                <div className="w-full justify-center flex flex-row ">
                    <button type="button" className="text-white bg-gradient-to-r from-green-800 to-green-500  dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 md:w-[12vw] h-12 mb-[10vh]  text-center mr-[2vw] md:mr-[1vw] " >Create File </button>
                    <button type="button" className="text-white bg-gradient-to-r from-green-800 to-green-500  dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 md:w-[12vw] h-12 mb-[10vh]  text-center " >Start Analysis </button>
                </div>
            </form>
        </div>
    )
}

export default PatientDataForm
