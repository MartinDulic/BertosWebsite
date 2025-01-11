import React from 'react'
import NotFoundPage from './NotFoundPage';
import { useParams } from 'react-router-dom';
import privateTours from '../data/privateTours';
import TourPage from './TourPage';


const PrivateTourPage = () => {
  const { id } = useParams();
  const tour = privateTours.find((b) => b.id === parseInt(id, 10));

  if (!tour) {
    return <NotFoundPage/>;
  }


  return (
    <TourPage tour={tour}/>
  )
}

export default PrivateTourPage