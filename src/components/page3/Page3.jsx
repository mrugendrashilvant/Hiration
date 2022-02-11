import React from 'react'
import Cards from './Cards'
import image from '../../assets/Group 2499.png'

export default function Page3() {
    return (
        <div className='container mx-auto w-11/12'>
            <div className="flex flex-row justify-evenly">
                <div className="left w-1/4 mt-8">
                    <p className="text-orange-500">DESIGNS</p>
                    <h3 className="text-3xl font-semibold mt-4">25+ Resume Desing Templates</h3>
                    <p className="font-light text-gray-700 mt-4">Get 25+ ATS friendly resume design templates for every job profile!</p>
                    <button style={{ backgroundColor: "#FF9313" }} className='mt-6 eading-5 text-xs rounded-md px-4 py-3 duration-100 text-white hover:bg-transparent hover:underline'>Browse Designs</button>
                </div>


                <img className='w-3/5' src={image} alt="page3-image" />
            </div>

            <div className="flex justify-evenly mt-10">
                <Cards title="ATS Friendly Designs" text="Get 25+ ATS friendly resume design templates for every job profile!" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                </svg>} />
                <Cards title="Switch Designs in a click" text="Get 25+ ATS friendly resume design templates for every job profile!" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>} />
                <Cards title="Pre Written Samples" text="Get 25+ ATS friendly resume design templates for every job profile!" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-orange-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>} />
            </div>
        </div>
    )
}
