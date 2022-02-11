import React from 'react'
import Card from './Card';
import image from '../../assets/company.png'

export default function Page7() {
    return (
        <div className='container mx-auto w-11/12'>
            <div className='container mx-auto w-2/3 mt-16 text-center'>
                <h1 className="text-4xl font-bold text-gray-700">Thats not all, <span className='text-orange-500'>You Get More</span></h1>
                <p className="font-normal mt-4 text-lg">Enjoy more features from our suite, covering all your career needs.</p>
            </div>
            <div className="flex justify-center mt-12">
                <Card color="#FFF1DA" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                </svg>} title="LinkedIn Review" text="Optimize your LinkedIn profile and get more job shortlists with our Linkedin Reviewer" />
                <Card color="white" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>} title="Web Portfolio" text="Showcase your work, Launch your own personal website in a single click!" />
                <Card color="#FFF1DA" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>} title="Cover Letter" text="Stand out with our professional templates. Get a job-winning cover letter to go with your resume!" />
                <Card color="white" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>} title="Interview Prep" text="Relevant Interview questions, answers on the basis of your Resume and Job Role, to crack the Interview of your dreams. 500+ Job Roles" />
            </div>
            <div className="mt-10 flex flex-col items-center">
                <p className="text-orange-500 text-xs mx-auto">GET INTERVIEW FROM</p>
                <img className='mt-4' src={image} alt="company" />
            </div>
        </div>
    )
}
