import React from 'react'

const TextHero = ({title, subtitle, text}) => {
  return (
    <section className='w-full bg-secondary p-6 lg:p-10 xl:px-60'>
        <h1 className='text-4xl text-center text-primary font-bold'>{title}</h1>
        <p className='text-lg text-center text-primary pt-4'> 
          <span className='font-bold'>{subtitle}</span>
          <br/>
          <br/>
          {text}
        </p>

    </section>
  )
}

export default TextHero