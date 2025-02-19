import React from 'react'
import TourStop from '../../components/Tour/TourStop';

const TourStops = ({tour}) => {
    
    const stops =       
    tour.stops.map((item, index) => (
      <TourStop key={index} stop={item} showArrow={index == 0 ? false : true}/>
    ));


  return (
    <section className='bg-secondary'>
      {stops}
    </section>
  )
}

export default TourStops