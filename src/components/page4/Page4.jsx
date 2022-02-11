import React from 'react';
import image from '../../assets/Group 2503.png'

export default function () {
    return (
        <div className='container mx-auto w-11/12'>
            <div style={{ backgroundColor: "#FFE3B2", boxShadow: "0px 12px 20px 10px rgba(0, 0, 0, 0.07)" }} className="mt-16 px-12 py-8 flex justify-between items-start mx-auto rounded-xl">
                <div className="left">
                    <h3 className="text-2xl font-semibold">Already have a Resume?</h3>
                    <p className="mt-2">Upload your Resume, and instanly change designs</p>
                </div>
                <div className="right">
                    <button style={{ backgroundColor: "#FF9313" }} className='mt-6 leading-5 text-xs rounded-md px-8 py-3 text-white'>Upload Resume</button>
                </div>
            </div>
            <div style={{ borderLeftWidth: "17px", borderRightWidth: "17px", borderColor: "#EEAA22" }} className="mt-24 flex justify-start relative">
                <div className='w-3/4 ml-16 '>
                    <p className="text-orange-500 text-xs">HIRATION SUITE</p>
                    <h3 className="text-3xl font-semibold mt-4 text-gray-700">The Ultimate Suite Driven by AI<br /> to showcase your best self</h3>
                    <p className="font-light mt-6">Transform the way you approach Job change with our AI based tools</p>
                </div>
                <img style={{ position: "absolute", top: "-110px", right: "70px" }} src={image} alt="icon" />
            </div>

        </div>
    )
}
