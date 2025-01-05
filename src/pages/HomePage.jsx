import React from 'react'
import Hero from '../sections/Home/Hero'
import Pages from '../sections/Home/Pages'
import HowItStarted from '../sections/Home/HowItStarted'
import Reviews from '../sections/Home/Reviews'
import Features from '../sections/Home/Features'
import Map from '../sections/Home/Map'
import Footer from '../components/Navigation/Footer'

const HomePage = () => {
  return (
    <>
      <Hero/>
      <Pages/>
      <Reviews/>
      <Features/>
      <Map/>
      <HowItStarted/>
      <Footer/>
    </>
  )
}

export default HomePage