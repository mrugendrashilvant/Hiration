import React from 'react'

export default function Card(props) {
    return (
        <div className={`flex flex-col justify-evenly rounded-md px-4 py-8 w-3/4 ${props.color}`}>
            {props.icon}
            <h6 className="text-xl font-semibold mt-6">{props.title}</h6>
            <p className="font-light mt-2">{props.text}</p>
        </div>
    )
}
