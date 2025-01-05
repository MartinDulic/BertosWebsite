import React from 'react'
import Uvala from '../../assets/uvala.webp'
import HeroImage from '../../assets/HeroImage.webp'

const Hero = () => {
  return (
    <section className='min-h-screen bg-secondary max-h-fit lg:max-h-none lg:min-h-none lg:h-screen'> 
      <img src={HeroImage} alt="..." className='w-full md:h-1/2 md:object-cover object-top'/>
      <h1 className='text-primary font-redRose text-3xl text-center py-8 lg:text-4xl'>EXPLORE THE ADRIATIC</h1>
      <p className='text-primary px-4 py-4 text-lg xl:px-20'>Welcome to Berto's rent a boat, your premier destination for boat rentals, where we offer a wide range of boats to suit every adventure on the sea. Our fleet is maintained to the highest standards, ensuring a safe and enjoyable experience. Our friendly and experienced staff is here to ensure you have an unforgettable adventure. From booking to return, we provide personalized service and are always ready to assist with any questions or needs you may have.</p>
    </section>
  )
}

export default Hero