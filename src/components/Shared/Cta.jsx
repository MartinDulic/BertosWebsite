import React from 'react'
import { Link } from 'react-router-dom'

const Cta = ({text, linkTo}) => {
  return (
    <Link to={linkTo} className='border-2 border-primary p-2 rounded-sm bg-primary hover:bg-secondary text-white
      hover:text-primary '>{text}</Link>
)
}

export default Cta