import React from 'react'
import { Link } from 'react-router-dom'

const SidebarLink = ({Text, Path}) => {
  return (
    <Link className='w-full h-20 border-b-2 flex items-center pl-2 text-primary' to={Path}>
      {Text}
    </Link>
  )
}

export default SidebarLink