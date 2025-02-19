import React from 'react'
import { GoDotFill } from "react-icons/go";

const TourInfo = ({tourInfo}) => {

  const desc = 
    tourInfo.description.map((item, index) => (
      <p key={index} className='py-2 w-full leading-8'>
        <GoDotFill className='inline'/> <span className='text-lg py-2 max-w-5xl'>{item}</span>
      </p>
    ));

  const additionalInfo = 
    tourInfo.notes.map((item, index) => (
      <p key={index} className='py-2 w-full leading-8'>
        <GoDotFill className='inline'/> <span className='text-lg py-2 max-w-5xl'>{item}</span>
      </p>
    ));


  return (
    <section>
      <div className='flex flex-col xl:gap-12 xl:flex-row justify-evenly justify-self-center w-full px-2 text-lg sm:p-12'>
        <div className='mt-8 flex-1 '>
          <h2 className='font-bold text-3xl text-primary text-center '>General Information</h2>
          <div className='py-2'>{desc}</div>
        </div>
        <div className='mt-8 flex-1'>
          <h2 className='font-bold text-3xl text-primary text-center '>Additional Information</h2>
          <div className='py-2'>{additionalInfo}</div>
        </div>
      </div>
    </section>
  )
}

export default TourInfo