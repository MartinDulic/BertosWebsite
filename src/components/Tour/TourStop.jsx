import React from 'react'
import { FaLongArrowAltDown } from "react-icons/fa";

const TourStop = ({stop, showArrow}) => {
  return (
    <div className='bg-secondary'>
        {showArrow && 
            <div className='py-8 text-6xl text-primary text-center flex items-center justify-center'>
                <FaLongArrowAltDown className=''/>
            </div>
        }
        <div className="w-full relative h-[20rem] sm:h-[24rem] md:h-[32rem] lg:h-[40rem] ">
            {/* Background Image - Stretched to fill */}
            <div
                className="absolute inset-0 bg-no-repeat bg-center"
                style={{ 
                  backgroundImage: `url(${stop.image})`,
                  backgroundSize: "100% 100%" // Stretches image to fill
                }}
            />

            {/* Tint Overlay */}
            <div className="absolute inset-0 bg-black/20"/>

            {/* Title */}
            <div className={"items-end absolute inset-0 flex justify-center"}>
                <p className={"w-full text-2xl sm:text-3xl text-white font-bold text-shadow-md rounded-sm p-4"}>
                    {stop.time}
                </p>
            </div>
        </div>
        <p className='p-4 lg:px-12 lg:pt-10 text-primary text-lg text-center'>{stop.text}</p>
    </div>
  )
}

export default TourStop