import React from 'react'
import { Link } from 'react-router-dom';

const LinkBanner = ({ image, title, linkTo, titleBottom = true, changeTitleSize = true, bgBottom = true }) => {
  return (
    <Link
      to={linkTo}
      className="w-72 max-w-sm rounded-md flex-auto sm:flex-none mx-10  h-80 sm:w-96 relative shadow-xl group overflow-hidden m-8"
    >
      {/* Background Image */}
      <div
        className={`${bgBottom ? " bg-bottom " : " bg-center "}absolute inset-0 bg-cover  transition-transform duration-500 ease-out group-hover:scale-110`}
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Tint Overlay */}
      <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 ease-out group-hover:bg-black/30"/>

      {/* Title */}
      <div className={`${titleBottom ? " items-end pb-4 " : " items-center "}absolute inset-0 flex justify-center`}>
        <p className={`${changeTitleSize ? " text-2xl sm:text-3xl " : " text-3xl "} text-white  font-bold text-shadow-md rounded-sm p-1 transition-transform duration-500 ease-out group-hover:scale-110`}>
          {title}
        </p>
      </div>
    </Link>
  );
}

export default LinkBanner