import React from 'react'
import TextHero from '../sections/Shared/TextHero'
import BannerGrid from '../sections/Shared/BannerGrid'
import boats from '../data/boat/Boats'

const FleetPage = () => {
  return (
    <>
      <TextHero 
        title={"Fleet"}
        subtitle={"Looking to escape the ordinary? Choose Your Boat and Customize Your Perfect Tour! "}
        text={"Select from our wide range of boats and tailor your experience by choosing the tour that suits your adventure. You can rent a boat for half day trip, full day trip or  an extended period, with or without a skipper. Small boat you can get without license."}
      />
      <BannerGrid items={boats} linkPrefix={"/fleet"}/>
    </>
  )
}

export default FleetPage