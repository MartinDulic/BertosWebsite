import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const TourHero = ({title, locations, description, basicInfo, landmarks}) => {

  // const subtitle =
  //   locations.map((location, index) => (  
  //     <p key={index}>
  //       {index > 0 && <FaLongArrowAltRight className="inline" />} {location}
  //     </p>
  //   ));
  
  const infoBulletPoints = 
    basicInfo.map((item, index) => (
      <p key={index} className='py-2 w-full max-w-lg leading-8'>
        <GoDotFill className='inline'/> <span className='font-bold'>{item.name}:</span> {item.content}
      </p>
    ));
  
  const landmarkBulletPoints = 
    landmarks.map((item, index) => (
      <p key={index} className='py-2 w-full max-w-lg leading-8'>
        <span className='font-bold'>{index+1}) </span>{item}
      </p>
    ));
    
  return (
    <section className='w-full bg-secondary p-6 lg:p-10 xl:px-60'>
      <h1 className='text-4xl text-center text-primary font-bold'>{title}</h1>
      <div className='text-lg text-primary pt-4'> 
        {/* <div className='font-bold flex flex-wrap items-center justify-center gap-2 text-xl py-2'>{subtitle}</div> */}
        <div className='py-6'>{description}</div>
        <div className='flex flex-wrap lg:justify-evenly justify-self-center w-full'>
          <div className='mt-8'>
            <div className='font-bold text-2xl'>Information</div>
            <div className='py-2'>{infoBulletPoints}</div>
          </div>
          <div className='mt-8 '>
            <div className='font-bold text-2xl'>Landmarks</div>
            <div className='py-2'>{landmarkBulletPoints}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TourHero