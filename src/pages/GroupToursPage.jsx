import React from 'react'
import TextHero from '../sections/Shared/TextHero'
import groupTours from '../data/tours/groupTours'
import BannerGrid from '../sections/Shared/BannerGrid'

const GroupToursPage = () => {
  return (
    <>
      <TextHero 
        title={"Group tours"}
        subtitle={"Join Our Group Speedboat Tours for an Unforgettable Adventure Through the Dalmatian Islands!"}
        text={"Our guided group tours are designed to offer a unique, shared experience, where you can discover idyllic beaches, historic sites, and picturesque landscapes. "}
      />
      <BannerGrid items={groupTours} linkPrefix={"/groupTour"}/>
    </>
  )
}

export default GroupToursPage