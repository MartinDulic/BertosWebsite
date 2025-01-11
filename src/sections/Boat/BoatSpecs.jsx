import React from 'react'
import { GoDotFill } from "react-icons/go";


const BoatSpecs = ({specs, equipment}) => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-evenly gap-8'>

      <div className='max-w-96 w-full sm:w-fit sm:max-w-none'>
        <h2 className='text-center text-xl font-bold'>Specifications</h2>
        <div className='mt-4'>
          {specs.map((item, index) => (
            <p key={index}><GoDotFill className='inline'/> {item}</p>
          ))}
        </div>
      </div>

      <div className='max-w-96 w-full sm:w-fit sm:max-w-none'>
      <h2 className='text-center text-xl font-bold'>Equipement</h2>
        <div className='mt-4 flex flex-col items-start'>
          {equipment.map((item, index) => (
            <p key={index}><GoDotFill className='inline'/> {item}</p>
          ))}
        </div>
      </div>

    </div>
  )
}

export default BoatSpecs