import React from 'react'

const TransferStep = ({number, title, description}) => {
  return (
    <div className='text-primary mb-6'>
      <div className='text-xl xl:text-2xl font-bold'>{number}. {title}</div>
      <div className='text-lg xl:text-xl mt-1'>{description}</div>
    </div>
  )
}

export default TransferStep