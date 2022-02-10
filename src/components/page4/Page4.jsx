import React from 'react'

export default function () {
    return (
        <div className='container mx-auto w-11/12'>
            <div className="bg-orange-200 mt-8 px-12 py-8 flex justify-between items-start mx-auto rounded-xl shadow-2xl">
                <div className="left">
                    <h3 className="text-2xl font-semibold">Already have a Resume?</h3>
                    <p className="mt-2">Upload your Resume, and instanly change designs</p>
                </div>
                <div className="right">
                    <button className='mt-6 rounded-md bg-orange-500 px-8 py-4 duration-100 text-white'>Upload Resume</button>
                </div>
            </div>
            <div style={{ borderLeftWidth: "18px", borderRightWidth: "18px" }} className="mt-24 border-yellow-500 px-16 flex justify-between items-center">
                <div className='w-3/4'>
                    <p className="text-orange-500">HIRATION SUITE</p>
                    <h3 className="text-3xl font-semibold mt-4 text-gray-700">The Ultimate Suite Driven by AI<br /> to showcase your best self</h3>
                    <p className="font-light mt-6">Transform the way you approach Job change with our AI based tools</p>
                </div>
                <img className='w-1/4' src="https://d31kzl7c7thvlu.cloudfront.net/ghost/2021/08/Group-2186.svg" alt="icon" />
            </div>
        </div>
    )
}
