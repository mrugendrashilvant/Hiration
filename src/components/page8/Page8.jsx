import React from 'react';
import image from '../../assets/Group 2550.png'

export default function Page8() {

    return (
        <div className='container mx-auto w-11/12'>
            <div className='container mx-auto w-2/3 mt-14 text-center'>
                <h1 className="text-4xl font-bold text-gray-700">About B2B Clients, <span className='text-orange-500'>Can add a Section here</span></h1>
                <p className="font-normal mt-4 text-lg">Enjoy more features from our suite, covering all your career needs.</p>
            </div>
            <div className="flex justify-between items-center mt-14">
                <img className='w-2/4 mr-4 rounded' src={image} alt="colleges" />
                <div className="right w-2/4 ml-4">
                    <p className="text-orange-500 text-xs mx-auto">COLLABORATE</p>
                    <h3 className="text-3xl font-semibold mt-6 text-gray-700">Partner with the best all-in-one AI powered Career Platform</h3>
                    <p className='mt-6'>We equip you with the best tools possible to help you guide all your students with utmost attention & care.</p>
                    <button style={{ backgroundColor: "#FF9313" }} className='mt-8 leading-5 text-xs rounded-md bg-orange-500 px-8 py-4 text-white hover:underline'>Learn More</button>
                </div>
            </div>
        </div>
    )
}
