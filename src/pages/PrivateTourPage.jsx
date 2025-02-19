import React from 'react'
import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import TourPage from './TourPage';
import privateTours from '../data/tours/privateTours.js';
import privateToursInfo from '../data/tours/privateToursInfo.js'

const PrivateTourPage = () => {
  const { id } = useParams();
  const tour = privateTours.find((b) => b.id === parseInt(id, 10));

  if (!tour) {
    return <NotFoundPage/>;
  }


  return (
    <TourPage tour={tour} tourInfo={privateToursInfo} />
  )
}

export default PrivateTourPage