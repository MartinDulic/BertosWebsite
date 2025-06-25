import React from 'react'
import CustomPaginationCarousel from '../../components/Shared/CostumPaginationCarousel';

const BoatDetails = ({BoatName, Slides}) => {
  const paginationLabels = ["About", "Specs"];

  return (
    <div className='text-primary w-full pt-8 flex flex-col gap-8'>
      <h1 className='font-bold text-2xl sm:text-3xl text-center'>{BoatName}</h1>
      <CustomPaginationCarousel slides={Slides} paginationLabels={paginationLabels} />
    </div>
  )
}

export default BoatDetails