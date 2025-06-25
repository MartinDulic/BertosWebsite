import React from 'react'
import Hero from '../sections/Home/Hero'
import HowItStarted from '../sections/Home/HowItStarted'
import Features from '../sections/Home/Features'
import Map from '../sections/Home/Map'
import Reviews from '../sections/Home/Reviews'
import BannerGrid from '../sections/Shared/BannerGrid'
import LinkBanner from '../components/Fleet/LinkBanner'

import PrivateToursImg from '../assets/PrivateTours.webp'
import TransfersImg from '../assets/Transfers.webp'
import GroupToursImg from '../assets/GroupTours.webp'
import FleetTitleImg from '../assets/Fleet.webp'

const HomePage = () => {

  const pageBanners = [        
    <LinkBanner image={FleetTitleImg} title="Fleet" linkTo={"/fleet"} titleBottom={false} changeTitleSize={false} />,
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