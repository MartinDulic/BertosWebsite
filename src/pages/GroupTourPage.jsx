import React from 'react'
import NotFoundPage from './NotFoundPage';
import { useParams } from 'react-router-dom';
import groupTours from '../data/tours/groupTours.js'
import TourPage from './TourPage';
import groupToursInfo from '../data/tours/groupToursInfo.js'


const GroupTourPage = () => {
  const { id } = useParams();
  const tour = groupTours.find((b) => b.id === parseInt(id, 10));

  if (!tour) {
    return <NotFoundPage/>;
  }

  return (
    <TourPage tour={tour} tourInfo={groupToursInfo} />
  )
}

export default GroupTourPage