import React from 'react'
import Hero from '../sections/Home/Hero'
import HowItStarted from '../sections/Home/HowItStarted'
import Features from '../sections/Home/Features'
import Map from '../sections/Home/Map'
import Reviews from '../sections/Home/Reviews'
import BannerGrid from '../sections/Shared/BannerGrid'
import LinkBanner from '../components/Fleet/LinkBanner'
import PrivateToursImg from '../assets/PrivateTours.png'
import TransfersImg from '../assets/Transfers.webp'
import GroupToursImg from '../assets/GroupTours.webp'
import hvarRiva from '../assets/temp/hvar_riva.jpeg'

const HomePage = () => {

  const pageBanners = [        
    <LinkBanner image={hvarRiva} title="Fleet" linkTo={"/fleet"} titleBottom={false} changeTitleSize={false} />,
    <LinkBanner image={PrivateToursImg} title="Private Tours" linkTo={"/privateTours"} titleBottom={false} changeTitleSize={false} bgBottom={false}/>,
    <LinkBanner image={GroupToursImg} title="Group Tours" linkTo={"/groupTours"} titleBottom={false} changeTitleSize={false} bgBottom={false}/>,
    <LinkBanner image={TransfersImg} title="Transfers" linkTo={"/transfers"} titleBottom={false} changeTitleSize={false}
    />,
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