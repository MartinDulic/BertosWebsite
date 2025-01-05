import React from 'react'
import Whatsapp from '../../assets/whatsapp.png'

const WhatsappButton = () => {
  return (

    <a href='https://wa.me/385998204849?text=Hello,%20I%27m%20interested%20in%20your%20services.'>
      <img src={Whatsapp} alt="..." className=' z-10 hidden md:block fixed bottom-10 right-10 rounded-full w-20 h-20 hover:scale-110'/>
    </a>
  )
}

export default WhatsappButton