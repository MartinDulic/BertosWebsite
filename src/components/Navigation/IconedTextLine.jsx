import React from 'react'

const IconedTextLine = ({icon, text, linkTo}) => {
  return (
    <a href={linkTo} className='flex gap-2 text-white items-center justify-center cursor-pointer'>
        <div>{icon}</div>
        <p>{text}</p>
    </a>
  )
}

export default IconedTextLine