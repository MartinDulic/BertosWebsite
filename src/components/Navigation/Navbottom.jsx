import React from 'react'
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


const Navbottom = () => {
  return (
    <section className='z-10 md:hidden fixed bottom-0 h-14 pt-1 bg-secondary w-full flex border-t border-gray'>
        <a href='tel:+385998204849' className='flex flex-col items-center justify-center flex-1 text-primary'>
            <FaPhone className='flex-1'/>
            <p className='flex-1'>Phone</p>
        </a>
        <a href='https://www.instagram.com/rent_a_boat_makarska/' className='flex flex-col items-center justify-center flex-1 text-red-700'>
            <FaInstagram className='flex-1'/>
            <p className='flex-1'>Instagram</p>
        </a>
        <a href="https://wa.me/385998204849?text=Hello,%20I'm%20interested%20in%20your%20services." className='flex flex-col items-center justify-center flex-1 text-green-500'>
            <FaWhatsapp className='flex-1'/>
            <p className='flex-1'>Whatsapp</p>
        </a>
    </section>
  )
}

export default Navbottom