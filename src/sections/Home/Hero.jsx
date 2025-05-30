import React from 'react'
import HeroImage from '../../assets/HeroImage.webp'

const Hero = () => {
  return (
    <section className=' h-[calc(100vh-136px)] md:h-[calc(100vh-80px)] bg-secondary flex flex-col'> 
      <img src={HeroImage} alt="..." className='w-full md:h-2/3 md:object-cover object-top'/>
      <div className='flex-grow flex flex-col justify-evenly text-justify'>
        <h1 className='text-primary font-redRose text-3xl text-center  lg:text-4xl'>EXPLORE THE ADRIATIC</h1>
        <div className='flex items-center justify-center'>
          <p className='text-primary px-4 sm:px-8 md:px-20 pb-4 text-lg xl:px-20'>Welcome to Berto's rent a boat, your premier destination for boat rentals, where we offer a wide range of boats to suit every adventure on the sea. Our fleet is maintained to the highest standards, ensuring a safe and enjoyable experience. Our friendly and experienced staff is here to ensure you have an unforgettable adventure. From booking to return, we provide personalized service and are always ready to assist with any questions or needs you may have.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero