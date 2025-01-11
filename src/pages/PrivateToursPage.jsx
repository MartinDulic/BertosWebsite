import React from 'react'
import TextHero from '../sections/Shared/TextHero'
import BannerGrid from '../sections/Shared/BannerGrid'
import privateTours from '../data/privateTours'

const PrivateToursPage = () => {
  return (
  <>
    <TextHero
      title={"Private Tours"}
      subtitle={"Choose Your Perfect Boat and Select One of Our Exclusive Excursions for an Unforgettable Adventure "}
      text={"Explore the breathtaking beauty of the Central Dalmatian islands, renowned for their crystal-clear waters, picturesque landscapes, and rich history. Whether you're seeking a peaceful escape or an exciting adventure, our wide range of boats and personalized excursions offer something for everyone. Cruise with your family or friends, exploring some of the most beautiful and untouched islands in the Mediterranean."}
    />
    <BannerGrid items={privateTours} linkPrefix={"/privateTour"}/>

  </>
  )
}

export default PrivateToursPage