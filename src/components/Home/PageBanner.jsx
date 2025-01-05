import React from 'react';
import { Link } from 'react-router-dom';

const PageBanner = ({ image, title, linkTo }) => {
  return (
    <Link
      to={linkTo}
      className="w-64 flex-auto sm:flex-none mx-10 sm:mx-0 h-80 md:w-80 relative shadow-xl group overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Tint Overlay */}
      <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 ease-out group-hover:bg-black/30"></div>

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-3xl font-bold rounded-sm p-1 transition-transform duration-500 ease-out group-hover:scale-110">
          {title}
        </p>
      </div>
    </Link>
  );
};

export default PageBanner;
