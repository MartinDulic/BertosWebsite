import React from 'react';
import { useParams } from 'react-router-dom';
import boats from '../data/boat/Boats.js';
import NotFoundPage from './NotFoundPage.jsx';
import Slider from '../components/Shared/Slider.jsx'
import ImageSlide from '../components/Boat/ImageSlide.jsx';
import BoatDescription from '../sections/Boat/BoatDescription.jsx';
import BoatDetails from '../sections/Boat/BoatDetails.jsx';
import BoatSpecs from '../sections/Boat/BoatSpecs.jsx';
import BoatPrices from '../sections/Boat/BoatPrices.jsx';
import Cta from '../components/Shared/Cta.jsx';

const BoatPage = () => {
  const { id } = useParams();
  const boat = boats.find((b) => b.id === parseInt(id, 10));

  if (!boat) {
    return <NotFoundPage/>;
  }

  const imageSlides = boat.images.map((item, index) => (<ImageSlide key={index} Image={item} />));
  const detailsSlides = [
    <BoatDescription Description={boat.desc}/>,
    <BoatSpecs specs={boat.specs} equipment={boat.equipment}/>,
    <BoatPrices prices={boat.prices}/>
  ];

  return (
    <section className='bg-secondary'>
      <Slider slides={imageSlides} arrowStyle={"text-white"}/>
      <BoatDetails BoatName={boat.boatName} Slides={detailsSlides}/>
      <div className='py-10 flex items-center justify-center'>
        <Cta text={"Book now"} linkTo={"https://wa.me/385998204849?text=Hello,%20I%27m%20interested%20in%20your%20services."}/>
      </div>
    </section>
  )
}

export default BoatPage