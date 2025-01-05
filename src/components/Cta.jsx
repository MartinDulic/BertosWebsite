import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <Link to={"/contact"} className='border-2 border-primary p-2 rounded-sm bg-primary hover:bg-secondary text-white
        hover:text-primary '>Contact</Link>
)
}

export default Cta