import React from 'react'
import { GoDotFill } from "react-icons/go";


const BoatSpecs = ({specs}) => {
  return (
    <div className='flex flex-col items-center justify-cente '>

      <div className='w-full flex justify-center '>
        <div className=''>
          {specs.map((item, index) => (
            <p key={index}><GoDotFill className='inline' /> {item}</p>
          ))}
        </div>
      </div>

    </div>
  )
}

export default BoatSpecs