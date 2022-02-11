import React from 'react'
import logo from '../../assets/Group 2553.png';
export default function Page9() {
    return (
        <>
            <div className='mx-auto text-center text-white bg-gray-700 py-12 w-screen'>
                <h1 className="text-4xl font-bold">Lets get you <span className='text-orange-500'>Hired!</span></h1>
                <p className="font-normal mt-4 text-lg">Start with out Resume Builder, or if you have a Resume already, lets review it.</p>
                <button style={{ backgroundColor: "#0099FF" }} className="leading-5 text-xs px-8 py-3 mt-6 rounded-md">Upload Resume</button>
                <button style={{ backgroundColor: "#FF9313" }} className="leading-5 text-xs px-8 py-3 mt-6 rounded-md ml-4">Create Resume</button>
            </div>
            <div className="container mx-auto w-11/12 text-white mt-6 flex justify-evenly items-start">
                <div className="w-1/4" >
                    <img src={logo} alt="logo" />
                </div>
                <div className="w-3/4 flex justify-evenly">
                    <div className="flex flex-col">
                        <p className="font-semibold mb-2">Get Started</p>
                        <p className='font-light mt-2'>Pricing</p>
                        <p className='font-light mt-2'>About Us</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold mb-2">Product Suite</p>
                        <p className='font-light mt-2'>Resume Builder</p>
                        <p className='font-light mt-2'>Resume Review</p>
                        <p className='font-light mt-2'>Cover letter</p>
                        <p className='font-light mt-2'>LinkedIn Review</p>
                        <p className='font-light mt-2'>Digital Portfolio</p>
                        <p className='font-light mt-2'>Interview Prep</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold mb-2">Important Resources</p>
                        <p className='font-light mt-2'>Blog</p>
                        <p className='font-light mt-2'>Resume examples</p>
                        <p className='font-light mt-2'>Resume Templates</p>
                        <p className='font-light mt-2'>Technology Resume</p>
                        <p className='font-light mt-2'>Sales Resume</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="font-semibold mb-2">Support</p>
                        <p className='font-light mt-2'>Resume Builder</p>
                        <p className='font-light mt-2'>About Us</p>
                    </div>
                </div>
            </div>
            <div className="relative flex justify-between text-white mx-auto w-11/12 items-end bottom-0 h-36">
                <div className="left">
                    <p> &copy; 2021 Hiration, Inc. All rights reserved</p>
                    <p className='text-sm mt-4'>Cloud office | San Fransisco | New Delhi | Bangalore</p>
                </div>
                <div className="right">
                    <p className="text-xs">Terms of Sevice | Privacy Policy</p>
                </div>
            </div>
        </>
    )
}
