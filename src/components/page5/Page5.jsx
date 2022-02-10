import React from 'react'
import Points from './Points'

export default function Page5() {
    return (
        <div className='container mx-auto w-11/12'>
            <div className="flex justify-between mt-14 items-center">
                <div className='w-2/4'>
                    <img className='rounded-lg' src="https://d31kzl7c7thvlu.cloudfront.net/template/Global%20Citizen%20Red/Global-citizen-red.jpg" alt="resume" />
                </div>

                <div className="right w-2/4">
                    <h3 className="text-3xl font-semibold mt-4">Get a Full review of your Resume</h3>
                    <p className='mt-4'>Our powerful AI will review your resume against industry best practices and guide you on how to get that perfect score.</p>
                    <button className='mt-6 rounded-md bg-orange-500 px-8 py-4 duration-100 text-white hover:bg-transparent hover:text-orange-500 hover:border-2 hover:border-orange-500'>Review Resume</button>
                    <div className="flex flex-col">
                        <Points title="Meticulously takes inot account the Bullets" text="Transform the way you approach Job change with our AI based tools and get closer to your dream Job" icon={<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>} />
                        <Points title="Looks into every section of your Resume" text="Transform the way you approach Job change with our AI based tools and get closer to your dream Job" icon={<svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>} />
                    </div>
                </div>
            </div>
        </div>
    )
}
