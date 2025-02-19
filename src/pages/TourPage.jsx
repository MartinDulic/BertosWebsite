import React from 'react'
import TourHero from '../sections/Tour/TourHero';
import TourStops from '../sections/Tour/TourStops';
import TourInfo from '../sections/Tour/TourInfo';


const TourPage = ({tour, tourInfo}) => {


  return (
    <>
      <TourHero title={tour.name} locations={tour.locations} description={tour.desc} basicInfo={tour.basicInfo} landmarks={tour.landmarks}/>
      <h2 className='bg-secondary text-center text-4xl font-bold text-primary pb-4 pt-10'>Itinerary</h2>
      <TourStops tour={tour}/>
      <TourInfo tourInfo={tourInfo} />
    </>
  )
}

export default TourPage