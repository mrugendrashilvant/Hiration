import React from 'react'

export default function Page6() {
    return (
        <div className='container mx-auto w-11/12'>
            <div className="bg-blue-200 mt-8 px-12 py-8 flex justify-between items-center mx-auto rounded-xl shadow-md shadow-blue-400">
                <div className="left">
                    <h3 className="text-2xl font-semibold">Already have a Resume?</h3>
                    <p className="mt-2">Upload your Resume, and instanly change designs</p>
                </div>
                <div className="right">
                    <button className='mt-6 rounded-md bg-blue-500 px-8 py-4 duration-100 text-white'>Upload Resume</button>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-16">
                <div className="left w-1/4 mt-8">
                    <h3 className="text-3xl font-semibold mt-4">State of the Art - Resume Builder</h3>
                    <p className="font-normal text-gray-700 mt-4">Everything you need to make your next career move, One stop for all your resume

                        needs.</p>
                    <button className='mt-6 rounded-md bg-orange-500 px-8 py-4 duration-100 text-white hover:bg-transparent hover:text-orange-500 hover:border-2 hover:border-orange-500'>Upload Resume</button>
                </div>


                <img className='rounded-xl shadow-xl' src="https://d31kzl7c7thvlu.cloudfront.net/img/digital_portfolio/DP_2.webp" width="60%" alt="page3-image" />
            </div>
        </div>
    )
}
