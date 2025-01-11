import React from 'react'

const Map = () => {
  return (
    <section className='h-screen'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2904.079231906432!2d17.020357999999998!3d43.2916624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134aefefb8723bff%3A0x6ffb562d299b29fb!2sRent%20a%20boat%20Berto&#39;s!5e0!3m2!1sen!2shr!4v1736120711168!5m2!1sen!2shr"
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