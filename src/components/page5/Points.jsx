import React from 'react'

export default function (props) {
    return (
        <div className='flex justify-between items-center'>
            {props.icon}
            <div className='container ml-2'>
                <h6 className="text-xl font-semibold mt-6">{props.title}</h6>
                <p className="font-light mt-1.5">{props.text}</p>
            </div>
        </div>
    )
}
