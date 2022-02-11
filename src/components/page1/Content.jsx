import React from 'react'
import First from '../../assets/Group 2501.png'

export default function Content() {
    return (
        <>
            <div className="flex justify-evenly mt-5">
                <div className="left mt-10 w-2/4">
                    <h1 className="text-6xl text-gray-700 font-semibold">Welcome to the best Online <span className='text-orange-500'>Resume Builder</span></h1>
                    <p className='text-gray-700 mt-6 text-lg'>Transform the way you approach Job Change with our AI based tools and get closer to getting your dream job</p>
                    <button style={{ backgroundColor: "#FF9313", borderColor: "#FF9313" }} className='mt-6 leading-5 text-xs border-2 rounded-md px-8 py-3 duration-100 text-white hover:underline hover:border-2'>Try now</button>
                    <p className="font-light mt-6"><span className='font-semibold'>Excellent</span> 4.8 out of 5 ⭐ <span className="font-semibold">Trustpilot</span></p>
                </div>
                <div className="right w-2/4">
                    <img src={First} alt="resume" />
                </div>
            </div>
        </>
    )
}
