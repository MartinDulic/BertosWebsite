import React from 'react'
import Hero from '../sections/Home/Hero'
import HowItStarted from '../sections/Home/HowItStarted'
import Features from '../sections/Home/Features'
import Map from '../sections/Home/Map'
import Reviews from '../sections/Home/Reviews'
import BannerGrid from '../sections/Shared/BannerGrid'
import LinkBanner from '../components/Fleet/LinkBanner'
import puntica from '../assets/temp/puntica_1.jpeg'
import bertoBrod1 from '../assets/temp/berto_brod1.jpg'
import bertoBrod2 from '../assets/temp/berto_brod2.jpg'
import hvarRiva from '../assets/temp/hvar_riva.jpeg'

const HomePage = () => {

  const pageBanners = [        
    <LinkBanner image={hvarRiva} title="Fleet" linkTo={"/fleet"} titleBottom={false} changeTitleSize={false}/>,
    <LinkBanner image={puntica} title="Private Tours" linkTo={"/privateTours"} titleBottom={false} changeTitleSize={false}/>,
    <LinkBanner image={bertoBrod2} title="Group Tours" linkTo={"/groupTours"} titleBottom={false} changeTitleSize={false}/>,
    <LinkBanner image={bertoBrod1} title="Transfers" linkTo={"/transfers"} titleBottom={false} changeTitleSize={false}/>,
  ];

  return (
    <>
      <Hero/>
      <BannerGrid banners={pageBanners}/>
      <Features/>
      <Reviews/>
      <Map/>
      <HowItStarted/>
    </>
  )
}

export default HomePage