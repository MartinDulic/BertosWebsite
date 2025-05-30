import React from 'react'
import { Link } from 'react-router-dom'

const Cta = ({text, linkTo}) => {
  return (
    <Link to={linkTo} className='border-2 border-primary px-3 py-1 rounded-sm bg-primary hover:bg-secondary text-white
      hover:text-primary '>{text}</Link>
)
}

export default Cta