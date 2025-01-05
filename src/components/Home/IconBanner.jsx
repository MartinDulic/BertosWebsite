import React from 'react'

const IconBanner = ({icon, title, text}) => {
  return (
    <div className='w-full lg:w-fit bg-primary text-white flex flex-col items-center justify-center gap-4 text-center p-4'>
        <span className='text-6xl'>{icon}</span>
        <h2>{title}</h2>
        <p >{text}</p>
    </div>
  )
}

export default IconBanner