import React from 'react';

const ImageSlide = ({ Image }) => {
  return (
    <div 
      className="w-screen h-[70vh] bg-cover bg-center"         
      style={{ backgroundImage: `url(${Image})` }}
    />
  );
};

export default ImageSlide;
