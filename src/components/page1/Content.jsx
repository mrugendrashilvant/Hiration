import React from 'react'

export default function Content() {
    return (
        <>
            <div className="flex justify-evenly mx-auto mt-5">
                <div className="left mt-10">
                    <h1 className="text-6xl text-gray-700 font-semibold">Welcome to the best Online <span className='text-orange-500'>Resume Builder</span></h1>
                    <p className='text-gray-700 mt-6 text-lg'>Transform the way you approach Job Change with our AI based tools and get closer to getting your dream job</p>
                    <button className='mt-6 rounded-md bg-orange-500 px-8 py-4 duration-100 text-white hover:bg-transparent hover:text-orange-500 hover:border-2 hover:border-orange-500'>Try now</button>
                    <p className="font-light mt-6"><span className='font-semibold'>Excellent</span> 4.8 out of 5 ⭐ <span className="font-semibold">Trustpilot</span></p>
                </div>
                <div className="right">
                    <img className='mt-5' src="https://d31kzl7c7thvlu.cloudfront.net/ghost/2021/08/Group-2309.svg" width={1000} alt="resume" />
                </div>
            </div>
        </>
    )
}
