import React from 'react'
import { FaStar } from "react-icons/fa";

const Review = ({clientName, text}) => {
  return (
    <div className='h-full flex flex-col items-center justify-evenly py-10 gap-2'>
      <div className='text-yellow-500 flex text-2xl '>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className='text-primary font-bold '>{clientName}</p>
      <p className='px-10 text-sm text-primary text-center sm:px-20 md:px-40 lg:px-60'>{text}</p>
    </div>
  )
}

export default Review