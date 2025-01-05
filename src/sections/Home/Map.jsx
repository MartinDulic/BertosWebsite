import React from 'react'

const Map = () => {
  return (
    <section className='h-screen'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d523.3558258316871!2d17.020315338245815!3d43.29143108870479!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134aef408b79cfd9%3A0xe0a49a8467b35995!2sParking!5e0!3m2!1sen!2shr!4v1736107927750!5m2!1sen!2shr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </section>
  )
}

export default Map