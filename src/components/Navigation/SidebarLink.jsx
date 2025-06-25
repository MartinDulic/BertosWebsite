import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLink = ({ Text, Path, onClick }) => {
  return (
    <Link
      onClick={onClick} // Correct prop name
      className="w-full h-20 border-b-2 flex items-center pl-2 text-white"
      to={Path}
    >
      {Text}
    </Link>
  );
};

export default SidebarLink;
