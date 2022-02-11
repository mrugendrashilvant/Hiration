import React from 'react'

export default function Card(props) {
    return (
        <div className='w-2/6 flex flex-col justify-between items-center mx-auto duration-150 hover:scale-90'>
            <img className='rounded-md' src={props.image} width="80%" alt="card" />
            <h6 className="text-xl font-semibold mt-6">{props.title}</h6>
            <p className="font-light mt-1.5 text-center">{props.text}</p>
        </div>
    )
}
