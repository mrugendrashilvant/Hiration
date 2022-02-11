import React from 'react';
import image from '../../assets/Group 2511.png'

export default function Page6() {
    return (
        <div className='container mx-auto w-11/12'>
            <div style={{ backgroundColor: "#DBF0FF", boxShadow: "0px 0px 5px 4px rgba(0, 153, 255, 0.3), 0px 0px 20px rgba(0, 153, 255, 0.41), 0px 22px 30px rgba(0, 153, 255, 0.1)" }} className="mt-2 px-12 py-8 flex justify-between items-center mx-auto rounded-xl">
                <div className="left">
                    <h3 className="text-2xl font-semibold">Instantly Check your Resume Score</h3>
                    <p className="mt-2">Upload your Resume, and instanly change designs</p>
                </div>
                <div className="right">
                    <button className='mt-6 rounded-md leading-5 text-xs bg-blue-500 px-8 py-4 text-white'>Upload Resume</button>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-16">
                <div className="left w-1/3 mt-8">
                    <h3 className="text-3xl font-semibold mt-4">State of the Art - Resume Builder</h3>
                    <p className="font-normal text-gray-700 mt-4">Everything you need to make your next career move, One stop for all your resume

                        needs.</p>
                    <button style={{ backgroundColor: "#FF9313" }} className='mt-6 rounded-md leading-5 text-xs px-8 py-4 duration-100 text-white hover:underline'>Upload Resume</button>
                </div>


                <img src={image} alt="page3-image" />
            </div>
        </div>
    )
}
