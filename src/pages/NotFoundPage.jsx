import React from 'react'

const NotFoundPage = () => {
  return (
    <section className='h-screen w-full bg-secondary flex flex-col items-center justify-center gap-20 text-red-700'>
        <h1 className='text-4xl font-bold'>PAGE WAS NOT FOUND!</h1>
        <p>An error occured, and the page was not found. Maybe it doesent exist!</p>
    </section>
  )
}

export default NotFoundPage