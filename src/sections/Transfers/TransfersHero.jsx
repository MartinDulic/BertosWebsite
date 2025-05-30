import React from 'react'

const TransfersHero = ({title, description}) => {
  return (
    <section className='w-full bg-secondary p-6 lg:p-10 xl:px-60'>
      <h1 className='text-4xl text-center text-primary font-bold'>{title}</h1>
      <div className='py-6 text-lg text-center text-primary pt-4'>{description}</div>


    </section>
  )
}

export default TransfersHero