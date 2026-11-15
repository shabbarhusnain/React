import React from 'react'
import { useState } from 'react';
import "./card.css"

export default function Card({props}) {
  console.log(props.name,props.image, props.text)
  const text=props.text
  const [isLess, setIsLess]=useState(false)
  const displayText=isLess ? text:text.slice(0,50)
  return (<div className='card'>
  <div className="relative  w-97 h-auto rounded-md border-gray-200 bg-white shadow-md padding-10 max-w-sm rounded-2xl border border-gray-200 bg-white p-6 shadow-md cursor-pointer
            transform transition-all duration-300 ease-out 
            hover:-translate-y-3 hover:shadow-xl ">
      <img
        src={props.image}
        alt="Laptop"
        className="w-full h-80  rounded-t-md object-cover"
      />
      <div className="mt-3">
        <h1 className="text-lg font-bold text-black">{props.name}
        </h1>
        <p className="m-3 text-sm text-gray-600">
          {displayText}
        </p>
        <div className='px-4 pb-4 float'>
        <button onClick={()=>(setIsLess(!isLess))} type="button" className=" w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
          {isLess ? "Read Less" : "Read More"}
        </button>
        </div>
      </div>
    </div>
    </div>
  )
}