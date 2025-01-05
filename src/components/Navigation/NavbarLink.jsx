import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLink = ({Text, Path}) => {
  return (
    <Link to={Path} className=''> 
        {Text}
    </Link>
  )
}

export default NavbarLink