import React from 'react'
import Card from './Card'

export default function Page2() {
    return (
        <div className='container mx-auto w-11/12'>
            <h3 className="text-3xl font-semibold text-gray-700">What Hiration Offers</h3>
            <div className="flex mt-10 ">
                <Card image="https://d31kzl7c7thvlu.cloudfront.net/ghost/2021/07/Resume-Builder--1-.png" title="Ease the Process of Getting started" text="Transform the way you approach Job change with our AI based tools and get closer to your dream Job" />
                <Card image="https://d31kzl7c7thvlu.cloudfront.net/ghost/2021/07/LinkedIn-Reviewer.png" title="AI powered Platform" text="Transform the way you approach Job change with our AI based tools and get closer to your dream Job" />
                <Card image="https://d31kzl7c7thvlu.cloudfront.net/ghost/2021/07/Online-Profile.png" title="A complete Career Solution" text="Transform the way you approach Job change with our AI based tools and get closer to your dream Job" />
            </div>

            <div className='container mx-auto w-2/3 mt-14 text-center'>
                <h1 className="text-4xl font-bold text-gray-700">Make a Job-worthy Resume <span className='text-orange-500'>effortlessly</span></h1>
                <p className="font-normal mt-4 text-lg">A 360 Degree Solution to make the Resume Building process easier.</p>
            </div>
        </div>
    )
}
